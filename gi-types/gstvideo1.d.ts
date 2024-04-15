/**
 * GstVideo 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as GstBase from "gstbase1";
import * as Gst from "gst1";
import * as GLib from "glib2";

export const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string;
export const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string;
export const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string;
export const BUFFER_POOL_OPTION_VIDEO_META: string;
export const CAPS_FEATURE_FORMAT_INTERLACED: string;
export const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string;
export const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string;
export const CAPS_FEATURE_META_GST_VIDEO_META: string;
export const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string;
export const META_TAG_VIDEO_COLORSPACE_STR: string;
export const META_TAG_VIDEO_ORIENTATION_STR: string;
export const META_TAG_VIDEO_SIZE_STR: string;
export const META_TAG_VIDEO_STR: string;
export const VIDEO_COLORIMETRY_BT2020: string;
export const VIDEO_COLORIMETRY_BT2020_10: string;
export const VIDEO_COLORIMETRY_BT2100_HLG: string;
export const VIDEO_COLORIMETRY_BT2100_PQ: string;
export const VIDEO_COLORIMETRY_BT601: string;
export const VIDEO_COLORIMETRY_BT709: string;
export const VIDEO_COLORIMETRY_SMPTE240M: string;
export const VIDEO_COLORIMETRY_SRGB: string;
export const VIDEO_COMP_A: number;
export const VIDEO_COMP_B: number;
export const VIDEO_COMP_G: number;
export const VIDEO_COMP_INDEX: number;
export const VIDEO_COMP_PALETTE: number;
export const VIDEO_COMP_R: number;
export const VIDEO_COMP_U: number;
export const VIDEO_COMP_V: number;
export const VIDEO_COMP_Y: number;
export const VIDEO_CONVERTER_OPT_ALPHA_MODE: string;
export const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string;
export const VIDEO_CONVERTER_OPT_ASYNC_TASKS: string;
export const VIDEO_CONVERTER_OPT_BORDER_ARGB: string;
export const VIDEO_CONVERTER_OPT_CHROMA_MODE: string;
export const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string;
export const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string;
export const VIDEO_CONVERTER_OPT_DEST_WIDTH: string;
export const VIDEO_CONVERTER_OPT_DEST_X: string;
export const VIDEO_CONVERTER_OPT_DEST_Y: string;
export const VIDEO_CONVERTER_OPT_DITHER_METHOD: string;
export const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string;
export const VIDEO_CONVERTER_OPT_FILL_BORDER: string;
export const VIDEO_CONVERTER_OPT_GAMMA_MODE: string;
export const VIDEO_CONVERTER_OPT_MATRIX_MODE: string;
export const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string;
export const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string;
export const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string;
export const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string;
export const VIDEO_CONVERTER_OPT_SRC_WIDTH: string;
export const VIDEO_CONVERTER_OPT_SRC_X: string;
export const VIDEO_CONVERTER_OPT_SRC_Y: string;
export const VIDEO_CONVERTER_OPT_THREADS: string;
export const VIDEO_DECODER_MAX_ERRORS: number;
export const VIDEO_DECODER_SINK_NAME: string;
export const VIDEO_DECODER_SRC_NAME: string;
export const VIDEO_ENCODER_SINK_NAME: string;
export const VIDEO_ENCODER_SRC_NAME: string;
export const VIDEO_FORMATS_ALL: string;
export const VIDEO_FPS_RANGE: string;
export const VIDEO_MAX_COMPONENTS: number;
export const VIDEO_MAX_PLANES: number;
export const VIDEO_RESAMPLER_OPT_CUBIC_B: string;
export const VIDEO_RESAMPLER_OPT_CUBIC_C: string;
export const VIDEO_RESAMPLER_OPT_ENVELOPE: string;
export const VIDEO_RESAMPLER_OPT_MAX_TAPS: string;
export const VIDEO_RESAMPLER_OPT_SHARPEN: string;
export const VIDEO_RESAMPLER_OPT_SHARPNESS: string;
export const VIDEO_SCALER_OPT_DITHER_METHOD: string;
export const VIDEO_SIZE_RANGE: string;
export const VIDEO_TILE_TYPE_MASK: number;
export const VIDEO_TILE_TYPE_SHIFT: number;
export const VIDEO_TILE_X_TILES_MASK: number;
export const VIDEO_TILE_Y_TILES_SHIFT: number;
export function buffer_add_video_afd_meta(
    buffer: Gst.Buffer,
    field: number,
    spec: VideoAFDSpec,
    afd: VideoAFDValue
): VideoAFDMeta;
export function buffer_add_video_affine_transformation_meta(buffer: Gst.Buffer): VideoAffineTransformationMeta;
export function buffer_add_video_bar_meta(
    buffer: Gst.Buffer,
    field: number,
    is_letterbox: boolean,
    bar_data1: number,
    bar_data2: number
): VideoBarMeta;
export function buffer_add_video_caption_meta(
    buffer: Gst.Buffer,
    caption_type: VideoCaptionType,
    data: Uint8Array | string
): VideoCaptionMeta;
export function buffer_add_video_codec_alpha_meta(buffer: Gst.Buffer, alpha_buffer: Gst.Buffer): VideoCodecAlphaMeta;
export function buffer_add_video_gl_texture_upload_meta(
    buffer: Gst.Buffer,
    texture_orientation: VideoGLTextureOrientation,
    n_textures: number,
    texture_type: VideoGLTextureType,
    upload: VideoGLTextureUpload,
    user_data_copy: GObject.BoxedCopyFunc,
    user_data_free: GObject.BoxedFreeFunc
): VideoGLTextureUploadMeta;
export function buffer_add_video_meta(
    buffer: Gst.Buffer,
    flags: VideoFrameFlags,
    format: VideoFormat,
    width: number,
    height: number
): VideoMeta;
export function buffer_add_video_meta_full(
    buffer: Gst.Buffer,
    flags: VideoFrameFlags,
    format: VideoFormat,
    width: number,
    height: number,
    n_planes: number,
    offset: number[],
    stride: number[]
): VideoMeta;
export function buffer_add_video_overlay_composition_meta(
    buf: Gst.Buffer,
    comp?: VideoOverlayComposition | null
): VideoOverlayCompositionMeta;
export function buffer_add_video_region_of_interest_meta(
    buffer: Gst.Buffer,
    roi_type: string,
    x: number,
    y: number,
    w: number,
    h: number
): VideoRegionOfInterestMeta;
export function buffer_add_video_region_of_interest_meta_id(
    buffer: Gst.Buffer,
    roi_type: GLib.Quark,
    x: number,
    y: number,
    w: number,
    h: number
): VideoRegionOfInterestMeta;
export function buffer_add_video_sei_user_data_unregistered_meta(
    buffer: Gst.Buffer,
    uuid: number,
    data: number,
    size: number
): VideoSEIUserDataUnregisteredMeta;
export function buffer_add_video_time_code_meta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null;
export function buffer_add_video_time_code_meta_full(
    buffer: Gst.Buffer,
    fps_n: number,
    fps_d: number,
    latest_daily_jam: GLib.DateTime,
    flags: VideoTimeCodeFlags,
    hours: number,
    minutes: number,
    seconds: number,
    frames: number,
    field_count: number
): VideoTimeCodeMeta | null;
export function buffer_get_video_meta(buffer: Gst.Buffer): VideoMeta | null;
export function buffer_get_video_meta_id(buffer: Gst.Buffer, id: number): VideoMeta | null;
export function buffer_get_video_region_of_interest_meta_id(
    buffer: Gst.Buffer,
    id: number
): VideoRegionOfInterestMeta | null;
export function buffer_pool_config_get_video_alignment(config: Gst.Structure, align: VideoAlignment): boolean;
export function buffer_pool_config_set_video_alignment(config: Gst.Structure, align: VideoAlignment): void;
export function is_video_overlay_prepare_window_handle_message(msg: Gst.Message): boolean;
export function navigation_event_get_coordinates(event: Gst.Event): [boolean, number, number];
export function navigation_event_get_type(event: Gst.Event): NavigationEventType;
export function navigation_event_new_command(command: NavigationCommand): Gst.Event;
export function navigation_event_new_key_press(key: string, state: NavigationModifierType): Gst.Event;
export function navigation_event_new_key_release(key: string, state: NavigationModifierType): Gst.Event;
export function navigation_event_new_mouse_button_press(
    button: number,
    x: number,
    y: number,
    state: NavigationModifierType
): Gst.Event;
export function navigation_event_new_mouse_button_release(
    button: number,
    x: number,
    y: number,
    state: NavigationModifierType
): Gst.Event;
export function navigation_event_new_mouse_move(x: number, y: number, state: NavigationModifierType): Gst.Event;
export function navigation_event_new_mouse_scroll(
    x: number,
    y: number,
    delta_x: number,
    delta_y: number,
    state: NavigationModifierType
): Gst.Event;
export function navigation_event_new_touch_cancel(state: NavigationModifierType): Gst.Event;
export function navigation_event_new_touch_down(
    identifier: number,
    x: number,
    y: number,
    pressure: number,
    state: NavigationModifierType
): Gst.Event;
export function navigation_event_new_touch_frame(state: NavigationModifierType): Gst.Event;
export function navigation_event_new_touch_motion(
    identifier: number,
    x: number,
    y: number,
    pressure: number,
    state: NavigationModifierType
): Gst.Event;
export function navigation_event_new_touch_up(
    identifier: number,
    x: number,
    y: number,
    state: NavigationModifierType
): Gst.Event;
export function navigation_event_parse_command(event: Gst.Event): [boolean, NavigationCommand | null];
export function navigation_event_parse_key_event(event: Gst.Event): [boolean, string];
export function navigation_event_parse_modifier_state(event: Gst.Event, state: NavigationModifierType): boolean;
export function navigation_event_parse_mouse_button_event(event: Gst.Event): [boolean, number, number, number];
export function navigation_event_parse_mouse_move_event(event: Gst.Event): [boolean, number, number];
export function navigation_event_parse_mouse_scroll_event(event: Gst.Event): [boolean, number, number, number, number];
export function navigation_event_parse_touch_event(event: Gst.Event): [boolean, number, number, number, number];
export function navigation_event_parse_touch_up_event(event: Gst.Event): [boolean, number, number, number];
export function navigation_event_set_coordinates(event: Gst.Event, x: number, y: number): boolean;
export function navigation_message_get_type(message: Gst.Message): NavigationMessageType;
export function navigation_message_new_angles_changed(
    src: Gst.Object,
    cur_angle: number,
    n_angles: number
): Gst.Message;
export function navigation_message_new_commands_changed(src: Gst.Object): Gst.Message;
export function navigation_message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message;
export function navigation_message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message;
export function navigation_message_parse_angles_changed(message: Gst.Message): [boolean, number, number];
export function navigation_message_parse_event(message: Gst.Message): [boolean, Gst.Event | null];
export function navigation_message_parse_mouse_over(message: Gst.Message): [boolean, boolean];
export function navigation_query_get_type(query: Gst.Query): NavigationQueryType;
export function navigation_query_new_angles(): Gst.Query;
export function navigation_query_new_commands(): Gst.Query;
export function navigation_query_parse_angles(query: Gst.Query): [boolean, number, number];
export function navigation_query_parse_commands_length(query: Gst.Query): [boolean, number];
export function navigation_query_parse_commands_nth(query: Gst.Query, nth: number): [boolean, NavigationCommand | null];
export function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
export function navigation_query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void;
export function video_afd_meta_api_get_type(): GObject.GType;
export function video_afd_meta_get_info(): Gst.MetaInfo;
export function video_affine_transformation_meta_api_get_type(): GObject.GType;
export function video_affine_transformation_meta_get_info(): Gst.MetaInfo;
export function video_bar_meta_api_get_type(): GObject.GType;
export function video_bar_meta_get_info(): Gst.MetaInfo;
export function video_blend(dest: VideoFrame, src: VideoFrame, x: number, y: number, global_alpha: number): boolean;
export function video_blend_scale_linear_RGBA(
    src: VideoInfo,
    src_buffer: Gst.Buffer,
    dest_height: number,
    dest_width: number
): [VideoInfo, Gst.Buffer];
export function video_calculate_display_ratio(
    video_width: number,
    video_height: number,
    video_par_n: number,
    video_par_d: number,
    display_par_n: number,
    display_par_d: number
): [boolean, number, number];
export function video_caption_meta_api_get_type(): GObject.GType;
export function video_caption_meta_get_info(): Gst.MetaInfo;
export function video_caption_type_from_caps(caps: Gst.Caps): VideoCaptionType;
export function video_caption_type_to_caps(type: VideoCaptionType): Gst.Caps;
export function video_center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): VideoRectangle;
export function video_chroma_from_string(s: string): VideoChromaSite;
export function video_chroma_resample(resample: VideoChromaResample, lines: any | null, width: number): void;
export function video_chroma_site_from_string(s: string): VideoChromaSite;
export function video_chroma_site_to_string(site: VideoChromaSite): string | null;
export function video_chroma_to_string(site: VideoChromaSite): string;
export function video_codec_alpha_meta_api_get_type(): GObject.GType;
export function video_codec_alpha_meta_get_info(): Gst.MetaInfo;
export function video_color_matrix_from_iso(value: number): VideoColorMatrix;
export function video_color_matrix_get_Kr_Kb(matrix: VideoColorMatrix): [boolean, number, number];
export function video_color_matrix_to_iso(matrix: VideoColorMatrix): number;
export function video_color_primaries_from_iso(value: number): VideoColorPrimaries;
export function video_color_primaries_get_info(primaries: VideoColorPrimaries): VideoColorPrimariesInfo;
export function video_color_primaries_is_equivalent(
    primaries: VideoColorPrimaries,
    other: VideoColorPrimaries
): boolean;
export function video_color_primaries_to_iso(primaries: VideoColorPrimaries): number;
export function video_color_range_offsets(range: VideoColorRange, info: VideoFormatInfo): [number[], number[]];
export function video_color_transfer_decode(func: VideoTransferFunction, val: number): number;
export function video_color_transfer_encode(func: VideoTransferFunction, val: number): number;
export function video_convert_sample(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample;
export function video_convert_sample_async(
    sample: Gst.Sample,
    to_caps: Gst.Caps,
    timeout: Gst.ClockTime,
    callback: VideoConvertSampleCallback
): void;
export function video_crop_meta_api_get_type(): GObject.GType;
export function video_crop_meta_get_info(): Gst.MetaInfo;
export function video_event_is_force_key_unit(event: Gst.Event): boolean;
export function video_event_new_downstream_force_key_unit(
    timestamp: Gst.ClockTime,
    stream_time: Gst.ClockTime,
    running_time: Gst.ClockTime,
    all_headers: boolean,
    count: number
): Gst.Event;
export function video_event_new_still_frame(in_still: boolean): Gst.Event;
export function video_event_new_upstream_force_key_unit(
    running_time: Gst.ClockTime,
    all_headers: boolean,
    count: number
): Gst.Event;
export function video_event_parse_downstream_force_key_unit(
    event: Gst.Event
): [boolean, Gst.ClockTime, Gst.ClockTime, Gst.ClockTime, boolean, number];
export function video_event_parse_still_frame(event: Gst.Event): [boolean, boolean];
export function video_event_parse_upstream_force_key_unit(event: Gst.Event): [boolean, Gst.ClockTime, boolean, number];
export function video_field_order_from_string(order: string): VideoFieldOrder;
export function video_field_order_to_string(order: VideoFieldOrder): string;
export function video_format_from_fourcc(fourcc: number): VideoFormat;
export function video_format_from_masks(
    depth: number,
    bpp: number,
    endianness: number,
    red_mask: number,
    green_mask: number,
    blue_mask: number,
    alpha_mask: number
): VideoFormat;
export function video_format_from_string(format: string): VideoFormat;
export function video_format_get_info(format: VideoFormat): VideoFormatInfo;
export function video_format_get_palette(format: VideoFormat): [any | null, number];
export function video_format_to_fourcc(format: VideoFormat): number;
export function video_format_to_string(format: VideoFormat): string;
export function video_formats_raw(): VideoFormat[];
export function video_frame_map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, VideoFrame];
export function video_frame_map_id(
    info: VideoInfo,
    buffer: Gst.Buffer,
    id: number,
    flags: Gst.MapFlags
): [boolean, VideoFrame];
export function video_gl_texture_upload_meta_api_get_type(): GObject.GType;
export function video_gl_texture_upload_meta_get_info(): Gst.MetaInfo;
export function video_guess_framerate(duration: Gst.ClockTime): [boolean, number, number];
export function video_info_from_caps(caps: Gst.Caps): [boolean, VideoInfo];
export function video_info_init(): VideoInfo;
export function video_interlace_mode_from_string(mode: string): VideoInterlaceMode;
export function video_interlace_mode_to_string(mode: VideoInterlaceMode): string;
export function video_is_common_aspect_ratio(width: number, height: number, par_n: number, par_d: number): boolean;
export function video_make_raw_caps(formats?: VideoFormat[] | null): Gst.Caps;
export function video_make_raw_caps_with_features(
    formats?: VideoFormat[] | null,
    features?: Gst.CapsFeatures | null
): Gst.Caps;
export function video_mastering_display_info_from_string(mastering: string): [boolean, VideoMasteringDisplayInfo];
export function video_meta_api_get_type(): GObject.GType;
export function video_meta_get_info(): Gst.MetaInfo;
export function video_meta_transform_scale_get_quark(): GLib.Quark;
export function video_multiview_get_doubled_height_modes(): unknown;
export function video_multiview_get_doubled_size_modes(): unknown;
export function video_multiview_get_doubled_width_modes(): unknown;
export function video_multiview_get_mono_modes(): unknown;
export function video_multiview_get_unpacked_modes(): unknown;
export function video_multiview_guess_half_aspect(
    mv_mode: VideoMultiviewMode,
    width: number,
    height: number,
    par_n: number,
    par_d: number
): boolean;
export function video_multiview_mode_from_caps_string(caps_mview_mode: string): VideoMultiviewMode;
export function video_multiview_mode_to_caps_string(mview_mode: VideoMultiviewMode): string | null;
export function video_multiview_video_info_change_mode(
    info: VideoInfo,
    out_mview_mode: VideoMultiviewMode,
    out_mview_flags: VideoMultiviewFlags
): void;
export function video_orientation_from_tag(taglist: Gst.TagList): [boolean, VideoOrientationMethod];
export function video_overlay_composition_meta_api_get_type(): GObject.GType;
export function video_overlay_composition_meta_get_info(): Gst.MetaInfo;
export function video_overlay_install_properties(oclass: GObject.Object, last_prop_id: number): void;
export function video_overlay_set_property(
    object: GObject.Object,
    last_prop_id: number,
    property_id: number,
    value: GObject.Value | any
): boolean;
export function video_region_of_interest_meta_api_get_type(): GObject.GType;
export function video_region_of_interest_meta_get_info(): Gst.MetaInfo;
export function video_sei_user_data_unregistered_meta_api_get_type(): GObject.GType;
export function video_sei_user_data_unregistered_meta_get_info(): Gst.MetaInfo;
export function video_sei_user_data_unregistered_parse_precision_time_stamp(
    user_data: VideoSEIUserDataUnregisteredMeta
): [boolean, number, number];
export function video_tile_get_index(
    mode: VideoTileMode,
    x: number,
    y: number,
    x_tiles: number,
    y_tiles: number
): number;
export function video_time_code_meta_api_get_type(): GObject.GType;
export function video_time_code_meta_get_info(): Gst.MetaInfo;
export function video_transfer_function_decode(func: VideoTransferFunction, val: number): number;
export function video_transfer_function_encode(func: VideoTransferFunction, val: number): number;
export function video_transfer_function_from_iso(value: number): VideoTransferFunction;
export function video_transfer_function_is_equivalent(
    from_func: VideoTransferFunction,
    from_bpp: number,
    to_func: VideoTransferFunction,
    to_bpp: number
): boolean;
export function video_transfer_function_to_iso(func: VideoTransferFunction): number;
export type VideoAffineTransformationGetMatrix = (meta: VideoAffineTransformationMeta, matrix: number) => boolean;
export type VideoConvertSampleCallback = (sample: Gst.Sample, error: GLib.Error) => void;
export type VideoFormatPack = (
    info: VideoFormatInfo,
    flags: VideoPackFlags,
    src: any | null,
    sstride: number,
    data: any | null,
    stride: number,
    chroma_site: VideoChromaSite,
    y: number,
    width: number
) => void;
export type VideoFormatUnpack = (
    info: VideoFormatInfo,
    flags: VideoPackFlags,
    dest: any | null,
    data: any | null,
    stride: number,
    x: number,
    y: number,
    width: number
) => void;
export type VideoGLTextureUpload = (meta: VideoGLTextureUploadMeta, texture_id: number) => boolean;

export namespace ColorBalanceType {
    export const $gtype: GObject.GType<ColorBalanceType>;
}

export enum ColorBalanceType {
    HARDWARE = 0,
    SOFTWARE = 1,
}

export namespace NavigationCommand {
    export const $gtype: GObject.GType<NavigationCommand>;
}

export enum NavigationCommand {
    INVALID = 0,
    MENU1 = 1,
    MENU2 = 2,
    MENU3 = 3,
    MENU4 = 4,
    MENU5 = 5,
    MENU6 = 6,
    MENU7 = 7,
    LEFT = 20,
    RIGHT = 21,
    UP = 22,
    DOWN = 23,
    ACTIVATE = 24,
    PREV_ANGLE = 30,
    NEXT_ANGLE = 31,
}

export namespace NavigationEventType {
    export const $gtype: GObject.GType<NavigationEventType>;
}

export enum NavigationEventType {
    INVALID = 0,
    KEY_PRESS = 1,
    KEY_RELEASE = 2,
    MOUSE_BUTTON_PRESS = 3,
    MOUSE_BUTTON_RELEASE = 4,
    MOUSE_MOVE = 5,
    COMMAND = 6,
    MOUSE_SCROLL = 7,
    TOUCH_DOWN = 8,
    TOUCH_MOTION = 9,
    TOUCH_UP = 10,
    TOUCH_FRAME = 11,
    TOUCH_CANCEL = 12,
}

export namespace NavigationMessageType {
    export const $gtype: GObject.GType<NavigationMessageType>;
}

export enum NavigationMessageType {
    INVALID = 0,
    MOUSE_OVER = 1,
    COMMANDS_CHANGED = 2,
    ANGLES_CHANGED = 3,
    EVENT = 4,
}

export namespace NavigationQueryType {
    export const $gtype: GObject.GType<NavigationQueryType>;
}

export enum NavigationQueryType {
    INVALID = 0,
    COMMANDS = 1,
    ANGLES = 2,
}

export namespace VideoAFDSpec {
    export const $gtype: GObject.GType<VideoAFDSpec>;
}

export enum VideoAFDSpec {
    DVB_ETSI = 0,
    ATSC_A53 = 1,
    SMPTE_ST2016_1 = 2,
}

export namespace VideoAFDValue {
    export const $gtype: GObject.GType<VideoAFDValue>;
}

export enum VideoAFDValue {
    UNAVAILABLE = 0,
    "16_9_TOP_ALIGNED" = 2,
    "14_9_TOP_ALIGNED" = 3,
    GREATER_THAN_16_9 = 4,
    "4_3_FULL_16_9_FULL" = 8,
    "4_3_FULL_4_3_PILLAR" = 9,
    "16_9_LETTER_16_9_FULL" = 10,
    "14_9_LETTER_14_9_PILLAR" = 11,
    "4_3_FULL_14_9_CENTER" = 13,
    "16_9_LETTER_14_9_CENTER" = 14,
    "16_9_LETTER_4_3_CENTER" = 15,
}

export namespace VideoAlphaMode {
    export const $gtype: GObject.GType<VideoAlphaMode>;
}

export enum VideoAlphaMode {
    COPY = 0,
    SET = 1,
    MULT = 2,
}

export namespace VideoAncillaryDID {
    export const $gtype: GObject.GType<VideoAncillaryDID>;
}

export enum VideoAncillaryDID {
    UNDEFINED = 0,
    DELETION = 128,
    HANC_3G_AUDIO_DATA_FIRST = 160,
    HANC_3G_AUDIO_DATA_LAST = 167,
    HANC_HDTV_AUDIO_DATA_FIRST = 224,
    HANC_HDTV_AUDIO_DATA_LAST = 231,
    HANC_SDTV_AUDIO_DATA_1_FIRST = 236,
    HANC_SDTV_AUDIO_DATA_1_LAST = 239,
    CAMERA_POSITION = 240,
    HANC_ERROR_DETECTION = 244,
    HANC_SDTV_AUDIO_DATA_2_FIRST = 248,
    HANC_SDTV_AUDIO_DATA_2_LAST = 255,
}

export namespace VideoAncillaryDID16 {
    export const $gtype: GObject.GType<VideoAncillaryDID16>;
}

export enum VideoAncillaryDID16 {
    S334_EIA_708 = 24833,
    S334_EIA_608 = 24834,
    S2016_3_AFD_BAR = 16645,
}

export namespace VideoCaptionType {
    export const $gtype: GObject.GType<VideoCaptionType>;
}

export enum VideoCaptionType {
    UNKNOWN = 0,
    CEA608_RAW = 1,
    CEA608_S334_1A = 2,
    CEA708_RAW = 3,
    CEA708_CDP = 4,
}

export namespace VideoChromaMethod {
    export const $gtype: GObject.GType<VideoChromaMethod>;
}

export enum VideoChromaMethod {
    NEAREST = 0,
    LINEAR = 1,
}

export namespace VideoChromaMode {
    export const $gtype: GObject.GType<VideoChromaMode>;
}

export enum VideoChromaMode {
    FULL = 0,
    UPSAMPLE_ONLY = 1,
    DOWNSAMPLE_ONLY = 2,
    NONE = 3,
}

export namespace VideoColorMatrix {
    export const $gtype: GObject.GType<VideoColorMatrix>;
}

export enum VideoColorMatrix {
    UNKNOWN = 0,
    RGB = 1,
    FCC = 2,
    BT709 = 3,
    BT601 = 4,
    SMPTE240M = 5,
    BT2020 = 6,
}

export namespace VideoColorPrimaries {
    export const $gtype: GObject.GType<VideoColorPrimaries>;
}

export enum VideoColorPrimaries {
    UNKNOWN = 0,
    BT709 = 1,
    BT470M = 2,
    BT470BG = 3,
    SMPTE170M = 4,
    SMPTE240M = 5,
    FILM = 6,
    BT2020 = 7,
    ADOBERGB = 8,
    SMPTEST428 = 9,
    SMPTERP431 = 10,
    SMPTEEG432 = 11,
    EBU3213 = 12,
}

export namespace VideoColorRange {
    export const $gtype: GObject.GType<VideoColorRange>;
}

export enum VideoColorRange {
    UNKNOWN = 0,
    "0_255" = 1,
    "16_235" = 2,
}

export namespace VideoDitherMethod {
    export const $gtype: GObject.GType<VideoDitherMethod>;
}

export enum VideoDitherMethod {
    NONE = 0,
    VERTERR = 1,
    FLOYD_STEINBERG = 2,
    SIERRA_LITE = 3,
    BAYER = 4,
}

export namespace VideoFieldOrder {
    export const $gtype: GObject.GType<VideoFieldOrder>;
}

export enum VideoFieldOrder {
    UNKNOWN = 0,
    TOP_FIELD_FIRST = 1,
    BOTTOM_FIELD_FIRST = 2,
}

export namespace VideoFormat {
    export const $gtype: GObject.GType<VideoFormat>;
}

export enum VideoFormat {
    UNKNOWN = 0,
    ENCODED = 1,
    I420 = 2,
    YV12 = 3,
    YUY2 = 4,
    UYVY = 5,
    AYUV = 6,
    RGBX = 7,
    BGRX = 8,
    XRGB = 9,
    XBGR = 10,
    RGBA = 11,
    BGRA = 12,
    ARGB = 13,
    ABGR = 14,
    RGB = 15,
    BGR = 16,
    Y41B = 17,
    Y42B = 18,
    YVYU = 19,
    Y444 = 20,
    V210 = 21,
    V216 = 22,
    NV12 = 23,
    NV21 = 24,
    GRAY8 = 25,
    GRAY16_BE = 26,
    GRAY16_LE = 27,
    V308 = 28,
    RGB16 = 29,
    BGR16 = 30,
    RGB15 = 31,
    BGR15 = 32,
    UYVP = 33,
    A420 = 34,
    RGB8P = 35,
    YUV9 = 36,
    YVU9 = 37,
    IYU1 = 38,
    ARGB64 = 39,
    AYUV64 = 40,
    R210 = 41,
    I420_10BE = 42,
    I420_10LE = 43,
    I422_10BE = 44,
    I422_10LE = 45,
    Y444_10BE = 46,
    Y444_10LE = 47,
    GBR = 48,
    GBR_10BE = 49,
    GBR_10LE = 50,
    NV16 = 51,
    NV24 = 52,
    NV12_64Z32 = 53,
    A420_10BE = 54,
    A420_10LE = 55,
    A422_10BE = 56,
    A422_10LE = 57,
    A444_10BE = 58,
    A444_10LE = 59,
    NV61 = 60,
    P010_10BE = 61,
    P010_10LE = 62,
    IYU2 = 63,
    VYUY = 64,
    GBRA = 65,
    GBRA_10BE = 66,
    GBRA_10LE = 67,
    GBR_12BE = 68,
    GBR_12LE = 69,
    GBRA_12BE = 70,
    GBRA_12LE = 71,
    I420_12BE = 72,
    I420_12LE = 73,
    I422_12BE = 74,
    I422_12LE = 75,
    Y444_12BE = 76,
    Y444_12LE = 77,
    GRAY10_LE32 = 78,
    NV12_10LE32 = 79,
    NV16_10LE32 = 80,
    NV12_10LE40 = 81,
    Y210 = 82,
    Y410 = 83,
    VUYA = 84,
    BGR10A2_LE = 85,
    RGB10A2_LE = 86,
    Y444_16BE = 87,
    Y444_16LE = 88,
    P016_BE = 89,
    P016_LE = 90,
    P012_BE = 91,
    P012_LE = 92,
    Y212_BE = 93,
    Y212_LE = 94,
    Y412_BE = 95,
    Y412_LE = 96,
    NV12_4L4 = 97,
    NV12_32L32 = 98,
    RGBP = 99,
    BGRP = 100,
    AV12 = 101,
    ARGB64_LE = 102,
    ARGB64_BE = 103,
    RGBA64_LE = 104,
    RGBA64_BE = 105,
    BGRA64_LE = 106,
    BGRA64_BE = 107,
    ABGR64_LE = 108,
    ABGR64_BE = 109,
    NV12_16L32S = 110,
    NV12_8L128 = 111,
    NV12_10BE_8L128 = 112,
}

export namespace VideoGLTextureOrientation {
    export const $gtype: GObject.GType<VideoGLTextureOrientation>;
}

export enum VideoGLTextureOrientation {
    NORMAL_Y_NORMAL = 0,
    NORMAL_Y_FLIP = 1,
    FLIP_Y_NORMAL = 2,
    FLIP_Y_FLIP = 3,
}

export namespace VideoGLTextureType {
    export const $gtype: GObject.GType<VideoGLTextureType>;
}

export enum VideoGLTextureType {
    LUMINANCE = 0,
    LUMINANCE_ALPHA = 1,
    RGB16 = 2,
    RGB = 3,
    RGBA = 4,
    R = 5,
    RG = 6,
}

export namespace VideoGammaMode {
    export const $gtype: GObject.GType<VideoGammaMode>;
}

export enum VideoGammaMode {
    NONE = 0,
    REMAP = 1,
}

export namespace VideoInterlaceMode {
    export const $gtype: GObject.GType<VideoInterlaceMode>;
}

export enum VideoInterlaceMode {
    PROGRESSIVE = 0,
    INTERLEAVED = 1,
    MIXED = 2,
    FIELDS = 3,
    ALTERNATE = 4,
}

export namespace VideoMatrixMode {
    export const $gtype: GObject.GType<VideoMatrixMode>;
}

export enum VideoMatrixMode {
    FULL = 0,
    INPUT_ONLY = 1,
    OUTPUT_ONLY = 2,
    NONE = 3,
}

export namespace VideoMultiviewFramePacking {
    export const $gtype: GObject.GType<VideoMultiviewFramePacking>;
}

export enum VideoMultiviewFramePacking {
    NONE = -1,
    MONO = 0,
    LEFT = 1,
    RIGHT = 2,
    SIDE_BY_SIDE = 3,
    SIDE_BY_SIDE_QUINCUNX = 4,
    COLUMN_INTERLEAVED = 5,
    ROW_INTERLEAVED = 6,
    TOP_BOTTOM = 7,
    CHECKERBOARD = 8,
}

export namespace VideoMultiviewMode {
    export const $gtype: GObject.GType<VideoMultiviewMode>;
}

export enum VideoMultiviewMode {
    NONE = -1,
    MONO = 0,
    LEFT = 1,
    RIGHT = 2,
    SIDE_BY_SIDE = 3,
    SIDE_BY_SIDE_QUINCUNX = 4,
    COLUMN_INTERLEAVED = 5,
    ROW_INTERLEAVED = 6,
    TOP_BOTTOM = 7,
    CHECKERBOARD = 8,
    FRAME_BY_FRAME = 32,
    MULTIVIEW_FRAME_BY_FRAME = 33,
    SEPARATED = 34,
}

export class VideoOrientationMethod {
    static $gtype: GObject.GType<VideoOrientationMethod>;

    constructor(copy: VideoOrientationMethod);

    // Fields
    static IDENTITY: number;
    static "90R": number;
    static "180": number;
    static "90L": number;
    static HORIZ: number;
    static VERT: number;
    static UL_LR: number;
    static UR_LL: number;
    static AUTO: number;
    static CUSTOM: number;
}

export namespace VideoPrimariesMode {
    export const $gtype: GObject.GType<VideoPrimariesMode>;
}

export enum VideoPrimariesMode {
    NONE = 0,
    MERGE_ONLY = 1,
    FAST = 2,
}

export namespace VideoResamplerMethod {
    export const $gtype: GObject.GType<VideoResamplerMethod>;
}

export enum VideoResamplerMethod {
    NEAREST = 0,
    LINEAR = 1,
    CUBIC = 2,
    SINC = 3,
    LANCZOS = 4,
}

export namespace VideoTileMode {
    export const $gtype: GObject.GType<VideoTileMode>;
}

export enum VideoTileMode {
    UNKNOWN = 0,
    ZFLIPZ_2X2 = 65536,
    LINEAR = 131072,
}

export namespace VideoTileType {
    export const $gtype: GObject.GType<VideoTileType>;
}

export enum VideoTileType {
    INDEXED = 0,
}

export namespace VideoTransferFunction {
    export const $gtype: GObject.GType<VideoTransferFunction>;
}

export enum VideoTransferFunction {
    UNKNOWN = 0,
    GAMMA10 = 1,
    GAMMA18 = 2,
    GAMMA20 = 3,
    GAMMA22 = 4,
    BT709 = 5,
    SMPTE240M = 6,
    SRGB = 7,
    GAMMA28 = 8,
    LOG100 = 9,
    LOG316 = 10,
    BT2020_12 = 11,
    ADOBERGB = 12,
    BT2020_10 = 13,
    SMPTE2084 = 14,
    ARIB_STD_B67 = 15,
    BT601 = 16,
}

export namespace VideoVBIParserResult {
    export const $gtype: GObject.GType<VideoVBIParserResult>;
}

export enum VideoVBIParserResult {
    DONE = 0,
    OK = 1,
    ERROR = 2,
}

export namespace NavigationModifierType {
    export const $gtype: GObject.GType<NavigationModifierType>;
}

export enum NavigationModifierType {
    NONE = 0,
    SHIFT_MASK = 1,
    LOCK_MASK = 2,
    CONTROL_MASK = 4,
    MOD1_MASK = 8,
    MOD2_MASK = 16,
    MOD3_MASK = 32,
    MOD4_MASK = 64,
    MOD5_MASK = 128,
    BUTTON1_MASK = 256,
    BUTTON2_MASK = 512,
    BUTTON3_MASK = 1024,
    BUTTON4_MASK = 2048,
    BUTTON5_MASK = 4096,
    SUPER_MASK = 67108864,
    HYPER_MASK = 134217728,
    META_MASK = 268435456,
    MASK = 469770239,
}

export namespace VideoBufferFlags {
    export const $gtype: GObject.GType<VideoBufferFlags>;
}

export enum VideoBufferFlags {
    INTERLACED = 1048576,
    TFF = 2097152,
    RFF = 4194304,
    ONEFIELD = 8388608,
    MULTIPLE_VIEW = 16777216,
    FIRST_IN_BUNDLE = 33554432,
    TOP_FIELD = 10485760,
    BOTTOM_FIELD = 8388608,
    MARKER = 512,
    LAST = 268435456,
}

export namespace VideoChromaFlags {
    export const $gtype: GObject.GType<VideoChromaFlags>;
}

export enum VideoChromaFlags {
    NONE = 0,
    INTERLACED = 1,
}

export namespace VideoChromaSite {
    export const $gtype: GObject.GType<VideoChromaSite>;
}

export enum VideoChromaSite {
    UNKNOWN = 0,
    NONE = 1,
    H_COSITED = 2,
    V_COSITED = 4,
    ALT_LINE = 8,
    COSITED = 6,
    JPEG = 1,
    MPEG2 = 2,
    DV = 14,
}

export namespace VideoCodecFrameFlags {
    export const $gtype: GObject.GType<VideoCodecFrameFlags>;
}

export enum VideoCodecFrameFlags {
    DECODE_ONLY = 1,
    SYNC_POINT = 2,
    FORCE_KEYFRAME = 4,
    FORCE_KEYFRAME_HEADERS = 8,
    CORRUPTED = 16,
}

export namespace VideoDecoderRequestSyncPointFlags {
    export const $gtype: GObject.GType<VideoDecoderRequestSyncPointFlags>;
}

export enum VideoDecoderRequestSyncPointFlags {
    DISCARD_INPUT = 1,
    CORRUPT_OUTPUT = 2,
}

export namespace VideoDitherFlags {
    export const $gtype: GObject.GType<VideoDitherFlags>;
}

export enum VideoDitherFlags {
    NONE = 0,
    INTERLACED = 1,
    QUANTIZE = 2,
}

export namespace VideoFlags {
    export const $gtype: GObject.GType<VideoFlags>;
}

export enum VideoFlags {
    NONE = 0,
    VARIABLE_FPS = 1,
    PREMULTIPLIED_ALPHA = 2,
}

export namespace VideoFormatFlags {
    export const $gtype: GObject.GType<VideoFormatFlags>;
}

export enum VideoFormatFlags {
    YUV = 1,
    RGB = 2,
    GRAY = 4,
    ALPHA = 8,
    LE = 16,
    PALETTE = 32,
    COMPLEX = 64,
    UNPACK = 128,
    TILED = 256,
    SUBTILES = 512,
}

export namespace VideoFrameFlags {
    export const $gtype: GObject.GType<VideoFrameFlags>;
}

export enum VideoFrameFlags {
    NONE = 0,
    INTERLACED = 1,
    TFF = 2,
    RFF = 4,
    ONEFIELD = 8,
    MULTIPLE_VIEW = 16,
    FIRST_IN_BUNDLE = 32,
    TOP_FIELD = 10,
    BOTTOM_FIELD = 8,
}

export namespace VideoFrameMapFlags {
    export const $gtype: GObject.GType<VideoFrameMapFlags>;
}

export enum VideoFrameMapFlags {
    NO_REF = 65536,
    LAST = 16777216,
}

export namespace VideoMultiviewFlags {
    export const $gtype: GObject.GType<VideoMultiviewFlags>;
}

export enum VideoMultiviewFlags {
    NONE = 0,
    RIGHT_VIEW_FIRST = 1,
    LEFT_FLIPPED = 2,
    LEFT_FLOPPED = 4,
    RIGHT_FLIPPED = 8,
    RIGHT_FLOPPED = 16,
    HALF_ASPECT = 16384,
    MIXED_MONO = 32768,
}

export namespace VideoOverlayFormatFlags {
    export const $gtype: GObject.GType<VideoOverlayFormatFlags>;
}

export enum VideoOverlayFormatFlags {
    NONE = 0,
    PREMULTIPLIED_ALPHA = 1,
    GLOBAL_ALPHA = 2,
}

export namespace VideoPackFlags {
    export const $gtype: GObject.GType<VideoPackFlags>;
}

export enum VideoPackFlags {
    NONE = 0,
    TRUNCATE_RANGE = 1,
    INTERLACED = 2,
}

export namespace VideoResamplerFlags {
    export const $gtype: GObject.GType<VideoResamplerFlags>;
}

export enum VideoResamplerFlags {
    NONE = 0,
    HALF_TAPS = 1,
}

export namespace VideoScalerFlags {
    export const $gtype: GObject.GType<VideoScalerFlags>;
}

export enum VideoScalerFlags {
    NONE = 0,
    INTERLACED = 1,
}

export namespace VideoTimeCodeFlags {
    export const $gtype: GObject.GType<VideoTimeCodeFlags>;
}

export enum VideoTimeCodeFlags {
    NONE = 0,
    DROP_FRAME = 1,
    INTERLACED = 2,
}
export module ColorBalanceChannel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ColorBalanceChannel extends GObject.Object {
    static $gtype: GObject.GType<ColorBalanceChannel>;

    constructor(properties?: Partial<ColorBalanceChannel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorBalanceChannel.ConstructorProperties>, ...args: any[]): void;

    // Fields
    label: string;
    min_value: number;
    max_value: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "value-changed", callback: (_source: this, value: number) => void): number;
    connect_after(signal: "value-changed", callback: (_source: this, value: number) => void): number;
    emit(signal: "value-changed", value: number): void;

    // Members

    vfunc_value_changed(value: number): void;
}
export module VideoAggregator {
    export interface ConstructorProperties extends GstBase.Aggregator.ConstructorProperties {
        [key: string]: any;
        force_live: boolean;
        forceLive: boolean;
    }
}
export abstract class VideoAggregator extends GstBase.Aggregator {
    static $gtype: GObject.GType<VideoAggregator>;

    constructor(properties?: Partial<VideoAggregator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoAggregator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get force_live(): boolean;
    get forceLive(): boolean;

    // Fields
    aggregator: GstBase.Aggregator;
    info: VideoInfo;

    // Members

    get_execution_task_pool(): Gst.TaskPool;
    vfunc_aggregate_frames(outbuffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_create_output_buffer(outbuffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_find_best_format(downstream_caps: Gst.Caps, best_info: VideoInfo): boolean;
    vfunc_update_caps(caps: Gst.Caps): Gst.Caps;
}
export module VideoAggregatorConvertPad {
    export interface ConstructorProperties extends VideoAggregatorPad.ConstructorProperties {
        [key: string]: any;
        converter_config: Gst.Structure;
        converterConfig: Gst.Structure;
    }
}
export class VideoAggregatorConvertPad extends VideoAggregatorPad {
    static $gtype: GObject.GType<VideoAggregatorConvertPad>;

    constructor(properties?: Partial<VideoAggregatorConvertPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoAggregatorConvertPad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get converter_config(): Gst.Structure;
    set converter_config(val: Gst.Structure);
    get converterConfig(): Gst.Structure;
    set converterConfig(val: Gst.Structure);

    // Members

    update_conversion_info(): void;
    vfunc_create_conversion_info(agg: VideoAggregator, conversion_info: VideoInfo): void;
}
export module VideoAggregatorPad {
    export interface ConstructorProperties extends GstBase.AggregatorPad.ConstructorProperties {
        [key: string]: any;
        max_last_buffer_repeat: number;
        maxLastBufferRepeat: number;
        repeat_after_eos: boolean;
        repeatAfterEos: boolean;
        zorder: number;
    }
}
export class VideoAggregatorPad extends GstBase.AggregatorPad {
    static $gtype: GObject.GType<VideoAggregatorPad>;

    constructor(properties?: Partial<VideoAggregatorPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoAggregatorPad.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get max_last_buffer_repeat(): number;
    set max_last_buffer_repeat(val: number);
    get maxLastBufferRepeat(): number;
    set maxLastBufferRepeat(val: number);
    get repeat_after_eos(): boolean;
    set repeat_after_eos(val: boolean);
    get repeatAfterEos(): boolean;
    set repeatAfterEos(val: boolean);
    get zorder(): number;
    set zorder(val: number);

    // Fields
    info: VideoInfo;

    // Members

    get_current_buffer(): Gst.Buffer;
    get_prepared_frame(): VideoFrame;
    has_current_buffer(): boolean;
    set_needs_alpha(needs_alpha: boolean): void;
    vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void;
    vfunc_prepare_frame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): boolean;
    vfunc_prepare_frame_finish(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void;
    vfunc_prepare_frame_start(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): void;
    vfunc_update_conversion_info(): void;
}
export module VideoAggregatorParallelConvertPad {
    export interface ConstructorProperties extends VideoAggregatorConvertPad.ConstructorProperties {
        [key: string]: any;
    }
}
export class VideoAggregatorParallelConvertPad extends VideoAggregatorConvertPad {
    static $gtype: GObject.GType<VideoAggregatorParallelConvertPad>;

    constructor(properties?: Partial<VideoAggregatorParallelConvertPad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoAggregatorParallelConvertPad.ConstructorProperties>, ...args: any[]): void;
}
export module VideoBufferPool {
    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
        [key: string]: any;
    }
}
export class VideoBufferPool extends Gst.BufferPool {
    static $gtype: GObject.GType<VideoBufferPool>;

    constructor(properties?: Partial<VideoBufferPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoBufferPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    bufferpool: Gst.BufferPool;
    priv: VideoBufferPoolPrivate;

    // Constructors

    static ["new"](): VideoBufferPool;
}
export module VideoDecoder {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        automatic_request_sync_point_flags: VideoDecoderRequestSyncPointFlags;
        automaticRequestSyncPointFlags: VideoDecoderRequestSyncPointFlags;
        automatic_request_sync_points: boolean;
        automaticRequestSyncPoints: boolean;
        discard_corrupted_frames: boolean;
        discardCorruptedFrames: boolean;
        max_errors: number;
        maxErrors: number;
        min_force_key_unit_interval: number;
        minForceKeyUnitInterval: number;
        qos: boolean;
    }
}
export abstract class VideoDecoder extends Gst.Element {
    static $gtype: GObject.GType<VideoDecoder>;

    constructor(properties?: Partial<VideoDecoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoDecoder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get automatic_request_sync_point_flags(): VideoDecoderRequestSyncPointFlags;
    set automatic_request_sync_point_flags(val: VideoDecoderRequestSyncPointFlags);
    get automaticRequestSyncPointFlags(): VideoDecoderRequestSyncPointFlags;
    set automaticRequestSyncPointFlags(val: VideoDecoderRequestSyncPointFlags);
    get automatic_request_sync_points(): boolean;
    set automatic_request_sync_points(val: boolean);
    get automaticRequestSyncPoints(): boolean;
    set automaticRequestSyncPoints(val: boolean);
    get discard_corrupted_frames(): boolean;
    set discard_corrupted_frames(val: boolean);
    get discardCorruptedFrames(): boolean;
    set discardCorruptedFrames(val: boolean);
    get max_errors(): number;
    set max_errors(val: number);
    get maxErrors(): number;
    set maxErrors(val: number);
    get min_force_key_unit_interval(): number;
    set min_force_key_unit_interval(val: number);
    get minForceKeyUnitInterval(): number;
    set minForceKeyUnitInterval(val: number);
    get qos(): boolean;
    set qos(val: boolean);

    // Members

    add_to_frame(n_bytes: number): void;
    allocate_output_buffer(): Gst.Buffer | null;
    allocate_output_frame(frame: VideoCodecFrame): Gst.FlowReturn;
    allocate_output_frame_with_params(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn;
    drop_frame(frame: VideoCodecFrame): Gst.FlowReturn;
    drop_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
    finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
    finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
    get_buffer_pool(): Gst.BufferPool | null;
    get_estimate_rate(): number;
    get_frame(frame_number: number): VideoCodecFrame | null;
    get_frames(): VideoCodecFrame[];
    get_input_subframe_index(frame: VideoCodecFrame): number;
    get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
    get_max_decode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
    get_max_errors(): number;
    get_needs_format(): boolean;
    get_needs_sync_point(): boolean;
    get_oldest_frame(): VideoCodecFrame | null;
    get_output_state(): VideoCodecState | null;
    get_packetized(): boolean;
    get_pending_frame_size(): number;
    get_processed_subframe_index(frame: VideoCodecFrame): number;
    get_qos_proportion(): number;
    get_subframe_mode(): boolean;
    have_frame(): Gst.FlowReturn;
    have_last_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    negotiate(): boolean;
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
    release_frame(frame: VideoCodecFrame): void;
    request_sync_point(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void;
    set_estimate_rate(enabled: boolean): void;
    set_interlaced_output_state(
        fmt: VideoFormat,
        interlace_mode: VideoInterlaceMode,
        width: number,
        height: number,
        reference?: VideoCodecState | null
    ): VideoCodecState | null;
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
    set_max_errors(num: number): void;
    set_needs_format(enabled: boolean): void;
    set_needs_sync_point(enabled: boolean): void;
    set_output_state(
        fmt: VideoFormat,
        width: number,
        height: number,
        reference?: VideoCodecState | null
    ): VideoCodecState | null;
    set_packetized(packetized: boolean): void;
    set_subframe_mode(subframe_mode: boolean): void;
    set_use_default_pad_acceptcaps(use: boolean): void;
    vfunc_close(): boolean;
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_drain(): Gst.FlowReturn;
    vfunc_finish(): Gst.FlowReturn;
    vfunc_flush(): boolean;
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
    vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn;
    vfunc_handle_missing_data(timestamp: Gst.ClockTime, duration: Gst.ClockTime): boolean;
    vfunc_negotiate(): boolean;
    vfunc_open(): boolean;
    vfunc_parse(frame: VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn;
    vfunc_propose_allocation(query: Gst.Query): boolean;
    vfunc_reset(hard: boolean): boolean;
    vfunc_set_format(state: VideoCodecState): boolean;
    vfunc_sink_event(event: Gst.Event): boolean;
    vfunc_sink_query(query: Gst.Query): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
    vfunc_src_query(query: Gst.Query): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean;
}
export module VideoEncoder {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        min_force_key_unit_interval: number;
        minForceKeyUnitInterval: number;
        qos: boolean;
    }
}
export abstract class VideoEncoder extends Gst.Element implements Gst.Preset {
    static $gtype: GObject.GType<VideoEncoder>;

    constructor(properties?: Partial<VideoEncoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoEncoder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get min_force_key_unit_interval(): number;
    set min_force_key_unit_interval(val: number);
    get minForceKeyUnitInterval(): number;
    set minForceKeyUnitInterval(val: number);
    get qos(): boolean;
    set qos(val: boolean);

    // Members

    allocate_output_buffer(size: number): Gst.Buffer;
    allocate_output_frame(frame: VideoCodecFrame, size: number): Gst.FlowReturn;
    finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
    finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
    get_frame(frame_number: number): VideoCodecFrame | null;
    get_frames(): VideoCodecFrame[];
    get_latency(): [Gst.ClockTime | null, Gst.ClockTime | null];
    get_max_encode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
    get_min_force_key_unit_interval(): Gst.ClockTime;
    get_oldest_frame(): VideoCodecFrame | null;
    get_output_state(): VideoCodecState | null;
    is_qos_enabled(): boolean;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    negotiate(): boolean;
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
    set_headers(headers: Gst.Buffer[]): void;
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
    set_min_force_key_unit_interval(interval: Gst.ClockTime): void;
    set_min_pts(min_pts: Gst.ClockTime): void;
    set_output_state(caps: Gst.Caps, reference?: VideoCodecState | null): VideoCodecState | null;
    set_qos_enabled(enabled: boolean): void;
    vfunc_close(): boolean;
    vfunc_decide_allocation(query: Gst.Query): boolean;
    vfunc_finish(): Gst.FlowReturn;
    vfunc_flush(): boolean;
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps;
    vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn;
    vfunc_negotiate(): boolean;
    vfunc_open(): boolean;
    vfunc_pre_push(frame: VideoCodecFrame): Gst.FlowReturn;
    vfunc_propose_allocation(query: Gst.Query): boolean;
    vfunc_reset(hard: boolean): boolean;
    vfunc_set_format(state: VideoCodecState): boolean;
    vfunc_sink_event(event: Gst.Event): boolean;
    vfunc_sink_query(query: Gst.Query): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
    vfunc_src_query(query: Gst.Query): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean;

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
export module VideoFilter {
    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class VideoFilter extends GstBase.BaseTransform {
    static $gtype: GObject.GType<VideoFilter>;

    constructor(properties?: Partial<VideoFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    element: GstBase.BaseTransform;
    negotiated: boolean;
    in_info: VideoInfo;
    out_info: VideoInfo;

    // Members

    vfunc_set_info(incaps: Gst.Caps, in_info: VideoInfo, outcaps: Gst.Caps, out_info: VideoInfo): boolean;
    vfunc_transform_frame(inframe: VideoFrame, outframe: VideoFrame): Gst.FlowReturn;
    vfunc_transform_frame_ip(frame: VideoFrame): Gst.FlowReturn;
}
export module VideoMultiviewFlagsSet {
    export interface ConstructorProperties extends Gst.FlagSet.ConstructorProperties {
        [key: string]: any;
    }
}
export class VideoMultiviewFlagsSet extends Gst.FlagSet {
    static $gtype: GObject.GType<VideoMultiviewFlagsSet>;

    constructor(properties?: Partial<VideoMultiviewFlagsSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoMultiviewFlagsSet.ConstructorProperties>, ...args: any[]): void;
}
export module VideoSink {
    export interface ConstructorProperties extends GstBase.BaseSink.ConstructorProperties {
        [key: string]: any;
        show_preroll_frame: boolean;
        showPrerollFrame: boolean;
    }
}
export class VideoSink extends GstBase.BaseSink {
    static $gtype: GObject.GType<VideoSink>;

    constructor(properties?: Partial<VideoSink.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VideoSink.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get show_preroll_frame(): boolean;
    set show_preroll_frame(val: boolean);
    get showPrerollFrame(): boolean;
    set showPrerollFrame(val: boolean);

    // Fields
    element: GstBase.BaseSink;
    width: number;
    height: number;

    // Members

    vfunc_set_info(caps: Gst.Caps, info: VideoInfo): boolean;
    vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn;
    static center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): VideoRectangle;
}

export class VideoAFDMeta {
    static $gtype: GObject.GType<VideoAFDMeta>;

    constructor(copy: VideoAFDMeta);

    // Fields
    meta: Gst.Meta;
    field: number;
    spec: VideoAFDSpec;
    afd: VideoAFDValue;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoAffineTransformationMeta {
    static $gtype: GObject.GType<VideoAffineTransformationMeta>;

    constructor(copy: VideoAffineTransformationMeta);

    // Fields
    meta: Gst.Meta;
    matrix: number[];

    // Members
    apply_matrix(matrix: number[]): void;
    static get_info(): Gst.MetaInfo;
}

export class VideoAggregatorConvertPadPrivate {
    static $gtype: GObject.GType<VideoAggregatorConvertPadPrivate>;

    constructor(copy: VideoAggregatorConvertPadPrivate);
}

export class VideoAggregatorPadPrivate {
    static $gtype: GObject.GType<VideoAggregatorPadPrivate>;

    constructor(copy: VideoAggregatorPadPrivate);
}

export class VideoAggregatorPrivate {
    static $gtype: GObject.GType<VideoAggregatorPrivate>;

    constructor(copy: VideoAggregatorPrivate);
}

export class VideoAlignment {
    static $gtype: GObject.GType<VideoAlignment>;

    constructor(copy: VideoAlignment);

    // Fields
    padding_top: number;
    padding_bottom: number;
    padding_left: number;
    padding_right: number;
    stride_align: number[];

    // Members
    reset(): void;
}

export class VideoAncillary {
    static $gtype: GObject.GType<VideoAncillary>;

    constructor(copy: VideoAncillary);

    // Fields
    DID: number;
    SDID_block_number: number;
    data_count: number;
    data: Uint8Array;
}

export class VideoBarMeta {
    static $gtype: GObject.GType<VideoBarMeta>;

    constructor(copy: VideoBarMeta);

    // Fields
    meta: Gst.Meta;
    field: number;
    is_letterbox: boolean;
    bar_data1: number;
    bar_data2: number;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoBufferPoolPrivate {
    static $gtype: GObject.GType<VideoBufferPoolPrivate>;

    constructor(copy: VideoBufferPoolPrivate);
}

export class VideoCaptionMeta {
    static $gtype: GObject.GType<VideoCaptionMeta>;

    constructor(copy: VideoCaptionMeta);

    // Fields
    meta: Gst.Meta;
    caption_type: VideoCaptionType;
    data: Uint8Array;
    size: number;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoChromaResample {
    static $gtype: GObject.GType<VideoChromaResample>;

    constructor(copy: VideoChromaResample);

    // Members
    free(): void;
    get_info(): [number, number];
}

export class VideoCodecAlphaMeta {
    static $gtype: GObject.GType<VideoCodecAlphaMeta>;

    constructor(copy: VideoCodecAlphaMeta);

    // Fields
    meta: Gst.Meta;
    buffer: Gst.Buffer;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoCodecFrame {
    static $gtype: GObject.GType<VideoCodecFrame>;

    constructor(copy: VideoCodecFrame);

    // Fields
    system_frame_number: number;
    dts: Gst.ClockTime;
    pts: Gst.ClockTime;
    duration: Gst.ClockTime;
    distance_from_sync: number;
    input_buffer: Gst.Buffer;
    output_buffer: Gst.Buffer;
    deadline: Gst.ClockTime;

    // Members
    get_user_data(): any | null;
    ref(): VideoCodecFrame;
    set_user_data(notify: GLib.DestroyNotify): void;
    unref(): void;
}

export class VideoCodecState {
    static $gtype: GObject.GType<VideoCodecState>;

    constructor(copy: VideoCodecState);

    // Fields
    info: VideoInfo;
    caps: Gst.Caps;
    codec_data: Gst.Buffer;
    allocation_caps: Gst.Caps;
    mastering_display_info: VideoMasteringDisplayInfo;
    content_light_level: VideoContentLightLevel;

    // Members
    ref(): VideoCodecState;
    unref(): void;
}

export class VideoColorPrimariesInfo {
    static $gtype: GObject.GType<VideoColorPrimariesInfo>;

    constructor(copy: VideoColorPrimariesInfo);

    // Fields
    primaries: VideoColorPrimaries;
    Wx: number;
    Wy: number;
    Rx: number;
    Ry: number;
    Gx: number;
    Gy: number;
    Bx: number;
    By: number;
}

export class VideoColorimetry {
    static $gtype: GObject.GType<VideoColorimetry>;

    constructor(copy: VideoColorimetry);

    // Fields
    range: VideoColorRange;
    matrix: VideoColorMatrix;
    transfer: VideoTransferFunction;
    primaries: VideoColorPrimaries;

    // Members
    from_string(color: string): boolean;
    is_equal(other: VideoColorimetry): boolean;
    is_equivalent(bitdepth: number, other: VideoColorimetry, other_bitdepth: number): boolean;
    matches(color: string): boolean;
    to_string(): string | null;
}

export class VideoContentLightLevel {
    static $gtype: GObject.GType<VideoContentLightLevel>;

    constructor(
        properties?: Partial<{
            max_content_light_level?: number;
            max_frame_average_light_level?: number;
        }>
    );
    constructor(copy: VideoContentLightLevel);

    // Fields
    max_content_light_level: number;
    max_frame_average_light_level: number;

    // Members
    add_to_caps(caps: Gst.Caps): boolean;
    from_caps(caps: Gst.Caps): boolean;
    from_string(level: string): boolean;
    init(): void;
    is_equal(other: VideoContentLightLevel): boolean;
    to_string(): string;
}

export class VideoConverter {
    static $gtype: GObject.GType<VideoConverter>;

    constructor(copy: VideoConverter);

    // Members
    frame(src: VideoFrame, dest: VideoFrame): void;
    frame_finish(): void;
    free(): void;
    get_config(): Gst.Structure;
    get_in_info(): VideoInfo;
    get_out_info(): VideoInfo;
    set_config(config: Gst.Structure): boolean;
}

export class VideoCropMeta {
    static $gtype: GObject.GType<VideoCropMeta>;

    constructor(copy: VideoCropMeta);

    // Fields
    meta: Gst.Meta;
    x: number;
    y: number;
    width: number;
    height: number;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoDecoderPrivate {
    static $gtype: GObject.GType<VideoDecoderPrivate>;

    constructor(copy: VideoDecoderPrivate);
}

export class VideoDither {
    static $gtype: GObject.GType<VideoDither>;

    constructor(copy: VideoDither);

    // Members
    free(): void;
    line(line: any | null, x: number, y: number, width: number): void;
}

export class VideoEncoderPrivate {
    static $gtype: GObject.GType<VideoEncoderPrivate>;

    constructor(copy: VideoEncoderPrivate);
}

export class VideoFormatInfo {
    static $gtype: GObject.GType<VideoFormatInfo>;

    constructor(copy: VideoFormatInfo);

    // Fields
    format: VideoFormat;
    name: string;
    description: string;
    flags: VideoFormatFlags;
    bits: number;
    n_components: number;
    shift: number[];
    depth: number[];
    pixel_stride: number[];
    n_planes: number;
    plane: number[];
    poffset: number[];
    w_sub: number[];
    h_sub: number[];
    unpack_format: VideoFormat;
    unpack_func: VideoFormatUnpack;
    pack_lines: number;
    pack_func: VideoFormatPack;
    tile_mode: VideoTileMode;
    tile_ws: number;
    tile_hs: number;
    tile_info: VideoTileInfo[];

    // Members
    component(plane: number): number;
    extrapolate_stride(plane: number, stride: number): number;
}

export class VideoFrame {
    static $gtype: GObject.GType<VideoFrame>;

    constructor(copy: VideoFrame);

    // Fields
    info: VideoInfo;
    flags: VideoFrameFlags;
    buffer: Gst.Buffer;
    meta: any;
    id: number;
    data: any[];

    // Members
    copy(src: VideoFrame): boolean;
    copy_plane(src: VideoFrame, plane: number): boolean;
    unmap(): void;
    static map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, VideoFrame];
    static map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [boolean, VideoFrame];
}

export class VideoGLTextureUploadMeta {
    static $gtype: GObject.GType<VideoGLTextureUploadMeta>;

    constructor(copy: VideoGLTextureUploadMeta);

    // Fields
    meta: Gst.Meta;
    texture_orientation: VideoGLTextureOrientation;
    n_textures: number;
    texture_type: VideoGLTextureType[];

    // Members
    upload(texture_id: number): boolean;
    static get_info(): Gst.MetaInfo;
}

export class VideoInfo {
    static $gtype: GObject.GType<VideoInfo>;

    constructor();
    constructor(
        properties?: Partial<{
            finfo?: VideoFormatInfo;
            interlace_mode?: VideoInterlaceMode;
            flags?: VideoFlags;
            width?: number;
            height?: number;
            size?: number;
            views?: number;
            chroma_site?: VideoChromaSite;
            colorimetry?: VideoColorimetry;
            par_n?: number;
            par_d?: number;
            fps_n?: number;
            fps_d?: number;
            offset?: number[];
            stride?: number[];
        }>
    );
    constructor(copy: VideoInfo);

    // Fields
    finfo: VideoFormatInfo;
    interlace_mode: VideoInterlaceMode;
    flags: VideoFlags;
    width: number;
    height: number;
    size: number;
    views: number;
    chroma_site: VideoChromaSite;
    colorimetry: VideoColorimetry;
    par_n: number;
    par_d: number;
    fps_n: number;
    fps_d: number;
    offset: number[];
    stride: number[];

    // Constructors
    static ["new"](): VideoInfo;
    static new_from_caps(caps: Gst.Caps): VideoInfo;

    // Members
    align(align: VideoAlignment): boolean;
    align_full(align: VideoAlignment): [boolean, number];
    convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [boolean, number];
    copy(): VideoInfo;
    free(): void;
    is_equal(other: VideoInfo): boolean;
    set_format(format: VideoFormat, width: number, height: number): boolean;
    set_interlaced_format(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean;
    to_caps(): Gst.Caps;
    static from_caps(caps: Gst.Caps): [boolean, VideoInfo];
    static init(): VideoInfo;
}

export class VideoMasteringDisplayInfo {
    static $gtype: GObject.GType<VideoMasteringDisplayInfo>;

    constructor(copy: VideoMasteringDisplayInfo);

    // Fields
    display_primaries: VideoMasteringDisplayInfoCoordinates[];
    white_point: VideoMasteringDisplayInfoCoordinates;
    max_display_mastering_luminance: number;
    min_display_mastering_luminance: number;

    // Members
    add_to_caps(caps: Gst.Caps): boolean;
    from_caps(caps: Gst.Caps): boolean;
    init(): void;
    is_equal(other: VideoMasteringDisplayInfo): boolean;
    to_string(): string;
    static from_string(mastering: string): [boolean, VideoMasteringDisplayInfo];
}

export class VideoMasteringDisplayInfoCoordinates {
    static $gtype: GObject.GType<VideoMasteringDisplayInfoCoordinates>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
        }>
    );
    constructor(copy: VideoMasteringDisplayInfoCoordinates);

    // Fields
    x: number;
    y: number;
}

export class VideoMeta {
    static $gtype: GObject.GType<VideoMeta>;

    constructor(copy: VideoMeta);

    // Fields
    meta: Gst.Meta;
    buffer: Gst.Buffer;
    flags: VideoFrameFlags;
    format: VideoFormat;
    id: number;
    width: number;
    height: number;
    n_planes: number;
    offset: number[];
    stride: number[];
    alignment: VideoAlignment;

    // Members
    get_plane_height(): [boolean, number[]];
    get_plane_size(): [boolean, number[]];
    map(plane: number, info: Gst.MapInfo, flags: Gst.MapFlags): [boolean, any, number];
    set_alignment(alignment: VideoAlignment): boolean;
    unmap(plane: number, info: Gst.MapInfo): boolean;
    static get_info(): Gst.MetaInfo;
}

export class VideoMetaTransform {
    static $gtype: GObject.GType<VideoMetaTransform>;

    constructor(copy: VideoMetaTransform);

    // Fields
    in_info: VideoInfo;
    out_info: VideoInfo;

    // Members
    static scale_get_quark(): GLib.Quark;
}

export class VideoOverlayComposition {
    static $gtype: GObject.GType<VideoOverlayComposition>;

    constructor(rectangle?: VideoOverlayRectangle | null);
    constructor(copy: VideoOverlayComposition);

    // Constructors
    static ["new"](rectangle?: VideoOverlayRectangle | null): VideoOverlayComposition;

    // Members
    add_rectangle(rectangle: VideoOverlayRectangle): void;
    blend(video_buf: VideoFrame): boolean;
    copy(): VideoOverlayComposition;
    get_rectangle(n: number): VideoOverlayRectangle | null;
    get_seqnum(): number;
    make_writable(): VideoOverlayComposition;
    n_rectangles(): number;
}

export class VideoOverlayCompositionMeta {
    static $gtype: GObject.GType<VideoOverlayCompositionMeta>;

    constructor(copy: VideoOverlayCompositionMeta);

    // Fields
    meta: Gst.Meta;
    overlay: VideoOverlayComposition;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoOverlayRectangle {
    static $gtype: GObject.GType<VideoOverlayRectangle>;

    constructor(
        pixels: Gst.Buffer,
        render_x: number,
        render_y: number,
        render_width: number,
        render_height: number,
        flags: VideoOverlayFormatFlags
    );
    constructor(copy: VideoOverlayRectangle);

    // Constructors
    static new_raw(
        pixels: Gst.Buffer,
        render_x: number,
        render_y: number,
        render_width: number,
        render_height: number,
        flags: VideoOverlayFormatFlags
    ): VideoOverlayRectangle;

    // Members
    copy(): VideoOverlayRectangle;
    get_flags(): VideoOverlayFormatFlags;
    get_global_alpha(): number;
    get_pixels_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
    get_pixels_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
    get_pixels_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
    get_pixels_unscaled_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
    get_pixels_unscaled_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
    get_pixels_unscaled_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
    get_render_rectangle(): [boolean, number, number, number, number];
    get_seqnum(): number;
    set_global_alpha(global_alpha: number): void;
    set_render_rectangle(render_x: number, render_y: number, render_width: number, render_height: number): void;
}

export class VideoRectangle {
    static $gtype: GObject.GType<VideoRectangle>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            w?: number;
            h?: number;
        }>
    );
    constructor(copy: VideoRectangle);

    // Fields
    x: number;
    y: number;
    w: number;
    h: number;
}

export class VideoRegionOfInterestMeta {
    static $gtype: GObject.GType<VideoRegionOfInterestMeta>;

    constructor(copy: VideoRegionOfInterestMeta);

    // Fields
    meta: Gst.Meta;
    roi_type: GLib.Quark;
    id: number;
    parent_id: number;
    x: number;
    y: number;
    w: number;
    h: number;
    params: any[];

    // Members
    add_param(s: Gst.Structure): void;
    get_param(name: string): Gst.Structure | null;
    static get_info(): Gst.MetaInfo;
}

export class VideoResampler {
    static $gtype: GObject.GType<VideoResampler>;

    constructor(
        properties?: Partial<{
            in_size?: number;
            out_size?: number;
            max_taps?: number;
            n_phases?: number;
            offset?: number;
            phase?: number;
            n_taps?: number;
            taps?: number;
        }>
    );
    constructor(copy: VideoResampler);

    // Fields
    in_size: number;
    out_size: number;
    max_taps: number;
    n_phases: number;
    offset: number;
    phase: number;
    n_taps: number;
    taps: number;

    // Members
    clear(): void;
    init(
        method: VideoResamplerMethod,
        flags: VideoResamplerFlags,
        n_phases: number,
        n_taps: number,
        shift: number,
        in_size: number,
        out_size: number,
        options: Gst.Structure
    ): boolean;
}

export class VideoSEIUserDataUnregisteredMeta {
    static $gtype: GObject.GType<VideoSEIUserDataUnregisteredMeta>;

    constructor(copy: VideoSEIUserDataUnregisteredMeta);

    // Fields
    meta: Gst.Meta;
    uuid: Uint8Array;
    data: number;
    size: number;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoScaler {
    static $gtype: GObject.GType<VideoScaler>;

    constructor(copy: VideoScaler);

    // Members
    ["2d"](
        vscale: VideoScaler,
        format: VideoFormat,
        src: any | null,
        src_stride: number,
        dest: any | null,
        dest_stride: number,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    free(): void;
    get_coeff(out_offset: number): [number, number, number];
    get_max_taps(): number;
    horizontal(format: VideoFormat, src: any | null, dest: any | null, dest_offset: number, width: number): void;
    vertical(format: VideoFormat, src_lines: any | null, dest: any | null, dest_offset: number, width: number): void;
}

export class VideoSinkPrivate {
    static $gtype: GObject.GType<VideoSinkPrivate>;

    constructor(copy: VideoSinkPrivate);
}

export class VideoTileInfo {
    static $gtype: GObject.GType<VideoTileInfo>;

    constructor(
        properties?: Partial<{
            width?: number;
            height?: number;
            stride?: number;
            size?: number;
        }>
    );
    constructor(copy: VideoTileInfo);

    // Fields
    width: number;
    height: number;
    stride: number;
    size: number;
}

export class VideoTimeCode {
    static $gtype: GObject.GType<VideoTimeCode>;

    constructor();
    constructor(
        properties?: Partial<{
            config?: VideoTimeCodeConfig;
            hours?: number;
            minutes?: number;
            seconds?: number;
            frames?: number;
            field_count?: number;
        }>
    );
    constructor(copy: VideoTimeCode);

    // Fields
    config: VideoTimeCodeConfig;
    hours: number;
    minutes: number;
    seconds: number;
    frames: number;
    field_count: number;

    // Constructors
    static ["new"](
        fps_n: number,
        fps_d: number,
        latest_daily_jam: GLib.DateTime,
        flags: VideoTimeCodeFlags,
        hours: number,
        minutes: number,
        seconds: number,
        frames: number,
        field_count: number
    ): VideoTimeCode;
    static new_empty(): VideoTimeCode;
    static new_from_date_time(
        fps_n: number,
        fps_d: number,
        dt: GLib.DateTime,
        flags: VideoTimeCodeFlags,
        field_count: number
    ): VideoTimeCode;
    static new_from_date_time_full(
        fps_n: number,
        fps_d: number,
        dt: GLib.DateTime,
        flags: VideoTimeCodeFlags,
        field_count: number
    ): VideoTimeCode;
    static new_from_string(tc_str: string): VideoTimeCode;

    // Members
    add_frames(frames: number): void;
    add_interval(tc_inter: VideoTimeCodeInterval): VideoTimeCode | null;
    clear(): void;
    compare(tc2: VideoTimeCode): number;
    copy(): VideoTimeCode;
    frames_since_daily_jam(): number;
    free(): void;
    increment_frame(): void;
    init(
        fps_n: number,
        fps_d: number,
        latest_daily_jam: GLib.DateTime | null,
        flags: VideoTimeCodeFlags,
        hours: number,
        minutes: number,
        seconds: number,
        frames: number,
        field_count: number
    ): void;
    init_from_date_time(
        fps_n: number,
        fps_d: number,
        dt: GLib.DateTime,
        flags: VideoTimeCodeFlags,
        field_count: number
    ): void;
    init_from_date_time_full(
        fps_n: number,
        fps_d: number,
        dt: GLib.DateTime,
        flags: VideoTimeCodeFlags,
        field_count: number
    ): boolean;
    is_valid(): boolean;
    nsec_since_daily_jam(): number;
    to_date_time(): GLib.DateTime | null;
    to_string(): string;
}

export class VideoTimeCodeConfig {
    static $gtype: GObject.GType<VideoTimeCodeConfig>;

    constructor(copy: VideoTimeCodeConfig);

    // Fields
    fps_n: number;
    fps_d: number;
    flags: VideoTimeCodeFlags;
    latest_daily_jam: GLib.DateTime;
}

export class VideoTimeCodeInterval {
    static $gtype: GObject.GType<VideoTimeCodeInterval>;

    constructor(
        properties?: Partial<{
            hours?: number;
            minutes?: number;
            seconds?: number;
            frames?: number;
        }>
    );
    constructor(copy: VideoTimeCodeInterval);

    // Fields
    hours: number;
    minutes: number;
    seconds: number;
    frames: number;

    // Constructors
    static ["new"](hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval;
    static new_from_string(tc_inter_str: string): VideoTimeCodeInterval;

    // Members
    clear(): void;
    copy(): VideoTimeCodeInterval;
    free(): void;
    init(hours: number, minutes: number, seconds: number, frames: number): void;
}

export class VideoTimeCodeMeta {
    static $gtype: GObject.GType<VideoTimeCodeMeta>;

    constructor(copy: VideoTimeCodeMeta);

    // Fields
    meta: Gst.Meta;
    tc: VideoTimeCode;

    // Members
    static get_info(): Gst.MetaInfo;
}

export class VideoVBIEncoder {
    static $gtype: GObject.GType<VideoVBIEncoder>;

    constructor(format: VideoFormat, pixel_width: number);
    constructor(copy: VideoVBIEncoder);

    // Constructors
    static ["new"](format: VideoFormat, pixel_width: number): VideoVBIEncoder;

    // Members
    add_ancillary(composite: boolean, DID: number, SDID_block_number: number, data: Uint8Array | string): boolean;
    copy(): VideoVBIEncoder;
    free(): void;
    write_line(data: number): void;
}

export class VideoVBIParser {
    static $gtype: GObject.GType<VideoVBIParser>;

    constructor(format: VideoFormat, pixel_width: number);
    constructor(copy: VideoVBIParser);

    // Constructors
    static ["new"](format: VideoFormat, pixel_width: number): VideoVBIParser;

    // Members
    add_line(data: Uint8Array | string): void;
    copy(): VideoVBIParser;
    free(): void;
    get_ancillary(): [VideoVBIParserResult, VideoAncillary];
}

export interface ColorBalanceNamespace {
    $gtype: GObject.GType<ColorBalance>;
    prototype: ColorBalancePrototype;
}
export type ColorBalance = ColorBalancePrototype;
export interface ColorBalancePrototype extends GObject.Object {
    // Members

    get_balance_type(): ColorBalanceType;
    get_value(channel: ColorBalanceChannel): number;
    list_channels(): ColorBalanceChannel[];
    set_value(channel: ColorBalanceChannel, value: number): void;
    value_changed(channel: ColorBalanceChannel, value: number): void;
    vfunc_get_balance_type(): ColorBalanceType;
    vfunc_get_value(channel: ColorBalanceChannel): number;
    vfunc_list_channels(): ColorBalanceChannel[];
    vfunc_set_value(channel: ColorBalanceChannel, value: number): void;
    vfunc_value_changed(channel: ColorBalanceChannel, value: number): void;
}

export const ColorBalance: ColorBalanceNamespace;

export interface NavigationNamespace {
    $gtype: GObject.GType<Navigation>;
    prototype: NavigationPrototype;

    event_get_coordinates(event: Gst.Event): [boolean, number, number];
    event_get_type(event: Gst.Event): NavigationEventType;
    event_new_command(command: NavigationCommand): Gst.Event;
    event_new_key_press(key: string, state: NavigationModifierType): Gst.Event;
    event_new_key_release(key: string, state: NavigationModifierType): Gst.Event;
    event_new_mouse_button_press(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
    event_new_mouse_button_release(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
    event_new_mouse_move(x: number, y: number, state: NavigationModifierType): Gst.Event;
    event_new_mouse_scroll(
        x: number,
        y: number,
        delta_x: number,
        delta_y: number,
        state: NavigationModifierType
    ): Gst.Event;
    event_new_touch_cancel(state: NavigationModifierType): Gst.Event;
    event_new_touch_down(
        identifier: number,
        x: number,
        y: number,
        pressure: number,
        state: NavigationModifierType
    ): Gst.Event;
    event_new_touch_frame(state: NavigationModifierType): Gst.Event;
    event_new_touch_motion(
        identifier: number,
        x: number,
        y: number,
        pressure: number,
        state: NavigationModifierType
    ): Gst.Event;
    event_new_touch_up(identifier: number, x: number, y: number, state: NavigationModifierType): Gst.Event;
    event_parse_command(event: Gst.Event): [boolean, NavigationCommand | null];
    event_parse_key_event(event: Gst.Event): [boolean, string];
    event_parse_modifier_state(event: Gst.Event, state: NavigationModifierType): boolean;
    event_parse_mouse_button_event(event: Gst.Event): [boolean, number, number, number];
    event_parse_mouse_move_event(event: Gst.Event): [boolean, number, number];
    event_parse_mouse_scroll_event(event: Gst.Event): [boolean, number, number, number, number];
    event_parse_touch_event(event: Gst.Event): [boolean, number, number, number, number];
    event_parse_touch_up_event(event: Gst.Event): [boolean, number, number, number];
    event_set_coordinates(event: Gst.Event, x: number, y: number): boolean;
    message_get_type(message: Gst.Message): NavigationMessageType;
    message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message;
    message_new_commands_changed(src: Gst.Object): Gst.Message;
    message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message;
    message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message;
    message_parse_angles_changed(message: Gst.Message): [boolean, number, number];
    message_parse_event(message: Gst.Message): [boolean, Gst.Event | null];
    message_parse_mouse_over(message: Gst.Message): [boolean, boolean];
    query_get_type(query: Gst.Query): NavigationQueryType;
    query_new_angles(): Gst.Query;
    query_new_commands(): Gst.Query;
    query_parse_angles(query: Gst.Query): [boolean, number, number];
    query_parse_commands_length(query: Gst.Query): [boolean, number];
    query_parse_commands_nth(query: Gst.Query, nth: number): [boolean, NavigationCommand | null];
    query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
    query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void;
}
export type Navigation = NavigationPrototype;
export interface NavigationPrototype extends GObject.Object {
    // Members

    send_command(command: NavigationCommand): void;
    send_event(structure: Gst.Structure): void;
    send_event_simple(event: Gst.Event): void;
    send_key_event(event: string, key: string): void;
    send_mouse_event(event: string, button: number, x: number, y: number): void;
    send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void;
    vfunc_send_event(structure: Gst.Structure): void;
    vfunc_send_event_simple(event: Gst.Event): void;
}

export const Navigation: NavigationNamespace;

export interface VideoDirectionNamespace {
    $gtype: GObject.GType<VideoDirection>;
    prototype: VideoDirectionPrototype;
}
export type VideoDirection = VideoDirectionPrototype;
export interface VideoDirectionPrototype extends GObject.Object {
    // Properties
    video_direction: VideoOrientationMethod;
    videoDirection: VideoOrientationMethod;
}

export const VideoDirection: VideoDirectionNamespace;

export interface VideoOrientationNamespace {
    $gtype: GObject.GType<VideoOrientation>;
    prototype: VideoOrientationPrototype;

    from_tag(taglist: Gst.TagList): [boolean, VideoOrientationMethod];
}
export type VideoOrientation = VideoOrientationPrototype;
export interface VideoOrientationPrototype extends GObject.Object {
    // Members

    get_hcenter(): [boolean, number];
    get_hflip(): [boolean, boolean];
    get_vcenter(): [boolean, number];
    get_vflip(): [boolean, boolean];
    set_hcenter(center: number): boolean;
    set_hflip(flip: boolean): boolean;
    set_vcenter(center: number): boolean;
    set_vflip(flip: boolean): boolean;
    vfunc_get_hcenter(): [boolean, number];
    vfunc_get_hflip(): [boolean, boolean];
    vfunc_get_vcenter(): [boolean, number];
    vfunc_get_vflip(): [boolean, boolean];
    vfunc_set_hcenter(center: number): boolean;
    vfunc_set_hflip(flip: boolean): boolean;
    vfunc_set_vcenter(center: number): boolean;
    vfunc_set_vflip(flip: boolean): boolean;
}

export const VideoOrientation: VideoOrientationNamespace;

export interface VideoOverlayNamespace {
    $gtype: GObject.GType<VideoOverlay>;
    prototype: VideoOverlayPrototype;

    install_properties(oclass: GObject.Object, last_prop_id: number): void;
    // Conflicted with GObject.Object.install_properties
    install_properties(...args: never[]): any;
    set_property(
        object: GObject.Object,
        last_prop_id: number,
        property_id: number,
        value: GObject.Value | any
    ): boolean;
}
export type VideoOverlay = VideoOverlayPrototype;
export interface VideoOverlayPrototype extends GObject.Object {
    // Members

    expose(): void;
    got_window_handle(handle: never): void;
    handle_events(handle_events: boolean): void;
    prepare_window_handle(): void;
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
    set_window_handle(handle: never): void;
    vfunc_expose(): void;
    vfunc_handle_events(handle_events: boolean): void;
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): void;
    vfunc_set_window_handle(handle: never): void;
}

export const VideoOverlay: VideoOverlayNamespace;
