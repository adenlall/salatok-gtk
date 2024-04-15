/**
 * AppStreamGlib 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as Gio from "gio2";
import * as GdkPixbuf from "gdkpixbuf2";

export const APP_SUBSUME_FLAG_DEDUPE: number;
export const APP_SUBSUME_FLAG_MERGE: number;
export const IMAGE_ALPHA_FLAG_BOTTOM: number;
export const IMAGE_ALPHA_FLAG_INTERNAL: number;
export const IMAGE_ALPHA_FLAG_LEFT: number;
export const IMAGE_ALPHA_FLAG_NONE: number;
export const IMAGE_ALPHA_FLAG_RIGHT: number;
export const IMAGE_ALPHA_FLAG_TOP: number;
export const IMAGE_LARGE_HEIGHT: number;
export const IMAGE_LARGE_WIDTH: number;
export const IMAGE_NORMAL_HEIGHT: number;
export const IMAGE_NORMAL_WIDTH: number;
export const IMAGE_THUMBNAIL_HEIGHT: number;
export const IMAGE_THUMBNAIL_WIDTH: number;
export function id_kind_from_string(id_kind: string): IdKind;
export function id_kind_to_string(id_kind: IdKind): string;
export function inf_error_quark(): GLib.Quark;
export function inf_get_driver_version(keyfile: GLib.KeyFile, timestamp: number): string;
export function inf_load_data(keyfile: GLib.KeyFile, data: string, flags: InfLoadFlags): boolean;
export function inf_load_file(keyfile: GLib.KeyFile, filename: string, flags: InfLoadFlags): boolean;
export function kudo_kind_from_string(kudo_kind: string): KudoKind;
export function kudo_kind_to_string(kudo_kind: KudoKind): string;
export function markup_convert(markup: string, format: MarkupConvertFormat): string;
export function markup_convert_full(markup: string, format: MarkupConvertFormat, flags: MarkupConvertFlag): string;
export function markup_convert_simple(markup: string): string;
export function markup_import(text: string, format: MarkupConvertFormat): string;
export function markup_strsplit_words(text: string, line_len: number): string[];
export function markup_validate(markup: string): boolean;
export function node_error_quark(): GLib.Quark;
export function node_get_attribute(node: GLib.Node, key: string): string;
export function node_get_attribute_as_int(node: GLib.Node, key: string): number;
export function node_get_attribute_as_uint(node: GLib.Node, key: string): number;
export function node_get_comment(node: GLib.Node): string;
export function node_get_data(node: GLib.Node): string;
export function node_get_localized(node: GLib.Node, key: string): GLib.HashTable<any, any>;
export function node_get_localized_best(node: GLib.Node, key: string): string;
export function node_get_localized_unwrap(node: GLib.Node): GLib.HashTable<any, any>;
export function node_get_name(node: GLib.Node): string;
export function node_get_tag(node: GLib.Node): Tag;
export function node_insert_hash(
    parent: GLib.Node,
    name: string,
    attr_key: string,
    hash: { [key: string]: any } | GLib.HashTable<any, any>,
    insert_flags: NodeInsertFlags
): void;
export function node_insert_localized(
    parent: GLib.Node,
    name: string,
    localized: { [key: string]: any } | GLib.HashTable<any, any>,
    insert_flags: NodeInsertFlags
): void;
export function node_to_xml(node: GLib.Node, flags: NodeToXmlFlags): GLib.String;
export function node_unref(node: GLib.Node): void;
export function size_kind_from_string(size_kind: string): SizeKind;
export function size_kind_to_string(size_kind: SizeKind): string;
export function tag_from_string(tag: string): Tag;
export function tag_from_string_full(tag: string, flags: TagFlags): Tag;
export function tag_to_string(tag: Tag): string;
export function urgency_kind_from_string(urgency_kind: string): UrgencyKind;
export function urgency_kind_to_string(urgency_kind: UrgencyKind): string;
export function url_kind_from_string(url_kind: string): UrlKind;
export function url_kind_to_string(url_kind: UrlKind): string;
export function utils_appstream_id_build(str: string): string;
export function utils_appstream_id_valid(str: string): boolean;
export function utils_error_quark(): GLib.Quark;
export function utils_find_icon_filename(destdir: string, search: string): string;
export function utils_find_icon_filename_full(destdir: string, search: string, flags: UtilsFindIconFlag): string;
export function utils_guid_from_data(namespace_id: string, data: number, data_len: number): string;
export function utils_guid_from_string(str: string): string;
export function utils_guid_is_valid(guid: string): boolean;
export function utils_install_filename(
    location: UtilsLocation,
    filename: string,
    origin: string,
    destdir: string
): boolean;
export function utils_is_blacklisted_id(desktop_id: string): boolean;
export function utils_is_category_id(category_id: string): boolean;
export function utils_is_environment_id(environment_id: string): boolean;
export function utils_is_spdx_license(license: string): boolean;
export function utils_is_spdx_license_id(license_id: string): boolean;
export function utils_is_stock_icon_name(name: string): boolean;
export function utils_license_to_spdx(license: string): string;
export function utils_search_token_valid(token: string): boolean;
export function utils_search_tokenize(search: string): string[];
export function utils_spdx_license_detokenize(license_tokens: string): string;
export function utils_spdx_license_tokenize(license: string): string[];
export function utils_string_replace(string: GLib.String, search: string, replace: string): number;
export function utils_unique_id_build(
    scope: AppScope,
    bundle_kind: BundleKind,
    origin: string,
    kind: AppKind,
    id: string,
    branch: string
): string;
export function utils_unique_id_equal(unique_id1: string, unique_id2: string): boolean;
export function utils_unique_id_hash(unique_id: string): number;
export function utils_unique_id_match(unique_id1: string, unique_id2: string, match_flags: UniqueIdMatchFlags): boolean;
export function utils_unique_id_valid(unique_id: string): boolean;
export function utils_vercmp(version_a: string, version_b: string): number;
export function utils_vercmp_full(version_a: string, version_b: string, flags: VersionCompareFlag): number;
export function utils_version_from_uint16(val: number, flags: VersionParseFlag): string;
export function utils_version_from_uint32(val: number, flags: VersionParseFlag): string;
export function utils_version_parse(version: string): string;

export namespace AgreementKind {
    export const $gtype: GObject.GType<AgreementKind>;
}

export enum AgreementKind {
    UNKNOWN = 0,
    GENERIC = 1,
    EULA = 2,
    PRIVACY = 3,
}

export namespace AppError {
    export const $gtype: GObject.GType<AppError>;
}

export enum AppError {
    FAILED = 0,
    INVALID_TYPE = 1,
}

export namespace AppKind {
    export const $gtype: GObject.GType<AppKind>;
}

export enum AppKind {
    UNKNOWN = 0,
    DESKTOP = 1,
    FONT = 2,
    CODEC = 3,
    INPUT_METHOD = 4,
    WEB_APP = 5,
    SOURCE = 6,
    ADDON = 7,
    FIRMWARE = 8,
    RUNTIME = 9,
    GENERIC = 10,
    OS_UPDATE = 11,
    OS_UPGRADE = 12,
    SHELL_EXTENSION = 13,
    LOCALIZATION = 14,
    CONSOLE = 15,
    DRIVER = 16,
    ICON_THEME = 17,
}

export namespace AppMergeKind {
    export const $gtype: GObject.GType<AppMergeKind>;
}

export enum AppMergeKind {
    UNKNOWN = 0,
    NONE = 1,
    REPLACE = 2,
    APPEND = 3,
}

export namespace AppScope {
    export const $gtype: GObject.GType<AppScope>;
}

export enum AppScope {
    UNKNOWN = 0,
    USER = 1,
    SYSTEM = 2,
}

export namespace AppState {
    export const $gtype: GObject.GType<AppState>;
}

export enum AppState {
    UNKNOWN = 0,
    INSTALLED = 1,
    AVAILABLE = 2,
    AVAILABLE_LOCAL = 3,
    UPDATABLE = 4,
    UNAVAILABLE = 5,
    QUEUED_FOR_INSTALL = 6,
    INSTALLING = 7,
    REMOVING = 8,
    UPDATABLE_LIVE = 9,
    PURCHASABLE = 10,
    PURCHASING = 11,
}

export namespace AppTrustFlags {
    export const $gtype: GObject.GType<AppTrustFlags>;
}

export enum AppTrustFlags {
    COMPLETE = 0,
    CHECK_DUPLICATES = 1,
    CHECK_VALID_UTF8 = 2,
}

export namespace AppValidateFlags {
    export const $gtype: GObject.GType<AppValidateFlags>;
}

export enum AppValidateFlags {
    NONE = 0,
    RELAX = 1,
    STRICT = 2,
    NO_NETWORK = 4,
    ALL_APPS = 8,
}

export namespace BundleKind {
    export const $gtype: GObject.GType<BundleKind>;
}

export enum BundleKind {
    UNKNOWN = 0,
    LIMBA = 1,
    FLATPAK = 2,
    SNAP = 3,
    PACKAGE = 4,
    CABINET = 5,
    APPIMAGE = 6,
}

export namespace ChecksumTarget {
    export const $gtype: GObject.GType<ChecksumTarget>;
}

export enum ChecksumTarget {
    UNKNOWN = 0,
    CONTAINER = 1,
    CONTENT = 2,
    SIGNATURE = 3,
    DEVICE = 4,
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

export namespace FormatKind {
    export const $gtype: GObject.GType<FormatKind>;
}

export enum FormatKind {
    UNKNOWN = 0,
    APPSTREAM = 1,
    DESKTOP = 2,
    APPDATA = 3,
    METAINFO = 4,
}

export namespace IconError {
    export const $gtype: GObject.GType<IconError>;
}

export enum IconError {
    FAILED = 0,
}

export namespace IconKind {
    export const $gtype: GObject.GType<IconKind>;
}

export enum IconKind {
    UNKNOWN = 0,
    STOCK = 1,
    CACHED = 2,
    REMOTE = 3,
    EMBEDDED = 4,
    LOCAL = 5,
}

export namespace IconLoadFlags {
    export const $gtype: GObject.GType<IconLoadFlags>;
}

export enum IconLoadFlags {
    NONE = 0,
    SEARCH_SIZE = 1,
}

export namespace IdKind {
    export const $gtype: GObject.GType<IdKind>;
}

export enum IdKind {
    UNKNOWN = 0,
    DESKTOP = 1,
    FONT = 2,
    CODEC = 3,
    INPUT_METHOD = 4,
    WEB_APP = 5,
    SOURCE = 6,
    ADDON = 7,
    FIRMWARE = 8,
    RUNTIME = 9,
    GENERIC = 10,
}

export namespace ImageKind {
    export const $gtype: GObject.GType<ImageKind>;
}

export enum ImageKind {
    UNKNOWN = 0,
    SOURCE = 1,
    THUMBNAIL = 2,
}

export namespace ImageLoadFlags {
    export const $gtype: GObject.GType<ImageLoadFlags>;
}

export enum ImageLoadFlags {
    NONE = 0,
    SHARPEN = 1,
    SET_BASENAME = 2,
    SET_CHECKSUM = 4,
    ONLY_SUPPORTED = 8,
    ALWAYS_RESIZE = 16,
}

export namespace ImageSaveFlags {
    export const $gtype: GObject.GType<ImageSaveFlags>;
}

export enum ImageSaveFlags {
    NONE = 0,
    PAD_16_9 = 1,
    SHARPEN = 2,
    BLUR = 4,
}

export class InfError extends GLib.Error {
    static $gtype: GObject.GType<InfError>;

    constructor(options: { message: string; code: number });
    constructor(copy: InfError);

    // Fields
    static FAILED: number;
    static INVALID_TYPE: number;
    static NOT_FOUND: number;
}

export namespace KudoKind {
    export const $gtype: GObject.GType<KudoKind>;
}

export enum KudoKind {
    UNKNOWN = 0,
    SEARCH_PROVIDER = 1,
    USER_DOCS = 2,
    APP_MENU = 3,
    MODERN_TOOLKIT = 4,
    NOTIFICATIONS = 5,
    HIGH_CONTRAST = 6,
    HI_DPI_ICON = 7,
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

export namespace MarkupConvertFormat {
    export const $gtype: GObject.GType<MarkupConvertFormat>;
}

export enum MarkupConvertFormat {
    SIMPLE = 0,
    MARKDOWN = 1,
    NULL = 2,
    APPSTREAM = 3,
    HTML = 4,
}

export class NodeError extends GLib.Error {
    static $gtype: GObject.GType<NodeError>;

    constructor(options: { message: string; code: number });
    constructor(copy: NodeError);

    // Fields
    static FAILED: number;
    static INVALID_MARKUP: number;
    static NO_SUPPORT: number;
}

export namespace NodeInsertFlags {
    export const $gtype: GObject.GType<NodeInsertFlags>;
}

export enum NodeInsertFlags {
    NONE = 0,
    PRE_ESCAPED = 1,
    SWAPPED = 2,
    NO_MARKUP = 4,
    DEDUPE_LANG = 8,
    MARK_TRANSLATABLE = 16,
    BASE64_ENCODED = 32,
}

export namespace NodeToXmlFlags {
    export const $gtype: GObject.GType<NodeToXmlFlags>;
}

export enum NodeToXmlFlags {
    NONE = 0,
    ADD_HEADER = 1,
    FORMAT_MULTILINE = 2,
    FORMAT_INDENT = 4,
    INCLUDE_SIBLINGS = 8,
    SORT_CHILDREN = 16,
}

export namespace ProblemKind {
    export const $gtype: GObject.GType<ProblemKind>;
}

export enum ProblemKind {
    UNKNOWN = 0,
    TAG_DUPLICATED = 1,
    TAG_MISSING = 2,
    TAG_INVALID = 3,
    ATTRIBUTE_MISSING = 4,
    ATTRIBUTE_INVALID = 5,
    MARKUP_INVALID = 6,
    STYLE_INCORRECT = 7,
    TRANSLATIONS_REQUIRED = 8,
    DUPLICATE_DATA = 9,
    VALUE_MISSING = 10,
    URL_NOT_FOUND = 11,
    FILE_INVALID = 12,
    ASPECT_RATIO_INCORRECT = 13,
    RESOLUTION_INCORRECT = 14,
}

export namespace ProvideKind {
    export const $gtype: GObject.GType<ProvideKind>;
}

export enum ProvideKind {
    UNKNOWN = 0,
    LIBRARY = 1,
    BINARY = 2,
    FONT = 3,
    MODALIAS = 4,
    FIRMWARE_RUNTIME = 5,
    PYTHON2 = 6,
    PYTHON3 = 7,
    DBUS_SESSION = 8,
    DBUS_SYSTEM = 9,
    FIRMWARE_FLASHED = 10,
    ID = 11,
}

export namespace ReleaseKind {
    export const $gtype: GObject.GType<ReleaseKind>;
}

export enum ReleaseKind {
    UNKNOWN = 0,
    STABLE = 1,
    DEVELOPMENT = 2,
}

export namespace ReleaseState {
    export const $gtype: GObject.GType<ReleaseState>;
}

export enum ReleaseState {
    UNKNOWN = 0,
    INSTALLED = 1,
    AVAILABLE = 2,
}

export namespace RequireCompare {
    export const $gtype: GObject.GType<RequireCompare>;
}

export enum RequireCompare {
    UNKNOWN = 0,
    EQ = 1,
    NE = 2,
    LT = 3,
    GT = 4,
    LE = 5,
    GE = 6,
    GLOB = 7,
    REGEX = 8,
}

export namespace RequireKind {
    export const $gtype: GObject.GType<RequireKind>;
}

export enum RequireKind {
    UNKNOWN = 0,
    ID = 1,
    FIRMWARE = 2,
    HARDWARE = 3,
    MODALIAS = 4,
    KERNEL = 5,
    MEMORY = 6,
}

export namespace ScreenshotKind {
    export const $gtype: GObject.GType<ScreenshotKind>;
}

export enum ScreenshotKind {
    UNKNOWN = 0,
    NORMAL = 1,
    DEFAULT = 2,
}

export namespace SizeKind {
    export const $gtype: GObject.GType<SizeKind>;
}

export enum SizeKind {
    UNKNOWN = 0,
    INSTALLED = 1,
    DOWNLOAD = 2,
}

export namespace StoreError {
    export const $gtype: GObject.GType<StoreError>;
}

export enum StoreError {
    FAILED = 0,
}

export namespace StoreSearchFlags {
    export const $gtype: GObject.GType<StoreSearchFlags>;
}

export enum StoreSearchFlags {
    NONE = 0,
    USE_WILDCARDS = 1,
}

export namespace StoreWatchFlags {
    export const $gtype: GObject.GType<StoreWatchFlags>;
}

export enum StoreWatchFlags {
    NONE = 0,
    ADDED = 1,
    REMOVED = 2,
}

export namespace SuggestKind {
    export const $gtype: GObject.GType<SuggestKind>;
}

export enum SuggestKind {
    UNKNOWN = 0,
    UPSTREAM = 1,
    HEURISTIC = 2,
}

export namespace Tag {
    export const $gtype: GObject.GType<Tag>;
}

export enum Tag {
    UNKNOWN = 0,
    COMPONENTS = 1,
    COMPONENT = 2,
    ID = 3,
    PKGNAME = 4,
    NAME = 5,
    SUMMARY = 6,
    DESCRIPTION = 7,
    URL = 8,
    ICON = 9,
    CATEGORIES = 10,
    CATEGORY = 11,
    KEYWORDS = 12,
    KEYWORD = 13,
    MIMETYPES = 14,
    MIMETYPE = 15,
    PROJECT_GROUP = 16,
    PROJECT_LICENSE = 17,
    SCREENSHOT = 18,
    SCREENSHOTS = 19,
    UPDATE_CONTACT = 20,
    IMAGE = 21,
    COMPULSORY_FOR_DESKTOP = 22,
    PRIORITY = 23,
    CAPTION = 24,
    LANGUAGES = 25,
    LANG = 26,
    METADATA = 27,
    VALUE = 28,
    RELEASES = 29,
    RELEASE = 30,
    ARCHITECTURES = 31,
    ARCH = 32,
    METADATA_LICENSE = 33,
    PROVIDES = 34,
    EXTENDS = 35,
    DEVELOPER_NAME = 36,
    KUDOS = 37,
    KUDO = 38,
    SOURCE_PKGNAME = 39,
    VETOS = 40,
    VETO = 41,
    BUNDLE = 42,
    PERMISSIONS = 43,
    PERMISSION = 44,
    LOCATION = 45,
    CHECKSUM = 46,
    SIZE = 47,
    TRANSLATION = 48,
    CONTENT_RATING = 49,
    CONTENT_ATTRIBUTE = 50,
    VERSION = 51,
    REVIEWS = 52,
    REVIEW = 53,
    REVIEWER_NAME = 54,
    REVIEWER_ID = 55,
    SUGGESTS = 56,
    REQUIRES = 57,
    CUSTOM = 58,
    LAUNCHABLE = 59,
    AGREEMENT = 60,
    AGREEMENT_SECTION = 61,
    P = 62,
    LI = 63,
    UL = 64,
    OL = 65,
    BINARY = 66,
    FONT = 67,
    DBUS = 68,
    MODALIAS = 69,
    LIBRARY = 70,
}

export namespace TagFlags {
    export const $gtype: GObject.GType<TagFlags>;
}

export enum TagFlags {
    NONE = 0,
    USE_FALLBACKS = 1,
    USE_TRANSLATED = 2,
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
    DONATION = 4,
    HELP = 5,
    MISSING = 6,
    TRANSLATE = 7,
    DETAILS = 8,
    SOURCE = 9,
    CONTACT = 10,
    VCS_BROWSER = 11,
    CONTRIBUTE = 12,
}

export class UtilsError extends GLib.Error {
    static $gtype: GObject.GType<UtilsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: UtilsError);

    // Fields
    static FAILED: number;
    static INVALID_TYPE: number;
}

export namespace UtilsLocation {
    export const $gtype: GObject.GType<UtilsLocation>;
}

export enum UtilsLocation {
    SHARED = 0,
    CACHE = 1,
    USER = 2,
}

export namespace AppParseFlags {
    export const $gtype: GObject.GType<AppParseFlags>;
}

export enum AppParseFlags {
    NONE = 0,
    USE_HEURISTICS = 1,
    KEEP_COMMENTS = 2,
    CONVERT_TRANSLATABLE = 4,
    APPEND_DATA = 8,
    ALLOW_VETO = 16,
    USE_FALLBACKS = 32,
    ADD_ALL_METADATA = 64,
    ONLY_NATIVE_LANGS = 128,
}

export namespace AppQuirk {
    export const $gtype: GObject.GType<AppQuirk>;
}

export enum AppQuirk {
    NONE = 0,
    PROVENANCE = 1,
    COMPULSORY = 2,
    HAS_SOURCE = 4,
    MATCH_ANY_PREFIX = 8,
    NEEDS_REBOOT = 16,
    NOT_REVIEWABLE = 32,
    HAS_SHORTCUT = 64,
    NOT_LAUNCHABLE = 128,
    NEEDS_USER_ACTION = 256,
    IS_PROXY = 512,
    REMOVABLE_HARDWARE = 1024,
    DEVELOPER_VERIFIED = 2048,
}

export namespace AppSearchMatch {
    export const $gtype: GObject.GType<AppSearchMatch>;
}

export enum AppSearchMatch {
    NONE = 0,
    MIMETYPE = 1,
    PKGNAME = 2,
    DESCRIPTION = 4,
    COMMENT = 8,
    NAME = 16,
    KEYWORD = 32,
    ID = 64,
    ORIGIN = 128,
}

export namespace AppSubsumeFlags {
    export const $gtype: GObject.GType<AppSubsumeFlags>;
}

export enum AppSubsumeFlags {
    NONE = 0,
    NO_OVERWRITE = 1,
    BOTH_WAYS = 2,
    REPLACE = 4,
    KIND = 8,
    STATE = 16,
    BUNDLES = 32,
    TRANSLATIONS = 64,
    RELEASES = 128,
    KUDOS = 256,
    CATEGORIES = 512,
    PERMISSIONS = 1024,
    EXTENDS = 2048,
    COMPULSORY = 4096,
    SCREENSHOTS = 8192,
    REVIEWS = 16384,
    CONTENT_RATINGS = 32768,
    PROVIDES = 65536,
    ICONS = 131072,
    MIMETYPES = 262144,
    VETOS = 524288,
    LANGUAGES = 1048576,
    NAME = 2097152,
    COMMENT = 4194304,
    DEVELOPER_NAME = 8388608,
    DESCRIPTION = 16777216,
    METADATA = 33554432,
    URL = 67108864,
    KEYWORDS = 134217728,
    FORMATS = 268435456,
    BRANCH = 536870912,
    ORIGIN = 1073741824,
    METADATA_LICENSE = 2147483648,
    PROJECT_LICENSE = 4294967296,
    PROJECT_GROUP = 8589934592,
    SOURCE_KIND = 17179869184,
    SUGGESTS = 34359738368,
    LAUNCHABLES = 68719476736,
    AGREEMENTS = 137438953472,
}

export namespace InfLoadFlags {
    export const $gtype: GObject.GType<InfLoadFlags>;
}

export enum InfLoadFlags {
    NONE = 0,
    STRICT = 1,
    CASE_INSENSITIVE = 2,
}

export namespace MarkupConvertFlag {
    export const $gtype: GObject.GType<MarkupConvertFlag>;
}

export enum MarkupConvertFlag {
    NONE = 0,
    IGNORE_ERRORS = 1,
}

export namespace NodeFromXmlFlags {
    export const $gtype: GObject.GType<NodeFromXmlFlags>;
}

export enum NodeFromXmlFlags {
    NONE = 0,
    LITERAL_TEXT = 1,
    KEEP_COMMENTS = 2,
    ONLY_NATIVE_LANGS = 4,
}

export namespace ReviewFlags {
    export const $gtype: GObject.GType<ReviewFlags>;
}

export enum ReviewFlags {
    NONE = 0,
    SELF = 1,
    VOTED = 2,
}

export namespace StoreAddFlags {
    export const $gtype: GObject.GType<StoreAddFlags>;
}

export enum StoreAddFlags {
    NONE = 0,
    PREFER_LOCAL = 1,
    USE_UNIQUE_ID = 2,
    USE_MERGE_HEURISTIC = 4,
    ONLY_NATIVE_LANGS = 8,
}

export namespace StoreLoadFlags {
    export const $gtype: GObject.GType<StoreLoadFlags>;
}

export enum StoreLoadFlags {
    NONE = 0,
    APP_INFO_SYSTEM = 1,
    APP_INFO_USER = 2,
    APP_INSTALL = 4,
    APPDATA = 8,
    DESKTOP = 16,
    ALLOW_VETO = 32,
    FLATPAK_USER = 64,
    FLATPAK_SYSTEM = 128,
    IGNORE_INVALID = 256,
    ONLY_UNCOMPRESSED = 512,
    ONLY_MERGE_APPS = 1024,
}

export namespace UniqueIdMatchFlags {
    export const $gtype: GObject.GType<UniqueIdMatchFlags>;
}

export enum UniqueIdMatchFlags {
    NONE = 0,
    SCOPE = 1,
    BUNDLE_KIND = 2,
    ORIGIN = 4,
    KIND = 8,
    ID = 16,
    BRANCH = 32,
}

export namespace UtilsFindIconFlag {
    export const $gtype: GObject.GType<UtilsFindIconFlag>;
}

export enum UtilsFindIconFlag {
    NONE = 0,
    HI_DPI = 1,
}

export namespace VersionCompareFlag {
    export const $gtype: GObject.GType<VersionCompareFlag>;
}

export enum VersionCompareFlag {
    NONE = 0,
    USE_HEURISTICS = 1,
}

export namespace VersionParseFlag {
    export const $gtype: GObject.GType<VersionParseFlag>;
}

export enum VersionParseFlag {
    NONE = 0,
    USE_TRIPLET = 1,
    USE_BCD = 2,
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
    get_section_default(): AgreementSection;
    get_sections(): AgreementSection[];
    get_version_id(): string;
    set_kind(kind: AgreementKind): void;
    set_version_id(version_id: string): void;
    static kind_from_string(value: string): AgreementKind;
    static kind_to_string(value: AgreementKind): string;
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

    get_description(locale?: string | null): string;
    get_kind(): string;
    get_name(locale?: string | null): string;
    set_description(locale: string | null, desc: string): void;
    set_kind(kind: string): void;
    set_name(locale: string | null, name: string): void;
}
export module App {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class App extends GObject.Object {
    static $gtype: GObject.GType<App>;

    constructor(properties?: Partial<App.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<App.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): App;

    // Members

    add_addon(addon: App): void;
    add_agreement(agreement: Agreement): void;
    add_arch(arch: string): void;
    add_bundle(bundle: Bundle): void;
    add_category(category: string): void;
    add_compulsory_for_desktop(compulsory_for_desktop: string): void;
    add_content_rating(content_rating: ContentRating): void;
    add_extends(_extends: string): void;
    add_format(format: Format): void;
    add_icon(icon: Icon): void;
    add_keyword(locale: string | null, keyword: string): void;
    add_kudo(kudo: string): void;
    add_kudo_kind(kudo_kind: KudoKind): void;
    add_language(percentage: number, locale?: string | null): void;
    add_launchable(launchable: Launchable): void;
    add_metadata(key: string, value?: string | null): void;
    add_mimetype(mimetype: string): void;
    add_permission(permission: string): void;
    add_pkgname(pkgname: string): void;
    add_provide(provide: Provide): void;
    add_quirk(quirk: AppQuirk): void;
    add_release(release: Release): void;
    add_require(require: Require): void;
    add_review(review: Review): void;
    add_screenshot(screenshot: Screenshot): void;
    add_suggest(suggest: Suggest): void;
    add_translation(translation: Translation): void;
    add_url(url_kind: UrlKind, url: string): void;
    convert_icons(kind: IconKind): boolean;
    equal(app2: App): boolean;
    get_addons(): App[];
    get_agreement_by_kind(kind: AgreementKind): Agreement;
    get_agreement_default(): Agreement;
    get_architectures(): string[];
    get_branch(): string;
    get_bundle_default(): Bundle;
    get_bundles(): Bundle[];
    get_categories(): string[];
    get_comment(locale?: string | null): string;
    get_comments(): GLib.HashTable<any, any>;
    get_compulsory_for_desktops(): string[];
    get_content_rating(kind: string): ContentRating;
    get_content_ratings(): ContentRating[];
    get_description(locale?: string | null): string;
    get_descriptions(): GLib.HashTable<any, any>;
    get_developer_name(locale?: string | null): string;
    get_developer_names(): GLib.HashTable<any, any>;
    get_extends(): string[];
    get_format_by_filename(filename: string): Format;
    get_format_by_kind(kind: FormatKind): Format;
    get_format_default(): Format;
    get_formats(): string[];
    get_icon_default(): Icon;
    get_icon_for_size(width: number, height: number): Icon;
    get_icon_path(): string;
    get_icons(): Icon[];
    get_id(): string;
    get_id_filename(): string;
    get_id_kind(): IdKind;
    get_id_no_prefix(): string;
    get_keywords(locale?: string | null): string[];
    get_kind(): AppKind;
    get_kudos(): string[];
    get_language(locale?: string | null): number;
    get_languages(): string[];
    get_launchable_by_kind(kind: LaunchableKind): Launchable;
    get_launchable_default(): Launchable;
    get_launchables(): Launchable[];
    get_merge_kind(): AppMergeKind;
    get_metadata(): GLib.HashTable<string, string>;
    get_metadata_item(key: string): string;
    get_metadata_license(): string;
    get_mimetypes(): string[];
    get_name(locale?: string | null): string;
    get_names(): GLib.HashTable<any, any>;
    get_origin(): string;
    get_permissions(): string[];
    get_pkgname_default(): string;
    get_pkgnames(): string[];
    get_priority(): number;
    get_project_group(): string;
    get_project_license(): string;
    get_provides(): Provide[];
    get_release(version: string): Release;
    get_release_by_version(version: string): Release;
    get_release_default(): Release;
    get_releases(): Release[];
    get_require_by_value(kind: RequireKind, value: string): Require;
    get_requires(): Require[];
    get_reviews(): Screenshot[];
    get_scope(): AppScope;
    get_screenshot_default(): Screenshot;
    get_screenshots(): Screenshot[];
    get_search_match(): number;
    get_source_file(): string;
    get_source_kind(): FormatKind;
    get_source_pkgname(): string;
    get_state(): AppState;
    get_suggests(): Suggest[];
    get_translations(): Translation[];
    get_trust_flags(): number;
    get_unique_id(): string;
    get_update_contact(): string;
    get_url_item(url_kind: UrlKind): string;
    get_urls(): GLib.HashTable<any, any>;
    get_vetos(): string[];
    has_category(category: string): boolean;
    has_compulsory_for_desktop(desktop: string): boolean;
    has_kudo(kudo: string): boolean;
    has_kudo_kind(kudo: KudoKind): boolean;
    has_permission(permission: string): boolean;
    has_quirk(quirk: AppQuirk): boolean;
    parse_data(data: GLib.Bytes | Uint8Array, flags: number): boolean;
    parse_file(filename: string, flags: number): boolean;
    remove_category(category: string): void;
    remove_format(format: Format): void;
    remove_kudo(kudo: string): void;
    remove_metadata(key: string): void;
    remove_veto(description: string): void;
    search_matches(search: string): number;
    search_matches_all(search: string): number;
    set_branch(branch: string): void;
    set_comment(locale: string | null, comment: string): void;
    set_description(locale: string | null, description: string): void;
    set_developer_name(locale: string | null, developer_name: string): void;
    set_icon_path(icon_path: string): void;
    set_id(id: string): void;
    set_id_kind(id_kind: IdKind): void;
    set_kind(kind: AppKind): void;
    set_merge_kind(merge_kind: AppMergeKind): void;
    set_metadata_license(metadata_license: string): void;
    set_name(locale: string | null, name: string): void;
    set_origin(origin: string): void;
    set_priority(priority: number): void;
    set_project_group(project_group: string): void;
    set_project_license(project_license: string): void;
    set_scope(scope: AppScope): void;
    set_search_match(search_match: number): void;
    set_source_file(source_file: string): void;
    set_source_kind(source_kind: FormatKind): void;
    set_source_pkgname(source_pkgname: string): void;
    set_state(state: AppState): void;
    set_trust_flags(trust_flags: number): void;
    set_update_contact(update_contact: string): void;
    subsume(donor: App): void;
    subsume_full(donor: App, flags: number): void;
    to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    to_xml(): GLib.String;
    validate(flags: number): Problem[];
    static error_quark(): GLib.Quark;
    static guess_source_kind(filename: string): FormatKind;
    static kind_from_string(kind: string): AppKind;
    static kind_to_string(kind: AppKind): string;
    static merge_kind_from_string(merge_kind: string): AppMergeKind;
    static merge_kind_to_string(merge_kind: AppMergeKind): string;
    static scope_from_string(scope: string): AppScope;
    static scope_to_string(scope: AppScope): string;
    static source_kind_from_string(source_kind: string): FormatKind;
    static source_kind_to_string(source_kind: FormatKind): string;
    static state_to_string(state: AppState): string;
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
    get_runtime(): string;
    get_sdk(): string;
    set_id(id: string): void;
    set_kind(kind: BundleKind): void;
    set_runtime(runtime: string): void;
    set_sdk(sdk: string): void;
    static kind_from_string(kind: string): BundleKind;
    static kind_to_string(kind: BundleKind): string;
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

    // Members

    get_filename(): string;
    get_kind(): GLib.ChecksumType;
    get_target(): ChecksumTarget;
    get_value(): string;
    set_filename(filename: string): void;
    set_kind(kind: GLib.ChecksumType): void;
    set_target(target: ChecksumTarget): void;
    set_value(value: string): void;
    static target_from_string(target: string): ChecksumTarget;
    static target_to_string(target: ChecksumTarget): string;
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
    static attribute_from_csm_age(id: string, age: number): ContentRatingValue;
    static attribute_get_description(id: string, value: ContentRatingValue): string;
    static attribute_to_csm_age(id: string, value: ContentRatingValue): number;
    static get_all_rating_ids(): string[];
    static system_format_age(system: ContentRatingSystem, age: number): string | null;
    static system_from_locale(locale: string): ContentRatingSystem;
    static system_get_csm_ages(system: ContentRatingSystem): number[];
    static system_get_formatted_ages(system: ContentRatingSystem): string[];
    static system_to_string(system: ContentRatingSystem): string | null;
    static value_from_string(value: string): ContentRatingValue;
    static value_to_string(value: ContentRatingValue): string;
}
export module Format {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Format extends GObject.Object {
    static $gtype: GObject.GType<Format>;

    constructor(properties?: Partial<Format.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Format.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Format;

    // Members

    equal(format2: Format): boolean;
    get_filename(): string;
    get_kind(): FormatKind;
    set_filename(filename: string): void;
    set_kind(kind: FormatKind): void;
    static guess_kind(filename: string): FormatKind;
    static kind_from_string(kind: string): FormatKind;
    static kind_to_string(kind: FormatKind): string;
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

    convert_to_kind(kind: IconKind): boolean;
    get_filename(): string;
    get_height(): number;
    get_kind(): IconKind;
    get_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_prefix(): string;
    get_scale(): number;
    get_url(): string;
    get_width(): number;
    load(flags: IconLoadFlags): boolean;
    set_filename(filename: string): void;
    set_height(height: number): void;
    set_kind(kind: IconKind): void;
    set_name(name: string): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_prefix(prefix: string): void;
    set_scale(scale: number): void;
    set_url(url: string): void;
    set_width(width: number): void;
    static error_quark(): GLib.Quark;
    static kind_from_string(icon_kind: string): IconKind;
    static kind_to_string(icon_kind: IconKind): string;
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

    equal(image2: Image): boolean;
    get_basename(): string;
    get_height(): number;
    get_kind(): ImageKind;
    get_locale(): string;
    get_md5(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_url(): string;
    get_width(): number;
    load_filename(filename: string): boolean;
    load_filename_full(filename: string, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean;
    save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean;
    save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf;
    set_basename(basename: string): void;
    set_height(height: number): void;
    set_kind(kind: ImageKind): void;
    set_locale(locale: string): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_url(url: string): void;
    set_width(width: number): void;
    static kind_from_string(kind: string): ImageKind;
    static kind_to_string(kind: ImageKind): string;
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

    get_kind(): LaunchableKind;
    get_value(): string;
    set_kind(kind: LaunchableKind): void;
    set_value(value: string): void;
    static kind_from_string(kind: string): LaunchableKind;
    static kind_to_string(kind: LaunchableKind): string;
}
export module Problem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Problem extends GObject.Object {
    static $gtype: GObject.GType<Problem>;

    constructor(properties?: Partial<Problem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Problem.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Problem;

    // Members

    get_kind(): ProblemKind;
    get_line_number(): number;
    get_message(): string;
    set_kind(kind: ProblemKind): void;
    set_line_number(line_number: number): void;
    set_message(message: string): void;
    static kind_to_string(kind: ProblemKind): string;
}
export module Provide {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Provide extends GObject.Object {
    static $gtype: GObject.GType<Provide>;

    constructor(properties?: Partial<Provide.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Provide.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Provide;

    // Members

    get_kind(): ProvideKind;
    get_value(): string;
    set_kind(kind: ProvideKind): void;
    set_value(value: string): void;
    static kind_from_string(kind: string): ProvideKind;
    static kind_to_string(kind: ProvideKind): string;
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

    add_checksum(checksum: Checksum): void;
    add_location(location: string): void;
    get_blob(filename: string): GLib.Bytes;
    get_checksum_by_fn(fn: string): Checksum;
    get_checksum_by_target(target: ChecksumTarget): Checksum;
    get_checksums(): Checksum[];
    get_description(locale?: string | null): string;
    get_install_duration(): number;
    get_kind(): ReleaseKind;
    get_location_default(): string;
    get_locations(): string[];
    get_size(kind: SizeKind): number;
    get_state(): ReleaseState;
    get_timestamp(): number;
    get_urgency(): UrgencyKind;
    get_url(url_kind: UrlKind): string;
    get_version(): string;
    set_blob(filename: string, blob: GLib.Bytes | Uint8Array): void;
    set_description(locale: string | null, description: string): void;
    set_install_duration(install_duration: number): void;
    set_kind(kind: ReleaseKind): void;
    set_size(kind: SizeKind, size: number): void;
    set_state(state: ReleaseState): void;
    set_timestamp(timestamp: number): void;
    set_urgency(urgency: UrgencyKind): void;
    set_url(url_kind: UrlKind, url: string): void;
    set_version(version: string): void;
    vercmp(rel2: Release): number;
    static kind_from_string(kind_str: string): ReleaseKind;
    static kind_to_string(kind: ReleaseKind): string;
    static state_from_string(state: string): ReleaseState;
    static state_to_string(state: ReleaseState): string;
}
export module Require {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Require extends GObject.Object {
    static $gtype: GObject.GType<Require>;

    constructor(properties?: Partial<Require.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Require.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Require;

    // Members

    equal(require2: Require): boolean;
    get_compare(): RequireCompare;
    get_kind(): RequireKind;
    get_value(): string;
    get_version(): string;
    set_compare(compare: RequireCompare): void;
    set_kind(kind: RequireKind): void;
    set_value(value: string): void;
    set_version(version: string): void;
    version_compare(version: string): boolean;
    static compare_from_string(compare: string): RequireCompare;
    static compare_to_string(compare: RequireCompare): string;
    static kind_from_string(kind: string): RequireKind;
    static kind_to_string(kind: RequireKind): string;
}
export module Review {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        date: Review;
        description: string;
        flags: number;
        id: string;
        locale: string;
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
    equal(screenshot2: Screenshot): boolean;
    get_caption(locale?: string | null): string;
    get_image(width: number, height: number): Image;
    get_image_for_locale(locale: string | null, width: number, height: number): Image;
    get_images(): Image[];
    get_images_for_locale(locale: string): Image[];
    get_kind(): ScreenshotKind;
    get_priority(): number;
    get_source(): Image;
    set_caption(locale: string | null, caption: string): void;
    set_kind(kind: ScreenshotKind): void;
    set_priority(priority: number): void;
    static kind_from_string(kind: string): ScreenshotKind;
    static kind_to_string(kind: ScreenshotKind): string;
}
export module Store {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Store extends GObject.Object {
    static $gtype: GObject.GType<Store>;

    constructor(properties?: Partial<Store.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Store.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "app-added", callback: (_source: this, app: App) => void): number;
    connect_after(signal: "app-added", callback: (_source: this, app: App) => void): number;
    emit(signal: "app-added", app: App): void;
    connect(signal: "app-changed", callback: (_source: this, app: App) => void): number;
    connect_after(signal: "app-changed", callback: (_source: this, app: App) => void): number;
    emit(signal: "app-changed", app: App): void;
    connect(signal: "app-removed", callback: (_source: this, app: App) => void): number;
    connect_after(signal: "app-removed", callback: (_source: this, app: App) => void): number;
    emit(signal: "app-removed", app: App): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](): Store;

    // Members

    add_app(app: App): void;
    add_apps(apps: App[]): void;
    add_filter(kind: AppKind): void;
    add_metadata_index(key: string): void;
    convert_icons(kind: IconKind): boolean;
    dup_apps(): App[];
    dup_apps_by_id_merge(id: string): App[];
    from_bytes(bytes: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): boolean;
    from_file(file: Gio.File, icon_root?: string | null, cancellable?: Gio.Cancellable | null): boolean;
    from_xml(data: string, icon_root?: string | null): boolean;
    get_add_flags(): number;
    get_api_version(): number;
    get_app_by_id(id: string): App;
    get_app_by_id_ignore_prefix(id: string): App;
    get_app_by_id_with_fallbacks(id: string): App;
    get_app_by_launchable(kind: LaunchableKind, value: string): App;
    get_app_by_pkgname(pkgname: string): App;
    get_app_by_pkgnames(pkgnames: string): App;
    get_app_by_provide(kind: ProvideKind, value: string): App;
    get_app_by_unique_id(unique_id: string, search_flags: number): App;
    get_apps(): App[];
    get_apps_by_id(id: string): App[];
    get_apps_by_id_merge(id: string): App[];
    get_apps_by_metadata(key: string, value: string): App[];
    get_apps_by_provide(kind: ProvideKind, value: string): App[];
    get_builder_id(): string;
    get_destdir(): string;
    get_origin(): string;
    get_search_match(): number;
    get_size(): number;
    get_version(): string;
    get_watch_flags(): number;
    load(flags: number, cancellable?: Gio.Cancellable | null): boolean;
    load_async(flags: StoreLoadFlags, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    load_async(
        flags: StoreLoadFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    load_async(
        flags: StoreLoadFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    load_finish(result: Gio.AsyncResult): boolean;
    load_path(path: string, cancellable?: Gio.Cancellable | null): boolean;
    load_path_async(path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    load_path_async(
        path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    load_path_async(
        path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    load_path_finish(result: Gio.AsyncResult): boolean;
    load_search_cache(): void;
    remove_all(): void;
    remove_app(app: App): void;
    remove_app_by_id(id: string): void;
    remove_apps_with_veto(): void;
    remove_filter(kind: AppKind): void;
    set_add_flags(add_flags: number): void;
    set_api_version(api_version: number): void;
    set_builder_id(builder_id: string): void;
    set_destdir(destdir: string): void;
    set_origin(origin: string): void;
    set_search_match(search_match: number): void;
    set_version(api_version: string): void;
    set_watch_flags(watch_flags: number): void;
    to_file(file: Gio.File, flags: number, cancellable?: Gio.Cancellable | null): boolean;
    to_xml(flags: number): GLib.String;
    validate(flags: number): Problem[];
    vfunc_app_added(app: App): void;
    vfunc_app_changed(app: App): void;
    vfunc_app_removed(app: App): void;
    vfunc_changed(): void;
    static error_quark(): GLib.Quark;
}
export module Suggest {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Suggest extends GObject.Object {
    static $gtype: GObject.GType<Suggest>;

    constructor(properties?: Partial<Suggest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Suggest.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Suggest;

    // Members

    add_id(id: string): void;
    get_ids(): string[];
    get_kind(): SuggestKind;
    set_kind(kind: SuggestKind): void;
    static kind_from_string(kind: string): SuggestKind;
    static kind_to_string(kind: SuggestKind): string;
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
    set_id(id: string): void;
    set_kind(kind: TranslationKind): void;
    static kind_from_string(kind: string): TranslationKind;
    static kind_to_string(kind: TranslationKind): string;
}

export type AppSourceKind = FormatKind;
export type ImageAlphaFlags = number;
export type Node = GLib.Node;
