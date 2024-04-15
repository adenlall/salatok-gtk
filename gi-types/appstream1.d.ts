/**
 * AppStream 1.0
 *
 * Generated from 0.16.4
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as Gio from "gio2";

export const IMAGE_LARGE_HEIGHT: number;
export const IMAGE_LARGE_WIDTH: number;
export const IMAGE_NORMAL_HEIGHT: number;
export const IMAGE_NORMAL_WIDTH: number;
export const IMAGE_THUMBNAIL_HEIGHT: number;
export const IMAGE_THUMBNAIL_WIDTH: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export function agreement_kind_from_string(value: string): AgreementKind;
export function agreement_kind_to_string(value: AgreementKind): string;
export function artifact_kind_from_string(kind: string): ArtifactKind;
export function artifact_kind_to_string(kind: ArtifactKind): string;
export function bundle_kind_from_string(bundle_str: string): BundleKind;
export function bundle_kind_to_string(kind: BundleKind): string;
export function checksum_kind_from_string(kind_str: string): ChecksumKind;
export function checksum_kind_to_string(kind: ChecksumKind): string;
export function color_kind_from_string(str: string): ColorKind;
export function color_kind_to_string(kind: ColorKind): string;
export function color_scheme_kind_from_string(str: string): ColorSchemeKind;
export function color_scheme_kind_to_string(kind: ColorSchemeKind): string;
export function component_kind_from_string(kind_str: string): ComponentKind;
export function component_kind_to_string(kind: ComponentKind): string;
export function component_scope_from_string(scope_str: string): ComponentScope;
export function component_scope_to_string(scope: ComponentScope): string;
export function content_rating_system_format_age(system: ContentRatingSystem, age: number): string | null;
export function content_rating_system_from_locale(locale: string): ContentRatingSystem;
export function content_rating_system_get_csm_ages(system: ContentRatingSystem): number[];
export function content_rating_system_get_formatted_ages(system: ContentRatingSystem): string[];
export function content_rating_system_to_string(system: ContentRatingSystem): string | null;
export function content_rating_value_from_string(value: string): ContentRatingValue;
export function content_rating_value_to_string(value: ContentRatingValue): string;
export function control_kind_from_string(kind_str: string): ControlKind;
export function control_kind_to_string(kind: ControlKind): string;
export function display_length_kind_from_string(kind_str: string): DisplayLengthKind;
export function display_length_kind_to_string(kind: DisplayLengthKind): string;
export function display_side_kind_from_string(kind_str: string): DisplaySideKind;
export function display_side_kind_to_string(kind: DisplaySideKind): string;
export function format_kind_from_string(kind_str: string): FormatKind;
export function format_kind_to_string(kind: FormatKind): string;
export function format_version_from_string(version_str: string): FormatVersion;
export function format_version_to_string(version: FormatVersion): string;
export function get_appstream_version(): string;
export function get_current_distro_component_id(): string;
export function get_default_categories(with_special: boolean): Category[];
export function get_license_url(license: string): string;
export function gstring_replace(string: GLib.String, find: string, replace: string): number;
export function gstring_replace2(string: GLib.String, find: string, replace: string, limit: number): number;
export function icon_kind_from_string(kind_str: string): IconKind;
export function icon_kind_to_string(kind: IconKind): string;
export function image_kind_from_string(kind: string): ImageKind;
export function image_kind_to_string(kind: ImageKind): string;
export function internet_kind_from_string(kind_str: string): InternetKind;
export function internet_kind_to_string(kind: InternetKind): string;
export function is_spdx_license_exception_id(exception_id: string): boolean;
export function is_spdx_license_expression(license: string): boolean;
export function is_spdx_license_id(license_id: string): boolean;
export function issue_kind_from_string(kind_str: string): IssueKind;
export function issue_kind_to_string(kind: IssueKind): string;
export function issue_severity_from_string(str: string): IssueSeverity;
export function issue_severity_to_string(severity: IssueSeverity): string;
export function launchable_kind_from_string(kind_str: string): LaunchableKind;
export function launchable_kind_to_string(kind: LaunchableKind): string;
export function license_is_free_license(license: string): boolean;
export function license_is_metadata_license(license: string): boolean;
export function license_is_metadata_license_id(license_id: string): boolean;
export function license_to_spdx_id(license: string): string;
export function markup_convert_simple(markup: string): string;
export function markup_strsplit_words(text: string, line_len: number): string[];
export function merge_kind_from_string(kind_str: string): MergeKind;
export function merge_kind_to_string(kind: MergeKind): string;
export function metadata_error_quark(): GLib.Quark;
export function pool_error_quark(): GLib.Quark;
export function provided_kind_from_string(kind_str: string): ProvidedKind;
export function provided_kind_to_l10n_string(kind: ProvidedKind): string;
export function provided_kind_to_string(kind: ProvidedKind): string;
export function relation_compare_from_string(compare_str: string): RelationCompare;
export function relation_compare_to_string(compare: RelationCompare): string;
export function relation_compare_to_symbols_string(compare: RelationCompare): string;
export function relation_error_quark(): GLib.Quark;
export function relation_item_kind_from_string(kind_str: string): RelationItemKind;
export function relation_item_kind_to_string(kind: RelationItemKind): string;
export function relation_kind_from_string(kind_str: string): RelationKind;
export function relation_kind_to_string(kind: RelationKind): string;
export function release_kind_from_string(kind_str: string): ReleaseKind;
export function release_kind_to_string(kind: ReleaseKind): string;
export function release_url_kind_from_string(kind_str: string): ReleaseUrlKind;
export function release_url_kind_to_string(kind: ReleaseUrlKind): string;
export function releases_kind_from_string(kind_str: string): ReleasesKind;
export function releases_kind_to_string(kind: ReleasesKind): string;
export function screenshot_kind_from_string(kind: string): ScreenshotKind;
export function screenshot_kind_to_string(kind: ScreenshotKind): string;
export function size_kind_from_string(size_kind: string): SizeKind;
export function size_kind_to_string(size_kind: SizeKind): string;
export function spdx_license_detokenize(license_tokens: string): string | null;
export function spdx_license_tokenize(license: string): string[] | null;
export function suggested_kind_from_string(kind_str: string): SuggestedKind;
export function suggested_kind_to_string(kind: SuggestedKind): string;
export function system_info_error_quark(): GLib.Quark;
export function translation_kind_from_string(kind_str: string): TranslationKind;
export function translation_kind_to_string(kind: TranslationKind): string;
export function urgency_kind_from_string(urgency_kind: string): UrgencyKind;
export function urgency_kind_to_string(urgency_kind: UrgencyKind): string;
export function url_kind_from_string(url_kind: string): UrlKind;
export function url_kind_to_string(url_kind: UrlKind): string;
export function utils_build_data_id(
    scope: ComponentScope,
    bundle_kind: BundleKind,
    origin: string,
    cid: string,
    branch: string
): string;
export function utils_compare_versions(a: string, b: string): number;
export function utils_data_id_equal(data_id1: string, data_id2: string): boolean;
export function utils_data_id_get_cid(data_id: string): string;
export function utils_data_id_hash(data_id: string): number;
export function utils_data_id_match(data_id1: string, data_id2: string, match_flags: DataIdMatchFlags): boolean;
export function utils_data_id_valid(data_id: string): boolean;
export function utils_error_quark(): GLib.Quark;
export function utils_guess_scope_from_path(path: string): ComponentScope;
export function utils_install_metadata_file(
    location: MetadataLocation,
    filename: string,
    origin: string,
    destdir: string
): boolean;
export function utils_is_category_name(category_name: string): boolean;
export function utils_is_desktop_environment(desktop: string): boolean;
export function utils_is_platform_triplet(triplet: string): boolean;
export function utils_is_tld(tld: string): boolean;
export function utils_locale_is_compatible(locale1?: string | null, locale2?: string | null): boolean;
export function utils_posix_locale_to_bcp47(locale: string): string;
export function utils_sort_components_into_categories(
    cpts: Component[],
    categories: Category[],
    check_duplicates: boolean
): void;
export function validator_error_quark(): GLib.Quark;
export function vercmp(a: string, b: string, flags: VercmpFlags): number;
export function vercmp_simple(a: string, b: string): number;
export function vercmp_test_match(ver1: string, compare: RelationCompare, ver2: string, flags: VercmpFlags): boolean;
export function version_string(): string;
export function video_codec_kind_from_string(str: string): VideoCodecKind;
export function video_codec_kind_to_string(kind: VideoCodecKind): string;
export function video_container_kind_from_string(str: string): VideoContainerKind;
export function video_container_kind_to_string(kind: VideoContainerKind): string;

export namespace AgreementKind {
    export const $gtype: GObject.GType<AgreementKind>;
}

export enum AgreementKind {
    UNKNOWN = 0,
    GENERIC = 1,
    EULA = 2,
    PRIVACY = 3,
}

export namespace ArtifactKind {
    export const $gtype: GObject.GType<ArtifactKind>;
}

export enum ArtifactKind {
    UNKNOWN = 0,
    SOURCE = 1,
    BINARY = 2,
}

export namespace BundleKind {
    export const $gtype: GObject.GType<BundleKind>;
}

export enum BundleKind {
    UNKNOWN = 0,
    PACKAGE = 1,
    LIMBA = 2,
    FLATPAK = 3,
    APPIMAGE = 4,
    SNAP = 5,
    TARBALL = 6,
    CABINET = 7,
}

export namespace CheckResult {
    export const $gtype: GObject.GType<CheckResult>;
}

export enum CheckResult {
    ERROR = 0,
    UNKNOWN = 1,
    FALSE = 2,
    TRUE = 3,
}

export namespace ChecksumKind {
    export const $gtype: GObject.GType<ChecksumKind>;
}

export enum ChecksumKind {
    NONE = 0,
    SHA1 = 1,
    SHA256 = 2,
    BLAKE2B = 3,
    BLAKE2S = 4,
}

export namespace ColorKind {
    export const $gtype: GObject.GType<ColorKind>;
}

export enum ColorKind {
    UNKNOWN = 0,
    PRIMARY = 1,
}

export namespace ColorSchemeKind {
    export const $gtype: GObject.GType<ColorSchemeKind>;
}

export enum ColorSchemeKind {
    UNKNOWN = 0,
    LIGHT = 1,
    DARK = 2,
}

export namespace ComponentKind {
    export const $gtype: GObject.GType<ComponentKind>;
}

export enum ComponentKind {
    UNKNOWN = 0,
    GENERIC = 1,
    DESKTOP_APP = 2,
    CONSOLE_APP = 3,
    WEB_APP = 4,
    ADDON = 5,
    FONT = 6,
    CODEC = 7,
    INPUT_METHOD = 8,
    FIRMWARE = 9,
    DRIVER = 10,
    LOCALIZATION = 11,
    SERVICE = 12,
    REPOSITORY = 13,
    OPERATING_SYSTEM = 14,
    ICON_THEME = 15,
    RUNTIME = 16,
}

export namespace ComponentScope {
    export const $gtype: GObject.GType<ComponentScope>;
}

export enum ComponentScope {
    UNKNOWN = 0,
    SYSTEM = 1,
    USER = 2,
}

export namespace ContentRatingSystem {
    export const $gtype: GObject.GType<ContentRatingSystem>;
}

export enum ContentRatingSystem {
    UNKNOWN = 0,
    INCAA = 1,
    ACB = 2,
    DJCTQ = 3,
    GSRR = 4,
    PEGI = 5,
    KAVI = 6,
    USK = 7,
    ESRA = 8,
    CERO = 9,
    OFLCNZ = 10,
    RUSSIA = 11,
    MDA = 12,
    GRAC = 13,
    ESRB = 14,
    IARC = 15,
}

export namespace ContentRatingValue {
    export const $gtype: GObject.GType<ContentRatingValue>;
}

export enum ContentRatingValue {
    UNKNOWN = 0,
    NONE = 1,
    MILD = 2,
    MODERATE = 3,
    INTENSE = 4,
}

export namespace ControlKind {
    export const $gtype: GObject.GType<ControlKind>;
}

export enum ControlKind {
    UNKNOWN = 0,
    POINTING = 1,
    KEYBOARD = 2,
    CONSOLE = 3,
    TOUCH = 4,
    GAMEPAD = 5,
    VOICE = 6,
    VISION = 7,
    TV_REMOTE = 8,
    TABLET = 9,
}

export namespace DisplayLengthKind {
    export const $gtype: GObject.GType<DisplayLengthKind>;
}

export enum DisplayLengthKind {
    UNKNOWN = 0,
    XSMALL = 1,
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
    XLARGE = 5,
}

export namespace DisplaySideKind {
    export const $gtype: GObject.GType<DisplaySideKind>;
}

export enum DisplaySideKind {
    UNKNOWN = 0,
    SHORTEST = 1,
    LONGEST = 2,
}

export namespace FormatKind {
    export const $gtype: GObject.GType<FormatKind>;
}

export enum FormatKind {
    UNKNOWN = 0,
    XML = 1,
    YAML = 2,
    DESKTOP_ENTRY = 3,
}

export namespace FormatStyle {
    export const $gtype: GObject.GType<FormatStyle>;
}

export enum FormatStyle {
    UNKNOWN = 0,
    METAINFO = 1,
    CATALOG = 2,
    COLLECTION = 2,
}

export namespace FormatVersion {
    export const $gtype: GObject.GType<FormatVersion>;
}

export enum FormatVersion {
    V0_6 = 0,
    V0_7 = 1,
    V0_8 = 2,
    V0_9 = 3,
    V0_10 = 4,
    V0_11 = 5,
    V0_12 = 6,
    V0_13 = 7,
    V0_14 = 8,
    V0_15 = 9,
    V0_16 = 10,
    UNKNOWN = 11,
}

export namespace IconKind {
    export const $gtype: GObject.GType<IconKind>;
}

export enum IconKind {
    UNKNOWN = 0,
    CACHED = 1,
    STOCK = 2,
    LOCAL = 3,
    REMOTE = 4,
}

export namespace ImageKind {
    export const $gtype: GObject.GType<ImageKind>;
}

export enum ImageKind {
    UNKNOWN = 0,
    SOURCE = 1,
    THUMBNAIL = 2,
}

export namespace InternetKind {
    export const $gtype: GObject.GType<InternetKind>;
}

export enum InternetKind {
    UNKNOWN = 0,
    ALWAYS = 1,
    OFFLINE_ONLY = 2,
    FIRST_RUN = 3,
}

export namespace IssueKind {
    export const $gtype: GObject.GType<IssueKind>;
}

export enum IssueKind {
    UNKNOWN = 0,
    GENERIC = 1,
    CVE = 2,
}

export namespace IssueSeverity {
    export const $gtype: GObject.GType<IssueSeverity>;
}

export enum IssueSeverity {
    UNKNOWN = 0,
    ERROR = 1,
    WARNING = 2,
    INFO = 3,
    PEDANTIC = 4,
}

export namespace LaunchableKind {
    export const $gtype: GObject.GType<LaunchableKind>;
}

export enum LaunchableKind {
    UNKNOWN = 0,
    DESKTOP_ID = 1,
    SERVICE = 2,
    COCKPIT_MANIFEST = 3,
    URL = 4,
}

export namespace MergeKind {
    export const $gtype: GObject.GType<MergeKind>;
}

export enum MergeKind {
    NONE = 0,
    REPLACE = 1,
    APPEND = 2,
    REMOVE_COMPONENT = 3,
}

export class MetadataError extends GLib.Error {
    static $gtype: GObject.GType<MetadataError>;

    constructor(options: { message: string; code: number });
    constructor(copy: MetadataError);

    // Fields
    static FAILED: number;
    static PARSE: number;
    static FORMAT_UNEXPECTED: number;
    static NO_COMPONENT: number;
    static VALUE_MISSING: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace MetadataLocation {
    export const $gtype: GObject.GType<MetadataLocation>;
}

export enum MetadataLocation {
    SHARED = 0,
    STATE = 1,
    CACHE = 2,
    USER = 3,
}

export class PoolError extends GLib.Error {
    static $gtype: GObject.GType<PoolError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PoolError);

    // Fields
    static FAILED: number;
    static TARGET_NOT_WRITABLE: number;
    static INCOMPLETE: number;
    static COLLISION: number;
    static OLD_CACHE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ProvidedKind {
    export const $gtype: GObject.GType<ProvidedKind>;
}

export enum ProvidedKind {
    UNKNOWN = 0,
    LIBRARY = 1,
    BINARY = 2,
    MEDIATYPE = 3,
    FONT = 4,
    MODALIAS = 5,
    PYTHON_2 = 6,
    PYTHON = 7,
    DBUS_SYSTEM = 8,
    DBUS_USER = 9,
    FIRMWARE_RUNTIME = 10,
    FIRMWARE_FLASHED = 11,
    ID = 12,
}

export namespace RelationCompare {
    export const $gtype: GObject.GType<RelationCompare>;
}

export enum RelationCompare {
    UNKNOWN = 0,
    EQ = 1,
    NE = 2,
    LT = 3,
    GT = 4,
    LE = 5,
    GE = 6,
}

export class RelationError extends GLib.Error {
    static $gtype: GObject.GType<RelationError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RelationError);

    // Fields
    static FAILED: number;
    static BAD_VALUE: number;
    static NOT_IMPLEMENTED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace RelationItemKind {
    export const $gtype: GObject.GType<RelationItemKind>;
}

export enum RelationItemKind {
    UNKNOWN = 0,
    ID = 1,
    MODALIAS = 2,
    KERNEL = 3,
    MEMORY = 4,
    FIRMWARE = 5,
    CONTROL = 6,
    DISPLAY_LENGTH = 7,
    HARDWARE = 8,
    INTERNET = 9,
}

export namespace RelationKind {
    export const $gtype: GObject.GType<RelationKind>;
}

export enum RelationKind {
    UNKNOWN = 0,
    REQUIRES = 1,
    RECOMMENDS = 2,
    SUPPORTS = 3,
}

export namespace ReleaseKind {
    export const $gtype: GObject.GType<ReleaseKind>;
}

export enum ReleaseKind {
    UNKNOWN = 0,
    STABLE = 1,
    DEVELOPMENT = 2,
}

export namespace ReleaseUrlKind {
    export const $gtype: GObject.GType<ReleaseUrlKind>;
}

export enum ReleaseUrlKind {
    UNKNOWN = 0,
    DETAILS = 1,
}

export namespace ReleasesKind {
    export const $gtype: GObject.GType<ReleasesKind>;
}

export enum ReleasesKind {
    UNKNOWN = 0,
    EMBEDDED = 1,
    EXTERNAL = 2,
}

export namespace ScreenshotKind {
    export const $gtype: GObject.GType<ScreenshotKind>;
}

export enum ScreenshotKind {
    UNKNOWN = 0,
    DEFAULT = 1,
    EXTRA = 2,
}

export namespace ScreenshotMediaKind {
    export const $gtype: GObject.GType<ScreenshotMediaKind>;
}

export enum ScreenshotMediaKind {
    UNKNOWN = 0,
    IMAGE = 1,
    VIDEO = 2,
}

export namespace SizeKind {
    export const $gtype: GObject.GType<SizeKind>;
}

export enum SizeKind {
    UNKNOWN = 0,
    DOWNLOAD = 1,
    INSTALLED = 2,
}

export namespace SuggestedKind {
    export const $gtype: GObject.GType<SuggestedKind>;
}

export enum SuggestedKind {
    UNKNOWN = 0,
    UPSTREAM = 1,
    HEURISTIC = 2,
}

export class SystemInfoError extends GLib.Error {
    static $gtype: GObject.GType<SystemInfoError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SystemInfoError);

    // Fields
    static FAILED: number;
    static NOT_FOUND: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace TranslationKind {
    export const $gtype: GObject.GType<TranslationKind>;
}

export enum TranslationKind {
    UNKNOWN = 0,
    GETTEXT = 1,
    QT = 2,
}

export namespace UrgencyKind {
    export const $gtype: GObject.GType<UrgencyKind>;
}

export enum UrgencyKind {
    UNKNOWN = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    CRITICAL = 4,
}

export namespace UrlKind {
    export const $gtype: GObject.GType<UrlKind>;
}

export enum UrlKind {
    UNKNOWN = 0,
    HOMEPAGE = 1,
    BUGTRACKER = 2,
    FAQ = 3,
    HELP = 4,
    DONATION = 5,
    TRANSLATE = 6,
    CONTACT = 7,
    VCS_BROWSER = 8,
    CONTRIBUTE = 9,
}

export class UtilsError extends GLib.Error {
    static $gtype: GObject.GType<UtilsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UtilsError);

    // Fields
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export class ValidatorError extends GLib.Error {
    static $gtype: GObject.GType<ValidatorError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ValidatorError);

    // Fields
    static FAILED: number;
    static OVERRIDE_INVALID: number;
    static INVALID_FILENAME: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace VideoCodecKind {
    export const $gtype: GObject.GType<VideoCodecKind>;
}

export enum VideoCodecKind {
    UNKNOWN = 0,
    VP9 = 1,
    AV1 = 2,
}

export namespace VideoContainerKind {
    export const $gtype: GObject.GType<VideoContainerKind>;
}

export enum VideoContainerKind {
    UNKNOWN = 0,
    MKV = 1,
    WEBM = 2,
}

export namespace CacheFlags {
    export const $gtype: GObject.GType<CacheFlags>;
}

export enum CacheFlags {
    NONE = 0,
    USE_USER = 1,
    USE_SYSTEM = 2,
    NO_CLEAR = 4,
    REFRESH_SYSTEM = 8,
}

export namespace DataIdMatchFlags {
    export const $gtype: GObject.GType<DataIdMatchFlags>;
}

export enum DataIdMatchFlags {
    NONE = 0,
    SCOPE = 1,
    BUNDLE_KIND = 2,
    ORIGIN = 4,
    ID = 8,
    BRANCH = 16,
}

export namespace ParseFlags {
    export const $gtype: GObject.GType<ParseFlags>;
}

export enum ParseFlags {
    NONE = 0,
    IGNORE_MEDIABASEURL = 1,
}

export namespace PoolFlags {
    export const $gtype: GObject.GType<PoolFlags>;
}

export enum PoolFlags {
    NONE = 0,
    LOAD_OS_CATALOG = 1,
    LOAD_OS_METAINFO = 2,
    LOAD_OS_DESKTOP_FILES = 4,
    LOAD_FLATPAK = 8,
    IGNORE_CACHE_AGE = 16,
    RESOLVE_ADDONS = 32,
    PREFER_OS_METAINFO = 64,
    MONITOR = 128,
}

export namespace ReviewFlags {
    export const $gtype: GObject.GType<ReviewFlags>;
}

export enum ReviewFlags {
    NONE = 0,
    SELF = 1,
    VOTED = 2,
}

export namespace SearchTokenMatch {
    export const $gtype: GObject.GType<SearchTokenMatch>;
}

export enum SearchTokenMatch {
    NONE = 0,
    MEDIATYPE = 1,
    PKGNAME = 2,
    ORIGIN = 4,
    DESCRIPTION = 8,
    SUMMARY = 16,
    KEYWORD = 32,
    NAME = 64,
    ID = 128,
}

export namespace ValueFlags {
    export const $gtype: GObject.GType<ValueFlags>;
}

export enum ValueFlags {
    NONE = 0,
    DUPLICATE_CHECK = 1,
    NO_TRANSLATION_FALLBACK = 2,
}

export namespace VercmpFlags {
    export const $gtype: GObject.GType<VercmpFlags>;
}

export enum VercmpFlags {
    NONE = 0,
    IGNORE_EPOCH = 1,
}
export module Agreement {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Agreement extends GObject.Object {
    static $gtype: GObject.GType<Agreement>;

    constructor(properties?: Partial<Agreement.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Agreement.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Agreement;

    // Members

    add_section(agreement_section: AgreementSection): void;
    get_kind(): AgreementKind;
    get_section_default(): AgreementSection | null;
    get_sections(): AgreementSection[];
    get_version_id(): string;
    set_kind(kind: AgreementKind): void;
    set_version_id(version_id: string): void;
}
export module AgreementSection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AgreementSection extends GObject.Object {
    static $gtype: GObject.GType<AgreementSection>;

    constructor(properties?: Partial<AgreementSection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AgreementSection.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): AgreementSection;

    // Members

    get_active_locale(): string;
    get_description(): string;
    get_kind(): string;
    get_name(): string;
    set_active_locale(locale?: string | null): void;
    set_description(desc: string, locale?: string | null): void;
    set_kind(kind: string): void;
    set_name(name: string, locale?: string | null): void;
}
export module Artifact {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Artifact extends GObject.Object {
    static $gtype: GObject.GType<Artifact>;

    constructor(properties?: Partial<Artifact.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Artifact.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Artifact;

    // Members

    add_checksum(cs: Checksum): void;
    add_location(location: string): void;
    get_bundle_kind(): BundleKind;
    get_checksum(kind: ChecksumKind): Checksum | null;
    get_checksums(): Checksum[];
    get_filename(): string;
    get_kind(): ArtifactKind;
    get_locations(): string[];
    get_platform(): string;
    get_size(kind: SizeKind): number;
    set_bundle_kind(kind: BundleKind): void;
    set_filename(filename: string): void;
    set_kind(kind: ArtifactKind): void;
    set_platform(platform: string): void;
    set_size(size: number, kind: SizeKind): void;
}
export module Branding {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Branding extends GObject.Object {
    static $gtype: GObject.GType<Branding>;

    constructor(properties?: Partial<Branding.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Branding.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Branding;

    // Members

    get_color(kind: ColorKind, scheme_kind: ColorSchemeKind): string | null;
    remove_color(kind: ColorKind, scheme_preference: ColorSchemeKind): void;
    set_color(kind: ColorKind, scheme_preference: ColorSchemeKind, colorcode: string): void;
}
export module Bundle {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Bundle extends GObject.Object {
    static $gtype: GObject.GType<Bundle>;

    constructor(properties?: Partial<Bundle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bundle.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Bundle;

    // Members

    get_id(): string;
    get_kind(): BundleKind;
    set_id(id: string): void;
    set_kind(kind: BundleKind): void;
}
export module Category {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        children: any;
        icon: string;
        id: string;
        name: string;
        summary: string;
    }
}
export class Category extends GObject.Object {
    static $gtype: GObject.GType<Category>;

    constructor(properties?: Partial<Category.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Category.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get children(): any;
    get icon(): string;
    set icon(val: string);
    get id(): string;
    set id(val: string);
    get name(): string;
    set name(val: string);
    get summary(): string;

    // Constructors

    static ["new"](): Category;

    // Members

    add_child(subcat: Category): void;
    add_component(cpt: Component): void;
    add_desktop_group(group_name: string): void;
    get_children(): Category[];
    get_components(): Component[];
    get_desktop_groups(): string[];
    get_icon(): string;
    get_id(): string;
    get_name(): string;
    get_summary(): string;
    has_children(): boolean;
    has_component(cpt: Component): boolean;
    remove_child(subcat: Category): void;
    set_icon(value: string): void;
    set_id(id: string): void;
    set_name(value: string): void;
    set_summary(value: string): void;
}
export module Checksum {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Checksum extends GObject.Object {
    static $gtype: GObject.GType<Checksum>;

    constructor(properties?: Partial<Checksum.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Checksum.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Checksum;
    static new_for_kind_value(kind: ChecksumKind, value: string): Checksum;

    // Members

    get_kind(): ChecksumKind;
    get_value(): string;
    set_kind(kind: ChecksumKind): void;
    set_value(value: string): void;
}
export module Component {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        categories: any[];
        description: string;
        developer_name: string;
        developerName: string;
        icons: Icon[];
        id: string;
        keywords: string[];
        kind: ComponentKind;
        name: string;
        pkgnames: string[];
        project_group: string;
        projectGroup: string;
        project_license: string;
        projectLicense: string;
        screenshots: Screenshot[];
        summary: string;
        urls: GLib.HashTable<UrlKind, string>;
    }
}
export class Component extends GObject.Object {
    static $gtype: GObject.GType<Component>;

    constructor(properties?: Partial<Component.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Component.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get categories(): any[];
    get description(): string;
    set description(val: string);
    get developer_name(): string;
    set developer_name(val: string);
    get developerName(): string;
    set developerName(val: string);
    get icons(): Icon[];
    get id(): string;
    set id(val: string);
    get keywords(): string[];
    set keywords(val: string[]);
    get kind(): ComponentKind;
    set kind(val: ComponentKind);
    get name(): string;
    set name(val: string);
    get pkgnames(): string[];
    set pkgnames(val: string[]);
    get project_group(): string;
    set project_group(val: string);
    get projectGroup(): string;
    set projectGroup(val: string);
    get project_license(): string;
    set project_license(val: string);
    get projectLicense(): string;
    set projectLicense(val: string);
    get screenshots(): Screenshot[];
    get summary(): string;
    set summary(val: string);
    get urls(): GLib.HashTable<UrlKind, string>;

    // Constructors

    static ["new"](): Component;

    // Members

    add_addon(addon: Component): void;
    add_agreement(agreement: Agreement): void;
    add_bundle(bundle: Bundle): void;
    add_category(category: string): void;
    add_content_rating(content_rating: ContentRating): void;
    add_extends(cpt_id: string): void;
    add_icon(icon: Icon): void;
    add_language(locale: string | null, percentage: number): void;
    add_launchable(launchable: Launchable): void;
    add_provided(prov: Provided): void;
    add_provided_item(kind: ProvidedKind, item: string): void;
    add_relation(relation: Relation): void;
    add_release(release: Release): void;
    add_replaces(cid: string): void;
    add_review(review: Review): void;
    add_screenshot(sshot: Screenshot): void;
    add_suggested(suggested: Suggested): void;
    add_tag(ns: string, tag: string): boolean;
    add_translation(tr: Translation): void;
    add_url(url_kind: UrlKind, url: string): void;
    clear_languages(): void;
    clear_tags(): void;
    get_active_locale(): string;
    get_addons(): Component[];
    get_agreement_by_kind(kind: AgreementKind): Agreement | null;
    get_agreements(): Agreement[];
    get_branch(): string;
    get_branding(): Branding | null;
    get_bundle(bundle_kind: BundleKind): Bundle | null;
    get_bundles(): Bundle[];
    get_categories(): string[];
    get_compulsory_for_desktops(): string[];
    get_content_rating(kind: string): ContentRating | null;
    get_content_ratings(): ContentRating[];
    get_context(): Context | null;
    get_custom(): GLib.HashTable<any, any>;
    get_custom_value(key: string): string;
    get_data_id(): string;
    get_date_eol(): string;
    get_description(): string;
    get_desktop_id(): string;
    get_developer(): Developer;
    get_developer_name(): string;
    get_extends(): string[] | null;
    get_icon_by_size(width: number, height: number): Icon | null;
    get_icon_stock(): Icon | null;
    get_icons(): Icon[];
    get_id(): string;
    get_keywords(): string[];
    get_keywords_table(): GLib.HashTable<any, any>;
    get_kind(): ComponentKind;
    get_language(locale?: string | null): number;
    get_languages(): string[];
    get_launchable(kind: LaunchableKind): Launchable | null;
    get_launchables(): Launchable[];
    get_merge_kind(): MergeKind;
    get_metadata_license(): string;
    get_name(): string;
    get_name_table(): GLib.HashTable<any, any>;
    get_name_variant_suffix(): string;
    get_origin(): string;
    get_pkgname(): string;
    get_pkgnames(): string[];
    get_priority(): number;
    get_project_group(): string;
    get_project_license(): string;
    get_provided(): Provided[];
    get_provided_for_kind(kind: ProvidedKind): Provided | null;
    get_recommends(): Relation[];
    get_releases(): Release[];
    get_releases_kind(): ReleasesKind;
    get_releases_url(): string;
    get_replaces(): string[];
    get_requires(): Relation[];
    get_reviews(): Review[];
    get_scope(): ComponentScope;
    get_screenshots(): Screenshot[];
    get_search_tokens(): string[];
    get_sort_score(): number;
    get_source_pkgname(): string;
    get_suggested(): Suggested[];
    get_summary(): string;
    get_summary_table(): GLib.HashTable<any, any>;
    get_supports(): Relation[];
    get_timestamp_eol(): number;
    get_translations(): Translation[];
    get_url(url_kind: UrlKind): string | null;
    get_value_flags(): ValueFlags;
    has_bundle(): boolean;
    has_category(category: string): boolean;
    has_tag(ns: string, tag: string): boolean;
    insert_custom_value(key: string, value: string): boolean;
    is_compulsory_for_desktop(desktop: string): boolean;
    is_free(): boolean;
    is_ignored(): boolean;
    is_member_of_category(category: Category): boolean;
    is_valid(): boolean;
    load_from_bytes(context: Context, format: FormatKind, bytes: GLib.Bytes | Uint8Array): boolean;
    load_from_xml_data(context: Context, data: string): boolean;
    load_releases(reload: boolean, allow_net: boolean): boolean;
    load_releases_from_bytes(bytes: GLib.Bytes | Uint8Array): boolean;
    remove_tag(ns: string, tag: string): boolean;
    search_matches(term: string): number;
    search_matches_all(terms: string): number;
    set_active_locale(locale?: string | null): void;
    set_branch(branch: string): void;
    set_branding(branding: Branding): void;
    set_compulsory_for_desktop(desktop: string): void;
    set_data_id(value: string): void;
    set_date_eol(date: string): void;
    set_description(value: string, locale?: string | null): void;
    set_developer(developer: Developer): void;
    set_developer_name(value: string, locale?: string | null): void;
    set_id(value: string): void;
    set_keywords(value: string[], locale?: string | null): void;
    set_kind(value: ComponentKind): void;
    set_merge_kind(kind: MergeKind): void;
    set_metadata_license(value: string): void;
    set_name(value: string, locale?: string | null): void;
    set_name_variant_suffix(value: string, locale?: string | null): void;
    set_origin(origin: string): void;
    set_pkgname(pkgname: string): void;
    set_pkgnames(packages: string[]): void;
    set_priority(priority: number): void;
    set_project_group(value: string): void;
    set_project_license(value: string): void;
    set_releases_kind(kind: ReleasesKind): void;
    set_releases_url(url: string): void;
    set_scope(scope: ComponentScope): void;
    set_sort_score(score: number): void;
    set_source_pkgname(spkgname: string): void;
    set_summary(value: string, locale?: string | null): void;
    set_value_flags(flags: ValueFlags): void;
    to_string(): string;
    to_xml_data(context: Context): string;
}
export module ContentRating {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContentRating extends GObject.Object {
    static $gtype: GObject.GType<ContentRating>;

    constructor(properties?: Partial<ContentRating.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentRating.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ContentRating;

    // Members

    add_attribute(id: string, value: ContentRatingValue): void;
    get_kind(): string;
    get_minimum_age(): number;
    get_rating_ids(): string[];
    get_value(id: string): ContentRatingValue;
    set_kind(kind: string): void;
    set_value(id: string, value: ContentRatingValue): void;
    static attribute_from_csm_age(id: string, age: number): ContentRatingValue;
    static attribute_get_description(id: string, value: ContentRatingValue): string;
    static attribute_to_csm_age(id: string, value: ContentRatingValue): number;
    static get_all_rating_ids(): string[];
}
export module Context {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Context extends GObject.Object {
    static $gtype: GObject.GType<Context>;

    constructor(properties?: Partial<Context.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Context.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Context;

    // Members

    get_filename(): string;
    get_format_version(): FormatVersion;
    get_locale(): string;
    get_locale_all_enabled(): boolean;
    get_media_baseurl(): string;
    get_origin(): string;
    get_priority(): number;
    get_style(): FormatStyle;
    has_media_baseurl(): boolean;
    set_filename(fname: string): void;
    set_format_version(ver: FormatVersion): void;
    set_locale(value: string): void;
    set_media_baseurl(value: string): void;
    set_origin(value: string): void;
    set_priority(priority: number): void;
    set_style(style: FormatStyle): void;
}
export module Developer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Developer extends GObject.Object {
    static $gtype: GObject.GType<Developer>;

    constructor(properties?: Partial<Developer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Developer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Developer;

    // Members

    get_id(): string;
    get_name(): string;
    set_id(id: string): void;
    set_name(value: string, locale?: string | null): void;
}
export module DistroDetails {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        homepage: string;
        id: string;
        name: string;
        version: string;
    }
}
export class DistroDetails extends GObject.Object {
    static $gtype: GObject.GType<DistroDetails>;

    constructor(properties?: Partial<DistroDetails.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DistroDetails.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get homepage(): string;
    get id(): string;
    get name(): string;
    get version(): string;

    // Constructors

    static ["new"](): DistroDetails;

    // Members

    get_bool(key: string, default_val: boolean): boolean;
    get_cid(): string;
    get_homepage(): string;
    get_id(): string;
    get_name(): string;
    get_str(key: string): string;
    get_version(): string;
}
export module Icon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Icon extends GObject.Object {
    static $gtype: GObject.GType<Icon>;

    constructor(properties?: Partial<Icon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Icon.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Icon;

    // Members

    get_filename(): string;
    get_height(): number;
    get_kind(): IconKind;
    get_name(): string;
    get_scale(): number;
    get_url(): string;
    get_width(): number;
    set_filename(filename: string): void;
    set_height(height: number): void;
    set_kind(kind: IconKind): void;
    set_name(name: string): void;
    set_scale(scale: number): void;
    set_url(url: string): void;
    set_width(width: number): void;
}
export module Image {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Image extends GObject.Object {
    static $gtype: GObject.GType<Image>;

    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Image;

    // Members

    get_height(): number;
    get_kind(): ImageKind;
    get_locale(): string;
    get_url(): string;
    get_width(): number;
    set_height(height: number): void;
    set_kind(kind: ImageKind): void;
    set_locale(locale: string): void;
    set_url(url: string): void;
    set_width(width: number): void;
}
export module Issue {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Issue extends GObject.Object {
    static $gtype: GObject.GType<Issue>;

    constructor(properties?: Partial<Issue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Issue.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Issue;

    // Members

    get_id(): string;
    get_kind(): IssueKind;
    get_url(): string;
    set_id(id: string): void;
    set_kind(kind: IssueKind): void;
    set_url(url: string): void;
}
export module Launchable {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Launchable extends GObject.Object {
    static $gtype: GObject.GType<Launchable>;

    constructor(properties?: Partial<Launchable.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Launchable.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Launchable;

    // Members

    add_entry(entry: string): void;
    get_entries(): string[];
    get_kind(): LaunchableKind;
    set_kind(kind: LaunchableKind): void;
}
export module Metadata {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Metadata extends GObject.Object {
    static $gtype: GObject.GType<Metadata>;

    constructor(properties?: Partial<Metadata.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Metadata.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Metadata;

    // Members

    add_component(cpt: Component): void;
    clear_components(): void;
    component_to_metainfo(format: FormatKind): string;
    components_to_catalog(format: FormatKind): string;
    components_to_collection(format: FormatKind): string;
    get_architecture(): string;
    get_component(): Component | null;
    get_components(): Component[];
    get_format_style(): FormatStyle;
    get_format_version(): FormatVersion;
    get_locale(): string;
    get_media_baseurl(): string;
    get_origin(): string;
    get_parse_flags(): ParseFlags;
    get_update_existing(): boolean;
    get_write_header(): boolean;
    parse(data: string, format: FormatKind): boolean;
    parse_bytes(bytes: GLib.Bytes | Uint8Array, format: FormatKind): boolean;
    parse_desktop_data(data: string, cid: string): boolean;
    parse_file(file: Gio.File, format: FormatKind): boolean;
    parse_releases_bytes(bytes: GLib.Bytes | Uint8Array): Release[] | null;
    parse_releases_file(file: Gio.File): Release[] | null;
    releases_to_data(releases: Release[]): string;
    save_catalog(fname: string, format: FormatKind): boolean;
    save_collection(fname: string, format: FormatKind): boolean;
    save_metainfo(fname: string, format: FormatKind): boolean;
    set_architecture(arch: string): void;
    set_format_style(mode: FormatStyle): void;
    set_format_version(version: FormatVersion): void;
    set_locale(locale: string): void;
    set_media_baseurl(url: string): void;
    set_origin(origin: string): void;
    set_parse_flags(flags: ParseFlags): void;
    set_update_existing(update: boolean): void;
    set_write_header(wheader: boolean): void;
    static file_guess_style(filename: string): FormatStyle;
}
export module Pool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Pool extends GObject.Object {
    static $gtype: GObject.GType<Pool>;

    constructor(properties?: Partial<Pool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Pool.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](): Pool;

    // Members

    add_component(cpt: Component): boolean;
    add_components(cpts: Component[]): boolean;
    add_extra_data_location(directory: string, format_style: FormatStyle): void;
    add_flags(flags: PoolFlags): void;
    add_metadata_location(directory: string): void;
    build_search_tokens(search: string): string[];
    clear(): void;
    clear2(): boolean;
    clear_metadata_locations(): void;
    get_cache_flags(): CacheFlags;
    get_cache_location(): string;
    get_components_by_bundle_id(kind: BundleKind, bundle_id: string, match_prefix: boolean): Component[];
    get_components_by_categories(categories: string[]): Component[];
    get_components_by_extends(extended_id: string): Component[];
    get_components_by_id(cid: string): Component[];
    get_components_by_kind(kind: ComponentKind): Component[];
    get_components_by_launchable(kind: LaunchableKind, id: string): Component[];
    get_components_by_provided_item(kind: ProvidedKind, item: string): Component[];
    get_components(): Component[];
    get_flags(): PoolFlags;
    get_locale(): string;
    is_empty(): boolean;
    load(cancellable?: Gio.Cancellable | null): boolean;
    load_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    load_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    load_cache_file(fname: string): boolean;
    load_finish(result: Gio.AsyncResult): boolean;
    refresh_cache(force: boolean): boolean;
    remove_flags(flags: PoolFlags): void;
    reset_extra_data_locations(): void;
    save_cache_file(fname: string): boolean;
    search(search: string): Component[];
    set_cache_flags(flags: CacheFlags): void;
    set_cache_location(fname: string): void;
    set_flags(flags: PoolFlags): void;
    set_load_std_data_locations(enabled: boolean): void;
    set_locale(locale: string): void;
    vfunc_changed(): void;
}
export module Provided {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Provided extends GObject.Object {
    static $gtype: GObject.GType<Provided>;

    constructor(properties?: Partial<Provided.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Provided.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Provided;

    // Members

    add_item(item: string): void;
    get_items(): string[];
    get_kind(): ProvidedKind;
    has_item(item: string): boolean;
    set_kind(kind: ProvidedKind): void;
}
export module Relation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Relation extends GObject.Object {
    static $gtype: GObject.GType<Relation>;

    constructor(properties?: Partial<Relation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Relation.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Relation;

    // Members

    get_compare(): RelationCompare;
    get_display_side_kind(): DisplaySideKind;
    get_item_kind(): RelationItemKind;
    get_kind(): RelationKind;
    get_value(): string;
    get_value_control_kind(): ControlKind;
    get_value_display_length_kind(): DisplayLengthKind;
    get_value_int(): number;
    get_value_internet_bandwidth(): number;
    get_value_internet_kind(): InternetKind;
    get_value_px(): number;
    get_value_str(): string;
    get_version(): string;
    is_satisfied(system_info: SystemInfo | null, pool: Pool | null): [CheckResult, string];
    set_compare(compare: RelationCompare): void;
    set_display_side_kind(kind: DisplaySideKind): void;
    set_item_kind(kind: RelationItemKind): void;
    set_kind(kind: RelationKind): void;
    set_value(value: string): void;
    set_value_control_kind(kind: ControlKind): void;
    set_value_display_length_kind(kind: DisplayLengthKind): void;
    set_value_int(value: number): void;
    set_value_internet_bandwidth(bandwidth_mbitps: number): void;
    set_value_internet_kind(kind: InternetKind): void;
    set_value_px(logical_px: number): void;
    set_value_str(value: string): void;
    set_version(version: string): void;
    version_compare(version: string): boolean;
}
export module Release {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Release extends GObject.Object {
    static $gtype: GObject.GType<Release>;

    constructor(properties?: Partial<Release.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Release.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Release;

    // Members

    add_artifact(artifact: Artifact): void;
    add_checksum(cs: Checksum): void;
    add_issue(issue: Issue): void;
    add_location(location: string): void;
    get_active_locale(): string;
    get_artifacts(): Artifact[];
    get_checksum(kind: ChecksumKind): Checksum | null;
    get_checksums(): Checksum[];
    get_date(): string | null;
    get_date_eol(): string | null;
    get_description(): string | null;
    get_issues(): Issue[];
    get_kind(): ReleaseKind;
    get_locations(): string[];
    get_size(kind: SizeKind): number;
    get_timestamp(): number;
    get_timestamp_eol(): number;
    get_urgency(): UrgencyKind;
    get_url(url_kind: ReleaseUrlKind): string | null;
    get_version(): string | null;
    set_active_locale(locale?: string | null): void;
    set_date(date: string): void;
    set_date_eol(date: string): void;
    set_description(description: string, locale?: string | null): void;
    set_kind(kind: ReleaseKind): void;
    set_size(size: number, kind: SizeKind): void;
    set_timestamp(timestamp: number): void;
    set_timestamp_eol(timestamp: number): void;
    set_urgency(urgency: UrgencyKind): void;
    set_url(url_kind: ReleaseUrlKind, url: string): void;
    set_version(version: string): void;
    vercmp(rel2: Release): number;
}
export module Review {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        date: Review;
        description: string;
        flags: number;
        id: string;
        locale: string;
        priority: number;
        rating: number;
        reviewer_id: string;
        reviewerId: string;
        reviewer_name: string;
        reviewerName: string;
        summary: string;
        version: string;
    }
}
export class Review extends GObject.Object {
    static $gtype: GObject.GType<Review>;

    constructor(properties?: Partial<Review.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Review.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get date(): Review;
    set date(val: Review);
    get description(): string;
    set description(val: string);
    get flags(): number;
    set flags(val: number);
    get id(): string;
    set id(val: string);
    get locale(): string;
    set locale(val: string);
    get priority(): number;
    set priority(val: number);
    get rating(): number;
    set rating(val: number);
    get reviewer_id(): string;
    set reviewer_id(val: string);
    get reviewerId(): string;
    set reviewerId(val: string);
    get reviewer_name(): string;
    set reviewer_name(val: string);
    get reviewerName(): string;
    set reviewerName(val: string);
    get summary(): string;
    set summary(val: string);
    get version(): string;
    set version(val: string);

    // Constructors

    static ["new"](): Review;

    // Members

    add_flags(flags: ReviewFlags): void;
    add_metadata(key: string, value: string): void;
    equal(review2: Review): boolean;
    get_date(): GLib.DateTime;
    get_description(): string;
    get_flags(): ReviewFlags;
    get_id(): string;
    get_locale(): string;
    get_metadata_item(key: string): string;
    get_priority(): number;
    get_rating(): number;
    get_reviewer_id(): string;
    get_reviewer_name(): string;
    get_summary(): string;
    get_version(): string;
    set_date(date: GLib.DateTime): void;
    set_description(description: string): void;
    set_flags(flags: ReviewFlags): void;
    set_id(id: string): void;
    set_locale(locale: string): void;
    set_priority(priority: number): void;
    set_rating(rating: number): void;
    set_reviewer_id(reviewer_id: string): void;
    set_reviewer_name(reviewer_name: string): void;
    set_summary(summary: string): void;
    set_version(version: string): void;
}
export module Screenshot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Screenshot extends GObject.Object {
    static $gtype: GObject.GType<Screenshot>;

    constructor(properties?: Partial<Screenshot.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Screenshot.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Screenshot;

    // Members

    add_image(image: Image): void;
    add_video(video: Video): void;
    clear_images(): void;
    get_active_locale(): string;
    get_caption(): string;
    get_image(width: number, height: number): Image;
    get_images(): Image[];
    get_images_all(): Image[];
    get_kind(): ScreenshotKind;
    get_media_kind(): ScreenshotMediaKind;
    get_videos(): Video[];
    get_videos_all(): Video[];
    is_valid(): boolean;
    set_active_locale(locale?: string | null): void;
    set_caption(caption: string, locale: string): void;
    set_kind(kind: ScreenshotKind): void;
}
export module Suggested {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Suggested extends GObject.Object {
    static $gtype: GObject.GType<Suggested>;

    constructor(properties?: Partial<Suggested.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Suggested.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Suggested;

    // Members

    add_id(cid: string): void;
    get_ids(): string[];
    get_kind(): SuggestedKind;
    is_valid(): boolean;
    set_kind(kind: SuggestedKind): void;
}
export module SystemInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SystemInfo extends GObject.Object {
    static $gtype: GObject.GType<SystemInfo>;

    constructor(properties?: Partial<SystemInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SystemInfo.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SystemInfo;

    // Members

    get_device_name_for_modalias(modalias: string, allow_fallback: boolean): string;
    get_display_length(side: DisplaySideKind): number;
    get_kernel_name(): string;
    get_kernel_version(): string;
    get_memory_total(): number;
    get_modaliases(): string[];
    get_os_cid(): string;
    get_os_homepage(): string;
    get_os_id(): string;
    get_os_name(): string;
    get_os_version(): string;
    has_device_matching_modalias(modalias_glob: string): boolean;
    has_input_control(kind: ControlKind): CheckResult;
    modalias_to_syspath(modalias: string): string;
    set_display_length(side: DisplaySideKind, value_dip: number): void;
    set_input_control(kind: ControlKind, found: boolean): void;
}
export module Translation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Translation extends GObject.Object {
    static $gtype: GObject.GType<Translation>;

    constructor(properties?: Partial<Translation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Translation.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Translation;

    // Members

    get_id(): string;
    get_kind(): TranslationKind;
    get_source_locale(): string;
    set_id(id: string): void;
    set_kind(kind: TranslationKind): void;
    set_source_locale(locale?: string | null): void;
}
export module Validator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Validator extends GObject.Object {
    static $gtype: GObject.GType<Validator>;

    constructor(properties?: Partial<Validator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Validator.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Validator;

    // Members

    add_override(tag: string, severity_override: IssueSeverity): boolean;
    add_release_bytes(release_fname: string, release_metadata: GLib.Bytes | Uint8Array): boolean;
    add_release_file(release_file: Gio.File): boolean;
    clear_issues(): void;
    clear_release_data(): void;
    get_check_urls(): boolean;
    get_issue_files_count(): number;
    get_issues(): ValidatorIssue[];
    get_issues_per_file(): GLib.HashTable;
    get_report_yaml(yaml_report: string): boolean;
    get_strict(): boolean;
    get_tag_explanation(tag: string): string;
    get_tag_severity(tag: string): IssueSeverity;
    get_tags(): string[];
    set_check_urls(value: boolean): void;
    set_strict(is_strict: boolean): void;
    validate_bytes(metadata: GLib.Bytes | Uint8Array): boolean;
    validate_data(metadata: string): boolean;
    validate_file(metadata_file: Gio.File): boolean;
    validate_tree(root_dir: string): boolean;
}
export module ValidatorIssue {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ValidatorIssue extends GObject.Object {
    static $gtype: GObject.GType<ValidatorIssue>;

    constructor(properties?: Partial<ValidatorIssue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ValidatorIssue.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ValidatorIssue;

    // Members

    get_cid(): string;
    get_explanation(): string;
    get_filename(): string;
    get_hint(): string;
    get_importance(): IssueSeverity;
    get_line(): number;
    get_location(): string;
    get_message(): string;
    get_severity(): IssueSeverity;
    get_tag(): string;
    set_cid(cid: string): void;
    set_explanation(explanation: string): void;
    set_filename(fname: string): void;
    set_hint(hint: string): void;
    set_importance(importance: IssueSeverity): void;
    set_line(line: number): void;
    set_message(message: string): void;
    set_severity(severity: IssueSeverity): void;
    set_tag(tag: string): void;
}
export module Video {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Video extends GObject.Object {
    static $gtype: GObject.GType<Video>;

    constructor(properties?: Partial<Video.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Video.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Video;

    // Members

    get_codec_kind(): VideoCodecKind;
    get_container_kind(): VideoContainerKind;
    get_height(): number;
    get_locale(): string;
    get_url(): string;
    get_width(): number;
    set_codec_kind(kind: VideoCodecKind): void;
    set_container_kind(kind: VideoContainerKind): void;
    set_height(height: number): void;
    set_locale(locale: string): void;
    set_url(url: string): void;
    set_width(width: number): void;
}

export class BrandingColorIter {
    static $gtype: GObject.GType<BrandingColorIter>;

    constructor(copy: BrandingColorIter);

    // Members
    init(branding: Branding): void;
    next(): [boolean, ColorKind | null, ColorSchemeKind | null, string];
}
