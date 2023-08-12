import GLib from 'gi://GLib';
import Gio  from 'gi://Gio';
import { Data      } from './../utils/data.js';
import { Setting   } from './../utils/setting.js';
import { QuranData } from './../quran/metadata.js';

export class Store {

     /*  Public Methods  */
     setup(){
	 	const metadata = Gio.File.new_for_uri("resource:///app/salatok/gtk/metadata.json");
		const [, fc] = metadata.load_contents(null);
		const newv = JSON.parse(fc).app.version;

		let ff = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_user_config_dir(), "salatokapp", "user.json"]));
     	if (!ff.query_exists(null)){
     		print("FILE `user.json` NOT FOUND !");
     		print("TRYING RESET");
     		this.reset(newv);
     	}
     	let update = false;
     	let s = new Setting();
		try{
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
     reset(newversion){
      	print('SETUP');
      	print('NEW VERSION INSTALLED : ', newversion);
      	this.#cleanDir("fonts");
      	this.#cleanDir("quran");
        this.#installQuran();
        this.#installFonts();
        let data = new Data();
        this.write("user.json", "salatokapp", {
          config: data.config,
          method: data.method,
          adjusting: data.adjusting,
          check_adjusting: data.check_adjusting,
          offsets: data.offsets,
        });
     	let st = new Setting();
     	st.setSetting(newversion ,"appversion");
     }
     write(file, dir, jsonData){
          let exist = this.#checkDir(dir, true);
          const filePath = GLib.build_filenamev([GLib.get_user_config_dir(), dir, file]);
          let Gfile = Gio.File.new_for_path(filePath);
          Gfile.replace_contents(JSON.stringify(jsonData), null, false, Gio.FileCreateFlags.NONE, null);
     }
     read(file, dir){
          const filePath = GLib.build_filenamev([GLib.get_user_config_dir(), dir, file]);
          const Gfile = Gio.File.new_for_path(filePath);
          const [, fileContents] = Gfile.load_contents(null);
          const loadedData = JSON.parse(fileContents);
          return loadedData;
     }
     getAllFilesInDir(path){
          let dir = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), path]));
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
              while (info = fileEnum.next_file(null)){
                  let sparr = fileEnum.get_child(info).get_path().split("/");
                  let name = sparr[sparr.length-1];
                  arr.push(name);
              }
              return arr;
          }
     }


     /*  Private Methods  */
     #installQuran(){
        let dir = Gio.File.new_for_uri("resource:///app/salatok/gtk/quran");
        let fileEnum;
        try {
            fileEnum = dir.enumerate_children('standard::name,standard::type',
                                              Gio.FileQueryInfoFlags.NONE, null);
        } catch (e) {
            fileEnum = null;
        }
        if (fileEnum != null) {
            let info;
            while (info = fileEnum.next_file(null)){
                if (this.#getExtension(info.get_display_name())==="txt") {
                    this.#write_File_to_local_dir(fileEnum.get_child(info), info.get_display_name());
                }
            }
        }
     }
     #installFonts(){
        let dir = Gio.File.new_for_uri("resource:///app/salatok/gtk/fonts");
        let fileEnum;
        try {
            fileEnum = dir.enumerate_children('standard::name,standard::type',
                                              Gio.FileQueryInfoFlags.NONE, null);
        } catch (e) {
            fileEnum = null;
        }
        if (fileEnum != null) {
			this.#checkDirDir([".local","share","fonts", "salatokapp"], true);
            let info;
            while (info = fileEnum.next_file(null)){
                if (this.#getExtension(info.get_display_name())==="ttf" || this.#getExtension(info.get_display_name())==="otf" ){
					let ff = Gio.File.new_for_uri("resource:///app/salatok/gtk/fonts/"+info.get_display_name());
					let dist = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", "fonts", "salatokapp", info.get_display_name()]));
					ff.copy(dist, Gio.FileCopyFlags.OVERWRITE, null, null);
                }
            }
        }
     }
     #mkdir(name){
          const directoryPath = GLib.build_filenamev([GLib.get_user_config_dir(), name]);
          const result = GLib.mkdir_with_parents(directoryPath, 0o755);
          if (result === 0) {
            print('Directory created:', directoryPath);
            return true;
          } else {
            print('Failed to create directory:', directoryPath);
            return false;
          }
     }

     #checkDir(name, create){
          const directoryPath = GLib.build_filenamev([GLib.get_user_config_dir(), name]);
          if (!GLib.file_test(directoryPath, GLib.FileTest.EXISTS)) {
            if(create){
               this.#mkdir("salatokapp");
            }
            return false;
          }else{
               return true;
          }
     }
     #cleanDir(name){
     	let dir = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", name, "salatokapp"]));
        let fileEnum;
        try {
            fileEnum = dir.enumerate_children('standard::name,standard::type',
                                              Gio.FileQueryInfoFlags.NONE, null);
        } catch (e) {
            fileEnum = null;
        }
        if (fileEnum != null) {
            let info;
            while (info = fileEnum.next_file(null)){
            	fileEnum.get_child(info).delete(null);
            }
        }
     }
     #checkDirDir(name, create){
          let temp = "";
          for(let i=0; i<=name.length; i++){
               const directoryPath = GLib.build_filenamev([GLib.get_home_dir(), temp]);
               if (!GLib.file_test(directoryPath, GLib.FileTest.EXISTS)) {
                 if(create){
                    this.#mkfontdir(temp);
                 }
               }
               temp = temp +"/"+ name[i];
          }
     }
     #mkfontdir(name){
          const directoryPath = GLib.build_filenamev([GLib.get_home_dir(), name]);
          const result = GLib.mkdir_with_parents(directoryPath, 0o755);
          if (result === 0) {
            print('Directory created:', directoryPath);
            return true;
          } else {
            print('Failed to create directory:', directoryPath);
            return false;
          }
     }
     #write_File_to_local_dir(GFile, file){
          this.#checkDirDir([".local","share","quran", "salatokapp"], true);
          let dist = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", "quran", "salatokapp", file]));
          GFile.copy(dist, Gio.FileCopyFlags.OVERWRITE, null, null);
     }
     #getExtension(str){
        let spl = str.split(".");
        return spl[spl.length-1];
     }
}
