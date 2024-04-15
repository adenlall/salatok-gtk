# Compile the resources
gnome.compile_resources(
	application_id + '.data',
	application_id + '.data.gresource.xml',
	gresource_bundle: true,
	install: true,
	install_dir: get_option('datadir') / application_id
)

# Install the settings schema
install_data(
	application_id + '.gschema.xml',
	install_dir: get_option('datadir') / 'glib-2.0' / 'schemas'
)

# Translate and install the desktop file
i18n.merge_file(
	type: 'desktop',
	input: configure_file(
		input: application_id + '.desktop',
		output: application_id + '.desktop.in',
		configuration: {
			'APP_ID': application_id,
			'BINDIR': get_option('prefix') / get_option('bindir')
		}
	),
	output: application_id + '.desktop',
	po_dir: meson.project_source_root() / 'po',
	install: true,
	install_dir: get_option('datadir') / 'applications'
)

# Install the D-Bus service file
configure_file(
	input: application_id + '.service',
	output: application_id + '.service',
	configuration: {
		'APP_ID': application_id,
		'BINDIR': get_option('prefix') / get_option('bindir')
	},
	install: true,
	install_dir: get_option('datadir') / 'dbus-1' / 'services'
)

# Translate and install the AppStream metadata
i18n.merge_file(
	input: configure_file(
		input: application_id + '.appdata.xml',
		output: application_id + '.appdata.xml.in',
		configuration: {
			'APP_ID': application_id,
		}
	),
	output: application_id + '.appdata.xml',
	type: 'xml',
	po_dir: meson.project_source_root() / 'po',
	install: true,
	install_dir: get_option('datadir') / 'metainfo'

)

subdir('icons')
