/**
 * AppStreamCompose 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as AppStream from "appstream1";
import * as GdkPixbuf from "gdkpixbuf2";
import * as Gio from "gio2";

export function build_component_global_id(component_id: string, checksum: string): string;
export function canvas_error_quark(): GLib.Quark;
export function compose_error_quark(): GLib.Quark;
export function filename_from_url(url: string): string;
export function globals_add_hint_tag(
    tag: string,
    severity: AppStream.IssueSeverity,
    explanation: string,
    overrideExisting: boolean
): boolean;
export function globals_clear(): void;
export function globals_get_ffprobe_binary(): string;
export function globals_get_hint_tags(): string[];
export function globals_get_optipng_binary(): string;
export function globals_get_tmp_dir(): string;
export function globals_get_tmp_dir_create(): string;
export function globals_get_use_optipng(): boolean;
export function globals_hint_tag_explanation(tag: string): string;
export function globals_hint_tag_severity(tag: string): AppStream.IssueSeverity;
export function globals_set_ffprobe_binary(path: string): void;
export function globals_set_optipng_binary(path: string): void;
export function globals_set_tmp_dir(path: string): void;
export function globals_set_use_optipng(enabled: boolean): void;
export function image_error_quark(): GLib.Quark;
export function image_format_from_filename(fname: string): ImageFormat;
export function image_format_from_string(str: string): ImageFormat;
export function image_format_to_string(format: ImageFormat): string;
export function optimize_png(fname: string): boolean;
export function pixbuf_blur(src: GdkPixbuf.Pixbuf, radius: number, iterations: number): void;
export function pixbuf_sharpen(src: GdkPixbuf.Pixbuf, radius: number, amount: number): void;
export type CheckMetadataEarlyFn = (cres: Result, unit: Unit) => void;

export class CanvasError extends GLib.Error {
    static $gtype: GObject.GType<CanvasError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CanvasError);

    // Fields
    static FAILED: number;
    static DRAWING: number;
    static FONT: number;
    static UNSUPPORTED: number;

    // Members
    static quark(): GLib.Quark;
}

export class ComposeError extends GLib.Error {
    static $gtype: GObject.GType<ComposeError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ComposeError);

    // Fields
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace IconState {
    export const $gtype: GObject.GType<IconState>;
}

export enum IconState {
    IGNORED = 0,
    CACHED_REMOTE = 1,
    CACHED_ONLY = 2,
    REMOTE_ONLY = 3,
}

export class ImageError extends GLib.Error {
    static $gtype: GObject.GType<ImageError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ImageError);

    // Fields
    static FAILED: number;
    static UNSUPPORTED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ImageFormat {
    export const $gtype: GObject.GType<ImageFormat>;
}

export enum ImageFormat {
    UNKNOWN = 0,
    PNG = 1,
    JPEG = 2,
    GIF = 3,
    SVG = 4,
    SVGZ = 5,
    WEBP = 6,
    AVIF = 7,
    XPM = 8,
}

export namespace ComposeFlags {
    export const $gtype: GObject.GType<ComposeFlags>;
}

export enum ComposeFlags {
    NONE = 0,
    USE_THREADS = 1,
    ALLOW_NET = 2,
    VALIDATE = 4,
    STORE_SCREENSHOTS = 8,
    ALLOW_SCREENCASTS = 16,
    PROCESS_FONTS = 32,
    PROCESS_TRANSLATIONS = 64,
    IGNORE_ICONS = 128,
    PROCESS_UNPAIRED_DESKTOP = 256,
    PROPAGATE_CUSTOM = 512,
    PROPAGATE_ARTIFACTS = 1024,
    NO_FINAL_CHECK = 2048,
    NO_PARTIAL_URLS = 4096,
}

export namespace ImageLoadFlags {
    export const $gtype: GObject.GType<ImageLoadFlags>;
}

export enum ImageLoadFlags {
    NONE = 0,
    SHARPEN = 1,
    ALLOW_UNSUPPORTED = 2,
    ALWAYS_RESIZE = 4,
}

export namespace ImageSaveFlags {
    export const $gtype: GObject.GType<ImageSaveFlags>;
}

export enum ImageSaveFlags {
    NONE = 0,
    OPTIMIZE = 1,
    PAD_16_9 = 2,
    SHARPEN = 4,
    BLUR = 8,
}
export module Canvas {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Canvas extends GObject.Object {
    static $gtype: GObject.GType<Canvas>;

    constructor(properties?: Partial<Canvas.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Canvas.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](width: number, height: number): Canvas;

    // Members

    get_height(): number;
    get_width(): number;
    render_svg(stream: Gio.InputStream): boolean;
    save_png(fname: string): boolean;
}
export module Compose {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Compose extends GObject.Object {
    static $gtype: GObject.GType<Compose>;

    constructor(properties?: Partial<Compose.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Compose.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Compose;

    // Members

    add_allowed_cid(component_id: string): void;
    add_custom_allowed(key_id: string): void;
    add_flags(flags: ComposeFlags): void;
    add_unit(unit: Unit): void;
    fetch_components(): AppStream.Component[];
    finalize_result(result: Result): void;
    finalize_results(): void;
    get_cainfo(): string;
    get_data_result_dir(): string;
    get_flags(): ComposeFlags;
    get_format(): AppStream.FormatKind;
    get_hints_result_dir(): string;
    get_icon_policy(): IconPolicy;
    get_icons_result_dir(): string;
    get_locale_unit(): Unit | null;
    get_max_screenshot_size(): number;
    get_media_baseurl(): string;
    get_media_result_dir(): string;
    get_origin(): string;
    get_prefix(): string;
    get_results(): Result[];
    has_errors(): boolean;
    remove_custom_allowed(key_id: string): void;
    remove_flags(flags: ComposeFlags): void;
    reset(): void;
    run(cancellable?: Gio.Cancellable | null): Result[];
    set_cainfo(cainfo: string): void;
    set_check_metadata_early_func(func: CheckMetadataEarlyFn): void;
    set_data_result_dir(dir: string): void;
    set_flags(flags: ComposeFlags): void;
    set_format(kind: AppStream.FormatKind): void;
    set_hints_result_dir(dir: string): void;
    set_icon_policy(policy: IconPolicy): void;
    set_icons_result_dir(dir: string): void;
    set_locale_unit(locale_unit: Unit): void;
    set_max_screenshot_size(size_bytes: number): void;
    set_media_baseurl(url?: string | null): void;
    set_media_result_dir(dir: string): void;
    set_origin(origin: string): void;
    set_prefix(prefix: string): void;
}
export module DirectoryUnit {
    export interface ConstructorProperties extends Unit.ConstructorProperties {
        [key: string]: any;
    }
}
export class DirectoryUnit extends Unit {
    static $gtype: GObject.GType<DirectoryUnit>;

    constructor(properties?: Partial<DirectoryUnit.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DirectoryUnit.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](root_dir: string): DirectoryUnit;
    // Conflicted with AppStreamCompose.Unit.new
    static ["new"](...args: never[]): any;

    // Members

    get_root(): string;
    set_root(root_dir: string): void;
}
export module Hint {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Hint extends GObject.Object {
    static $gtype: GObject.GType<Hint>;

    constructor(properties?: Partial<Hint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Hint.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Hint;
    static new_for_tag(tag: string): Hint;

    // Members

    add_explanation_var(var_name: string, text: string): void;
    format_explanation(): string;
    get_explanation_template(): string;
    get_explanation_vars_list(): string[];
    get_severity(): AppStream.IssueSeverity;
    get_tag(): string;
    is_error(): boolean;
    is_valid(): boolean;
    set_explanation_template(explanation_tmpl: string): void;
    set_severity(severity: AppStream.IssueSeverity): void;
    set_tag(tag: string): void;
}
export module IconPolicy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconPolicy extends GObject.Object {
    static $gtype: GObject.GType<IconPolicy>;

    constructor(properties?: Partial<IconPolicy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconPolicy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): IconPolicy;

    // Members

    set_policy(icon_size: number, icon_scale: number, state: IconState): void;
}
export module Image {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Image extends GObject.Object {
    static $gtype: GObject.GType<Image>;

    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Image;
    static new_from_data(
        data: any | null,
        len: number,
        dest_size: number,
        compressed: boolean,
        flags: ImageLoadFlags
    ): Image;
    static new_from_file(fname: string, dest_size: number, flags: ImageLoadFlags): Image;

    // Members

    get_height(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_width(): number;
    load_filename(filename: string, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean;
    save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean;
    save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf;
    scale(new_width: number, new_height: number): void;
    scale_to_fit(size: number): void;
    scale_to_height(new_height: number): void;
    scale_to_width(new_width: number): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    static supported_format_names(): GLib.HashTable<any, any>;
}
export module Result {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Result extends GObject.Object {
    static $gtype: GObject.GType<Result>;

    constructor(properties?: Partial<Result.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Result.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Result;

    // Members

    add_component(cpt: AppStream.Component, bytes: GLib.Bytes | Uint8Array): boolean;
    add_component_with_string(cpt: AppStream.Component, data: string): boolean;
    add_hint_by_cid(component_id: string, tag: string, kv: string): boolean;
    add_hint(cpt: AppStream.Component, tag: string, kv: string): boolean;
    components_count(): number;
    fetch_components(): AppStream.Component[];
    fetch_hints_all(): Hint[];
    gcid_for_cid(cid: string): string;
    gcid_for_component(cpt: AppStream.Component): string;
    get_bundle_id(): string;
    get_bundle_kind(): AppStream.BundleKind;
    get_component(cid: string): AppStream.Component;
    get_component_gcids(): string[];
    get_component_ids_with_hints(): string[];
    get_hints(cid: string): Hint[];
    has_hint(cpt: AppStream.Component, tag: string): boolean;
    hints_count(): number;
    is_ignored(cpt: AppStream.Component): boolean;
    remove_component(cpt: AppStream.Component): boolean;
    remove_component_by_id(cid: string): boolean;
    remove_component_full(cpt: AppStream.Component, remove_gcid: boolean): boolean;
    remove_hints_for_cid(cid: string): void;
    set_bundle_id(id: string): void;
    set_bundle_kind(kind: AppStream.BundleKind): void;
    unit_ignored(): boolean;
    update_component_gcid(cpt: AppStream.Component, bytes?: GLib.Bytes | null): boolean;
    update_component_gcid_with_string(cpt: AppStream.Component, data?: string | null): boolean;
}
export module Unit {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Unit extends GObject.Object {
    static $gtype: GObject.GType<Unit>;

    constructor(properties?: Partial<Unit.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Unit.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Unit;

    // Members

    add_relevant_path(path: string): void;
    close(): void;
    dir_exists(dirname: string): boolean;
    file_exists(filename: string): boolean;
    get_bundle_id(): string;
    get_bundle_id_safe(): string;
    get_bundle_kind(): AppStream.BundleKind;
    get_contents(): string[];
    get_relevant_paths(): string[];
    get_user_data(): any | null;
    open(): boolean;
    read_data(filename: string): GLib.Bytes;
    set_bundle_id(id: string): void;
    set_bundle_kind(kind: AppStream.BundleKind): void;
    set_contents(contents: string[]): void;
    set_user_data(user_data?: any | null): void;
    vfunc_close(): void;
    vfunc_dir_exists(dirname: string): boolean;
    vfunc_file_exists(filename: string): boolean;
    vfunc_open(): boolean;
    vfunc_read_data(filename: string): GLib.Bytes;
}

export class IconPolicyIter {
    static $gtype: GObject.GType<IconPolicyIter>;

    constructor(copy: IconPolicyIter);

    // Members
    init(ipolicy: IconPolicy): void;
    next(): [boolean, number, number, IconState | null];
}
