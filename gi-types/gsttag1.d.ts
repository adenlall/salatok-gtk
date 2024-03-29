/**
 * GstTag 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GObject from "gobject2";

export const TAG_ACOUSTID_FINGERPRINT: string;
export const TAG_ACOUSTID_ID: string;
export const TAG_CAPTURING_CONTRAST: string;
export const TAG_CAPTURING_DIGITAL_ZOOM_RATIO: string;
export const TAG_CAPTURING_EXPOSURE_COMPENSATION: string;
export const TAG_CAPTURING_EXPOSURE_MODE: string;
export const TAG_CAPTURING_EXPOSURE_PROGRAM: string;
export const TAG_CAPTURING_FLASH_FIRED: string;
export const TAG_CAPTURING_FLASH_MODE: string;
export const TAG_CAPTURING_FOCAL_LENGTH: string;
export const TAG_CAPTURING_FOCAL_LENGTH_35_MM: string;
export const TAG_CAPTURING_FOCAL_RATIO: string;
export const TAG_CAPTURING_GAIN_ADJUSTMENT: string;
export const TAG_CAPTURING_ISO_SPEED: string;
export const TAG_CAPTURING_METERING_MODE: string;
export const TAG_CAPTURING_SATURATION: string;
export const TAG_CAPTURING_SCENE_CAPTURE_TYPE: string;
export const TAG_CAPTURING_SHARPNESS: string;
export const TAG_CAPTURING_SHUTTER_SPEED: string;
export const TAG_CAPTURING_SOURCE: string;
export const TAG_CAPTURING_WHITE_BALANCE: string;
export const TAG_CDDA_CDDB_DISCID: string;
export const TAG_CDDA_CDDB_DISCID_FULL: string;
export const TAG_CDDA_MUSICBRAINZ_DISCID: string;
export const TAG_CDDA_MUSICBRAINZ_DISCID_FULL: string;
export const TAG_CMML_CLIP: string;
export const TAG_CMML_HEAD: string;
export const TAG_CMML_STREAM: string;
export const TAG_ID3V2_HEADER_SIZE: number;
export const TAG_IMAGE_HORIZONTAL_PPI: string;
export const TAG_IMAGE_VERTICAL_PPI: string;
export const TAG_MUSICAL_KEY: string;
export const TAG_MUSICBRAINZ_ALBUMARTISTID: string;
export const TAG_MUSICBRAINZ_ALBUMID: string;
export const TAG_MUSICBRAINZ_ARTISTID: string;
export const TAG_MUSICBRAINZ_RELEASEGROUPID: string;
export const TAG_MUSICBRAINZ_RELEASETRACKID: string;
export const TAG_MUSICBRAINZ_TRACKID: string;
export const TAG_MUSICBRAINZ_TRMID: string;
export function tag_check_language_code(lang_code: string): boolean;
export function tag_freeform_string_to_utf8(data: number[], env_vars: string[]): string | null;
export function tag_from_id3_tag(id3_tag: string): string | null;
export function tag_from_id3_user_tag(type: string, id3_user_tag: string): string | null;
export function tag_from_vorbis_tag(vorbis_tag: string): string | null;
export function tag_get_id3v2_tag_size(buffer: Gst.Buffer): number;
export function tag_get_language_code_iso_639_1(lang_code: string): string | null;
export function tag_get_language_code_iso_639_2B(lang_code: string): string | null;
export function tag_get_language_code_iso_639_2T(lang_code: string): string | null;
export function tag_get_language_codes(): string[];
export function tag_get_language_name(language_code: string): string | null;
export function tag_get_license_description(license_ref: string): string | null;
export function tag_get_license_flags(license_ref: string): TagLicenseFlags;
export function tag_get_license_jurisdiction(license_ref: string): string | null;
export function tag_get_license_nick(license_ref: string): string | null;
export function tag_get_license_title(license_ref: string): string | null;
export function tag_get_license_version(license_ref: string): string | null;
export function tag_get_licenses(): string[];
export function tag_id3_genre_count(): number;
export function tag_id3_genre_get(id: number): string | null;
export function tag_image_data_to_image_sample(
    image_data: Uint8Array | string,
    image_type: TagImageType
): Gst.Sample | null;
export function tag_list_add_id3_image(
    tag_list: Gst.TagList,
    image_data: Uint8Array | string,
    id3_picture_type: number
): boolean;
export function tag_list_from_exif_buffer(buffer: Gst.Buffer, byte_order: number, base_offset: number): Gst.TagList;
export function tag_list_from_exif_buffer_with_tiff_header(buffer: Gst.Buffer): Gst.TagList;
export function tag_list_from_id3v2_tag(buffer: Gst.Buffer): Gst.TagList | null;
export function tag_list_from_vorbiscomment(
    data: Uint8Array | string,
    id_data: Uint8Array | string
): [Gst.TagList | null, string];
export function tag_list_from_vorbiscomment_buffer(
    buffer: Gst.Buffer,
    id_data: Uint8Array | string
): [Gst.TagList | null, string];
export function tag_list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList | null;
export function tag_list_new_from_id3v1(data: Uint8Array | string): Gst.TagList | null;
export function tag_list_to_exif_buffer(taglist: Gst.TagList, byte_order: number, base_offset: number): Gst.Buffer;
export function tag_list_to_exif_buffer_with_tiff_header(taglist: Gst.TagList): Gst.Buffer;
export function tag_list_to_vorbiscomment_buffer(
    list: Gst.TagList,
    id_data: Uint8Array | string,
    vendor_string?: string | null
): Gst.Buffer;
export function tag_list_to_xmp_buffer(list: Gst.TagList, read_only: boolean, schemas: string[]): Gst.Buffer | null;
export function tag_parse_extended_comment(
    ext_comment: string,
    fail_if_no_key: boolean
): [boolean, string, string, string];
export function tag_register_musicbrainz_tags(): void;
export function tag_to_id3_tag(gst_tag: string): string | null;
export function tag_to_vorbis_comments(list: Gst.TagList, tag: string): string[];
export function tag_to_vorbis_tag(gst_tag: string): string | null;
export function tag_xmp_list_schemas(): string[];
export function vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;

export namespace TagDemuxResult {
    export const $gtype: GObject.GType<TagDemuxResult>;
}

export enum TagDemuxResult {
    BROKEN_TAG = 0,
    AGAIN = 1,
    OK = 2,
}

export namespace TagImageType {
    export const $gtype: GObject.GType<TagImageType>;
}

export enum TagImageType {
    NONE = -1,
    UNDEFINED = 0,
    FRONT_COVER = 1,
    BACK_COVER = 2,
    LEAFLET_PAGE = 3,
    MEDIUM = 4,
    LEAD_ARTIST = 5,
    ARTIST = 6,
    CONDUCTOR = 7,
    BAND_ORCHESTRA = 8,
    COMPOSER = 9,
    LYRICIST = 10,
    RECORDING_LOCATION = 11,
    DURING_RECORDING = 12,
    DURING_PERFORMANCE = 13,
    VIDEO_CAPTURE = 14,
    FISH = 15,
    ILLUSTRATION = 16,
    BAND_ARTIST_LOGO = 17,
    PUBLISHER_STUDIO_LOGO = 18,
}

export namespace TagLicenseFlags {
    export const $gtype: GObject.GType<TagLicenseFlags>;
}

export enum TagLicenseFlags {
    PERMITS_REPRODUCTION = 1,
    PERMITS_DISTRIBUTION = 2,
    PERMITS_DERIVATIVE_WORKS = 4,
    PERMITS_SHARING = 8,
    REQUIRES_NOTICE = 256,
    REQUIRES_ATTRIBUTION = 512,
    REQUIRES_SHARE_ALIKE = 1024,
    REQUIRES_SOURCE_CODE = 2048,
    REQUIRES_COPYLEFT = 4096,
    REQUIRES_LESSER_COPYLEFT = 8192,
    PROHIBITS_COMMERCIAL_USE = 65536,
    PROHIBITS_HIGH_INCOME_NATION_USE = 131072,
    CREATIVE_COMMONS_LICENSE = 16777216,
    FREE_SOFTWARE_FOUNDATION_LICENSE = 33554432,
}
export module TagDemux {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class TagDemux extends Gst.Element {
    static $gtype: GObject.GType<TagDemux>;

    constructor(properties?: Partial<TagDemux.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TagDemux.ConstructorProperties>, ...args: any[]): void;

    // Fields
    element: Gst.Element;

    // Members

    vfunc_identify_tag(buffer: Gst.Buffer, start_tag: boolean, tag_size: number): boolean;
    vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList;
    vfunc_parse_tag(buffer: Gst.Buffer, start_tag: boolean, tag_size: number, tags: Gst.TagList): TagDemuxResult;
}
export module TagMux {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class TagMux extends Gst.Element implements Gst.TagSetter {
    static $gtype: GObject.GType<TagMux>;

    constructor(properties?: Partial<TagMux.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TagMux.ConstructorProperties>, ...args: any[]): void;

    // Fields
    element: Gst.Element;

    // Members

    vfunc_render_end_tag(tag_list: Gst.TagList): Gst.Buffer;
    vfunc_render_start_tag(tag_list: Gst.TagList): Gst.Buffer;

    // Implemented Members

    add_tag_value(mode: Gst.TagMergeMode, tag: string, value: GObject.Value | any): void;
    get_tag_list(): Gst.TagList | null;
    get_tag_merge_mode(): Gst.TagMergeMode;
    merge_tags(list: Gst.TagList, mode: Gst.TagMergeMode): void;
    reset_tags(): void;
    set_tag_merge_mode(mode: Gst.TagMergeMode): void;
}

export class TagDemuxPrivate {
    static $gtype: GObject.GType<TagDemuxPrivate>;

    constructor(copy: TagDemuxPrivate);
}

export class TagMuxPrivate {
    static $gtype: GObject.GType<TagMuxPrivate>;

    constructor(copy: TagMuxPrivate);
}

export interface TagXmpWriterNamespace {
    $gtype: GObject.GType<TagXmpWriter>;
    prototype: TagXmpWriterPrototype;
}
export type TagXmpWriter = TagXmpWriterPrototype;
export interface TagXmpWriterPrototype extends Gst.Element {
    // Members

    add_all_schemas(): void;
    add_schema(schema: string): void;
    has_schema(schema: string): boolean;
    remove_all_schemas(): void;
    remove_schema(schema: string): void;
    tag_list_to_xmp_buffer(taglist: Gst.TagList, read_only: boolean): Gst.Buffer;
}

export const TagXmpWriter: TagXmpWriterNamespace;
