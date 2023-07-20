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
	  'quran', 'qnext', 'qprev', 'qfull',
	  'qcombo',
	],
}, class extends Gtk.Widget {


  s = new Setting();

  q = "";
  qindex = 0;
  qq = "Loading...";

  vfunc_realize(){
		super.vfunc_realize();
		let s = new Store();
		let arr = s.getAllFilesInDir(".local/share/quran/salatokapp/");
    const Gfile = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", "quran", "salatokapp", arr[this.#getValid(""+this.s.getSetting("qlanguage"),0)]]));
    Gfile.load_contents_async(null, (file, res) => {
      try {
        const [, contents] = file.load_contents_finish(res);
        let ss = new String(contents);
        this.q = ss.split(/\n/g);
		    this.#setupCombo();
        this.#setQ(1);
        this.qnext.connect("clicked", ()=>{this.#setQ(this.qindex+1)});
        this.qprev.connect("clicked", ()=>{this.#setQ(this.qindex-1)});
        this.qcombo.connect("changed", (combobox)=>{this.#setQ(combobox.get_active_id())});
      } catch (error) {
        console.log('*********************');
        console.log('errrrrrrrrrrrrrrrror');
        console.log('*********************');
        console.error(error);
      }
    });

  }

  vfunc_map(){
    super.vfunc_map();
    this.#setUpdate();
  }

  #setupCombo(){
    console.log('this.qcombo : ', this.qcombo);

    for (let i = 1; i < QuranData.Sura.length-1; i++) {
      this.qcombo.append(""+i, QuranData.Sura[i][5]);
    }
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
      this.qfull.label = "ayyat : "+tts[1];
      this.quran.label = this.qq;
      this.qcombo.set_active_id(""+surah);
      this.qindex = surah;
	  }
	}

	#setUpdate(){

    this.quran.label = "Loading...";

    let context = this.quran.get_pango_context();
    let fd = context.get_font_description();

    fd.set_family(this.#getValid(QuranData.Fonts[this.s.getSetting("fonttype")], "system"));
    fd.set_size(this.#getValid(this.s.getSetting("fontsize"), 20) *Pango.SCALE);

    //this.quran.set_css_classes([""]);
    //this.quran.add_css_class("line-h-"+this.#getValid(""+this.s.getSetting("lineheight"), "4")+"0");

    context.set_font_description(fd);

    this.quran.label = this.qq;
	}

	#getValid(a,b){
	    if (!a) {
	      return b;
	    }
	    return a;
	}

});
