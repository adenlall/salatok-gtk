/**
 * GstTranscoder 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as GstPbutils from "gstpbutils1";

export function transcoder_error_get_name(error: TranscoderError): string;
export function transcoder_error_quark(): GLib.Quark;
export function transcoder_message_get_name(message: TranscoderMessage): string;
export function transcoder_message_parse_duration(msg: Gst.Message): Gst.ClockTime;
export function transcoder_message_parse_error(msg: Gst.Message): [GLib.Error | null, Gst.Structure];
export function transcoder_message_parse_position(msg: Gst.Message): Gst.ClockTime;
export function transcoder_message_parse_state(msg: Gst.Message): TranscoderState;
export function transcoder_message_parse_warning(msg: Gst.Message): [GLib.Error | null, Gst.Structure];
export function transcoder_state_get_name(state: TranscoderState): string;

export class TranscoderError extends GLib.Error {
    static $gtype: GObject.GType<TranscoderError>;

    constructor(options: { message: string; code: number });
    constructor(copy: TranscoderError);

    // Fields
    static FAILED: number;

    // Members
    static get_name(error: TranscoderError): string;
    static quark(): GLib.Quark;
}

export namespace TranscoderMessage {
    export const $gtype: GObject.GType<TranscoderMessage>;
}

export enum TranscoderMessage {
    POSITION_UPDATED = 0,
    DURATION_CHANGED = 1,
    STATE_CHANGED = 2,
    DONE = 3,
    ERROR = 4,
    WARNING = 5,
}

export namespace TranscoderState {
    export const $gtype: GObject.GType<TranscoderState>;
}

export enum TranscoderState {
    STOPPED = 0,
    PAUSED = 1,
    PLAYING = 2,
}
export module Transcoder {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        avoid_reencoding: boolean;
        avoidReencoding: boolean;
        dest_uri: string;
        destUri: string;
        duration: number;
        pipeline: Gst.Element;
        position: number;
        position_update_interval: number;
        positionUpdateInterval: number;
        profile: GstPbutils.EncodingProfile;
        src_uri: string;
        srcUri: string;
    }
}
export class Transcoder extends Gst.Object {
    static $gtype: GObject.GType<Transcoder>;

    constructor(properties?: Partial<Transcoder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Transcoder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get avoid_reencoding(): boolean;
    set avoid_reencoding(val: boolean);
    get avoidReencoding(): boolean;
    set avoidReencoding(val: boolean);
    get dest_uri(): string;
    get destUri(): string;
    get duration(): number;
    get pipeline(): Gst.Element;
    get position(): number;
    get position_update_interval(): number;
    set position_update_interval(val: number);
    get positionUpdateInterval(): number;
    set positionUpdateInterval(val: number);
    get profile(): GstPbutils.EncodingProfile;
    get src_uri(): string;
    get srcUri(): string;

    // Constructors

    static ["new"](source_uri: string, dest_uri: string, encoding_profile: string): Transcoder;
    static new_full(source_uri: string, dest_uri: string, profile: GstPbutils.EncodingProfile): Transcoder;

    // Members

    get_avoid_reencoding(): boolean;
    get_dest_uri(): string;
    get_duration(): Gst.ClockTime;
    get_message_bus(): Gst.Bus;
    get_pipeline(): Gst.Element;
    get_position(): Gst.ClockTime;
    get_position_update_interval(): number;
    get_signal_adapter(context?: GLib.MainContext | null): TranscoderSignalAdapter | null;
    get_source_uri(): string;
    get_sync_signal_adapter(): TranscoderSignalAdapter;
    run(): boolean;
    run_async(): void;
    set_avoid_reencoding(avoid_reencoding: boolean): void;
    set_cpu_usage(cpu_usage: number): void;
    set_position_update_interval(interval: number): void;
    static is_transcoder_message(msg: Gst.Message): boolean;
}
export module TranscoderSignalAdapter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        transcoder: Transcoder;
    }
}
export class TranscoderSignalAdapter extends GObject.Object {
    static $gtype: GObject.GType<TranscoderSignalAdapter>;

    constructor(properties?: Partial<TranscoderSignalAdapter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TranscoderSignalAdapter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get transcoder(): Transcoder;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "done", callback: (_source: this) => void): number;
    connect_after(signal: "done", callback: (_source: this) => void): number;
    emit(signal: "done"): void;
    connect(signal: "duration-changed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "duration-changed", callback: (_source: this, object: number) => void): number;
    emit(signal: "duration-changed", object: number): void;
    connect(signal: "error", callback: (_source: this, object: GLib.Error, p0: Gst.Structure) => void): number;
    connect_after(signal: "error", callback: (_source: this, object: GLib.Error, p0: Gst.Structure) => void): number;
    emit(signal: "error", object: GLib.Error, p0: Gst.Structure): void;
    connect(signal: "position-updated", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "position-updated", callback: (_source: this, object: number) => void): number;
    emit(signal: "position-updated", object: number): void;
    connect(signal: "state-changed", callback: (_source: this, object: TranscoderState) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, object: TranscoderState) => void): number;
    emit(signal: "state-changed", object: TranscoderState): void;
    connect(signal: "warning", callback: (_source: this, object: GLib.Error, p0: Gst.Structure) => void): number;
    connect_after(signal: "warning", callback: (_source: this, object: GLib.Error, p0: Gst.Structure) => void): number;
    emit(signal: "warning", object: GLib.Error, p0: Gst.Structure): void;

    // Members

    get_transcoder(): Transcoder | null;
}
