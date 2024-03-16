<img width="200" alt="app.salatok.gtk logo" src="/data/icons/app.salatok.gtk.gnome.svg">

<a href="https://www.linux.org/" title="Go to Linux homepage"><img src="https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white" alt="OS - Linux"></a> <a href="https://www.javascript.com/" title="Go to JavaScript homepage"><img src="https://img.shields.io/badge/Made_with-JavaScript-blue?logo=javascript&logoColor=white" alt="Made with JavaScript"></a> <img src="https://img.shields.io/badge/maintained-yes-blue" alt="maintained - yes"> <img alt="GitHub User's stars" src="https://img.shields.io/github/stars/adenlall">


<img alt="GitHub" src="https://img.shields.io/github/license/adenlall/salatok-gtk"> <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/adenlall/salatok-gtk/total">


# Salatokapp  <a href="https://liberapay.com/adenlall/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>

<img alt="salatok app screenshot" src="https://adenlall.vercel.app/screenshot2.png">
  
gtk4 app for Muslims prayer times; Get salat timing at your linux desktop with full control over the methods adjustment. this app can work without connection or sending your personal ip adress to any random api servers.

 we use nomination.openstreetmaps.org ( free and open source api ) to proved you an api that can return lat & long from your given adress.
 we recommend you to read privacy policy pf nomination api.

## Useful links

**Homepage**: https://github.com/adenlall/salatok-gtk

**Report issues**: https://github.com/adenlall/salatok-gtk/issues/

**Donate**: https://ko-fi.com/adenlall/

## Installation

For Debian/Ubuntu :

     download the .deb package from releases and install it.
     
     for more install ressources ( optional ) :
     
          **Quran**
          
               * visit : https://tanzil.net/trans/ and select "Text" for file format, and download all you need from the list there.
               
               * then copy all .txt files downloaded into this location `$HOME/.local/share/quran/app.salatok.gtk/`
               - the file name should be something like : <Language>.<Translator>.txt ex: ar.tanzil.txt
               
          **Fonts**
          
               * download or copy any .ttf or otf font files into `$HOME/.local/share/fonts/app.salatok.gtk/`
               - name the file like his font name plus language of the font. ex: if you have Ubuntu Font, the name should be exactly like this : Ubunutu.latin.ttf

               
For non Debian-based distros :

     Until now This application is only available for the Dibian, we encourage you to package it for you distro by following the steps below :
     
     * clone the repo and open it with GNOME-builder and buildit from there.
     
     * for packaging you should folow your distro policy and guidelines.

## Hacking

If you're unfamiliar with GJS, here are a few good places to start:

* The [beginner-level guide](https://gjs-guide.gitlab.io/) for working with GJS
* An overview of [working with GNOME APIs via GJS](https://gitlab.gnome.org/GNOME/gjs/wikis/Mapping)
* The [documentation for various GNOME libraries](https://devdocs.baznga.org/) in JavaScript

## License

This app is under [GPL-v3.0](https://www.gnu.org/licenses/gpl-3)

## Support The Project 

<a href="https://liberapay.com/adenlall/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
