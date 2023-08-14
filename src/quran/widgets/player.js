/*
    https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/001001.mp3
    https://everyayah.com/data/images_png/1_1.png
*/
/*
 * player.js
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
import Gtk     from 'gi://Gtk';

export const QuranPlayerWidget = GObject.registerClass({
	GTypeName: 'QuranPlayerWidget',
	Template: 'resource:///app/salatok/gtk/ui/quran/player.ui',
	Children: [
		'qbackreader',
	],
}, class extends Gtk.Widget {

  vfunc_realize(){
		super.vfunc_realize();
		this.#initConnect();
  }

	#initConnect(){
		this.qbackreader.connect("clicked", ()=>{
	  		this.get_parent().set_visible_child_name("reader");
		});
	}

});
