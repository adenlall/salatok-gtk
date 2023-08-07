# Salatokapp

GNOME app for Muslims prayer times; Get salat timing at your linux desktop with full control over the methods adjustment. this app can work without connection or sending your personal ip adress to any random api servers.
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
               visit : https://tanzil.net/trans/ and select "Text" for file format, and download all you need from the list there.
               then copy all .txt files downloaded into this location `$HOME/.local/share/quran/salatokapp/`
          **Fonts**
               download or copy any .ttf or otf font files into `$HOME/.local/share/fonts/salatokapp/`
For distros non Debian based :
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
