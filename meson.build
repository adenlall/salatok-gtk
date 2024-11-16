project(
  'io.github.adenlall.salatok-gtk',
  version: '1.5.0',
  license: 'GPL2+',
  meson_version: '>= 0.63.0',
)


if get_option('profile') == 'development'
  profile = ''
  name_suffix = ' (Development)'
  vcs_tag = run_command('git', 'rev-parse', '--short', 'HEAD', check: true).stdout().strip()
  if vcs_tag == ''
    version_suffix = '-devel'
  else
    version_suffix = '-@0@'.format (vcs_tag)
  endif
else
  profile = ''
  name_suffix = ''
  version_suffix = ''
endif

application_id = 'io.github.adenlall.salatok-gtk'

gettext_package = application_id
salatok_prefix = get_option('prefix')
salatok_bindir = salatok_prefix / get_option('bindir')
salatok_libdir = salatok_prefix / get_option('libdir')
salatok_datadir = salatok_prefix / get_option('datadir')
salatok_pkgdatadir = salatok_datadir / application_id

salatok_schemadir = salatok_datadir / 'glib-2.0' / 'schemas'

po_dir = meson.project_source_root() / 'po'

gjs_dep = dependency('gjs-1.0', version: '>= 1.54.0')
gjs_console = gjs_dep.get_variable(pkgconfig: 'gjs_console')

# Lets check whether the dependencies exist
dependency('gio-2.0', version: '>= 2.43.4')
dependency('glib-2.0', version: '>= 2.39.3')
dependency('gtk4', version: '>= 4.4.0')
dependency('gstreamer-player-1.0', version: '>= 1.12')
dependency('libadwaita-1', version: '>=  1.2.alpha')
dependency('gobject-introspection-1.0', version: '>= 1.31.6')
dependency('gstreamer-1.0')
dependency('gstreamer-pbutils-1.0')


gnome = import('gnome')
i18n = import('i18n')

subdir('data')
subdir('src')

gnome.post_install(
  glib_compile_schemas: true,
  gtk_update_icon_cache: true,
  update_desktop_database: true,
)
