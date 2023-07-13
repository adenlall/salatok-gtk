import GLib from 'gi://GLib';
import Gio  from 'gi://Gio';
import { Data } from './../utils/data.js'

export class Store {

     /*  Public Methods  */
     setup(){
     
       if (1==1) {
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


     /*  Private Methods  */
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
               this.#mkdir("salatok");
            }
            return false;
          }else{
               return true;
          }
     }
}
