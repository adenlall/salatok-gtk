/*
 * main.js
 *
 * Copyright 2023 aden lall <lalladen@naver.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import Gtk from 'gi://Gtk';
import GObject from 'gi://GObject';
import Gdk from 'gi://Gdk';
import Gio from 'gi://Gio';

import { Window     }  from './window.js';
import { Core       }  from './salat/core.js';
import { Store      }  from './utils/store.js';
import { Setting    }  from './utils/setting.js';
import { Nomination }  from './utils/nomination.api.js';

import './quran/widget.js';


export const salatApp = GObject.registerClass({
	GTypeName: 'salatApp'
}, class extends Gtk.Application {
  
  window;
  setting = new Setting();
  
  vfunc_startup() {
    this.setting.reset();
		this.initActions(this, [
            {
                name: 'setsalatpage',
                activate: this._setsalatpage,
            },{
                name: 'setquranpage',
                activate: this._setquranpage,
            },{
                name: 'setsettingpage',
                activate: this._setsettingpage,
            },{
                name: 'dev',
                activate: this._dev,
            }
    ]);
		super.vfunc_startup();
		this.#loadStylesheet();
	}

	vfunc_activate() {
    this.window = new Window({ application: this });
    if (this.setting.getSetting("firsttime")) {
  		this._setsettingpage();
  		this.setting.setSetting(false,"firsttime")
  	}
    this.window.stack1.set_visible_child_full(this.setting.getSetting("showchild") === 1 ? "salatsday" : "next", Gtk.StackTransitionType.NONE);
	  this.window.stack1.set_transition_type(Gtk.StackTransitionType.SLIDE_UP_DOWN);
	  this.window.mainstack.set_transition_type(Gtk.StackTransitionType.SLIDE_LEFT_RIGHT);
		let core = new Core();
	  this.window.myPageSalats.append(core.widget());
		this.window.present();

		this.#ini();
	}
  #loadStylesheet() {
		const provider = new Gtk.CssProvider();
		provider.load_from_resource('/app/salatok/gtk/css/salatWidget.css');
    Gtk.StyleContext.add_provider_for_display(
			Gdk.Display.get_default(),
			provider,
			Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
		);
	}
	
	#ini(){
	this.setting = new Setting();
    this.window.refresh.connect("clicked", ()=>{this.updateFine()});
	  this.window.timezone_check.set_active(this.setting.getConfigKey("check_timezone"));
	  this.window.long.set_value(this.setting.getConfigKey("timezone"));
	  
	  this.window.citycountry.label = this.setting.getConfigKey("city")+' - '+this.setting.getConfigKey("country");
	  
	  this.window.timezone_check.connect("state-set", (check, state)=>{this.setting.setConfigKey(state,"check_timezone");this.updateFine();});
	  this.window.timezone.connect("value-changed", (spiner)=>{this.setting.setConfigKey(spiner.get_value(), "timezone");this.updateFine();});
	  
	  this.window.search.connect("search-changed",(s)=>{this.searchLocation(s.get_text())});
	  
	  this.window.long.set_value(this.setting.getValueLatLong(1));
	  this.window.lat.set_value(this.setting.getValueLatLong(0));
	  this.window.long.connect("value-changed", (spiner)=>{this.setting.setValueLatLong(spiner.get_value(), 1);this.updateFine();});
	  this.window.lat.connect("value-changed", (spiner)=>{this.setting.setValueLatLong(spiner.get_value(), 0);this.updateFine();});
	  
	  // ini comboboxes
	  this.window.methodcombobox.set_active(this.setting.getIndexCombo(["method","method"]));
	  this.window.formatcombobox.set_active(this.setting.getIndexCombo(["config","format"]));
	  this.window.midnightcombobox.set_active(this.setting.getIndexCombo(["method","midnight"]));
	  this.window.higherlatitudescombobox.set_active(this.setting.getIndexCombo(["method","highlat"]));
	  this.window.asrcombobox.set_active(this.setting.getIndexCombo(["adjusting","asr", 0]));
	  // ini adjusting values
	  this.window.imsakadj.set_value(this.setting.getValueAdj("imsak"));
	  this.window.fajradj.set_value(this.setting.getValueAdj("fajr"));
	  this.window.duhradj.set_value(this.setting.getValueAdj("dhuhr"));
	  this.window.maghrebadj.set_value(this.setting.getValueAdj("maghrib"));
	  this.window.ishaadj.set_value(this.setting.getValueAdj("isha"));
	  // ini adjusting checkboxes
	  this.window.imsak_check.set_active(this.setting.getBoolCheck("imsak"));
	  this.window.fajr_check.set_active(this.setting.getBoolCheck("fajr"));
	  this.window.duhr_check.set_active(this.setting.getBoolCheck("dhuhr"));
	  this.window.asr_check.set_active(this.setting.getBoolCheck("asr"));
	  this.window.maghreb_check.set_active(this.setting.getBoolCheck("maghrib"));
	  this.window.isha_check.set_active(this.setting.getBoolCheck("isha"));
	  
	  // hundel adjusting checkboxes
	  this.window.imsak_check.connect("state-set", (check, state)=>{this.setting.setBoolCheck(state,"imsak");this.updateFine();});
	  this.window.fajr_check.connect("state-set", (check, state)=>{this.setting.setBoolCheck(state,"fajr");this.updateFine();});
	  this.window.duhr_check.connect("state-set", (check, state)=>{this.setting.setBoolCheck(state,"dhuhr");this.updateFine();});
	  this.window.asr_check.connect("state-set", (check, state)=>{this.setting.setBoolCheck(state,"asr");this.updateFine();});
	  this.window.maghreb_check.connect("state-set", (check, state)=>{this.setting.setBoolCheck(state,"maghrib");this.updateFine();});
	  this.window.isha_check.connect("state-set", (check, state)=>{this.setting.setBoolCheck(state,"isha");this.updateFine();});
	  // hundel adjusting values
	  this.window.imsakadj.connect("value-changed", (spiner)=>{this.setting.setValueAdj(spiner.get_value(),"imsak");this.updateFine();});
	  this.window.fajradj.connect("value-changed", (spiner)=>{this.setting.setValueAdj(spiner.get_value(),"fajr");this.updateFine();});
	  this.window.duhradj.connect("value-changed", (spiner)=>{this.setting.setValueAdj(spiner.get_value(),"dhuhr");this.updateFine();});
	  this.window.maghrebadj.connect("value-changed", (spiner)=>{this.setting.setValueAdj(spiner.get_value(),"maghrib");this.updateFine();});
	  this.window.ishaadj.connect("value-changed", (spiner)=>{this.setting.setValueAdj(spiner.get_value(),"isha");this.updateFine();});
	  
	  // hundel comboboxes
	  this.window.methodcombobox.connect("changed", (combobox)=>{this.setting.setIndexCombo(combobox.get_active(),["method","method"]);this.updateFine();});
	  this.window.formatcombobox.connect("changed", (combobox)=>{this.setting.setIndexCombo(combobox.get_active(),["config","format"]);this.updateFine();});
	  this.window.midnightcombobox.connect("changed", (combobox)=>{this.setting.setIndexCombo(combobox.get_active(),["method","midnight"]);this.updateFine();});
	  this.window.higherlatitudescombobox.connect("changed", (combobox)=>{this.setting.setIndexCombo(combobox.get_active(),["method","highlat"]);this.updateFine();});
	  this.window.asrcombobox.connect("changed", (combobox)=>{this.setting.setIndexCombo(combobox.get_active(),["adjusting","asr", 0]);this.updateFine();});
	  
	  // set salat this.settings
	  this.window.showimsak.set_active(this.setting.getShowTime("imsak"));
	  this.window.showfajr.set_active(this.setting.getShowTime("fajr"));
	  this.window.showsunrise.set_active(this.setting.getShowTime("sunrise"));
	  this.window.showduhr.set_active(this.setting.getShowTime("dhuhr"));
	  this.window.showasr.set_active(this.setting.getShowTime("asr"));
	  this.window.showsunset.set_active(this.setting.getShowTime("sunset"));
	  this.window.showmaghreb.set_active(this.setting.getShowTime("maghrib"));
	  this.window.showisha.set_active(this.setting.getShowTime("isha"));
	  this.window.showmidnight.set_active(this.setting.getShowTime("midnight"));
	
	  // ini salat this.settings
	  this.window.showimsak.connect_after("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"imsak"); this.updateCore();});
	  this.window.showfajr.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"fajr"); this.updateCore();});
	  this.window.showsunrise.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"sunrise");this.updateCore();});
	  this.window.showduhr.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"dhuhr");this.updateCore();});
	  this.window.showasr.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"asr");this.updateCore();});
	  this.window.showsunset.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"sunset");this.updateCore();});
	  this.window.showmaghreb.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"maghrib");this.updateCore();});
	  this.window.showisha.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"isha");this.updateCore();});
	  this.window.showmidnight.connect("toggled", (check)=>{this.setting.setShowTime(check.get_active(),"midnight");this.updateCore();});
	  
	  this.window.showborder.set_active(this.setting.getSetting("showborder"));
	  this.window.showborder.connect("toggled", (check)=>{this.setting.setSetting(check.get_active(),"showborder");this.updateCore();});
	  
	   // hundel comboboxes
	  this.window.showchild.set_active(this.setting.getSetting("showchild") === 1 ? 1 : 0);
	  this.window.showchild.connect("changed", (combobox)=>{this.setting.setSetting(combobox.get_active(),"showchild")});
	 
	  this.window.nextsalat.label = this.setting.getSetting("next").name;
	  this.window.nextcount.label = this.setting.getSetting("next").countdown;
	  this.window.nexttime.label = this.setting.getSetting("next").time;
	  this.window.refreshbutton.connect("clicked", ()=>{this.updateCore()});
	  
	}
	
	searchLocation(q){
	  if (this.window.searchcontainer.get_first_child()) {
	    this.window.searchcontainer.remove(this.window.searchcontainer.get_first_child());
	  }
	  if (this.window.searchcontainer.get_last_child()) {
	    this.window.searchcontainer.remove(this.window.searchcontainer.get_last_child());
	  }
	  if (q&&q!=="") {
		  let n = new Nomination();
		  let dd = n.widget(n.getByQ(q));
		  if (dd) {
			  this.window.searchcontainer.append(dd);
		  }
	  }
	}
	
	updateCore(){
	  if (this.window.myPageSalats.get_first_child()) {
  	  this.window.myPageSalats.remove(this.window.myPageSalats.get_first_child());
	  }
	  let core = new Core();
	  this.window.myPageSalats.append(core.widget());
	  this.window.nextsalat.label = this.setting.getSetting("next").name;
	  this.window.nextcount.label = this.setting.getSetting("next").countdown;
	  this.window.nexttime.label = this.setting.getSetting("next").time;
	}
	updateFine(){
	  // TODO
	  this.updateCore();
	}
	
	initActions(actionMap, simpleActionEntries, defaultContext = actionMap) {
    simpleActionEntries.forEach(function (entry) {
        const {
            activate = null,
            change_state = null,
            context = defaultContext,
            ...params
        } = entry;
        const action = new Gio.SimpleAction(params);

        if (activate)
            action.connect('activate', activate.bind(context));
        if (change_state)
            action.connect('change-state', change_state.bind(context));
        actionMap.add_action(action);
    });
  }
  _setsalatpage(){
    this.window.mainstack.set_visible_child_full("salat", Gtk.StackTransitionType.NONE);
  }
  _setquranpage(){
    this.window.mainstack.set_visible_child_full("quran", Gtk.StackTransitionType.NONE);
  }
  _setsettingpage(){
    this.window.mainstack.set_visible_child_full("setting", Gtk.StackTransitionType.NONE);
  }
  _about(){
        let aboutDialog = new Gtk.AboutDialog({
            authors: ['Giovanni Campagna <gcampagna@src.gnome.org>'],
            translator_credits: "translator-credits",
            program_name: "JS Application",
            comments: "Demo JS Application and template",
            copyright: 'Copyright 2013 The gjs developers',
            license_type: Gtk.License.GPL_2_0,
            logo_icon_name: 'com.example.Gtk.JSApplication',
            version: pkg.version,
            website: 'http://www.example.com/gtk-js-app/',
            wrap_license: true,
            modal: true,
            transient_for: this,
        });
        aboutDialog.show();
  }
  _dev(){
    console.log('https://github.com/adenlall');
  }

});




