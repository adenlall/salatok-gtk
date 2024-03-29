/**
 * GstPlay 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as Gst from "gst1";
import * as GLib from "glib2";
import * as GstVideo from "gstvideo1";

export function play_color_balance_type_get_name(type: PlayColorBalanceType): string;
export function play_error_get_name(error: PlayError): string;
export function play_error_quark(): GLib.Quark;
export function play_message_get_name(message_type: PlayMessage): string;
export function play_message_parse_buffering_percent(msg: Gst.Message): number;
export function play_message_parse_duration_updated(msg: Gst.Message): Gst.ClockTime | null;
export function play_message_parse_error(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];
export function play_message_parse_media_info_updated(msg: Gst.Message): PlayMediaInfo | null;
export function play_message_parse_muted_changed(msg: Gst.Message): boolean;
export function play_message_parse_position_updated(msg: Gst.Message): Gst.ClockTime | null;
export function play_message_parse_state_changed(msg: Gst.Message): PlayState | null;
export function play_message_parse_type(msg: Gst.Message): PlayMessage | null;
export function play_message_parse_video_dimensions_changed(msg: Gst.Message): [number, number];
export function play_message_parse_volume_changed(msg: Gst.Message): number;
export function play_message_parse_warning(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];
export function play_state_get_name(state: PlayState): string;

export namespace PlayColorBalanceType {
    export const $gtype: GObject.GType<PlayColorBalanceType>;
}

export enum PlayColorBalanceType {
    HUE = 3,
    BRIGHTNESS = 0,
    SATURATION = 2,
    CONTRAST = 1,
}

export class PlayError extends GLib.Error {
    static $gtype: GObject.GType<PlayError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PlayError);

    // Fields
    static FAILED: number;

    // Members
    static get_name(error: PlayError): string;
    static quark(): GLib.Quark;
}

export namespace PlayMessage {
    export const $gtype: GObject.GType<PlayMessage>;
}

export enum PlayMessage {
    URI_LOADED = 0,
    POSITION_UPDATED = 1,
    DURATION_CHANGED = 2,
    STATE_CHANGED = 3,
    BUFFERING = 4,
    END_OF_STREAM = 5,
    ERROR = 6,
    WARNING = 7,
    VIDEO_DIMENSIONS_CHANGED = 8,
    MEDIA_INFO_UPDATED = 9,
    VOLUME_CHANGED = 10,
    MUTE_CHANGED = 11,
    SEEK_DONE = 12,
}

export namespace PlaySnapshotFormat {
    export const $gtype: GObject.GType<PlaySnapshotFormat>;
}

export enum PlaySnapshotFormat {
    RAW_NATIVE = 0,
    RAW_XRGB = 1,
    RAW_BGRX = 2,
    JPG = 3,
    PNG = 4,
}

export namespace PlayState {
    export const $gtype: GObject.GType<PlayState>;
}

export enum PlayState {
    STOPPED = 0,
    BUFFERING = 1,
    PAUSED = 2,
    PLAYING = 3,
}
export module Play {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        audio_video_offset: number;
        audioVideoOffset: number;
        current_audio_track: PlayAudioInfo;
        currentAudioTrack: PlayAudioInfo;
        current_subtitle_track: PlaySubtitleInfo;
        currentSubtitleTrack: PlaySubtitleInfo;
        current_video_track: PlayVideoInfo;
        currentVideoTrack: PlayVideoInfo;
        duration: number;
        media_info: PlayMediaInfo;
        mediaInfo: PlayMediaInfo;
        mute: boolean;
        pipeline: Gst.Element;
        position: number;
        rate: number;
        subtitle_video_offset: number;
        subtitleVideoOffset: number;
        suburi: string;
        uri: string;
        video_multiview_flags: GstVideo.VideoMultiviewFlags;
        videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
        video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
        videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
        video_renderer: PlayVideoRenderer;
        videoRenderer: PlayVideoRenderer;
        volume: number;
    }
}
export class Play extends Gst.Object {
    static $gtype: GObject.GType<Play>;

    constructor(properties?: Partial<Play.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Play.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get audio_video_offset(): number;
    set audio_video_offset(val: number);
    get audioVideoOffset(): number;
    set audioVideoOffset(val: number);
    get current_audio_track(): PlayAudioInfo;
    get currentAudioTrack(): PlayAudioInfo;
    get current_subtitle_track(): PlaySubtitleInfo;
    get currentSubtitleTrack(): PlaySubtitleInfo;
    get current_video_track(): PlayVideoInfo;
    get currentVideoTrack(): PlayVideoInfo;
    get duration(): number;
    get media_info(): PlayMediaInfo;
    get mediaInfo(): PlayMediaInfo;
    get mute(): boolean;
    set mute(val: boolean);
    get pipeline(): Gst.Element;
    get position(): number;
    get rate(): number;
    set rate(val: number);
    get subtitle_video_offset(): number;
    set subtitle_video_offset(val: number);
    get subtitleVideoOffset(): number;
    set subtitleVideoOffset(val: number);
    get suburi(): string;
    set suburi(val: string);
    get uri(): string;
    set uri(val: string);
    get video_multiview_flags(): GstVideo.VideoMultiviewFlags;
    set video_multiview_flags(val: GstVideo.VideoMultiviewFlags);
    get videoMultiviewFlags(): GstVideo.VideoMultiviewFlags;
    set videoMultiviewFlags(val: GstVideo.VideoMultiviewFlags);
    get video_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
    set video_multiview_mode(val: GstVideo.VideoMultiviewFramePacking);
    get videoMultiviewMode(): GstVideo.VideoMultiviewFramePacking;
    set videoMultiviewMode(val: GstVideo.VideoMultiviewFramePacking);
    get video_renderer(): PlayVideoRenderer;
    set video_renderer(val: PlayVideoRenderer);
    get videoRenderer(): PlayVideoRenderer;
    set videoRenderer(val: PlayVideoRenderer);
    get volume(): number;
    set volume(val: number);

    // Constructors

    static ["new"](video_renderer?: PlayVideoRenderer | null): Play;

    // Members

    get_audio_video_offset(): number;
    get_color_balance(type: PlayColorBalanceType): number;
    get_config(): Gst.Structure;
    get_current_audio_track(): PlayAudioInfo | null;
    get_current_subtitle_track(): PlaySubtitleInfo | null;
    get_current_video_track(): PlayVideoInfo | null;
    get_current_visualization(): string | null;
    get_duration(): Gst.ClockTime;
    get_media_info(): PlayMediaInfo | null;
    get_message_bus(): Gst.Bus;
    get_multiview_flags(): GstVideo.VideoMultiviewFlags;
    get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
    get_mute(): boolean;
    get_pipeline(): Gst.Element;
    get_position(): Gst.ClockTime;
    get_rate(): number;
    get_subtitle_uri(): string | null;
    get_subtitle_video_offset(): number;
    get_uri(): string | null;
    get_video_snapshot(format: PlaySnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null;
    get_volume(): number;
    has_color_balance(): boolean;
    pause(): void;
    play(): void;
    seek(position: Gst.ClockTime): void;
    set_audio_track(stream_index: number): boolean;
    set_audio_track_enabled(enabled: boolean): void;
    set_audio_video_offset(offset: number): void;
    set_color_balance(type: PlayColorBalanceType, value: number): void;
    set_config(config: Gst.Structure): boolean;
    set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void;
    set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void;
    set_mute(val: boolean): void;
    set_rate(rate: number): void;
    set_subtitle_track(stream_index: number): boolean;
    set_subtitle_track_enabled(enabled: boolean): void;
    set_subtitle_uri(uri?: string | null): void;
    set_subtitle_video_offset(offset: number): void;
    set_uri(uri?: string | null): void;
    set_video_track(stream_index: number): boolean;
    set_video_track_enabled(enabled: boolean): void;
    set_visualization(name?: string | null): boolean;
    set_visualization_enabled(enabled: boolean): void;
    set_volume(val: number): void;
    stop(): void;
    static config_get_position_update_interval(config: Gst.Structure): number;
    static config_get_seek_accurate(config: Gst.Structure): boolean;
    static config_get_user_agent(config: Gst.Structure): string | null;
    static config_set_position_update_interval(config: Gst.Structure, interval: number): void;
    static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;
    static config_set_user_agent(config: Gst.Structure, agent?: string | null): void;
    static get_audio_streams(info: PlayMediaInfo): PlayAudioInfo[];
    static get_subtitle_streams(info: PlayMediaInfo): PlaySubtitleInfo[];
    static get_video_streams(info: PlayMediaInfo): PlayVideoInfo[];
    static is_play_message(msg: Gst.Message): boolean;
    static visualizations_free(viss: PlayVisualization): void;
    static visualizations_get(): PlayVisualization[];
}
export module PlayAudioInfo {
    export interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlayAudioInfo extends PlayStreamInfo {
    static $gtype: GObject.GType<PlayAudioInfo>;

    constructor(properties?: Partial<PlayAudioInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayAudioInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bitrate(): number;
    get_channels(): number;
    get_language(): string | null;
    get_max_bitrate(): number;
    get_sample_rate(): number;
}
export module PlayMediaInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlayMediaInfo extends GObject.Object {
    static $gtype: GObject.GType<PlayMediaInfo>;

    constructor(properties?: Partial<PlayMediaInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayMediaInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_audio_streams(): PlayAudioInfo[];
    get_container_format(): string | null;
    get_duration(): Gst.ClockTime;
    get_image_sample(): Gst.Sample | null;
    get_number_of_audio_streams(): number;
    get_number_of_streams(): number;
    get_number_of_subtitle_streams(): number;
    get_number_of_video_streams(): number;
    get_stream_list(): PlayStreamInfo[];
    get_subtitle_streams(): PlaySubtitleInfo[];
    get_tags(): Gst.TagList | null;
    get_title(): string | null;
    get_uri(): string;
    get_video_streams(): PlayVideoInfo[];
    is_live(): boolean;
    is_seekable(): boolean;
}
export module PlaySignalAdapter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        play: Play;
    }
}
export class PlaySignalAdapter extends GObject.Object {
    static $gtype: GObject.GType<PlaySignalAdapter>;

    constructor(properties?: Partial<PlaySignalAdapter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlaySignalAdapter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get play(): Play;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "buffering", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "buffering", callback: (_source: this, object: number) => void): number;
    emit(signal: "buffering", object: number): void;
    connect(signal: "duration-changed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "duration-changed", callback: (_source: this, object: number) => void): number;
    emit(signal: "duration-changed", object: number): void;
    connect(signal: "end-of-stream", callback: (_source: this) => void): number;
    connect_after(signal: "end-of-stream", callback: (_source: this) => void): number;
    emit(signal: "end-of-stream"): void;
    connect(
        signal: "error",
        callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void
    ): number;
    connect_after(
        signal: "error",
        callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void
    ): number;
    emit(signal: "error", error: GLib.Error, details: Gst.Structure | null): void;
    connect(signal: "media-info-updated", callback: (_source: this, object: PlayMediaInfo) => void): number;
    connect_after(signal: "media-info-updated", callback: (_source: this, object: PlayMediaInfo) => void): number;
    emit(signal: "media-info-updated", object: PlayMediaInfo): void;
    connect(signal: "mute-changed", callback: (_source: this, object: boolean) => void): number;
    connect_after(signal: "mute-changed", callback: (_source: this, object: boolean) => void): number;
    emit(signal: "mute-changed", object: boolean): void;
    connect(signal: "position-updated", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "position-updated", callback: (_source: this, object: number) => void): number;
    emit(signal: "position-updated", object: number): void;
    connect(signal: "seek-done", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "seek-done", callback: (_source: this, object: number) => void): number;
    emit(signal: "seek-done", object: number): void;
    connect(signal: "state-changed", callback: (_source: this, object: PlayState) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, object: PlayState) => void): number;
    emit(signal: "state-changed", object: PlayState): void;
    connect(signal: "uri-loaded", callback: (_source: this, object: string) => void): number;
    connect_after(signal: "uri-loaded", callback: (_source: this, object: string) => void): number;
    emit(signal: "uri-loaded", object: string): void;
    connect(signal: "video-dimensions-changed", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(
        signal: "video-dimensions-changed",
        callback: (_source: this, object: number, p0: number) => void
    ): number;
    emit(signal: "video-dimensions-changed", object: number, p0: number): void;
    connect(signal: "volume-changed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "volume-changed", callback: (_source: this, object: number) => void): number;
    emit(signal: "volume-changed", object: number): void;
    connect(
        signal: "warning",
        callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void
    ): number;
    connect_after(
        signal: "warning",
        callback: (_source: this, error: GLib.Error, details: Gst.Structure | null) => void
    ): number;
    emit(signal: "warning", error: GLib.Error, details: Gst.Structure | null): void;

    // Constructors

    static ["new"](play: Play): PlaySignalAdapter;
    static new_sync_emit(play: Play): PlaySignalAdapter;
    static new_with_main_context(play: Play, context: GLib.MainContext): PlaySignalAdapter;

    // Members

    get_play(): Play;
}
export module PlayStreamInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class PlayStreamInfo extends GObject.Object {
    static $gtype: GObject.GType<PlayStreamInfo>;

    constructor(properties?: Partial<PlayStreamInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayStreamInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_caps(): Gst.Caps | null;
    get_codec(): string | null;
    get_index(): number;
    get_stream_type(): string;
    get_tags(): Gst.TagList | null;
}
export module PlaySubtitleInfo {
    export interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlaySubtitleInfo extends PlayStreamInfo {
    static $gtype: GObject.GType<PlaySubtitleInfo>;

    constructor(properties?: Partial<PlaySubtitleInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlaySubtitleInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_language(): string | null;
}
export module PlayVideoInfo {
    export interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlayVideoInfo extends PlayStreamInfo {
    static $gtype: GObject.GType<PlayVideoInfo>;

    constructor(properties?: Partial<PlayVideoInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayVideoInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bitrate(): number;
    get_framerate(): [number, number];
    get_height(): number;
    get_max_bitrate(): number;
    get_pixel_aspect_ratio(): [number, number];
    get_width(): number;
}
export module PlayVideoOverlayVideoRenderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        video_sink: Gst.Element;
        videoSink: Gst.Element;
        window_handle: any;
        windowHandle: any;
    }
}
export class PlayVideoOverlayVideoRenderer extends GObject.Object implements PlayVideoRenderer {
    static $gtype: GObject.GType<PlayVideoOverlayVideoRenderer>;

    constructor(properties?: Partial<PlayVideoOverlayVideoRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayVideoOverlayVideoRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get video_sink(): Gst.Element;
    set video_sink(val: Gst.Element);
    get videoSink(): Gst.Element;
    set videoSink(val: Gst.Element);
    get window_handle(): any;
    set window_handle(val: any);
    get windowHandle(): any;
    set windowHandle(val: any);

    // Members

    expose(): void;
    get_render_rectangle(): [number, number, number, number];
    get_window_handle(): any | null;
    set_render_rectangle(x: number, y: number, width: number, height: number): void;
    set_window_handle(window_handle?: any | null): void;
    static new(window_handle?: any | null): PlayVideoRenderer;
    static new_with_sink(window_handle: any | null, video_sink: Gst.Element): PlayVideoRenderer;
}

export class PlayVisualization {
    static $gtype: GObject.GType<PlayVisualization>;

    constructor(
        properties?: Partial<{
            name?: string;
            description?: string;
        }>
    );
    constructor(copy: PlayVisualization);

    // Fields
    name: string;
    description: string;

    // Members
    copy(): PlayVisualization;
    free(): void;
}

export interface PlayVideoRendererNamespace {
    $gtype: GObject.GType<PlayVideoRenderer>;
    prototype: PlayVideoRendererPrototype;
}
export type PlayVideoRenderer = PlayVideoRendererPrototype;
export interface PlayVideoRendererPrototype extends GObject.Object {}

export const PlayVideoRenderer: PlayVideoRendererNamespace;
