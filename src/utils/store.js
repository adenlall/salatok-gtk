import GLib from 'gi://GLib';
import Gio  from 'gi://Gio';
import { Data      } from './../utils/data.js';
import { QuranData } from './../quran/metadata.js';

export class Store {

     /*  Public Methods  */
     setup(){

       if (!this.#checkDir("salatokapp", true)) {
          console.log("setup started");
            this.#installQuran();
            for (let i = 0; i < QuranData.Fonts.length; i++) {
              this.installFonts(QuranData.Fonts[i]);
            }

            let data = new Data();
            this.write("user.json", "salatokapp", {
              config: data.config,
              method: data.method,
              adjusting: data.adjusting,
              check_adjusting: data.check_adjusting,
              offsets: data.offsets,
            });
       }
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
     installFonts(file){
          this.#checkDirDir([".local","share","fonts", "salatokapp"], true);
          let ff = Gio.File.new_for_uri("resource:///app/salatok/gtk/fonts/"+file+".ttf");
          let dist = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", "fonts", "salatokapp", file+".ttf"]));

          ff.copy(dist, Gio.FileCopyFlags.OVERWRITE, null, null);
     }
     getAllFilesInDir(path){
          let dir = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), path]));
          let fileEnum;
          try {
              fileEnum = dir.enumerate_children('standard::name,standard::type',
                                                Gio.FileQueryInfoFlags.NONE, null);
          } catch (e) {
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
