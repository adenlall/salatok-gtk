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

import { QuranData  }  from './../metadata.js';

export const QuranPlayerWidget = GObject.registerClass({
	GTypeName: 'QuranPlayerWidget',
	Template: 'resource:///app/salatok/gtk/ui/quran/player.ui',
	Children: [
		'qbackreader', 'qwebview',
		'qplay', 'qnext', 'qback',
		'qsurah', 'qayah',
	],
}, class extends Gtk.Widget {

  stream;
  aurl = [1, 1];
  webView = new WebKit.WebView();

  vfunc_realize(){
		super.vfunc_realize();
		this.#initConnect();
		this.#iniWebView();
		this.#updateMetainfo();
  }


  #iniWebView(){
	const html = `<!DOCTYPE html><html><body>
					<audio id="audio-element" src="${this.#getUrl()}"></audio>
				 </body></html>`;
	this.webView.load_html(html, null);
	this.qwebview.append(this.webView);
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
		this.qayah.label = this.#getThreeNumber(this.aurl[1]);
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

});
