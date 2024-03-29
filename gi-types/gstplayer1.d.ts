/**
 * GstPlayer 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as Gst from "gst1";
import * as GLib from "glib2";
import * as GstVideo from "gstvideo1";

export function player_color_balance_type_get_name(type: PlayerColorBalanceType): string;
export function player_error_get_name(error: PlayerError): string;
export function player_error_quark(): GLib.Quark;
export function player_state_get_name(state: PlayerState): string;
export type PlayerSignalDispatcherFunc = (data?: any | null) => void;

export namespace PlayerColorBalanceType {
    export const $gtype: GObject.GType<PlayerColorBalanceType>;
}

export enum PlayerColorBalanceType {
    HUE = 3,
    BRIGHTNESS = 0,
    SATURATION = 2,
    CONTRAST = 1,
}

export class PlayerError extends GLib.Error {
    static $gtype: GObject.GType<PlayerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PlayerError);

    // Fields
    static FAILED: number;

    // Members
    static get_name(error: PlayerError): string;
    static quark(): GLib.Quark;
}

export namespace PlayerSnapshotFormat {
    export const $gtype: GObject.GType<PlayerSnapshotFormat>;
}

export enum PlayerSnapshotFormat {
    RAW_NATIVE = 0,
    RAW_XRGB = 1,
    RAW_BGRX = 2,
    JPG = 3,
    PNG = 4,
}

export namespace PlayerState {
    export const $gtype: GObject.GType<PlayerState>;
}

export enum PlayerState {
    STOPPED = 0,
    BUFFERING = 1,
    PAUSED = 2,
    PLAYING = 3,
}
export module Player {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        audio_video_offset: number;
        audioVideoOffset: number;
        current_audio_track: PlayerAudioInfo;
        currentAudioTrack: PlayerAudioInfo;
        current_subtitle_track: PlayerSubtitleInfo;
        currentSubtitleTrack: PlayerSubtitleInfo;
        current_video_track: PlayerVideoInfo;
        currentVideoTrack: PlayerVideoInfo;
        duration: number;
        media_info: PlayerMediaInfo;
        mediaInfo: PlayerMediaInfo;
        mute: boolean;
        pipeline: Gst.Element;
        position: number;
        rate: number;
        signal_dispatcher: PlayerSignalDispatcher;
        signalDispatcher: PlayerSignalDispatcher;
        subtitle_video_offset: number;
        subtitleVideoOffset: number;
        suburi: string;
        uri: string;
        video_multiview_flags: GstVideo.VideoMultiviewFlags;
        videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
        video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
        videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
        video_renderer: PlayerVideoRenderer;
        videoRenderer: PlayerVideoRenderer;
        volume: number;
    }
}
export class Player extends Gst.Object {
    static $gtype: GObject.GType<Player>;

    constructor(properties?: Partial<Player.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Player.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get audio_video_offset(): number;
    set audio_video_offset(val: number);
    get audioVideoOffset(): number;
    set audioVideoOffset(val: number);
    get current_audio_track(): PlayerAudioInfo;
    get currentAudioTrack(): PlayerAudioInfo;
    get current_subtitle_track(): PlayerSubtitleInfo;
    get currentSubtitleTrack(): PlayerSubtitleInfo;
    get current_video_track(): PlayerVideoInfo;
    get currentVideoTrack(): PlayerVideoInfo;
    get duration(): number;
    get media_info(): PlayerMediaInfo;
    get mediaInfo(): PlayerMediaInfo;
    get mute(): boolean;
    set mute(val: boolean);
    get pipeline(): Gst.Element;
    get position(): number;
    get rate(): number;
    set rate(val: number);
    set signal_dispatcher(val: PlayerSignalDispatcher);
    set signalDispatcher(val: PlayerSignalDispatcher);
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
    get video_renderer(): PlayerVideoRenderer;
    get videoRenderer(): PlayerVideoRenderer;
    get volume(): number;
    set volume(val: number);

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
    connect(signal: "error", callback: (_source: this, object: GLib.Error) => void): number;
    connect_after(signal: "error", callback: (_source: this, object: GLib.Error) => void): number;
    emit(signal: "error", object: GLib.Error): void;
    connect(signal: "media-info-updated", callback: (_source: this, object: PlayerMediaInfo) => void): number;
    connect_after(signal: "media-info-updated", callback: (_source: this, object: PlayerMediaInfo) => void): number;
    emit(signal: "media-info-updated", object: PlayerMediaInfo): void;
    connect(signal: "mute-changed", callback: (_source: this) => void): number;
    connect_after(signal: "mute-changed", callback: (_source: this) => void): number;
    emit(signal: "mute-changed"): void;
    connect(signal: "position-updated", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "position-updated", callback: (_source: this, object: number) => void): number;
    emit(signal: "position-updated", object: number): void;
    connect(signal: "seek-done", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "seek-done", callback: (_source: this, object: number) => void): number;
    emit(signal: "seek-done", object: number): void;
    connect(signal: "state-changed", callback: (_source: this, object: PlayerState) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, object: PlayerState) => void): number;
    emit(signal: "state-changed", object: PlayerState): void;
    connect(signal: "uri-loaded", callback: (_source: this, object: string) => void): number;
    connect_after(signal: "uri-loaded", callback: (_source: this, object: string) => void): number;
    emit(signal: "uri-loaded", object: string): void;
    connect(signal: "video-dimensions-changed", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(
        signal: "video-dimensions-changed",
        callback: (_source: this, object: number, p0: number) => void
    ): number;
    emit(signal: "video-dimensions-changed", object: number, p0: number): void;
    connect(signal: "volume-changed", callback: (_source: this) => void): number;
    connect_after(signal: "volume-changed", callback: (_source: this) => void): number;
    emit(signal: "volume-changed"): void;
    connect(signal: "warning", callback: (_source: this, object: GLib.Error) => void): number;
    connect_after(signal: "warning", callback: (_source: this, object: GLib.Error) => void): number;
    emit(signal: "warning", object: GLib.Error): void;

    // Constructors

    static ["new"](
        video_renderer?: PlayerVideoRenderer | null,
        signal_dispatcher?: PlayerSignalDispatcher | null
    ): Player;

    // Members

    get_audio_video_offset(): number;
    get_color_balance(type: PlayerColorBalanceType): number;
    get_config(): Gst.Structure;
    get_current_audio_track(): PlayerAudioInfo | null;
    get_current_subtitle_track(): PlayerSubtitleInfo | null;
    get_current_video_track(): PlayerVideoInfo | null;
    get_current_visualization(): string | null;
    get_duration(): Gst.ClockTime;
    get_media_info(): PlayerMediaInfo | null;
    get_multiview_flags(): GstVideo.VideoMultiviewFlags;
    get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
    get_mute(): boolean;
    get_pipeline(): Gst.Element;
    get_position(): Gst.ClockTime;
    get_rate(): number;
    get_subtitle_uri(): string | null;
    get_subtitle_video_offset(): number;
    get_uri(): string | null;
    get_video_snapshot(format: PlayerSnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null;
    get_volume(): number;
    has_color_balance(): boolean;
    pause(): void;
    play(): void;
    seek(position: Gst.ClockTime): void;
    set_audio_track(stream_index: number): boolean;
    set_audio_track_enabled(enabled: boolean): void;
    set_audio_video_offset(offset: number): void;
    set_color_balance(type: PlayerColorBalanceType, value: number): void;
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
    static get_audio_streams(info: PlayerMediaInfo): PlayerAudioInfo[];
    static get_subtitle_streams(info: PlayerMediaInfo): PlayerSubtitleInfo[];
    static get_video_streams(info: PlayerMediaInfo): PlayerVideoInfo[];
    static visualizations_free(viss: PlayerVisualization): void;
    static visualizations_get(): PlayerVisualization[];
}
export module PlayerAudioInfo {
    export interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlayerAudioInfo extends PlayerStreamInfo {
    static $gtype: GObject.GType<PlayerAudioInfo>;

    constructor(properties?: Partial<PlayerAudioInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayerAudioInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bitrate(): number;
    get_channels(): number;
    get_language(): string | null;
    get_max_bitrate(): number;
    get_sample_rate(): number;
}
export module PlayerGMainContextSignalDispatcher {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        application_context: GLib.MainContext;
        applicationContext: GLib.MainContext;
    }
}
export class PlayerGMainContextSignalDispatcher extends GObject.Object implements PlayerSignalDispatcher {
    static $gtype: GObject.GType<PlayerGMainContextSignalDispatcher>;

    constructor(properties?: Partial<PlayerGMainContextSignalDispatcher.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayerGMainContextSignalDispatcher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get application_context(): GLib.MainContext;
    get applicationContext(): GLib.MainContext;

    // Members

    static new(application_context?: GLib.MainContext | null): PlayerSignalDispatcher;

    // Implemented Members

    vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void;
}
export module PlayerMediaInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlayerMediaInfo extends GObject.Object {
    static $gtype: GObject.GType<PlayerMediaInfo>;

    constructor(properties?: Partial<PlayerMediaInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayerMediaInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_audio_streams(): PlayerAudioInfo[];
    get_container_format(): string | null;
    get_duration(): Gst.ClockTime;
    get_image_sample(): Gst.Sample | null;
    get_number_of_audio_streams(): number;
    get_number_of_streams(): number;
    get_number_of_subtitle_streams(): number;
    get_number_of_video_streams(): number;
    get_stream_list(): PlayerStreamInfo[];
    get_subtitle_streams(): PlayerSubtitleInfo[];
    get_tags(): Gst.TagList | null;
    get_title(): string | null;
    get_uri(): string;
    get_video_streams(): PlayerVideoInfo[];
    is_live(): boolean;
    is_seekable(): boolean;
}
export module PlayerStreamInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class PlayerStreamInfo extends GObject.Object {
    static $gtype: GObject.GType<PlayerStreamInfo>;

    constructor(properties?: Partial<PlayerStreamInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayerStreamInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_caps(): Gst.Caps | null;
    get_codec(): string | null;
    get_index(): number;
    get_stream_type(): string;
    get_tags(): Gst.TagList | null;
}
export module PlayerSubtitleInfo {
    export interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlayerSubtitleInfo extends PlayerStreamInfo {
    static $gtype: GObject.GType<PlayerSubtitleInfo>;

    constructor(properties?: Partial<PlayerSubtitleInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayerSubtitleInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_language(): string | null;
}
export module PlayerVideoInfo {
    export interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlayerVideoInfo extends PlayerStreamInfo {
    static $gtype: GObject.GType<PlayerVideoInfo>;

    constructor(properties?: Partial<PlayerVideoInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayerVideoInfo.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bitrate(): number;
    get_framerate(): [number, number];
    get_height(): number;
    get_max_bitrate(): number;
    get_pixel_aspect_ratio(): [number, number];
    get_width(): number;
}
export module PlayerVideoOverlayVideoRenderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        video_sink: Gst.Element;
        videoSink: Gst.Element;
        window_handle: any;
        windowHandle: any;
    }
}
export class PlayerVideoOverlayVideoRenderer extends GObject.Object implements PlayerVideoRenderer {
    static $gtype: GObject.GType<PlayerVideoOverlayVideoRenderer>;

    constructor(properties?: Partial<PlayerVideoOverlayVideoRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlayerVideoOverlayVideoRenderer.ConstructorProperties>, ...args: any[]): void;

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
    static new(window_handle?: any | null): PlayerVideoRenderer;
    static new_with_sink(window_handle: any | null, video_sink: Gst.Element): PlayerVideoRenderer;
}

export class PlayerVisualization {
    static $gtype: GObject.GType<PlayerVisualization>;

    constructor(
        properties?: Partial<{
            name?: string;
            description?: string;
        }>
    );
    constructor(copy: PlayerVisualization);

    // Fields
    name: string;
    description: string;

    // Members
    copy(): PlayerVisualization;
    free(): void;
}

export interface PlayerSignalDispatcherNamespace {
    $gtype: GObject.GType<PlayerSignalDispatcher>;
    prototype: PlayerSignalDispatcherPrototype;
}
export type PlayerSignalDispatcher = PlayerSignalDispatcherPrototype;
export interface PlayerSignalDispatcherPrototype extends GObject.Object {
    // Members

    vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void;
}

export const PlayerSignalDispatcher: PlayerSignalDispatcherNamespace;

export interface PlayerVideoRendererNamespace {
    $gtype: GObject.GType<PlayerVideoRenderer>;
    prototype: PlayerVideoRendererPrototype;
}
export type PlayerVideoRenderer = PlayerVideoRendererPrototype;
export interface PlayerVideoRendererPrototype extends GObject.Object {}

export const PlayerVideoRenderer: PlayerVideoRendererNamespace;
