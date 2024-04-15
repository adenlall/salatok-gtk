/**
 * Nice 0.1
 *
 * Generated from 0.1
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";
import * as GLib from "glib2";

export const AGENT_MAX_REMOTE_CANDIDATES: number;
export const CANDIDATE_MAX_FOUNDATION: number;
export const CANDIDATE_MAX_LOCAL_ADDRESSES: number;
export const CANDIDATE_MAX_TURN_SERVERS: number;
export function candidate_transport_to_string(transport: CandidateTransport): string;
export function candidate_type_to_string(type: CandidateType): string;
export function component_state_to_string(state: ComponentState): string;
export function debug_disable(with_stun: boolean): void;
export function debug_enable(with_stun: boolean): void;
export function interfaces_get_if_index_by_addr(addr: Address): number;
export function interfaces_get_ip_for_interface(interface_name: string): string | null;
export function interfaces_get_local_interfaces(): string[];
export function interfaces_get_local_ips(include_loopback: boolean): string[];
export function pseudo_tcp_set_debug_level(level: PseudoTcpDebugLevel): void;
export type AgentRecvFunc = (agent: Agent, stream_id: number, component_id: number, len: number, buf: string) => void;

export namespace CandidateTransport {
    export const $gtype: GObject.GType<CandidateTransport>;
}

export enum CandidateTransport {
    UDP = 0,
    TCP_ACTIVE = 1,
    TCP_PASSIVE = 2,
    TCP_SO = 3,
}

export namespace CandidateType {
    export const $gtype: GObject.GType<CandidateType>;
}

export enum CandidateType {
    HOST = 0,
    SERVER_REFLEXIVE = 1,
    PEER_REFLEXIVE = 2,
    RELAYED = 3,
}

export namespace Compatibility {
    export const $gtype: GObject.GType<Compatibility>;
}

export enum Compatibility {
    RFC5245 = 0,
    DRAFT19 = 0,
    GOOGLE = 1,
    MSN = 2,
    WLM2009 = 3,
    OC2007 = 4,
    OC2007R2 = 5,
    LAST = 5,
}

export namespace ComponentState {
    export const $gtype: GObject.GType<ComponentState>;
}

export enum ComponentState {
    DISCONNECTED = 0,
    GATHERING = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    READY = 4,
    FAILED = 5,
    LAST = 6,
}

export namespace ComponentType {
    export const $gtype: GObject.GType<ComponentType>;
}

export enum ComponentType {
    RTP = 1,
    RTCP = 2,
}

export namespace NominationMode {
    export const $gtype: GObject.GType<NominationMode>;
}

export enum NominationMode {
    REGULAR = 0,
    AGGRESSIVE = 1,
}

export namespace ProxyType {
    export const $gtype: GObject.GType<ProxyType>;
}

export enum ProxyType {
    NONE = 0,
    SOCKS5 = 1,
    HTTP = 2,
    LAST = 2,
}

export namespace PseudoTcpDebugLevel {
    export const $gtype: GObject.GType<PseudoTcpDebugLevel>;
}

export enum PseudoTcpDebugLevel {
    NONE = 0,
    NORMAL = 1,
    VERBOSE = 2,
}

export namespace PseudoTcpShutdown {
    export const $gtype: GObject.GType<PseudoTcpShutdown>;
}

export enum PseudoTcpShutdown {
    RD = 0,
    WR = 1,
    RDWR = 2,
}

export namespace PseudoTcpState {
    export const $gtype: GObject.GType<PseudoTcpState>;
}

export enum PseudoTcpState {
    LISTEN = 0,
    SYN_SENT = 1,
    SYN_RECEIVED = 2,
    ESTABLISHED = 3,
    CLOSED = 4,
    FIN_WAIT_1 = 5,
    FIN_WAIT_2 = 6,
    CLOSING = 7,
    TIME_WAIT = 8,
    CLOSE_WAIT = 9,
    LAST_ACK = 10,
}

export namespace PseudoTcpWriteResult {
    export const $gtype: GObject.GType<PseudoTcpWriteResult>;
}

export enum PseudoTcpWriteResult {
    SUCCESS = 0,
    TOO_LARGE = 1,
    FAIL = 2,
}

export namespace RelayType {
    export const $gtype: GObject.GType<RelayType>;
}

export enum RelayType {
    UDP = 0,
    TCP = 1,
    TLS = 2,
}

export namespace AgentOption {
    export const $gtype: GObject.GType<AgentOption>;
}

export enum AgentOption {
    NONE = 0,
    REGULAR_NOMINATION = 1,
    RELIABLE = 2,
    LITE_MODE = 4,
    ICE_TRICKLE = 8,
    SUPPORT_RENOMINATION = 16,
    CONSENT_FRESHNESS = 32,
    BYTESTREAM_TCP = 64,
}
export module Agent {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bytestream_tcp: boolean;
        bytestreamTcp: boolean;
        compatibility: number;
        consent_freshness: boolean;
        consentFreshness: boolean;
        controlling_mode: boolean;
        controllingMode: boolean;
        force_relay: boolean;
        forceRelay: boolean;
        full_mode: boolean;
        fullMode: boolean;
        ice_tcp: boolean;
        iceTcp: boolean;
        ice_trickle: boolean;
        iceTrickle: boolean;
        ice_udp: boolean;
        iceUdp: boolean;
        idle_timeout: number;
        idleTimeout: number;
        keepalive_conncheck: boolean;
        keepaliveConncheck: boolean;
        main_context: any;
        mainContext: any;
        max_connectivity_checks: number;
        maxConnectivityChecks: number;
        proxy_extra_headers: GLib.HashTable<string, string>;
        proxyExtraHeaders: GLib.HashTable<string, string>;
        proxy_ip: string;
        proxyIp: string;
        proxy_password: string;
        proxyPassword: string;
        proxy_port: number;
        proxyPort: number;
        proxy_type: number;
        proxyType: number;
        proxy_username: string;
        proxyUsername: string;
        reliable: boolean;
        stun_initial_timeout: number;
        stunInitialTimeout: number;
        stun_max_retransmissions: number;
        stunMaxRetransmissions: number;
        stun_pacing_timer: number;
        stunPacingTimer: number;
        stun_reliable_timeout: number;
        stunReliableTimeout: number;
        stun_server: string;
        stunServer: string;
        stun_server_port: number;
        stunServerPort: number;
        support_renomination: boolean;
        supportRenomination: boolean;
        upnp: boolean;
        upnp_timeout: number;
        upnpTimeout: number;
    }
}
export class Agent extends GObject.Object {
    static $gtype: GObject.GType<Agent>;

    constructor(properties?: Partial<Agent.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Agent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bytestream_tcp(): boolean;
    set bytestream_tcp(val: boolean);
    get bytestreamTcp(): boolean;
    set bytestreamTcp(val: boolean);
    get compatibility(): number;
    get consent_freshness(): boolean;
    get consentFreshness(): boolean;
    get controlling_mode(): boolean;
    set controlling_mode(val: boolean);
    get controllingMode(): boolean;
    set controllingMode(val: boolean);
    get force_relay(): boolean;
    set force_relay(val: boolean);
    get forceRelay(): boolean;
    set forceRelay(val: boolean);
    get full_mode(): boolean;
    get fullMode(): boolean;
    get ice_tcp(): boolean;
    set ice_tcp(val: boolean);
    get iceTcp(): boolean;
    set iceTcp(val: boolean);
    get ice_trickle(): boolean;
    set ice_trickle(val: boolean);
    get iceTrickle(): boolean;
    set iceTrickle(val: boolean);
    get ice_udp(): boolean;
    set ice_udp(val: boolean);
    get iceUdp(): boolean;
    set iceUdp(val: boolean);
    get idle_timeout(): number;
    set idle_timeout(val: number);
    get idleTimeout(): number;
    set idleTimeout(val: number);
    get keepalive_conncheck(): boolean;
    set keepalive_conncheck(val: boolean);
    get keepaliveConncheck(): boolean;
    set keepaliveConncheck(val: boolean);
    get main_context(): any;
    get mainContext(): any;
    get max_connectivity_checks(): number;
    set max_connectivity_checks(val: number);
    get maxConnectivityChecks(): number;
    set maxConnectivityChecks(val: number);
    get proxy_extra_headers(): GLib.HashTable<string, string>;
    set proxy_extra_headers(val: GLib.HashTable<string, string>);
    get proxyExtraHeaders(): GLib.HashTable<string, string>;
    set proxyExtraHeaders(val: GLib.HashTable<string, string>);
    get proxy_ip(): string;
    set proxy_ip(val: string);
    get proxyIp(): string;
    set proxyIp(val: string);
    get proxy_password(): string;
    set proxy_password(val: string);
    get proxyPassword(): string;
    set proxyPassword(val: string);
    get proxy_port(): number;
    set proxy_port(val: number);
    get proxyPort(): number;
    set proxyPort(val: number);
    get proxy_type(): number;
    set proxy_type(val: number);
    get proxyType(): number;
    set proxyType(val: number);
    get proxy_username(): string;
    set proxy_username(val: string);
    get proxyUsername(): string;
    set proxyUsername(val: string);
    get reliable(): boolean;
    get stun_initial_timeout(): number;
    set stun_initial_timeout(val: number);
    get stunInitialTimeout(): number;
    set stunInitialTimeout(val: number);
    get stun_max_retransmissions(): number;
    set stun_max_retransmissions(val: number);
    get stunMaxRetransmissions(): number;
    set stunMaxRetransmissions(val: number);
    get stun_pacing_timer(): number;
    set stun_pacing_timer(val: number);
    get stunPacingTimer(): number;
    set stunPacingTimer(val: number);
    get stun_reliable_timeout(): number;
    set stun_reliable_timeout(val: number);
    get stunReliableTimeout(): number;
    set stunReliableTimeout(val: number);
    get stun_server(): string;
    set stun_server(val: string);
    get stunServer(): string;
    set stunServer(val: string);
    get stun_server_port(): number;
    set stun_server_port(val: number);
    get stunServerPort(): number;
    set stunServerPort(val: number);
    get support_renomination(): boolean;
    set support_renomination(val: boolean);
    get supportRenomination(): boolean;
    set supportRenomination(val: boolean);
    get upnp(): boolean;
    set upnp(val: boolean);
    get upnp_timeout(): number;
    set upnp_timeout(val: number);
    get upnpTimeout(): number;
    set upnpTimeout(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "candidate-gathering-done", callback: (_source: this, stream_id: number) => void): number;
    connect_after(signal: "candidate-gathering-done", callback: (_source: this, stream_id: number) => void): number;
    emit(signal: "candidate-gathering-done", stream_id: number): void;
    connect(
        signal: "component-state-changed",
        callback: (_source: this, stream_id: number, component_id: number, state: number) => void
    ): number;
    connect_after(
        signal: "component-state-changed",
        callback: (_source: this, stream_id: number, component_id: number, state: number) => void
    ): number;
    emit(signal: "component-state-changed", stream_id: number, component_id: number, state: number): void;
    connect(signal: "initial-binding-request-received", callback: (_source: this, stream_id: number) => void): number;
    connect_after(
        signal: "initial-binding-request-received",
        callback: (_source: this, stream_id: number) => void
    ): number;
    emit(signal: "initial-binding-request-received", stream_id: number): void;
    connect(
        signal: "new-candidate",
        callback: (_source: this, stream_id: number, component_id: number, foundation: string) => void
    ): number;
    connect_after(
        signal: "new-candidate",
        callback: (_source: this, stream_id: number, component_id: number, foundation: string) => void
    ): number;
    emit(signal: "new-candidate", stream_id: number, component_id: number, foundation: string): void;
    connect(signal: "new-candidate-full", callback: (_source: this, candidate: Candidate) => void): number;
    connect_after(signal: "new-candidate-full", callback: (_source: this, candidate: Candidate) => void): number;
    emit(signal: "new-candidate-full", candidate: Candidate): void;
    connect(
        signal: "new-remote-candidate",
        callback: (_source: this, stream_id: number, component_id: number, foundation: string) => void
    ): number;
    connect_after(
        signal: "new-remote-candidate",
        callback: (_source: this, stream_id: number, component_id: number, foundation: string) => void
    ): number;
    emit(signal: "new-remote-candidate", stream_id: number, component_id: number, foundation: string): void;
    connect(signal: "new-remote-candidate-full", callback: (_source: this, candidate: Candidate) => void): number;
    connect_after(signal: "new-remote-candidate-full", callback: (_source: this, candidate: Candidate) => void): number;
    emit(signal: "new-remote-candidate-full", candidate: Candidate): void;
    connect(
        signal: "new-selected-pair",
        callback: (
            _source: this,
            stream_id: number,
            component_id: number,
            lfoundation: string,
            rfoundation: string
        ) => void
    ): number;
    connect_after(
        signal: "new-selected-pair",
        callback: (
            _source: this,
            stream_id: number,
            component_id: number,
            lfoundation: string,
            rfoundation: string
        ) => void
    ): number;
    emit(
        signal: "new-selected-pair",
        stream_id: number,
        component_id: number,
        lfoundation: string,
        rfoundation: string
    ): void;
    connect(
        signal: "new-selected-pair-full",
        callback: (
            _source: this,
            stream_id: number,
            component_id: number,
            lcandidate: Candidate,
            rcandidate: Candidate
        ) => void
    ): number;
    connect_after(
        signal: "new-selected-pair-full",
        callback: (
            _source: this,
            stream_id: number,
            component_id: number,
            lcandidate: Candidate,
            rcandidate: Candidate
        ) => void
    ): number;
    emit(
        signal: "new-selected-pair-full",
        stream_id: number,
        component_id: number,
        lcandidate: Candidate,
        rcandidate: Candidate
    ): void;
    connect(
        signal: "reliable-transport-writable",
        callback: (_source: this, stream_id: number, component_id: number) => void
    ): number;
    connect_after(
        signal: "reliable-transport-writable",
        callback: (_source: this, stream_id: number, component_id: number) => void
    ): number;
    emit(signal: "reliable-transport-writable", stream_id: number, component_id: number): void;
    connect(signal: "streams-removed", callback: (_source: this, stream_ids: number[]) => void): number;
    connect_after(signal: "streams-removed", callback: (_source: this, stream_ids: number[]) => void): number;
    emit(signal: "streams-removed", stream_ids: number[]): void;

    // Constructors

    static ["new"](ctx: GLib.MainContext, compat: Compatibility): Agent;
    static new_full(ctx: GLib.MainContext, compat: Compatibility, flags: AgentOption): Agent;
    static new_reliable(ctx: GLib.MainContext, compat: Compatibility): Agent;

    // Members

    add_local_address(addr: Address): boolean;
    add_stream(n_components: number): number;
    close_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
    consent_lost(stream_id: number, component_id: number): boolean;
    forget_relays(stream_id: number, component_id: number): boolean;
    gather_candidates(stream_id: number): boolean;
    generate_local_candidate_sdp(candidate: Candidate): string;
    generate_local_sdp(): string;
    generate_local_stream_sdp(stream_id: number, include_non_ice: boolean): string;
    get_component_state(stream_id: number, component_id: number): ComponentState;
    get_default_local_candidate(stream_id: number, component_id: number): Candidate;
    get_io_stream(stream_id: number, component_id: number): Gio.IOStream;
    get_local_candidates(stream_id: number, component_id: number): Candidate[];
    get_local_credentials(stream_id: number): [boolean, string, string];
    get_remote_candidates(stream_id: number, component_id: number): Candidate[];
    get_selected_pair(stream_id: number, component_id: number, local: Candidate, remote: Candidate): boolean;
    get_selected_socket(stream_id: number, component_id: number): Gio.Socket | null;
    get_sockets(stream_id: number, component_id: number): Gio.Socket[];
    get_stream_name(stream_id: number): string;
    parse_remote_candidate_sdp(stream_id: number, sdp: string): Candidate;
    parse_remote_sdp(sdp: string): number;
    parse_remote_stream_sdp(stream_id: number, sdp: string, ufrag: string, pwd: string): Candidate[];
    peer_candidate_gathering_done(stream_id: number): boolean;
    recv(stream_id: number, component_id: number, cancellable?: Gio.Cancellable | null): [number, Uint8Array];
    recv_messages(
        stream_id: number,
        component_id: number,
        cancellable?: Gio.Cancellable | null
    ): [number, InputMessage[]];
    recv_messages_nonblocking(
        stream_id: number,
        component_id: number,
        cancellable?: Gio.Cancellable | null
    ): [number, InputMessage[]];
    recv_nonblocking(
        stream_id: number,
        component_id: number,
        cancellable?: Gio.Cancellable | null
    ): [number, Uint8Array];
    remove_stream(stream_id: number): void;
    restart(): boolean;
    restart_stream(stream_id: number): boolean;
    send(stream_id: number, component_id: number, len: number, buf: string): number;
    send_messages_nonblocking(
        stream_id: number,
        component_id: number,
        messages: OutputMessage[],
        cancellable?: Gio.Cancellable | null
    ): number;
    set_local_credentials(stream_id: number, ufrag: string, pwd: string): boolean;
    set_port_range(stream_id: number, component_id: number, min_port: number, max_port: number): void;
    set_relay_info(
        stream_id: number,
        component_id: number,
        server_ip: string,
        server_port: number,
        username: string,
        password: string,
        type: RelayType
    ): boolean;
    set_remote_candidates(stream_id: number, component_id: number, candidates: Candidate[]): number;
    set_remote_credentials(stream_id: number, ufrag: string, pwd: string): boolean;
    set_selected_pair(stream_id: number, component_id: number, lfoundation: string, rfoundation: string): boolean;
    set_selected_remote_candidate(stream_id: number, component_id: number, candidate: Candidate): boolean;
    set_software(software: string): void;
    set_stream_name(stream_id: number, name: string): boolean;
    set_stream_tos(stream_id: number, tos: number): void;
}
export module PseudoTcpSocket {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        ack_delay: number;
        ackDelay: number;
        callbacks: any;
        conversation: number;
        no_delay: boolean;
        noDelay: boolean;
        rcv_buf: number;
        rcvBuf: number;
        snd_buf: number;
        sndBuf: number;
        state: number;
        support_fin_ack: boolean;
        supportFinAck: boolean;
    }
}
export class PseudoTcpSocket extends GObject.Object {
    static $gtype: GObject.GType<PseudoTcpSocket>;

    constructor(properties?: Partial<PseudoTcpSocket.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PseudoTcpSocket.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get ack_delay(): number;
    set ack_delay(val: number);
    get ackDelay(): number;
    set ackDelay(val: number);
    get callbacks(): any;
    set callbacks(val: any);
    get conversation(): number;
    get no_delay(): boolean;
    set no_delay(val: boolean);
    get noDelay(): boolean;
    set noDelay(val: boolean);
    get rcv_buf(): number;
    set rcv_buf(val: number);
    get rcvBuf(): number;
    set rcvBuf(val: number);
    get snd_buf(): number;
    set snd_buf(val: number);
    get sndBuf(): number;
    set sndBuf(val: number);
    get state(): number;
    get support_fin_ack(): boolean;
    get supportFinAck(): boolean;

    // Constructors

    static ["new"](conversation: number, callbacks: PseudoTcpCallbacks): PseudoTcpSocket;

    // Members

    can_send(): boolean;
    close(force: boolean): void;
    connect(): boolean;
    connect(...args: never[]): any;
    get_available_bytes(): number;
    get_available_send_space(): number;
    get_error(): number;
    get_next_clock(timeout: number): boolean;
    is_closed(): boolean;
    is_closed_remotely(): boolean;
    notify_clock(): void;
    notify_message(message: InputMessage): boolean;
    notify_mtu(mtu: number): void;
    notify_packet(buffer: string, len: number): boolean;
    recv(buffer: string, len: number): number;
    send(buffer: string, len: number): number;
    set_time(current_time: number): void;
    shutdown(how: PseudoTcpShutdown): void;
}

export class Address {
    static $gtype: GObject.GType<Address>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: Address);

    // Constructors
    static ["new"](): Address;

    // Members
    copy_to_sockaddr(sin?: any | null): void;
    dup(): Address;
    dup_string(): string;
    equal(b: Address): boolean;
    equal_no_port(b: Address): boolean;
    free(): void;
    get_port(): number;
    init(): void;
    ip_version(): number;
    is_linklocal(): boolean;
    is_private(): boolean;
    is_valid(): boolean;
    set_from_sockaddr(sin?: any | null): void;
    set_from_string(str: string): boolean;
    set_ipv4(addr_ipv4: number): void;
    set_ipv6(addr_ipv6: number): void;
    set_port(port: number): void;
}

export class Candidate {
    static $gtype: GObject.GType<Candidate>;

    constructor(type: CandidateType);
    constructor(copy: Candidate);

    // Fields
    type: CandidateType;
    transport: CandidateTransport;
    addr: Address;
    base_addr: Address;
    priority: number;
    stream_id: number;
    component_id: number;
    foundation: number[];
    username: string;
    password: string;

    // Constructors
    static ["new"](type: CandidateType): Candidate;

    // Members
    copy(): Candidate;
    equal_target(candidate2: Candidate): boolean;
    free(): void;
    relay_address(addr: Address): void;
    stun_server_address(addr: Address): boolean;
    static transport_to_string(transport: CandidateTransport): string;
    static type_to_string(type: CandidateType): string;
}

export class InputMessage {
    static $gtype: GObject.GType<InputMessage>;

    constructor(copy: InputMessage);

    // Fields
    buffers: Gio.InputVector[];
    n_buffers: number;
    from: Address;
    length: number;
}

export class OutputMessage {
    static $gtype: GObject.GType<OutputMessage>;

    constructor(copy: OutputMessage);

    // Fields
    buffers: Gio.OutputVector[];
    n_buffers: number;
}

export class PseudoTcpCallbacks {
    static $gtype: GObject.GType<PseudoTcpCallbacks>;

    constructor(
        properties?: Partial<{
            user_data?: any;
        }>
    );
    constructor(copy: PseudoTcpCallbacks);

    // Fields
    user_data: any;
}
