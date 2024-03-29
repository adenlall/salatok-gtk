/**
 * GstVa 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GstVideo from "gstvideo1";
import * as GObject from "gobject2";

export const ALLOCATOR_VASURFACE: string;
export const CAPS_FEATURE_MEMORY_VA: string;
export const MAP_VA: number;
export const VA_DISPLAY_HANDLE_CONTEXT_TYPE_STR: string;
export function buffer_pool_config_set_va_alignment(config: Gst.Structure, align: GstVideo.VideoAlignment): void;
export function buffer_pool_config_set_va_allocation_params(
    config: Gst.Structure,
    usage_hint: number,
    use_derived: VaFeature
): void;
export function context_get_va_display(
    context: Gst.Context,
    type_name: string,
    render_device_path: string
): [boolean, VaDisplay];
export function context_set_va_display(context: Gst.Context, display: VaDisplay): void;
export function va_buffer_create_aux_surface(buffer: Gst.Buffer): boolean;
export function va_buffer_peek_display(buffer: Gst.Buffer): VaDisplay;
export function va_context_query(element: Gst.Element, context_type: string): void;
export function va_dmabuf_memories_setup(
    display: VaDisplay,
    info: GstVideo.VideoInfo,
    mem: Gst.Memory[],
    fds: never[],
    offset: number[],
    usage_hint: number
): boolean;
export function va_element_propagate_display_context(element: Gst.Element, display: VaDisplay): void;
export function va_ensure_element_data(element: any | null, render_device_path: string): [boolean, VaDisplay];
export function va_handle_context_query(element: Gst.Element, query: Gst.Query, display: VaDisplay): boolean;
export function va_handle_set_context(
    element: Gst.Element,
    context: Gst.Context,
    render_device_path: string
): [boolean, VaDisplay];
export function va_memory_peek_display(mem: Gst.Memory): VaDisplay;

export namespace VaFeature {
    export const $gtype: GObject.GType<VaFeature>;
}

export enum VaFeature {
    DISABLED = 0,
    ENABLED = 1,
    AUTO = 2,
}

export namespace VaImplementation {
    export const $gtype: GObject.GType<VaImplementation>;
}

export enum VaImplementation {
    MESA_GALLIUM = 0,
    INTEL_I965 = 1,
    INTEL_IHD = 2,
    OTHER = 3,
    INVALID = 4,
}
export module VaAllocator {
    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class VaAllocator extends Gst.Allocator {
    static $gtype: GObject.GType<VaAllocator>;

    constructor(properties?: Partial<VaAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VaAllocator.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](display: VaDisplay, surface_formats: number[]): VaAllocator;

    // Members

    static alloc(allocator: Gst.Allocator): Gst.Memory;
    static flush(allocator: Gst.Allocator): void;
    static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfo | null, number, VaFeature | null];
    static peek_display(allocator: Gst.Allocator): VaDisplay;
    static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    static set_format(
        allocator: Gst.Allocator,
        info: GstVideo.VideoInfo,
        usage_hint: number,
        use_derived: VaFeature
    ): [boolean, GstVideo.VideoInfo];
    static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
}
export module VaDisplay {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        description: string;
        va_display: any;
        vaDisplay: any;
    }
}
export class VaDisplay extends Gst.Object {
    static $gtype: GObject.GType<VaDisplay>;

    constructor(properties?: Partial<VaDisplay.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VaDisplay.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get description(): string;
    get va_display(): any;
    get vaDisplay(): any;

    // Members

    get_implementation(): VaImplementation;
    get_va_dpy(): any | null;
    initialize(): boolean;
    vfunc_create_va_display(): any | null;
}
export module VaDisplayDrm {
    export interface ConstructorProperties extends VaDisplay.ConstructorProperties {
        [key: string]: any;
        path: string;
    }
}
export class VaDisplayDrm extends VaDisplay {
    static $gtype: GObject.GType<VaDisplayDrm>;

    constructor(properties?: Partial<VaDisplayDrm.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VaDisplayDrm.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get path(): string;

    // Constructors

    static new_from_path(path: string): VaDisplayDrm;
}
export module VaDisplayWrapped {
    export interface ConstructorProperties extends VaDisplay.ConstructorProperties {
        [key: string]: any;
    }
}
export class VaDisplayWrapped extends VaDisplay {
    static $gtype: GObject.GType<VaDisplayWrapped>;

    constructor(properties?: Partial<VaDisplayWrapped.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VaDisplayWrapped.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](handle?: any | null): VaDisplayWrapped;
}
export module VaDmabufAllocator {
    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class VaDmabufAllocator extends Gst.Allocator {
    static $gtype: GObject.GType<VaDmabufAllocator>;

    constructor(properties?: Partial<VaDmabufAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VaDmabufAllocator.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](display: VaDisplay): VaDmabufAllocator;

    // Members

    static flush(allocator: Gst.Allocator): void;
    static get_format(allocator: Gst.Allocator): [boolean, GstVideo.VideoInfo | null, number];
    static prepare_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
    static set_format(allocator: Gst.Allocator, info: GstVideo.VideoInfo, usage_hint: number): boolean;
    static setup_buffer(allocator: Gst.Allocator, buffer: Gst.Buffer): boolean;
}
export module VaPool {
    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
        [key: string]: any;
    }
}
export class VaPool extends Gst.BufferPool {
    static $gtype: GObject.GType<VaPool>;

    constructor(properties?: Partial<VaPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VaPool.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): VaPool;
    static new_with_config(
        caps: Gst.Caps,
        size: number,
        min_buffers: number,
        max_buffers: number,
        usage_hint: number,
        use_derived: VaFeature,
        allocator: Gst.Allocator,
        alloc_params: Gst.AllocationParams
    ): VaPool;

    // Members

    static requires_video_meta(pool: Gst.BufferPool): boolean;
}
