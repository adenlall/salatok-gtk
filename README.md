
<img width="200" alt="com.github.adenlall.salatok-gtk logo" src="/data/icons/scalable/io.github.adenlall.salatok-gtk.svg">

<img src="https://img.shields.io/badge/maintained-yes-blue" alt="maintained - yes"> <img alt="GitHub User's stars" src="https://img.shields.io/github/stars/adenlall">
![Flathub Version](https://img.shields.io/flathub/v/io.github.adenlall.salatok-gtk?logo=flatpak)
 <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/adenlall/salatok-gtk/total">

<a href='https://flathub.org/apps/io.github.adenlall.salatok-gtk'>
  <img width='240' alt='Download on Flathub' src='https://flathub.org/api/badge?locale=ja'/>
</a>

# Salatokapp  <a href="https://liberapay.com/adenlall/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
<div>
<img width="49%" alt="salatok app screenshot" src="https://adenlall.vercel.app/salatok-gtk/1.png">
<img width="49%" alt="salatok app screenshot" src="https://adenlall.vercel.app/salatok-gtk/2.png">
<img width="49%" alt="salatok app screenshot" src="https://adenlall.vercel.app/salatok-gtk/4.png">
<img width="49%" alt="salatok app screenshot" src="https://adenlall.vercel.app/salatok-gtk/6.png">
</div>
  
gtk4 offline app for Muslims prayer times; Get salat timing at your linux desktop with full control over the methods adjustment. this app can work without connection or sending your personal ip adress to any random api servers.

 we use nomination.openstreetmaps.org ( free and open source api ) to proved you an api that can return lat & long from your given adress.
 we recommend you to read privacy policy pf nomination api.

## Useful links

**Homepage**: https://github.com/adenlall/salatok-gtk

**Web Client**: https://salatok.vercel.app

**Report issues**: https://github.com/adenlall/salatok-gtk/issues/

**Donate**: https://ko-fi.com/adenlall/

## Installation :

### Flatpak
install it from terminal or from [flathub](https://flathub.org/apps/io.github.adenlall.salatok-gtk) 
```python
flatpak install flathub io.github.adenlall.salatok-gtk
```
then, run it with :
```python
flatpak run io.github.adenlall.salatok-gtk
```

### .deb package
 download the .deb package from releases and install it from the terminal.
         
    sudo apt install ./salatokapp_1.1.3_all.deb
 or open it in your software app (ex: GNOME Software)
 
 this package will be available soon on Debian repos


### Configuration for .deb package (NOT FLATPAK PACKAGE) :

     download the .deb package from releases and install it.
     
     for more install ressources ( optional ) :
     
          **Quran**
          
               * visit : https://tanzil.net/trans/ and select "Text" for file format, and download all you need from the list there.
               
               * then copy all .txt files downloaded into this location `$HOME/.local/share/quran/io.github.adenlall.salatok-gtk/`
               - the file name should be something like : <Language>.<Translator>.txt ex: ar.tanzil.txt
               
          **Fonts**
          
               * download or copy any .ttf or otf font files into `$HOME/.local/share/fonts/io.github.adenlall.salatok-gtk/`
               - name the file like his font name plus language of the font. ex: if you have Ubuntu Font, the name should be exactly like this : Ubunutu.latin.ttf


## Hacking

If you're unfamiliar with GJS, here are a few good places to start:

* The [beginner-level guide](https://gjs-guide.gitlab.io/) for working with GJS
* An overview of [working with GNOME APIs via GJS](https://gitlab.gnome.org/GNOME/gjs/wikis/Mapping)
* The [documentation for various GNOME libraries](https://devdocs.baznga.org/) in JavaScript

## License

This app is under [GPL-v3.0](https://www.gnu.org/licenses/gpl-3)

## Support The Project 

<a href="https://liberapay.com/adenlall/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>

 - [hooanime stream anime online](https://ar.hooanime.com)
