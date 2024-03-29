/**
 * GstWebRTC 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GstSdp from "gstsdp1";
import * as GObject from "gobject2";
import * as GLib from "glib2";

export function webrtc_error_quark(): GLib.Quark;
export function webrtc_sdp_type_to_string(type: WebRTCSDPType): string;
export type WebRTCICEOnCandidateFunc = (ice: WebRTCICE, stream_id: number, candidate: string) => void;

export namespace WebRTCBundlePolicy {
    export const $gtype: GObject.GType<WebRTCBundlePolicy>;
}

export enum WebRTCBundlePolicy {
    NONE = 0,
    BALANCED = 1,
    MAX_COMPAT = 2,
    MAX_BUNDLE = 3,
}

export namespace WebRTCDTLSSetup {
    export const $gtype: GObject.GType<WebRTCDTLSSetup>;
}

export enum WebRTCDTLSSetup {
    NONE = 0,
    ACTPASS = 1,
    ACTIVE = 2,
    PASSIVE = 3,
}

export namespace WebRTCDTLSTransportState {
    export const $gtype: GObject.GType<WebRTCDTLSTransportState>;
}

export enum WebRTCDTLSTransportState {
    NEW = 0,
    CLOSED = 1,
    FAILED = 2,
    CONNECTING = 3,
    CONNECTED = 4,
}

export namespace WebRTCDataChannelState {
    export const $gtype: GObject.GType<WebRTCDataChannelState>;
}

export enum WebRTCDataChannelState {
    CONNECTING = 1,
    OPEN = 2,
    CLOSING = 3,
    CLOSED = 4,
}

export class WebRTCError extends GLib.Error {
    static $gtype: GObject.GType<WebRTCError>;

    constructor(options: { message: string; code: number });
    constructor(copy: WebRTCError);

    // Fields
    static DATA_CHANNEL_FAILURE: number;
    static DTLS_FAILURE: number;
    static FINGERPRINT_FAILURE: number;
    static SCTP_FAILURE: number;
    static SDP_SYNTAX_ERROR: number;
    static HARDWARE_ENCODER_NOT_AVAILABLE: number;
    static ENCODER_ERROR: number;
    static INVALID_STATE: number;
    static INTERNAL_FAILURE: number;
    static INVALID_MODIFICATION: number;
    static TYPE_ERROR: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace WebRTCFECType {
    export const $gtype: GObject.GType<WebRTCFECType>;
}

export enum WebRTCFECType {
    NONE = 0,
    ULP_RED = 1,
}

export namespace WebRTCICEComponent {
    export const $gtype: GObject.GType<WebRTCICEComponent>;
}

export enum WebRTCICEComponent {
    RTP = 0,
    RTCP = 1,
}

export namespace WebRTCICEConnectionState {
    export const $gtype: GObject.GType<WebRTCICEConnectionState>;
}

export enum WebRTCICEConnectionState {
    NEW = 0,
    CHECKING = 1,
    CONNECTED = 2,
    COMPLETED = 3,
    FAILED = 4,
    DISCONNECTED = 5,
    CLOSED = 6,
}

export namespace WebRTCICEGatheringState {
    export const $gtype: GObject.GType<WebRTCICEGatheringState>;
}

export enum WebRTCICEGatheringState {
    NEW = 0,
    GATHERING = 1,
    COMPLETE = 2,
}

export namespace WebRTCICERole {
    export const $gtype: GObject.GType<WebRTCICERole>;
}

export enum WebRTCICERole {
    CONTROLLED = 0,
    CONTROLLING = 1,
}

export namespace WebRTCICETransportPolicy {
    export const $gtype: GObject.GType<WebRTCICETransportPolicy>;
}

export enum WebRTCICETransportPolicy {
    ALL = 0,
    RELAY = 1,
}

export namespace WebRTCKind {
    export const $gtype: GObject.GType<WebRTCKind>;
}

export enum WebRTCKind {
    UNKNOWN = 0,
    AUDIO = 1,
    VIDEO = 2,
}

export namespace WebRTCPeerConnectionState {
    export const $gtype: GObject.GType<WebRTCPeerConnectionState>;
}

export enum WebRTCPeerConnectionState {
    NEW = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    DISCONNECTED = 3,
    FAILED = 4,
    CLOSED = 5,
}

export namespace WebRTCPriorityType {
    export const $gtype: GObject.GType<WebRTCPriorityType>;
}

export enum WebRTCPriorityType {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
}

export namespace WebRTCRTPTransceiverDirection {
    export const $gtype: GObject.GType<WebRTCRTPTransceiverDirection>;
}

export enum WebRTCRTPTransceiverDirection {
    NONE = 0,
    INACTIVE = 1,
    SENDONLY = 2,
    RECVONLY = 3,
    SENDRECV = 4,
}

export namespace WebRTCSCTPTransportState {
    export const $gtype: GObject.GType<WebRTCSCTPTransportState>;
}

export enum WebRTCSCTPTransportState {
    NEW = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    CLOSED = 3,
}

export namespace WebRTCSDPType {
    export const $gtype: GObject.GType<WebRTCSDPType>;
}

export enum WebRTCSDPType {
    OFFER = 1,
    PRANSWER = 2,
    ANSWER = 3,
    ROLLBACK = 4,
}

export namespace WebRTCSignalingState {
    export const $gtype: GObject.GType<WebRTCSignalingState>;
}

export enum WebRTCSignalingState {
    STABLE = 0,
    CLOSED = 1,
    HAVE_LOCAL_OFFER = 2,
    HAVE_REMOTE_OFFER = 3,
    HAVE_LOCAL_PRANSWER = 4,
    HAVE_REMOTE_PRANSWER = 5,
}

export namespace WebRTCStatsType {
    export const $gtype: GObject.GType<WebRTCStatsType>;
}

export enum WebRTCStatsType {
    CODEC = 1,
    INBOUND_RTP = 2,
    OUTBOUND_RTP = 3,
    REMOTE_INBOUND_RTP = 4,
    REMOTE_OUTBOUND_RTP = 5,
    CSRC = 6,
    PEER_CONNECTION = 7,
    DATA_CHANNEL = 8,
    STREAM = 9,
    TRANSPORT = 10,
    CANDIDATE_PAIR = 11,
    LOCAL_CANDIDATE = 12,
    REMOTE_CANDIDATE = 13,
    CERTIFICATE = 14,
}
export module WebRTCDTLSTransport {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        certificate: string;
        client: boolean;
        remote_certificate: string;
        remoteCertificate: string;
        session_id: number;
        sessionId: number;
        state: WebRTCDTLSTransportState;
        transport: WebRTCICETransport;
    }
}
export class WebRTCDTLSTransport extends Gst.Object {
    static $gtype: GObject.GType<WebRTCDTLSTransport>;

    constructor(properties?: Partial<WebRTCDTLSTransport.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCDTLSTransport.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get certificate(): string;
    set certificate(val: string);
    get client(): boolean;
    set client(val: boolean);
    get remote_certificate(): string;
    get remoteCertificate(): string;
    get session_id(): number;
    get sessionId(): number;
    get state(): WebRTCDTLSTransportState;
    get transport(): WebRTCICETransport;
}
export module WebRTCDataChannel {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        buffered_amount: number;
        bufferedAmount: number;
        buffered_amount_low_threshold: number;
        bufferedAmountLowThreshold: number;
        id: number;
        label: string;
        max_packet_lifetime: number;
        maxPacketLifetime: number;
        max_retransmits: number;
        maxRetransmits: number;
        negotiated: boolean;
        ordered: boolean;
        priority: WebRTCPriorityType;
        protocol: string;
        ready_state: WebRTCDataChannelState;
        readyState: WebRTCDataChannelState;
    }
}
export abstract class WebRTCDataChannel extends GObject.Object {
    static $gtype: GObject.GType<WebRTCDataChannel>;

    constructor(properties?: Partial<WebRTCDataChannel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCDataChannel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get buffered_amount(): number;
    get bufferedAmount(): number;
    get buffered_amount_low_threshold(): number;
    set buffered_amount_low_threshold(val: number);
    get bufferedAmountLowThreshold(): number;
    set bufferedAmountLowThreshold(val: number);
    get id(): number;
    get label(): string;
    get max_packet_lifetime(): number;
    get maxPacketLifetime(): number;
    get max_retransmits(): number;
    get maxRetransmits(): number;
    get negotiated(): boolean;
    get ordered(): boolean;
    get priority(): WebRTCPriorityType;
    get protocol(): string;
    get ready_state(): WebRTCDataChannelState;
    get readyState(): WebRTCDataChannelState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;
    connect(signal: "on-buffered-amount-low", callback: (_source: this) => void): number;
    connect_after(signal: "on-buffered-amount-low", callback: (_source: this) => void): number;
    emit(signal: "on-buffered-amount-low"): void;
    connect(signal: "on-close", callback: (_source: this) => void): number;
    connect_after(signal: "on-close", callback: (_source: this) => void): number;
    emit(signal: "on-close"): void;
    connect(signal: "on-error", callback: (_source: this, error: GLib.Error) => void): number;
    connect_after(signal: "on-error", callback: (_source: this, error: GLib.Error) => void): number;
    emit(signal: "on-error", error: GLib.Error): void;
    connect(signal: "on-message-data", callback: (_source: this, data: GLib.Bytes | null) => void): number;
    connect_after(signal: "on-message-data", callback: (_source: this, data: GLib.Bytes | null) => void): number;
    emit(signal: "on-message-data", data: GLib.Bytes | null): void;
    connect(signal: "on-message-string", callback: (_source: this, data: string | null) => void): number;
    connect_after(signal: "on-message-string", callback: (_source: this, data: string | null) => void): number;
    emit(signal: "on-message-string", data: string | null): void;
    connect(signal: "on-open", callback: (_source: this) => void): number;
    connect_after(signal: "on-open", callback: (_source: this) => void): number;
    emit(signal: "on-open"): void;
    connect(signal: "send-data", callback: (_source: this, data: GLib.Bytes | null) => void): number;
    connect_after(signal: "send-data", callback: (_source: this, data: GLib.Bytes | null) => void): number;
    emit(signal: "send-data", data: GLib.Bytes | null): void;
    connect(signal: "send-string", callback: (_source: this, data: string | null) => void): number;
    connect_after(signal: "send-string", callback: (_source: this, data: string | null) => void): number;
    emit(signal: "send-string", data: string | null): void;

    // Members

    close(): void;
    send_data(data?: GLib.Bytes | null): void;
    send_data_full(data?: GLib.Bytes | null): boolean;
    send_string(str?: string | null): void;
    send_string_full(str?: string | null): boolean;
}
export module WebRTCICE {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        max_rtp_port: number;
        maxRtpPort: number;
        min_rtp_port: number;
        minRtpPort: number;
    }
}
export abstract class WebRTCICE extends Gst.Object {
    static $gtype: GObject.GType<WebRTCICE>;

    constructor(properties?: Partial<WebRTCICE.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCICE.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get max_rtp_port(): number;
    set max_rtp_port(val: number);
    get maxRtpPort(): number;
    set maxRtpPort(val: number);
    get min_rtp_port(): number;
    set min_rtp_port(val: number);
    get minRtpPort(): number;
    set minRtpPort(val: number);

    // Fields
    ice_gathering_state: WebRTCICEGatheringState;
    ice_connection_state: WebRTCICEConnectionState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "add-local-ip-address", callback: (_source: this, address: string) => boolean): number;
    connect_after(signal: "add-local-ip-address", callback: (_source: this, address: string) => boolean): number;
    emit(signal: "add-local-ip-address", address: string): void;

    // Members

    add_candidate(stream: WebRTCICEStream, candidate: string): void;
    add_stream(session_id: number): WebRTCICEStream | null;
    add_turn_server(uri: string): boolean;
    find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
    gather_candidates(stream: WebRTCICEStream): boolean;
    get_http_proxy(): string;
    get_is_controller(): boolean;
    get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
    get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
    get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
    get_stun_server(): string | null;
    get_turn_server(): string | null;
    set_force_relay(force_relay: boolean): void;
    set_http_proxy(uri: string): void;
    set_is_controller(controller: boolean): void;
    set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
    set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
    set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
    set_stun_server(uri?: string | null): void;
    set_tos(stream: WebRTCICEStream, tos: number): void;
    set_turn_server(uri?: string | null): void;
    vfunc_add_candidate(stream: WebRTCICEStream, candidate: string): void;
    vfunc_add_stream(session_id: number): WebRTCICEStream | null;
    vfunc_add_turn_server(uri: string): boolean;
    vfunc_find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
    vfunc_gather_candidates(stream: WebRTCICEStream): boolean;
    vfunc_get_http_proxy(): string;
    vfunc_get_is_controller(): boolean;
    vfunc_get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
    vfunc_get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
    vfunc_get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
    vfunc_get_stun_server(): string | null;
    vfunc_get_turn_server(): string | null;
    vfunc_set_force_relay(force_relay: boolean): void;
    vfunc_set_http_proxy(uri: string): void;
    vfunc_set_is_controller(controller: boolean): void;
    vfunc_set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
    vfunc_set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
    vfunc_set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
    vfunc_set_stun_server(uri?: string | null): void;
    vfunc_set_tos(stream: WebRTCICEStream, tos: number): void;
    vfunc_set_turn_server(uri?: string | null): void;
}
export module WebRTCICEStream {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        stream_id: number;
        streamId: number;
    }
}
export abstract class WebRTCICEStream extends Gst.Object {
    static $gtype: GObject.GType<WebRTCICEStream>;

    constructor(properties?: Partial<WebRTCICEStream.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCICEStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get stream_id(): number;
    get streamId(): number;

    // Members

    find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
    gather_candidates(): boolean;
    vfunc_find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
    vfunc_gather_candidates(): boolean;
}
export module WebRTCICETransport {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        component: WebRTCICEComponent;
        gathering_state: WebRTCICEGatheringState;
        gatheringState: WebRTCICEGatheringState;
        state: WebRTCICEConnectionState;
    }
}
export abstract class WebRTCICETransport extends Gst.Object {
    static $gtype: GObject.GType<WebRTCICETransport>;

    constructor(properties?: Partial<WebRTCICETransport.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCICETransport.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get component(): WebRTCICEComponent;
    get gathering_state(): WebRTCICEGatheringState;
    get gatheringState(): WebRTCICEGatheringState;
    get state(): WebRTCICEConnectionState;

    // Fields
    role: WebRTCICERole;
    src: Gst.Element;
    sink: Gst.Element;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "on-new-candidate", callback: (_source: this, object: string) => void): number;
    connect_after(signal: "on-new-candidate", callback: (_source: this, object: string) => void): number;
    emit(signal: "on-new-candidate", object: string): void;
    connect(signal: "on-selected-candidate-pair-change", callback: (_source: this) => void): number;
    connect_after(signal: "on-selected-candidate-pair-change", callback: (_source: this) => void): number;
    emit(signal: "on-selected-candidate-pair-change"): void;

    // Members

    connection_state_change(new_state: WebRTCICEConnectionState): void;
    gathering_state_change(new_state: WebRTCICEGatheringState): void;
    new_candidate(stream_id: number, component: WebRTCICEComponent, attr: string): void;
    selected_pair_change(): void;
    vfunc_gather_candidates(): boolean;
}
export module WebRTCRTPReceiver {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        transport: WebRTCDTLSTransport;
    }
}
export class WebRTCRTPReceiver extends Gst.Object {
    static $gtype: GObject.GType<WebRTCRTPReceiver>;

    constructor(properties?: Partial<WebRTCRTPReceiver.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCRTPReceiver.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get transport(): WebRTCDTLSTransport;
}
export module WebRTCRTPSender {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        priority: WebRTCPriorityType;
        transport: WebRTCDTLSTransport;
    }
}
export class WebRTCRTPSender extends Gst.Object {
    static $gtype: GObject.GType<WebRTCRTPSender>;

    constructor(properties?: Partial<WebRTCRTPSender.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCRTPSender.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get priority(): WebRTCPriorityType;
    set priority(val: WebRTCPriorityType);
    get transport(): WebRTCDTLSTransport;

    // Members

    set_priority(priority: WebRTCPriorityType): void;
}
export module WebRTCRTPTransceiver {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        codec_preferences: Gst.Caps;
        codecPreferences: Gst.Caps;
        current_direction: WebRTCRTPTransceiverDirection;
        currentDirection: WebRTCRTPTransceiverDirection;
        direction: WebRTCRTPTransceiverDirection;
        kind: WebRTCKind;
        mid: string;
        mlineindex: number;
        receiver: WebRTCRTPReceiver;
        sender: WebRTCRTPSender;
    }
}
export abstract class WebRTCRTPTransceiver extends Gst.Object {
    static $gtype: GObject.GType<WebRTCRTPTransceiver>;

    constructor(properties?: Partial<WebRTCRTPTransceiver.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCRTPTransceiver.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get codec_preferences(): Gst.Caps;
    set codec_preferences(val: Gst.Caps);
    get codecPreferences(): Gst.Caps;
    set codecPreferences(val: Gst.Caps);
    get current_direction(): WebRTCRTPTransceiverDirection;
    get currentDirection(): WebRTCRTPTransceiverDirection;
    get direction(): WebRTCRTPTransceiverDirection;
    set direction(val: WebRTCRTPTransceiverDirection);
    get kind(): WebRTCKind;
    get mid(): string;
    get mlineindex(): number;
    get receiver(): WebRTCRTPReceiver;
    get sender(): WebRTCRTPSender;
}
export module WebRTCSCTPTransport {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        max_channels: number;
        maxChannels: number;
        max_message_size: number;
        maxMessageSize: number;
        state: WebRTCSCTPTransportState;
        transport: WebRTCDTLSTransport;
    }
}
export abstract class WebRTCSCTPTransport extends Gst.Object {
    static $gtype: GObject.GType<WebRTCSCTPTransport>;

    constructor(properties?: Partial<WebRTCSCTPTransport.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WebRTCSCTPTransport.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get max_channels(): number;
    get maxChannels(): number;
    get max_message_size(): number;
    get maxMessageSize(): number;
    get state(): WebRTCSCTPTransportState;
    get transport(): WebRTCDTLSTransport;
}

export class WebRTCICECandidateStats {
    static $gtype: GObject.GType<WebRTCICECandidateStats>;

    constructor(
        properties?: Partial<{
            ipaddr?: string;
            port?: number;
            stream_id?: number;
            type?: string;
            proto?: string;
            relay_proto?: string;
            prio?: number;
            url?: string;
        }>
    );
    constructor(copy: WebRTCICECandidateStats);

    // Fields
    ipaddr: string;
    port: number;
    stream_id: number;
    type: string;
    proto: string;
    relay_proto: string;
    prio: number;
    url: string;

    // Members
    copy(): WebRTCICECandidateStats;
    free(): void;
}

export class WebRTCSessionDescription {
    static $gtype: GObject.GType<WebRTCSessionDescription>;

    constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage);
    constructor(copy: WebRTCSessionDescription);

    // Fields
    type: WebRTCSDPType;
    sdp: GstSdp.SDPMessage;

    // Constructors
    static ["new"](type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription;

    // Members
    copy(): WebRTCSessionDescription;
    free(): void;
}
