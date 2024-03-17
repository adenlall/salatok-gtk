# Define our project
project(
	'io.github.adenlall.salatok-gtk',
	version: '1.1.3 unstable',
	license: ['GPL-3.0-or-later'],
	meson_version: '>= 0.59.0'
)

APP_ID = 'io.github.adenlall.salatok-gtk'
 APP_BIN = 'io.github.adenlall.salatok-gtk'

# Import the modules
gnome = import('gnome')
i18n = import('i18n')

# Load instructions from subdirectories
subdir('data')
subdir('src')

# Post installation tasks 
gnome.post_install(
	glib_compile_schemas: true,
	gtk_update_icon_cache: true,
	update_desktop_database: true
)
