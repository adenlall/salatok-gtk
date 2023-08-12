import Gtk from 'gi://Gtk';
import Soup from 'gi://Soup?version=2.4';
import Pango from 'gi://Pango';
import { Setting } from './setting.js';

export class Nomination {

    setting = new Setting();

     getByQ(q){
          let uri = `https://nominatim.openstreetmap.org/search?q=${q}&addressdetails=1&limit=3&format=json`;
          let res = this.Response(uri);
          let data = this.#parse(res);
          return data;
     }


     Response(uri){
          try {
            let ss = new Soup.Session();
            ss.user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9";
            let msg = Soup.Message.new('GET', uri);
            ss.send_message(msg);
            return JSON.parse(msg.response_body.data);
          } catch (err) {
              print('Promise Error Nomination@Response');
              console.error(err);
          }
     }


     #parse(res){
          let arr=[];
		      if (res) {
		      for (let i = 0; i<res.length; i++ ) {
		           let region = this.#getOr(res[i].address, ["region","state","province","place"]);
		           let city = this.#getOr(res[i].address, ["city","town","village"]);
		           let country = res[i].address.country;
		           if (!res[i].lat || !res[i].lon || !city || !region || !country) {
		                if (res[i].importance >= 0.5) {
		                let city = this.#getValid(res[i].address,"city");
		                let region = this.#getValid(res[i].address,"region");
		                arr.push({"name": res[i].display_name,"city":city,"region":region,"country":this.#getValid(res[i].address, "country"), "lat":res[i].lat, "long":res[i].lon});
		               }
		              //console.error(res[i]);
		              continue;
		           }
		           arr.push({"name": res[i].display_name,"city":city,"region":region,"country":country, "lat":res[i].lat, "long":res[i].lon});
		      }
          }
          return arr;
     }


     #getValid(data, key){
        if(key=="city"){
          if (!this.#getOr(data, ["city","town","village"])) {
            let cc = this.#getOr(data, ["region","state","province", "place"]);
            if (cc) {
              return cc;
            }
            console.error('undifined Not city Not region at Nomination@#getValid');
            console.error({data_related: data});
            return "[undefined]";
          }
          return this.#getOr(data, ["city","town","village"]);
        }
        if(key=="region"){
          if (!this.#getOr(data, ["region","state","province", "place"])) {
            let rr = this.#getOr(data, ["city","town","village"]);
            if (rr) {
              return rr
            }
            console.error('undifined Not city Not region at Nomination@#getValid');
            console.error({data_related: data});
            return "[undefined]";
          }
          return this.#getOr(data, ["region","state","province", "place"]);
        }
        if(key==="country"){
          if (!this.#getOr(data, ["country","country_code"])) {
            console.error('error no country found in : ', data);
            return "[undefined]";
          }
          return this.#getOr(data, ["country","country_code"]);
        }
     }

     #getOr(res, arr){
      for (let i = 0; i < arr.length; i++) {
        if (res[arr[i]]) {
          return res[arr[i]];
        }
      }
     }

     widget(res){
      if (res.length !== 0) {
        let container = this.#getListBox();
        container.hexpand= 1;
        for (let i = 0; i < res.length; i++) {
                let box = this.#getBox();
                let item = this.#getBox();
                let cl = this.#getBox();
                cl.orientation = 0;
                cl.orientation = 1;
                cl.hexpand= 1;
                cl.spacing= 8;
                item.hexpand= 1;
                item.append(new Gtk.Label({ellipsize: Pango.EllipsizeMode.END, label : res[i].city, halign:Gtk.Align.START, valign:Gtk.Align.CENTER, hexpand: 1, vexpand: 1}));
                item.append(new Gtk.Label({ellipsize: Pango.EllipsizeMode.END, label : res[i].region, halign:Gtk.Align.END, vexpand: 1,}));
                item.append(new Gtk.Label({label : " - "+res[i].country, halign:Gtk.Align.END, vexpand: 1,}));
                cl.append(item);
                let button = new Gtk.Button({label : "set this location"});
                button.connect("clicked", ()=>{this.setting.setValueLatLong(res[i].lat,0);this.setting.setValueLatLong(res[i].long,1);this.setting.setConfigKey(res[i].city, "city");this.setting.setConfigKey(res[i].country, "country");});
                cl.append(button);
            box.append(cl);
            container.append(box);
        }
        return container;
      }
     }

     #getListBox(){
        let box = new Gtk.ListBox();
        box.selection_mode = "none";
        box.show_separators= 1;
        box.add_css_class("rich-list");
        box.vexpand = 1;
        box.orientation = 1;
        return box;
     }

     #getListBoxRow(){
        let box = new Gtk.Box();
        box.activatable = 0;
        box.vexpand = 1;
        box.orientation = 1;
        return box;
     }

     #getBox(){
        let box = new Gtk.Box();
        return box;
     }


}
