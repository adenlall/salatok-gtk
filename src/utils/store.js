import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import { Data } from './../utils/data.js';
import { Setting } from './../utils/setting.js';
import { QuranData } from './../quran/metadata.js';

export class Store {

  /*  Public Methods  */
  setup() {
    const metadata = Gio.File.new_for_uri("resource:///io/github/adenlall/salatok-gtk/metadata.json");
    const [, fc] = metadata.load_contents(null);
    const newv = JSON.parse(fc).app.version;

    let ff = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_user_config_dir(), "meta", "user.json"]));
    if (!ff.query_exists(null)) {
      print("FILE `user.json` NOT FOUND !");
      print("TRYING RESET");
      this.reset(newv);
    }
    let update = false;
    let s = new Setting();
    try {
      const curv = s.getSetting("appversion");
      const force = s.getSetting("reset");
      if (curv !== newv || force) {
        update = true;
      }
    } catch (err) {
      console.error('error try catch startchecks');
      console.error(err);
      update = true;
    }
    if (update) {
      print("UPDATE");
      this.reset(newv);
    }
  }
  reset(newversion) {
    print('SETUP');
    print('NEW VERSION INSTALLED : ', newversion);
    this.#cleanDir("fonts");
    this.#cleanDir("quran");
    this.#installQuran();
    this.#installFonts();
    let data = new Data();
    this.write("user.json", "meta", {
      config: data.config,
      method: data.method,
      adjusting: data.adjusting,
      check_adjusting: data.check_adjusting,
      offsets: data.offsets,
    });
    let st = new Setting();
    st.setSetting(newversion, "appversion");
  }




  ///////////////////////////////////////////////////////////
  ////INSTALL//METHODS///////////////////////////////////////
  ///////////////////////////////////////////////////////////
  #installQuran() {
    let dir = Gio.File.new_for_uri("resource:///io/github/adenlall/salatok-gtk/quran");
    let fileEnum;
    try {
      fileEnum = dir.enumerate_children('standard::name,standard::type',
        Gio.FileQueryInfoFlags.NONE, null);
    } catch (e) {
      fileEnum = null;
    }
    if (fileEnum != null) {
      let info;
      while (info = fileEnum.next_file(null)) {
        if (this.#getExtension(info.get_display_name()) === "txt") {
          this.#copy(fileEnum.get_child(info), info.get_display_name(), 'quran');
        }
      }
    }
  }
  #installFonts() {
    this.#fixDir(["fonts"], true);
    let dir = Gio.File.new_for_uri("resource:///io/github/adenlall/salatok-gtk/fonts");
    let fileEnum;
    try {
      fileEnum = dir.enumerate_children('standard::name,standard::type',
        Gio.FileQueryInfoFlags.NONE, null);
    } catch (e) {
      fileEnum = null;
    }
    if (fileEnum != null) {
      let info;
      while (info = fileEnum.next_file(null)) {
        if (this.#getExtension(info.get_display_name()) === "ttf" || this.#getExtension(info.get_display_name()) === "otf") {
					let ff = Gio.File.new_for_uri("resource:///io/github/adenlall/salatok-gtk/fonts/"+info.get_display_name());
					let dist = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_user_config_dir(), "fonts", info.get_display_name()]));
					ff.copy(dist, Gio.FileCopyFlags.OVERWRITE, null, null);
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////






  ///////////////////////////////////////////////////////////
  ////FILES//METHODS/////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  #copy(GFile, file_name, copy_dest) {
    this.#fixDir([copy_dest], true);
    let dist = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_user_config_dir(), copy_dest, file_name]));
    GFile.copy(dist, Gio.FileCopyFlags.OVERWRITE, null, null);
  }
  #getExtension(str) {
    let spl = str.split(".");
    return spl[spl.length - 1];
  }
  ///////////////////////////////////////////////////////////
  read(file, dir) {
    const filePath = GLib.build_filenamev([GLib.get_user_config_dir(), dir, file]);
    const Gfile = Gio.File.new_for_path(filePath);
    const [, fileContents] = Gfile.load_contents(null);
    const loadedData = JSON.parse(fileContents);
    return loadedData;
  }
  write(file, dir, data) {
    this.#fixDir([dir], true);
    const filePath = GLib.build_filenamev([GLib.get_user_config_dir(), dir, file]);
    let Gfile = Gio.File.new_for_path(filePath);
    Gfile.replace_contents(JSON.stringify(data), null, false, Gio.FileCreateFlags.NONE, null);
  }
  ///////////////////////////////////////////////////////////



  ///////////////////////////////////////////////////////////
  ////DIRECTORY//METHODS/////////////////////////////////////
  ///////////////////////////////////////////////////////////
  #cleanDir(name) {
    let dir = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_user_config_dir(), name]));
    let fileEnum;
    try {
      fileEnum = dir.enumerate_children('standard::name,standard::type',
        Gio.FileQueryInfoFlags.NONE, null);
    } catch (e) {
      fileEnum = null;
    }
    if (fileEnum != null) {
      let info;
      while (info = fileEnum.next_file(null)) {
        fileEnum.get_child(info).delete(null);
      }
    }
  }

  #fixDir(name, create) {
    let temp = "";
    for (let i = 0; i <= name.length; i++) {
      temp += (i===0?"":"/") + name[i];
      const directoryPath = GLib.build_filenamev([GLib.get_user_config_dir(), temp]);
      if (!GLib.file_test(directoryPath, GLib.FileTest.EXISTS)) {
        if (create) {
          this.#mkdir(temp);
        }
      }
    }
  }
  #mkdir(dir) {
    const directoryPath = GLib.build_filenamev([GLib.get_user_config_dir(), dir]);
    const result = GLib.mkdir_with_parents(directoryPath, 0o755);
    if (result === 0) {
      print('Directory created:', directoryPath);
      return true;
    } else {
      print('Failed to create directory:', directoryPath);
      return false;
    }
  }
  getAllFilesInDir(path) {
    let dir = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_user_config_dir(), path]));
    let fileEnum;
    try {
      fileEnum = dir.enumerate_children('standard::name,standard::type',
        Gio.FileQueryInfoFlags.NONE, null);
    } catch (e) {
      console.error('error');
      print(e)
      fileEnum = null;
    }
    let arr = [];
    if (fileEnum != null) {
      let info;
      while (info = fileEnum.next_file(null)) {
        let sparr = fileEnum.get_child(info).get_path().split("/");
        let name = sparr[sparr.length - 1];
        arr.push(name);
      }
      return arr;
    }
  }
  ///////////////////////////////////////////////////////////


}
