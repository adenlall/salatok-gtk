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
	  'nextcount', 'nextsalat',
	  'search', 'searchcontainer',
	  'timezone_check', 'timezone',
	  'refreshbutton', 'stack1', 'mainstack', 'showchild', 'refresh', 'citycountry',
	  'fontsize', 'fonttype', 'qlanguage',
	],
}, class extends Gtk.Window {

	vfunc_close_request() {
		super.vfunc_close_request();
		this.run_dispose();
	}
	
	
});

