/**
 * GstSdp 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GObject from "gobject2";
import * as GLib from "glib2";

export const MIKEY_VERSION: number;
export const SDP_BWTYPE_AS: string;
export const SDP_BWTYPE_CT: string;
export const SDP_BWTYPE_EXT_PREFIX: string;
export const SDP_BWTYPE_RR: string;
export const SDP_BWTYPE_RS: string;
export const SDP_BWTYPE_TIAS: string;
export function sdp_address_is_multicast(nettype: string, addrtype: string, addr: string): boolean;
export function sdp_make_keymgmt(uri: string, base64: string): string;
export function sdp_media_init(): [SDPResult, SDPMedia];
export function sdp_media_new(): [SDPResult, SDPMedia];
export function sdp_media_set_media_from_caps(caps: Gst.Caps): [SDPResult, SDPMedia];
export function sdp_message_as_uri(scheme: string, msg: SDPMessage): string;
export function sdp_message_init(): [SDPResult, SDPMessage];
export function sdp_message_new(): [SDPResult, SDPMessage];
export function sdp_message_new_from_text(text: string): [SDPResult, SDPMessage];
export function sdp_message_parse_buffer(data: Uint8Array | string, msg: SDPMessage): SDPResult;
export function sdp_message_parse_uri(uri: string, msg: SDPMessage): SDPResult;

export namespace MIKEYCacheType {
    export const $gtype: GObject.GType<MIKEYCacheType>;
}

export enum MIKEYCacheType {
    NONE = 0,
    ALWAYS = 1,
    FOR_CSB = 2,
}

export namespace MIKEYEncAlg {
    export const $gtype: GObject.GType<MIKEYEncAlg>;
}

export enum MIKEYEncAlg {
    NULL = 0,
    AES_CM_128 = 1,
    AES_KW_128 = 2,
    AES_GCM_128 = 6,
}

export namespace MIKEYKVType {
    export const $gtype: GObject.GType<MIKEYKVType>;
}

export enum MIKEYKVType {
    NULL = 0,
    SPI = 1,
    INTERVAL = 2,
}

export namespace MIKEYKeyDataType {
    export const $gtype: GObject.GType<MIKEYKeyDataType>;
}

export enum MIKEYKeyDataType {
    TGK = 0,
    TEK = 2,
}

export namespace MIKEYMacAlg {
    export const $gtype: GObject.GType<MIKEYMacAlg>;
}

export enum MIKEYMacAlg {
    NULL = 0,
    HMAC_SHA_1_160 = 1,
}

export namespace MIKEYMapType {
    export const $gtype: GObject.GType<MIKEYMapType>;
}

export enum MIKEYMapType {
    MIKEY_MAP_TYPE_SRTP = 0,
}

export namespace MIKEYPRFFunc {
    export const $gtype: GObject.GType<MIKEYPRFFunc>;
}

export enum MIKEYPRFFunc {
    MIKEY_PRF_MIKEY_1 = 0,
}

export namespace MIKEYPayloadType {
    export const $gtype: GObject.GType<MIKEYPayloadType>;
}

export enum MIKEYPayloadType {
    LAST = 0,
    KEMAC = 1,
    PKE = 2,
    DH = 3,
    SIGN = 4,
    T = 5,
    ID = 6,
    CERT = 7,
    CHASH = 8,
    V = 9,
    SP = 10,
    RAND = 11,
    ERR = 12,
    KEY_DATA = 20,
    GEN_EXT = 21,
}

export namespace MIKEYSecProto {
    export const $gtype: GObject.GType<MIKEYSecProto>;
}

export enum MIKEYSecProto {
    MIKEY_SEC_PROTO_SRTP = 0,
}

export namespace MIKEYSecSRTP {
    export const $gtype: GObject.GType<MIKEYSecSRTP>;
}

export enum MIKEYSecSRTP {
    ENC_ALG = 0,
    ENC_KEY_LEN = 1,
    AUTH_ALG = 2,
    AUTH_KEY_LEN = 3,
    SALT_KEY_LEN = 4,
    PRF = 5,
    KEY_DERIV_RATE = 6,
    SRTP_ENC = 7,
    SRTCP_ENC = 8,
    FEC_ORDER = 9,
    SRTP_AUTH = 10,
    AUTH_TAG_LEN = 11,
    SRTP_PREFIX_LEN = 12,
    AEAD_AUTH_TAG_LEN = 20,
}

export namespace MIKEYTSType {
    export const $gtype: GObject.GType<MIKEYTSType>;
}

export enum MIKEYTSType {
    NTP_UTC = 0,
    NTP = 1,
    COUNTER = 2,
}

export namespace MIKEYType {
    export const $gtype: GObject.GType<MIKEYType>;
}

export enum MIKEYType {
    INVALID = -1,
    PSK_INIT = 0,
    PSK_VERIFY = 1,
    PK_INIT = 2,
    PK_VERIFY = 3,
    DH_INIT = 4,
    DH_RESP = 5,
    ERROR = 6,
}

export namespace SDPResult {
    export const $gtype: GObject.GType<SDPResult>;
}

export enum SDPResult {
    OK = 0,
    EINVAL = -1,
}

export class MIKEYDecryptInfo {
    static $gtype: GObject.GType<MIKEYDecryptInfo>;

    constructor(copy: MIKEYDecryptInfo);
}

export class MIKEYEncryptInfo {
    static $gtype: GObject.GType<MIKEYEncryptInfo>;

    constructor(copy: MIKEYEncryptInfo);
}

export class MIKEYMapSRTP {
    static $gtype: GObject.GType<MIKEYMapSRTP>;

    constructor(
        properties?: Partial<{
            policy?: number;
            ssrc?: number;
            roc?: number;
        }>
    );
    constructor(copy: MIKEYMapSRTP);

    // Fields
    policy: number;
    ssrc: number;
    roc: number;
}

export class MIKEYMessage {
    static $gtype: GObject.GType<MIKEYMessage>;

    constructor();
    constructor(
        properties?: Partial<{
            version?: number;
            type?: MIKEYType;
            V?: boolean;
            prf_func?: MIKEYPRFFunc;
            CSB_id?: number;
            map_type?: MIKEYMapType;
            map_info?: any[];
            payloads?: any[];
        }>
    );
    constructor(copy: MIKEYMessage);

    // Fields
    version: number;
    type: MIKEYType;
    V: boolean;
    prf_func: MIKEYPRFFunc;
    CSB_id: number;
    map_type: MIKEYMapType;
    map_info: any[];
    payloads: any[];

    // Constructors
    static ["new"](): MIKEYMessage;
    static new_from_bytes(bytes: GLib.Bytes | Uint8Array, info: MIKEYDecryptInfo): MIKEYMessage;
    static new_from_caps(caps: Gst.Caps): MIKEYMessage;
    static new_from_data(data: Uint8Array | string, info: MIKEYDecryptInfo): MIKEYMessage;

    // Members
    add_cs_srtp(policy: number, ssrc: number, roc: number): boolean;
    add_payload(payload: MIKEYPayload): boolean;
    add_pke(C: MIKEYCacheType, data: Uint8Array | string): boolean;
    add_rand(rand: Uint8Array | string): boolean;
    add_rand_len(len: number): boolean;
    add_t(type: MIKEYTSType, ts_value: Uint8Array | string): boolean;
    add_t_now_ntp_utc(): boolean;
    base64_encode(): string;
    find_payload(type: MIKEYPayloadType, nth: number): MIKEYPayload | null;
    get_cs_srtp(idx: number): MIKEYMapSRTP | null;
    get_n_cs(): number;
    get_n_payloads(): number;
    get_payload(idx: number): MIKEYPayload | null;
    insert_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
    insert_payload(idx: number, payload: MIKEYPayload): boolean;
    remove_cs_srtp(idx: number): boolean;
    remove_payload(idx: number): boolean;
    replace_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
    replace_payload(idx: number, payload: MIKEYPayload): boolean;
    set_info(
        version: number,
        type: MIKEYType,
        V: boolean,
        prf_func: MIKEYPRFFunc,
        CSB_id: number,
        map_type: MIKEYMapType
    ): boolean;
    to_bytes(info: MIKEYEncryptInfo): GLib.Bytes;
    to_caps(caps: Gst.Caps): boolean;
}

export class MIKEYPayload {
    static $gtype: GObject.GType<MIKEYPayload>;

    constructor(type: MIKEYPayloadType);
    constructor(copy: MIKEYPayload);

    // Fields
    type: MIKEYPayloadType;
    len: number;

    // Constructors
    static ["new"](type: MIKEYPayloadType): MIKEYPayload;

    // Members
    kemac_add_sub(newpay: MIKEYPayload): boolean;
    kemac_get_n_sub(): number;
    kemac_get_sub(idx: number): MIKEYPayload | null;
    kemac_remove_sub(idx: number): boolean;
    kemac_set(enc_alg: MIKEYEncAlg, mac_alg: MIKEYMacAlg): boolean;
    key_data_set_interval(vf_data: Uint8Array | string, vt_data: Uint8Array | string): boolean;
    key_data_set_key(key_type: MIKEYKeyDataType, key_data: Uint8Array | string): boolean;
    key_data_set_salt(salt_data?: Uint8Array | null): boolean;
    key_data_set_spi(spi_data: Uint8Array | string): boolean;
    pke_set(C: MIKEYCacheType, data: Uint8Array | string): boolean;
    rand_set(rand: Uint8Array | string): boolean;
    sp_add_param(type: number, val: Uint8Array | string): boolean;
    sp_get_n_params(): number;
    sp_get_param(idx: number): MIKEYPayloadSPParam | null;
    sp_remove_param(idx: number): boolean;
    sp_set(policy: number, proto: MIKEYSecProto): boolean;
    t_set(type: MIKEYTSType, ts_value: Uint8Array | string): boolean;
}

export class MIKEYPayloadKEMAC {
    static $gtype: GObject.GType<MIKEYPayloadKEMAC>;

    constructor(copy: MIKEYPayloadKEMAC);

    // Fields
    pt: MIKEYPayload;
    enc_alg: MIKEYEncAlg;
    mac_alg: MIKEYMacAlg;
    subpayloads: any[];
}

export class MIKEYPayloadKeyData {
    static $gtype: GObject.GType<MIKEYPayloadKeyData>;

    constructor(copy: MIKEYPayloadKeyData);

    // Fields
    pt: MIKEYPayload;
    key_type: MIKEYKeyDataType;
    key_len: number;
    key_data: number;
    salt_len: number;
    salt_data: number;
    kv_type: MIKEYKVType;
    kv_len: Uint8Array;
    kv_data: Uint8Array;
}

export class MIKEYPayloadPKE {
    static $gtype: GObject.GType<MIKEYPayloadPKE>;

    constructor(copy: MIKEYPayloadPKE);

    // Fields
    pt: MIKEYPayload;
    C: MIKEYCacheType;
    data_len: number;
    data: number;
}

export class MIKEYPayloadRAND {
    static $gtype: GObject.GType<MIKEYPayloadRAND>;

    constructor(copy: MIKEYPayloadRAND);

    // Fields
    pt: MIKEYPayload;
    len: number;
    rand: number;
}

export class MIKEYPayloadSP {
    static $gtype: GObject.GType<MIKEYPayloadSP>;

    constructor(copy: MIKEYPayloadSP);

    // Fields
    pt: MIKEYPayload;
    policy: number;
    proto: MIKEYSecProto;
    params: any[];
}

export class MIKEYPayloadSPParam {
    static $gtype: GObject.GType<MIKEYPayloadSPParam>;

    constructor(
        properties?: Partial<{
            type?: number;
            len?: number;
            val?: number;
        }>
    );
    constructor(copy: MIKEYPayloadSPParam);

    // Fields
    type: number;
    len: number;
    val: number;
}

export class MIKEYPayloadT {
    static $gtype: GObject.GType<MIKEYPayloadT>;

    constructor(copy: MIKEYPayloadT);

    // Fields
    pt: MIKEYPayload;
    type: MIKEYTSType;
    ts_value: number;
}

export class SDPAttribute {
    static $gtype: GObject.GType<SDPAttribute>;

    constructor(
        properties?: Partial<{
            key?: string;
            value?: string;
        }>
    );
    constructor(copy: SDPAttribute);

    // Fields
    key: string;
    value: string;

    // Members
    clear(): SDPResult;
    set(key: string, value?: string | null): SDPResult;
}

export class SDPBandwidth {
    static $gtype: GObject.GType<SDPBandwidth>;

    constructor(
        properties?: Partial<{
            bwtype?: string;
            bandwidth?: number;
        }>
    );
    constructor(copy: SDPBandwidth);

    // Fields
    bwtype: string;
    bandwidth: number;

    // Members
    clear(): SDPResult;
    set(bwtype: string, bandwidth: number): SDPResult;
}

export class SDPConnection {
    static $gtype: GObject.GType<SDPConnection>;

    constructor(
        properties?: Partial<{
            nettype?: string;
            addrtype?: string;
            address?: string;
            ttl?: number;
            addr_number?: number;
        }>
    );
    constructor(copy: SDPConnection);

    // Fields
    nettype: string;
    addrtype: string;
    address: string;
    ttl: number;
    addr_number: number;

    // Members
    clear(): SDPResult;
    set(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
}

export class SDPKey {
    static $gtype: GObject.GType<SDPKey>;

    constructor(
        properties?: Partial<{
            type?: string;
            data?: string;
        }>
    );
    constructor(copy: SDPKey);

    // Fields
    type: string;
    data: string;
}

export class SDPMedia {
    static $gtype: GObject.GType<SDPMedia>;

    constructor(copy: SDPMedia);

    // Fields
    media: string;
    port: number;
    num_ports: number;
    proto: string;
    fmts: any[];
    information: string;
    connections: any[];
    bandwidths: any[];
    key: SDPKey;
    attributes: any[];

    // Members
    add_attribute(key: string, value?: string | null): SDPResult;
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
    add_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
    add_format(format: string): SDPResult;
    as_text(): string;
    attributes_len(): number;
    attributes_to_caps(caps: Gst.Caps): SDPResult;
    bandwidths_len(): number;
    connections_len(): number;
    copy(): [SDPResult, SDPMedia];
    formats_len(): number;
    free(): SDPResult;
    get_attribute(idx: number): SDPAttribute;
    get_attribute_val(key: string): string | null;
    get_attribute_val_n(key: string, nth: number): string | null;
    get_bandwidth(idx: number): SDPBandwidth;
    get_caps_from_media(pt: number): Gst.Caps | null;
    get_connection(idx: number): SDPConnection;
    get_format(idx: number): string;
    get_information(): string;
    get_key(): SDPKey;
    get_media(): string;
    get_num_ports(): number;
    get_port(): number;
    get_proto(): string;
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    insert_connection(idx: number, conn: SDPConnection): SDPResult;
    insert_format(idx: number, format: string): SDPResult;
    parse_keymgmt(): [SDPResult, MIKEYMessage];
    remove_attribute(idx: number): SDPResult;
    remove_bandwidth(idx: number): SDPResult;
    remove_connection(idx: number): SDPResult;
    remove_format(idx: number): SDPResult;
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    replace_connection(idx: number, conn: SDPConnection): SDPResult;
    replace_format(idx: number, format: string): SDPResult;
    set_information(information: string): SDPResult;
    set_key(type: string, data: string): SDPResult;
    set_media(med: string): SDPResult;
    set_port_info(port: number, num_ports: number): SDPResult;
    set_proto(proto: string): SDPResult;
    uninit(): SDPResult;
    static init(): [SDPResult, SDPMedia];
    static new(): [SDPResult, SDPMedia];
    static set_media_from_caps(caps: Gst.Caps): [SDPResult, SDPMedia];
}

export class SDPMessage {
    static $gtype: GObject.GType<SDPMessage>;

    constructor(copy: SDPMessage);

    // Fields
    version: string;
    origin: SDPOrigin;
    session_name: string;
    information: string;
    uri: string;
    emails: any[];
    phones: any[];
    connection: SDPConnection;
    bandwidths: any[];
    times: any[];
    zones: any[];
    key: SDPKey;
    attributes: any[];
    medias: any[];

    // Members
    add_attribute(key: string, value?: string | null): SDPResult;
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
    add_email(email: string): SDPResult;
    add_media(media: SDPMedia): SDPResult;
    add_phone(phone: string): SDPResult;
    add_time(start: string, stop: string, repeat: string[]): SDPResult;
    add_zone(adj_time: string, typed_time: string): SDPResult;
    as_text(): string;
    attributes_len(): number;
    attributes_to_caps(caps: Gst.Caps): SDPResult;
    bandwidths_len(): number;
    copy(): [SDPResult, SDPMessage];
    dump(): SDPResult;
    emails_len(): number;
    free(): SDPResult;
    get_attribute(idx: number): SDPAttribute;
    get_attribute_val(key: string): string | null;
    get_attribute_val_n(key: string, nth: number): string | null;
    get_bandwidth(idx: number): SDPBandwidth;
    get_connection(): SDPConnection;
    get_email(idx: number): string;
    get_information(): string;
    get_key(): SDPKey;
    get_media(idx: number): SDPMedia;
    get_origin(): SDPOrigin;
    get_phone(idx: number): string;
    get_session_name(): string;
    get_time(idx: number): SDPTime;
    get_uri(): string;
    get_version(): string;
    get_zone(idx: number): SDPZone;
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    insert_email(idx: number, email: string): SDPResult;
    insert_phone(idx: number, phone: string): SDPResult;
    insert_time(idx: number, t: SDPTime): SDPResult;
    insert_zone(idx: number, zone: SDPZone): SDPResult;
    medias_len(): number;
    parse_keymgmt(): [SDPResult, MIKEYMessage];
    phones_len(): number;
    remove_attribute(idx: number): SDPResult;
    remove_bandwidth(idx: number): SDPResult;
    remove_email(idx: number): SDPResult;
    remove_phone(idx: number): SDPResult;
    remove_time(idx: number): SDPResult;
    remove_zone(idx: number): SDPResult;
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    replace_email(idx: number, email: string): SDPResult;
    replace_phone(idx: number, phone: string): SDPResult;
    replace_time(idx: number, t: SDPTime): SDPResult;
    replace_zone(idx: number, zone: SDPZone): SDPResult;
    set_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
    set_information(information: string): SDPResult;
    set_key(type: string, data: string): SDPResult;
    set_origin(
        username: string,
        sess_id: string,
        sess_version: string,
        nettype: string,
        addrtype: string,
        addr: string
    ): SDPResult;
    set_session_name(session_name: string): SDPResult;
    set_uri(uri: string): SDPResult;
    set_version(version: string): SDPResult;
    times_len(): number;
    uninit(): SDPResult;
    zones_len(): number;
    static as_uri(scheme: string, msg: SDPMessage): string;
    static init(): [SDPResult, SDPMessage];
    static new(): [SDPResult, SDPMessage];
    static new_from_text(text: string): [SDPResult, SDPMessage];
    static parse_buffer(data: Uint8Array | string, msg: SDPMessage): SDPResult;
    static parse_uri(uri: string, msg: SDPMessage): SDPResult;
}

export class SDPOrigin {
    static $gtype: GObject.GType<SDPOrigin>;

    constructor(
        properties?: Partial<{
            username?: string;
            sess_id?: string;
            sess_version?: string;
            nettype?: string;
            addrtype?: string;
            addr?: string;
        }>
    );
    constructor(copy: SDPOrigin);

    // Fields
    username: string;
    sess_id: string;
    sess_version: string;
    nettype: string;
    addrtype: string;
    addr: string;
}

export class SDPTime {
    static $gtype: GObject.GType<SDPTime>;

    constructor(copy: SDPTime);

    // Fields
    start: string;
    stop: string;
    repeat: any[];

    // Members
    clear(): SDPResult;
    set(start: string, stop: string, repeat: string[]): SDPResult;
}

export class SDPZone {
    static $gtype: GObject.GType<SDPZone>;

    constructor(
        properties?: Partial<{
            time?: string;
            typed_time?: string;
        }>
    );
    constructor(copy: SDPZone);

    // Fields
    time: string;
    typed_time: string;

    // Members
    clear(): SDPResult;
    set(adj_time: string, typed_time: string): SDPResult;
}
