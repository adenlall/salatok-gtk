/**
 * GstAudio 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as Gst from "gst1";
import * as GstBase from "gstbase1";
import * as GLib from "glib2";

export const AUDIO_CHANNELS_RANGE: string;
export const AUDIO_CONVERTER_OPT_DITHER_METHOD: string;
export const AUDIO_CONVERTER_OPT_DITHER_THRESHOLD: string;
export const AUDIO_CONVERTER_OPT_MIX_MATRIX: string;
export const AUDIO_CONVERTER_OPT_NOISE_SHAPING_METHOD: string;
export const AUDIO_CONVERTER_OPT_QUANTIZATION: string;
export const AUDIO_CONVERTER_OPT_RESAMPLER_METHOD: string;
export const AUDIO_DECODER_MAX_ERRORS: number;
export const AUDIO_DECODER_SINK_NAME: string;
export const AUDIO_DECODER_SRC_NAME: string;
export const AUDIO_DEF_CHANNELS: number;
export const AUDIO_DEF_FORMAT: string;
export const AUDIO_DEF_RATE: number;
export const AUDIO_ENCODER_SINK_NAME: string;
export const AUDIO_ENCODER_SRC_NAME: string;
export const AUDIO_FORMATS_ALL: string;
export const AUDIO_RATE_RANGE: string;
export const AUDIO_RESAMPLER_OPT_CUBIC_B: string;
export const AUDIO_RESAMPLER_OPT_CUBIC_C: string;
export const AUDIO_RESAMPLER_OPT_CUTOFF: string;
export const AUDIO_RESAMPLER_OPT_FILTER_INTERPOLATION: string;
export const AUDIO_RESAMPLER_OPT_FILTER_MODE: string;
export const AUDIO_RESAMPLER_OPT_FILTER_MODE_THRESHOLD: string;
export const AUDIO_RESAMPLER_OPT_FILTER_OVERSAMPLE: string;
export const AUDIO_RESAMPLER_OPT_MAX_PHASE_ERROR: string;
export const AUDIO_RESAMPLER_OPT_N_TAPS: string;
export const AUDIO_RESAMPLER_OPT_STOP_ATTENUATION: string;
export const AUDIO_RESAMPLER_OPT_TRANSITION_BANDWIDTH: string;
export const AUDIO_RESAMPLER_QUALITY_DEFAULT: number;
export const AUDIO_RESAMPLER_QUALITY_MAX: number;
export const AUDIO_RESAMPLER_QUALITY_MIN: number;
export const META_TAG_AUDIO_CHANNELS_STR: string;
export const META_TAG_AUDIO_RATE_STR: string;
export const META_TAG_AUDIO_STR: string;
export function audio_buffer_clip(
    buffer: Gst.Buffer,
    segment: Gst.Segment,
    rate: number,
    bpf: number
): Gst.Buffer | null;
export function audio_buffer_map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, AudioBuffer];
export function audio_buffer_reorder_channels(
    buffer: Gst.Buffer,
    format: AudioFormat,
    from: AudioChannelPosition[],
    to: AudioChannelPosition[]
): boolean;
export function audio_buffer_truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer;
export function audio_channel_get_fallback_mask(channels: number): number;
export function audio_channel_positions_from_mask(channel_mask: number, position: AudioChannelPosition[]): boolean;
export function audio_channel_positions_to_mask(
    position: AudioChannelPosition[],
    force_order: boolean
): [boolean, number];
export function audio_channel_positions_to_string(position: AudioChannelPosition[]): string;
export function audio_channel_positions_to_valid_order(position: AudioChannelPosition[]): boolean;
export function audio_check_valid_channel_positions(position: AudioChannelPosition[], force_order: boolean): boolean;
export function audio_clipping_meta_api_get_type(): GObject.GType;
export function audio_clipping_meta_get_info(): Gst.MetaInfo;
export function audio_downmix_meta_api_get_type(): GObject.GType;
export function audio_downmix_meta_get_info(): Gst.MetaInfo;
export function audio_format_build_integer(
    sign: boolean,
    endianness: number,
    width: number,
    depth: number
): AudioFormat;
export function audio_format_fill_silence(info: AudioFormatInfo, dest: Uint8Array | string): void;
export function audio_format_from_string(format: string): AudioFormat;
export function audio_format_get_info(format: AudioFormat): AudioFormatInfo;
export function audio_format_info_get_type(): GObject.GType;
export function audio_format_to_string(format: AudioFormat): string;
export function audio_formats_raw(): AudioFormat[];
export function audio_get_channel_reorder_map(
    from: AudioChannelPosition[],
    to: AudioChannelPosition[],
    reorder_map: number[]
): boolean;
export function audio_iec61937_frame_size(spec: AudioRingBufferSpec): number;
export function audio_iec61937_payload(
    src: Uint8Array | string,
    dst: Uint8Array | string,
    spec: AudioRingBufferSpec,
    endianness: number
): boolean;
export function audio_info_from_caps(caps: Gst.Caps): [boolean, AudioInfo];
export function audio_info_init(): AudioInfo;
export function audio_level_meta_api_get_type(): GObject.GType;
export function audio_level_meta_get_info(): Gst.MetaInfo;
export function audio_make_raw_caps(formats: AudioFormat[] | null, layout: AudioLayout): Gst.Caps;
export function audio_meta_api_get_type(): GObject.GType;
export function audio_meta_get_info(): Gst.MetaInfo;
export function audio_reorder_channels(
    data: Uint8Array | string,
    format: AudioFormat,
    from: AudioChannelPosition[],
    to: AudioChannelPosition[]
): boolean;
export function audio_resampler_new(
    method: AudioResamplerMethod,
    flags: AudioResamplerFlags,
    format: AudioFormat,
    channels: number,
    in_rate: number,
    out_rate: number,
    options: Gst.Structure
): AudioResampler;
export function audio_resampler_options_set_quality(
    method: AudioResamplerMethod,
    quality: number,
    in_rate: number,
    out_rate: number,
    options: Gst.Structure
): void;
export function buffer_add_audio_clipping_meta(
    buffer: Gst.Buffer,
    format: Gst.Format,
    start: number,
    end: number
): AudioClippingMeta;
export function buffer_add_audio_downmix_meta(
    buffer: Gst.Buffer,
    from_position: AudioChannelPosition[],
    to_position: AudioChannelPosition[],
    matrix: number
): AudioDownmixMeta;
export function buffer_add_audio_level_meta(
    buffer: Gst.Buffer,
    level: number,
    voice_activity: boolean
): AudioLevelMeta | null;
export function buffer_add_audio_meta(
    buffer: Gst.Buffer,
    info: AudioInfo,
    samples: number,
    offsets?: number | null
): AudioMeta;
export function buffer_get_audio_downmix_meta_for_channels(
    buffer: Gst.Buffer,
    to_position: AudioChannelPosition[]
): AudioDownmixMeta;
export function buffer_get_audio_level_meta(buffer: Gst.Buffer): AudioLevelMeta | null;
export function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number;
export type AudioBaseSinkCustomSlavingCallback = (
    sink: AudioBaseSink,
    etime: Gst.ClockTime,
    itime: Gst.ClockTime,
    requested_skew: Gst.ClockTimeDiff,
    discont_reason: AudioBaseSinkDiscontReason
) => void;
export type AudioClockGetTimeFunc = (clock: Gst.Clock) => Gst.ClockTime;
export type AudioFormatPack = (
    info: AudioFormatInfo,
    flags: AudioPackFlags,
    src: Uint8Array | string,
    data: Uint8Array | string,
    length: number
) => void;
export type AudioFormatUnpack = (
    info: AudioFormatInfo,
    flags: AudioPackFlags,
    dest: Uint8Array | string,
    data: Uint8Array | string,
    length: number
) => void;
export type AudioRingBufferCallback = (rbuf: AudioRingBuffer, data: Uint8Array | string) => void;

export namespace AudioBaseSinkDiscontReason {
    export const $gtype: GObject.GType<AudioBaseSinkDiscontReason>;
}

export enum AudioBaseSinkDiscontReason {
    NO_DISCONT = 0,
    NEW_CAPS = 1,
    FLUSH = 2,
    SYNC_LATENCY = 3,
    ALIGNMENT = 4,
    DEVICE_FAILURE = 5,
}

export namespace AudioBaseSinkSlaveMethod {
    export const $gtype: GObject.GType<AudioBaseSinkSlaveMethod>;
}

export enum AudioBaseSinkSlaveMethod {
    RESAMPLE = 0,
    SKEW = 1,
    NONE = 2,
    CUSTOM = 3,
}

export namespace AudioBaseSrcSlaveMethod {
    export const $gtype: GObject.GType<AudioBaseSrcSlaveMethod>;
}

export enum AudioBaseSrcSlaveMethod {
    RESAMPLE = 0,
    RE_TIMESTAMP = 1,
    SKEW = 2,
    NONE = 3,
}

export namespace AudioCdSrcMode {
    export const $gtype: GObject.GType<AudioCdSrcMode>;
}

export enum AudioCdSrcMode {
    NORMAL = 0,
    CONTINUOUS = 1,
}

export namespace AudioChannelPosition {
    export const $gtype: GObject.GType<AudioChannelPosition>;
}

export enum AudioChannelPosition {
    NONE = -3,
    MONO = -2,
    INVALID = -1,
    FRONT_LEFT = 0,
    FRONT_RIGHT = 1,
    FRONT_CENTER = 2,
    LFE1 = 3,
    REAR_LEFT = 4,
    REAR_RIGHT = 5,
    FRONT_LEFT_OF_CENTER = 6,
    FRONT_RIGHT_OF_CENTER = 7,
    REAR_CENTER = 8,
    LFE2 = 9,
    SIDE_LEFT = 10,
    SIDE_RIGHT = 11,
    TOP_FRONT_LEFT = 12,
    TOP_FRONT_RIGHT = 13,
    TOP_FRONT_CENTER = 14,
    TOP_CENTER = 15,
    TOP_REAR_LEFT = 16,
    TOP_REAR_RIGHT = 17,
    TOP_SIDE_LEFT = 18,
    TOP_SIDE_RIGHT = 19,
    TOP_REAR_CENTER = 20,
    BOTTOM_FRONT_CENTER = 21,
    BOTTOM_FRONT_LEFT = 22,
    BOTTOM_FRONT_RIGHT = 23,
    WIDE_LEFT = 24,
    WIDE_RIGHT = 25,
    SURROUND_LEFT = 26,
    SURROUND_RIGHT = 27,
}

export namespace AudioDitherMethod {
    export const $gtype: GObject.GType<AudioDitherMethod>;
}

export enum AudioDitherMethod {
    NONE = 0,
    RPDF = 1,
    TPDF = 2,
    TPDF_HF = 3,
}

export namespace AudioFormat {
    export const $gtype: GObject.GType<AudioFormat>;
}

export enum AudioFormat {
    UNKNOWN = 0,
    ENCODED = 1,
    S8 = 2,
    U8 = 3,
    S16LE = 4,
    S16BE = 5,
    U16LE = 6,
    U16BE = 7,
    S24_32LE = 8,
    S24_32BE = 9,
    U24_32LE = 10,
    U24_32BE = 11,
    S32LE = 12,
    S32BE = 13,
    U32LE = 14,
    U32BE = 15,
    S24LE = 16,
    S24BE = 17,
    U24LE = 18,
    U24BE = 19,
    S20LE = 20,
    S20BE = 21,
    U20LE = 22,
    U20BE = 23,
    S18LE = 24,
    S18BE = 25,
    U18LE = 26,
    U18BE = 27,
    F32LE = 28,
    F32BE = 29,
    F64LE = 30,
    F64BE = 31,
    S16 = 4,
    U16 = 6,
    S24_32 = 8,
    U24_32 = 10,
    S32 = 12,
    U32 = 14,
    S24 = 16,
    U24 = 18,
    S20 = 20,
    U20 = 22,
    S18 = 24,
    U18 = 26,
    F32 = 28,
    F64 = 30,
}

export namespace AudioLayout {
    export const $gtype: GObject.GType<AudioLayout>;
}

export enum AudioLayout {
    INTERLEAVED = 0,
    NON_INTERLEAVED = 1,
}

export namespace AudioNoiseShapingMethod {
    export const $gtype: GObject.GType<AudioNoiseShapingMethod>;
}

export enum AudioNoiseShapingMethod {
    NONE = 0,
    ERROR_FEEDBACK = 1,
    SIMPLE = 2,
    MEDIUM = 3,
    HIGH = 4,
}

export namespace AudioResamplerFilterInterpolation {
    export const $gtype: GObject.GType<AudioResamplerFilterInterpolation>;
}

export enum AudioResamplerFilterInterpolation {
    NONE = 0,
    LINEAR = 1,
    CUBIC = 2,
}

export namespace AudioResamplerFilterMode {
    export const $gtype: GObject.GType<AudioResamplerFilterMode>;
}

export enum AudioResamplerFilterMode {
    INTERPOLATED = 0,
    FULL = 1,
    AUTO = 2,
}

export namespace AudioResamplerMethod {
    export const $gtype: GObject.GType<AudioResamplerMethod>;
}

export enum AudioResamplerMethod {
    NEAREST = 0,
    LINEAR = 1,
    CUBIC = 2,
    BLACKMAN_NUTTALL = 3,
    KAISER = 4,
}

export namespace AudioRingBufferFormatType {
    export const $gtype: GObject.GType<AudioRingBufferFormatType>;
}

export enum AudioRingBufferFormatType {
    RAW = 0,
    MU_LAW = 1,
    A_LAW = 2,
    IMA_ADPCM = 3,
    MPEG = 4,
    GSM = 5,
    IEC958 = 6,
    AC3 = 7,
    EAC3 = 8,
    DTS = 9,
    MPEG2_AAC = 10,
    MPEG4_AAC = 11,
    MPEG2_AAC_RAW = 12,
    MPEG4_AAC_RAW = 13,
    FLAC = 14,
}

export namespace AudioRingBufferState {
    export const $gtype: GObject.GType<AudioRingBufferState>;
}

export enum AudioRingBufferState {
    STOPPED = 0,
    PAUSED = 1,
    STARTED = 2,
    ERROR = 3,
}

export namespace StreamVolumeFormat {
    export const $gtype: GObject.GType<StreamVolumeFormat>;
}

export enum StreamVolumeFormat {
    LINEAR = 0,
    CUBIC = 1,
    DB = 2,
}

export namespace AudioChannelMixerFlags {
    export const $gtype: GObject.GType<AudioChannelMixerFlags>;
}

export enum AudioChannelMixerFlags {
    NONE = 0,
    NON_INTERLEAVED_IN = 1,
    NON_INTERLEAVED_OUT = 2,
    UNPOSITIONED_IN = 4,
    UNPOSITIONED_OUT = 8,
}

export namespace AudioConverterFlags {
    export const $gtype: GObject.GType<AudioConverterFlags>;
}

export enum AudioConverterFlags {
    NONE = 0,
    IN_WRITABLE = 1,
    VARIABLE_RATE = 2,
}

export namespace AudioFlags {
    export const $gtype: GObject.GType<AudioFlags>;
}

export enum AudioFlags {
    NONE = 0,
    UNPOSITIONED = 1,
}

export namespace AudioFormatFlags {
    export const $gtype: GObject.GType<AudioFormatFlags>;
}

export enum AudioFormatFlags {
    INTEGER = 1,
    FLOAT = 2,
    SIGNED = 4,
    COMPLEX = 16,
    UNPACK = 32,
}

export namespace AudioPackFlags {
    export const $gtype: GObject.GType<AudioPackFlags>;
}

export enum AudioPackFlags {
    NONE = 0,
    TRUNCATE_RANGE = 1,
}

export namespace AudioQuantizeFlags {
    export const $gtype: GObject.GType<AudioQuantizeFlags>;
}

export enum AudioQuantizeFlags {
    NONE = 0,
    NON_INTERLEAVED = 1,
}

export namespace AudioResamplerFlags {
    export const $gtype: GObject.GType<AudioResamplerFlags>;
}

export enum AudioResamplerFlags {
    NONE = 0,
    NON_INTERLEAVED_IN = 1,
    NON_INTERLEAVED_OUT = 2,
    VARIABLE_RATE = 4,
}
export module AudioAggregator {
    export interface ConstructorProperties extends GstBase.Aggregator.ConstructorProperties {
        [key: string]: any;
        alignment_threshold: number;
        alignmentThreshold: number;
        discont_wait: number;
        discontWait: number;
        force_live: boolean;
        forceLive: boolean;
        ignore_inactive_pads: boolean;
        ignoreInactivePads: boolean;
        output_buffer_duration: number;
        outputBufferDuration: number;
        output_buffer_duration_fraction: Gst.Fraction;
        outputBufferDurationFraction: Gst.Fraction;
    }
}
export abstract class AudioAggregator extends GstBase.Aggregator {
    static $gtype: GObject.GType<AudioAggregator>;

    constructor(properties?: Partial<AudioAggregator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioAggregator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alignment_threshold(): number;
    set alignment_threshold(val: number);
    get alignmentThreshold(): number;
    set alignmentThreshold(val: number);
    get discont_wait(): number;
    set discont_wait(val: number);
    get discontWait(): number;
    set discontWait(val: number);
    get force_live(): boolean;
    get forceLive(): boolean;
    get ignore_inactive_pads(): boolean;
    set ignore_inactive_pads(val: boolean);
    get ignoreInactivePads(): boolean;
    set ignoreInactivePads(val: boolean);
    get output_buffer_duration(): number;
    set output_buffer_duration(val: number);
    get outputBufferDuration(): number;
    set outputBufferDuration(val: number);
    get output_buffer_duration_fraction(): Gst.Fraction;
    set output_buffer_duration_fraction(val: Gst.Fraction);
    get outputBufferDurationFraction(): Gst.Fraction;
    set outputBufferDurationFraction(val: Gst.Fraction);

    // Fields
    current_caps: Gst.Caps;

    // Members

    set_sink_caps(pad: AudioAggregatorPad, caps: Gst.Caps): void;
    vfunc_aggregate_one_buffer(
        pad: AudioAggregatorPad,
        inbuf: Gst.Buffer,
        in_offset: number,
        outbuf: Gst.Buffer,
        out_offset: number,
        num_frames: number
    ): boolean;
    vfunc_create_output_buffer(num_frames: number): Gst.Buffer;
}
export module AudioAggregatorConvertPad {
    export interface ConstructorProperties extends AudioAggregatorPad.ConstructorProperties {
        [key: string]: any;
        converter_config: Gst.Structure;
        converterConfig: Gst.Structure;
    }
}
export class AudioAggregatorConvertPad extends AudioAggregatorPad {
    static $gtype: GObject.GType<AudioAggregatorConvertPad>;

    constructor(properties?: Partial<AudioAggregatorConvertPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioAggregatorConvertPad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get converter_config(): Gst.Structure;
    set converter_config(val: Gst.Structure);
    get converterConfig(): Gst.Structure;
    set converterConfig(val: Gst.Structure);
}
export module AudioAggregatorPad {
    export interface ConstructorProperties extends GstBase.AggregatorPad.ConstructorProperties {
        [key: string]: any;
        qos_messages: boolean;
        qosMessages: boolean;
    }
}
export class AudioAggregatorPad extends GstBase.AggregatorPad {
    static $gtype: GObject.GType<AudioAggregatorPad>;

    constructor(properties?: Partial<AudioAggregatorPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioAggregatorPad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get qos_messages(): boolean;
    set qos_messages(val: boolean);
    get qosMessages(): boolean;
    set qosMessages(val: boolean);

    // Fields
    info: AudioInfo;

    // Members

    vfunc_convert_buffer(in_info: AudioInfo, out_info: AudioInfo, buffer: Gst.Buffer): Gst.Buffer;
    vfunc_update_conversion_info(): void;
}
export module AudioBaseSink {
    export interface ConstructorProperties extends GstBase.BaseSink.ConstructorProperties {
        [key: string]: any;
        alignment_threshold: number;
        alignmentThreshold: number;
        buffer_time: number;
        bufferTime: number;
        can_activate_pull: boolean | any;
        canActivatePull: boolean;
        discont_wait: number;
        discontWait: number;
        drift_tolerance: number;
        driftTolerance: number;
        latency_time: number;
        latencyTime: number;
        provide_clock: boolean | any;
        provideClock: boolean;
        slave_method: AudioBaseSinkSlaveMethod;
        slaveMethod: AudioBaseSinkSlaveMethod;
    }
}
export class AudioBaseSink extends GstBase.BaseSink {
    static $gtype: GObject.GType<AudioBaseSink>;

    constructor(properties?: Partial<AudioBaseSink.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioBaseSink.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alignment_threshold(): number;
    set alignment_threshold(val: number);
    get alignmentThreshold(): number;
    set alignmentThreshold(val: number);
    get buffer_time(): number;
    set buffer_time(val: number);
    get bufferTime(): number;
    set bufferTime(val: number);
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    get can_activate_pull(): boolean;
    set can_activate_pull(val: boolean);
    get canActivatePull(): boolean;
    set canActivatePull(val: boolean);
    get discont_wait(): number;
    set discont_wait(val: number);
    get discontWait(): number;
    set discontWait(val: number);
    get drift_tolerance(): number;
    set drift_tolerance(val: number);
    get driftTolerance(): number;
    set driftTolerance(val: number);
    get latency_time(): number;
    set latency_time(val: number);
    get latencyTime(): number;
    set latencyTime(val: number);
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    get provide_clock(): boolean;
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    set provide_clock(val: boolean);
    get provideClock(): boolean;
    set provideClock(val: boolean);
    get slave_method(): AudioBaseSinkSlaveMethod;
    set slave_method(val: AudioBaseSinkSlaveMethod);
    get slaveMethod(): AudioBaseSinkSlaveMethod;
    set slaveMethod(val: AudioBaseSinkSlaveMethod);

    // Fields
    element: GstBase.BaseSink;
    ringbuffer: AudioRingBuffer;
    next_sample: number;
    provided_clock: Gst.Clock;
    eos_rendering: boolean;

    // Members

    create_ringbuffer(): AudioRingBuffer | null;
    get_alignment_threshold(): Gst.ClockTime;
    get_discont_wait(): Gst.ClockTime;
    get_drift_tolerance(): number;
    get_provide_clock(): boolean;
    get_slave_method(): AudioBaseSinkSlaveMethod;
    report_device_failure(): void;
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
    set_custom_slaving_callback(callback: AudioBaseSinkCustomSlavingCallback): void;
    set_discont_wait(discont_wait: Gst.ClockTime): void;
    set_drift_tolerance(drift_tolerance: number): void;
    set_provide_clock(provide: boolean): void;
    set_slave_method(method: AudioBaseSinkSlaveMethod): void;
    vfunc_create_ringbuffer(): AudioRingBuffer | null;
    vfunc_payload(buffer: Gst.Buffer): Gst.Buffer;
}
export module AudioBaseSrc {
    export interface ConstructorProperties extends GstBase.PushSrc.ConstructorProperties {
        [key: string]: any;
        actual_buffer_time: number;
        actualBufferTime: number;
        actual_latency_time: number;
        actualLatencyTime: number;
        buffer_time: number;
        bufferTime: number;
        latency_time: number;
        latencyTime: number;
        provide_clock: boolean | any;
        provideClock: boolean;
        slave_method: AudioBaseSrcSlaveMethod;
        slaveMethod: AudioBaseSrcSlaveMethod;
    }
}
export class AudioBaseSrc extends GstBase.PushSrc {
    static $gtype: GObject.GType<AudioBaseSrc>;

    constructor(properties?: Partial<AudioBaseSrc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioBaseSrc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get actual_buffer_time(): number;
    get actualBufferTime(): number;
    get actual_latency_time(): number;
    get actualLatencyTime(): number;
    get buffer_time(): number;
    set buffer_time(val: number);
    get bufferTime(): number;
    set bufferTime(val: number);
    get latency_time(): number;
    set latency_time(val: number);
    get latencyTime(): number;
    set latencyTime(val: number);
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    get provide_clock(): boolean;
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    set provide_clock(val: boolean);
    get provideClock(): boolean;
    set provideClock(val: boolean);
    get slave_method(): AudioBaseSrcSlaveMethod;
    set slave_method(val: AudioBaseSrcSlaveMethod);
    get slaveMethod(): AudioBaseSrcSlaveMethod;
    set slaveMethod(val: AudioBaseSrcSlaveMethod);

    // Fields
    element: GstBase.PushSrc;
    ringbuffer: AudioRingBuffer;
    next_sample: number;
    clock: Gst.Clock;

    // Members

    create_ringbuffer(): AudioRingBuffer | null;
    get_provide_clock(): boolean;
    get_slave_method(): AudioBaseSrcSlaveMethod;
    set_provide_clock(provide: boolean): void;
    set_slave_method(method: AudioBaseSrcSlaveMethod): void;
    vfunc_create_ringbuffer(): AudioRingBuffer | null;
}
export module AudioCdSrc {
    export interface ConstructorProperties extends GstBase.PushSrc.ConstructorProperties {
        [key: string]: any;
        device: string;
        mode: AudioCdSrcMode;
        track: number;
    }
}
export class AudioCdSrc extends GstBase.PushSrc implements Gst.URIHandler {
    static $gtype: GObject.GType<AudioCdSrc>;

    constructor(properties?: Partial<AudioCdSrc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioCdSrc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get device(): string;
    set device(val: string);
    get mode(): AudioCdSrcMode;
    set mode(val: AudioCdSrcMode);
    get track(): number;
    set track(val: number);

    // Fields
    pushsrc: GstBase.PushSrc;
    tags: Gst.TagList;

    // Members

    add_track(track: AudioCdSrcTrack): boolean;
    vfunc_close(): void;
    vfunc_open(device: string): boolean;
    vfunc_read_sector(sector: number): Gst.Buffer;

    // Implemented Members

    get_protocols(): string[] | null;
    get_uri(): string | null;
    get_uri_type(): Gst.URIType;
    set_uri(uri: string): boolean;
    vfunc_get_uri(): string | null;
    vfunc_set_uri(uri: string): boolean;
}
export module AudioClock {
    export interface ConstructorProperties extends Gst.SystemClock.ConstructorProperties {
        [key: string]: any;
    }
}
export class AudioClock extends Gst.SystemClock {
    static $gtype: GObject.GType<AudioClock>;

    constructor(properties?: Partial<AudioClock.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioClock.ConstructorProperties>, ...args: any[]): void;

    // Fields
    clock: Gst.SystemClock;
    func: AudioClockGetTimeFunc;
    user_data: any;
    destroy_notify: GLib.DestroyNotify;

    // Constructors

    static ["new"](name: string, func: AudioClockGetTimeFunc): AudioClock;

    // Members

    adjust(time: Gst.ClockTime): Gst.ClockTime;
    get_time(): Gst.ClockTime;
    invalidate(): void;
    reset(time: Gst.ClockTime): void;
}
export module AudioDecoder {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        max_errors: number;
        maxErrors: number;
        min_latency: number;
        minLatency: number;
        plc: boolean;
        tolerance: number;
    }
}
export abstract class AudioDecoder extends Gst.Element {
    static $gtype: GObject.GType<AudioDecoder>;

    constructor(properties?: Partial<AudioDecoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioDecoder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get max_errors(): number;
    set max_errors(val: number);
    get maxErrors(): number;
    set maxErrors(val: number);
    get min_latency(): number;
    set min_latency(val: number);
    get minLatency(): number;
    set minLatency(val: number);
    get plc(): boolean;
    set plc(val: boolean);
    get tolerance(): number;
    set tolerance(val: number);

    // Fields
    element: Gst.Element;
    sinkpad: Gst.Pad;
    srcpad: Gst.Pad;
    stream_lock: GLib.RecMutex;
    input_segment: Gst.Segment;
    output_segment: Gst.Segment;

    // Members

    allocate_output_buffer(size: number): Gst.Buffer;
    finish_frame(buf: Gst.Buffer | null, frames: number): Gst.FlowReturn;
    finish_subframe(buf?: Gst.Buffer | null): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
    get_audio_info(): AudioInfo;
    get_delay(): number;
    get_drainable(): boolean;
    get_estimate_rate(): number;
    get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
    get_max_errors(): number;
    get_min_latency(): Gst.ClockTime;
    get_needs_format(): boolean;
    get_parse_state(): [boolean, boolean];
    get_plc(): boolean;
    get_plc_aware(): number;
    get_tolerance(): Gst.ClockTime;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    negotiate(): boolean;
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
    set_allocation_caps(allocation_caps?: Gst.Caps | null): void;
    set_drainable(enabled: boolean): void;
    set_estimate_rate(enabled: boolean): void;
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
    set_max_errors(num: number): void;
    set_min_latency(num: Gst.ClockTime): void;
    set_needs_format(enabled: boolean): void;
    set_output_caps(caps: Gst.Caps): boolean;
    set_output_format(info: AudioInfo): boolean;
    set_plc(enabled: boolean): void;
    set_plc_aware(plc: boolean): void;
    set_tolerance(tolerance: Gst.ClockTime): void;
    set_use_default_pad_acceptcaps(use: boolean): void;
    vfunc_close(): boolean;
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_flush(hard: boolean): void;
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
    vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_negotiate(): boolean;
    vfunc_open(): boolean;
    vfunc_parse(adapter: GstBase.Adapter): [Gst.FlowReturn, number, number];
    vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_propose_allocation(query: Gst.Query): boolean;
    vfunc_set_format(caps: Gst.Caps): boolean;
    vfunc_sink_event(event: Gst.Event): boolean;
    vfunc_sink_query(query: Gst.Query): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
    vfunc_src_query(query: Gst.Query): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean;
}
export module AudioEncoder {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        hard_resync: boolean;
        hardResync: boolean;
        mark_granule: boolean;
        markGranule: boolean;
        perfect_timestamp: boolean;
        perfectTimestamp: boolean;
        tolerance: number;
    }
}
export abstract class AudioEncoder extends Gst.Element implements Gst.Preset {
    static $gtype: GObject.GType<AudioEncoder>;

    constructor(properties?: Partial<AudioEncoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioEncoder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get hard_resync(): boolean;
    set hard_resync(val: boolean);
    get hardResync(): boolean;
    set hardResync(val: boolean);
    get mark_granule(): boolean;
    get markGranule(): boolean;
    get perfect_timestamp(): boolean;
    set perfect_timestamp(val: boolean);
    get perfectTimestamp(): boolean;
    set perfectTimestamp(val: boolean);
    get tolerance(): number;
    set tolerance(val: number);

    // Fields
    element: Gst.Element;
    sinkpad: Gst.Pad;
    srcpad: Gst.Pad;
    stream_lock: GLib.RecMutex;
    input_segment: Gst.Segment;
    output_segment: Gst.Segment;

    // Members

    allocate_output_buffer(size: number): Gst.Buffer;
    finish_frame(buffer: Gst.Buffer | null, samples: number): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
    get_audio_info(): AudioInfo;
    get_drainable(): boolean;
    get_frame_max(): number;
    get_frame_samples_max(): number;
    get_frame_samples_min(): number;
    get_hard_min(): boolean;
    get_hard_resync(): boolean;
    get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
    get_lookahead(): number;
    get_mark_granule(): boolean;
    get_perfect_timestamp(): boolean;
    get_tolerance(): Gst.ClockTime;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    negotiate(): boolean;
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
    set_allocation_caps(allocation_caps?: Gst.Caps | null): void;
    set_drainable(enabled: boolean): void;
    set_frame_max(num: number): void;
    set_frame_samples_max(num: number): void;
    set_frame_samples_min(num: number): void;
    set_hard_min(enabled: boolean): void;
    set_hard_resync(enabled: boolean): void;
    set_headers(headers: Gst.Buffer[]): void;
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
    set_lookahead(num: number): void;
    set_mark_granule(enabled: boolean): void;
    set_output_format(caps: Gst.Caps): boolean;
    set_perfect_timestamp(enabled: boolean): void;
    set_tolerance(tolerance: Gst.ClockTime): void;
    vfunc_close(): boolean;
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_flush(): void;
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
    vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_negotiate(): boolean;
    vfunc_open(): boolean;
    vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_propose_allocation(query: Gst.Query): boolean;
    vfunc_set_format(info: AudioInfo): boolean;
    vfunc_sink_event(event: Gst.Event): boolean;
    vfunc_sink_query(query: Gst.Query): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
    vfunc_src_query(query: Gst.Query): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean;

    // Implemented Members

    delete_preset(name: string): boolean;
    get_meta(name: string, tag: string): [boolean, string];
    get_preset_names(): string[];
    get_property_names(): string[];
    is_editable(): boolean;
    load_preset(name: string): boolean;
    rename_preset(old_name: string, new_name: string): boolean;
    save_preset(name: string): boolean;
    set_meta(name: string, tag: string, value?: string | null): boolean;
    vfunc_delete_preset(name: string): boolean;
    vfunc_get_meta(name: string, tag: string): [boolean, string];
    vfunc_get_preset_names(): string[];
    vfunc_get_property_names(): string[];
    vfunc_load_preset(name: string): boolean;
    vfunc_rename_preset(old_name: string, new_name: string): boolean;
    vfunc_save_preset(name: string): boolean;
    vfunc_set_meta(name: string, tag: string, value?: string | null): boolean;
}
export module AudioFilter {
    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class AudioFilter extends GstBase.BaseTransform {
    static $gtype: GObject.GType<AudioFilter>;

    constructor(properties?: Partial<AudioFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    basetransform: GstBase.BaseTransform;
    info: AudioInfo;

    // Members

    vfunc_setup(info: AudioInfo): boolean;
    static add_pad_templates(allowed_caps: Gst.Caps): void;
}
export module AudioRingBuffer {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class AudioRingBuffer extends Gst.Object {
    static $gtype: GObject.GType<AudioRingBuffer>;

    constructor(properties?: Partial<AudioRingBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioRingBuffer.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: Gst.Object;
    cond: GLib.Cond;
    open: boolean;
    acquired: boolean;
    memory: number;
    size: number;
    spec: AudioRingBufferSpec;
    samples_per_seg: number;
    empty_seg: number;
    state: number;
    segdone: number;
    segbase: number;
    waiting: number;

    // Members

    acquire(spec: AudioRingBufferSpec): boolean;
    activate(active: boolean): boolean;
    advance(advance: number): void;
    clear(segment: number): void;
    clear_all(): void;
    close_device(): boolean;
    commit(sample: number, data: Uint8Array | string, out_samples: number, accum: number): [number, number, number];
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [boolean, number];
    delay(): number;
    device_is_open(): boolean;
    is_acquired(): boolean;
    is_active(): boolean;
    is_flushing(): boolean;
    may_start(allowed: boolean): void;
    open_device(): boolean;
    pause(): boolean;
    prepare_read(): [boolean, number, Uint8Array];
    read(sample: number, data: Uint8Array | string): [number, Gst.ClockTime];
    release(): boolean;
    samples_done(): number;
    set_callback(cb?: AudioRingBufferCallback | null): void;
    set_channel_positions(position: AudioChannelPosition[]): void;
    set_flushing(flushing: boolean): void;
    set_sample(sample: number): void;
    set_timestamp(readseg: number, timestamp: Gst.ClockTime): void;
    start(): boolean;
    stop(): boolean;
    vfunc_acquire(spec: AudioRingBufferSpec): boolean;
    vfunc_activate(active: boolean): boolean;
    vfunc_clear_all(): void;
    vfunc_close_device(): boolean;
    vfunc_commit(
        sample: number,
        data: Uint8Array | string,
        out_samples: number,
        accum: number
    ): [number, number, number];
    vfunc_delay(): number;
    vfunc_open_device(): boolean;
    vfunc_pause(): boolean;
    vfunc_release(): boolean;
    vfunc_resume(): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    static debug_spec_buff(spec: AudioRingBufferSpec): void;
    static debug_spec_caps(spec: AudioRingBufferSpec): void;
    static parse_caps(spec: AudioRingBufferSpec, caps: Gst.Caps): boolean;
}
export module AudioSink {
    export interface ConstructorProperties extends AudioBaseSink.ConstructorProperties {
        [key: string]: any;
    }
}
export class AudioSink extends AudioBaseSink {
    static $gtype: GObject.GType<AudioSink>;

    constructor(properties?: Partial<AudioSink.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioSink.ConstructorProperties>, ...args: any[]): void;

    // Fields
    element: AudioBaseSink;

    // Members

    vfunc_close(): boolean;
    vfunc_delay(): number;
    vfunc_open(): boolean;
    vfunc_pause(): void;
    vfunc_prepare(spec: AudioRingBufferSpec): boolean;
    // Conflicted with GstBase.BaseSink.vfunc_prepare
    vfunc_prepare(...args: never[]): any;
    vfunc_reset(): void;
    vfunc_resume(): void;
    vfunc_stop(): void;
    // Conflicted with GstBase.BaseSink.vfunc_stop
    vfunc_stop(...args: never[]): any;
    vfunc_unprepare(): boolean;
    vfunc_write(data: Uint8Array | string): number;
}
export module AudioSrc {
    export interface ConstructorProperties extends AudioBaseSrc.ConstructorProperties {
        [key: string]: any;
    }
}
export class AudioSrc extends AudioBaseSrc {
    static $gtype: GObject.GType<AudioSrc>;

    constructor(properties?: Partial<AudioSrc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AudioSrc.ConstructorProperties>, ...args: any[]): void;

    // Fields
    element: AudioBaseSrc;

    // Members

    vfunc_close(): boolean;
    vfunc_delay(): number;
    vfunc_open(): boolean;
    vfunc_prepare(spec: AudioRingBufferSpec): boolean;
    vfunc_read(data: Uint8Array | string): [number, Gst.ClockTime];
    vfunc_reset(): void;
    vfunc_unprepare(): boolean;
}

export class AudioAggregatorConvertPadPrivate {
    static $gtype: GObject.GType<AudioAggregatorConvertPadPrivate>;

    constructor(copy: AudioAggregatorConvertPadPrivate);
}

export class AudioAggregatorPadPrivate {
    static $gtype: GObject.GType<AudioAggregatorPadPrivate>;

    constructor(copy: AudioAggregatorPadPrivate);
}

export class AudioAggregatorPrivate {
    static $gtype: GObject.GType<AudioAggregatorPrivate>;

    constructor(copy: AudioAggregatorPrivate);
}

export class AudioBaseSinkPrivate {
    static $gtype: GObject.GType<AudioBaseSinkPrivate>;

    constructor(copy: AudioBaseSinkPrivate);
}

export class AudioBaseSrcPrivate {
    static $gtype: GObject.GType<AudioBaseSrcPrivate>;

    constructor(copy: AudioBaseSrcPrivate);
}

export class AudioBuffer {
    static $gtype: GObject.GType<AudioBuffer>;

    constructor(copy: AudioBuffer);

    // Fields
    info: AudioInfo;
    n_samples: number;
    n_planes: number;
    planes: any;
    buffer: Gst.Buffer;

    // Members
    unmap(): void;
    static clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer | null;
    static map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, AudioBuffer];
    static reorder_channels(
        buffer: Gst.Buffer,
        format: AudioFormat,
        from: AudioChannelPosition[],
        to: AudioChannelPosition[]
    ): boolean;
    static truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer;
}

export class AudioCdSrcPrivate {
    static $gtype: GObject.GType<AudioCdSrcPrivate>;

    constructor(copy: AudioCdSrcPrivate);
}

export class AudioCdSrcTrack {
    static $gtype: GObject.GType<AudioCdSrcTrack>;

    constructor(copy: AudioCdSrcTrack);

    // Fields
    is_audio: boolean;
    num: number;
    start: number;
    end: number;
    tags: Gst.TagList;
}

export class AudioChannelMixer {
    static $gtype: GObject.GType<AudioChannelMixer>;

    constructor(copy: AudioChannelMixer);

    // Members
    free(): void;
    is_passthrough(): boolean;
    samples(_in: any | null, out: any | null, samples: number): void;
}

export class AudioClippingMeta {
    static $gtype: GObject.GType<AudioClippingMeta>;

    constructor(copy: AudioClippingMeta);

    // Fields
    meta: Gst.Meta;
    format: Gst.Format;
    start: number;
    end: number;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class AudioConverter {
    static $gtype: GObject.GType<AudioConverter>;

    constructor(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config?: Gst.Structure | null);
    constructor(copy: AudioConverter);

    // Constructors
    static ["new"](
        flags: AudioConverterFlags,
        in_info: AudioInfo,
        out_info: AudioInfo,
        config?: Gst.Structure | null
    ): AudioConverter;

    // Members
    convert(flags: AudioConverterFlags, _in: Uint8Array | string): [boolean, Uint8Array];
    free(): void;
    get_config(): [Gst.Structure, number, number];
    get_in_frames(out_frames: number): number;
    get_max_latency(): number;
    get_out_frames(in_frames: number): number;
    is_passthrough(): boolean;
    reset(): void;
    samples(
        flags: AudioConverterFlags,
        _in: any | null,
        in_frames: number,
        out: any | null,
        out_frames: number
    ): boolean;
    supports_inplace(): boolean;
    update_config(in_rate: number, out_rate: number, config?: Gst.Structure | null): boolean;
}

export class AudioDecoderPrivate {
    static $gtype: GObject.GType<AudioDecoderPrivate>;

    constructor(copy: AudioDecoderPrivate);
}

export class AudioDownmixMeta {
    static $gtype: GObject.GType<AudioDownmixMeta>;

    constructor(copy: AudioDownmixMeta);

    // Fields
    meta: Gst.Meta;
    from_position: AudioChannelPosition;
    to_position: AudioChannelPosition;
    from_channels: number;
    to_channels: number;
    matrix: number;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class AudioEncoderPrivate {
    static $gtype: GObject.GType<AudioEncoderPrivate>;

    constructor(copy: AudioEncoderPrivate);
}

export class AudioFormatInfo {
    static $gtype: GObject.GType<AudioFormatInfo>;

    constructor(copy: AudioFormatInfo);

    // Fields
    format: AudioFormat;
    name: string;
    description: string;
    flags: AudioFormatFlags;
    endianness: number;
    width: number;
    depth: number;
    silence: Uint8Array;
    unpack_format: AudioFormat;
    unpack_func: AudioFormatUnpack;
    pack_func: AudioFormatPack;

    // Members
    fill_silence(dest: Uint8Array | string): void;
}

export class AudioInfo {
    static $gtype: GObject.GType<AudioInfo>;

    constructor();
    constructor(
        properties?: Partial<{
            finfo?: AudioFormatInfo;
            flags?: AudioFlags;
            layout?: AudioLayout;
            rate?: number;
            channels?: number;
            bpf?: number;
            position?: AudioChannelPosition[];
        }>
    );
    constructor(copy: AudioInfo);

    // Fields
    finfo: AudioFormatInfo;
    flags: AudioFlags;
    layout: AudioLayout;
    rate: number;
    channels: number;
    bpf: number;
    position: AudioChannelPosition[];

    // Constructors
    static ["new"](): AudioInfo;
    static new_from_caps(caps: Gst.Caps): AudioInfo;

    // Members
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [boolean, number];
    copy(): AudioInfo;
    free(): void;
    is_equal(other: AudioInfo): boolean;
    set_format(format: AudioFormat, rate: number, channels: number, position?: AudioChannelPosition[] | null): void;
    to_caps(): Gst.Caps;
    static from_caps(caps: Gst.Caps): [boolean, AudioInfo];
    static init(): AudioInfo;
}

export class AudioLevelMeta {
    static $gtype: GObject.GType<AudioLevelMeta>;

    constructor(copy: AudioLevelMeta);

    // Fields
    meta: Gst.Meta;
    level: number;
    voice_activity: boolean;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class AudioMeta {
    static $gtype: GObject.GType<AudioMeta>;

    constructor(copy: AudioMeta);

    // Fields
    meta: Gst.Meta;
    info: AudioInfo;
    samples: number;
    offsets: number;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class AudioQuantize {
    static $gtype: GObject.GType<AudioQuantize>;

    constructor(copy: AudioQuantize);

    // Members
    free(): void;
    reset(): void;
    samples(_in: any | null, out: any | null, samples: number): void;
}

export class AudioResampler {
    static $gtype: GObject.GType<AudioResampler>;

    constructor(copy: AudioResampler);

    // Members
    free(): void;
    get_in_frames(out_frames: number): number;
    get_max_latency(): number;
    get_out_frames(in_frames: number): number;
    resample(_in: any | null, in_frames: number, out: any | null, out_frames: number): void;
    reset(): void;
    update(in_rate: number, out_rate: number, options: Gst.Structure): boolean;
    static new(
        method: AudioResamplerMethod,
        flags: AudioResamplerFlags,
        format: AudioFormat,
        channels: number,
        in_rate: number,
        out_rate: number,
        options: Gst.Structure
    ): AudioResampler;
    static options_set_quality(
        method: AudioResamplerMethod,
        quality: number,
        in_rate: number,
        out_rate: number,
        options: Gst.Structure
    ): void;
}

export class AudioRingBufferSpec {
    static $gtype: GObject.GType<AudioRingBufferSpec>;

    constructor(copy: AudioRingBufferSpec);

    // Fields
    caps: Gst.Caps;
    type: AudioRingBufferFormatType;
    info: AudioInfo;
    latency_time: number;
    buffer_time: number;
    segsize: number;
    segtotal: number;
    seglatency: number;
}

export class AudioSinkClassExtension {
    static $gtype: GObject.GType<AudioSinkClassExtension>;

    constructor(copy: AudioSinkClassExtension);
}

export class AudioStreamAlign {
    static $gtype: GObject.GType<AudioStreamAlign>;

    constructor(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime);
    constructor(copy: AudioStreamAlign);

    // Constructors
    static ["new"](rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime): AudioStreamAlign;

    // Members
    copy(): AudioStreamAlign;
    free(): void;
    get_alignment_threshold(): Gst.ClockTime;
    get_discont_wait(): Gst.ClockTime;
    get_rate(): number;
    get_samples_since_discont(): number;
    get_timestamp_at_discont(): Gst.ClockTime;
    mark_discont(): void;
    process(
        discont: boolean,
        timestamp: Gst.ClockTime,
        n_samples: number
    ): [boolean, Gst.ClockTime, Gst.ClockTime, number];
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
    set_discont_wait(discont_wait: Gst.ClockTime): void;
    set_rate(rate: number): void;
}

export interface StreamVolumeNamespace {
    $gtype: GObject.GType<StreamVolume>;
    prototype: StreamVolumePrototype;

    convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number;
}
export type StreamVolume = StreamVolumePrototype;
export interface StreamVolumePrototype extends GObject.Object {
    // Properties
    mute: boolean;
    volume: number;

    // Members

    get_mute(): boolean;
    get_volume(format: StreamVolumeFormat): number;
    set_mute(mute: boolean): void;
    set_volume(format: StreamVolumeFormat, val: number): void;
}

export const StreamVolume: StreamVolumeNamespace;
