/**
 * GstGLEGL 1.0
 *
 * Generated from 1.0
 */

import * as GstGL from "gstgl1";
import * as Gst from "gst1";
import * as GObject from "gobject2";

export const GL_DISPLAY_EGL_NAME: string;
export const GL_MEMORY_EGL_ALLOCATOR_NAME: string;
export function egl_get_error_string(err: number): string;
export function egl_image_from_texture(
    context: GstGL.GLContext,
    gl_mem: GstGL.GLMemory,
    attribs: never
): EGLImage | null;
export function gl_memory_egl_init_once(): void;
export function is_gl_memory_egl(mem: Gst.Memory): boolean;
export type EGLImageDestroyNotify = (image: EGLImage, data?: any | null) => void;
export module GLDisplayEGL {
    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLDisplayEGL extends GstGL.GLDisplay {
    static $gtype: GObject.GType<GLDisplayEGL>;

    constructor(properties?: Partial<GLDisplayEGL.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLDisplayEGL.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): GLDisplayEGL;
    static new_with_egl_display(display?: any | null): GLDisplayEGL;

    // Members

    static from_gl_display(display: GstGL.GLDisplay): GLDisplayEGL | null;
    static get_from_native(type: GstGL.GLDisplayType, display: never): any | null;
}
export module GLDisplayEGLDevice {
    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLDisplayEGLDevice extends GstGL.GLDisplay {
    static $gtype: GObject.GType<GLDisplayEGLDevice>;

    constructor(properties?: Partial<GLDisplayEGLDevice.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLDisplayEGLDevice.ConstructorProperties>, ...args: any[]): void;

    // Fields
    device: any;

    // Constructors

    static ["new"](device_index: number): GLDisplayEGLDevice;
    // Conflicted with GstGL.GLDisplay.new
    static ["new"](...args: never[]): any;
    static new_with_egl_device(device?: any | null): GLDisplayEGLDevice;
}
export module GLMemoryEGLAllocator {
    export interface ConstructorProperties extends GstGL.GLMemoryAllocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLMemoryEGLAllocator extends GstGL.GLMemoryAllocator {
    static $gtype: GObject.GType<GLMemoryEGLAllocator>;

    constructor(properties?: Partial<GLMemoryEGLAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLMemoryEGLAllocator.ConstructorProperties>, ...args: any[]): void;
}

export class EGLImage {
    static $gtype: GObject.GType<EGLImage>;

    constructor(
        context: GstGL.GLContext,
        image: any | null,
        format: GstGL.GLFormat,
        user_data: any | null,
        user_data_destroy: EGLImageDestroyNotify
    );
    constructor(copy: EGLImage);

    // Constructors
    static new_wrapped(
        context: GstGL.GLContext,
        image: any | null,
        format: GstGL.GLFormat,
        user_data: any | null,
        user_data_destroy: EGLImageDestroyNotify
    ): EGLImage;

    // Members
    get_image(): any | null;
    static from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: never): EGLImage | null;
}

export class GLMemoryEGL {
    static $gtype: GObject.GType<GLMemoryEGL>;

    constructor(copy: GLMemoryEGL);

    // Members
    get_display(): any | null;
    get_image(): any | null;
    static init_once(): void;
}
