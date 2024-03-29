/**
 * GstBadAudio 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GstBase from "gstbase1";
import * as GstAudio from "gstaudio1";
import * as GLib from "glib2";
import * as GObject from "gobject2";

export const NONSTREAM_AUDIO_DECODER_SINK_NAME: string;
export const NONSTREAM_AUDIO_DECODER_SRC_NAME: string;

export namespace NonstreamAudioOutputMode {
    export const $gtype: GObject.GType<NonstreamAudioOutputMode>;
}

export enum NonstreamAudioOutputMode {
    LOOPING = 0,
    STEADY = 1,
}

export namespace NonstreamAudioSubsongMode {
    export const $gtype: GObject.GType<NonstreamAudioSubsongMode>;
}

export enum NonstreamAudioSubsongMode {
    SINGLE = 0,
    ALL = 1,
    DECODER_DEFAULT = 2,
}
export module NonstreamAudioDecoder {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        current_subsong: number;
        currentSubsong: number;
        num_loops: number;
        numLoops: number;
    }
}
export abstract class NonstreamAudioDecoder extends Gst.Element {
    static $gtype: GObject.GType<NonstreamAudioDecoder>;

    constructor(properties?: Partial<NonstreamAudioDecoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NonstreamAudioDecoder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get current_subsong(): number;
    set current_subsong(val: number);
    get currentSubsong(): number;
    set currentSubsong(val: number);
    get num_loops(): number;
    set num_loops(val: number);
    get numLoops(): number;
    set numLoops(val: number);

    // Fields
    element: Gst.Element;
    sinkpad: Gst.Pad;
    srcpad: Gst.Pad;
    upstream_size: number;
    loaded_mode: boolean;
    input_data_adapter: GstBase.Adapter;
    subsong_mode: NonstreamAudioSubsongMode;
    subsong_duration: Gst.ClockTime;
    output_mode: NonstreamAudioOutputMode;
    output_format_changed: boolean;
    output_audio_info: GstAudio.AudioInfo;
    cur_pos_in_samples: number;
    num_decoded_samples: number;
    cur_segment: Gst.Segment;
    discont: boolean;
    toc: Gst.Toc;
    allocator: Gst.Allocator;
    allocation_params: Gst.AllocationParams;
    mutex: GLib.Mutex;

    // Members

    allocate_output_buffer(size: number): Gst.Buffer | null;
    get_downstream_info(format: GstAudio.AudioFormat, sample_rate: number, num_channels: number): void;
    handle_loop(new_position: Gst.ClockTime): void;
    set_output_format(audio_info: GstAudio.AudioInfo): boolean;
    set_output_format_simple(sample_rate: number, sample_format: GstAudio.AudioFormat, num_channels: number): boolean;
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_decode(buffer: Gst.Buffer, num_samples: number): boolean;
    vfunc_get_current_subsong(): number;
    vfunc_get_main_tags(): Gst.TagList;
    vfunc_get_num_loops(): number;
    vfunc_get_num_subsongs(): number;
    vfunc_get_subsong_duration(subsong: number): Gst.ClockTime;
    vfunc_get_subsong_tags(subsong: number): Gst.TagList;
    vfunc_get_supported_output_modes(): number;
    vfunc_load_from_buffer(
        source_data: Gst.Buffer,
        initial_subsong: number,
        initial_subsong_mode: NonstreamAudioSubsongMode,
        initial_position: Gst.ClockTime,
        initial_output_mode: NonstreamAudioOutputMode,
        initial_num_loops: number
    ): boolean;
    vfunc_load_from_custom(
        initial_subsong: number,
        initial_subsong_mode: NonstreamAudioSubsongMode,
        initial_position: Gst.ClockTime,
        initial_output_mode: NonstreamAudioOutputMode,
        initial_num_loops: number
    ): boolean;
    vfunc_negotiate(): boolean;
    vfunc_propose_allocation(query: Gst.Query): boolean;
    vfunc_seek(new_position: Gst.ClockTime): boolean;
    vfunc_set_current_subsong(subsong: number, initial_position: Gst.ClockTime): boolean;
    vfunc_set_num_loops(num_loops: number): boolean;
    vfunc_set_output_mode(mode: NonstreamAudioOutputMode, current_position: Gst.ClockTime): boolean;
    vfunc_set_subsong_mode(mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime): boolean;
    vfunc_tell(): Gst.ClockTime;
}
export module PlanarAudioAdapter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlanarAudioAdapter extends GObject.Object {
    static $gtype: GObject.GType<PlanarAudioAdapter>;

    constructor(properties?: Partial<PlanarAudioAdapter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlanarAudioAdapter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): PlanarAudioAdapter;

    // Members

    available(): number;
    clear(): void;
    configure(info: GstAudio.AudioInfo): void;
    distance_from_discont(): number;
    dts_at_discont(): Gst.ClockTime;
    flush(to_flush: number): void;
    get_buffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null;
    offset_at_discont(): number;
    prev_dts(): [Gst.ClockTime, number];
    prev_offset(): [number, number];
    prev_pts(): [Gst.ClockTime, number];
    pts_at_discont(): Gst.ClockTime;
    push(buf: Gst.Buffer): void;
    take_buffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null;
}
