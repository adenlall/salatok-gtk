/**
 * Geoclue 2.0
 *
 * Generated from 2.0
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";
import * as GLib from "glib2";

export function client_interface_info(): Gio.DBusInterfaceInfo;
export function client_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function location_interface_info(): Gio.DBusInterfaceInfo;
export function location_override_properties(klass: GObject.Object, property_id_begin: number): number;
export function manager_interface_info(): Gio.DBusInterfaceInfo;
export function manager_override_properties(klass: GObject.Object, property_id_begin: number): number;

export namespace AccuracyLevel {
    export const $gtype: GObject.GType<AccuracyLevel>;
}

export enum AccuracyLevel {
    NONE = 0,
    COUNTRY = 1,
    CITY = 4,
    NEIGHBORHOOD = 5,
    STREET = 6,
    EXACT = 8,
}

export namespace ClientProxyCreateFlags {
    export const $gtype: GObject.GType<ClientProxyCreateFlags>;
}

export enum ClientProxyCreateFlags {
    NONE = 0,
    AUTO_DELETE = 1,
}
export module ClientProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClientProxy
    extends Gio.DBusProxy
    implements Client, Gio.AsyncInitable<ClientProxy>, Gio.DBusInterface, Gio.Initable
{
    static $gtype: GObject.GType<ClientProxy>;

    constructor(properties?: Partial<ClientProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClientProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get active(): boolean;
    set active(val: boolean);
    get desktop_id(): string;
    set desktop_id(val: string);
    get desktopId(): string;
    set desktopId(val: string);
    get distance_threshold(): number;
    set distance_threshold(val: number);
    get distanceThreshold(): number;
    set distanceThreshold(val: number);
    get location(): string;
    set location(val: string);
    get requested_accuracy_level(): number;
    set requested_accuracy_level(val: number);
    get requestedAccuracyLevel(): number;
    set requestedAccuracyLevel(val: number);
    get time_threshold(): number;
    set time_threshold(val: number);
    get timeThreshold(): number;
    set timeThreshold(val: number);

    // Constructors

    static new_finish(res: Gio.AsyncResult): ClientProxy;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    // Conflicted with Gio.DBusProxy.new_for_bus_sync
    static new_for_bus_sync(...args: never[]): any;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    // Conflicted with Gio.DBusProxy.new_sync
    static new_sync(...args: never[]): any;

    // Members

    static create(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static create(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static create(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    static create_finish(result: Gio.AsyncResult): ClientProxy;
    static create_full(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static create_full(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static create_full(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    static create_full_finish(result: Gio.AsyncResult): ClientProxy;
    static create_full_sync(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        flags: ClientProxyCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    static create_sync(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null
    ): ClientProxy;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ClientProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ClientProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ClientProxy> | null
    ): Promise<ClientProxy> | void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_start(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_start(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_stop(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_stop(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
    emit_location_updated(arg_old: string, arg_new: string): void;
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_location_updated(arg_old: string, arg_new: string): void;
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): ClientProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module ClientSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClientSkeleton extends Gio.DBusInterfaceSkeleton implements Client, Gio.DBusInterface {
    static $gtype: GObject.GType<ClientSkeleton>;

    constructor(properties?: Partial<ClientSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClientSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get active(): boolean;
    set active(val: boolean);
    get desktop_id(): string;
    set desktop_id(val: string);
    get desktopId(): string;
    set desktopId(val: string);
    get distance_threshold(): number;
    set distance_threshold(val: number);
    get distanceThreshold(): number;
    set distanceThreshold(val: number);
    get location(): string;
    set location(val: string);
    get requested_accuracy_level(): number;
    set requested_accuracy_level(val: number);
    get requestedAccuracyLevel(): number;
    set requestedAccuracyLevel(val: number);
    get time_threshold(): number;
    set time_threshold(val: number);
    get timeThreshold(): number;
    set timeThreshold(val: number);

    // Constructors

    static ["new"](): ClientSkeleton;

    // Implemented Members

    call_start(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_start(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_stop(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_stop(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
    emit_location_updated(arg_old: string, arg_new: string): void;
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_location_updated(arg_old: string, arg_new: string): void;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module LocationProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class LocationProxy
    extends Gio.DBusProxy
    implements Location, Gio.AsyncInitable<LocationProxy>, Gio.DBusInterface, Gio.Initable
{
    static $gtype: GObject.GType<LocationProxy>;

    constructor(properties?: Partial<LocationProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LocationProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get accuracy(): number;
    set accuracy(val: number);
    get altitude(): number;
    set altitude(val: number);
    get description(): string;
    set description(val: string);
    get heading(): number;
    set heading(val: number);
    get latitude(): number;
    set latitude(val: number);
    get longitude(): number;
    set longitude(val: number);
    get speed(): number;
    set speed(val: number);
    get timestamp(): GLib.Variant;
    set timestamp(val: GLib.Variant);

    // Constructors

    static new_finish(res: Gio.AsyncResult): LocationProxy;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LocationProxy;
    // Conflicted with Gio.DBusProxy.new_for_bus_sync
    static new_for_bus_sync(...args: never[]): any;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): LocationProxy;
    // Conflicted with Gio.DBusProxy.new_sync
    static new_sync(...args: never[]): any;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<LocationProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<LocationProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LocationProxy> | null
    ): Promise<LocationProxy> | void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<LocationProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<LocationProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<LocationProxy> | null
    ): Promise<LocationProxy> | void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): LocationProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module LocationSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class LocationSkeleton extends Gio.DBusInterfaceSkeleton implements Location, Gio.DBusInterface {
    static $gtype: GObject.GType<LocationSkeleton>;

    constructor(properties?: Partial<LocationSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LocationSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get accuracy(): number;
    set accuracy(val: number);
    get altitude(): number;
    set altitude(val: number);
    get description(): string;
    set description(val: string);
    get heading(): number;
    set heading(val: number);
    get latitude(): number;
    set latitude(val: number);
    get longitude(): number;
    set longitude(val: number);
    get speed(): number;
    set speed(val: number);
    get timestamp(): GLib.Variant;
    set timestamp(val: GLib.Variant);

    // Constructors

    static ["new"](): LocationSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module ManagerProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class ManagerProxy
    extends Gio.DBusProxy
    implements Manager, Gio.AsyncInitable<ManagerProxy>, Gio.DBusInterface, Gio.Initable
{
    static $gtype: GObject.GType<ManagerProxy>;

    constructor(properties?: Partial<ManagerProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ManagerProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get available_accuracy_level(): number;
    set available_accuracy_level(val: number);
    get availableAccuracyLevel(): number;
    set availableAccuracyLevel(val: number);
    get in_use(): boolean;
    set in_use(val: boolean);
    get inUse(): boolean;
    set inUse(val: boolean);

    // Constructors

    static new_finish(res: Gio.AsyncResult): ManagerProxy;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;
    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerProxy;
    // Conflicted with Gio.DBusProxy.new_for_bus_sync
    static new_for_bus_sync(...args: never[]): any;
    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): ManagerProxy;
    // Conflicted with Gio.DBusProxy.new_sync
    static new_sync(...args: never[]): any;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ManagerProxy>;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;
    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): Promise<ManagerProxy> | void;
    // Conflicted with Gio.DBusProxy.new
    static new(...args: never[]): any;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<ManagerProxy>;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): void;
    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<ManagerProxy> | null
    ): Promise<ManagerProxy> | void;
    // Conflicted with Gio.DBusProxy.new_for_bus
    static new_for_bus(...args: never[]): any;

    // Implemented Members

    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_add_agent(
        arg_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_add_agent(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_add_agent_finish(res: Gio.AsyncResult): boolean;
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_create_client(cancellable?: Gio.Cancellable | null): Promise<[string]>;
    call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_create_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string]> | void;
    call_create_client_finish(res: Gio.AsyncResult): [boolean, string];
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_client(
        arg_client: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_client(
        arg_client: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_client_finish(res: Gio.AsyncResult): boolean;
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_client(cancellable?: Gio.Cancellable | null): Promise<[string]>;
    call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string]> | void;
    call_get_client_finish(res: Gio.AsyncResult): [boolean, string];
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): ManagerProxy;
    // Conflicted with Gio.DBusProxy.new_finish
    new_finish(...args: never[]): any;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module ManagerSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton implements Manager, Gio.DBusInterface {
    static $gtype: GObject.GType<ManagerSkeleton>;

    constructor(properties?: Partial<ManagerSkeleton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ManagerSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get available_accuracy_level(): number;
    set available_accuracy_level(val: number);
    get availableAccuracyLevel(): number;
    set availableAccuracyLevel(val: number);
    get in_use(): boolean;
    set in_use(val: boolean);
    get inUse(): boolean;
    set inUse(val: boolean);

    // Constructors

    static ["new"](): ManagerSkeleton;

    // Implemented Members

    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_add_agent(
        arg_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_add_agent(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_add_agent_finish(res: Gio.AsyncResult): boolean;
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_create_client(cancellable?: Gio.Cancellable | null): Promise<[string]>;
    call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_create_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string]> | void;
    call_create_client_finish(res: Gio.AsyncResult): [boolean, string];
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_client(
        arg_client: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_client(
        arg_client: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_client_finish(res: Gio.AsyncResult): boolean;
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_client(cancellable?: Gio.Cancellable | null): Promise<[string]>;
    call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string]> | void;
    call_get_client_finish(res: Gio.AsyncResult): [boolean, string];
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
    get_object(): Gio.DBusObject | null;
    get_info(): Gio.DBusInterfaceInfo;
    set_object(object?: Gio.DBusObject | null): void;
    vfunc_dup_object(): Gio.DBusObject | null;
    vfunc_get_info(): Gio.DBusInterfaceInfo;
    vfunc_set_object(object?: Gio.DBusObject | null): void;
}
export module Simple {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accuracy_level: AccuracyLevel;
        accuracyLevel: AccuracyLevel;
        client: ClientProxy;
        desktop_id: string;
        desktopId: string;
        distance_threshold: number;
        distanceThreshold: number;
        location: LocationProxy;
        time_threshold: number;
        timeThreshold: number;
    }
}
export class Simple extends GObject.Object implements Gio.AsyncInitable<Simple> {
    static $gtype: GObject.GType<Simple>;

    constructor(properties?: Partial<Simple.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Simple.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set accuracy_level(val: AccuracyLevel);
    set accuracyLevel(val: AccuracyLevel);
    get client(): ClientProxy;
    set desktop_id(val: string);
    set desktopId(val: string);
    get distance_threshold(): number;
    get distanceThreshold(): number;
    get location(): LocationProxy;
    get time_threshold(): number;
    get timeThreshold(): number;

    // Constructors

    static new_finish(result: Gio.AsyncResult): Simple;
    // Conflicted with Gio.AsyncInitable.new_finish
    static new_finish(...args: never[]): any;
    static new_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null): Simple;
    static new_with_thresholds_finish(result: Gio.AsyncResult): Simple;
    static new_with_thresholds_sync(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        time_threshold: number,
        distance_threshold: number,
        cancellable?: Gio.Cancellable | null
    ): Simple;

    // Members

    get_client(): ClientProxy | null;
    get_location(): Location | null;
    static new(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null
    ): Promise<Simple>;
    static new(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Simple> | null
    ): void;
    static new(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Simple> | null
    ): Promise<Simple> | void;
    static new_with_thresholds(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        time_threshold: number,
        distance_threshold: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<Simple>;
    static new_with_thresholds(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        time_threshold: number,
        distance_threshold: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Simple> | null
    ): void;
    static new_with_thresholds(
        desktop_id: string,
        accuracy_level: AccuracyLevel,
        time_threshold: number,
        distance_threshold: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Simple> | null
    ): Promise<Simple> | void;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): Simple;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
}

export class ClientProxyPrivate {
    static $gtype: GObject.GType<ClientProxyPrivate>;

    constructor(copy: ClientProxyPrivate);
}

export class ClientSkeletonPrivate {
    static $gtype: GObject.GType<ClientSkeletonPrivate>;

    constructor(copy: ClientSkeletonPrivate);
}

export class LocationProxyPrivate {
    static $gtype: GObject.GType<LocationProxyPrivate>;

    constructor(copy: LocationProxyPrivate);
}

export class LocationSkeletonPrivate {
    static $gtype: GObject.GType<LocationSkeletonPrivate>;

    constructor(copy: LocationSkeletonPrivate);
}

export class ManagerProxyPrivate {
    static $gtype: GObject.GType<ManagerProxyPrivate>;

    constructor(copy: ManagerProxyPrivate);
}

export class ManagerSkeletonPrivate {
    static $gtype: GObject.GType<ManagerSkeletonPrivate>;

    constructor(copy: ManagerSkeletonPrivate);
}

export class SimplePrivate {
    static $gtype: GObject.GType<SimplePrivate>;

    constructor(copy: SimplePrivate);
}

export interface ClientNamespace {
    $gtype: GObject.GType<Client>;
    prototype: ClientPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Client = ClientPrototype;
export interface ClientPrototype extends GObject.Object {
    // Properties
    active: boolean;
    desktop_id: string;
    desktopId: string;
    distance_threshold: number;
    distanceThreshold: number;
    location: string;
    requested_accuracy_level: number;
    requestedAccuracyLevel: number;
    time_threshold: number;
    timeThreshold: number;

    // Members

    call_start(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_start(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
    call_stop(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_stop(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
    emit_location_updated(arg_old: string, arg_new: string): void;
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_location_updated(arg_old: string, arg_new: string): void;
}

export const Client: ClientNamespace;

export interface LocationNamespace {
    $gtype: GObject.GType<Location>;
    prototype: LocationPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Location = LocationPrototype;
export interface LocationPrototype extends GObject.Object {
    // Properties
    accuracy: number;
    altitude: number;
    description: string;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: GLib.Variant;
}

export const Location: LocationNamespace;

export interface ManagerNamespace {
    $gtype: GObject.GType<Manager>;
    prototype: ManagerPrototype;

    interface_info(): Gio.DBusInterfaceInfo;
    override_properties(klass: GObject.Object, property_id_begin: number): number;
}
export type Manager = ManagerPrototype;
export interface ManagerPrototype extends GObject.Object {
    // Properties
    available_accuracy_level: number;
    availableAccuracyLevel: number;
    in_use: boolean;
    inUse: boolean;

    // Members

    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_add_agent(
        arg_id: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_add_agent(
        arg_id: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_add_agent_finish(res: Gio.AsyncResult): boolean;
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
    call_create_client(cancellable?: Gio.Cancellable | null): Promise<[string]>;
    call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_create_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string]> | void;
    call_create_client_finish(res: Gio.AsyncResult): [boolean, string];
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    call_delete_client(
        arg_client: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    call_delete_client(
        arg_client: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    call_delete_client_finish(res: Gio.AsyncResult): boolean;
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
    call_get_client(cancellable?: Gio.Cancellable | null): Promise<[string]>;
    call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    call_get_client(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string]> | void;
    call_get_client_finish(res: Gio.AsyncResult): [boolean, string];
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
}

export const Manager: ManagerNamespace;
