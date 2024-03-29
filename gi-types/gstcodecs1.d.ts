/**
 * GstCodecs 1.0
 *
 * Generated from 1.0
 */

import * as GstVideo from "gstvideo1";
import * as GObject from "gobject2";
import * as Gst from "gst1";
import * as GLib from "glib2";

export const H264_DPB_MAX_SIZE: number;
export const H265_DPB_MAX_SIZE: number;
export const VP9_BLOCK_SIZE_GROUPS: number;
export const VP9_CLASS0_SIZE: number;
export const VP9_COMP_MODE_CONTEXTS: number;
export const VP9_INTERP_FILTER_CONTEXTS: number;
export const VP9_INTER_MODES: number;
export const VP9_INTER_MODE_CONTEXTS: number;
export const VP9_INTRA_MODES: number;
export const VP9_IS_INTER_CONTEXTS: number;
export const VP9_MV_CLASSES: number;
export const VP9_MV_FR_SIZE: number;
export const VP9_MV_JOINTS: number;
export const VP9_MV_OFFSET_BITS: number;
export const VP9_PARTITION_CONTEXTS: number;
export const VP9_PARTITION_TYPES: number;
export const VP9_REF_CONTEXTS: number;
export const VP9_SEG_LVL_ALT_L: number;
export const VP9_SEG_LVL_ALT_Q: number;
export const VP9_SEG_LVL_MAX: number;
export const VP9_SEG_LVL_REF_FRAME: number;
export const VP9_SEG_SEG_LVL_SKIP: number;
export const VP9_SKIP_CONTEXTS: number;
export const VP9_SWITCHABLE_FILTERS: number;
export const VP9_TX_MODES: number;
export const VP9_TX_SIZES: number;
export const VP9_TX_SIZE_CONTEXTS: number;
export function vp9_get_ac_quant(qindex: number, delta_q_ac: number, bit_depth: number): number;
export function vp9_get_dc_quant(qindex: number, delta_q_dc: number, bit_depth: number): number;
export function vp9_get_qindex(
    segmentation_params: Vp9SegmentationParams,
    quantization_params: Vp9QuantizationParams,
    segment_id: number
): number;
export function vp9_seg_feature_active(params: Vp9SegmentationParams, segment_id: number, feature: number): boolean;

export namespace H264DecoderCompliance {
    export const $gtype: GObject.GType<H264DecoderCompliance>;
}

export enum H264DecoderCompliance {
    AUTO = 0,
    STRICT = 1,
    NORMAL = 2,
    FLEXIBLE = 3,
}

export namespace H264DpbBumpMode {
    export const $gtype: GObject.GType<H264DpbBumpMode>;
}

export enum H264DpbBumpMode {
    NORMAL_LATENCY = 0,
    LOW_LATENCY = 1,
    VERY_LOW_LATENCY = 2,
}

export namespace H264PictureField {
    export const $gtype: GObject.GType<H264PictureField>;
}

export enum H264PictureField {
    FRAME = 0,
    TOP_FIELD = 1,
    BOTTOM_FIELD = 2,
}

export namespace H264PictureReference {
    export const $gtype: GObject.GType<H264PictureReference>;
}

export enum H264PictureReference {
    NONE = 0,
    SHORT_TERM = 1,
    LONG_TERM = 2,
}

export namespace Vp9ReferenceMode {
    export const $gtype: GObject.GType<Vp9ReferenceMode>;
}

export enum Vp9ReferenceMode {
    SINGLE_REFERENCE = 0,
    COMPOUND_REFERENCE = 1,
    SELECT = 2,
}

export namespace Vp9TxMode {
    export const $gtype: GObject.GType<Vp9TxMode>;
}

export enum Vp9TxMode {
    ONLY_4X4 = 0,
    ALLOW_8X8 = 1,
    ALLOW_16X16 = 2,
    ALLOW_32X32 = 3,
    SELECT = 4,
}

export namespace Vp9TxSize {
    export const $gtype: GObject.GType<Vp9TxSize>;
}

export enum Vp9TxSize {
    "4X4" = 0,
    "8X8" = 1,
    "16X16" = 2,
    "32X32" = 3,
}
export module AV1Decoder {
    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class AV1Decoder extends GstVideo.VideoDecoder {
    static $gtype: GObject.GType<AV1Decoder>;

    constructor(properties?: Partial<AV1Decoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AV1Decoder.ConstructorProperties>, ...args: any[]): void;

    // Members

    vfunc_decode_tile(picture: AV1Picture, tile: AV1Tile): Gst.FlowReturn;
    vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): AV1Picture;
    vfunc_end_picture(picture: AV1Picture): Gst.FlowReturn;
    vfunc_get_preferred_output_delay(live: boolean): number;
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
    vfunc_start_picture(picture: AV1Picture, dpb: AV1Dpb): Gst.FlowReturn;
}
export module H264Decoder {
    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
        [key: string]: any;
        compliance: H264DecoderCompliance;
    }
}
export abstract class H264Decoder extends GstVideo.VideoDecoder {
    static $gtype: GObject.GType<H264Decoder>;

    constructor(properties?: Partial<H264Decoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<H264Decoder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get compliance(): H264DecoderCompliance;
    set compliance(val: H264DecoderCompliance);

    // Members

    get_picture(system_frame_number: number): H264Picture | null;
    set_process_ref_pic_lists(process: boolean): void;
    vfunc_decode_slice(
        picture: H264Picture,
        slice: H264Slice,
        ref_pic_list0: H264Picture[],
        ref_pic_list1: H264Picture[]
    ): Gst.FlowReturn;
    vfunc_end_picture(picture: H264Picture): Gst.FlowReturn;
    vfunc_get_preferred_output_delay(live: boolean): number;
    vfunc_new_field_picture(first_field: H264Picture, second_field: H264Picture): Gst.FlowReturn;
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
    vfunc_start_picture(picture: H264Picture, slice: H264Slice, dpb: H264Dpb): Gst.FlowReturn;
}
export module H265Decoder {
    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class H265Decoder extends GstVideo.VideoDecoder {
    static $gtype: GObject.GType<H265Decoder>;

    constructor(properties?: Partial<H265Decoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<H265Decoder.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_picture(system_frame_number: number): H265Picture | null;
    set_process_ref_pic_lists(process: boolean): void;
    vfunc_decode_slice(
        picture: H265Picture,
        slice: H265Slice,
        ref_pic_list0: H265Picture[],
        ref_pic_list1: H265Picture[]
    ): Gst.FlowReturn;
    vfunc_end_picture(picture: H265Picture): Gst.FlowReturn;
    vfunc_get_preferred_output_delay(live: boolean): number;
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
    vfunc_start_picture(picture: H265Picture, slice: H265Slice, dpb: H265Dpb): Gst.FlowReturn;
}
export module Mpeg2Decoder {
    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Mpeg2Decoder extends GstVideo.VideoDecoder {
    static $gtype: GObject.GType<Mpeg2Decoder>;

    constructor(properties?: Partial<Mpeg2Decoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Mpeg2Decoder.ConstructorProperties>, ...args: any[]): void;

    // Members

    vfunc_decode_slice(picture: Mpeg2Picture, slice: Mpeg2Slice): Gst.FlowReturn;
    vfunc_end_picture(picture: Mpeg2Picture): Gst.FlowReturn;
    vfunc_get_preferred_output_delay(is_live: boolean): number;
    vfunc_new_field_picture(first_field: Mpeg2Picture, second_field: Mpeg2Picture): Gst.FlowReturn;
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
    vfunc_start_picture(
        picture: Mpeg2Picture,
        slice: Mpeg2Slice,
        prev_picture: Mpeg2Picture,
        next_picture: Mpeg2Picture
    ): Gst.FlowReturn;
}
export module Vp8Decoder {
    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Vp8Decoder extends GstVideo.VideoDecoder {
    static $gtype: GObject.GType<Vp8Decoder>;

    constructor(properties?: Partial<Vp8Decoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Vp8Decoder.ConstructorProperties>, ...args: any[]): void;

    // Members

    vfunc_end_picture(picture: Vp8Picture): Gst.FlowReturn;
    vfunc_get_preferred_output_delay(is_live: boolean): number;
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
    vfunc_start_picture(picture: Vp8Picture): Gst.FlowReturn;
}
export module Vp9Decoder {
    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Vp9Decoder extends GstVideo.VideoDecoder {
    static $gtype: GObject.GType<Vp9Decoder>;

    constructor(properties?: Partial<Vp9Decoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Vp9Decoder.ConstructorProperties>, ...args: any[]): void;

    // Members

    set_non_keyframe_format_change_support(support: boolean): void;
    vfunc_decode_picture(picture: Vp9Picture, dpb: Vp9Dpb): Gst.FlowReturn;
    vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Vp9Picture | null;
    vfunc_end_picture(picture: Vp9Picture): Gst.FlowReturn;
    vfunc_get_preferred_output_delay(is_live: boolean): number;
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
    vfunc_new_sequence(frame_hdr: Vp9FrameHeader, max_dpb_size: number): Gst.FlowReturn;
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
    vfunc_start_picture(picture: Vp9Picture): Gst.FlowReturn;
}

export class AV1DecoderPrivate {
    static $gtype: GObject.GType<AV1DecoderPrivate>;

    constructor(copy: AV1DecoderPrivate);
}

export class AV1Dpb {
    static $gtype: GObject.GType<AV1Dpb>;

    constructor(copy: AV1Dpb);

    // Fields
    pic_list: AV1Picture[];

    // Members
    add(picture: AV1Picture): void;
    clear(): void;
    free(): void;
}

export class AV1Picture {
    static $gtype: GObject.GType<AV1Picture>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: AV1Picture);

    // Constructors
    static ["new"](): AV1Picture;

    // Members
    get_user_data(): any | null;
    set_user_data(notify: GLib.DestroyNotify): void;
}

export class AV1Tile {
    static $gtype: GObject.GType<AV1Tile>;

    constructor(copy: AV1Tile);
}

export class H264DecoderPrivate {
    static $gtype: GObject.GType<H264DecoderPrivate>;

    constructor(copy: H264DecoderPrivate);
}

export class H264Dpb {
    static $gtype: GObject.GType<H264Dpb>;

    constructor(copy: H264Dpb);

    // Members
    add(picture: H264Picture): void;
    bump(drain: boolean): H264Picture | null;
    clear(): void;
    delete_unused(): void;
    free(): void;
    get_interlaced(): boolean;
    get_long_ref_by_long_term_pic_num(long_term_pic_num: number): H264Picture | null;
    get_lowest_frame_num_short_ref(): H264Picture | null;
    get_max_num_frames(): number;
    get_max_num_reorder_frames(): number;
    get_picture(system_frame_number: number): H264Picture | null;
    get_pictures_all(): H264Picture[];
    get_pictures_long_term_ref(include_second_field: boolean): H264Picture[];
    get_pictures_short_term_ref(include_non_existing: boolean, include_second_field: boolean): H264Picture[];
    get_short_ref_by_pic_num(pic_num: number): H264Picture | null;
    get_size(): number;
    has_empty_frame_buffer(): boolean;
    mark_all_non_ref(): void;
    needs_bump(to_insert: H264Picture, latency_mode: H264DpbBumpMode): boolean;
    num_ref_frames(): number;
    set_interlaced(interlaced: boolean): void;
    set_last_output(picture: H264Picture): void;
    set_max_num_frames(max_num_frames: number): void;
    set_max_num_reorder_frames(max_num_reorder_frames: number): void;
}

export class H264Picture {
    static $gtype: GObject.GType<H264Picture>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: H264Picture);

    // Constructors
    static ["new"](): H264Picture;

    // Members
    get_user_data(): any | null;
    set_reference(reference: H264PictureReference, other_field: boolean): void;
    set_user_data(notify: GLib.DestroyNotify): void;
}

export class H264Slice {
    static $gtype: GObject.GType<H264Slice>;

    constructor(copy: H264Slice);
}

export class H265DecoderPrivate {
    static $gtype: GObject.GType<H265DecoderPrivate>;

    constructor(copy: H265DecoderPrivate);
}

export class H265Dpb {
    static $gtype: GObject.GType<H265Dpb>;

    constructor(copy: H265Dpb);

    // Members
    add(picture: H265Picture): void;
    bump(drain: boolean): H265Picture | null;
    clear(): void;
    delete_unused(): void;
    free(): void;
    get_long_ref_by_poc(poc: number): H265Picture | null;
    get_max_num_pics(): number;
    get_picture(system_frame_number: number): H265Picture | null;
    get_pictures_all(): H265Picture[];
    get_ref_by_poc(poc: number): H265Picture | null;
    get_ref_by_poc_lsb(poc_lsb: number): H265Picture | null;
    get_short_ref_by_poc(poc: number): H265Picture | null;
    get_size(): number;
    mark_all_non_ref(): void;
    needs_bump(max_num_reorder_pics: number, max_latency_increase: number, max_dec_pic_buffering: number): boolean;
    num_ref_pictures(): number;
    set_max_num_pics(max_num_pics: number): void;
}

export class H265Picture {
    static $gtype: GObject.GType<H265Picture>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: H265Picture);

    // Constructors
    static ["new"](): H265Picture;

    // Members
    get_user_data(): any | null;
    set_user_data(notify: GLib.DestroyNotify): void;
}

export class H265Slice {
    static $gtype: GObject.GType<H265Slice>;

    constructor(copy: H265Slice);
}

export class Mpeg2DecoderPrivate {
    static $gtype: GObject.GType<Mpeg2DecoderPrivate>;

    constructor(copy: Mpeg2DecoderPrivate);
}

export class Mpeg2Dpb {
    static $gtype: GObject.GType<Mpeg2Dpb>;

    constructor(copy: Mpeg2Dpb);

    // Members
    add(picture: Mpeg2Picture): void;
    bump(): Mpeg2Picture | null;
    clear(): void;
    free(): void;
    get_neighbours(picture: Mpeg2Picture): [Mpeg2Picture | null, Mpeg2Picture | null];
    need_bump(): boolean;
}

export class Mpeg2Picture {
    static $gtype: GObject.GType<Mpeg2Picture>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: Mpeg2Picture);

    // Constructors
    static ["new"](): Mpeg2Picture;

    // Members
    get_user_data(): any | null;
    set_user_data(notify: GLib.DestroyNotify): void;
}

export class Mpeg2Slice {
    static $gtype: GObject.GType<Mpeg2Slice>;

    constructor(copy: Mpeg2Slice);
}

export class Vp8DecoderPrivate {
    static $gtype: GObject.GType<Vp8DecoderPrivate>;

    constructor(copy: Vp8DecoderPrivate);
}

export class Vp8Picture {
    static $gtype: GObject.GType<Vp8Picture>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: Vp8Picture);

    // Constructors
    static ["new"](): Vp8Picture;

    // Members
    get_user_data(): any | null;
    set_user_data(notify: GLib.DestroyNotify): void;
}

export class Vp9DecoderPrivate {
    static $gtype: GObject.GType<Vp9DecoderPrivate>;

    constructor(copy: Vp9DecoderPrivate);
}

export class Vp9DeltaProbabilities {
    static $gtype: GObject.GType<Vp9DeltaProbabilities>;

    constructor(copy: Vp9DeltaProbabilities);
}

export class Vp9Dpb {
    static $gtype: GObject.GType<Vp9Dpb>;

    constructor(copy: Vp9Dpb);

    // Fields
    pic_list: Vp9Picture[];

    // Members
    add(picture: Vp9Picture): void;
    clear(): void;
    free(): void;
}

export class Vp9FrameHeader {
    static $gtype: GObject.GType<Vp9FrameHeader>;

    constructor(copy: Vp9FrameHeader);

    // Fields
    profile: number;
    bit_depth: number;
    subsampling_x: number;
    subsampling_y: number;
    color_space: number;
    color_range: number;
    show_existing_frame: number;
    frame_to_show_map_idx: number;
    frame_type: number;
    show_frame: number;
    error_resilient_mode: number;
    width: number;
    height: number;
    render_and_frame_size_different: number;
    render_width: number;
    render_height: number;
    intra_only: number;
    reset_frame_context: number;
    refresh_frame_flags: number;
    ref_frame_idx: Uint8Array;
    ref_frame_sign_bias: Uint8Array;
    allow_high_precision_mv: number;
    interpolation_filter: number;
    refresh_frame_context: number;
    frame_parallel_decoding_mode: number;
    frame_context_idx: number;
    loop_filter_params: Vp9LoopFilterParams;
    quantization_params: Vp9QuantizationParams;
    segmentation_params: Vp9SegmentationParams;
    tile_cols_log2: number;
    tile_rows_log2: number;
    header_size_in_bytes: number;
    tx_mode: Vp9TxMode;
    reference_mode: Vp9ReferenceMode;
    delta_probabilities: Vp9DeltaProbabilities;
    lossless_flag: number;
    frame_header_length_in_bytes: number;
}

export class Vp9LoopFilterParams {
    static $gtype: GObject.GType<Vp9LoopFilterParams>;

    constructor(copy: Vp9LoopFilterParams);

    // Fields
    loop_filter_level: number;
    loop_filter_sharpness: number;
    loop_filter_delta_enabled: number;
    loop_filter_delta_update: number;
    update_ref_delta: Uint8Array;
    loop_filter_ref_deltas: Uint8Array;
    update_mode_delta: Uint8Array;
    loop_filter_mode_deltas: Uint8Array;
}

export class Vp9MvDeltaProbs {
    static $gtype: GObject.GType<Vp9MvDeltaProbs>;

    constructor(copy: Vp9MvDeltaProbs);
}

export class Vp9Picture {
    static $gtype: GObject.GType<Vp9Picture>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: Vp9Picture);

    // Constructors
    static ["new"](): Vp9Picture;

    // Members
    get_user_data(): any | null;
    set_user_data(notify: GLib.DestroyNotify): void;
}

export class Vp9QuantizationParams {
    static $gtype: GObject.GType<Vp9QuantizationParams>;

    constructor(
        properties?: Partial<{
            base_q_idx?: number;
            delta_q_y_dc?: number;
            delta_q_uv_dc?: number;
            delta_q_uv_ac?: number;
        }>
    );
    constructor(copy: Vp9QuantizationParams);

    // Fields
    base_q_idx: number;
    delta_q_y_dc: number;
    delta_q_uv_dc: number;
    delta_q_uv_ac: number;
}

export class Vp9SegmentationParams {
    static $gtype: GObject.GType<Vp9SegmentationParams>;

    constructor(copy: Vp9SegmentationParams);

    // Fields
    segmentation_enabled: number;
    segmentation_update_map: number;
    segmentation_tree_probs: Uint8Array;
    segmentation_pred_prob: Uint8Array;
    segmentation_temporal_update: number;
    segmentation_update_data: number;
    segmentation_abs_or_delta_update: number;
    feature_enabled: Uint8Array;
    feature_data: number[];
}

export class Vp9StatefulParser {
    static $gtype: GObject.GType<Vp9StatefulParser>;

    constructor(copy: Vp9StatefulParser);

    // Fields
    reference: any[];

    // Members
    free(): void;
}
