/**
 * GUdev 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";

export namespace DeviceType {
    export const $gtype: GObject.GType<DeviceType>;
}

export enum DeviceType {
    NONE = 0,
    BLOCK = 98,
    CHAR = 99,
}
export module Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        subsystems: string[];
    }
}
export class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get subsystems(): string[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "uevent", callback: (_source: this, action: string, device: Device) => void): number;
    connect_after(signal: "uevent", callback: (_source: this, action: string, device: Device) => void): number;
    emit(signal: "uevent", action: string, device: Device): void;

    // Constructors

    static ["new"](subsystems?: string[] | null): Client;

    // Members

    query_by_device_file(device_file: string): Device | null;
    query_by_device_number(type: DeviceType, number: DeviceNumber): Device | null;
    query_by_subsystem(subsystem?: string | null): Device[] | null;
    query_by_subsystem_and_name(subsystem: string, name: string): Device | null;
    query_by_sysfs_path(sysfs_path: string): Device | null;
    vfunc_uevent(action: string, device: Device): void;
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

    // Members

    get_action(): string;
    get_current_tags(): string[];
    get_device_file(): string | null;
    get_device_file_symlinks(): string[];
    get_device_number(): DeviceNumber;
    get_device_type(): DeviceType;
    get_devtype(): string;
    get_driver(): string | null;
    get_is_initialized(): boolean;
    get_name(): string;
    get_number(): string;
    get_parent(): Device | null;
    get_parent_with_subsystem(subsystem: string, devtype?: string | null): Device | null;
    get_property(key: string): string | null;
    // Conflicted with GObject.Object.get_property
    get_property(...args: never[]): any;
    get_property_as_boolean(key: string): boolean;
    get_property_as_double(key: string): number;
    get_property_as_int(key: string): number;
    get_property_as_strv(key: string): string[] | null;
    get_property_as_uint64(key: string): number;
    get_property_keys(): string[];
    get_seqnum(): number;
    get_subsystem(): string;
    get_sysfs_attr(name: string): string | null;
    get_sysfs_attr_as_boolean(name: string): boolean;
    get_sysfs_attr_as_boolean_uncached(name: string): boolean;
    get_sysfs_attr_as_double(name: string): number;
    get_sysfs_attr_as_double_uncached(name: string): number;
    get_sysfs_attr_as_int(name: string): number;
    get_sysfs_attr_as_int_uncached(name: string): number;
    get_sysfs_attr_as_strv(name: string): string[] | null;
    get_sysfs_attr_as_strv_uncached(name: string): string[] | null;
    get_sysfs_attr_as_uint64(name: string): number;
    get_sysfs_attr_as_uint64_uncached(name: string): number;
    get_sysfs_attr_keys(): string[];
    get_sysfs_attr_uncached(name: string): string | null;
    get_sysfs_path(): string;
    get_tags(): string[];
    get_usec_since_initialized(): number;
    has_property(key: string): boolean;
    has_sysfs_attr(key: string): boolean;
    has_sysfs_attr_uncached(key: string): boolean;
}
export module Enumerator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        client: Client;
    }
}
export class Enumerator extends GObject.Object {
    static $gtype: GObject.GType<Enumerator>;

    constructor(properties?: Partial<Enumerator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Enumerator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get client(): Client;

    // Constructors

    static ["new"](client: Client): Enumerator;

    // Members

    add_match_is_initialized(): Enumerator;
    add_match_name(name: string): Enumerator;
    add_match_property(name: string, value: string): Enumerator;
    add_match_subsystem(subsystem: string): Enumerator;
    add_match_sysfs_attr(name: string, value: string): Enumerator;
    add_match_tag(tag: string): Enumerator;
    add_nomatch_subsystem(subsystem: string): Enumerator;
    add_nomatch_sysfs_attr(name: string, value: string): Enumerator;
    add_sysfs_path(sysfs_path: string): Enumerator;
    execute(): Device[];
}

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class DevicePrivate {
    static $gtype: GObject.GType<DevicePrivate>;

    constructor(copy: DevicePrivate);
}

export class EnumeratorPrivate {
    static $gtype: GObject.GType<EnumeratorPrivate>;

    constructor(copy: EnumeratorPrivate);
}
export type DeviceNumber = number;
