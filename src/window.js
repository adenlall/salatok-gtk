/*
 * main.js
 *
 * Copyright 2023 aden lall <adenlall@skiff.com>
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

import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

export const Window = GObject.registerClass({
	GTypeName: 'salatWindow',
	Template: 'resource:///app/salatok/gtk/ui/window.ui',
	Children: [
	  'myPageSalats', 
	  'methodcombobox', 'higherlatitudescombobox', 'formatcombobox', 'midnightcombobox','asrcombobox',
	  'imsakadj', 'fajradj', 'duhradj', 'maghrebadj', 'ishaadj',
	  'imsak_check','fajr_check','duhr_check','asr_check','maghreb_check','isha_check',
	  'showimsak','showfajr','showsunrise','showduhr','showasr','showmaghreb','showsunset','showisha','showmidnight',
	  'long','lat',
	  'showborder',
	  'nextcount', 'nextsalat', 'nexttime',
	  'search', 'searchcontainer',
	  'timezone_check', 'timezone',
	  'welcomeicon',
	  'refreshbutton', 'stack1', 'mainstack', 'showchild', 'refresh', 'citycountry',
	],
}, class extends Gtk.ApplicationWindow {


    constructor(params) {
        super(params);

        let aboutAction = new Gio.SimpleAction({
            enabled: true,
            name: 'about'
        });
        aboutAction.connect('activate', () => this._about());
        this.add_action(aboutAction);

        let sAction = new Gio.SimpleAction({
            enabled: true,
            name: 'setsalatpage'
        });
        sAction.connect('activate', () => this._setsalatpage());
        this.add_action(sAction);

        let qAction = new Gio.SimpleAction({
            enabled: true,
            name: 'setquranpage'
        });
        qAction.connect('activate', () => this._setquranpage());
        this.add_action(qAction);

        let setAction = new Gio.SimpleAction({
            enabled: true,
            name: 'setsettingpage'
        });


        this.welcomeicon.icon_name = this.getTimeIcon(new Date().getHours());

        setAction.connect('activate', () => this._setsettingpage());
        this.add_action(setAction);
    }

    getTimeIcon(i){
        let hh = i//new Date().getHours();
        let icon;
        if (hh < 5 || hh >= 18) {
        	icon = "weather-clear-night";
        } else if (hh >= 5 && hh < 8 ) {
        	icon = "weather-fog";
		} else {
        	icon = "weather-clear";
		}
		return icon;
    }


	vfunc_close_request() {
		super.vfunc_close_request();
		this.run_dispose();
	}
	
	
  _about(){
        let aboutDialog = new Gtk.AboutDialog({
            program_name: "io.github.adenlall.salatok-gtk lite",
        	artists: ['adenlall <adenlall@skiff.com>'],
            authors: ['adenlall <adenlall@skiff.com>'],
            comments: "get muslims pray times and Quran reader",
            copyright: 'Copyright 2023 adenlall, <adenlall@skiff.com>',
            license_type: Gtk.License.GPL_3_0,
            logo_icon_name: 'io.github.adenlall.salatok-gtk.gnome',
            version: pkg.version,
            website: 'http://salatok.vercel.app/',
            website_label: 'salatok website',
            wrap_license: true,
            modal: true,
            transient_for: this,
        });
        aboutDialog.show();
  }

  _setsalatpage(){
    this.mainstack.set_visible_child_full("salat", Gtk.StackTransitionType.NONE);
  }
  _setquranpage(){
    this.mainstack.set_visible_child_full("quran", Gtk.StackTransitionType.NONE);
  }
  _setsettingpage(){
    this.mainstack.set_visible_child_full("setting", Gtk.StackTransitionType.NONE);
  }

});

