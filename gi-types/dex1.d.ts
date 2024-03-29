/**
 * Dex 1
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";
import * as GLib from "glib2";

export function aio_read(
    aio_context: AioContext,
    fd: number,
    buffer: any | null,
    count: number,
    offset: number
): Future;
export function aio_write(
    aio_context: AioContext,
    fd: number,
    buffer: any | null,
    count: number,
    offset: number
): Future;
export function bus_get(bus_type: Gio.BusType): Future;
export function dbus_connection_call(
    connection: Gio.DBusConnection,
    bus_name: string,
    object_path: string,
    interface_name: string,
    method_name: string,
    parameters: GLib.Variant,
    reply_type: GLib.VariantType,
    flags: Gio.DBusCallFlags,
    timeout_msec: number
): Future;
export function dbus_connection_call_with_unix_fd_list(
    connection: Gio.DBusConnection,
    bus_name: string,
    object_path: string,
    interface_name: string,
    method_name: string,
    parameters: GLib.Variant,
    reply_type: GLib.VariantType,
    flags: Gio.DBusCallFlags,
    timeout_msec: number,
    fd_list?: Gio.UnixFDList | null
): Future;
export function dbus_connection_send_message_with_reply(
    connection: Gio.DBusConnection,
    message: Gio.DBusMessage,
    flags: Gio.DBusSendMessageFlags,
    timeout_msec: number
): [Future, number];
export function error_quark(): GLib.Quark;
export function file_copy(
    source: Gio.File,
    destination: Gio.File,
    flags: Gio.FileCopyFlags,
    io_priority: number
): Future;
export function file_enumerate_children(
    file: Gio.File,
    attributes: string,
    flags: Gio.FileQueryInfoFlags,
    io_priority: number
): Future;
export function file_enumerator_next_files(
    file_enumerator: Gio.FileEnumerator,
    num_files: number,
    io_priority: number
): Future;
export function file_load_contents_bytes(file: Gio.File): Future;
export function file_make_directory(file: Gio.File, io_priority: number): Future;
export function file_query_info(
    file: Gio.File,
    attributes: string,
    flags: Gio.FileQueryInfoFlags,
    io_priority: number
): Future;
export function file_read(file: Gio.File, io_priority: number): Future;
export function file_replace(
    file: Gio.File,
    etag: string,
    make_backup: boolean,
    flags: Gio.FileCreateFlags,
    io_priority: number
): Future;
export function get_min_stack_size(): number;
export function get_page_size(): number;
export function init(): void;
export function input_stream_close(self: Gio.InputStream, io_priority: number): Future;
export function input_stream_read(
    self: Gio.InputStream,
    buffer: any | null,
    count: number,
    io_priority: number
): Future;
export function input_stream_read_bytes(self: Gio.InputStream, count: number, io_priority: number): Future;
export function input_stream_skip(self: Gio.InputStream, count: number, io_priority: number): Future;
export function io_stream_close(io_stream: Gio.IOStream, io_priority: number): Future;
export function output_stream_close(self: Gio.OutputStream, io_priority: number): Future;
export function output_stream_splice(
    output: Gio.OutputStream,
    input: Gio.InputStream,
    flags: Gio.OutputStreamSpliceFlags,
    io_priority: number
): Future;
export function output_stream_write(
    self: Gio.OutputStream,
    buffer: any | null,
    count: number,
    io_priority: number
): Future;
export function output_stream_write_bytes(
    self: Gio.OutputStream,
    bytes: GLib.Bytes | Uint8Array,
    io_priority: number
): Future;
export function resolver_lookup_by_name(resolver: Gio.Resolver, address: string): Future;
export function socket_client_connect(
    socket_client: Gio.SocketClient,
    socket_connectable: Gio.SocketConnectable
): Future;
export function socket_listener_accept(listener: Gio.SocketListener): Future;
export function subprocess_wait_check(subprocess: Gio.Subprocess): Future;
export function value_get_object(value: GObject.Value | any): Object | null;
export function value_set_object(value: GObject.Value | any, object?: Object | null): void;
export function value_take_object(value: GObject.Value | any, object?: Object | null): void;
export type FiberFunc = () => Future | null;
export type FutureCallback = (future: Future) => Future | null;
export type SchedulerFunc = () => void;
export type FileInfoList = object | null;
export type InetAddressList = object | null;

export namespace BlockKind {
    export const $gtype: GObject.GType<BlockKind>;
}

export enum BlockKind {
    THEN = 1,
    CATCH = 2,
    FINALLY = 3,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Fields
    static UNKNOWN: number;
    static CHANNEL_CLOSED: number;
    static DEPENDENCY_FAILED: number;
    static FIBER_EXITED: number;
    static NO_FIBER: number;
    static PENDING: number;
    static SEMAPHORE_CLOSED: number;
    static TIMED_OUT: number;
    static TYPE_MISMATCH: number;
    static TYPE_NOT_SUPPORTED: number;
    static FIBER_CANCELLED: number;
}

export namespace FutureStatus {
    export const $gtype: GObject.GType<FutureStatus>;
}

export enum FutureStatus {
    PENDING = 0,
    RESOLVED = 1,
    REJECTED = 2,
}
export module AsyncPair {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class AsyncPair extends Future {
    static $gtype: GObject.GType<AsyncPair>;

    constructor(properties?: Partial<AsyncPair.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AsyncPair.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](instance: any | null, info: AsyncPairInfo): AsyncPair;

    // Members

    get_cancellable(): Gio.Cancellable;
    return_boolean(value: boolean): void;
    return_error(error: GLib.Error): void;
    return_int64(value: number): void;
    return_object(instance: GObject.Object): void;
    return_string(value?: string | null): void;
    return_uint64(value: number): void;
    return_variant(variant: GLib.Variant): void;
    set_cancel_on_discard(cancel_on_discard: boolean): void;
}
export module AsyncResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AsyncResult extends GObject.Object implements Gio.AsyncResult {
    static $gtype: GObject.GType<AsyncResult>;

    constructor(properties?: Partial<AsyncResult.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AsyncResult.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        source_object?: any | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback | null
    ): AsyncResult;

    // Members

    ["await"](future: Future): void;
    dup_future(): Future | null;
    get_name(): string;
    propagate_boolean(): boolean;
    propagate_double(): number;
    propagate_int(): number;
    propagate_pointer(): any | null;
    set_name(name: string): void;
    set_priority(priority: number): void;
    set_static_name(name: string): void;

    // Implemented Members

    get_source_object<T = GObject.Object>(): T;
    get_user_data(): any | null;
    is_tagged(source_tag?: any | null): boolean;
    legacy_propagate_error(): boolean;
    vfunc_get_source_object<T = GObject.Object>(): T;
    vfunc_get_user_data(): any | null;
    vfunc_is_tagged(source_tag?: any | null): boolean;
}
export module Block {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class Block extends Future {
    static $gtype: GObject.GType<Block>;

    constructor(properties?: Partial<Block.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Block.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_kind(): BlockKind;
    get_scheduler(): Scheduler;
}
export module Cancellable {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class Cancellable extends Future {
    static $gtype: GObject.GType<Cancellable>;

    constructor(properties?: Partial<Cancellable.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Cancellable.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Cancellable;
    static new_from_cancellable(cancellable?: Gio.Cancellable | null): Cancellable;

    // Members

    cancel(): void;
}
export module Channel {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Channel extends Object {
    static $gtype: GObject.GType<Channel>;

    constructor(properties?: Partial<Channel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Channel.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](capacity: number): Channel;

    // Members

    can_receive(): boolean;
    can_send(): boolean;
    close_receive(): void;
    close_send(): void;
    receive(): Future;
    receive_all(): Future;
    send(future: Future): Future;
}
export module Delayed {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class Delayed extends Future {
    static $gtype: GObject.GType<Delayed>;

    constructor(properties?: Partial<Delayed.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Delayed.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](future: Future): Delayed;

    // Members

    dup_future(): Future | null;
    release(): void;
}
export module Fiber {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class Fiber extends Future {
    static $gtype: GObject.GType<Fiber>;

    constructor(properties?: Partial<Fiber.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Fiber.ConstructorProperties>, ...args: any[]): void;
}
export module Future {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Future extends Object {
    static $gtype: GObject.GType<Future>;

    constructor(properties?: Partial<Future.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Future.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static all_race(futures: Future[]): Future;
    static all(futures: Future[]): Future;
    static any(futures: Future[]): Future;
    static ["catch"](future: Future, callback: FutureCallback): Future;
    static catch_loop(future: Future, callback: FutureCallback): Future;
    static ["finally"](future: Future, callback: FutureCallback): Future;
    static finally_loop(future: Future, callback: FutureCallback): Future;
    static first(futures: Future[]): Future;
    static new_for_boolean(v_bool: boolean): Future;
    static new_for_double(v_double: number): Future;
    static new_for_errno(errno_: number): Future;
    static new_for_error(error: GLib.Error): Future;
    static new_for_float(v_float: number): Future;
    static new_for_int(v_int: number): Future;
    static new_for_int64(v_int64: number): Future;
    static new_for_object(value: GObject.Object): Future;
    static new_for_pointer(pointer?: any | null): Future;
    static new_for_string(string: string): Future;
    static new_for_uint(v_uint: number): Future;
    static new_for_uint64(v_uint64: number): Future;
    static new_for_value(value: GObject.Value | any): Future;
    static new_infinite(): Future;
    static new_take_object(value: GObject.Object): Future;
    static new_take_string(string: string): Future;
    static then(future: Future, callback: FutureCallback): Future;
    static then_loop(future: Future, callback: FutureCallback): Future;

    // Members

    ["await"](): boolean;
    await_boolean(): boolean;
    await_boxed(): any | null;
    await_double(): number;
    await_enum(): number;
    await_flags(): number;
    await_float(): number;
    await_int(): number;
    await_int64(): number;
    await_object<T = GObject.Object>(): T;
    await_pointer(): any | null;
    await_string(): string | null;
    await_uint(): number;
    await_uint64(): number;
    await_variant(): GLib.Variant;
    disown(): void;
    get_name(): string;
    get_status(): FutureStatus;
    get_value(): unknown;
}
export module FutureSet {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class FutureSet extends Future {
    static $gtype: GObject.GType<FutureSet>;

    constructor(properties?: Partial<FutureSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FutureSet.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_future_at(position: number): Future;
    get_size(): number;
    get_value_at(position: number): unknown;
}
export module MainScheduler {
    export interface ConstructorProperties extends Scheduler.ConstructorProperties {
        [key: string]: any;
    }
}
export class MainScheduler extends Scheduler {
    static $gtype: GObject.GType<MainScheduler>;

    constructor(properties?: Partial<MainScheduler.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MainScheduler.ConstructorProperties>, ...args: any[]): void;
}
export module Object {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Members

    ref(): Object;
    unref(): void;
}
export module Promise {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class Promise extends Future {
    static $gtype: GObject.GType<Promise>;

    constructor(properties?: Partial<Promise.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Promise.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Promise;
    static new_cancellable(): Promise;

    // Members

    get_cancellable(): Gio.Cancellable | null;
    reject(error: GLib.Error): void;
    resolve(value: GObject.Value | any): void;
    resolve_boolean(value: boolean): void;
    resolve_double(value: number): void;
    resolve_float(value: number): void;
    resolve_int(value: number): void;
    resolve_int64(value: number): void;
    resolve_long(value: number): void;
    resolve_object(object?: any | null): void;
    resolve_string(value: string): void;
    resolve_uint(value: number): void;
    resolve_uint64(value: number): void;
    resolve_ulong(value: number): void;
}
export module Scheduler {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Scheduler extends Object {
    static $gtype: GObject.GType<Scheduler>;

    constructor(properties?: Partial<Scheduler.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Scheduler.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_main_context(): GLib.MainContext;
    push(func: SchedulerFunc): void;
    spawn(stack_size: number): Future;
    static get_default(): Scheduler;
    static get_thread_default(): Scheduler | null;
    static ref_thread_default(): Scheduler | null;
}
export module StaticFuture {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class StaticFuture extends Future {
    static $gtype: GObject.GType<StaticFuture>;

    constructor(properties?: Partial<StaticFuture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StaticFuture.ConstructorProperties>, ...args: any[]): void;
}
export module ThreadPoolScheduler {
    export interface ConstructorProperties extends Scheduler.ConstructorProperties {
        [key: string]: any;
    }
}
export class ThreadPoolScheduler extends Scheduler {
    static $gtype: GObject.GType<ThreadPoolScheduler>;

    constructor(properties?: Partial<ThreadPoolScheduler.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThreadPoolScheduler.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ThreadPoolScheduler;

    // Members

    static get_default(): Scheduler;
}
export module Timeout {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class Timeout extends Future {
    static $gtype: GObject.GType<Timeout>;

    constructor(properties?: Partial<Timeout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Timeout.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_deadline(deadline: number): Timeout;
    static new_msec(msec: number): Timeout;
    static new_seconds(seconds: number): Timeout;
    static new_usec(usec: number): Timeout;

    // Members

    postpone_until(deadline: number): void;
}
export module UnixSignal {
    export interface ConstructorProperties extends Future.ConstructorProperties {
        [key: string]: any;
    }
}
export class UnixSignal extends Future {
    static $gtype: GObject.GType<UnixSignal>;

    constructor(properties?: Partial<UnixSignal.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnixSignal.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](signum: number): UnixSignal;

    // Members

    get_signum(): number;
}

export class AioContext {
    static $gtype: GObject.GType<AioContext>;

    constructor(copy: AioContext);
}

export class AsyncPairInfo {
    static $gtype: GObject.GType<AsyncPairInfo>;

    constructor(copy: AsyncPairInfo);

    // Fields
    async: any;
    finish: any;
    return_type: GObject.GType;
}
