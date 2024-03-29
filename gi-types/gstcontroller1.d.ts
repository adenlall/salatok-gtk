/**
 * GstController 1.0
 *
 * Generated from 1.0
 */

import * as GLib from "glib2";
import * as Gst from "gst1";
import * as GObject from "gobject2";

export function timed_value_control_invalidate_cache(self: TimedValueControlSource): void;
export type DirectControlBindingConvertGValue = (
    self: DirectControlBinding,
    src_value: number,
    dest_value: GObject.Value | any
) => void;
export type DirectControlBindingConvertValue = (
    self: DirectControlBinding,
    src_value: number,
    dest_value?: any | null
) => void;

export namespace InterpolationMode {
    export const $gtype: GObject.GType<InterpolationMode>;
}

export enum InterpolationMode {
    NONE = 0,
    LINEAR = 1,
    CUBIC = 2,
    CUBIC_MONOTONIC = 3,
}

export namespace LFOWaveform {
    export const $gtype: GObject.GType<LFOWaveform>;
}

export enum LFOWaveform {
    SINE = 0,
    SQUARE = 1,
    SAW = 2,
    REVERSE_SAW = 3,
    TRIANGLE = 4,
}
export module ARGBControlBinding {
    export interface ConstructorProperties extends Gst.ControlBinding.ConstructorProperties {
        [key: string]: any;
        control_source_a: Gst.ControlSource;
        controlSourceA: Gst.ControlSource;
        control_source_b: Gst.ControlSource;
        controlSourceB: Gst.ControlSource;
        control_source_g: Gst.ControlSource;
        controlSourceG: Gst.ControlSource;
        control_source_r: Gst.ControlSource;
        controlSourceR: Gst.ControlSource;
    }
}
export class ARGBControlBinding extends Gst.ControlBinding {
    static $gtype: GObject.GType<ARGBControlBinding>;

    constructor(properties?: Partial<ARGBControlBinding.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ARGBControlBinding.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get control_source_a(): Gst.ControlSource;
    set control_source_a(val: Gst.ControlSource);
    get controlSourceA(): Gst.ControlSource;
    set controlSourceA(val: Gst.ControlSource);
    get control_source_b(): Gst.ControlSource;
    set control_source_b(val: Gst.ControlSource);
    get controlSourceB(): Gst.ControlSource;
    set controlSourceB(val: Gst.ControlSource);
    get control_source_g(): Gst.ControlSource;
    set control_source_g(val: Gst.ControlSource);
    get controlSourceG(): Gst.ControlSource;
    set controlSourceG(val: Gst.ControlSource);
    get control_source_r(): Gst.ControlSource;
    set control_source_r(val: Gst.ControlSource);
    get controlSourceR(): Gst.ControlSource;
    set controlSourceR(val: Gst.ControlSource);

    // Constructors

    static ["new"](
        object: Gst.Object,
        property_name: string,
        cs_a: Gst.ControlSource,
        cs_r: Gst.ControlSource,
        cs_g: Gst.ControlSource,
        cs_b: Gst.ControlSource
    ): ARGBControlBinding;
}
export module DirectControlBinding {
    export interface ConstructorProperties extends Gst.ControlBinding.ConstructorProperties {
        [key: string]: any;
        absolute: boolean;
        control_source: Gst.ControlSource;
        controlSource: Gst.ControlSource;
    }
}
export class DirectControlBinding extends Gst.ControlBinding {
    static $gtype: GObject.GType<DirectControlBinding>;

    constructor(properties?: Partial<DirectControlBinding.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DirectControlBinding.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get absolute(): boolean;
    get control_source(): Gst.ControlSource;
    set control_source(val: Gst.ControlSource);
    get controlSource(): Gst.ControlSource;
    set controlSource(val: Gst.ControlSource);

    // Constructors

    static ["new"](object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding;
    static new_absolute(object: Gst.Object, property_name: string, cs: Gst.ControlSource): DirectControlBinding;
}
export module InterpolationControlSource {
    export interface ConstructorProperties extends TimedValueControlSource.ConstructorProperties {
        [key: string]: any;
        mode: InterpolationMode;
    }
}
export class InterpolationControlSource extends TimedValueControlSource {
    static $gtype: GObject.GType<InterpolationControlSource>;

    constructor(properties?: Partial<InterpolationControlSource.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InterpolationControlSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get mode(): InterpolationMode;
    set mode(val: InterpolationMode);

    // Constructors

    static ["new"](): InterpolationControlSource;
}
export module LFOControlSource {
    export interface ConstructorProperties extends Gst.ControlSource.ConstructorProperties {
        [key: string]: any;
        amplitude: number;
        frequency: number;
        offset: number;
        timeshift: number;
        waveform: LFOWaveform;
    }
}
export class LFOControlSource extends Gst.ControlSource {
    static $gtype: GObject.GType<LFOControlSource>;

    constructor(properties?: Partial<LFOControlSource.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LFOControlSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get amplitude(): number;
    set amplitude(val: number);
    get frequency(): number;
    set frequency(val: number);
    get offset(): number;
    set offset(val: number);
    get timeshift(): number;
    set timeshift(val: number);
    get waveform(): LFOWaveform;
    set waveform(val: LFOWaveform);

    // Constructors

    static ["new"](): LFOControlSource;
}
export module ProxyControlBinding {
    export interface ConstructorProperties extends Gst.ControlBinding.ConstructorProperties {
        [key: string]: any;
    }
}
export class ProxyControlBinding extends Gst.ControlBinding {
    static $gtype: GObject.GType<ProxyControlBinding>;

    constructor(properties?: Partial<ProxyControlBinding.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProxyControlBinding.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        object: Gst.Object,
        property_name: string,
        ref_object: Gst.Object,
        ref_property_name: string
    ): ProxyControlBinding;
}
export module TimedValueControlSource {
    export interface ConstructorProperties extends Gst.ControlSource.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class TimedValueControlSource extends Gst.ControlSource {
    static $gtype: GObject.GType<TimedValueControlSource>;

    constructor(properties?: Partial<TimedValueControlSource.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TimedValueControlSource.ConstructorProperties>, ...args: any[]): void;

    // Fields
    lock: GLib.Mutex;
    values: GLib.Sequence;
    nvalues: number;
    valid_cache: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "value-added", callback: (_source: this, timed_value: ControlPoint) => void): number;
    connect_after(signal: "value-added", callback: (_source: this, timed_value: ControlPoint) => void): number;
    emit(signal: "value-added", timed_value: ControlPoint): void;
    connect(signal: "value-changed", callback: (_source: this, timed_value: ControlPoint) => void): number;
    connect_after(signal: "value-changed", callback: (_source: this, timed_value: ControlPoint) => void): number;
    emit(signal: "value-changed", timed_value: ControlPoint): void;
    connect(signal: "value-removed", callback: (_source: this, timed_value: ControlPoint) => void): number;
    connect_after(signal: "value-removed", callback: (_source: this, timed_value: ControlPoint) => void): number;
    emit(signal: "value-removed", timed_value: ControlPoint): void;

    // Members

    find_control_point_iter(timestamp: Gst.ClockTime): GLib.SequenceIter | null;
    get_all(): Gst.TimedValue[];
    get_count(): number;
    set(timestamp: Gst.ClockTime, value: number): boolean;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    set_from_list(timedvalues: Gst.TimedValue[]): boolean;
    unset(timestamp: Gst.ClockTime): boolean;
    unset_all(): void;
}
export module TriggerControlSource {
    export interface ConstructorProperties extends TimedValueControlSource.ConstructorProperties {
        [key: string]: any;
        tolerance: number;
    }
}
export class TriggerControlSource extends TimedValueControlSource {
    static $gtype: GObject.GType<TriggerControlSource>;

    constructor(properties?: Partial<TriggerControlSource.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TriggerControlSource.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get tolerance(): number;
    set tolerance(val: number);

    // Constructors

    static ["new"](): TriggerControlSource;
}

export class ControlPoint {
    static $gtype: GObject.GType<ControlPoint>;

    constructor(copy: ControlPoint);

    // Fields
    timestamp: Gst.ClockTime;
    value: number;

    // Members
    copy(): ControlPoint;
    free(): void;
}

export class InterpolationControlSourcePrivate {
    static $gtype: GObject.GType<InterpolationControlSourcePrivate>;

    constructor(copy: InterpolationControlSourcePrivate);
}

export class LFOControlSourcePrivate {
    static $gtype: GObject.GType<LFOControlSourcePrivate>;

    constructor(copy: LFOControlSourcePrivate);
}

export class TimedValueControlSourcePrivate {
    static $gtype: GObject.GType<TimedValueControlSourcePrivate>;

    constructor(copy: TimedValueControlSourcePrivate);
}

export class TriggerControlSourcePrivate {
    static $gtype: GObject.GType<TriggerControlSourcePrivate>;

    constructor(copy: TriggerControlSourcePrivate);
}
