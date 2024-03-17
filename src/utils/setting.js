import { Store } from './store.js';
import { Data } from './data.js';
import { Helper } from './helper.js';


export class Setting {
    data = new Data();
    store = new Store();
    /* Getters */
    getIndexCombo(keys){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      let arr = this.data.DataData;
      for (let i = 0; i < keys.length; i++) {
        val = val[keys[i]];
      } for (let i = 0; i < keys.length; i++) {
        if(keys[i]===0){continue}
        arr = arr[keys[i]]; 
      }
      let i = Helper.getIndex(arr, val);
      return i;
    }
    getValueAdj(key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      return val.adjusting[key][0];
    }
    getBoolCheck(key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      return val.adjusting[key][1];
    }
    
    /* Setters */
    setIndexCombo(index, keys){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      if (keys.length === 2) {
        val[keys[0]][keys[1]] = this.data.DataData[keys[0]][keys[1]][index];
      } else if (keys.length === 3) {
        val[keys[0]][keys[1]][keys[2]] = this.data.DataData[keys[0]][keys[1]][index];
      }
      this.store.write("user.json", "io.github.adenlall.salatok-gtk", val);
      return true;
    }
    setValueAdj(value, key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      val.adjusting[key][0] = value;
      this.store.write("user.json", "io.github.adenlall.salatok-gtk", val);
      return true;
    }
    setBoolCheck(state, key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      val.adjusting[key][1] = state;
      this.store.write("user.json", "io.github.adenlall.salatok-gtk", val);
      return true;
    }
    setConfigKey(value, key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      val.config[key] = value;
      this.store.write("user.json", "io.github.adenlall.salatok-gtk", val);
      return true;
    }
    getConfigKey(key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      return val.config[key];
    }
    /* Salat */
    getSettings(){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      return {
        method   : val.method.method,
        coords   : val.config.coordinates,
        timezone : val.config.timezone,
        format   : val.config.format,
        dst      : val.config.dst,
      };
    }
    getAdjusting(){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      return {
        adjusting: val.adjusting,
        midnight : val.method.midnight,
        highlat : val.method.highlat
      };
    }
    setShowTime(value,salat){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      for (let i = 0; i < val.config.enabled.length; i++) {
        if(salat===val.config.enabled[i][0]){
          val.config.enabled[i][1]=value;
          break;
        }
      };
      this.store.write("user.json", "io.github.adenlall.salatok-gtk", val);
      return true;
    }
    getShowTime(salat){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      for (let i = 0; i < val.config.enabled.length; i++) {
        if(salat===val.config.enabled[i][0]){
          return val.config.enabled[i][1];
        }
      };
      console.error('NOT FOUND ( '+salat+' ) ON Setting@getShowTime');
      return false;
    }
    getValueLatLong(key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      return val.config.coordinates[key];
    }
    setValueLatLong(value, key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      val.config.coordinates[key] = value;
      this.store.write("user.json", "io.github.adenlall.salatok-gtk", val);
      return true;
    }
    getSetting(key){
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      return val.config.settings[key];
    }
    setSetting(value,key){
    	print("SET SETTING { "+value+" } ON KEY { "+key+" }")
      let val = this.store.read("user.json", "io.github.adenlall.salatok-gtk");
      val.config.settings[key] = value;
      this.store.write("user.json", "io.github.adenlall.salatok-gtk", val);
      return true;
    }
    reset(){
      let store = new Store();
      store.setup();
      this.store = new Store();
    }
    
}
