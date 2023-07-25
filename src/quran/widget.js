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

import GObject from 'gi://GObject';
import Gtk     from 'gi://Gtk';
import Gio     from 'gi://Gio';
import GLib    from 'gi://GLib';
import Pango   from 'gi://Pango';

import { QuranData  }  from './metadata.js';
import { Store      }  from './../utils/store.js';
import { Setting    }  from './../utils/setting.js';

export const QuranWidget = GObject.registerClass({
	GTypeName: 'QuranWidget',
	Template: 'resource:///app/salatok/gtk/ui/quran.ui',
	Children: [
	  'quran', 'qnext', 'qprev',
	  'qcombo', 'qlanguage', 'fonttype', 'fontsize', 'qselectable'
	],
}, class extends Gtk.Widget {


  s = new Setting();

  q = "";
  qindex = 1;
  qq = "Loading...";
  nn;
  ttt = [];

  vfunc_realize(){
		super.vfunc_realize();
		this.quran.selectable = this.#getValid(this.s.getSetting("qselectable"),false);
		this.#initConnect();
		this.#hardUpdate();
		this.#fineUpdate();
  }

  #initConnect(){

    this.qselectable.set_active(this.#getValid(this.s.getSetting("qselectable"),false));
	  this.qselectable.connect("toggled", (check)=>{
	    this.s.setSetting(check.get_active(), "qselectable");
	    this.quran.selectable = check.get_active();
	  });

    let store = new Store();
    try {
      let quran_s = store.getAllFilesInDir(".local/share/quran/salatokapp/");
      for (let i = 0; i < quran_s.length; i++) {
        this.qlanguage.append(""+i, quran_s[i].split(".")[0]+" - "+quran_s[i].split(".")[1]);
      }
      let fonts_s = store.getAllFilesInDir(".local/share/fonts/salatokapp/");
      for (let i = 0; i < fonts_s.length; i++) {
      	this.ttt.push(fonts_s[i].split(".")[0]);
        this.fonttype.append(""+i, fonts_s[i].split(".")[0]+" - "+fonts_s[i].split(".")[1][0]+fonts_s[i].split(".")[1][1]);
      }
    } catch (err) {
        console.error(err);
    }

    this.qlanguage.set_active(this.#getValid(""+this.s.getSetting("qlanguage"),"0"));
	  this.qlanguage.connect("changed", (combo)=>{this.s.setSetting(combo.get_active(), "qlanguage");this.#hardUpdate();});

	  this.fonttype.set_active(this.ttt[this.#getValid(this.s.getSetting("fonttype"),0)]);
	  this.fonttype.connect("changed", (combo)=>{
	  	this.quran.label = "loading...";
	    this.s.setSetting(combo.get_active(), "fonttype");
	    this.#fineUpdate();
	    this.quran.label = this.qq;
	  });

	  this.fontsize.set_value(this.s.getSetting("fontsize"));
	  this.fontsize.connect("value-changed", (range)=>{
	    this.quran.label = "loading...";
	    this.s.setSetting(range.get_value(), "fontsize");
	    this.#fineUpdate();
	    this.quran.label = this.qq;
	  });

    this.qnext.connect("clicked", ()=>{this.#setQ(this.qindex+1)});
    this.qprev.connect("clicked", ()=>{this.#setQ(this.qindex-1)});
    this.qcombo.connect("changed", (combobox)=>{this.#setQ(combobox.get_active_id())});

  }

  #setupCombo(){
    for (let i = 1; i < QuranData.Sura.length-1; i++) {
      this.qcombo.append(""+i, QuranData.Sura[i][5]);
    }
  }

  #hardUpdate(){
    let s = new Store();
	let arr = s.getAllFilesInDir(".local/share/quran/salatokapp/");
    this.nn = arr[this.#getValid(this.s.getSetting("qlanguage"),0)];
    const Gfile = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", "quran", "salatokapp", this.#getValid(this.nn, 0)]));
    Gfile.load_contents_async(null, (file, res) => {
      try {
        const [, contents] = file.load_contents_finish(res);
        let ss = new String(contents);
        this.q = ss.split(/\n/g);
        this.#setupCombo();
        this.#setQ(this.qindex);
      } catch (error) {
        print('ERROR!');
        console.error(error);
      }
    });
  }

	#fineUpdate(){
    let context = this.quran.get_pango_context();
    let fd = context.get_font_description();
    fd.set_family(this.ttt[this.#getValid(this.s.getSetting("fonttype"),0)]);
    fd.set_size(this.#getValid(this.s.getSetting("fontsize"), 20) *Pango.SCALE);
    context.set_font_description(fd);
	}


	#setQ(surah){
		surah = parseInt(surah);
		if (surah > 0 && surah <= 114) {
			this.quran.label = "Loading...";
			let tts = QuranData.Sura[surah];
			this.qq="";
			let ayyah = 0;
			for (let i = tts[0]; i < tts[0]+tts[1]; i++) {
				this.qq = this.qq + " ["+ayyah+"] " + this.q[i];
				ayyah = ayyah+1;
			}
			this.quran.label = this.qq;
			this.qcombo.set_active_id(""+surah);
			this.qindex = surah;
		}
	}

	#getValid(a,b){
	    if (!a) {
	      return b;
	    }
	    return a;
	}

});
