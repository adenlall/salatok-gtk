import Gtk from 'gi://Gtk';
import { SalatAPI } from './api.js';
import { Setting  } from './../utils/setting.js';
export class Core {
         
         box;
         setting = new Setting();
         widget(){
            this.#iniBox();
            let api = new SalatAPI();
            let data = api.getDay();
            
            for(let i = 0; i < data.length; i++){
                this.box.append(this.#Item(data[i][0], data[i][1], data[i][2], data[i][3]));
            }
            return this.box;
         }
         
         #iniBox(){
            this.box = new Gtk.Box();
            this.box.width_request = 226;
            this.box.halign = Gtk.Align.CENTER;
            this.box.valign = Gtk.Align.CENTER;
            this.box.hexpand = 1;
            this.box.vexpand = 1;
            this.box.orientation = 1;
            this.box.spacing = 20;
         }
         
         #Item(salat, time, countdown, type){
            let menubutton = new Gtk.MenuButton();
            
            menubutton.add_css_class("no-pad");
            menubutton.add_css_class("pad-meduim");
            if (this.setting.getSetting("showborder")) {
              menubutton.add_css_class(type+"-md");
            }
            menubutton.focusable = 0;
            menubutton.focus_on_click = 0;
            menubutton.popover = this.#popover(countdown, type);

            let box = new Gtk.Box();
            box.width_request = 241;
            box.halign = Gtk.Align.CENTER;
            box.valign = Gtk.Align.CENTER;
            box.hexpand = 1;
            box.vexpand = 1;
            box.homogeneous = 1;

            let label1 = new Gtk.Label({label: time, halign:Gtk.Align.END, hexpand: 1, vexpand: 1,});
            let label2 = new Gtk.Label({label: salat, halign:Gtk.Align.START, valign:Gtk.Align.CENTER, hexpand: 1, vexpand: 1,})
            label1.add_css_class(type);
            label1.add_css_class("bold");
            label2.add_css_class("bold");
            box.append(label2);
            box.append(label1);

            menubutton.child = box;

            return menubutton;
            
         }
         
         #popover(countdown, type){
            let popover   = new Gtk.Popover();
            let box       = new Gtk.Box();
            let label     = new Gtk.Label({label: countdown});
            
            box.halign = Gtk.Align.CENTER;
            box.valign = Gtk.Align.CENTER;
            box.hexpand = 1;
            box.vexpand = 1;
            box.homogeneous = 1;
            
            popover.child = box;
            box.append(new Gtk.Label({label: type+" :"}));
            box.append(label);
            
            label.add_css_class("bold");
            label.add_css_class(type+"-thin");
            popover.add_css_class("shadow");
            
            return popover;
         }
         
         
       }
       
