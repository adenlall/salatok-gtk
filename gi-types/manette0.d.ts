/**
 * Manette 0.2
 *
 * Generated from 0.2
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";

export function get_resource(): Gio.Resource;

export namespace EventType {
    export const $gtype: GObject.GType<EventType>;
}

export enum EventType {
    EVENT_NOTHING = -1,
    EVENT_BUTTON_PRESS = 0,
    EVENT_BUTTON_RELEASE = 1,
    EVENT_ABSOLUTE = 2,
    EVENT_HAT = 3,
}
export module Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Device extends GObject.Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "absolute-axis-event", callback: (_source: this, event: Event) => void): number;
    connect_after(signal: "absolute-axis-event", callback: (_source: this, event: Event) => void): number;
    emit(signal: "absolute-axis-event", event: Event): void;
    connect(signal: "button-press-event", callback: (_source: this, event: Event) => void): number;
    connect_after(signal: "button-press-event", callback: (_source: this, event: Event) => void): number;
    emit(signal: "button-press-event", event: Event): void;
    connect(signal: "button-release-event", callback: (_source: this, event: Event) => void): number;
    connect_after(signal: "button-release-event", callback: (_source: this, event: Event) => void): number;
    emit(signal: "button-release-event", event: Event): void;
    connect(signal: "disconnected", callback: (_source: this) => void): number;
    connect_after(signal: "disconnected", callback: (_source: this) => void): number;
    emit(signal: "disconnected"): void;
    connect(signal: "event", callback: (_source: this, event: Event) => void): number;
    connect_after(signal: "event", callback: (_source: this, event: Event) => void): number;
    emit(signal: "event", event: Event): void;
    connect(signal: "hat-axis-event", callback: (_source: this, event: Event) => void): number;
    connect_after(signal: "hat-axis-event", callback: (_source: this, event: Event) => void): number;
    emit(signal: "hat-axis-event", event: Event): void;

    // Members

    get_name(): string;
    has_input(type: number, code: number): boolean;
    has_rumble(): boolean;
    has_user_mapping(): boolean;
    remove_user_mapping(): void;
    rumble(strong_magnitude: number, weak_magnitude: number, milliseconds: number): boolean;
    save_user_mapping(mapping_string: string): void;
}
export module Monitor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Monitor extends GObject.Object {
    static $gtype: GObject.GType<Monitor>;

    constructor(properties?: Partial<Monitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Monitor.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "device-connected", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "device-connected", callback: (_source: this, device: Device) => void): number;
    emit(signal: "device-connected", device: Device): void;
    connect(signal: "device-disconnected", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "device-disconnected", callback: (_source: this, device: Device) => void): number;
    emit(signal: "device-disconnected", device: Device): void;

    // Constructors

    static ["new"](): Monitor;

    // Members

    iterate(): MonitorIter;
}

export class MonitorIter {
    static $gtype: GObject.GType<MonitorIter>;

    constructor(copy: MonitorIter);

    // Members
    next(): [boolean, Device | null];
}

export class Event {
    static $gtype: GObject.GType<Event>;

    constructor(copy: Event);

    // Members
    get_absolute(): [boolean, number, number];
    get_button(): [boolean, number];
    get_device(): Device;
    get_event_type(): EventType;
    get_hardware_code(): number;
    get_hardware_index(): number;
    get_hardware_type(): number;
    get_hardware_value(): number;
    get_hat(): [boolean, number, number];
    get_time(): number;
}
