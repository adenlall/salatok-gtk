/**
 * GstApp 1.0
 *
 * Generated from 1.0
 */

import * as GstBase from "gstbase1";
import * as Gst from "gst1";
import * as GObject from "gobject2";

export namespace AppLeakyType {
    export const $gtype: GObject.GType<AppLeakyType>;
}

export enum AppLeakyType {
    NONE = 0,
    UPSTREAM = 1,
    DOWNSTREAM = 2,
}

export namespace AppStreamType {
    export const $gtype: GObject.GType<AppStreamType>;
}

export enum AppStreamType {
    STREAM = 0,
    SEEKABLE = 1,
    RANDOM_ACCESS = 2,
}
export module AppSink {
    export interface ConstructorProperties extends GstBase.BaseSink.ConstructorProperties {
        [key: string]: any;
        buffer_list: boolean;
        bufferList: boolean;
        caps: Gst.Caps;
        drop: boolean;
        emit_signals: boolean;
        emitSignals: boolean;
        eos: boolean | any;
        max_buffers: number;
        maxBuffers: number;
        wait_on_eos: boolean;
        waitOnEos: boolean;
    }
}
export class AppSink extends GstBase.BaseSink implements Gst.URIHandler {
    static $gtype: GObject.GType<AppSink>;

    constructor(properties?: Partial<AppSink.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppSink.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer_list(): boolean;
    set buffer_list(val: boolean);
    get bufferList(): boolean;
    set bufferList(val: boolean);
    get caps(): Gst.Caps;
    set caps(val: Gst.Caps);
    get drop(): boolean;
    set drop(val: boolean);
    get emit_signals(): boolean;
    set emit_signals(val: boolean);
    get emitSignals(): boolean;
    set emitSignals(val: boolean);
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    get eos(): boolean;
    get max_buffers(): number;
    set max_buffers(val: number);
    get maxBuffers(): number;
    set maxBuffers(val: number);
    get wait_on_eos(): boolean;
    set wait_on_eos(val: boolean);
    get waitOnEos(): boolean;
    set waitOnEos(val: boolean);

    // Fields
    basesink: GstBase.BaseSink;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "eos", callback: (_source: this) => void): number;
    connect_after(signal: "eos", callback: (_source: this) => void): number;
    emit(signal: "eos"): void;
    connect(signal: "new-preroll", callback: (_source: this) => Gst.FlowReturn): number;
    connect_after(signal: "new-preroll", callback: (_source: this) => Gst.FlowReturn): number;
    emit(signal: "new-preroll"): void;
    connect(signal: "new-sample", callback: (_source: this) => Gst.FlowReturn): number;
    connect_after(signal: "new-sample", callback: (_source: this) => Gst.FlowReturn): number;
    emit(signal: "new-sample"): void;
    connect(signal: "new-serialized-event", callback: (_source: this) => boolean): number;
    connect_after(signal: "new-serialized-event", callback: (_source: this) => boolean): number;
    emit(signal: "new-serialized-event"): void;
    connect(signal: "pull-preroll", callback: (_source: this) => Gst.Sample | null): number;
    connect_after(signal: "pull-preroll", callback: (_source: this) => Gst.Sample | null): number;
    emit(signal: "pull-preroll"): void;
    connect(signal: "pull-sample", callback: (_source: this) => Gst.Sample | null): number;
    connect_after(signal: "pull-sample", callback: (_source: this) => Gst.Sample | null): number;
    emit(signal: "pull-sample"): void;
    connect(signal: "try-pull-object", callback: (_source: this, timeout: number) => Gst.MiniObject | null): number;
    connect_after(
        signal: "try-pull-object",
        callback: (_source: this, timeout: number) => Gst.MiniObject | null
    ): number;
    emit(signal: "try-pull-object", timeout: number): void;
    connect(signal: "try-pull-preroll", callback: (_source: this, timeout: number) => Gst.Sample | null): number;
    connect_after(signal: "try-pull-preroll", callback: (_source: this, timeout: number) => Gst.Sample | null): number;
    emit(signal: "try-pull-preroll", timeout: number): void;
    connect(signal: "try-pull-sample", callback: (_source: this, timeout: number) => Gst.Sample | null): number;
    connect_after(signal: "try-pull-sample", callback: (_source: this, timeout: number) => Gst.Sample | null): number;
    emit(signal: "try-pull-sample", timeout: number): void;

    // Members

    get_buffer_list_support(): boolean;
    get_caps(): Gst.Caps | null;
    get_drop(): boolean;
    get_emit_signals(): boolean;
    get_max_buffers(): number;
    get_wait_on_eos(): boolean;
    is_eos(): boolean;
    pull_preroll(): Gst.Sample | null;
    pull_sample(): Gst.Sample | null;
    set_buffer_list_support(enable_lists: boolean): void;
    set_caps(caps?: Gst.Caps | null): void;
    set_drop(drop: boolean): void;
    set_emit_signals(emit: boolean): void;
    set_max_buffers(max: number): void;
    set_wait_on_eos(wait: boolean): void;
    try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null;
    try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null;
    vfunc_eos(): void;
    vfunc_new_preroll(): Gst.FlowReturn;
    vfunc_new_sample(): Gst.FlowReturn;
    vfunc_pull_preroll(): Gst.Sample | null;
    vfunc_pull_sample(): Gst.Sample | null;
    vfunc_try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null;
    vfunc_try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null;

    // Implemented Members

    get_protocols(): string[] | null;
    get_uri(): string | null;
    get_uri_type(): Gst.URIType;
    set_uri(uri: string): boolean;
    vfunc_get_uri(): string | null;
    vfunc_set_uri(uri: string): boolean;
}
export module AppSrc {
    export interface ConstructorProperties extends GstBase.BaseSrc.ConstructorProperties {
        [key: string]: any;
        block: boolean;
        caps: Gst.Caps;
        current_level_buffers: number;
        currentLevelBuffers: number;
        current_level_bytes: number;
        currentLevelBytes: number;
        current_level_time: number;
        currentLevelTime: number;
        duration: number;
        emit_signals: boolean;
        emitSignals: boolean;
        format: Gst.Format;
        handle_segment_change: boolean;
        handleSegmentChange: boolean;
        is_live: boolean | any;
        isLive: boolean;
        leaky_type: AppLeakyType;
        leakyType: AppLeakyType;
        max_buffers: number;
        maxBuffers: number;
        max_bytes: number;
        maxBytes: number;
        max_latency: number;
        maxLatency: number;
        max_time: number;
        maxTime: number;
        min_latency: number;
        minLatency: number;
        min_percent: number;
        minPercent: number;
        size: number;
        stream_type: AppStreamType;
        streamType: AppStreamType;
    }
}
export class AppSrc extends GstBase.BaseSrc implements Gst.URIHandler {
    static $gtype: GObject.GType<AppSrc>;

    constructor(properties?: Partial<AppSrc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppSrc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get block(): boolean;
    set block(val: boolean);
    get caps(): Gst.Caps;
    set caps(val: Gst.Caps);
    get current_level_buffers(): number;
    get currentLevelBuffers(): number;
    get current_level_bytes(): number;
    get currentLevelBytes(): number;
    get current_level_time(): number;
    get currentLevelTime(): number;
    get duration(): number;
    set duration(val: number);
    get emit_signals(): boolean;
    set emit_signals(val: boolean);
    get emitSignals(): boolean;
    set emitSignals(val: boolean);
    get format(): Gst.Format;
    set format(val: Gst.Format);
    get handle_segment_change(): boolean;
    set handle_segment_change(val: boolean);
    get handleSegmentChange(): boolean;
    set handleSegmentChange(val: boolean);
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    get is_live(): boolean;
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    set is_live(val: boolean);
    get isLive(): boolean;
    set isLive(val: boolean);
    get leaky_type(): AppLeakyType;
    set leaky_type(val: AppLeakyType);
    get leakyType(): AppLeakyType;
    set leakyType(val: AppLeakyType);
    get max_buffers(): number;
    set max_buffers(val: number);
    get maxBuffers(): number;
    set maxBuffers(val: number);
    get max_bytes(): number;
    set max_bytes(val: number);
    get maxBytes(): number;
    set maxBytes(val: number);
    get max_latency(): number;
    set max_latency(val: number);
    get maxLatency(): number;
    set maxLatency(val: number);
    get max_time(): number;
    set max_time(val: number);
    get maxTime(): number;
    set maxTime(val: number);
    get min_latency(): number;
    set min_latency(val: number);
    get minLatency(): number;
    set minLatency(val: number);
    get min_percent(): number;
    set min_percent(val: number);
    get minPercent(): number;
    set minPercent(val: number);
    get size(): number;
    set size(val: number);
    get stream_type(): AppStreamType;
    set stream_type(val: AppStreamType);
    get streamType(): AppStreamType;
    set streamType(val: AppStreamType);

    // Fields
    basesrc: GstBase.BaseSrc;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "end-of-stream", callback: (_source: this) => Gst.FlowReturn): number;
    connect_after(signal: "end-of-stream", callback: (_source: this) => Gst.FlowReturn): number;
    emit(signal: "end-of-stream"): void;
    connect(signal: "enough-data", callback: (_source: this) => void): number;
    connect_after(signal: "enough-data", callback: (_source: this) => void): number;
    emit(signal: "enough-data"): void;
    connect(signal: "need-data", callback: (_source: this, length: number) => void): number;
    connect_after(signal: "need-data", callback: (_source: this, length: number) => void): number;
    emit(signal: "need-data", length: number): void;
    connect(signal: "push-buffer", callback: (_source: this, buffer: Gst.Buffer) => Gst.FlowReturn): number;
    connect_after(signal: "push-buffer", callback: (_source: this, buffer: Gst.Buffer) => Gst.FlowReturn): number;
    emit(signal: "push-buffer", buffer: Gst.Buffer): void;
    connect(
        signal: "push-buffer-list",
        callback: (_source: this, buffer_list: Gst.BufferList) => Gst.FlowReturn
    ): number;
    connect_after(
        signal: "push-buffer-list",
        callback: (_source: this, buffer_list: Gst.BufferList) => Gst.FlowReturn
    ): number;
    emit(signal: "push-buffer-list", buffer_list: Gst.BufferList): void;
    connect(signal: "push-sample", callback: (_source: this, sample: Gst.Sample) => Gst.FlowReturn): number;
    connect_after(signal: "push-sample", callback: (_source: this, sample: Gst.Sample) => Gst.FlowReturn): number;
    emit(signal: "push-sample", sample: Gst.Sample): void;
    connect(signal: "seek-data", callback: (_source: this, offset: number) => boolean): number;
    connect_after(signal: "seek-data", callback: (_source: this, offset: number) => boolean): number;
    emit(signal: "seek-data", offset: number): void;

    // Members

    end_of_stream(): Gst.FlowReturn;
    get_caps(): Gst.Caps | null;
    get_current_level_buffers(): number;
    get_current_level_bytes(): number;
    get_current_level_time(): Gst.ClockTime;
    get_duration(): Gst.ClockTime;
    get_emit_signals(): boolean;
    get_latency(): [number, number];
    get_leaky_type(): AppLeakyType;
    get_max_buffers(): number;
    get_max_bytes(): number;
    get_max_time(): Gst.ClockTime;
    get_size(): number;
    get_stream_type(): AppStreamType;
    push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
    push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
    push_sample(sample: Gst.Sample): Gst.FlowReturn;
    set_caps(caps?: Gst.Caps | null): void;
    // Conflicted with GstBase.BaseSrc.set_caps
    set_caps(...args: never[]): any;
    set_duration(duration: Gst.ClockTime): void;
    set_emit_signals(emit: boolean): void;
    set_latency(min: number, max: number): void;
    set_leaky_type(leaky: AppLeakyType): void;
    set_max_buffers(max: number): void;
    set_max_bytes(max: number): void;
    set_max_time(max: Gst.ClockTime): void;
    set_size(size: number): void;
    set_stream_type(type: AppStreamType): void;
    vfunc_end_of_stream(): Gst.FlowReturn;
    vfunc_enough_data(): void;
    vfunc_need_data(length: number): void;
    vfunc_push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
    vfunc_push_sample(sample: Gst.Sample): Gst.FlowReturn;
    vfunc_seek_data(offset: number): boolean;

    // Implemented Members

    get_protocols(): string[] | null;
    get_uri(): string | null;
    get_uri_type(): Gst.URIType;
    set_uri(uri: string): boolean;
    vfunc_get_uri(): string | null;
    vfunc_set_uri(uri: string): boolean;
}

export class AppSinkPrivate {
    static $gtype: GObject.GType<AppSinkPrivate>;

    constructor(copy: AppSinkPrivate);
}

export class AppSrcPrivate {
    static $gtype: GObject.GType<AppSrcPrivate>;

    constructor(copy: AppSrcPrivate);
}
