/**
 * GCab 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as Gio from "gio2";

export function error_quark(): GLib.Quark;
export type FileCallback = (file: File) => boolean;

export namespace Compression {
    export const $gtype: GObject.GType<Compression>;
}

export enum Compression {
    NONE = 0,
    MSZIP = 1,
    QUANTUM = 2,
    LZX = 3,
    MASK = 15,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Fields
    static FORMAT: number;
    static FAILED: number;
    static NOT_SUPPORTED: number;
    static INVALID_DATA: number;
}

export namespace FileAttribute {
    export const $gtype: GObject.GType<FileAttribute>;
}

export enum FileAttribute {
    RDONLY = 1,
    HIDDEN = 2,
    SYSTEM = 4,
    ARCH = 32,
    EXEC = 64,
    NAME_IS_UTF = 128,
}
export module Cabinet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        reserved: Uint8Array;
        signature: Uint8Array;
    }
}
export class Cabinet extends GObject.Object {
    static $gtype: GObject.GType<Cabinet>;

    constructor(properties?: Partial<Cabinet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Cabinet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get reserved(): Uint8Array;
    set reserved(val: Uint8Array);
    get signature(): Uint8Array;
    set signature(val: Uint8Array);

    // Constructors

    static ["new"](): Cabinet;

    // Members

    add_allowed_compression(compression: Compression): void;
    add_folder(folder: Folder): boolean;
    extract(
        path?: Gio.File | null,
        file_callback?: FileCallback | null,
        progress_callback?: Gio.FileProgressCallback | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    extract_simple(path: Gio.File, file_callback?: FileCallback | null, cancellable?: Gio.Cancellable | null): boolean;
    get_folders(): Folder[];
    get_signature(cancellable?: Gio.Cancellable | null): Uint8Array;
    get_size(): number;
    load(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
    write(
        stream: Gio.OutputStream,
        file_callback?: FileCallback | null,
        progress_callback?: Gio.FileProgressCallback | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    write_simple(
        stream: Gio.OutputStream,
        file_callback?: FileCallback | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;
}
export module File {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        bytes: GLib.Bytes;
        file: Gio.File;
        name: string;
    }
}
export class File extends GObject.Object {
    static $gtype: GObject.GType<File>;

    constructor(properties?: Partial<File.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<File.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bytes(): GLib.Bytes;
    set bytes(val: GLib.Bytes);
    get file(): Gio.File;
    set file(val: Gio.File);
    get name(): string;
    set name(val: string);

    // Constructors

    static new_with_bytes(name: string, bytes: GLib.Bytes | Uint8Array): File;
    static new_with_file(name: string, file: Gio.File): File;

    // Members

    get_attributes(): number;
    get_bytes(): GLib.Bytes;
    get_date(result: GLib.TimeVal): boolean;
    get_date_time(): GLib.DateTime;
    get_extract_name(): string | null;
    get_file(): Gio.File;
    get_name(): string;
    get_size(): number;
    set_attributes(attr: number): void;
    set_bytes(bytes: GLib.Bytes | Uint8Array): void;
    set_date(tv: GLib.TimeVal): void;
    set_date_time(dt: GLib.DateTime): void;
    set_extract_name(name?: string | null): void;
}
export module Folder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        compression: Compression;
        comptype: number;
        reserved: Uint8Array;
    }
}
export class Folder extends GObject.Object {
    static $gtype: GObject.GType<Folder>;

    constructor(properties?: Partial<Folder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Folder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get compression(): Compression;
    get comptype(): number;
    get reserved(): Uint8Array;
    set reserved(val: Uint8Array);

    // Constructors

    static ["new"](comptype: number): Folder;

    // Members

    add_file(cabfile: File, recurse: boolean, cancellable?: Gio.Cancellable | null): boolean;
    get_comptype(): number;
    get_file_by_name(name: string): File;
    get_files(): File[];
    get_nfiles(): number;
}
