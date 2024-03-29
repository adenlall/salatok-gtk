/**
 * GstRtp 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GLib from "glib2";
import * as GObject from "gobject2";
import * as GstBase from "gstbase1";

export const RTCP_MAX_BYE_SSRC_COUNT: number;
export const RTCP_MAX_RB_COUNT: number;
export const RTCP_MAX_SDES: number;
export const RTCP_MAX_SDES_ITEM_COUNT: number;
export const RTCP_REDUCED_SIZE_VALID_MASK: number;
export const RTCP_VALID_MASK: number;
export const RTCP_VALID_VALUE: number;
export const RTCP_VERSION: number;
export const RTP_HDREXT_BASE: string;
export const RTP_HDREXT_ELEMENT_CLASS: string;
export const RTP_HDREXT_NTP_56: string;
export const RTP_HDREXT_NTP_56_SIZE: number;
export const RTP_HDREXT_NTP_64: string;
export const RTP_HDREXT_NTP_64_SIZE: number;
export const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string;
export const RTP_PAYLOAD_1016_STRING: string;
export const RTP_PAYLOAD_CELLB_STRING: string;
export const RTP_PAYLOAD_CN_STRING: string;
export const RTP_PAYLOAD_DVI4_11025_STRING: string;
export const RTP_PAYLOAD_DVI4_16000_STRING: string;
export const RTP_PAYLOAD_DVI4_22050_STRING: string;
export const RTP_PAYLOAD_DVI4_8000_STRING: string;
export const RTP_PAYLOAD_DYNAMIC_STRING: string;
export const RTP_PAYLOAD_G721_STRING: string;
export const RTP_PAYLOAD_G722_STRING: string;
export const RTP_PAYLOAD_G723_53: number;
export const RTP_PAYLOAD_G723_53_STRING: string;
export const RTP_PAYLOAD_G723_63: number;
export const RTP_PAYLOAD_G723_63_STRING: string;
export const RTP_PAYLOAD_G723_STRING: string;
export const RTP_PAYLOAD_G728_STRING: string;
export const RTP_PAYLOAD_G729_STRING: string;
export const RTP_PAYLOAD_GSM_STRING: string;
export const RTP_PAYLOAD_H261_STRING: string;
export const RTP_PAYLOAD_H263_STRING: string;
export const RTP_PAYLOAD_JPEG_STRING: string;
export const RTP_PAYLOAD_L16_MONO_STRING: string;
export const RTP_PAYLOAD_L16_STEREO_STRING: string;
export const RTP_PAYLOAD_LPC_STRING: string;
export const RTP_PAYLOAD_MP2T_STRING: string;
export const RTP_PAYLOAD_MPA_STRING: string;
export const RTP_PAYLOAD_MPV_STRING: string;
export const RTP_PAYLOAD_NV_STRING: string;
export const RTP_PAYLOAD_PCMA_STRING: string;
export const RTP_PAYLOAD_PCMU_STRING: string;
export const RTP_PAYLOAD_QCELP_STRING: string;
export const RTP_PAYLOAD_TS41: number;
export const RTP_PAYLOAD_TS41_STRING: string;
export const RTP_PAYLOAD_TS48: number;
export const RTP_PAYLOAD_TS48_STRING: string;
export const RTP_SOURCE_META_MAX_CSRC_COUNT: number;
export const RTP_VERSION: number;
export function buffer_add_rtp_source_meta(
    buffer: Gst.Buffer,
    ssrc?: number | null,
    csrc?: number[] | null
): RTPSourceMeta;
export function buffer_get_rtp_source_meta(buffer: Gst.Buffer): RTPSourceMeta | null;
export function rtcp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
export function rtcp_buffer_new(mtu: number): Gst.Buffer;
export function rtcp_buffer_new_copy_data(data: Uint8Array | string): Gst.Buffer;
export function rtcp_buffer_new_take_data(data: Uint8Array | string): Gst.Buffer;
export function rtcp_buffer_validate(buffer: Gst.Buffer): boolean;
export function rtcp_buffer_validate_data(data: Uint8Array | string): boolean;
export function rtcp_buffer_validate_data_reduced(data: Uint8Array | string): boolean;
export function rtcp_buffer_validate_reduced(buffer: Gst.Buffer): boolean;
export function rtcp_ntp_to_unix(ntptime: number): number;
export function rtcp_sdes_name_to_type(name: string): RTCPSDESType;
export function rtcp_sdes_type_to_name(type: RTCPSDESType): string;
export function rtcp_unix_to_ntp(unixtime: number): number;
export function rtp_buffer_allocate_data(
    buffer: Gst.Buffer,
    payload_len: number,
    pad_len: number,
    csrc_count: number
): void;
export function rtp_buffer_calc_header_len(csrc_count: number): number;
export function rtp_buffer_calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
export function rtp_buffer_calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
export function rtp_buffer_compare_seqnum(seqnum1: number, seqnum2: number): number;
export function rtp_buffer_default_clock_rate(payload_type: number): number;
export function rtp_buffer_ext_timestamp(exttimestamp: number, timestamp: number): [number, number];
export function rtp_buffer_get_extension_onebyte_header_from_bytes(
    bytes: GLib.Bytes | Uint8Array,
    bit_pattern: number,
    id: number,
    nth: number
): [boolean, Uint8Array];
export function rtp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
export function rtp_buffer_new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
export function rtp_buffer_new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
export function rtp_buffer_new_copy_data(data: Uint8Array | string): Gst.Buffer;
export function rtp_buffer_new_take_data(data: Uint8Array | string): Gst.Buffer;
export function rtp_get_header_extension_list(): Gst.ElementFactory[];
export function rtp_hdrext_get_ntp_56(data: Uint8Array | string): [boolean, number];
export function rtp_hdrext_get_ntp_64(data: Uint8Array | string): [boolean, number];
export function rtp_hdrext_set_ntp_56(data: any | null, size: number, ntptime: number): boolean;
export function rtp_hdrext_set_ntp_64(data: any | null, size: number, ntptime: number): boolean;
export function rtp_payload_info_for_name(media: string, encoding_name: string): RTPPayloadInfo | null;
export function rtp_payload_info_for_pt(payload_type: number): RTPPayloadInfo | null;
export function rtp_source_meta_api_get_type(): GObject.GType;
export function rtp_source_meta_get_info(): Gst.MetaInfo;

export namespace RTCPFBType {
    export const $gtype: GObject.GType<RTCPFBType>;
}

export enum RTCPFBType {
    FB_TYPE_INVALID = 0,
    RTPFB_TYPE_NACK = 1,
    RTPFB_TYPE_TMMBR = 3,
    RTPFB_TYPE_TMMBN = 4,
    RTPFB_TYPE_RTCP_SR_REQ = 5,
    RTPFB_TYPE_TWCC = 15,
    PSFB_TYPE_PLI = 1,
    PSFB_TYPE_SLI = 2,
    PSFB_TYPE_RPSI = 3,
    PSFB_TYPE_AFB = 15,
    PSFB_TYPE_FIR = 4,
    PSFB_TYPE_TSTR = 5,
    PSFB_TYPE_TSTN = 6,
    PSFB_TYPE_VBCN = 7,
}

export namespace RTCPSDESType {
    export const $gtype: GObject.GType<RTCPSDESType>;
}

export enum RTCPSDESType {
    INVALID = -1,
    END = 0,
    CNAME = 1,
    NAME = 2,
    EMAIL = 3,
    PHONE = 4,
    LOC = 5,
    TOOL = 6,
    NOTE = 7,
    PRIV = 8,
    H323_CADDR = 9,
    APSI = 10,
    RGRP = 11,
    RTP_STREAM_ID = 12,
    REPAIRED_RTP_STREAM_ID = 13,
    CCID = 14,
    MID = 15,
}

export namespace RTCPType {
    export const $gtype: GObject.GType<RTCPType>;
}

export enum RTCPType {
    INVALID = 0,
    SR = 200,
    RR = 201,
    SDES = 202,
    BYE = 203,
    APP = 204,
    RTPFB = 205,
    PSFB = 206,
    XR = 207,
}

export namespace RTCPXRType {
    export const $gtype: GObject.GType<RTCPXRType>;
}

export enum RTCPXRType {
    INVALID = -1,
    LRLE = 1,
    DRLE = 2,
    PRT = 3,
    RRT = 4,
    DLRR = 5,
    SSUMM = 6,
    VOIP_METRICS = 7,
}

export class RTPPayload {
    static $gtype: GObject.GType<RTPPayload>;

    constructor(copy: RTPPayload);

    // Fields
    static PCMU: number;
    static "1016": number;
    static G721: number;
    static GSM: number;
    static G723: number;
    static DVI4_8000: number;
    static DVI4_16000: number;
    static LPC: number;
    static PCMA: number;
    static G722: number;
    static L16_STEREO: number;
    static L16_MONO: number;
    static QCELP: number;
    static CN: number;
    static MPA: number;
    static G728: number;
    static DVI4_11025: number;
    static DVI4_22050: number;
    static G729: number;
    static CELLB: number;
    static JPEG: number;
    static NV: number;
    static H261: number;
    static MPV: number;
    static MP2T: number;
    static H263: number;
}

export namespace RTPProfile {
    export const $gtype: GObject.GType<RTPProfile>;
}

export enum RTPProfile {
    UNKNOWN = 0,
    AVP = 1,
    SAVP = 2,
    AVPF = 3,
    SAVPF = 4,
}

export namespace RTPBufferFlags {
    export const $gtype: GObject.GType<RTPBufferFlags>;
}

export enum RTPBufferFlags {
    RETRANSMISSION = 1048576,
    REDUNDANT = 2097152,
    LAST = 268435456,
}

export namespace RTPBufferMapFlags {
    export const $gtype: GObject.GType<RTPBufferMapFlags>;
}

export enum RTPBufferMapFlags {
    SKIP_PADDING = 65536,
    LAST = 16777216,
}

export namespace RTPHeaderExtensionDirection {
    export const $gtype: GObject.GType<RTPHeaderExtensionDirection>;
}

export enum RTPHeaderExtensionDirection {
    INACTIVE = 0,
    SENDONLY = 1,
    RECVONLY = 2,
    SENDRECV = 3,
    INHERITED = 4,
}

export namespace RTPHeaderExtensionFlags {
    export const $gtype: GObject.GType<RTPHeaderExtensionFlags>;
}

export enum RTPHeaderExtensionFlags {
    ONE_BYTE = 1,
    TWO_BYTE = 2,
}
export module RTPBaseAudioPayload {
    export interface ConstructorProperties extends RTPBasePayload.ConstructorProperties {
        [key: string]: any;
        buffer_list: boolean;
        bufferList: boolean;
    }
}
export class RTPBaseAudioPayload extends RTPBasePayload {
    static $gtype: GObject.GType<RTPBaseAudioPayload>;

    constructor(properties?: Partial<RTPBaseAudioPayload.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RTPBaseAudioPayload.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffer_list(): boolean;
    set buffer_list(val: boolean);
    get bufferList(): boolean;
    set bufferList(val: boolean);

    // Fields
    payload: RTPBasePayload;
    priv: RTPBaseAudioPayloadPrivate;
    base_ts: Gst.ClockTime;
    frame_size: number;
    frame_duration: number;
    sample_size: number;

    // Members

    flush(payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn;
    get_adapter(): GstBase.Adapter;
    push(data: Uint8Array | string, timestamp: Gst.ClockTime): Gst.FlowReturn;
    // Conflicted with GstRtp.RTPBasePayload.push
    push(...args: never[]): any;
    set_frame_based(): void;
    set_frame_options(frame_duration: number, frame_size: number): void;
    set_sample_based(): void;
    set_sample_options(sample_size: number): void;
    set_samplebits_options(sample_size: number): void;
}
export module RTPBaseDepayload {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        auto_header_extension: boolean;
        autoHeaderExtension: boolean;
        max_reorder: number;
        maxReorder: number;
        source_info: boolean;
        sourceInfo: boolean;
        stats: Gst.Structure;
    }
}
export abstract class RTPBaseDepayload extends Gst.Element {
    static $gtype: GObject.GType<RTPBaseDepayload>;

    constructor(properties?: Partial<RTPBaseDepayload.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RTPBaseDepayload.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get auto_header_extension(): boolean;
    set auto_header_extension(val: boolean);
    get autoHeaderExtension(): boolean;
    set autoHeaderExtension(val: boolean);
    get max_reorder(): number;
    set max_reorder(val: number);
    get maxReorder(): number;
    set maxReorder(val: number);
    get source_info(): boolean;
    set source_info(val: boolean);
    get sourceInfo(): boolean;
    set sourceInfo(val: boolean);
    get stats(): Gst.Structure;

    // Fields
    sinkpad: Gst.Pad;
    srcpad: Gst.Pad;
    clock_rate: number;
    segment: Gst.Segment;
    need_newsegment: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "add-extension", callback: (_source: this, ext: RTPHeaderExtension) => void): number;
    connect_after(signal: "add-extension", callback: (_source: this, ext: RTPHeaderExtension) => void): number;
    emit(signal: "add-extension", ext: RTPHeaderExtension): void;
    connect(signal: "clear-extensions", callback: (_source: this) => void): number;
    connect_after(signal: "clear-extensions", callback: (_source: this) => void): number;
    emit(signal: "clear-extensions"): void;
    connect(
        signal: "request-extension",
        callback: (_source: this, ext_id: number, ext_uri: string | null) => RTPHeaderExtension | null
    ): number;
    connect_after(
        signal: "request-extension",
        callback: (_source: this, ext_id: number, ext_uri: string | null) => RTPHeaderExtension | null
    ): number;
    emit(signal: "request-extension", ext_id: number, ext_uri: string | null): void;

    // Members

    is_source_info_enabled(): boolean;
    push(out_buf: Gst.Buffer): Gst.FlowReturn;
    push_list(out_list: Gst.BufferList): Gst.FlowReturn;
    set_source_info_enabled(enable: boolean): void;
    vfunc_handle_event(event: Gst.Event): boolean;
    vfunc_packet_lost(event: Gst.Event): boolean;
    vfunc_process(_in: Gst.Buffer): Gst.Buffer;
    vfunc_process_rtp_packet(rtp_buffer: RTPBuffer): Gst.Buffer;
    vfunc_set_caps(caps: Gst.Caps): boolean;
}
export module RTPBasePayload {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
        auto_header_extension: boolean;
        autoHeaderExtension: boolean;
        max_ptime: number;
        maxPtime: number;
        min_ptime: number;
        minPtime: number;
        mtu: number;
        onvif_no_rate_control: boolean;
        onvifNoRateControl: boolean;
        perfect_rtptime: boolean;
        perfectRtptime: boolean;
        pt: number;
        ptime_multiple: number;
        ptimeMultiple: number;
        scale_rtptime: boolean;
        scaleRtptime: boolean;
        seqnum: number;
        seqnum_offset: number;
        seqnumOffset: number;
        source_info: boolean;
        sourceInfo: boolean;
        ssrc: number;
        stats: Gst.Structure;
        timestamp: number;
        timestamp_offset: number;
        timestampOffset: number;
    }
}
export abstract class RTPBasePayload extends Gst.Element {
    static $gtype: GObject.GType<RTPBasePayload>;

    constructor(properties?: Partial<RTPBasePayload.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RTPBasePayload.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get auto_header_extension(): boolean;
    set auto_header_extension(val: boolean);
    get autoHeaderExtension(): boolean;
    set autoHeaderExtension(val: boolean);
    get max_ptime(): number;
    set max_ptime(val: number);
    get maxPtime(): number;
    set maxPtime(val: number);
    get min_ptime(): number;
    set min_ptime(val: number);
    get minPtime(): number;
    set minPtime(val: number);
    get mtu(): number;
    set mtu(val: number);
    get onvif_no_rate_control(): boolean;
    set onvif_no_rate_control(val: boolean);
    get onvifNoRateControl(): boolean;
    set onvifNoRateControl(val: boolean);
    get perfect_rtptime(): boolean;
    set perfect_rtptime(val: boolean);
    get perfectRtptime(): boolean;
    set perfectRtptime(val: boolean);
    get pt(): number;
    set pt(val: number);
    get ptime_multiple(): number;
    set ptime_multiple(val: number);
    get ptimeMultiple(): number;
    set ptimeMultiple(val: number);
    get scale_rtptime(): boolean;
    set scale_rtptime(val: boolean);
    get scaleRtptime(): boolean;
    set scaleRtptime(val: boolean);
    get seqnum(): number;
    get seqnum_offset(): number;
    set seqnum_offset(val: number);
    get seqnumOffset(): number;
    set seqnumOffset(val: number);
    get source_info(): boolean;
    set source_info(val: boolean);
    get sourceInfo(): boolean;
    set sourceInfo(val: boolean);
    get ssrc(): number;
    set ssrc(val: number);
    get stats(): Gst.Structure;
    get timestamp(): number;
    get timestamp_offset(): number;
    set timestamp_offset(val: number);
    get timestampOffset(): number;
    set timestampOffset(val: number);

    // Fields
    element: Gst.Element;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "add-extension", callback: (_source: this, ext: RTPHeaderExtension) => void): number;
    connect_after(signal: "add-extension", callback: (_source: this, ext: RTPHeaderExtension) => void): number;
    emit(signal: "add-extension", ext: RTPHeaderExtension): void;
    connect(signal: "clear-extensions", callback: (_source: this) => void): number;
    connect_after(signal: "clear-extensions", callback: (_source: this) => void): number;
    emit(signal: "clear-extensions"): void;
    connect(
        signal: "request-extension",
        callback: (_source: this, ext_id: number, ext_uri: string) => RTPHeaderExtension | null
    ): number;
    connect_after(
        signal: "request-extension",
        callback: (_source: this, ext_id: number, ext_uri: string) => RTPHeaderExtension | null
    ): number;
    emit(signal: "request-extension", ext_id: number, ext_uri: string): void;

    // Members

    allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    get_source_count(buffer: Gst.Buffer): number;
    is_filled(size: number, duration: Gst.ClockTime): boolean;
    is_source_info_enabled(): boolean;
    push(buffer: Gst.Buffer): Gst.FlowReturn;
    push_list(list: Gst.BufferList): Gst.FlowReturn;
    set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void;
    set_outcaps_structure(s?: Gst.Structure | null): boolean;
    set_source_info_enabled(enable: boolean): void;
    vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps;
    vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean;
    // Conflicted with Gst.Element.vfunc_query
    vfunc_query(...args: never[]): any;
    vfunc_set_caps(caps: Gst.Caps): boolean;
    vfunc_sink_event(event: Gst.Event): boolean;
    vfunc_src_event(event: Gst.Event): boolean;
}
export module RTPHeaderExtension {
    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class RTPHeaderExtension extends Gst.Element {
    static $gtype: GObject.GType<RTPHeaderExtension>;

    constructor(properties?: Partial<RTPHeaderExtension.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RTPHeaderExtension.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_direction(): RTPHeaderExtensionDirection;
    get_id(): number;
    get_max_size(input_meta: Gst.Buffer): number;
    get_sdp_caps_field_name(): string;
    get_supported_flags(): RTPHeaderExtensionFlags;
    get_uri(): string | null;
    read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array | string, buffer: Gst.Buffer): boolean;
    set_attributes_from_caps(caps: Gst.Caps): boolean;
    set_caps_from_attributes(caps: Gst.Caps): boolean;
    set_caps_from_attributes_helper(caps: Gst.Caps, attributes: string): boolean;
    set_direction(direction: RTPHeaderExtensionDirection): void;
    set_id(ext_id: number): void;
    set_non_rtp_sink_caps(caps: Gst.Caps): boolean;
    set_wants_update_non_rtp_src_caps(state: boolean): void;
    update_non_rtp_src_caps(caps: Gst.Caps): boolean;
    wants_update_non_rtp_src_caps(): boolean;
    write(
        input_meta: Gst.Buffer,
        write_flags: RTPHeaderExtensionFlags,
        output: Gst.Buffer,
        data: Uint8Array | string
    ): number;
    vfunc_get_max_size(input_meta: Gst.Buffer): number;
    vfunc_get_supported_flags(): RTPHeaderExtensionFlags;
    vfunc_read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array | string, buffer: Gst.Buffer): boolean;
    vfunc_set_attributes(direction: RTPHeaderExtensionDirection, attributes: string): boolean;
    vfunc_set_caps_from_attributes(caps: Gst.Caps): boolean;
    vfunc_set_non_rtp_sink_caps(caps: Gst.Caps): boolean;
    vfunc_update_non_rtp_src_caps(caps: Gst.Caps): boolean;
    vfunc_write(
        input_meta: Gst.Buffer,
        write_flags: RTPHeaderExtensionFlags,
        output: Gst.Buffer,
        data: Uint8Array | string
    ): number;
    static create_from_uri(uri: string): RTPHeaderExtension | null;
    static set_uri(uri: string): void;
}

export class RTCPBuffer {
    static $gtype: GObject.GType<RTCPBuffer>;

    constructor(copy: RTCPBuffer);

    // Fields
    buffer: Gst.Buffer;

    // Members
    add_packet(type: RTCPType, packet: RTCPPacket): boolean;
    get_first_packet(packet: RTCPPacket): boolean;
    get_packet_count(): number;
    unmap(): boolean;
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
    static new(mtu: number): Gst.Buffer;
    static new_copy_data(data: Uint8Array | string): Gst.Buffer;
    static new_take_data(data: Uint8Array | string): Gst.Buffer;
    static validate(buffer: Gst.Buffer): boolean;
    static validate_data(data: Uint8Array | string): boolean;
    static validate_data_reduced(data: Uint8Array | string): boolean;
    static validate_reduced(buffer: Gst.Buffer): boolean;
}

export class RTCPPacket {
    static $gtype: GObject.GType<RTCPPacket>;

    constructor(copy: RTCPPacket);

    // Fields
    rtcp: RTCPBuffer;
    offset: number;

    // Members
    add_profile_specific_ext(data: Uint8Array | string): boolean;
    add_rb(
        ssrc: number,
        fractionlost: number,
        packetslost: number,
        exthighestseq: number,
        jitter: number,
        lsr: number,
        dlsr: number
    ): boolean;
    app_get_data(): number;
    app_get_data_length(): number;
    app_get_name(): string;
    app_get_ssrc(): number;
    app_get_subtype(): number;
    app_set_data_length(wordlen: number): boolean;
    app_set_name(name: string): void;
    app_set_ssrc(ssrc: number): void;
    app_set_subtype(subtype: number): void;
    bye_add_ssrc(ssrc: number): boolean;
    bye_add_ssrcs(ssrc: number[]): boolean;
    bye_get_nth_ssrc(nth: number): number;
    bye_get_reason(): string | null;
    bye_get_reason_len(): number;
    bye_get_ssrc_count(): number;
    bye_set_reason(reason: string): boolean;
    copy_profile_specific_ext(): [boolean, Uint8Array];
    fb_get_fci(): number;
    fb_get_fci_length(): number;
    fb_get_media_ssrc(): number;
    fb_get_sender_ssrc(): number;
    fb_get_type(): RTCPFBType;
    fb_set_fci_length(wordlen: number): boolean;
    fb_set_media_ssrc(ssrc: number): void;
    fb_set_sender_ssrc(ssrc: number): void;
    fb_set_type(type: RTCPFBType): void;
    get_count(): number;
    get_length(): number;
    get_padding(): boolean;
    get_profile_specific_ext(): [boolean, Uint8Array];
    get_profile_specific_ext_length(): number;
    get_rb(nth: number): [number, number, number, number, number, number, number];
    get_rb_count(): number;
    get_type(): RTCPType;
    move_to_next(): boolean;
    remove(): boolean;
    rr_get_ssrc(): number;
    rr_set_ssrc(ssrc: number): void;
    sdes_add_entry(type: RTCPSDESType, data: Uint8Array | string): boolean;
    sdes_add_item(ssrc: number): boolean;
    sdes_copy_entry(type: RTCPSDESType): [boolean, Uint8Array];
    sdes_first_entry(): boolean;
    sdes_first_item(): boolean;
    sdes_get_entry(type: RTCPSDESType): [boolean, Uint8Array];
    sdes_get_item_count(): number;
    sdes_get_ssrc(): number;
    sdes_next_entry(): boolean;
    sdes_next_item(): boolean;
    set_rb(
        nth: number,
        ssrc: number,
        fractionlost: number,
        packetslost: number,
        exthighestseq: number,
        jitter: number,
        lsr: number,
        dlsr: number
    ): void;
    sr_get_sender_info(): [number, number, number, number, number];
    sr_set_sender_info(ssrc: number, ntptime: number, rtptime: number, packet_count: number, octet_count: number): void;
    xr_first_rb(): boolean;
    xr_get_block_length(): number;
    xr_get_block_type(): RTCPXRType;
    xr_get_dlrr_block(nth: number, ssrc: number, last_rr: number, delay: number): boolean;
    xr_get_prt_by_seq(seq: number, receipt_time: number): boolean;
    xr_get_prt_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number): boolean;
    xr_get_rle_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number, chunk_count: number): boolean;
    xr_get_rle_nth_chunk(nth: number, chunk: number): boolean;
    xr_get_rrt(timestamp: number): boolean;
    xr_get_ssrc(): number;
    xr_get_summary_info(ssrc: number, begin_seq: number, end_seq: number): boolean;
    xr_get_summary_jitter(min_jitter: number, max_jitter: number, mean_jitter: number, dev_jitter: number): boolean;
    xr_get_summary_pkt(lost_packets: number, dup_packets: number): boolean;
    xr_get_summary_ttl(is_ipv4: boolean, min_ttl: number, max_ttl: number, mean_ttl: number, dev_ttl: number): boolean;
    xr_get_voip_burst_metrics(
        burst_density: number,
        gap_density: number,
        burst_duration: number,
        gap_duration: number
    ): boolean;
    xr_get_voip_configuration_params(gmin: number, rx_config: number): boolean;
    xr_get_voip_delay_metrics(roundtrip_delay: number, end_system_delay: number): boolean;
    xr_get_voip_jitter_buffer_params(jb_nominal: number, jb_maximum: number, jb_abs_max: number): boolean;
    xr_get_voip_metrics_ssrc(ssrc: number): boolean;
    xr_get_voip_packet_metrics(loss_rate: number, discard_rate: number): boolean;
    xr_get_voip_quality_metrics(r_factor: number, ext_r_factor: number, mos_lq: number, mos_cq: number): boolean;
    xr_get_voip_signal_metrics(signal_level: number, noise_level: number, rerl: number, gmin: number): boolean;
    xr_next_rb(): boolean;
}

export class RTPBaseAudioPayloadPrivate {
    static $gtype: GObject.GType<RTPBaseAudioPayloadPrivate>;

    constructor(copy: RTPBaseAudioPayloadPrivate);
}

export class RTPBaseDepayloadPrivate {
    static $gtype: GObject.GType<RTPBaseDepayloadPrivate>;

    constructor(copy: RTPBaseDepayloadPrivate);
}

export class RTPBasePayloadPrivate {
    static $gtype: GObject.GType<RTPBasePayloadPrivate>;

    constructor(copy: RTPBasePayloadPrivate);
}

export class RTPBuffer {
    static $gtype: GObject.GType<RTPBuffer>;

    constructor(copy: RTPBuffer);

    // Fields
    buffer: Gst.Buffer;
    state: number;
    data: any[];
    size: number[];

    // Members
    add_extension_onebyte_header(id: number, data: Uint8Array | string): boolean;
    add_extension_twobytes_header(appbits: number, id: number, data: Uint8Array | string): boolean;
    get_csrc(idx: number): number;
    get_csrc_count(): number;
    get_extension(): boolean;
    get_extension_data(): [GLib.Bytes | null, number];
    get_extension_onebyte_header(id: number, nth: number): [boolean, Uint8Array | null];
    get_extension_twobytes_header(id: number, nth: number): [boolean, number, Uint8Array | null];
    get_header_len(): number;
    get_marker(): boolean;
    get_packet_len(): number;
    get_padding(): boolean;
    get_payload_buffer(): Gst.Buffer;
    get_payload(): GLib.Bytes | null;
    get_payload_len(): number;
    get_payload_subbuffer(offset: number, len: number): Gst.Buffer;
    get_payload_type(): number;
    get_seq(): number;
    get_ssrc(): number;
    get_timestamp(): number;
    get_version(): number;
    pad_to(len: number): void;
    remove_extension_data(): void;
    set_csrc(idx: number, csrc: number): void;
    set_extension(extension: boolean): void;
    set_extension_data(bits: number, length: number): boolean;
    set_marker(marker: boolean): void;
    set_packet_len(len: number): void;
    set_padding(padding: boolean): void;
    set_payload_type(payload_type: number): void;
    set_seq(seq: number): void;
    set_ssrc(ssrc: number): void;
    set_timestamp(timestamp: number): void;
    set_version(version: number): void;
    unmap(): void;
    static allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void;
    static calc_header_len(csrc_count: number): number;
    static calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
    static calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
    static compare_seqnum(seqnum1: number, seqnum2: number): number;
    static default_clock_rate(payload_type: number): number;
    static ext_timestamp(exttimestamp: number, timestamp: number): [number, number];
    static get_extension_onebyte_header_from_bytes(
        bytes: GLib.Bytes | Uint8Array,
        bit_pattern: number,
        id: number,
        nth: number
    ): [boolean, Uint8Array];
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
    static new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    static new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    static new_copy_data(data: Uint8Array | string): Gst.Buffer;
    static new_take_data(data: Uint8Array | string): Gst.Buffer;
}

export class RTPPayloadInfo {
    static $gtype: GObject.GType<RTPPayloadInfo>;

    constructor(
        properties?: Partial<{
            payload_type?: number;
            media?: string;
            encoding_name?: string;
            clock_rate?: number;
            encoding_parameters?: string;
            bitrate?: number;
        }>
    );
    constructor(copy: RTPPayloadInfo);

    // Fields
    payload_type: number;
    media: string;
    encoding_name: string;
    clock_rate: number;
    encoding_parameters: string;
    bitrate: number;

    // Members
    static for_name(media: string, encoding_name: string): RTPPayloadInfo | null;
    static for_pt(payload_type: number): RTPPayloadInfo | null;
}

export class RTPSourceMeta {
    static $gtype: GObject.GType<RTPSourceMeta>;

    constructor(copy: RTPSourceMeta);

    // Fields
    meta: Gst.Meta;
    ssrc: number;
    ssrc_valid: boolean;
    csrc: number[];
    csrc_count: number;

    // Members
    append_csrc(csrc: number[]): boolean;
    get_source_count(): number;
    set_ssrc(ssrc?: number | null): boolean;
    static get_info(): Gst.MetaInfo;
}
