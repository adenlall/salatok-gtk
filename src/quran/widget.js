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
import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';

import { QuranData  }  from './metadata.js';

export const QuranWidget = GObject.registerClass({
	GTypeName: 'QuranWidget',
	Template: 'resource:///app/salatok/gtk/ui/quran.ui',
	Children: [
	  'quran', 'qnext', 'qprev', 'qfull',
	  'qcombo',
	],
}, class extends Gtk.Widget {

  q;
  qindex;

  vfunc_realize(){
		super.vfunc_realize();
    const Gfile = Gio.File.new_for_uri("resource:///app/salatok/gtk/quran/index-u.txt");
    Gfile.load_contents_async(null, (file, res) => {
      try {
        const [, contents] = file.load_contents_finish(res);
        this.q = contents.toString().split(/\n/g);
		    this.#setupCombo();
        this.#setQ(1);
        this.qnext.connect("clicked", ()=>{this.#setQ(this.qindex+1)});
        this.qprev.connect("clicked", ()=>{this.#setQ(this.qindex-1)});
        this.qcombo.connect("changed", (combobox)=>{this.#setQ(combobox.get_active_id())});
      } catch (error) {
        console.error(error);
      }
    });
  }

  #setupCombo(){
    for (let i = 1; i < QuranData.Sura.length-1; i++) {
      this.qcombo.append(""+i, QuranData.Sura[i][5])
    }
  }

	#setQ(surah){
	  surah = parseInt(surah);
	  if (surah > 0 && surah <= 114) {
	    let tts = QuranData.Sura[surah];
	    let q="";
	    let ayyah = 0;
	    for (let i = tts[0]; i < tts[0]+tts[1]; i++) {
          q = q + " ["+ayyah+"] " + this.q[i];
          ayyah = ayyah+1;
      }
      this.qfull.label = "ayyat : "+tts[1];
      this.quran.label = q;
      this.qcombo.set_active_id(""+surah);
      this.qindex = surah;
	  }
	}

});
