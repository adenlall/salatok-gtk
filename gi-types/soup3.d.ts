/**
 * Soup 3.0
 *
 * Generated from 3.4.4
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";
import * as GLib from "glib2";

export const COOKIE_MAX_AGE_ONE_DAY: number;
export const COOKIE_MAX_AGE_ONE_HOUR: number;
export const COOKIE_MAX_AGE_ONE_WEEK: number;
export const COOKIE_MAX_AGE_ONE_YEAR: number;
export const FORM_MIME_TYPE_MULTIPART: string;
export const FORM_MIME_TYPE_URLENCODED: string;
export const HSTS_POLICY_MAX_AGE_PAST: number;
export const HTTP_URI_FLAGS: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_MIN_REQUIRED: number;
export function check_version(major: number, minor: number, micro: number): boolean;
export function cookie_parse(header: string, origin?: GLib.Uri | null): Cookie | null;
export function cookies_from_request(msg: Message): Cookie[];
export function cookies_from_response(msg: Message): Cookie[];
export function cookies_to_cookie_header(cookies: Cookie[]): string;
export function cookies_to_request(cookies: Cookie[], msg: Message): void;
export function cookies_to_response(cookies: Cookie[], msg: Message): void;
export function date_time_new_from_http_string(date_string: string): GLib.DateTime | null;
export function date_time_to_string(date: GLib.DateTime, format: DateFormat): string;
export function form_decode(encoded_form: string): GLib.HashTable<string, string>;
export function form_decode_multipart(
    multipart: Multipart,
    file_control_name: string | null
): [GLib.HashTable<string, string> | null, string, string, GLib.Bytes | null];
export function form_encode_datalist(form_data_set: GLib.Data): string;
export function form_encode_hash(form_data_set: { [key: string]: any } | GLib.HashTable<string, string>): string;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function header_contains(header: string, token: string): boolean;
export function header_free_param_list(param_list: { [key: string]: any } | GLib.HashTable<string, string>): void;
export function header_g_string_append_param(string: GLib.String, name: string, value?: string | null): void;
export function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void;
export function header_parse_list(header: string): string[];
export function header_parse_param_list(header: string): GLib.HashTable<string, string>;
export function header_parse_param_list_strict(header: string): GLib.HashTable<string, string> | null;
export function header_parse_quality_list(header: string): [string[], string[] | null];
export function header_parse_semi_param_list(header: string): GLib.HashTable<string, string>;
export function header_parse_semi_param_list_strict(header: string): GLib.HashTable<string, string> | null;
export function headers_parse(str: string, len: number, dest: MessageHeaders): boolean;
export function headers_parse_request(
    str: string,
    len: number,
    req_headers: MessageHeaders
): [number, string, string, HTTPVersion | null];
export function headers_parse_response(
    str: string,
    len: number,
    headers: MessageHeaders
): [boolean, HTTPVersion | null, number, string];
export function headers_parse_status_line(status_line: string): [boolean, HTTPVersion | null, number, string];
export function message_headers_iter_init(hdrs: MessageHeaders): MessageHeadersIter;
export function session_error_quark(): GLib.Quark;
export function status_get_phrase(status_code: number): string;
export function tld_domain_is_public_suffix(domain: string): boolean;
export function tld_error_quark(): GLib.Quark;
export function tld_get_base_domain(hostname: string): string;
export function uri_decode_data_uri(uri: string): [GLib.Bytes, string];
export function uri_equal(uri1: GLib.Uri, uri2: GLib.Uri): boolean;
export function websocket_client_prepare_handshake(
    msg: Message,
    origin?: string | null,
    protocols?: string[] | null,
    supported_extensions?: GObject.TypeClass[] | null
): void;
export function websocket_client_verify_handshake(
    msg: Message,
    supported_extensions?: GObject.TypeClass[] | null
): [boolean, WebsocketExtension[] | null];
export function websocket_error_quark(): GLib.Quark;
export function websocket_server_check_handshake(
    msg: ServerMessage,
    origin?: string | null,
    protocols?: string[] | null,
    supported_extensions?: GObject.TypeClass[] | null
): boolean;
export function websocket_server_process_handshake(
    msg: ServerMessage,
    expected_origin?: string | null,
    protocols?: string[] | null,
    supported_extensions?: GObject.TypeClass[] | null
): [boolean, WebsocketExtension[] | null];
export type AuthDomainBasicAuthCallback = (
    domain: AuthDomainBasic,
    msg: ServerMessage,
    username: string,
    password: string
) => boolean;
export type AuthDomainDigestAuthCallback = (
    domain: AuthDomainDigest,
    msg: ServerMessage,
    username: string
) => string | null;
export type AuthDomainFilter = (domain: AuthDomain, msg: ServerMessage) => boolean;
export type AuthDomainGenericAuthCallback = (domain: AuthDomain, msg: ServerMessage, username: string) => boolean;
export type LoggerFilter = (logger: Logger, msg: Message) => LoggerLogLevel;
export type LoggerPrinter = (logger: Logger, level: LoggerLogLevel, direction: number, data: string) => void;
export type MessageHeadersForeachFunc = (name: string, value: string) => void;
export type ServerCallback = (
    server: Server,
    msg: ServerMessage,
    path: string,
    query?: GLib.HashTable<string, string> | null
) => void;
export type ServerWebsocketCallback = (
    server: Server,
    msg: ServerMessage,
    path: string,
    connection: WebsocketConnection
) => void;

export namespace CacheType {
    export const $gtype: GObject.GType<CacheType>;
}

export enum CacheType {
    SINGLE_USER = 0,
    SHARED = 1,
}

export namespace CookieJarAcceptPolicy {
    export const $gtype: GObject.GType<CookieJarAcceptPolicy>;
}

export enum CookieJarAcceptPolicy {
    ALWAYS = 0,
    NEVER = 1,
    NO_THIRD_PARTY = 2,
    GRANDFATHERED_THIRD_PARTY = 3,
}

export namespace DateFormat {
    export const $gtype: GObject.GType<DateFormat>;
}

export enum DateFormat {
    HTTP = 1,
    COOKIE = 2,
}

export namespace Encoding {
    export const $gtype: GObject.GType<Encoding>;
}

export enum Encoding {
    UNRECOGNIZED = 0,
    NONE = 1,
    CONTENT_LENGTH = 2,
    EOF = 3,
    CHUNKED = 4,
    BYTERANGES = 5,
}

export namespace HTTPVersion {
    export const $gtype: GObject.GType<HTTPVersion>;
}

export enum HTTPVersion {
    HTTP_1_0 = 0,
    HTTP_1_1 = 1,
    HTTP_2_0 = 2,
}

export namespace LoggerLogLevel {
    export const $gtype: GObject.GType<LoggerLogLevel>;
}

export enum LoggerLogLevel {
    NONE = 0,
    MINIMAL = 1,
    HEADERS = 2,
    BODY = 3,
}

export namespace MemoryUse {
    export const $gtype: GObject.GType<MemoryUse>;
}

export enum MemoryUse {
    STATIC = 0,
    TAKE = 1,
    COPY = 2,
}

export namespace MessageHeadersType {
    export const $gtype: GObject.GType<MessageHeadersType>;
}

export enum MessageHeadersType {
    REQUEST = 0,
    RESPONSE = 1,
    MULTIPART = 2,
}

export namespace MessagePriority {
    export const $gtype: GObject.GType<MessagePriority>;
}

export enum MessagePriority {
    VERY_LOW = 0,
    LOW = 1,
    NORMAL = 2,
    HIGH = 3,
    VERY_HIGH = 4,
}

export namespace SameSitePolicy {
    export const $gtype: GObject.GType<SameSitePolicy>;
}

export enum SameSitePolicy {
    NONE = 0,
    LAX = 1,
    STRICT = 2,
}

export class SessionError extends GLib.Error {
    static $gtype: GObject.GType<SessionError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SessionError);

    // Fields
    static PARSING: number;
    static ENCODING: number;
    static TOO_MANY_REDIRECTS: number;
    static TOO_MANY_RESTARTS: number;
    static REDIRECT_NO_LOCATION: number;
    static REDIRECT_BAD_URI: number;
    static MESSAGE_ALREADY_IN_QUEUE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Status {
    export const $gtype: GObject.GType<Status>;
}

export enum Status {
    NONE = 0,
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    MOVED_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    NOT_APPEARING_IN_THIS_PROTOCOL = 306,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    PROXY_UNAUTHORIZED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_ENTITY_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    INVALID_RANGE = 416,
    EXPECTATION_FAILED = 417,
    MISDIRECTED_REQUEST = 421,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    INSUFFICIENT_STORAGE = 507,
    NOT_EXTENDED = 510,
}

export class TLDError extends GLib.Error {
    static $gtype: GObject.GType<TLDError>;

    constructor(options: { message: string; code: number });
    constructor(copy: TLDError);

    // Fields
    static INVALID_HOSTNAME: number;
    static IS_IP_ADDRESS: number;
    static NOT_ENOUGH_DOMAINS: number;
    static NO_BASE_DOMAIN: number;
    static NO_PSL_DATA: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace URIComponent {
    export const $gtype: GObject.GType<URIComponent>;
}

export enum URIComponent {
    NONE = 0,
    SCHEME = 1,
    USER = 2,
    PASSWORD = 3,
    AUTH_PARAMS = 4,
    HOST = 5,
    PORT = 6,
    PATH = 7,
    QUERY = 8,
    FRAGMENT = 9,
}

export namespace WebsocketCloseCode {
    export const $gtype: GObject.GType<WebsocketCloseCode>;
}

export enum WebsocketCloseCode {
    NORMAL = 1000,
    GOING_AWAY = 1001,
    PROTOCOL_ERROR = 1002,
    UNSUPPORTED_DATA = 1003,
    NO_STATUS = 1005,
    ABNORMAL = 1006,
    BAD_DATA = 1007,
    POLICY_VIOLATION = 1008,
    TOO_BIG = 1009,
    NO_EXTENSION = 1010,
    SERVER_ERROR = 1011,
    TLS_HANDSHAKE = 1015,
}

export namespace WebsocketConnectionType {
    export const $gtype: GObject.GType<WebsocketConnectionType>;
}

export enum WebsocketConnectionType {
    UNKNOWN = 0,
    CLIENT = 1,
    SERVER = 2,
}

export namespace WebsocketDataType {
    export const $gtype: GObject.GType<WebsocketDataType>;
}

export enum WebsocketDataType {
    TEXT = 1,
    BINARY = 2,
}

export class WebsocketError extends GLib.Error {
    static $gtype: GObject.GType<WebsocketError>;

    constructor(options: { message: string; code: number });
    constructor(copy: WebsocketError);

    // Fields
    static FAILED: number;
    static NOT_WEBSOCKET: number;
    static BAD_HANDSHAKE: number;
    static BAD_ORIGIN: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace WebsocketState {
    export const $gtype: GObject.GType<WebsocketState>;
}

export enum WebsocketState {
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3,
}

export namespace Cacheability {
    export const $gtype: GObject.GType<Cacheability>;
}

export enum Cacheability {
    CACHEABLE = 1,
    UNCACHEABLE = 2,
    INVALIDATES = 4,
    VALIDATES = 8,
}

export namespace Expectation {
    export const $gtype: GObject.GType<Expectation>;
}

export enum Expectation {
    UNRECOGNIZED = 1,
    CONTINUE = 2,
}

export namespace MessageFlags {
    export const $gtype: GObject.GType<MessageFlags>;
}

export enum MessageFlags {
    NO_REDIRECT = 2,
    NEW_CONNECTION = 4,
    IDEMPOTENT = 8,
    DO_NOT_USE_AUTH_CACHE = 16,
    COLLECT_METRICS = 32,
}

export namespace ServerListenOptions {
    export const $gtype: GObject.GType<ServerListenOptions>;
}

export enum ServerListenOptions {
    HTTPS = 1,
    IPV4_ONLY = 2,
    IPV6_ONLY = 4,
}
export module Auth {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        authority: string;
        is_authenticated: boolean;
        isAuthenticated: boolean;
        is_cancelled: boolean;
        isCancelled: boolean;
        is_for_proxy: boolean;
        isForProxy: boolean;
        realm: string;
        scheme_name: string;
        schemeName: string;
    }
}
export abstract class Auth extends GObject.Object {
    static $gtype: GObject.GType<Auth>;

    constructor(properties?: Partial<Auth.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Auth.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get authority(): string;
    set authority(val: string);
    get is_authenticated(): boolean;
    get isAuthenticated(): boolean;
    get is_cancelled(): boolean;
    get isCancelled(): boolean;
    get is_for_proxy(): boolean;
    set is_for_proxy(val: boolean);
    get isForProxy(): boolean;
    set isForProxy(val: boolean);
    get realm(): string;
    set realm(val: string);
    get scheme_name(): string;
    get schemeName(): string;

    // Constructors

    static ["new"](type: GObject.GType, msg: Message, auth_header: string): Auth;

    // Members

    authenticate(username: string, password: string): void;
    can_authenticate(): boolean;
    cancel(): void;
    get_authority(): string;
    get_authorization(msg: Message): string;
    get_info(): string;
    get_protection_space(source_uri: GLib.Uri): string[];
    get_realm(): string;
    get_scheme_name(): string;
    is_ready(msg: Message): boolean;
    update(msg: Message, auth_header: string): boolean;
    vfunc_authenticate(username: string, password: string): void;
    vfunc_can_authenticate(): boolean;
    vfunc_get_authorization(msg: Message): string;
    vfunc_get_protection_space(source_uri: GLib.Uri): string[];
    vfunc_is_authenticated(): boolean;
    vfunc_is_ready(msg: Message): boolean;
    vfunc_update(msg: Message, auth_header: { [key: string]: any } | GLib.HashTable<any, any>): boolean;
}
export module AuthBasic {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthBasic extends Auth {
    static $gtype: GObject.GType<AuthBasic>;

    constructor(properties?: Partial<AuthBasic.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthBasic.ConstructorProperties>, ...args: any[]): void;
}
export module AuthDigest {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthDigest extends Auth {
    static $gtype: GObject.GType<AuthDigest>;

    constructor(properties?: Partial<AuthDigest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDigest.ConstructorProperties>, ...args: any[]): void;
}
export module AuthDomain {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filter: AuthDomainFilter;
        filter_data: any;
        filterData: any;
        generic_auth_callback: AuthDomainGenericAuthCallback;
        genericAuthCallback: AuthDomainGenericAuthCallback;
        generic_auth_data: any;
        genericAuthData: any;
        proxy: boolean;
        realm: string;
    }
}
export abstract class AuthDomain extends GObject.Object {
    static $gtype: GObject.GType<AuthDomain>;

    constructor(properties?: Partial<AuthDomain.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDomain.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get filter(): AuthDomainFilter;
    set filter(val: AuthDomainFilter);
    get filter_data(): any;
    set filter_data(val: any);
    get filterData(): any;
    set filterData(val: any);
    get generic_auth_callback(): AuthDomainGenericAuthCallback;
    set generic_auth_callback(val: AuthDomainGenericAuthCallback);
    get genericAuthCallback(): AuthDomainGenericAuthCallback;
    set genericAuthCallback(val: AuthDomainGenericAuthCallback);
    get generic_auth_data(): any;
    set generic_auth_data(val: any);
    get genericAuthData(): any;
    set genericAuthData(val: any);
    get proxy(): boolean;
    get realm(): string;

    // Members

    accepts(msg: ServerMessage): string | null;
    add_path(path: string): void;
    challenge(msg: ServerMessage): void;
    check_password(msg: ServerMessage, username: string, password: string): boolean;
    covers(msg: ServerMessage): boolean;
    get_realm(): string;
    remove_path(path: string): void;
    set_filter(filter: AuthDomainFilter): void;
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void;
    vfunc_accepts(msg: ServerMessage, header: string): string;
    vfunc_challenge(msg: ServerMessage): string;
    vfunc_check_password(msg: ServerMessage, username: string, password: string): boolean;
}
export module AuthDomainBasic {
    export interface ConstructorProperties extends AuthDomain.ConstructorProperties {
        [key: string]: any;
        auth_callback: AuthDomainBasicAuthCallback;
        authCallback: AuthDomainBasicAuthCallback;
        auth_data: any;
        authData: any;
    }
}
export class AuthDomainBasic extends AuthDomain {
    static $gtype: GObject.GType<AuthDomainBasic>;

    constructor(properties?: Partial<AuthDomainBasic.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDomainBasic.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get auth_callback(): AuthDomainBasicAuthCallback;
    set auth_callback(val: AuthDomainBasicAuthCallback);
    get authCallback(): AuthDomainBasicAuthCallback;
    set authCallback(val: AuthDomainBasicAuthCallback);
    get auth_data(): any;
    set auth_data(val: any);
    get authData(): any;
    set authData(val: any);

    // Members

    set_auth_callback(callback: AuthDomainBasicAuthCallback): void;
}
export module AuthDomainDigest {
    export interface ConstructorProperties extends AuthDomain.ConstructorProperties {
        [key: string]: any;
        auth_callback: AuthDomainDigestAuthCallback;
        authCallback: AuthDomainDigestAuthCallback;
        auth_data: any;
        authData: any;
    }
}
export class AuthDomainDigest extends AuthDomain {
    static $gtype: GObject.GType<AuthDomainDigest>;

    constructor(properties?: Partial<AuthDomainDigest.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthDomainDigest.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get auth_callback(): AuthDomainDigestAuthCallback;
    set auth_callback(val: AuthDomainDigestAuthCallback);
    get authCallback(): AuthDomainDigestAuthCallback;
    set authCallback(val: AuthDomainDigestAuthCallback);
    get auth_data(): any;
    set auth_data(val: any);
    get authData(): any;
    set authData(val: any);

    // Members

    set_auth_callback(callback: AuthDomainDigestAuthCallback): void;
    static encode_password(username: string, realm: string, password: string): string;
}
export module AuthManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthManager extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<AuthManager>;

    constructor(properties?: Partial<AuthManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthManager.ConstructorProperties>, ...args: any[]): void;

    // Members

    clear_cached_credentials(): void;
    use_auth(uri: GLib.Uri, auth: Auth): void;
}
export module AuthNTLM {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthNTLM extends Auth {
    static $gtype: GObject.GType<AuthNTLM>;

    constructor(properties?: Partial<AuthNTLM.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthNTLM.ConstructorProperties>, ...args: any[]): void;
}
export module AuthNegotiate {
    export interface ConstructorProperties extends Auth.ConstructorProperties {
        [key: string]: any;
    }
}
export class AuthNegotiate extends Auth {
    static $gtype: GObject.GType<AuthNegotiate>;

    constructor(properties?: Partial<AuthNegotiate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AuthNegotiate.ConstructorProperties>, ...args: any[]): void;

    // Members

    static supported(): boolean;
}
export module Cache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cache_dir: string;
        cacheDir: string;
        cache_type: CacheType;
        cacheType: CacheType;
    }
}
export class Cache extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<Cache>;

    constructor(properties?: Partial<Cache.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Cache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get cache_dir(): string;
    get cacheDir(): string;
    get cache_type(): CacheType;
    get cacheType(): CacheType;

    // Constructors

    static ["new"](cache_dir: string | null, cache_type: CacheType): Cache;

    // Members

    clear(): void;
    dump(): void;
    flush(): void;
    get_max_size(): number;
    load(): void;
    set_max_size(max_size: number): void;
    vfunc_get_cacheability(msg: Message): Cacheability;
}
export module ContentDecoder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContentDecoder extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<ContentDecoder>;

    constructor(properties?: Partial<ContentDecoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentDecoder.ConstructorProperties>, ...args: any[]): void;
}
export module ContentSniffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContentSniffer extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<ContentSniffer>;

    constructor(properties?: Partial<ContentSniffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContentSniffer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ContentSniffer;

    // Members

    sniff(msg: Message, buffer: GLib.Bytes | Uint8Array): [string, GLib.HashTable<string, string> | null];
}
export module CookieJar {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accept_policy: CookieJarAcceptPolicy;
        acceptPolicy: CookieJarAcceptPolicy;
        read_only: boolean;
        readOnly: boolean;
    }
}
export class CookieJar extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<CookieJar>;

    constructor(properties?: Partial<CookieJar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CookieJar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accept_policy(): CookieJarAcceptPolicy;
    set accept_policy(val: CookieJarAcceptPolicy);
    get acceptPolicy(): CookieJarAcceptPolicy;
    set acceptPolicy(val: CookieJarAcceptPolicy);
    get read_only(): boolean;
    get readOnly(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this, old_cookie: Cookie, new_cookie: Cookie) => void): number;
    connect_after(signal: "changed", callback: (_source: this, old_cookie: Cookie, new_cookie: Cookie) => void): number;
    emit(signal: "changed", old_cookie: Cookie, new_cookie: Cookie): void;

    // Constructors

    static ["new"](): CookieJar;

    // Members

    add_cookie(cookie: Cookie): void;
    add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void;
    add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void;
    all_cookies(): Cookie[];
    delete_cookie(cookie: Cookie): void;
    get_accept_policy(): CookieJarAcceptPolicy;
    get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[];
    get_cookie_list_with_same_site_info(
        uri: GLib.Uri,
        top_level: GLib.Uri | null,
        site_for_cookies: GLib.Uri | null,
        for_http: boolean,
        is_safe_method: boolean,
        is_top_level_navigation: boolean
    ): Cookie[];
    get_cookies(uri: GLib.Uri, for_http: boolean): string | null;
    is_persistent(): boolean;
    set_accept_policy(policy: CookieJarAcceptPolicy): void;
    set_cookie(uri: GLib.Uri, cookie: string): void;
    set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void;
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void;
    vfunc_is_persistent(): boolean;
    vfunc_save(): void;
}
export module CookieJarDB {
    export interface ConstructorProperties extends CookieJar.ConstructorProperties {
        [key: string]: any;
        filename: string;
    }
}
export class CookieJarDB extends CookieJar implements SessionFeature {
    static $gtype: GObject.GType<CookieJarDB>;

    constructor(properties?: Partial<CookieJarDB.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CookieJarDB.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get filename(): string;

    // Constructors

    static ["new"](filename: string, read_only: boolean): CookieJarDB;
    // Conflicted with Soup.CookieJar.new
    static ["new"](...args: never[]): any;
}
export module CookieJarText {
    export interface ConstructorProperties extends CookieJar.ConstructorProperties {
        [key: string]: any;
        filename: string;
    }
}
export class CookieJarText extends CookieJar implements SessionFeature {
    static $gtype: GObject.GType<CookieJarText>;

    constructor(properties?: Partial<CookieJarText.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CookieJarText.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get filename(): string;

    // Constructors

    static ["new"](filename: string, read_only: boolean): CookieJarText;
    // Conflicted with Soup.CookieJar.new
    static ["new"](...args: never[]): any;
}
export module HSTSEnforcer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class HSTSEnforcer extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<HSTSEnforcer>;

    constructor(properties?: Partial<HSTSEnforcer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSTSEnforcer.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "changed",
        callback: (_source: this, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void
    ): number;
    connect_after(
        signal: "changed",
        callback: (_source: this, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void
    ): number;
    emit(signal: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;

    // Constructors

    static ["new"](): HSTSEnforcer;

    // Members

    get_domains(session_policies: boolean): string[];
    get_policies(session_policies: boolean): HSTSPolicy[];
    has_valid_policy(domain: string): boolean;
    is_persistent(): boolean;
    set_policy(policy: HSTSPolicy): void;
    set_session_policy(domain: string, include_subdomains: boolean): void;
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
    vfunc_has_valid_policy(domain: string): boolean;
    vfunc_is_persistent(): boolean;
}
export module HSTSEnforcerDB {
    export interface ConstructorProperties extends HSTSEnforcer.ConstructorProperties {
        [key: string]: any;
        filename: string;
    }
}
export class HSTSEnforcerDB extends HSTSEnforcer implements SessionFeature {
    static $gtype: GObject.GType<HSTSEnforcerDB>;

    constructor(properties?: Partial<HSTSEnforcerDB.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSTSEnforcerDB.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get filename(): string;

    // Constructors

    static ["new"](filename: string): HSTSEnforcerDB;
    // Conflicted with Soup.HSTSEnforcer.new
    static ["new"](...args: never[]): any;
}
export module Logger {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        level: LoggerLogLevel;
        max_body_size: number;
        maxBodySize: number;
    }
}
export class Logger extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<Logger>;

    constructor(properties?: Partial<Logger.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Logger.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get level(): LoggerLogLevel;
    set level(val: LoggerLogLevel);
    get max_body_size(): number;
    set max_body_size(val: number);
    get maxBodySize(): number;
    set maxBodySize(val: number);

    // Constructors

    static ["new"](level: LoggerLogLevel): Logger;

    // Members

    get_max_body_size(): number;
    set_max_body_size(max_body_size: number): void;
    set_printer(printer: LoggerPrinter): void;
    set_request_filter(request_filter: LoggerFilter): void;
    set_response_filter(response_filter: LoggerFilter): void;
}
export module Message {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        first_party: GLib.Uri;
        firstParty: GLib.Uri;
        flags: MessageFlags;
        http_version: HTTPVersion;
        httpVersion: HTTPVersion;
        is_options_ping: boolean;
        isOptionsPing: boolean;
        is_top_level_navigation: boolean;
        isTopLevelNavigation: boolean;
        method: string;
        priority: MessagePriority;
        reason_phrase: string;
        reasonPhrase: string;
        remote_address: Gio.SocketAddress;
        remoteAddress: Gio.SocketAddress;
        request_headers: MessageHeaders;
        requestHeaders: MessageHeaders;
        response_headers: MessageHeaders;
        responseHeaders: MessageHeaders;
        site_for_cookies: GLib.Uri;
        siteForCookies: GLib.Uri;
        status_code: number;
        statusCode: number;
        tls_ciphersuite_name: string;
        tlsCiphersuiteName: string;
        tls_peer_certificate: Gio.TlsCertificate;
        tlsPeerCertificate: Gio.TlsCertificate;
        tls_peer_certificate_errors: Gio.TlsCertificateFlags;
        tlsPeerCertificateErrors: Gio.TlsCertificateFlags;
        tls_protocol_version: Gio.TlsProtocolVersion;
        tlsProtocolVersion: Gio.TlsProtocolVersion;
        uri: GLib.Uri;
    }
}
export class Message extends GObject.Object {
    static $gtype: GObject.GType<Message>;

    constructor(properties?: Partial<Message.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Message.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get first_party(): GLib.Uri;
    set first_party(val: GLib.Uri);
    get firstParty(): GLib.Uri;
    set firstParty(val: GLib.Uri);
    get flags(): MessageFlags;
    set flags(val: MessageFlags);
    get http_version(): HTTPVersion;
    get httpVersion(): HTTPVersion;
    get is_options_ping(): boolean;
    set is_options_ping(val: boolean);
    get isOptionsPing(): boolean;
    set isOptionsPing(val: boolean);
    get is_top_level_navigation(): boolean;
    set is_top_level_navigation(val: boolean);
    get isTopLevelNavigation(): boolean;
    set isTopLevelNavigation(val: boolean);
    get method(): string;
    set method(val: string);
    get priority(): MessagePriority;
    set priority(val: MessagePriority);
    get reason_phrase(): string;
    get reasonPhrase(): string;
    get remote_address(): Gio.SocketAddress;
    get remoteAddress(): Gio.SocketAddress;
    get request_headers(): MessageHeaders;
    get requestHeaders(): MessageHeaders;
    get response_headers(): MessageHeaders;
    get responseHeaders(): MessageHeaders;
    get site_for_cookies(): GLib.Uri;
    set site_for_cookies(val: GLib.Uri);
    get siteForCookies(): GLib.Uri;
    set siteForCookies(val: GLib.Uri);
    get status_code(): number;
    get statusCode(): number;
    get tls_ciphersuite_name(): string;
    get tlsCiphersuiteName(): string;
    get tls_peer_certificate(): Gio.TlsCertificate;
    get tlsPeerCertificate(): Gio.TlsCertificate;
    get tls_peer_certificate_errors(): Gio.TlsCertificateFlags;
    get tlsPeerCertificateErrors(): Gio.TlsCertificateFlags;
    get tls_protocol_version(): Gio.TlsProtocolVersion;
    get tlsProtocolVersion(): Gio.TlsProtocolVersion;
    get uri(): GLib.Uri;
    set uri(val: GLib.Uri);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "accept-certificate",
        callback: (
            _source: this,
            tls_peer_certificate: Gio.TlsCertificate,
            tls_peer_errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;
    connect_after(
        signal: "accept-certificate",
        callback: (
            _source: this,
            tls_peer_certificate: Gio.TlsCertificate,
            tls_peer_errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;
    emit(
        signal: "accept-certificate",
        tls_peer_certificate: Gio.TlsCertificate,
        tls_peer_errors: Gio.TlsCertificateFlags
    ): void;
    connect(signal: "authenticate", callback: (_source: this, auth: Auth, retrying: boolean) => boolean): number;
    connect_after(signal: "authenticate", callback: (_source: this, auth: Auth, retrying: boolean) => boolean): number;
    emit(signal: "authenticate", auth: Auth, retrying: boolean): void;
    connect(
        signal: "content-sniffed",
        callback: (_source: this, type: string, params: GLib.HashTable<string, string>) => void
    ): number;
    connect_after(
        signal: "content-sniffed",
        callback: (_source: this, type: string, params: GLib.HashTable<string, string>) => void
    ): number;
    emit(
        signal: "content-sniffed",
        type: string,
        params: { [key: string]: any } | GLib.HashTable<string, string>
    ): void;
    connect(signal: "finished", callback: (_source: this) => void): number;
    connect_after(signal: "finished", callback: (_source: this) => void): number;
    emit(signal: "finished"): void;
    connect(signal: "got-body", callback: (_source: this) => void): number;
    connect_after(signal: "got-body", callback: (_source: this) => void): number;
    emit(signal: "got-body"): void;
    connect(signal: "got-body-data", callback: (_source: this, chunk_size: number) => void): number;
    connect_after(signal: "got-body-data", callback: (_source: this, chunk_size: number) => void): number;
    emit(signal: "got-body-data", chunk_size: number): void;
    connect(signal: "got-headers", callback: (_source: this) => void): number;
    connect_after(signal: "got-headers", callback: (_source: this) => void): number;
    emit(signal: "got-headers"): void;
    connect(signal: "got-informational", callback: (_source: this) => void): number;
    connect_after(signal: "got-informational", callback: (_source: this) => void): number;
    emit(signal: "got-informational"): void;
    connect(signal: "hsts-enforced", callback: (_source: this) => void): number;
    connect_after(signal: "hsts-enforced", callback: (_source: this) => void): number;
    emit(signal: "hsts-enforced"): void;
    connect(
        signal: "network-event",
        callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void
    ): number;
    connect_after(
        signal: "network-event",
        callback: (_source: this, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void
    ): number;
    emit(signal: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void;
    connect(
        signal: "request-certificate",
        callback: (_source: this, tls_connection: Gio.TlsClientConnection) => boolean
    ): number;
    connect_after(
        signal: "request-certificate",
        callback: (_source: this, tls_connection: Gio.TlsClientConnection) => boolean
    ): number;
    emit(signal: "request-certificate", tls_connection: Gio.TlsClientConnection): void;
    connect(
        signal: "request-certificate-password",
        callback: (_source: this, tls_password: Gio.TlsPassword) => boolean
    ): number;
    connect_after(
        signal: "request-certificate-password",
        callback: (_source: this, tls_password: Gio.TlsPassword) => boolean
    ): number;
    emit(signal: "request-certificate-password", tls_password: Gio.TlsPassword): void;
    connect(signal: "restarted", callback: (_source: this) => void): number;
    connect_after(signal: "restarted", callback: (_source: this) => void): number;
    emit(signal: "restarted"): void;
    connect(signal: "starting", callback: (_source: this) => void): number;
    connect_after(signal: "starting", callback: (_source: this) => void): number;
    emit(signal: "starting"): void;
    connect(signal: "wrote-body", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-body", callback: (_source: this) => void): number;
    emit(signal: "wrote-body"): void;
    connect(signal: "wrote-body-data", callback: (_source: this, chunk_size: number) => void): number;
    connect_after(signal: "wrote-body-data", callback: (_source: this, chunk_size: number) => void): number;
    emit(signal: "wrote-body-data", chunk_size: number): void;
    connect(signal: "wrote-headers", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-headers", callback: (_source: this) => void): number;
    emit(signal: "wrote-headers"): void;

    // Constructors

    static ["new"](method: string, uri_string: string): Message;
    static new_from_encoded_form(method: string, uri_string: string, encoded_form: string): Message;
    static new_from_multipart(uri_string: string, multipart: Multipart): Message;
    static new_from_uri(method: string, uri: GLib.Uri): Message;
    static new_options_ping(base_uri: GLib.Uri): Message;

    // Members

    add_flags(flags: MessageFlags): void;
    disable_feature(feature_type: GObject.GType): void;
    get_connection_id(): number;
    get_first_party(): GLib.Uri;
    get_flags(): MessageFlags;
    get_force_http1(): boolean;
    get_http_version(): HTTPVersion;
    get_is_options_ping(): boolean;
    get_is_top_level_navigation(): boolean;
    get_method(): string;
    get_metrics(): MessageMetrics | null;
    get_priority(): MessagePriority;
    get_reason_phrase(): string | null;
    get_remote_address(): Gio.SocketAddress | null;
    get_request_headers(): MessageHeaders;
    get_response_headers(): MessageHeaders;
    get_site_for_cookies(): GLib.Uri;
    get_status(): Status;
    get_tls_ciphersuite_name(): string;
    get_tls_peer_certificate(): Gio.TlsCertificate | null;
    get_tls_peer_certificate_errors(): Gio.TlsCertificateFlags;
    get_tls_protocol_version(): Gio.TlsProtocolVersion;
    get_uri(): GLib.Uri;
    is_feature_disabled(feature_type: GObject.GType): boolean;
    is_keepalive(): boolean;
    query_flags(flags: MessageFlags): boolean;
    remove_flags(flags: MessageFlags): void;
    set_first_party(first_party: GLib.Uri): void;
    set_flags(flags: MessageFlags): void;
    set_force_http1(value: boolean): void;
    set_is_options_ping(is_options_ping: boolean): void;
    set_is_top_level_navigation(is_top_level_navigation: boolean): void;
    set_method(method: string): void;
    set_priority(priority: MessagePriority): void;
    set_request_body(content_type: string | null, stream: Gio.InputStream | null, content_length: number): void;
    set_request_body_from_bytes(content_type?: string | null, bytes?: GLib.Bytes | null): void;
    set_site_for_cookies(site_for_cookies?: GLib.Uri | null): void;
    set_tls_client_certificate(certificate?: Gio.TlsCertificate | null): void;
    set_uri(uri: GLib.Uri): void;
    tls_client_certificate_password_request_complete(): void;
}
export module MultipartInputStream {
    export interface ConstructorProperties extends Gio.FilterInputStream.ConstructorProperties {
        [key: string]: any;
        message: Message;
    }
}
export class MultipartInputStream extends Gio.FilterInputStream implements Gio.PollableInputStream {
    static $gtype: GObject.GType<MultipartInputStream>;

    constructor(properties?: Partial<MultipartInputStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MultipartInputStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get message(): Message;

    // Constructors

    static ["new"](msg: Message, base_stream: Gio.InputStream): MultipartInputStream;

    // Members

    get_headers(): MessageHeaders | null;
    next_part(cancellable?: Gio.Cancellable | null): Gio.InputStream | null;
    next_part_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream | null>;
    next_part_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    next_part_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream | null> | void;
    next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null;

    // Implemented Members

    can_poll(): boolean;
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
    is_readable(): boolean;
    read_nonblocking(cancellable?: Gio.Cancellable | null): [number, Uint8Array];
    vfunc_can_poll(): boolean;
    vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
    vfunc_is_readable(): boolean;
    vfunc_read_nonblocking(): [number, Uint8Array | null];
}
export module Server {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        raw_paths: boolean;
        rawPaths: boolean;
        server_header: string;
        serverHeader: string;
        tls_auth_mode: Gio.TlsAuthenticationMode;
        tlsAuthMode: Gio.TlsAuthenticationMode;
        tls_certificate: Gio.TlsCertificate;
        tlsCertificate: Gio.TlsCertificate;
        tls_database: Gio.TlsDatabase;
        tlsDatabase: Gio.TlsDatabase;
    }
}
export class Server extends GObject.Object {
    static $gtype: GObject.GType<Server>;

    constructor(properties?: Partial<Server.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Server.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get raw_paths(): boolean;
    get rawPaths(): boolean;
    get server_header(): string;
    set server_header(val: string);
    get serverHeader(): string;
    set serverHeader(val: string);
    get tls_auth_mode(): Gio.TlsAuthenticationMode;
    set tls_auth_mode(val: Gio.TlsAuthenticationMode);
    get tlsAuthMode(): Gio.TlsAuthenticationMode;
    set tlsAuthMode(val: Gio.TlsAuthenticationMode);
    get tls_certificate(): Gio.TlsCertificate;
    set tls_certificate(val: Gio.TlsCertificate);
    get tlsCertificate(): Gio.TlsCertificate;
    set tlsCertificate(val: Gio.TlsCertificate);
    get tls_database(): Gio.TlsDatabase;
    set tls_database(val: Gio.TlsDatabase);
    get tlsDatabase(): Gio.TlsDatabase;
    set tlsDatabase(val: Gio.TlsDatabase);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "request-aborted", callback: (_source: this, message: ServerMessage) => void): number;
    connect_after(signal: "request-aborted", callback: (_source: this, message: ServerMessage) => void): number;
    emit(signal: "request-aborted", message: ServerMessage): void;
    connect(signal: "request-finished", callback: (_source: this, message: ServerMessage) => void): number;
    connect_after(signal: "request-finished", callback: (_source: this, message: ServerMessage) => void): number;
    emit(signal: "request-finished", message: ServerMessage): void;
    connect(signal: "request-read", callback: (_source: this, message: ServerMessage) => void): number;
    connect_after(signal: "request-read", callback: (_source: this, message: ServerMessage) => void): number;
    emit(signal: "request-read", message: ServerMessage): void;
    connect(signal: "request-started", callback: (_source: this, message: ServerMessage) => void): number;
    connect_after(signal: "request-started", callback: (_source: this, message: ServerMessage) => void): number;
    emit(signal: "request-started", message: ServerMessage): void;

    // Members

    accept_iostream(
        stream: Gio.IOStream,
        local_addr?: Gio.SocketAddress | null,
        remote_addr?: Gio.SocketAddress | null
    ): boolean;
    add_auth_domain(auth_domain: AuthDomain): void;
    add_early_handler(path: string | null, callback: ServerCallback): void;
    add_handler(path: string | null, callback: ServerCallback): void;
    add_websocket_extension(extension_type: GObject.GType): void;
    add_websocket_handler(
        path: string | null,
        origin: string | null,
        protocols: string[] | null,
        callback: ServerWebsocketCallback
    ): void;
    disconnect(): void;
    get_listeners(): Gio.Socket[];
    get_tls_auth_mode(): Gio.TlsAuthenticationMode;
    get_tls_certificate(): Gio.TlsCertificate | null;
    get_tls_database(): Gio.TlsDatabase | null;
    get_uris(): GLib.Uri[];
    is_https(): boolean;
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean;
    listen_all(port: number, options: ServerListenOptions): boolean;
    listen_local(port: number, options: ServerListenOptions): boolean;
    listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean;
    pause_message(msg: ServerMessage): void;
    remove_auth_domain(auth_domain: AuthDomain): void;
    remove_handler(path: string): void;
    remove_websocket_extension(extension_type: GObject.GType): void;
    set_tls_auth_mode(mode: Gio.TlsAuthenticationMode): void;
    set_tls_certificate(certificate: Gio.TlsCertificate): void;
    set_tls_database(tls_database: Gio.TlsDatabase): void;
    unpause_message(msg: ServerMessage): void;
    vfunc_request_aborted(msg: ServerMessage): void;
    vfunc_request_finished(msg: ServerMessage): void;
    vfunc_request_read(msg: ServerMessage): void;
    vfunc_request_started(msg: ServerMessage): void;
}
export module ServerMessage {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        tls_peer_certificate: Gio.TlsCertificate;
        tlsPeerCertificate: Gio.TlsCertificate;
        tls_peer_certificate_errors: Gio.TlsCertificateFlags;
        tlsPeerCertificateErrors: Gio.TlsCertificateFlags;
    }
}
export class ServerMessage extends GObject.Object {
    static $gtype: GObject.GType<ServerMessage>;

    constructor(properties?: Partial<ServerMessage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ServerMessage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get tls_peer_certificate(): Gio.TlsCertificate;
    get tlsPeerCertificate(): Gio.TlsCertificate;
    get tls_peer_certificate_errors(): Gio.TlsCertificateFlags;
    get tlsPeerCertificateErrors(): Gio.TlsCertificateFlags;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "accept-certificate",
        callback: (
            _source: this,
            tls_peer_certificate: Gio.TlsCertificate,
            tls_peer_errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;
    connect_after(
        signal: "accept-certificate",
        callback: (
            _source: this,
            tls_peer_certificate: Gio.TlsCertificate,
            tls_peer_errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;
    emit(
        signal: "accept-certificate",
        tls_peer_certificate: Gio.TlsCertificate,
        tls_peer_errors: Gio.TlsCertificateFlags
    ): void;
    connect(signal: "connected", callback: (_source: this) => void): number;
    connect_after(signal: "connected", callback: (_source: this) => void): number;
    emit(signal: "connected"): void;
    connect(signal: "disconnected", callback: (_source: this) => void): number;
    connect_after(signal: "disconnected", callback: (_source: this) => void): number;
    emit(signal: "disconnected"): void;
    connect(signal: "finished", callback: (_source: this) => void): number;
    connect_after(signal: "finished", callback: (_source: this) => void): number;
    emit(signal: "finished"): void;
    connect(signal: "got-body", callback: (_source: this) => void): number;
    connect_after(signal: "got-body", callback: (_source: this) => void): number;
    emit(signal: "got-body"): void;
    connect(signal: "got-chunk", callback: (_source: this, chunk: GLib.Bytes) => void): number;
    connect_after(signal: "got-chunk", callback: (_source: this, chunk: GLib.Bytes) => void): number;
    emit(signal: "got-chunk", chunk: GLib.Bytes | Uint8Array): void;
    connect(signal: "got-headers", callback: (_source: this) => void): number;
    connect_after(signal: "got-headers", callback: (_source: this) => void): number;
    emit(signal: "got-headers"): void;
    connect(signal: "wrote-body", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-body", callback: (_source: this) => void): number;
    emit(signal: "wrote-body"): void;
    connect(signal: "wrote-body-data", callback: (_source: this, chunk_size: number) => void): number;
    connect_after(signal: "wrote-body-data", callback: (_source: this, chunk_size: number) => void): number;
    emit(signal: "wrote-body-data", chunk_size: number): void;
    connect(signal: "wrote-chunk", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-chunk", callback: (_source: this) => void): number;
    emit(signal: "wrote-chunk"): void;
    connect(signal: "wrote-headers", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-headers", callback: (_source: this) => void): number;
    emit(signal: "wrote-headers"): void;
    connect(signal: "wrote-informational", callback: (_source: this) => void): number;
    connect_after(signal: "wrote-informational", callback: (_source: this) => void): number;
    emit(signal: "wrote-informational"): void;

    // Members

    get_http_version(): HTTPVersion;
    get_local_address(): Gio.SocketAddress | null;
    get_method(): string;
    get_reason_phrase(): string | null;
    get_remote_address(): Gio.SocketAddress | null;
    get_remote_host(): string | null;
    get_request_body(): MessageBody;
    get_request_headers(): MessageHeaders;
    get_response_body(): MessageBody;
    get_response_headers(): MessageHeaders;
    get_socket(): Gio.Socket | null;
    get_status(): number;
    get_tls_peer_certificate(): Gio.TlsCertificate | null;
    get_tls_peer_certificate_errors(): Gio.TlsCertificateFlags;
    get_uri(): GLib.Uri;
    is_options_ping(): boolean;
    pause(): void;
    set_http_version(version: HTTPVersion): void;
    set_redirect(status_code: number, redirect_uri: string): void;
    set_response(content_type: string | null, resp_use: MemoryUse, resp_body?: Uint8Array | null): void;
    set_status(status_code: number, reason_phrase?: string | null): void;
    steal_connection(): Gio.IOStream;
    unpause(): void;
}
export module Session {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accept_language: string;
        acceptLanguage: string;
        accept_language_auto: boolean;
        acceptLanguageAuto: boolean;
        idle_timeout: number;
        idleTimeout: number;
        local_address: Gio.InetSocketAddress;
        localAddress: Gio.InetSocketAddress;
        max_conns: number;
        maxConns: number;
        max_conns_per_host: number;
        maxConnsPerHost: number;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        remote_connectable: Gio.SocketConnectable;
        remoteConnectable: Gio.SocketConnectable;
        timeout: number;
        tls_database: Gio.TlsDatabase;
        tlsDatabase: Gio.TlsDatabase;
        tls_interaction: Gio.TlsInteraction;
        tlsInteraction: Gio.TlsInteraction;
        user_agent: string;
        userAgent: string;
    }
}
export class Session extends GObject.Object {
    static $gtype: GObject.GType<Session>;

    constructor(properties?: Partial<Session.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Session.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accept_language(): string;
    set accept_language(val: string);
    get acceptLanguage(): string;
    set acceptLanguage(val: string);
    get accept_language_auto(): boolean;
    set accept_language_auto(val: boolean);
    get acceptLanguageAuto(): boolean;
    set acceptLanguageAuto(val: boolean);
    get idle_timeout(): number;
    set idle_timeout(val: number);
    get idleTimeout(): number;
    set idleTimeout(val: number);
    get local_address(): Gio.InetSocketAddress;
    get localAddress(): Gio.InetSocketAddress;
    get max_conns(): number;
    get maxConns(): number;
    get max_conns_per_host(): number;
    get maxConnsPerHost(): number;
    get proxy_resolver(): Gio.ProxyResolver;
    set proxy_resolver(val: Gio.ProxyResolver);
    get proxyResolver(): Gio.ProxyResolver;
    set proxyResolver(val: Gio.ProxyResolver);
    get remote_connectable(): Gio.SocketConnectable;
    get remoteConnectable(): Gio.SocketConnectable;
    get timeout(): number;
    set timeout(val: number);
    get tls_database(): Gio.TlsDatabase;
    set tls_database(val: Gio.TlsDatabase);
    get tlsDatabase(): Gio.TlsDatabase;
    set tlsDatabase(val: Gio.TlsDatabase);
    get tls_interaction(): Gio.TlsInteraction;
    set tls_interaction(val: Gio.TlsInteraction);
    get tlsInteraction(): Gio.TlsInteraction;
    set tlsInteraction(val: Gio.TlsInteraction);
    get user_agent(): string;
    set user_agent(val: string);
    get userAgent(): string;
    set userAgent(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "request-queued", callback: (_source: this, msg: Message) => void): number;
    connect_after(signal: "request-queued", callback: (_source: this, msg: Message) => void): number;
    emit(signal: "request-queued", msg: Message): void;
    connect(signal: "request-unqueued", callback: (_source: this, msg: Message) => void): number;
    connect_after(signal: "request-unqueued", callback: (_source: this, msg: Message) => void): number;
    emit(signal: "request-unqueued", msg: Message): void;

    // Constructors

    static ["new"](): Session;

    // Members

    abort(): void;
    add_feature(feature: SessionFeature): void;
    add_feature_by_type(feature_type: GObject.GType): void;
    get_accept_language(): string | null;
    get_accept_language_auto(): boolean;
    get_async_result_message(result: Gio.AsyncResult): Message | null;
    get_feature(feature_type: GObject.GType): SessionFeature | null;
    get_feature_for_message(feature_type: GObject.GType, msg: Message): SessionFeature | null;
    get_idle_timeout(): number;
    get_local_address(): Gio.InetSocketAddress | null;
    get_max_conns(): number;
    get_max_conns_per_host(): number;
    get_proxy_resolver(): Gio.ProxyResolver | null;
    get_remote_connectable(): Gio.SocketConnectable | null;
    get_timeout(): number;
    get_tls_database(): Gio.TlsDatabase | null;
    get_tls_interaction(): Gio.TlsInteraction | null;
    get_user_agent(): string | null;
    has_feature(feature_type: GObject.GType): boolean;
    preconnect_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    preconnect_async(
        msg: Message,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    preconnect_async(
        msg: Message,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    preconnect_finish(result: Gio.AsyncResult): boolean;
    remove_feature(feature: SessionFeature): void;
    remove_feature_by_type(feature_type: GObject.GType): void;
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream;
    send_and_read(msg: Message, cancellable?: Gio.Cancellable | null): GLib.Bytes;
    send_and_read_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null): Promise<GLib.Bytes>;
    send_and_read_async(
        msg: Message,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    send_and_read_async(
        msg: Message,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Bytes> | void;
    send_and_read_finish(result: Gio.AsyncResult): GLib.Bytes;
    send_and_splice(
        msg: Message,
        out_stream: Gio.OutputStream,
        flags: Gio.OutputStreamSpliceFlags,
        cancellable?: Gio.Cancellable | null
    ): number;
    send_and_splice_async(
        msg: Message,
        out_stream: Gio.OutputStream,
        flags: Gio.OutputStreamSpliceFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<number>;
    send_and_splice_async(
        msg: Message,
        out_stream: Gio.OutputStream,
        flags: Gio.OutputStreamSpliceFlags,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    send_and_splice_async(
        msg: Message,
        out_stream: Gio.OutputStream,
        flags: Gio.OutputStreamSpliceFlags,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<number> | void;
    send_and_splice_finish(result: Gio.AsyncResult): number;
    send_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream>;
    send_async(
        msg: Message,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    send_async(
        msg: Message,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Gio.InputStream> | void;
    send_finish(result: Gio.AsyncResult): Gio.InputStream;
    set_accept_language(accept_language: string): void;
    set_accept_language_auto(accept_language_auto: boolean): void;
    set_idle_timeout(timeout: number): void;
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;
    set_timeout(timeout: number): void;
    set_tls_database(tls_database?: Gio.TlsDatabase | null): void;
    set_tls_interaction(tls_interaction?: Gio.TlsInteraction | null): void;
    set_user_agent(user_agent: string): void;
    websocket_connect_async(
        msg: Message,
        origin: string | null,
        protocols: string[] | null,
        io_priority: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<WebsocketConnection>;
    websocket_connect_async(
        msg: Message,
        origin: string | null,
        protocols: string[] | null,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    websocket_connect_async(
        msg: Message,
        origin: string | null,
        protocols: string[] | null,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<WebsocketConnection> | void;
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection;
    vfunc_request_queued(msg: Message): void;
    vfunc_request_unqueued(msg: Message): void;
}
export module WebsocketConnection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        connection_type: WebsocketConnectionType;
        connectionType: WebsocketConnectionType;
        extensions: any;
        io_stream: Gio.IOStream;
        ioStream: Gio.IOStream;
        keepalive_interval: number;
        keepaliveInterval: number;
        max_incoming_payload_size: number;
        maxIncomingPayloadSize: number;
        origin: string;
        protocol: string;
        state: WebsocketState;
        uri: GLib.Uri;
    }
}
export class WebsocketConnection extends GObject.Object {
    static $gtype: GObject.GType<WebsocketConnection>;

    constructor(properties?: Partial<WebsocketConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get connection_type(): WebsocketConnectionType;
    get connectionType(): WebsocketConnectionType;
    get extensions(): any;
    get io_stream(): Gio.IOStream;
    get ioStream(): Gio.IOStream;
    get keepalive_interval(): number;
    set keepalive_interval(val: number);
    get keepaliveInterval(): number;
    set keepaliveInterval(val: number);
    get max_incoming_payload_size(): number;
    set max_incoming_payload_size(val: number);
    get maxIncomingPayloadSize(): number;
    set maxIncomingPayloadSize(val: number);
    get origin(): string;
    get protocol(): string;
    get state(): WebsocketState;
    get uri(): GLib.Uri;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "closed", callback: (_source: this) => void): number;
    connect_after(signal: "closed", callback: (_source: this) => void): number;
    emit(signal: "closed"): void;
    connect(signal: "closing", callback: (_source: this) => void): number;
    connect_after(signal: "closing", callback: (_source: this) => void): number;
    emit(signal: "closing"): void;
    connect(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;
    connect_after(signal: "error", callback: (_source: this, error: GLib.Error) => void): number;
    emit(signal: "error", error: GLib.Error): void;
    connect(signal: "message", callback: (_source: this, type: number, message: GLib.Bytes) => void): number;
    connect_after(signal: "message", callback: (_source: this, type: number, message: GLib.Bytes) => void): number;
    emit(signal: "message", type: number, message: GLib.Bytes | Uint8Array): void;
    connect(signal: "pong", callback: (_source: this, message: GLib.Bytes) => void): number;
    connect_after(signal: "pong", callback: (_source: this, message: GLib.Bytes) => void): number;
    emit(signal: "pong", message: GLib.Bytes | Uint8Array): void;

    // Constructors

    static ["new"](
        stream: Gio.IOStream,
        uri: GLib.Uri,
        type: WebsocketConnectionType,
        origin: string | null,
        protocol: string | null,
        extensions: WebsocketExtension[]
    ): WebsocketConnection;

    // Members

    close(code: number, data?: string | null): void;
    get_close_code(): number;
    get_close_data(): string;
    get_connection_type(): WebsocketConnectionType;
    get_extensions(): WebsocketExtension[];
    get_io_stream(): Gio.IOStream;
    get_keepalive_interval(): number;
    get_max_incoming_payload_size(): number;
    get_origin(): string | null;
    get_protocol(): string | null;
    get_state(): WebsocketState;
    get_uri(): GLib.Uri;
    send_binary(data?: Uint8Array | null): void;
    send_message(type: WebsocketDataType, message: GLib.Bytes | Uint8Array): void;
    send_text(text: string): void;
    set_keepalive_interval(interval: number): void;
    set_max_incoming_payload_size(max_incoming_payload_size: number): void;
}
export module WebsocketExtension {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class WebsocketExtension extends GObject.Object {
    static $gtype: GObject.GType<WebsocketExtension>;

    constructor(properties?: Partial<WebsocketExtension.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketExtension.ConstructorProperties>, ...args: any[]): void;

    // Members

    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable<any, any> | null): boolean;
    get_request_params(): string | null;
    get_response_params(): string | null;
    process_incoming_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
    process_outgoing_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable<any, any> | null): boolean;
    vfunc_get_request_params(): string | null;
    vfunc_get_response_params(): string | null;
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes | Uint8Array): [GLib.Bytes, number];
}
export module WebsocketExtensionDeflate {
    export interface ConstructorProperties extends WebsocketExtension.ConstructorProperties {
        [key: string]: any;
    }
}
export class WebsocketExtensionDeflate extends WebsocketExtension {
    static $gtype: GObject.GType<WebsocketExtensionDeflate>;

    constructor(properties?: Partial<WebsocketExtensionDeflate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketExtensionDeflate.ConstructorProperties>, ...args: any[]): void;
}
export module WebsocketExtensionManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WebsocketExtensionManager extends GObject.Object implements SessionFeature {
    static $gtype: GObject.GType<WebsocketExtensionManager>;

    constructor(properties?: Partial<WebsocketExtensionManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebsocketExtensionManager.ConstructorProperties>, ...args: any[]): void;
}

export class Cookie {
    static $gtype: GObject.GType<Cookie>;

    constructor(name: string, value: string, domain: string, path: string, max_age: number);
    constructor(copy: Cookie);

    // Constructors
    static ["new"](name: string, value: string, domain: string, path: string, max_age: number): Cookie;

    // Members
    applies_to_uri(uri: GLib.Uri): boolean;
    copy(): Cookie;
    domain_matches(host: string): boolean;
    equal(cookie2: Cookie): boolean;
    free(): void;
    get_domain(): string;
    get_expires(): GLib.DateTime | null;
    get_http_only(): boolean;
    get_name(): string;
    get_path(): string;
    get_same_site_policy(): SameSitePolicy;
    get_secure(): boolean;
    get_value(): string;
    set_domain(domain: string): void;
    set_expires(expires: GLib.DateTime): void;
    set_http_only(http_only: boolean): void;
    set_max_age(max_age: number): void;
    set_name(name: string): void;
    set_path(path: string): void;
    set_same_site_policy(policy: SameSitePolicy): void;
    set_secure(secure: boolean): void;
    set_value(value: string): void;
    to_cookie_header(): string;
    to_set_cookie_header(): string;
    static parse(header: string, origin?: GLib.Uri | null): Cookie | null;
}

export class HSTSPolicy {
    static $gtype: GObject.GType<HSTSPolicy>;

    constructor(domain: string, max_age: number, include_subdomains: boolean);
    constructor(copy: HSTSPolicy);

    // Constructors
    static ["new"](domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy;
    static new_from_response(msg: Message): HSTSPolicy;
    static new_full(domain: string, max_age: number, expires: GLib.DateTime, include_subdomains: boolean): HSTSPolicy;
    static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy;

    // Members
    copy(): HSTSPolicy;
    equal(policy2: HSTSPolicy): boolean;
    free(): void;
    get_domain(): string;
    get_expires(): GLib.DateTime;
    get_max_age(): number;
    includes_subdomains(): boolean;
    is_expired(): boolean;
    is_session_policy(): boolean;
}

export class MessageBody {
    static $gtype: GObject.GType<MessageBody>;

    constructor();
    constructor(
        properties?: Partial<{
            data?: Uint8Array;
            length?: number;
        }>
    );
    constructor(copy: MessageBody);

    // Fields
    data: Uint8Array;
    length: number;

    // Constructors
    static ["new"](): MessageBody;

    // Members
    append(use: MemoryUse, data: Uint8Array | string): void;
    append_bytes(buffer: GLib.Bytes | Uint8Array): void;
    append(data: Uint8Array | string): void;
    complete(): void;
    flatten(): GLib.Bytes;
    get_accumulate(): boolean;
    get_chunk(offset: number): GLib.Bytes | null;
    got_chunk(chunk: GLib.Bytes | Uint8Array): void;
    ref(): MessageBody;
    set_accumulate(accumulate: boolean): void;
    truncate(): void;
    unref(): void;
    wrote_chunk(chunk: GLib.Bytes | Uint8Array): void;
}

export class MessageHeaders {
    static $gtype: GObject.GType<MessageHeaders>;

    constructor(type: MessageHeadersType);
    constructor(copy: MessageHeaders);

    // Constructors
    static ["new"](type: MessageHeadersType): MessageHeaders;

    // Members
    append(name: string, value: string): void;
    clean_connection_headers(): void;
    clear(): void;
    foreach(func: MessageHeadersForeachFunc): void;
    free_ranges(ranges: Range): void;
    get_content_disposition(): [boolean, string, GLib.HashTable<string, string>];
    get_content_length(): number;
    get_content_range(): [boolean, number, number, number];
    get_content_type(): [string | null, GLib.HashTable<string, string> | null];
    get_encoding(): Encoding;
    get_expectations(): Expectation;
    get_headers_type(): MessageHeadersType;
    get_list(name: string): string | null;
    get_one(name: string): string | null;
    get_ranges(total_length: number): [boolean, Range[]];
    header_contains(name: string, token: string): boolean;
    header_equals(name: string, value: string): boolean;
    ref(): MessageHeaders;
    remove(name: string): void;
    replace(name: string, value: string): void;
    set_content_disposition(disposition: string, params?: GLib.HashTable<string, string> | null): void;
    set_content_length(content_length: number): void;
    set_content_range(start: number, end: number, total_length: number): void;
    set_content_type(content_type: string, params?: GLib.HashTable<string, string> | null): void;
    set_encoding(encoding: Encoding): void;
    set_expectations(expectations: Expectation): void;
    set_range(start: number, end: number): void;
    set_ranges(ranges: Range, length: number): void;
    unref(): void;
}

export class MessageHeadersIter {
    static $gtype: GObject.GType<MessageHeadersIter>;

    constructor(copy: MessageHeadersIter);

    // Members
    next(): [boolean, string, string];
    static init(hdrs: MessageHeaders): MessageHeadersIter;
}

export class MessageMetrics {
    static $gtype: GObject.GType<MessageMetrics>;

    constructor(copy: MessageMetrics);

    // Members
    copy(): MessageMetrics;
    free(): void;
    get_connect_end(): number;
    get_connect_start(): number;
    get_dns_end(): number;
    get_dns_start(): number;
    get_fetch_start(): number;
    get_request_body_bytes_sent(): number;
    get_request_body_size(): number;
    get_request_header_bytes_sent(): number;
    get_request_start(): number;
    get_response_body_bytes_received(): number;
    get_response_body_size(): number;
    get_response_end(): number;
    get_response_header_bytes_received(): number;
    get_response_start(): number;
    get_tls_start(): number;
}

export class Multipart {
    static $gtype: GObject.GType<Multipart>;

    constructor(mime_type: string);
    constructor(copy: Multipart);

    // Constructors
    static ["new"](mime_type: string): Multipart;
    static new_from_message(headers: MessageHeaders, body: GLib.Bytes | Uint8Array): Multipart;

    // Members
    append_form_file(
        control_name: string,
        filename: string | null,
        content_type: string | null,
        body: GLib.Bytes | Uint8Array
    ): void;
    append_form_string(control_name: string, data: string): void;
    append_part(headers: MessageHeaders, body: GLib.Bytes | Uint8Array): void;
    free(): void;
    get_length(): number;
    get_part(part: number): [boolean, MessageHeaders, GLib.Bytes];
    to_message(dest_headers: MessageHeaders): GLib.Bytes;
}

export class Range {
    static $gtype: GObject.GType<Range>;

    constructor(
        properties?: Partial<{
            start?: number;
            end?: number;
        }>
    );
    constructor(copy: Range);

    // Fields
    start: number;
    end: number;
}

export interface SessionFeatureNamespace {
    $gtype: GObject.GType<SessionFeature>;
    prototype: SessionFeaturePrototype;
}
export type SessionFeature = SessionFeaturePrototype;
export interface SessionFeaturePrototype extends GObject.Object {}

export const SessionFeature: SessionFeatureNamespace;
