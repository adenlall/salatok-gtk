/**
 * GstBase 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GLib from "glib2";
import * as GObject from "gobject2";

export const BASE_PARSE_FLAG_DRAINING: number;
export const BASE_PARSE_FLAG_LOST_SYNC: number;
export const BASE_TRANSFORM_SINK_NAME: string;
export const BASE_TRANSFORM_SRC_NAME: string;
export function type_find_helper(src: Gst.Pad, size: number): Gst.Caps | null;
export function type_find_helper_for_buffer(
    obj: Gst.Object | null,
    buf: Gst.Buffer
): [Gst.Caps | null, Gst.TypeFindProbability | null];
export function type_find_helper_for_buffer_with_caps(
    obj: Gst.Object | null,
    buf: Gst.Buffer,
    caps: Gst.Caps
): [Gst.Caps | null, Gst.TypeFindProbability | null];
export function type_find_helper_for_buffer_with_extension(
    obj: Gst.Object | null,
    buf: Gst.Buffer,
    extension?: string | null
): [Gst.Caps | null, Gst.TypeFindProbability | null];
export function type_find_helper_for_data(
    obj: Gst.Object | null,
    data: Uint8Array | string
): [Gst.Caps | null, Gst.TypeFindProbability | null];
export function type_find_helper_for_data_with_caps(
    obj: Gst.Object | null,
    data: Uint8Array | string,
    caps: Gst.Caps
): [Gst.Caps | null, Gst.TypeFindProbability | null];
export function type_find_helper_for_data_with_extension(
    obj: Gst.Object | null,
    data: Uint8Array | string,
    extension?: string | null
): [Gst.Caps | null, Gst.TypeFindProbability | null];
export function type_find_helper_for_extension(obj: Gst.Object | null, extension: string): Gst.Caps | null;
export function type_find_helper_get_range(
    obj: Gst.Object,
    parent: Gst.Object | null,
    func: TypeFindHelperGetRangeFunction,
    size: number,
    extension?: string | null
): [Gst.Caps | null, Gst.TypeFindProbability | null];
export function type_find_helper_get_range_full(
    obj: Gst.Object,
    parent: Gst.Object | null,
    func: TypeFindHelperGetRangeFunction,
    size: number,
    extension: string | null
): [Gst.FlowReturn, Gst.Caps, Gst.TypeFindProbability | null];
export function type_find_list_factories_for_caps(obj: Gst.Object | null, caps: Gst.Caps): Gst.TypeFindFactory[] | null;
export type CollectDataDestroyNotify = (data: CollectData) => void;
export type CollectPadsBufferFunction = (pads: CollectPads, data: CollectData, buffer: Gst.Buffer) => Gst.FlowReturn;
export type CollectPadsClipFunction = (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer) => Gst.FlowReturn;
export type CollectPadsCompareFunction = (
    pads: CollectPads,
    data1: CollectData,
    timestamp1: Gst.ClockTime,
    data2: CollectData,
    timestamp2: Gst.ClockTime
) => number;
export type CollectPadsEventFunction = (pads: CollectPads, pad: CollectData, event: Gst.Event) => boolean;
export type CollectPadsFlushFunction = (pads: CollectPads) => void;
export type CollectPadsFunction = (pads: CollectPads) => Gst.FlowReturn;
export type CollectPadsQueryFunction = (pads: CollectPads, pad: CollectData, query: Gst.Query) => boolean;
export type DataQueueEmptyCallback = (queue: DataQueue, checkdata?: any | null) => void;
export type DataQueueFullCallback = (queue: DataQueue, checkdata?: any | null) => void;
export type TypeFindHelperGetRangeFunction = (
    obj: Gst.Object,
    parent: Gst.Object | null,
    offset: number,
    length: number
) => Gst.FlowReturn;

export namespace AggregatorStartTimeSelection {
    export const $gtype: GObject.GType<AggregatorStartTimeSelection>;
}

export enum AggregatorStartTimeSelection {
    ZERO = 0,
    FIRST = 1,
    SET = 2,
}

export namespace BaseParseFrameFlags {
    export const $gtype: GObject.GType<BaseParseFrameFlags>;
}

export enum BaseParseFrameFlags {
    NONE = 0,
    NEW_FRAME = 1,
    NO_FRAME = 2,
    CLIP = 4,
    DROP = 8,
    QUEUE = 16,
}

export namespace BaseSrcFlags {
    export const $gtype: GObject.GType<BaseSrcFlags>;
}

export enum BaseSrcFlags {
    STARTING = 16384,
    STARTED = 32768,
    LAST = 1048576,
}

export namespace CollectPadsStateFlags {
    export const $gtype: GObject.GType<CollectPadsStateFlags>;
}

export enum CollectPadsStateFlags {
    EOS = 1,
    FLUSHING = 2,
    NEW_SEGMENT = 4,
    WAITING = 8,
    LOCKED = 16,
}
export module Adapter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Adapter extends GObject.Object {
    static $gtype: GObject.GType<Adapter>;

    constructor(properties?: Partial<Adapter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Adapter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Adapter;

    // Members

    available(): number;
    available_fast(): number;
    clear(): void;
    copy(offset: number, size: number): GLib.Bytes;
    distance_from_discont(): number;
    dts_at_discont(): Gst.ClockTime;
    flush(flush: number): void;
    get_buffer(nbytes: number): Gst.Buffer | null;
    get_buffer_fast(nbytes: number): Gst.Buffer | null;
    get_buffer_list(nbytes: number): Gst.BufferList | null;
    get_list(nbytes: number): Gst.Buffer[] | null;
    map(): Uint8Array | null;
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
    offset_at_discont(): number;
    prev_dts(): [Gst.ClockTime, number];
    prev_dts_at_offset(offset: number): [Gst.ClockTime, number];
    prev_offset(): [number, number];
    prev_pts(): [Gst.ClockTime, number];
    prev_pts_at_offset(offset: number): [Gst.ClockTime, number];
    pts_at_discont(): Gst.ClockTime;
    push(buf: Gst.Buffer): void;
    take(): Uint8Array | null;
    take_buffer(nbytes: number): Gst.Buffer | null;
    take_buffer_fast(nbytes: number): Gst.Buffer | null;
    take_buffer_list(nbytes: number): Gst.BufferList | null;
    take_list(nbytes: number): Gst.Buffer[] | null;
    unmap(): void;
}
export module Aggregator {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        emit_signals: boolean;
        emitSignals: boolean;
        latency: number;
        min_upstream_latency: number;
        minUpstreamLatency: number;
        start_time: number | any;
        startTime: number;
        start_time_selection: AggregatorStartTimeSelection;
        startTimeSelection: AggregatorStartTimeSelection;
    }
}
export abstract class Aggregator extends Gst.Element {
    static $gtype: GObject.GType<Aggregator>;

    constructor(properties?: Partial<Aggregator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Aggregator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get emit_signals(): boolean;
    set emit_signals(val: boolean);
    get emitSignals(): boolean;
    set emitSignals(val: boolean);
    get latency(): number;
    set latency(val: number);
    get min_upstream_latency(): number;
    set min_upstream_latency(val: number);
    get minUpstreamLatency(): number;
    set minUpstreamLatency(val: number);
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    get start_time(): number;
    set start_time(val: number);
    get startTime(): number;
    set startTime(val: number);
    get start_time_selection(): AggregatorStartTimeSelection;
    set start_time_selection(val: AggregatorStartTimeSelection);
    get startTimeSelection(): AggregatorStartTimeSelection;
    set startTimeSelection(val: AggregatorStartTimeSelection);

    // Fields
    srcpad: Gst.Pad;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "samples-selected",
        callback: (
            _source: this,
            segment: Gst.Segment,
            pts: number,
            dts: number,
            duration: number,
            info: Gst.Structure | null
        ) => void
    ): number;
    connect_after(
        signal: "samples-selected",
        callback: (
            _source: this,
            segment: Gst.Segment,
            pts: number,
            dts: number,
            duration: number,
            info: Gst.Structure | null
        ) => void
    ): number;
    emit(
        signal: "samples-selected",
        segment: Gst.Segment,
        pts: number,
        dts: number,
        duration: number,
        info: Gst.Structure | null
    ): void;

    // Members

    finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
    finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
    get_buffer_pool(): Gst.BufferPool | null;
    get_force_live(): boolean;
    get_ignore_inactive_pads(): boolean;
    get_latency(): Gst.ClockTime;
    negotiate(): boolean;
    peek_next_sample(pad: AggregatorPad): Gst.Sample | null;
    selected_samples(
        pts: Gst.ClockTime,
        dts: Gst.ClockTime,
        duration: Gst.ClockTime,
        info?: Gst.Structure | null
    ): void;
    set_force_live(force_live: boolean): void;
    set_ignore_inactive_pads(ignore: boolean): void;
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
    set_src_caps(caps: Gst.Caps): void;
    simple_get_next_time(): Gst.ClockTime;
    update_segment(segment: Gst.Segment): void;
    vfunc_aggregate(timeout: boolean): Gst.FlowReturn;
    vfunc_clip(aggregator_pad: AggregatorPad, buf: Gst.Buffer): Gst.Buffer;
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn;
    vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps;
    vfunc_flush(): Gst.FlowReturn;
    vfunc_get_next_time(): Gst.ClockTime;
    vfunc_negotiate(): boolean;
    vfunc_negotiated_src_caps(caps: Gst.Caps): boolean;
    vfunc_peek_next_sample(aggregator_pad: AggregatorPad): Gst.Sample | null;
    vfunc_propose_allocation(pad: AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean;
    vfunc_sink_event(aggregator_pad: AggregatorPad, event: Gst.Event): boolean;
    vfunc_sink_event_pre_queue(aggregator_pad: AggregatorPad, event: Gst.Event): Gst.FlowReturn;
    vfunc_sink_query(aggregator_pad: AggregatorPad, query: Gst.Query): boolean;
    vfunc_sink_query_pre_queue(aggregator_pad: AggregatorPad, query: Gst.Query): boolean;
    vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
    vfunc_src_query(query: Gst.Query): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_update_src_caps(caps: Gst.Caps): [Gst.FlowReturn, Gst.Caps | null];
}
export module AggregatorPad {
    export interface ConstructorProperties extends Gst.Pad.ConstructorProperties {
        [key: string]: any;
        emit_signals: boolean;
        emitSignals: boolean;
    }
}
export class AggregatorPad extends Gst.Pad {
    static $gtype: GObject.GType<AggregatorPad>;

    constructor(properties?: Partial<AggregatorPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AggregatorPad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get emit_signals(): boolean;
    set emit_signals(val: boolean);
    get emitSignals(): boolean;
    set emitSignals(val: boolean);

    // Fields
    segment: Gst.Segment;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "buffer-consumed", callback: (_source: this, object: Gst.Buffer) => void): number;
    connect_after(signal: "buffer-consumed", callback: (_source: this, object: Gst.Buffer) => void): number;
    emit(signal: "buffer-consumed", object: Gst.Buffer): void;

    // Members

    drop_buffer(): boolean;
    has_buffer(): boolean;
    is_eos(): boolean;
    is_inactive(): boolean;
    peek_buffer(): Gst.Buffer | null;
    pop_buffer(): Gst.Buffer | null;
    vfunc_flush(aggregator: Aggregator): Gst.FlowReturn;
    vfunc_skip_buffer(aggregator: Aggregator, buffer: Gst.Buffer): boolean;
}
export module BaseParse {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        disable_passthrough: boolean;
        disablePassthrough: boolean;
    }
}
export abstract class BaseParse extends Gst.Element {
    static $gtype: GObject.GType<BaseParse>;

    constructor(properties?: Partial<BaseParse.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BaseParse.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get disable_passthrough(): boolean;
    set disable_passthrough(val: boolean);
    get disablePassthrough(): boolean;
    set disablePassthrough(val: boolean);

    // Fields
    element: Gst.Element;
    sinkpad: Gst.Pad;
    srcpad: Gst.Pad;
    flags: number;
    segment: Gst.Segment;

    // Members

    add_index_entry(offset: number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean;
    convert_default(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [boolean, number];
    drain(): void;
    finish_frame(frame: BaseParseFrame, size: number): Gst.FlowReturn;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    push_frame(frame: BaseParseFrame): Gst.FlowReturn;
    set_average_bitrate(bitrate: number): void;
    set_duration(fmt: Gst.Format, duration: number, interval: number): void;
    set_frame_rate(fps_num: number, fps_den: number, lead_in: number, lead_out: number): void;
    set_has_timing_info(has_timing: boolean): void;
    set_infer_ts(infer_ts: boolean): void;
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
    set_min_frame_size(min_size: number): void;
    set_passthrough(passthrough: boolean): void;
    set_pts_interpolation(pts_interpolate: boolean): void;
    set_syncable(syncable: boolean): void;
    set_ts_at_offset(offset: number): void;
    vfunc_convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format, dest_value: number): boolean;
    vfunc_detect(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_get_sink_caps(filter: Gst.Caps): Gst.Caps;
    vfunc_handle_frame(frame: BaseParseFrame): [Gst.FlowReturn, number];
    vfunc_pre_push_frame(frame: BaseParseFrame): Gst.FlowReturn;
    vfunc_set_sink_caps(caps: Gst.Caps): boolean;
    vfunc_sink_event(event: Gst.Event): boolean;
    vfunc_sink_query(query: Gst.Query): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
    vfunc_src_query(query: Gst.Query): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
}
export module BaseSink {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        async: boolean;
        blocksize: number;
        enable_last_sample: boolean;
        enableLastSample: boolean;
        last_sample: Gst.Sample;
        lastSample: Gst.Sample;
        max_bitrate: number;
        maxBitrate: number;
        max_lateness: number;
        maxLateness: number;
        processing_deadline: number;
        processingDeadline: number;
        qos: boolean;
        render_delay: number;
        renderDelay: number;
        stats: Gst.Structure;
        sync: boolean;
        throttle_time: number;
        throttleTime: number;
        ts_offset: number;
        tsOffset: number;
    }
}
export abstract class BaseSink extends Gst.Element {
    static $gtype: GObject.GType<BaseSink>;

    constructor(properties?: Partial<BaseSink.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BaseSink.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get async(): boolean;
    set async(val: boolean);
    get blocksize(): number;
    set blocksize(val: number);
    get enable_last_sample(): boolean;
    set enable_last_sample(val: boolean);
    get enableLastSample(): boolean;
    set enableLastSample(val: boolean);
    get last_sample(): Gst.Sample;
    get lastSample(): Gst.Sample;
    get max_bitrate(): number;
    set max_bitrate(val: number);
    get maxBitrate(): number;
    set maxBitrate(val: number);
    get max_lateness(): number;
    set max_lateness(val: number);
    get maxLateness(): number;
    set maxLateness(val: number);
    get processing_deadline(): number;
    set processing_deadline(val: number);
    get processingDeadline(): number;
    set processingDeadline(val: number);
    get qos(): boolean;
    set qos(val: boolean);
    get render_delay(): number;
    set render_delay(val: number);
    get renderDelay(): number;
    set renderDelay(val: number);
    get stats(): Gst.Structure;
    get sync(): boolean;
    set sync(val: boolean);
    get throttle_time(): number;
    set throttle_time(val: number);
    get throttleTime(): number;
    set throttleTime(val: number);
    get ts_offset(): number;
    set ts_offset(val: number);
    get tsOffset(): number;
    set tsOffset(val: number);

    // Fields
    element: Gst.Element;
    sinkpad: Gst.Pad;
    pad_mode: Gst.PadMode;
    offset: number;
    can_activate_pull: boolean;
    can_activate_push: boolean;
    preroll_lock: GLib.Mutex;
    preroll_cond: GLib.Cond;
    eos: boolean;
    need_preroll: boolean;
    have_preroll: boolean;
    playing_async: boolean;
    have_newsegment: boolean;
    segment: Gst.Segment;

    // Members

    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn;
    get_blocksize(): number;
    get_drop_out_of_segment(): boolean;
    get_last_sample(): Gst.Sample | null;
    get_latency(): Gst.ClockTime;
    get_max_bitrate(): number;
    get_max_lateness(): number;
    get_processing_deadline(): Gst.ClockTime;
    get_render_delay(): Gst.ClockTime;
    get_stats(): Gst.Structure;
    get_sync(): boolean;
    get_throttle_time(): number;
    get_ts_offset(): Gst.ClockTimeDiff;
    is_async_enabled(): boolean;
    is_last_sample_enabled(): boolean;
    is_qos_enabled(): boolean;
    query_latency(): [boolean, boolean, boolean, Gst.ClockTime | null, Gst.ClockTime | null];
    set_async_enabled(enabled: boolean): void;
    set_blocksize(blocksize: number): void;
    set_drop_out_of_segment(drop_out_of_segment: boolean): void;
    set_last_sample_enabled(enabled: boolean): void;
    set_max_bitrate(max_bitrate: number): void;
    set_max_lateness(max_lateness: number): void;
    set_processing_deadline(processing_deadline: Gst.ClockTime): void;
    set_qos_enabled(enabled: boolean): void;
    set_render_delay(delay: Gst.ClockTime): void;
    set_sync(sync: boolean): void;
    set_throttle_time(throttle: number): void;
    set_ts_offset(offset: Gst.ClockTimeDiff): void;
    wait(time: Gst.ClockTime): [Gst.FlowReturn, Gst.ClockTimeDiff | null];
    wait_clock(time: Gst.ClockTime): [Gst.ClockReturn, Gst.ClockTimeDiff | null];
    wait_preroll(): Gst.FlowReturn;
    vfunc_activate_pull(active: boolean): boolean;
    vfunc_event(event: Gst.Event): boolean;
    vfunc_fixate(caps: Gst.Caps): Gst.Caps;
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps;
    vfunc_get_times(buffer: Gst.Buffer): [Gst.ClockTime, Gst.ClockTime];
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_propose_allocation(query: Gst.Query): boolean;
    vfunc_query(query: Gst.Query): boolean;
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
    vfunc_set_caps(caps: Gst.Caps): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_unlock(): boolean;
    vfunc_unlock_stop(): boolean;
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn;
}
export module BaseSrc {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        blocksize: number;
        do_timestamp: boolean;
        doTimestamp: boolean;
        num_buffers: number;
        numBuffers: number;
        typefind: boolean;
    }
}
export abstract class BaseSrc extends Gst.Element {
    static $gtype: GObject.GType<BaseSrc>;

    constructor(properties?: Partial<BaseSrc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BaseSrc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get blocksize(): number;
    set blocksize(val: number);
    get do_timestamp(): boolean;
    set do_timestamp(val: boolean);
    get doTimestamp(): boolean;
    set doTimestamp(val: boolean);
    get num_buffers(): number;
    set num_buffers(val: number);
    get numBuffers(): number;
    set numBuffers(val: number);
    get typefind(): boolean;
    set typefind(val: boolean);

    // Fields
    element: Gst.Element;
    srcpad: Gst.Pad;
    live_lock: GLib.Mutex;
    live_cond: GLib.Cond;
    live_running: boolean;
    can_activate_push: boolean;
    random_access: boolean;
    clock_id: Gst.ClockID;
    segment: Gst.Segment;
    need_newsegment: boolean;
    num_buffers_left: number;
    running: boolean;
    pending_seek: Gst.Event;
    priv: BaseSrcPrivate;

    // Members

    get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
    get_blocksize(): number;
    get_buffer_pool(): Gst.BufferPool | null;
    get_do_timestamp(): boolean;
    is_async(): boolean;
    is_live(): boolean;
    negotiate(): boolean;
    new_seamless_segment(start: number, stop: number, time: number): boolean;
    new_segment(segment: Gst.Segment): boolean;
    query_latency(): [boolean, boolean, Gst.ClockTime | null, Gst.ClockTime | null];
    set_async(async: boolean): void;
    set_automatic_eos(automatic_eos: boolean): void;
    set_blocksize(blocksize: number): void;
    set_caps(caps: Gst.Caps): boolean;
    set_do_timestamp(timestamp: boolean): void;
    set_dynamic_size(dynamic: boolean): void;
    set_format(format: Gst.Format): void;
    set_live(live: boolean): void;
    start_complete(ret: Gst.FlowReturn): void;
    start_wait(): Gst.FlowReturn;
    submit_buffer_list(buffer_list: Gst.BufferList): void;
    wait_playing(): Gst.FlowReturn;
    vfunc_alloc(offset: number, size: number): [Gst.FlowReturn, Gst.Buffer | null];
    vfunc_create(offset: number, size: number, buf?: Gst.Buffer | null): [Gst.FlowReturn, Gst.Buffer | null];
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_do_seek(segment: Gst.Segment): boolean;
    vfunc_event(event: Gst.Event): boolean;
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn;
    vfunc_fixate(caps: Gst.Caps): Gst.Caps;
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps;
    vfunc_get_size(): [boolean, number];
    vfunc_get_times(buffer: Gst.Buffer): [Gst.ClockTime, Gst.ClockTime];
    vfunc_is_seekable(): boolean;
    vfunc_negotiate(): boolean;
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean;
    vfunc_query(query: Gst.Query): boolean;
    vfunc_set_caps(caps: Gst.Caps): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_unlock(): boolean;
    vfunc_unlock_stop(): boolean;
}
export module BaseTransform {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        qos: boolean;
    }
}
export abstract class BaseTransform extends Gst.Element {
    static $gtype: GObject.GType<BaseTransform>;

    constructor(properties?: Partial<BaseTransform.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BaseTransform.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get qos(): boolean;
    set qos(val: boolean);

    // Fields
    element: Gst.Element;
    sinkpad: Gst.Pad;
    srcpad: Gst.Pad;
    have_segment: boolean;
    segment: Gst.Segment;
    queued_buf: Gst.Buffer;

    // Members

    get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
    get_buffer_pool(): Gst.BufferPool | null;
    is_in_place(): boolean;
    is_passthrough(): boolean;
    is_qos_enabled(): boolean;
    reconfigure(): boolean;
    reconfigure_sink(): void;
    reconfigure_src(): void;
    set_gap_aware(gap_aware: boolean): void;
    set_in_place(in_place: boolean): void;
    set_passthrough(passthrough: boolean): void;
    set_prefer_passthrough(prefer_passthrough: boolean): void;
    set_qos_enabled(enabled: boolean): void;
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void;
    update_src_caps(updated_caps: Gst.Caps): boolean;
    vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean;
    vfunc_before_transform(buffer: Gst.Buffer): void;
    vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean;
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_filter_meta(query: Gst.Query, api: GObject.GType, params: Gst.Structure): boolean;
    vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
    vfunc_generate_output(): [Gst.FlowReturn, Gst.Buffer];
    vfunc_get_unit_size(caps: Gst.Caps): [boolean, number];
    vfunc_prepare_output_buffer(input: Gst.Buffer): [Gst.FlowReturn, Gst.Buffer];
    vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean;
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean;
    // Conflicted with Gst.Element.vfunc_query
    vfunc_query(...args: never[]): any;
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
    vfunc_sink_event(event: Gst.Event): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
    vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn;
    vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
    vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn;
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean;
    vfunc_transform_size(
        direction: Gst.PadDirection,
        caps: Gst.Caps,
        size: number,
        othercaps: Gst.Caps
    ): [boolean, number];
}
export module CollectPads {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class CollectPads extends Gst.Object {
    static $gtype: GObject.GType<CollectPads>;

    constructor(properties?: Partial<CollectPads.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CollectPads.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Gst.Object;
    data: CollectData[];

    // Constructors

    static ["new"](): CollectPads;

    // Members

    add_pad(pad: Gst.Pad, size: number, destroy_notify: CollectDataDestroyNotify, lock: boolean): CollectData | null;
    available(): number;
    clip_running_time(cdata: CollectData, buf: Gst.Buffer, user_data?: any | null): [Gst.FlowReturn, Gst.Buffer | null];
    event_default(data: CollectData, event: Gst.Event, discard: boolean): boolean;
    flush(data: CollectData, size: number): number;
    peek(data: CollectData): Gst.Buffer | null;
    pop(data: CollectData): Gst.Buffer | null;
    query_default(data: CollectData, query: Gst.Query, discard: boolean): boolean;
    read_buffer(data: CollectData, size: number): Gst.Buffer | null;
    remove_pad(pad: Gst.Pad): boolean;
    set_buffer_function(func: CollectPadsBufferFunction): void;
    set_clip_function(clipfunc: CollectPadsClipFunction): void;
    set_compare_function(func: CollectPadsCompareFunction): void;
    set_event_function(func: CollectPadsEventFunction): void;
    set_flush_function(func: CollectPadsFlushFunction): void;
    set_flushing(flushing: boolean): void;
    set_function(func: CollectPadsFunction): void;
    set_query_function(func: CollectPadsQueryFunction): void;
    set_waiting(data: CollectData, waiting: boolean): void;
    src_event_default(pad: Gst.Pad, event: Gst.Event): boolean;
    start(): void;
    stop(): void;
    take_buffer(data: CollectData, size: number): Gst.Buffer | null;
}
export module DataQueue {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        current_level_bytes: number;
        currentLevelBytes: number;
        current_level_time: number;
        currentLevelTime: number;
        current_level_visible: number;
        currentLevelVisible: number;
    }
}
export class DataQueue extends GObject.Object {
    static $gtype: GObject.GType<DataQueue>;

    constructor(properties?: Partial<DataQueue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DataQueue.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get current_level_bytes(): number;
    get currentLevelBytes(): number;
    get current_level_time(): number;
    get currentLevelTime(): number;
    get current_level_visible(): number;
    get currentLevelVisible(): number;

    // Fields
    object: GObject.Object;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "empty", callback: (_source: this) => void): number;
    connect_after(signal: "empty", callback: (_source: this) => void): number;
    emit(signal: "empty"): void;
    connect(signal: "full", callback: (_source: this) => void): number;
    connect_after(signal: "full", callback: (_source: this) => void): number;
    emit(signal: "full"): void;

    // Members

    vfunc_empty(): void;
    vfunc_full(): void;
}
export module PushSrc {
    export interface ConstructorProperties extends BaseSrc.ConstructorProperties {
        [key: string]: any;
    }
}
export class PushSrc extends BaseSrc {
    static $gtype: GObject.GType<PushSrc>;

    constructor(properties?: Partial<PushSrc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PushSrc.ConstructorProperties>, ...args: any[]): void;

    // Members

    vfunc_alloc(): [Gst.FlowReturn, Gst.Buffer | null];
    vfunc_create(buf?: Gst.Buffer | null): [Gst.FlowReturn, Gst.Buffer | null];
    // Conflicted with GstBase.BaseSrc.vfunc_create
    vfunc_create(...args: never[]): any;
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn;
    // Conflicted with GstBase.BaseSrc.vfunc_fill
    vfunc_fill(...args: never[]): any;
}

export class AggregatorPadPrivate {
    static $gtype: GObject.GType<AggregatorPadPrivate>;

    constructor(copy: AggregatorPadPrivate);
}

export class AggregatorPrivate {
    static $gtype: GObject.GType<AggregatorPrivate>;

    constructor(copy: AggregatorPrivate);
}

export class BaseParseFrame {
    static $gtype: GObject.GType<BaseParseFrame>;

    constructor(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number);
    constructor(copy: BaseParseFrame);

    // Fields
    buffer: Gst.Buffer;
    out_buffer: Gst.Buffer;
    flags: number;
    offset: number;
    overhead: number;

    // Constructors
    static ["new"](buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame;

    // Members
    copy(): BaseParseFrame;
    free(): void;
    init(): void;
}

export class BaseParsePrivate {
    static $gtype: GObject.GType<BaseParsePrivate>;

    constructor(copy: BaseParsePrivate);
}

export class BaseSinkPrivate {
    static $gtype: GObject.GType<BaseSinkPrivate>;

    constructor(copy: BaseSinkPrivate);
}

export class BaseSrcPrivate {
    static $gtype: GObject.GType<BaseSrcPrivate>;

    constructor(copy: BaseSrcPrivate);
}

export class BaseTransformPrivate {
    static $gtype: GObject.GType<BaseTransformPrivate>;

    constructor(copy: BaseTransformPrivate);
}

export class BitReader {
    static $gtype: GObject.GType<BitReader>;

    constructor(copy: BitReader);

    // Fields
    data: Uint8Array;
    size: number;
    "byte": number;
    bit: number;

    // Members
    free(): void;
    get_bits_uint16(nbits: number): [boolean, number];
    get_bits_uint32(nbits: number): [boolean, number];
    get_bits_uint64(nbits: number): [boolean, number];
    get_bits_uint8(nbits: number): [boolean, number];
    get_pos(): number;
    get_remaining(): number;
    get_size(): number;
    init(data: Uint8Array | string): void;
    peek_bits_uint16(nbits: number): [boolean, number];
    peek_bits_uint32(nbits: number): [boolean, number];
    peek_bits_uint64(nbits: number): [boolean, number];
    peek_bits_uint8(nbits: number): [boolean, number];
    set_pos(pos: number): boolean;
    skip(nbits: number): boolean;
    skip_to_byte(): boolean;
}

export class BitWriter {
    static $gtype: GObject.GType<BitWriter>;

    constructor(
        properties?: Partial<{
            data?: number;
            bit_size?: number;
        }>
    );
    constructor(copy: BitWriter);

    // Fields
    data: number;
    bit_size: number;

    // Members
    align_bytes(trailing_bit: number): boolean;
    free(): void;
    free_and_get_buffer(): Gst.Buffer;
    free_and_get_data(): Uint8Array;
    get_data(): Uint8Array;
    get_remaining(): number;
    get_size(): number;
    put_bits_uint16(value: number, nbits: number): boolean;
    put_bits_uint32(value: number, nbits: number): boolean;
    put_bits_uint64(value: number, nbits: number): boolean;
    put_bits_uint8(value: number, nbits: number): boolean;
    put_bytes(data: Uint8Array | string, nbytes: number): boolean;
    reset(): void;
    reset_and_get_buffer(): Gst.Buffer;
    reset_and_get_data(): Uint8Array;
    set_pos(pos: number): boolean;
}

export class ByteReader {
    static $gtype: GObject.GType<ByteReader>;

    constructor(copy: ByteReader);

    // Fields
    data: Uint8Array;
    size: number;
    "byte": number;

    // Members
    dup_data(): [boolean, Uint8Array];
    dup_string_utf16(): [boolean, number[]];
    dup_string_utf32(): [boolean, number[]];
    dup_string_utf8(): [boolean, string[]];
    free(): void;
    get_data(): [boolean, Uint8Array];
    get_float32_be(): [boolean, number];
    get_float32_le(): [boolean, number];
    get_float64_be(): [boolean, number];
    get_float64_le(): [boolean, number];
    get_int16_be(): [boolean, number];
    get_int16_le(): [boolean, number];
    get_int24_be(): [boolean, number];
    get_int24_le(): [boolean, number];
    get_int32_be(): [boolean, number];
    get_int32_le(): [boolean, number];
    get_int64_be(): [boolean, number];
    get_int64_le(): [boolean, number];
    get_int8(): [boolean, number];
    get_pos(): number;
    get_remaining(): number;
    get_size(): number;
    get_string_utf8(): [boolean, string[]];
    get_uint16_be(): [boolean, number];
    get_uint16_le(): [boolean, number];
    get_uint24_be(): [boolean, number];
    get_uint24_le(): [boolean, number];
    get_uint32_be(): [boolean, number];
    get_uint32_le(): [boolean, number];
    get_uint64_be(): [boolean, number];
    get_uint64_le(): [boolean, number];
    get_uint8(): [boolean, number];
    init(data: Uint8Array | string): void;
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
    peek_data(): [boolean, Uint8Array];
    peek_float32_be(): [boolean, number];
    peek_float32_le(): [boolean, number];
    peek_float64_be(): [boolean, number];
    peek_float64_le(): [boolean, number];
    peek_int16_be(): [boolean, number];
    peek_int16_le(): [boolean, number];
    peek_int24_be(): [boolean, number];
    peek_int24_le(): [boolean, number];
    peek_int32_be(): [boolean, number];
    peek_int32_le(): [boolean, number];
    peek_int64_be(): [boolean, number];
    peek_int64_le(): [boolean, number];
    peek_int8(): [boolean, number];
    peek_string_utf8(): [boolean, string[]];
    peek_uint16_be(): [boolean, number];
    peek_uint16_le(): [boolean, number];
    peek_uint24_be(): [boolean, number];
    peek_uint24_le(): [boolean, number];
    peek_uint32_be(): [boolean, number];
    peek_uint32_le(): [boolean, number];
    peek_uint64_be(): [boolean, number];
    peek_uint64_le(): [boolean, number];
    peek_uint8(): [boolean, number];
    set_pos(pos: number): boolean;
    skip(nbytes: number): boolean;
    skip_string_utf16(): boolean;
    skip_string_utf32(): boolean;
    skip_string_utf8(): boolean;
}

export class ByteWriter {
    static $gtype: GObject.GType<ByteWriter>;

    constructor(copy: ByteWriter);

    // Fields
    parent: ByteReader;
    alloc_size: number;
    fixed: boolean;
    owned: boolean;

    // Members
    ensure_free_space(size: number): boolean;
    fill(value: number, size: number): boolean;
    free(): void;
    free_and_get_buffer(): Gst.Buffer;
    free_and_get_data(): number;
    get_remaining(): number;
    init(): void;
    init_with_data(data: Uint8Array | string, initialized: boolean): void;
    init_with_size(size: number, fixed: boolean): void;
    put_buffer(buffer: Gst.Buffer, offset: number, size: number): boolean;
    put_data(data: Uint8Array | string): boolean;
    put_float32_be(val: number): boolean;
    put_float32_le(val: number): boolean;
    put_float64_be(val: number): boolean;
    put_float64_le(val: number): boolean;
    put_int16_be(val: number): boolean;
    put_int16_le(val: number): boolean;
    put_int24_be(val: number): boolean;
    put_int24_le(val: number): boolean;
    put_int32_be(val: number): boolean;
    put_int32_le(val: number): boolean;
    put_int64_be(val: number): boolean;
    put_int64_le(val: number): boolean;
    put_int8(val: number): boolean;
    put_string_utf16(data: number[]): boolean;
    put_string_utf32(data: number[]): boolean;
    put_string_utf8(data: string): boolean;
    put_uint16_be(val: number): boolean;
    put_uint16_le(val: number): boolean;
    put_uint24_be(val: number): boolean;
    put_uint24_le(val: number): boolean;
    put_uint32_be(val: number): boolean;
    put_uint32_le(val: number): boolean;
    put_uint64_be(val: number): boolean;
    put_uint64_le(val: number): boolean;
    put_uint8(val: number): boolean;
    reset(): void;
    reset_and_get_buffer(): Gst.Buffer;
    reset_and_get_data(): Uint8Array;
}

export class CollectData {
    static $gtype: GObject.GType<CollectData>;

    constructor(copy: CollectData);

    // Fields
    collect: CollectPads;
    pad: Gst.Pad;
    buffer: Gst.Buffer;
    pos: number;
    segment: Gst.Segment;
}

export class CollectDataPrivate {
    static $gtype: GObject.GType<CollectDataPrivate>;

    constructor(copy: CollectDataPrivate);
}

export class CollectPadsPrivate {
    static $gtype: GObject.GType<CollectPadsPrivate>;

    constructor(copy: CollectPadsPrivate);
}

export class DataQueuePrivate {
    static $gtype: GObject.GType<DataQueuePrivate>;

    constructor(copy: DataQueuePrivate);
}

export class FlowCombiner {
    static $gtype: GObject.GType<FlowCombiner>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: FlowCombiner);

    // Constructors
    static ["new"](): FlowCombiner;

    // Members
    add_pad(pad: Gst.Pad): void;
    clear(): void;
    free(): void;
    ref(): FlowCombiner;
    remove_pad(pad: Gst.Pad): void;
    reset(): void;
    unref(): void;
    update_flow(fret: Gst.FlowReturn): Gst.FlowReturn;
    update_pad_flow(pad: Gst.Pad, fret: Gst.FlowReturn): Gst.FlowReturn;
}

export class TypeFindData {
    static $gtype: GObject.GType<TypeFindData>;

    constructor(copy: TypeFindData);
}
