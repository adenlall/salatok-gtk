import { Setting } from './../utils/setting.js';
import { Helper } from './../utils/helper.js';
import { PrayTimes } from './PrayTimes.org.js';
import { Store } from './../utils/store.js';

export class SalatAPI {
          
          setting = new Setting();
          salat;
          
          method;
          coords;
          timezone;
          format;
          dst;
          
         constructor() {
            let conf = this.setting.getSettings();
            this.method = conf.method;
            this.coords = conf.coords;
            this.format = conf.format;
            
            this.dst = conf.dst;
            if (this.setting.getConfigKey("check_timezone")) {
              this.timezone = this.setting.getConfigKey("timezone");
            }else{
              this.timezone = "auto";
            }
         }
         
         getDay(){
            this.#ini();
            let raw = this.salat.getTimes(new Date(), this.coords, this.timezone, this.dst, this.format);
            let h = new Helper();
            let data = h.Parse(raw, this.#showenabled(), this.format);
            this.setting.setSetting(data.next,"next");
            return data.data;
         }
         
         #ini(){
            this.salat = new PrayTimes();
            this.salat.setMethod(this.method);
            this.salat.adjust(Helper.getAdjusting(this.setting.getAdjusting()));
         }
         #showenabled(){
            let store = new Store();
            let data = store.read("user.json", "io.github.adenlall.salatok-gtk");
            
            return data.config.enabled
            
         }

       }
