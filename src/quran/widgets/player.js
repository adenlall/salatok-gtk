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
import Pango      from 'gi://Pango';
import Gst        from 'gi://Gst';

import { QuranData  }  from './../metadata.js';
import { Store      }  from './../../utils/store.js';
import { Setting    }  from './../../utils/setting.js';
import { Sound      }  from './gst-backend.js';

export const QuranPlayerWidget = GObject.registerClass({
	GTypeName: 'QuranPlayerWidget',
	Template: 'resource:///app/salatok/gtk/ui/quran/player.ui',
	Children: [
		'qbackreader',
		'qplay', 'qnext', 'qback',
		'qsurah', 'qayah',
		'qplabel','reciteriu'
	],
}, class extends Gtk.Widget {

  s = new Setting();
  aurl = [this.#getValid(this.s.getSetting("surahnumber"),1), this.#getValid(this.s.getSetting("ayahnumber"),1)];
  q = [];
  sound = new Sound();
  play = false;

  vfunc_realize(){
	this.#setupQ();

	this.sound.ini();

	super.vfunc_realize();

	this.#initConnect();
	this.#play();
	this.#updateMetainfo();

	this.#playbus();
  }
  vfunc_map(){
  	super.vfunc_map();
  	this.#fineUpdate();
  	if(this.#getValid(this.s.getSetting("surahnumber"),1)!==this.aurl[0]){
  		this.aurl = [this.#getValid(this.s.getSetting("surahnumber"),1), this.#getValid(this.s.getSetting("ayahnumber"),1)];
	  	this.#updateAyah();
  	}
  	this.reciter = this.s.getSetting("reciter")??"Minshawy_Mujawwad_192kbps";
  }

  #nextAyah(){
	this.sound.destroy();
	this.#isLastAyah();
	this.#updateAyah();
  }
  #backAyah(){
	this.#isFirstAyah();
	this.#updateAyah();
  }

  #play(){
  	this.sound.play(this.#getUrl());
  	this.play = true;
  }
  #pause(){
  	this.sound.pause();
  	this.play = false;
  }

  #playbus(){
	this.sound.bus = this.sound.playbin.get_bus();
	this.sound.bus.add_signal_watch();
	this.sound.bus.connect('message::eos', ()=>{
	  console.log('GSTREAM::BUS : EOS');
	  this.#nextAyah();
	});
	this.sound.bus.connect('message::error', (message)=>{
	  console.log('GSTREAM::BUS : ERROR');

	  this.sound.destroy();
	  this.#play();
	});
  }

  #updateAyah(){
  	this.#updateMetainfo();
  	this.#setAQ(QuranData.Sura[this.aurl[0]][0]+this.aurl[1]-1);
  	this.#play();
  }
  #getUrl(){
	let a = `https://everyayah.com/data/${this.reciter}/${this.#getThreeNumber(0)}${this.#getThreeNumber(1)}.mp3`;
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
			if(!this.play){
				this.#play();
			}else{
				this.#pause();
			}
		});
		this.qnext.connect("clicked", ()=>{
			this.#nextAyah();
		});
		this.qback.connect("clicked", ()=>{
			this.#backAyah();
		});
		this.reciteriu.set_active_id(""+this.s.getSetting("reciter"))
		this.reciteriu.connect("changed", (combobox)=>{
			this.reciter = combobox.get_active_id();
      this.s.setSetting(combobox.get_active_id(),"reciter");
		});
	}

	#updateMetainfo(){
		this.qayah.label = `ayyah : ${this.aurl[1]}  `;
		this.qsurah.label = QuranData.Sura[this.aurl[0]][6];
	}

	#isLastAyah(){
		if(this.aurl[1]===QuranData.Sura[this.aurl[0]][1]){
			this.aurl[0]++;
			this.aurl[1]=1;
		}else{
			this.aurl[1]++;
		}
		this.s.setSetting(this.aurl[1] ,"ayahnumber");
		this.s.setSetting(this.aurl[0] ,"surahnumber");
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
		const Gfile = Gio.File.new_for_path(GLib.build_filenamev([GLib.get_home_dir(), ".local", "share", "quran", "app.salatok.gtk", "ar.tanzil.txt"]));
		Gfile.load_contents_async(null, (file, res) => {
		  try {
			const [, contents] = file.load_contents_finish(res);
			let ss = new String(contents);
			this.q = ss.split(/\n/g);
			this.#setAQ(QuranData.Sura[this.#getValid(this.s.getSetting("surahnumber"),1)][0]+this.#getValid(this.s.getSetting("ayahnumber"),1)-1);
		  } catch (error) {
			print('ERROR!');
			console.error(error);
		  }
		});
	}
	#setAQ(i){
		this.qplabel.label = this.#getValid(this.q[i], "LOADING...");
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
