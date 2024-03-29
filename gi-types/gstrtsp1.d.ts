/**
 * GstRtsp 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";
import * as Gst from "gst1";
import * as GLib from "glib2";
import * as GstSdp from "gstsdp1";

export const RTSP_DEFAULT_PORT: number;
export function rtsp_auth_credentials_free(credentials: RTSPAuthCredential): void;
export function rtsp_connection_accept(
    socket: Gio.Socket,
    cancellable?: Gio.Cancellable | null
): [RTSPResult, RTSPConnection | null];
export function rtsp_connection_create(url: RTSPUrl): [RTSPResult, RTSPConnection];
export function rtsp_connection_create_from_socket(
    socket: Gio.Socket,
    ip: string,
    port: number,
    initial_buffer: string
): [RTSPResult, RTSPConnection | null];
export function rtsp_find_header_field(header: string): RTSPHeaderField;
export function rtsp_find_method(method: string): RTSPMethod;
export function rtsp_generate_digest_auth_response(
    algorithm: string | null,
    method: string,
    realm: string,
    username: string,
    password: string,
    uri: string,
    nonce: string
): string | null;
export function rtsp_generate_digest_auth_response_from_md5(
    algorithm: string | null,
    method: string,
    md5: string,
    uri: string,
    nonce: string
): string | null;
export function rtsp_header_allow_multiple(field: RTSPHeaderField): boolean;
export function rtsp_header_as_text(field: RTSPHeaderField): string | null;
export function rtsp_message_new(): [RTSPResult, RTSPMessage];
export function rtsp_message_new_data(channel: number): [RTSPResult, RTSPMessage];
export function rtsp_message_new_request(method: RTSPMethod, uri: string): [RTSPResult, RTSPMessage];
export function rtsp_message_new_response(
    code: RTSPStatusCode,
    reason?: string | null,
    request?: RTSPMessage | null
): [RTSPResult, RTSPMessage];
export function rtsp_method_as_text(method: RTSPMethod): string | null;
export function rtsp_options_as_text(options: RTSPMethod): string;
export function rtsp_options_from_text(options: string): RTSPMethod;
export function rtsp_range_convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
export function rtsp_range_free(range: RTSPTimeRange): void;
export function rtsp_range_get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];
export function rtsp_range_parse(rangestr: string): [RTSPResult, RTSPTimeRange];
export function rtsp_range_to_string(range: RTSPTimeRange): string;
export function rtsp_status_as_text(code: RTSPStatusCode): string;
export function rtsp_strresult(result: RTSPResult): string;
export function rtsp_transport_get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];
export function rtsp_transport_get_mime(trans: RTSPTransMode): [RTSPResult, string];
export function rtsp_transport_init(): [RTSPResult, RTSPTransport];
export function rtsp_transport_new(): [RTSPResult, RTSPTransport];
export function rtsp_transport_parse(str: string): [RTSPResult, RTSPTransport];
export function rtsp_url_parse(urlstr: string): [RTSPResult, RTSPUrl | null];
export function rtsp_version_as_text(version: RTSPVersion): string;
export type RTSPConnectionAcceptCertificateFunc = (
    conn: Gio.TlsConnection,
    peer_cert: Gio.TlsCertificate,
    errors: Gio.TlsCertificateFlags
) => boolean;

export namespace RTSPAuthMethod {
    export const $gtype: GObject.GType<RTSPAuthMethod>;
}

export enum RTSPAuthMethod {
    NONE = 0,
    BASIC = 1,
    DIGEST = 2,
}

export namespace RTSPFamily {
    export const $gtype: GObject.GType<RTSPFamily>;
}

export enum RTSPFamily {
    NONE = 0,
    INET = 1,
    INET6 = 2,
}

export namespace RTSPHeaderField {
    export const $gtype: GObject.GType<RTSPHeaderField>;
}

export enum RTSPHeaderField {
    INVALID = 0,
    ACCEPT = 1,
    ACCEPT_ENCODING = 2,
    ACCEPT_LANGUAGE = 3,
    ALLOW = 4,
    AUTHORIZATION = 5,
    BANDWIDTH = 6,
    BLOCKSIZE = 7,
    CACHE_CONTROL = 8,
    CONFERENCE = 9,
    CONNECTION = 10,
    CONTENT_BASE = 11,
    CONTENT_ENCODING = 12,
    CONTENT_LANGUAGE = 13,
    CONTENT_LENGTH = 14,
    CONTENT_LOCATION = 15,
    CONTENT_TYPE = 16,
    CSEQ = 17,
    DATE = 18,
    EXPIRES = 19,
    FROM = 20,
    IF_MODIFIED_SINCE = 21,
    LAST_MODIFIED = 22,
    PROXY_AUTHENTICATE = 23,
    PROXY_REQUIRE = 24,
    PUBLIC = 25,
    RANGE = 26,
    REFERER = 27,
    REQUIRE = 28,
    RETRY_AFTER = 29,
    RTP_INFO = 30,
    SCALE = 31,
    SESSION = 32,
    SERVER = 33,
    SPEED = 34,
    TRANSPORT = 35,
    UNSUPPORTED = 36,
    USER_AGENT = 37,
    VIA = 38,
    WWW_AUTHENTICATE = 39,
    CLIENT_CHALLENGE = 40,
    REAL_CHALLENGE1 = 41,
    REAL_CHALLENGE2 = 42,
    REAL_CHALLENGE3 = 43,
    SUBSCRIBE = 44,
    ALERT = 45,
    CLIENT_ID = 46,
    COMPANY_ID = 47,
    GUID = 48,
    REGION_DATA = 49,
    MAX_ASM_WIDTH = 50,
    LANGUAGE = 51,
    PLAYER_START_TIME = 52,
    LOCATION = 53,
    ETAG = 54,
    IF_MATCH = 55,
    ACCEPT_CHARSET = 56,
    SUPPORTED = 57,
    VARY = 58,
    X_ACCELERATE_STREAMING = 59,
    X_ACCEPT_AUTHENT = 60,
    X_ACCEPT_PROXY_AUTHENT = 61,
    X_BROADCAST_ID = 62,
    X_BURST_STREAMING = 63,
    X_NOTICE = 64,
    X_PLAYER_LAG_TIME = 65,
    X_PLAYLIST = 66,
    X_PLAYLIST_CHANGE_NOTICE = 67,
    X_PLAYLIST_GEN_ID = 68,
    X_PLAYLIST_SEEK_ID = 69,
    X_PROXY_CLIENT_AGENT = 70,
    X_PROXY_CLIENT_VERB = 71,
    X_RECEDING_PLAYLISTCHANGE = 72,
    X_RTP_INFO = 73,
    X_STARTUPPROFILE = 74,
    TIMESTAMP = 75,
    AUTHENTICATION_INFO = 76,
    HOST = 77,
    PRAGMA = 78,
    X_SERVER_IP_ADDRESS = 79,
    X_SESSIONCOOKIE = 80,
    RTCP_INTERVAL = 81,
    KEYMGMT = 82,
    PIPELINED_REQUESTS = 83,
    MEDIA_PROPERTIES = 84,
    SEEK_STYLE = 85,
    ACCEPT_RANGES = 86,
    FRAMES = 87,
    RATE_CONTROL = 88,
    LAST = 89,
}

export namespace RTSPMsgType {
    export const $gtype: GObject.GType<RTSPMsgType>;
}

export enum RTSPMsgType {
    INVALID = 0,
    REQUEST = 1,
    RESPONSE = 2,
    HTTP_REQUEST = 3,
    HTTP_RESPONSE = 4,
    DATA = 5,
}

export namespace RTSPRangeUnit {
    export const $gtype: GObject.GType<RTSPRangeUnit>;
}

export enum RTSPRangeUnit {
    SMPTE = 0,
    SMPTE_30_DROP = 1,
    SMPTE_25 = 2,
    NPT = 3,
    CLOCK = 4,
}

export namespace RTSPResult {
    export const $gtype: GObject.GType<RTSPResult>;
}

export enum RTSPResult {
    OK = 0,
    ERROR = -1,
    EINVAL = -2,
    EINTR = -3,
    ENOMEM = -4,
    ERESOLV = -5,
    ENOTIMPL = -6,
    ESYS = -7,
    EPARSE = -8,
    EWSASTART = -9,
    EWSAVERSION = -10,
    EEOF = -11,
    ENET = -12,
    ENOTIP = -13,
    ETIMEOUT = -14,
    ETGET = -15,
    ETPOST = -16,
    ELAST = -17,
}

export namespace RTSPState {
    export const $gtype: GObject.GType<RTSPState>;
}

export enum RTSPState {
    INVALID = 0,
    INIT = 1,
    READY = 2,
    SEEKING = 3,
    PLAYING = 4,
    RECORDING = 5,
}

export namespace RTSPStatusCode {
    export const $gtype: GObject.GType<RTSPStatusCode>;
}

export enum RTSPStatusCode {
    INVALID = 0,
    CONTINUE = 100,
    OK = 200,
    CREATED = 201,
    LOW_ON_STORAGE = 250,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    MOVE_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTH_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_ENTITY_TOO_LARGE = 413,
    REQUEST_URI_TOO_LARGE = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    PARAMETER_NOT_UNDERSTOOD = 451,
    CONFERENCE_NOT_FOUND = 452,
    NOT_ENOUGH_BANDWIDTH = 453,
    SESSION_NOT_FOUND = 454,
    METHOD_NOT_VALID_IN_THIS_STATE = 455,
    HEADER_FIELD_NOT_VALID_FOR_RESOURCE = 456,
    INVALID_RANGE = 457,
    PARAMETER_IS_READONLY = 458,
    AGGREGATE_OPERATION_NOT_ALLOWED = 459,
    ONLY_AGGREGATE_OPERATION_ALLOWED = 460,
    UNSUPPORTED_TRANSPORT = 461,
    DESTINATION_UNREACHABLE = 462,
    KEY_MANAGEMENT_FAILURE = 463,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    RTSP_VERSION_NOT_SUPPORTED = 505,
    OPTION_NOT_SUPPORTED = 551,
}

export namespace RTSPTimeType {
    export const $gtype: GObject.GType<RTSPTimeType>;
}

export enum RTSPTimeType {
    SECONDS = 0,
    NOW = 1,
    END = 2,
    FRAMES = 3,
    UTC = 4,
}

export namespace RTSPVersion {
    export const $gtype: GObject.GType<RTSPVersion>;
}

export enum RTSPVersion {
    INVALID = 0,
    "1_0" = 16,
    "1_1" = 17,
    "2_0" = 32,
}

export namespace RTSPEvent {
    export const $gtype: GObject.GType<RTSPEvent>;
}

export enum RTSPEvent {
    READ = 1,
    WRITE = 2,
}

export namespace RTSPLowerTrans {
    export const $gtype: GObject.GType<RTSPLowerTrans>;
}

export enum RTSPLowerTrans {
    UNKNOWN = 0,
    UDP = 1,
    UDP_MCAST = 2,
    TCP = 4,
    HTTP = 16,
    TLS = 32,
}

export namespace RTSPMethod {
    export const $gtype: GObject.GType<RTSPMethod>;
}

export enum RTSPMethod {
    INVALID = 0,
    DESCRIBE = 1,
    ANNOUNCE = 2,
    GET_PARAMETER = 4,
    OPTIONS = 8,
    PAUSE = 16,
    PLAY = 32,
    RECORD = 64,
    REDIRECT = 128,
    SETUP = 256,
    SET_PARAMETER = 512,
    TEARDOWN = 1024,
    GET = 2048,
    POST = 4096,
}

export namespace RTSPProfile {
    export const $gtype: GObject.GType<RTSPProfile>;
}

export enum RTSPProfile {
    UNKNOWN = 0,
    AVP = 1,
    SAVP = 2,
    AVPF = 4,
    SAVPF = 8,
}

export namespace RTSPTransMode {
    export const $gtype: GObject.GType<RTSPTransMode>;
}

export enum RTSPTransMode {
    UNKNOWN = 0,
    RTP = 1,
    RDT = 2,
}

export class RTSPAuthCredential {
    static $gtype: GObject.GType<RTSPAuthCredential>;

    constructor(copy: RTSPAuthCredential);

    // Fields
    scheme: RTSPAuthMethod;
    params: RTSPAuthParam;
    authorization: string;
}

export class RTSPAuthParam {
    static $gtype: GObject.GType<RTSPAuthParam>;

    constructor(
        properties?: Partial<{
            name?: string;
            value?: string;
        }>
    );
    constructor(copy: RTSPAuthParam);

    // Fields
    name: string;
    value: string;

    // Members
    copy(): RTSPAuthParam;
    free(): void;
}

export class RTSPConnection {
    static $gtype: GObject.GType<RTSPConnection>;

    constructor(copy: RTSPConnection);

    // Members
    clear_auth_params(): void;
    close(): RTSPResult;
    connect(timeout: GLib.TimeVal): RTSPResult;
    connect_usec(timeout: number): RTSPResult;
    connect_with_response(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult;
    connect_with_response_usec(timeout: number, response: RTSPMessage): RTSPResult;
    do_tunnel(conn2?: RTSPConnection | null): RTSPResult;
    flush(flush: boolean): RTSPResult;
    free(): RTSPResult;
    get_ignore_x_server_reply(): boolean;
    get_ip(): string;
    get_read_socket(): Gio.Socket | null;
    get_remember_session_id(): boolean;
    get_tls(): Gio.TlsConnection;
    get_tls_database(): Gio.TlsDatabase | null;
    get_tls_interaction(): Gio.TlsInteraction | null;
    get_tls_validation_flags(): Gio.TlsCertificateFlags;
    get_tunnelid(): string | null;
    get_url(): RTSPUrl;
    get_write_socket(): Gio.Socket | null;
    is_tunneled(): boolean;
    next_timeout(timeout: GLib.TimeVal): RTSPResult;
    next_timeout_usec(): number;
    poll(events: RTSPEvent, timeout: GLib.TimeVal): [RTSPResult, RTSPEvent];
    poll_usec(events: RTSPEvent, timeout: number): [RTSPResult, RTSPEvent];
    read(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;
    read_usec(data: Uint8Array | string, timeout: number): RTSPResult;
    receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
    receive_usec(message: RTSPMessage, timeout: number): RTSPResult;
    reset_timeout(): RTSPResult;
    send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
    send_messages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult;
    send_messages_usec(messages: RTSPMessage[], timeout: number): RTSPResult;
    send_usec(message: RTSPMessage, timeout: number): RTSPResult;
    set_accept_certificate_func(func: RTSPConnectionAcceptCertificateFunc): void;
    set_auth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult;
    set_auth_param(param: string, value: string): void;
    set_content_length_limit(limit: number): void;
    set_http_mode(enable: boolean): void;
    set_ignore_x_server_reply(ignore: boolean): void;
    set_ip(ip: string): void;
    set_proxy(host: string, port: number): RTSPResult;
    set_qos_dscp(qos_dscp: number): RTSPResult;
    set_remember_session_id(remember: boolean): void;
    set_tls_database(database?: Gio.TlsDatabase | null): void;
    set_tls_interaction(interaction?: Gio.TlsInteraction | null): void;
    set_tls_validation_flags(flags: Gio.TlsCertificateFlags): boolean;
    set_tunneled(tunneled: boolean): void;
    write(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;
    write_usec(data: Uint8Array | string, timeout: number): RTSPResult;
    static accept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): [RTSPResult, RTSPConnection | null];
    static create(url: RTSPUrl): [RTSPResult, RTSPConnection];
    static create_from_socket(
        socket: Gio.Socket,
        ip: string,
        port: number,
        initial_buffer: string
    ): [RTSPResult, RTSPConnection | null];
}

export class RTSPMessage {
    static $gtype: GObject.GType<RTSPMessage>;

    constructor(copy: RTSPMessage);

    // Fields
    type: RTSPMsgType;

    // Members
    add_header(field: RTSPHeaderField, value: string): RTSPResult;
    add_header_by_name(header: string, value: string): RTSPResult;
    append_headers(str: GLib.String): RTSPResult;
    copy(): [RTSPResult, RTSPMessage | null];
    dump(): RTSPResult;
    free(): RTSPResult;
    get_body(): [RTSPResult, Uint8Array];
    get_body_buffer(): [RTSPResult, Gst.Buffer];
    get_header(field: RTSPHeaderField, indx: number): [RTSPResult, string];
    get_header_by_name(header: string, index: number): [RTSPResult, string];
    get_type(): RTSPMsgType;
    has_body_buffer(): boolean;
    init(): RTSPResult;
    init_data(channel: number): RTSPResult;
    init_request(method: RTSPMethod, uri: string): RTSPResult;
    init_response(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): RTSPResult;
    parse_auth_credentials(field: RTSPHeaderField): RTSPAuthCredential[];
    parse_data(): [RTSPResult, number];
    parse_request(): [RTSPResult, RTSPMethod | null, string, RTSPVersion | null];
    parse_response(): [RTSPResult, RTSPStatusCode | null, string, RTSPVersion | null];
    remove_header(field: RTSPHeaderField, indx: number): RTSPResult;
    remove_header_by_name(header: string, index: number): RTSPResult;
    set_body(data: Uint8Array | string): RTSPResult;
    set_body_buffer(buffer: Gst.Buffer): RTSPResult;
    steal_body(): [RTSPResult, Uint8Array];
    steal_body_buffer(): [RTSPResult, Gst.Buffer];
    take_body(data: Uint8Array | string): RTSPResult;
    take_body_buffer(buffer: Gst.Buffer): RTSPResult;
    take_header(field: RTSPHeaderField, value: string): RTSPResult;
    take_header_by_name(header: string, value: string): RTSPResult;
    unset(): RTSPResult;
}

export class RTSPRange {
    static $gtype: GObject.GType<RTSPRange>;

    constructor(
        properties?: Partial<{
            min?: number;
            max?: number;
        }>
    );
    constructor(copy: RTSPRange);

    // Fields
    min: number;
    max: number;

    // Members
    static convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
    static free(range: RTSPTimeRange): void;
    static get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];
    static parse(rangestr: string): [RTSPResult, RTSPTimeRange];
    static to_string(range: RTSPTimeRange): string;
}

export class RTSPTime {
    static $gtype: GObject.GType<RTSPTime>;

    constructor(copy: RTSPTime);

    // Fields
    type: RTSPTimeType;
    seconds: number;
}

export class RTSPTime2 {
    static $gtype: GObject.GType<RTSPTime2>;

    constructor(
        properties?: Partial<{
            frames?: number;
            year?: number;
            month?: number;
            day?: number;
        }>
    );
    constructor(copy: RTSPTime2);

    // Fields
    frames: number;
    year: number;
    month: number;
    day: number;
}

export class RTSPTimeRange {
    static $gtype: GObject.GType<RTSPTimeRange>;

    constructor(copy: RTSPTimeRange);

    // Fields
    unit: RTSPRangeUnit;
    min: RTSPTime;
    max: RTSPTime;
    min2: RTSPTime2;
    max2: RTSPTime2;
}

export class RTSPTransport {
    static $gtype: GObject.GType<RTSPTransport>;

    constructor(copy: RTSPTransport);

    // Fields
    trans: RTSPTransMode;
    profile: RTSPProfile;
    lower_transport: RTSPLowerTrans;
    destination: string;
    source: string;
    layers: number;
    mode_play: boolean;
    mode_record: boolean;
    append: boolean;
    interleaved: RTSPRange;
    ttl: number;
    port: RTSPRange;
    client_port: RTSPRange;
    server_port: RTSPRange;
    ssrc: number;

    // Members
    as_text(): string | null;
    free(): RTSPResult;
    get_media_type(): [RTSPResult, string];
    static get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];
    static get_mime(trans: RTSPTransMode): [RTSPResult, string];
    static init(): [RTSPResult, RTSPTransport];
    static new(): [RTSPResult, RTSPTransport];
    static parse(str: string): [RTSPResult, RTSPTransport];
}

export class RTSPUrl {
    static $gtype: GObject.GType<RTSPUrl>;

    constructor(copy: RTSPUrl);

    // Fields
    transports: RTSPLowerTrans;
    family: RTSPFamily;
    user: string;
    passwd: string;
    host: string;
    port: number;
    abspath: string;
    query: string;

    // Members
    copy(): RTSPUrl;
    decode_path_components(): string[];
    free(): void;
    get_port(): [RTSPResult, number];
    get_request_uri(): string;
    get_request_uri_with_control(control_path: string): string;
    set_port(port: number): RTSPResult;
    static parse(urlstr: string): [RTSPResult, RTSPUrl | null];
}

export class RTSPWatch {
    static $gtype: GObject.GType<RTSPWatch>;

    constructor(copy: RTSPWatch);

    // Members
    attach(context?: GLib.MainContext | null): number;
    get_send_backlog(): [number, number];
    reset(): void;
    send_message(message: RTSPMessage): [RTSPResult, number];
    send_messages(messages: RTSPMessage[]): [RTSPResult, number];
    set_flushing(flushing: boolean): void;
    set_send_backlog(bytes: number, messages: number): void;
    unref(): void;
    wait_backlog(timeout: GLib.TimeVal): RTSPResult;
    wait_backlog_usec(timeout: number): RTSPResult;
    write_data(data: Uint8Array | string): [RTSPResult, number];
}

export class RTSPWatchFuncs {
    static $gtype: GObject.GType<RTSPWatchFuncs>;

    constructor(copy: RTSPWatchFuncs);
}

export interface RTSPExtensionNamespace {
    $gtype: GObject.GType<RTSPExtension>;
    prototype: RTSPExtensionPrototype;
}
export type RTSPExtension = RTSPExtensionPrototype;
export interface RTSPExtensionPrototype extends GObject.Object {
    // Members

    after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
    before_send(req: RTSPMessage): RTSPResult;
    configure_stream(caps: Gst.Caps): boolean;
    detect_server(resp: RTSPMessage): boolean;
    get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;
    parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;
    receive_request(req: RTSPMessage): RTSPResult;
    send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
    setup_media(media: GstSdp.SDPMedia): RTSPResult;
    stream_select(url: RTSPUrl): RTSPResult;
    vfunc_after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
    vfunc_before_send(req: RTSPMessage): RTSPResult;
    vfunc_configure_stream(caps: Gst.Caps): boolean;
    vfunc_detect_server(resp: RTSPMessage): boolean;
    vfunc_get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;
    vfunc_parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;
    vfunc_receive_request(req: RTSPMessage): RTSPResult;
    vfunc_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
    vfunc_setup_media(media: GstSdp.SDPMedia): RTSPResult;
    vfunc_stream_select(url: RTSPUrl): RTSPResult;
}

export const RTSPExtension: RTSPExtensionNamespace;
