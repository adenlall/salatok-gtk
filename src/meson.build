# Configure the entry point
configure_file(
	input : application_id + '.js',
	output : application_id,
	configuration: {
		'GJS': find_program('gjs').full_path(),
		'PACKAGE_NAME': application_id,
		'PACKAGE_VERSION': meson.project_version(),
		'PREFIX': get_option('prefix'),
		'LIBDIR': get_option('prefix') / get_option('libdir')
	},
	install_dir: get_option('bindir'),
	install_mode: 'rwxr-xr-x'
)

# Compile the resources
app_resource = gnome.compile_resources(
	application_id + '.src',
	application_id + '.src.gresource.xml',
	gresource_bundle: true,
	install: true,
	install_dir : get_option('datadir') / application_id
)