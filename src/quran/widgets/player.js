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

import GObject    from 'gi://GObject';
import Gtk        from 'gi://Gtk';
import GLib       from 'gi://GLib';
import Gio        from 'gi://Gio';
import WebKit     from 'gi://WebKit';
import Soup       from 'gi://Soup?version=3.0';
import Gdk        from 'gi://Gdk';
import Pango      from 'gi://Pango';

import { QuranData  }  from './../metadata.js';
import { Store      }  from './../../utils/store.js';
import { Setting    }  from './../../utils/setting.js';

export const QuranPlayerWidget = GObject.registerClass({
	GTypeName: 'QuranPlayerWidget',
	Template: 'resource:///app/salatok/gtk/ui/quran/player.ui',
	Children: [
		'qbackreader', 'qwebview',
		'qplay', 'qnext', 'qback',
		'qsurah', 'qayah',
		'qplabel',
	],
}, class extends Gtk.Widget {

  s = new Setting();
  stream;
  aurl = [this.#getValid(this.s.getSetting("surahnumber"),1), 1];
  webView = new WebKit.WebView();
  q = [];

  vfunc_realize(){
		super.vfunc_realize();
		this.#initConnect();
		this.#iniWebView();
		this.#updateMetainfo();
		this.#setupQ();
  }
  vfunc_map(){
  	super.vfunc_map();
  	this.#fineUpdate();
  	this.aurl = [this.#getValid(this.s.getSetting("surahnumber"),1), 1];
  	this.#updateAyah();
  }

  #iniWebView(){
	const html = `<!DOCTYPE html><html><body>
					<audio id="audio-element" src="${this.#getUrl()}"></audio>
				 </body></html>`;
	this.webView.load_html(html, null);
	this.qwebview.append(this.webView);
	this.webView.evaluate_javascript(`document.getElementById('audio-element').load();`,
									  -1, null, 'console.log("error playing the audio")', null, null);
	this.webView.evaluate_javascript("document.getElementById('audio-element').play();",
									  48, null, 'console.log("error playing the audio")', null, null);
  }

  #nextAyah(){
	this.#isLastAyah();
	this.#updateAyah();
  }
  #backAyah(){
	this.#isFirstAyah();
	this.#updateAyah();
  }

  #updateAyah(){
  	this.#updateMetainfo();
  	this.qplabel.label = this.q[QuranData.Sura[this.aurl[0]][0]+this.aurl[1]-1];
  	this.webView.evaluate_javascript("document.getElementById('audio-element').pause();", 48, null,
										 'console.log("error playing the audio")', null, null);
	this.webView.evaluate_javascript(`document.getElementById('audio-element').src="${this.#getUrl()}";
									  document.getElementById('audio-element').load();`,
									  -1, null, 'console.log("error playing the audio")', null, null);
	this.webView.evaluate_javascript("document.getElementById('audio-element').play();",
									  48, null, 'console.log("error playing the audio")', null, null);
  }
  #getUrl(){
	let a = `https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${this.#getThreeNumber(0)}${this.#getThreeNumber(1)}.mp3`;
	return a;
  }
  #getImageUrl(){
	return `https://everyayah.com/data/images_png/${this.aurl[0]}_${this.aurl[1]}.png`;
  }

  #getThreeNumber(x){
  	let a = new String(this.aurl[x]);
  	switch (a.length) {
  		case 1:
  			a = "00"+a;
  			break;
  		case 2:
  			a = "0"+a;
  			break;
  	}
  	return a;
  }

	#initConnect(){
		this.qbackreader.connect("clicked", ()=>{
	  		this.get_parent().set_visible_child_name("reader");
		});
		this.qplay.connect("clicked", ()=>{
			this.webView.evaluate_javascript("document.getElementById('audio-element').play();", 48, null, 'console.log("error playing the audio")', null, null);
		});
		this.qnext.connect("clicked", ()=>{
			this.#nextAyah();
		});
		this.qback.connect("clicked", ()=>{
			this.#backAyah();
		});
	}

	#updateMetainfo(){
		this.qayah.label = `${this.aurl[1]}`;
		this.qsurah.label = QuranData.Sura[this.aurl[0]][6];
	}

	#isLastAyah(){
		if(this.aurl[1]===QuranData.Sura[this.aurl[0]][1]){
			this.aurl[0]++;
			this.aurl[1]=1;
		}else{
			this.aurl[1]++;
		}
	}
	#isFirstAyah(){
		if(this.aurl[1]===1){
			if (this.aurl[0] !== 1) {
				this.aurl[0]--;
			}
			this.aurl[1]=1;
		}else{
			this.aurl[1]--;
		}
	}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
	#setupQ(){
		this.#iniQ();
	}
	// Quran Verse Funcs
	#iniQ(){
		const Gfile = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", "quran", "salatokapp", "ar.tanzil.txt"]));
		Gfile.load_contents_async(null, (file, res) => {
		  try {
			const [, contents] = file.load_contents_finish(res);
			let ss = new String(contents);
			this.q = ss.split(/\n/g);
			this.qplabel.label = this.q[QuranData.Sura[this.#getValid(this.s.getSetting("surahnumber"),1)][0]];
		  } catch (error) {
			print('ERROR!');
			console.error(error);
		  }
		});
	}
	#setAQ(i){
		this.qplabel.label = this.q[i];
	}
	#getValid(a,b){
	    if (a!==0&&!a) {
	      return b;
	    }
	    return a;
	}
	#fineUpdate(){
		let context = this.qplabel.get_pango_context();
		let fd = context.get_font_description();
		fd.set_family(this.#getValid(this.s.getSetting("fonttype_name")));
		fd.set_size(this.#getValid(this.s.getSetting("fontsize"), 20) *Pango.SCALE);
		context.set_font_description(fd);
		this.qplabel.justify = this.#getValid(this.s.getSetting("qjustify"), 3);
	}

});
