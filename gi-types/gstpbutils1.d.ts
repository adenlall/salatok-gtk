/**
 * GstPbutils 1.0
 *
 * Generated from 1.0
 */

import * as GstVideo from "gstvideo1";
import * as GstAudio from "gstaudio1";
import * as GObject from "gobject2";
import * as Gst from "gst1";
import * as GLib from "glib2";

export const ENCODING_CATEGORY_CAPTURE: string;
export const ENCODING_CATEGORY_DEVICE: string;
export const ENCODING_CATEGORY_FILE_EXTENSION: string;
export const ENCODING_CATEGORY_ONLINE_SERVICE: string;
export const ENCODING_CATEGORY_STORAGE_EDITING: string;
export const PLUGINS_BASE_VERSION_MAJOR: number;
export const PLUGINS_BASE_VERSION_MICRO: number;
export const PLUGINS_BASE_VERSION_MINOR: number;
export const PLUGINS_BASE_VERSION_NANO: number;
export function codec_utils_aac_caps_set_level_and_profile(caps: Gst.Caps, audio_config: Uint8Array | string): boolean;
export function codec_utils_aac_get_channels(audio_config: Uint8Array | string): number;
export function codec_utils_aac_get_index_from_sample_rate(rate: number): number;
export function codec_utils_aac_get_level(audio_config: Uint8Array | string): string | null;
export function codec_utils_aac_get_profile(audio_config: Uint8Array | string): string | null;
export function codec_utils_aac_get_sample_rate(audio_config: Uint8Array | string): number;
export function codec_utils_aac_get_sample_rate_from_index(sr_idx: number): number;
export function codec_utils_caps_from_mime_codec(codecs_field: string): Gst.Caps | null;
export function codec_utils_caps_get_mime_codec(caps: Gst.Caps): string | null;
export function codec_utils_h264_caps_set_level_and_profile(caps: Gst.Caps, sps: Uint8Array | string): boolean;
export function codec_utils_h264_get_level(sps: Uint8Array | string): string | null;
export function codec_utils_h264_get_level_idc(level: string): number;
export function codec_utils_h264_get_profile(sps: Uint8Array | string): string | null;
export function codec_utils_h264_get_profile_flags_level(
    codec_data: Uint8Array | string
): [boolean, number, number, number];
export function codec_utils_h265_caps_set_level_tier_and_profile(
    caps: Gst.Caps,
    profile_tier_level: Uint8Array | string
): boolean;
export function codec_utils_h265_get_level(profile_tier_level: Uint8Array | string): string | null;
export function codec_utils_h265_get_level_idc(level: string): number;
export function codec_utils_h265_get_profile(profile_tier_level: Uint8Array | string): string | null;
export function codec_utils_h265_get_tier(profile_tier_level: Uint8Array | string): string | null;
export function codec_utils_mpeg4video_caps_set_level_and_profile(
    caps: Gst.Caps,
    vis_obj_seq: Uint8Array | string
): boolean;
export function codec_utils_mpeg4video_get_level(vis_obj_seq: Uint8Array | string): string | null;
export function codec_utils_mpeg4video_get_profile(vis_obj_seq: Uint8Array | string): string | null;
export function codec_utils_opus_create_caps(
    rate: number,
    channels: number,
    channel_mapping_family: number,
    stream_count: number,
    coupled_count: number,
    channel_mapping?: Uint8Array | null
): Gst.Caps | null;
export function codec_utils_opus_create_caps_from_header(
    header: Gst.Buffer,
    comments?: Gst.Buffer | null
): Gst.Caps | null;
export function codec_utils_opus_create_header(
    rate: number,
    channels: number,
    channel_mapping_family: number,
    stream_count: number,
    coupled_count: number,
    channel_mapping: Uint8Array | null,
    pre_skip: number,
    output_gain: number
): Gst.Buffer | null;
export function codec_utils_opus_parse_caps(
    caps: Gst.Caps
): [boolean, number, number, number, number, number, Uint8Array | null];
export function codec_utils_opus_parse_header(
    header: Gst.Buffer
): [boolean, number, number, number, number, number, Uint8Array | null, number, number];
export function encoding_list_all_targets(categoryname?: string | null): EncodingTarget[];
export function encoding_list_available_categories(): string[];
export function install_plugins_async(
    details: string[],
    ctx: InstallPluginsContext | null,
    func: InstallPluginsResultFunc
): InstallPluginsReturn;
export function install_plugins_installation_in_progress(): boolean;
export function install_plugins_return_get_name(ret: InstallPluginsReturn): string;
export function install_plugins_supported(): boolean;
export function install_plugins_sync(details: string[], ctx?: InstallPluginsContext | null): InstallPluginsReturn;
export function is_missing_plugin_message(msg: Gst.Message): boolean;
export function missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string;
export function missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message;
export function missing_element_installer_detail_new(factory_name: string): string;
export function missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message;
export function missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string;
export function missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message;
export function missing_plugin_message_get_description(msg: Gst.Message): string;
export function missing_plugin_message_get_installer_detail(msg: Gst.Message): string | null;
export function missing_uri_sink_installer_detail_new(protocol: string): string;
export function missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message;
export function missing_uri_source_installer_detail_new(protocol: string): string;
export function missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message;
export function pb_utils_add_codec_description_to_tag_list(
    taglist: Gst.TagList,
    codec_tag: string | null,
    caps: Gst.Caps
): boolean;
export function pb_utils_get_caps_description_flags(caps: Gst.Caps): PbUtilsCapsDescriptionFlags;
export function pb_utils_get_codec_description(caps: Gst.Caps): string | null;
export function pb_utils_get_decoder_description(caps: Gst.Caps): string;
export function pb_utils_get_element_description(factory_name: string): string;
export function pb_utils_get_encoder_description(caps: Gst.Caps): string;
export function pb_utils_get_file_extension_from_caps(caps: Gst.Caps): string | null;
export function pb_utils_get_sink_description(protocol: string): string;
export function pb_utils_get_source_description(protocol: string): string;
export function pb_utils_init(): void;
export function plugins_base_version(): [number, number, number, number];
export function plugins_base_version_string(): string;
export type AudioVisualizerShaderFunc = (
    scope: AudioVisualizer,
    s: GstVideo.VideoFrame,
    d: GstVideo.VideoFrame
) => void;
export type InstallPluginsResultFunc = (result: InstallPluginsReturn) => void;

export namespace AudioVisualizerShader {
    export const $gtype: GObject.GType<AudioVisualizerShader>;
}

export enum AudioVisualizerShader {
    NONE = 0,
    FADE = 1,
    FADE_AND_MOVE_UP = 2,
    FADE_AND_MOVE_DOWN = 3,
    FADE_AND_MOVE_LEFT = 4,
    FADE_AND_MOVE_RIGHT = 5,
    FADE_AND_MOVE_HORIZ_OUT = 6,
    FADE_AND_MOVE_HORIZ_IN = 7,
    FADE_AND_MOVE_VERT_OUT = 8,
    FADE_AND_MOVE_VERT_IN = 9,
}

export namespace DiscovererResult {
    export const $gtype: GObject.GType<DiscovererResult>;
}

export enum DiscovererResult {
    OK = 0,
    URI_INVALID = 1,
    ERROR = 2,
    TIMEOUT = 3,
    BUSY = 4,
    MISSING_PLUGINS = 5,
}

export namespace InstallPluginsReturn {
    export const $gtype: GObject.GType<InstallPluginsReturn>;
}

export enum InstallPluginsReturn {
    SUCCESS = 0,
    NOT_FOUND = 1,
    ERROR = 2,
    PARTIAL_SUCCESS = 3,
    USER_ABORT = 4,
    CRASHED = 100,
    INVALID = 101,
    STARTED_OK = 200,
    INTERNAL_FAILURE = 201,
    HELPER_MISSING = 202,
    INSTALL_IN_PROGRESS = 203,
}

export namespace DiscovererSerializeFlags {
    export const $gtype: GObject.GType<DiscovererSerializeFlags>;
}

export enum DiscovererSerializeFlags {
    BASIC = 0,
    CAPS = 1,
    TAGS = 2,
    MISC = 4,
    ALL = 7,
}

export namespace PbUtilsCapsDescriptionFlags {
    export const $gtype: GObject.GType<PbUtilsCapsDescriptionFlags>;
}

export enum PbUtilsCapsDescriptionFlags {
    CONTAINER = 1,
    AUDIO = 2,
    VIDEO = 4,
    IMAGE = 8,
    SUBTITLE = 16,
    TAG = 32,
    GENERIC = 64,
    METADATA = 128,
}
export module AudioVisualizer {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        shade_amount: number;
        shadeAmount: number;
        shader: AudioVisualizerShader;
    }
}
export abstract class AudioVisualizer extends Gst.Element {
    static $gtype: GObject.GType<AudioVisualizer>;

    constructor(properties?: Partial<AudioVisualizer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioVisualizer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get shade_amount(): number;
    set shade_amount(val: number);
    get shadeAmount(): number;
    set shadeAmount(val: number);
    get shader(): AudioVisualizerShader;
    set shader(val: AudioVisualizerShader);

    // Fields
    req_spf: number;
    vinfo: GstVideo.VideoInfo;
    ainfo: GstAudio.AudioInfo;

    // Members

    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_render(audio: Gst.Buffer, video: GstVideo.VideoFrame): boolean;
    vfunc_setup(): boolean;
}
export module Discoverer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        timeout: number;
        use_cache: boolean;
        useCache: boolean;
    }
}
export class Discoverer extends GObject.Object {
    static $gtype: GObject.GType<Discoverer>;

    constructor(properties?: Partial<Discoverer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Discoverer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get timeout(): number;
    set timeout(val: number);
    get use_cache(): boolean;
    set use_cache(val: boolean);
    get useCache(): boolean;
    set useCache(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "discovered",
        callback: (_source: this, info: DiscovererInfo, error: GLib.Error | null) => void
    ): number;
    connect_after(
        signal: "discovered",
        callback: (_source: this, info: DiscovererInfo, error: GLib.Error | null) => void
    ): number;
    emit(signal: "discovered", info: DiscovererInfo, error: GLib.Error | null): void;
    connect(signal: "finished", callback: (_source: this) => void): number;
    connect_after(signal: "finished", callback: (_source: this) => void): number;
    emit(signal: "finished"): void;
    connect(signal: "source-setup", callback: (_source: this, source: Gst.Element) => void): number;
    connect_after(signal: "source-setup", callback: (_source: this, source: Gst.Element) => void): number;
    emit(signal: "source-setup", source: Gst.Element): void;
    connect(signal: "starting", callback: (_source: this) => void): number;
    connect_after(signal: "starting", callback: (_source: this) => void): number;
    emit(signal: "starting"): void;

    // Constructors

    static ["new"](timeout: Gst.ClockTime): Discoverer;

    // Members

    discover_uri(uri: string): DiscovererInfo;
    discover_uri_async(uri: string): boolean;
    start(): void;
    stop(): void;
    vfunc_discovered(info: DiscovererInfo, err: GLib.Error): void;
    vfunc_finished(): void;
    vfunc_source_setup(source: Gst.Element): void;
    vfunc_starting(): void;
}
export module DiscovererAudioInfo {
    export interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class DiscovererAudioInfo extends DiscovererStreamInfo {
    static $gtype: GObject.GType<DiscovererAudioInfo>;

    constructor(properties?: Partial<DiscovererAudioInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DiscovererAudioInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bitrate(): number;
    get_channel_mask(): number;
    get_channels(): number;
    get_depth(): number;
    get_language(): string | null;
    get_max_bitrate(): number;
    get_sample_rate(): number;
}
export module DiscovererContainerInfo {
    export interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class DiscovererContainerInfo extends DiscovererStreamInfo {
    static $gtype: GObject.GType<DiscovererContainerInfo>;

    constructor(properties?: Partial<DiscovererContainerInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DiscovererContainerInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_streams(): DiscovererStreamInfo[];
    get_tags(): Gst.TagList | null;
}
export module DiscovererInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DiscovererInfo extends GObject.Object {
    static $gtype: GObject.GType<DiscovererInfo>;

    constructor(properties?: Partial<DiscovererInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DiscovererInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    copy(): DiscovererInfo;
    get_audio_streams(): DiscovererAudioInfo[];
    get_container_streams(): DiscovererContainerInfo[];
    get_duration(): Gst.ClockTime;
    get_live(): boolean;
    get_misc(): Gst.Structure | null;
    get_missing_elements_installer_details(): string[];
    get_result(): DiscovererResult;
    get_seekable(): boolean;
    get_stream_info(): DiscovererStreamInfo | null;
    get_stream_list(): DiscovererStreamInfo[];
    get_streams(streamtype: GObject.GType): DiscovererStreamInfo[];
    get_subtitle_streams(): DiscovererSubtitleInfo[];
    get_tags(): Gst.TagList | null;
    get_toc(): Gst.Toc | null;
    get_uri(): string;
    get_video_streams(): DiscovererVideoInfo[];
    to_variant(flags: DiscovererSerializeFlags): GLib.Variant;
    static from_variant(variant: GLib.Variant): DiscovererInfo;
}
export module DiscovererStreamInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DiscovererStreamInfo extends GObject.Object {
    static $gtype: GObject.GType<DiscovererStreamInfo>;

    constructor(properties?: Partial<DiscovererStreamInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DiscovererStreamInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_caps(): Gst.Caps | null;
    get_misc(): Gst.Structure | null;
    get_next(): DiscovererStreamInfo | null;
    get_previous(): DiscovererStreamInfo | null;
    get_stream_id(): string;
    get_stream_number(): number;
    get_stream_type_nick(): string;
    get_tags(): Gst.TagList | null;
    get_toc(): Gst.Toc | null;
    static list_free(infos: DiscovererStreamInfo[]): void;
}
export module DiscovererSubtitleInfo {
    export interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class DiscovererSubtitleInfo extends DiscovererStreamInfo {
    static $gtype: GObject.GType<DiscovererSubtitleInfo>;

    constructor(properties?: Partial<DiscovererSubtitleInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DiscovererSubtitleInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_language(): string | null;
}
export module DiscovererVideoInfo {
    export interface ConstructorProperties extends DiscovererStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class DiscovererVideoInfo extends DiscovererStreamInfo {
    static $gtype: GObject.GType<DiscovererVideoInfo>;

    constructor(properties?: Partial<DiscovererVideoInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DiscovererVideoInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bitrate(): number;
    get_depth(): number;
    get_framerate_denom(): number;
    get_framerate_num(): number;
    get_height(): number;
    get_max_bitrate(): number;
    get_par_denom(): number;
    get_par_num(): number;
    get_width(): number;
    is_image(): boolean;
    is_interlaced(): boolean;
}
export module EncodingAudioProfile {
    export interface ConstructorProperties extends EncodingProfile.ConstructorProperties {
        [key: string]: any;
    }
}
export class EncodingAudioProfile extends EncodingProfile {
    static $gtype: GObject.GType<EncodingAudioProfile>;

    constructor(properties?: Partial<EncodingAudioProfile.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EncodingAudioProfile.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        format: Gst.Caps,
        preset: string | null,
        restriction: Gst.Caps | null,
        presence: number
    ): EncodingAudioProfile;
}
export module EncodingContainerProfile {
    export interface ConstructorProperties extends EncodingProfile.ConstructorProperties {
        [key: string]: any;
    }
}
export class EncodingContainerProfile extends EncodingProfile {
    static $gtype: GObject.GType<EncodingContainerProfile>;

    constructor(properties?: Partial<EncodingContainerProfile.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EncodingContainerProfile.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        name: string | null,
        description: string | null,
        format: Gst.Caps,
        preset?: string | null
    ): EncodingContainerProfile;

    // Members

    add_profile(profile: EncodingProfile): boolean;
    contains_profile(profile: EncodingProfile): boolean;
    get_profiles(): EncodingProfile[];
}
export module EncodingProfile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        element_properties: Gst.Structure;
        elementProperties: Gst.Structure;
        restriction_caps: Gst.Caps;
        restrictionCaps: Gst.Caps;
    }
}
export class EncodingProfile extends GObject.Object {
    static $gtype: GObject.GType<EncodingProfile>;

    constructor(properties?: Partial<EncodingProfile.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EncodingProfile.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get element_properties(): Gst.Structure;
    set element_properties(val: Gst.Structure);
    get elementProperties(): Gst.Structure;
    set elementProperties(val: Gst.Structure);
    get restriction_caps(): Gst.Caps;
    set restriction_caps(val: Gst.Caps);
    get restrictionCaps(): Gst.Caps;
    set restrictionCaps(val: Gst.Caps);

    // Members

    copy(): EncodingProfile;
    get_allow_dynamic_output(): boolean;
    get_description(): string | null;
    get_element_properties(): Gst.Structure | null;
    get_file_extension(): string | null;
    get_format(): Gst.Caps;
    get_input_caps(): Gst.Caps;
    get_name(): string | null;
    get_presence(): number;
    get_preset(): string | null;
    get_preset_name(): string | null;
    get_restriction(): Gst.Caps | null;
    get_single_segment(): boolean;
    get_type_nick(): string;
    is_enabled(): boolean;
    is_equal(b: EncodingProfile): boolean;
    set_allow_dynamic_output(allow_dynamic_output: boolean): void;
    set_description(description?: string | null): void;
    set_element_properties(element_properties: Gst.Structure): void;
    set_enabled(enabled: boolean): void;
    set_format(format: Gst.Caps): void;
    set_name(name?: string | null): void;
    set_presence(presence: number): void;
    set_preset(preset?: string | null): void;
    set_preset_name(preset_name?: string | null): void;
    set_restriction(restriction?: Gst.Caps | null): void;
    set_single_segment(single_segment: boolean): void;
    static find(targetname: string, profilename?: string | null, category?: string | null): EncodingProfile | null;
    static from_discoverer(info: DiscovererInfo): EncodingProfile | null;
}
export module EncodingTarget {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class EncodingTarget extends GObject.Object {
    static $gtype: GObject.GType<EncodingTarget>;

    constructor(properties?: Partial<EncodingTarget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EncodingTarget.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](name: string, category: string, description: string, profiles: EncodingProfile[]): EncodingTarget;

    // Members

    add_profile(profile: EncodingProfile): boolean;
    get_category(): string;
    get_description(): string;
    get_name(): string;
    get_path(): string | null;
    get_profile(name: string): EncodingProfile | null;
    get_profiles(): EncodingProfile[];
    save(): boolean;
    save_to_file(filepath: string): boolean;
    static load(name: string, category?: string | null): EncodingTarget;
    static load_from_file(filepath: string): EncodingTarget;
}
export module EncodingVideoProfile {
    export interface ConstructorProperties extends EncodingProfile.ConstructorProperties {
        [key: string]: any;
    }
}
export class EncodingVideoProfile extends EncodingProfile {
    static $gtype: GObject.GType<EncodingVideoProfile>;

    constructor(properties?: Partial<EncodingVideoProfile.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EncodingVideoProfile.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        format: Gst.Caps,
        preset: string | null,
        restriction: Gst.Caps | null,
        presence: number
    ): EncodingVideoProfile;

    // Members

    get_pass(): number;
    get_variableframerate(): boolean;
    set_pass(pass: number): void;
    set_variableframerate(variableframerate: boolean): void;
}

export class AudioVisualizerPrivate {
    static $gtype: GObject.GType<AudioVisualizerPrivate>;

    constructor(copy: AudioVisualizerPrivate);
}

export class DiscovererPrivate {
    static $gtype: GObject.GType<DiscovererPrivate>;

    constructor(copy: DiscovererPrivate);
}

export class InstallPluginsContext {
    static $gtype: GObject.GType<InstallPluginsContext>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: InstallPluginsContext);

    // Constructors
    static ["new"](): InstallPluginsContext;

    // Members
    copy(): InstallPluginsContext;
    free(): void;
    set_confirm_search(confirm_search: boolean): void;
    set_desktop_id(desktop_id: string): void;
    set_startup_notification_id(startup_id: string): void;
    set_xid(xid: number): void;
}
export type DiscovererAudioInfoClass = GObject.Object;
export type DiscovererContainerInfoClass = GObject.Object;
export type DiscovererInfoClass = GObject.Object;
export type DiscovererStreamInfoClass = GObject.Object;
export type DiscovererSubtitleInfoClass = GObject.Object;
export type DiscovererVideoInfoClass = GObject.Object;
export type EncodingTargetClass = GObject.Object;
