/**
 * Secret 1
 *
 * Generated from 0.21.2
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";
import * as GLib from "glib2";

export const BACKEND_EXTENSION_POINT_NAME: string;
export const COLLECTION_DEFAULT: string;
export const COLLECTION_SESSION: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export function attributes_validate(
    schema: Schema,
    attributes: { [key: string]: any } | GLib.HashTable<any, any>
): boolean;
export function backend_get(flags: BackendFlags, cancellable?: Gio.Cancellable | null): Promise<Backend>;
export function backend_get(
    flags: BackendFlags,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<BackendFlags> | null
): void;
export function backend_get(
    flags: BackendFlags,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<BackendFlags> | null
): Promise<Backend> | void;
export function backend_get_finish(result: Gio.AsyncResult): Backend;
export function error_get_quark(): GLib.Quark;
export function get_schema(type: SchemaType): Schema;
export function password_clear_finish(result: Gio.AsyncResult): boolean;
export function password_clear(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function password_clear(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Schema | null> | null
): void;
export function password_clear(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Schema | null> | null
): Promise<boolean> | void;
export function password_clear_sync(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable?: Gio.Cancellable | null
): boolean;
export function password_lookup_finish(result: Gio.AsyncResult): string;
export function password_lookup(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable?: Gio.Cancellable | null
): Promise<string>;
export function password_lookup(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Schema | null> | null
): void;
export function password_lookup(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Schema | null> | null
): Promise<string> | void;
export function password_lookup_sync(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    cancellable?: Gio.Cancellable | null
): string;
export function password_search_finish(result: Gio.AsyncResult): Retrievable[];
export function password_search(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    flags: SearchFlags,
    cancellable?: Gio.Cancellable | null
): Promise<Retrievable[]>;
export function password_search(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    flags: SearchFlags,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Schema | null> | null
): void;
export function password_search(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    flags: SearchFlags,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Schema | null> | null
): Promise<Retrievable[]> | void;
export function password_search_sync(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    flags: SearchFlags,
    cancellable?: Gio.Cancellable | null
): Retrievable[];
export function password_store_finish(result: Gio.AsyncResult): boolean;
export function password_store(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    collection: string | null,
    label: string,
    password: string,
    cancellable?: Gio.Cancellable | null
): Promise<boolean>;
export function password_store(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    collection: string | null,
    label: string,
    password: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback<Schema | null> | null
): void;
export function password_store(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    collection: string | null,
    label: string,
    password: string,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Schema | null> | null
): Promise<boolean> | void;
export function password_store_binary(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    collection: string | null,
    label: string,
    value: Value,
    cancellable?: Gio.Cancellable | null,
    callback?: Gio.AsyncReadyCallback<Schema | null> | null
): void;
export function password_store_binary_sync(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    collection: string | null,
    label: string,
    value: Value,
    cancellable?: Gio.Cancellable | null
): boolean;
export function password_store_sync(
    schema: Schema | null,
    attributes: { [key: string]: any } | GLib.HashTable<string, string>,
    collection: string | null,
    label: string,
    password: string,
    cancellable?: Gio.Cancellable | null
): boolean;
export function password_wipe(password?: string | null): void;

export namespace BackendFlags {
    export const $gtype: GObject.GType<BackendFlags>;
}

export enum BackendFlags {
    NONE = 0,
    OPEN_SESSION = 2,
    LOAD_COLLECTIONS = 4,
}

export namespace Error {
    export const $gtype: GObject.GType<Error>;
}

export enum Error {
    PROTOCOL = 1,
    IS_LOCKED = 2,
    NO_SUCH_OBJECT = 3,
    ALREADY_EXISTS = 4,
    INVALID_FILE_FORMAT = 5,
    MISMATCHED_SCHEMA = 6,
    NO_MATCHING_ATTRIBUTE = 7,
    WRONG_TYPE = 8,
    EMPTY_TABLE = 9,
}

export namespace SchemaAttributeType {
    export const $gtype: GObject.GType<SchemaAttributeType>;
}

export enum SchemaAttributeType {
    STRING = 0,
    INTEGER = 1,
    BOOLEAN = 2,
}

export namespace SchemaType {
    export const $gtype: GObject.GType<SchemaType>;
}

export enum SchemaType {
    NOTE = 0,
    COMPAT_NETWORK = 1,
}

export namespace CollectionCreateFlags {
    export const $gtype: GObject.GType<CollectionCreateFlags>;
}

export enum CollectionCreateFlags {
    NONE = 0,
}

export namespace CollectionFlags {
    export const $gtype: GObject.GType<CollectionFlags>;
}

export enum CollectionFlags {
    NONE = 0,
    LOAD_ITEMS = 2,
}

export namespace ItemCreateFlags {
    export const $gtype: GObject.GType<ItemCreateFlags>;
}

export enum ItemCreateFlags {
    NONE = 0,
    REPLACE = 2,
}

export namespace ItemFlags {
    export const $gtype: GObject.GType<ItemFlags>;
}

export enum ItemFlags {
    NONE = 0,
    LOAD_SECRET = 2,
}

export namespace SchemaFlags {
    export const $gtype: GObject.GType<SchemaFlags>;
}

export enum SchemaFlags {
    NONE = 0,
    DONT_MATCH_NAME = 2,
}

export namespace SearchFlags {
    export const $gtype: GObject.GType<SearchFlags>;
}

export enum SearchFlags {
    NONE = 0,
    ALL = 2,
    UNLOCK = 4,
    LOAD_SECRETS = 8,
}

export namespace ServiceFlags {
    export const $gtype: GObject.GType<ServiceFlags>;
}

export enum ServiceFlags {
    NONE = 0,
    OPEN_SESSION = 2,
    LOAD_COLLECTIONS = 4,
}
export module Collection {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
        created: number;
        flags: CollectionFlags;
        label: string;
        locked: boolean;
        modified: number;
        service: Service;
    }
}
export class Collection
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<Collection>, Gio.DBusInterface, Gio.Initable
{
    static $gtype: GObject.GType<Collection>;

    constructor(properties?: Partial<Collection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Collection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get created(): number;
    set created(val: number);
    get flags(): CollectionFlags;
    get label(): string;
    set label(val: string);
    get locked(): boolean;
    get modified(): number;
    set modified(val: number);
    get service(): Service;

    // Members

    ["delete"](cancellable?: Gio.Cancellable | null): Promise<boolean>;
    ["delete"](cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    ["delete"](
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_finish(result: Gio.AsyncResult): boolean;
    delete_sync(cancellable?: Gio.Cancellable | null): boolean;
    get_created(): number;
    get_flags(): CollectionFlags;
    // Conflicted with Gio.DBusProxy.get_flags
    get_flags(...args: never[]): any;
    get_items(): Item[];
    get_label(): string;
    get_locked(): boolean;
    get_modified(): number;
    get_service(): Service;
    load_items(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    load_items(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    load_items(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    load_items_finish(result: Gio.AsyncResult): boolean;
    load_items_sync(cancellable?: Gio.Cancellable | null): boolean;
    refresh(): void;
    search(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Item[]>;
    search(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    search(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Item[]> | void;
    search_finish(result: Gio.AsyncResult): Item[];
    search_sync(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null
    ): Item[];
    set_label(label: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_label(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_label(
        label: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_label_finish(result: Gio.AsyncResult): boolean;
    set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean;
    static create(
        service: Service | null,
        label: string,
        alias: string | null,
        flags: CollectionCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Collection>;
    static create(
        service: Service | null,
        label: string,
        alias: string | null,
        flags: CollectionCreateFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Collection> | null
    ): void;
    static create(
        service: Service | null,
        label: string,
        alias: string | null,
        flags: CollectionCreateFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Collection> | null
    ): Promise<Collection> | void;
    static create_finish(result: Gio.AsyncResult): Collection;
    static create_sync(
        service: Service | null,
        label: string,
        alias: string | null,
        flags: CollectionCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Collection;
    static for_alias(
        service: Service | null,
        alias: string,
        flags: CollectionFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Collection | null>;
    static for_alias(
        service: Service | null,
        alias: string,
        flags: CollectionFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Collection> | null
    ): void;
    static for_alias(
        service: Service | null,
        alias: string,
        flags: CollectionFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Collection> | null
    ): Promise<Collection | null> | void;
    static for_alias_finish(result: Gio.AsyncResult): Collection | null;
    static for_alias_sync(
        service: Service | null,
        alias: string,
        flags: CollectionFlags,
        cancellable?: Gio.Cancellable | null
    ): Collection | null;

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
    new_finish(res: Gio.AsyncResult): Collection;
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
export module Item {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
        flags: ItemFlags;
        locked: boolean;
        service: Service;
    }
}
export class Item
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<Item>, Gio.DBusInterface, Gio.Initable, Retrievable
{
    static $gtype: GObject.GType<Item>;

    constructor(properties?: Partial<Item.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Item.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get flags(): ItemFlags;
    get locked(): boolean;
    get service(): Service;

    // Implemented Properties

    get attributes(): GLib.HashTable<string, string>;
    set attributes(val: GLib.HashTable<string, string>);
    get created(): number;
    set created(val: number);
    get label(): string;
    set label(val: string);
    get modified(): number;
    set modified(val: number);

    // Members

    ["delete"](cancellable?: Gio.Cancellable | null): Promise<boolean>;
    ["delete"](cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    ["delete"](
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_finish(result: Gio.AsyncResult): boolean;
    delete_sync(cancellable?: Gio.Cancellable | null): boolean;
    get_attributes(): GLib.HashTable<string, string>;
    get_created(): number;
    get_flags(): ItemFlags;
    // Conflicted with Gio.DBusProxy.get_flags
    get_flags(...args: never[]): any;
    get_label(): string;
    get_locked(): boolean;
    get_modified(): number;
    get_schema_name(): string | null;
    get_secret(): Value | null;
    get_service(): Service;
    load_secret(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    load_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    load_secret(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    load_secret_finish(result: Gio.AsyncResult): boolean;
    load_secret_sync(cancellable?: Gio.Cancellable | null): boolean;
    refresh(): void;
    set_attributes(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    set_attributes(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_attributes(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_attributes_finish(result: Gio.AsyncResult): boolean;
    set_attributes_sync(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    set_label(label: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_label(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_label(
        label: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_label_finish(result: Gio.AsyncResult): boolean;
    set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean;
    set_secret(value: Value, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_secret(value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    set_secret(
        value: Value,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_secret_finish(result: Gio.AsyncResult): boolean;
    set_secret_sync(value: Value, cancellable?: Gio.Cancellable | null): boolean;
    static create(
        collection: Collection,
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        label: string,
        value: Value,
        flags: ItemCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Item>;
    static create(
        collection: Collection,
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        label: string,
        value: Value,
        flags: ItemCreateFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Item> | null
    ): void;
    static create(
        collection: Collection,
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        label: string,
        value: Value,
        flags: ItemCreateFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Item> | null
    ): Promise<Item> | void;
    static create_finish(result: Gio.AsyncResult): Item;
    static create_sync(
        collection: Collection,
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        label: string,
        value: Value,
        flags: ItemCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Item;
    static load_secrets(items: Item[], cancellable?: Gio.Cancellable | null): Promise<boolean>;
    static load_secrets(
        items: Item[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Item> | null
    ): void;
    static load_secrets(
        items: Item[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Item> | null
    ): Promise<boolean> | void;
    static load_secrets_finish(result: Gio.AsyncResult): boolean;
    static load_secrets_sync(items: Item[], cancellable?: Gio.Cancellable | null): boolean;

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
    new_finish(res: Gio.AsyncResult): Item;
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
    retrieve_secret(cancellable?: Gio.Cancellable | null): Promise<Value | null>;
    retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    retrieve_secret(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Value | null> | void;
    retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
    retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null;
    vfunc_retrieve_secret(cancellable?: Gio.Cancellable | null): Promise<Value | null>;
    vfunc_retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_retrieve_secret(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Value | null> | void;
    vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
}
export module Prompt {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Prompt extends Gio.DBusProxy implements Gio.AsyncInitable<Prompt>, Gio.DBusInterface, Gio.Initable {
    static $gtype: GObject.GType<Prompt>;

    constructor(properties?: Partial<Prompt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Prompt.ConstructorProperties>, ...args: any[]): void;

    // Members

    perform(
        window_id: string | null,
        return_type: GLib.VariantType,
        cancellable?: Gio.Cancellable | null
    ): Promise<GLib.Variant>;
    perform(
        window_id: string | null,
        return_type: GLib.VariantType,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    perform(
        window_id: string | null,
        return_type: GLib.VariantType,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    perform_finish(result: Gio.AsyncResult): GLib.Variant;
    perform_sync(
        window_id: string | null,
        cancellable: Gio.Cancellable | null,
        return_type: GLib.VariantType
    ): GLib.Variant;
    run(window_id: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant;

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
    new_finish(res: Gio.AsyncResult): Prompt;
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
export module Service {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}
export class Service
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<Service>, Gio.DBusInterface, Gio.Initable, Backend
{
    static $gtype: GObject.GType<Service>;

    constructor(properties?: Partial<Service.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Service.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get flags(): ServiceFlags;

    // Members

    clear(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    clear(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    clear(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    clear_finish(result: Gio.AsyncResult): boolean;
    clear_sync(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    create_item_dbus_path_sync(
        collection_path: string,
        properties: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
        value: Value,
        flags: ItemCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): string;
    decode_dbus_secret(value: GLib.Variant): Value;
    encode_dbus_secret(value: Value): GLib.Variant;
    ensure_session(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    ensure_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    ensure_session(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    ensure_session_finish(result: Gio.AsyncResult): boolean;
    ensure_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    get_collection_gtype(): GObject.GType;
    get_collections(): Collection[] | null;
    get_flags(): ServiceFlags;
    // Conflicted with Gio.DBusProxy.get_flags
    get_flags(...args: never[]): any;
    get_item_gtype(): GObject.GType;
    get_session_algorithms(): string | null;
    get_session_dbus_path(): string | null;
    load_collections(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    load_collections(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    load_collections(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    load_collections_finish(result: Gio.AsyncResult): boolean;
    load_collections_sync(cancellable?: Gio.Cancellable | null): boolean;
    lock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): Promise<[number, Gio.DBusProxy[] | null]>;
    lock(
        objects: Gio.DBusProxy[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    lock(
        objects: Gio.DBusProxy[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[number, Gio.DBusProxy[] | null]> | void;
    lock_finish(result: Gio.AsyncResult): [number, Gio.DBusProxy[] | null];
    lock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [number, Gio.DBusProxy[] | null];
    lookup(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null
    ): Promise<Value>;
    lookup(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    lookup(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Value> | void;
    lookup_finish(result: Gio.AsyncResult): Value;
    lookup_sync(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        cancellable?: Gio.Cancellable | null
    ): Value;
    prompt(
        prompt: Prompt,
        return_type?: GLib.VariantType | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<GLib.Variant>;
    prompt(
        prompt: Prompt,
        return_type: GLib.VariantType | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    prompt(
        prompt: Prompt,
        return_type?: GLib.VariantType | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    prompt_finish(result: Gio.AsyncResult): GLib.Variant;
    prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant;
    search(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Item[]>;
    search(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    search(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Item[]> | void;
    search_finish(result: Gio.AsyncResult): Item[];
    search_sync(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null
    ): Item[];
    set_alias(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    set_alias(
        alias: string,
        collection: Collection | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    set_alias(
        alias: string,
        collection?: Collection | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    set_alias_finish(result: Gio.AsyncResult): boolean;
    set_alias_sync(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null): boolean;
    store(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        collection: string | null,
        label: string,
        value: Value,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    store(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        collection: string | null,
        label: string,
        value: Value,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    store(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        collection: string | null,
        label: string,
        value: Value,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    store_finish(result: Gio.AsyncResult): boolean;
    store_sync(
        schema: Schema | null,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        collection: string | null,
        label: string,
        value: Value,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    unlock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): Promise<[number, Gio.DBusProxy[] | null]>;
    unlock(
        objects: Gio.DBusProxy[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    unlock(
        objects: Gio.DBusProxy[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[number, Gio.DBusProxy[] | null]> | void;
    unlock_finish(result: Gio.AsyncResult): [number, Gio.DBusProxy[] | null];
    unlock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [number, Gio.DBusProxy[] | null];
    vfunc_get_collection_gtype(): GObject.GType;
    vfunc_get_item_gtype(): GObject.GType;
    vfunc_prompt_async(
        prompt: Prompt,
        return_type: GLib.VariantType,
        cancellable?: Gio.Cancellable | null
    ): Promise<GLib.Variant>;
    vfunc_prompt_async(
        prompt: Prompt,
        return_type: GLib.VariantType,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_prompt_async(
        prompt: Prompt,
        return_type: GLib.VariantType,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    vfunc_prompt_finish(result: Gio.AsyncResult): GLib.Variant;
    vfunc_prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant;
    static disconnect(): void;
    static get(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Promise<Service>;
    static get(
        flags: ServiceFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Service> | null
    ): void;
    static get(
        flags: ServiceFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Service> | null
    ): Promise<Service> | void;
    // Conflicted with Secret.Backend.get
    static get(...args: never[]): any;
    static get_finish(result: Gio.AsyncResult): Service;
    static get_sync(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service;
    static open(
        service_gtype: GObject.GType,
        service_bus_name: string | null,
        flags: ServiceFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Service>;
    static open(
        service_gtype: GObject.GType,
        service_bus_name: string | null,
        flags: ServiceFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Service> | null
    ): void;
    static open(
        service_gtype: GObject.GType,
        service_bus_name: string | null,
        flags: ServiceFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Service> | null
    ): Promise<Service> | void;
    static open_finish(result: Gio.AsyncResult): Service;
    static open_sync(
        service_gtype: GObject.GType,
        service_bus_name: string | null,
        flags: ServiceFlags,
        cancellable?: Gio.Cancellable | null
    ): Service;

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
    new_finish(res: Gio.AsyncResult): Service;
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
    vfunc_clear(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    vfunc_clear(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_clear(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_clear_finish(result: Gio.AsyncResult): boolean;
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_ensure_for_flags(
        flags: BackendFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_ensure_for_flags(
        flags: BackendFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean;
    vfunc_lookup(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null
    ): Promise<Value>;
    vfunc_lookup(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Value> | void;
    vfunc_lookup_finish(result: Gio.AsyncResult): Value;
    vfunc_search(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_store(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        collection: string,
        label: string,
        value: Value,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    vfunc_store(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        collection: string,
        label: string,
        value: Value,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_store(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        collection: string,
        label: string,
        value: Value,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_store_finish(result: Gio.AsyncResult): boolean;
}

export class CollectionPrivate {
    static $gtype: GObject.GType<CollectionPrivate>;

    constructor(copy: CollectionPrivate);
}

export class ItemPrivate {
    static $gtype: GObject.GType<ItemPrivate>;

    constructor(copy: ItemPrivate);
}

export class PromptPrivate {
    static $gtype: GObject.GType<PromptPrivate>;

    constructor(copy: PromptPrivate);
}

export class Schema {
    static $gtype: GObject.GType<Schema>;

    constructor(
        name: string,
        flags: SchemaFlags,
        attribute_names_and_types: { [key: string]: any } | GLib.HashTable<string, SchemaAttributeType>
    );
    constructor(copy: Schema);

    // Fields
    name: string;
    flags: SchemaFlags;
    attributes: SchemaAttribute[];

    // Constructors
    static ["new"](
        name: string,
        flags: SchemaFlags,
        attribute_names_and_types: { [key: string]: any } | GLib.HashTable<string, SchemaAttributeType>
    ): Schema;

    // Members
    ref(): Schema;
    unref(): void;
}

export class SchemaAttribute {
    static $gtype: GObject.GType<SchemaAttribute>;

    constructor(copy: SchemaAttribute);

    // Fields
    name: string;
    type: SchemaAttributeType;
}

export class ServicePrivate {
    static $gtype: GObject.GType<ServicePrivate>;

    constructor(copy: ServicePrivate);
}

export class Value {
    static $gtype: GObject.GType<Value>;

    constructor(secret: string, length: number, content_type: string);
    constructor(copy: Value);

    // Constructors
    static ["new"](secret: string, length: number, content_type: string): Value;
    static new_full(secret: string, length: number, content_type: string): Value;

    // Members
    get(): Uint8Array;
    get_content_type(): string;
    get_text(): string | null;
    ref(): Value;
    unref(): void;
    unref_to_password(length: number): [string, number];
}

export interface BackendNamespace {
    $gtype: GObject.GType<Backend>;
    prototype: BackendPrototype;

    get(flags: BackendFlags, cancellable?: Gio.Cancellable | null): Promise<Backend>;
    get(
        flags: BackendFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Backend> | null
    ): void;
    get(
        flags: BackendFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Backend> | null
    ): Promise<Backend> | void;
    get_finish(result: Gio.AsyncResult): Backend;
}
export type Backend = BackendPrototype;
export interface BackendPrototype extends Gio.AsyncInitable<Backend> {
    // Properties
    readonly flags: ServiceFlags;

    // Members

    vfunc_clear(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    vfunc_clear(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_clear(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_clear_finish(result: Gio.AsyncResult): boolean;
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_ensure_for_flags(
        flags: BackendFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_ensure_for_flags(
        flags: BackendFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean;
    vfunc_lookup(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null
    ): Promise<Value>;
    vfunc_lookup(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_lookup(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Value> | void;
    vfunc_lookup_finish(result: Gio.AsyncResult): Value;
    vfunc_search(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        flags: SearchFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_store(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        collection: string,
        label: string,
        value: Value,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    vfunc_store(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        collection: string,
        label: string,
        value: Value,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_store(
        schema: Schema,
        attributes: { [key: string]: any } | GLib.HashTable<any, any>,
        collection: string,
        label: string,
        value: Value,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_store_finish(result: Gio.AsyncResult): boolean;
}

export const Backend: BackendNamespace;

export interface RetrievableNamespace {
    $gtype: GObject.GType<Retrievable>;
    prototype: RetrievablePrototype;
}
export type Retrievable = RetrievablePrototype;
export interface RetrievablePrototype extends GObject.Object {
    // Properties
    attributes: GLib.HashTable<string, string>;
    created: number;
    label: string;
    modified: number;

    // Members

    get_attributes(): GLib.HashTable<string, string>;
    get_created(): number;
    get_label(): string;
    get_modified(): number;
    retrieve_secret(cancellable?: Gio.Cancellable | null): Promise<Value | null>;
    retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    retrieve_secret(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Value | null> | void;
    retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
    retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null;
    vfunc_retrieve_secret(cancellable?: Gio.Cancellable | null): Promise<Value | null>;
    vfunc_retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_retrieve_secret(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Value | null> | void;
    vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
}

export const Retrievable: RetrievableNamespace;
