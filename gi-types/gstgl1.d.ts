/**
 * GstGL 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GstVideo from "gstvideo1";
import * as GLib from "glib2";
import * as GstBase from "gstbase1";
import * as GObject from "gobject2";

export const BUFFER_POOL_OPTION_GL_SYNC_META: string;
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string;
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string;
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string;
export const CAPS_FEATURE_MEMORY_GL_BUFFER: string;
export const CAPS_FEATURE_MEMORY_GL_MEMORY: string;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number;
export const GL_API_GLES1_NAME: string;
export const GL_API_GLES2_NAME: string;
export const GL_API_OPENGL3_NAME: string;
export const GL_API_OPENGL_NAME: string;
export const GL_BASE_MEMORY_ALLOCATOR_NAME: string;
export const GL_BUFFER_ALLOCATOR_NAME: string;
export const GL_COLOR_CONVERT_FORMATS: string;
export const GL_COLOR_CONVERT_VIDEO_CAPS: string;
export const GL_CONFIG_STRUCTURE_NAME: string;
export const GL_CONTEXT_TYPE_CGL: string;
export const GL_CONTEXT_TYPE_EAGL: string;
export const GL_CONTEXT_TYPE_EGL: string;
export const GL_CONTEXT_TYPE_GLX: string;
export const GL_CONTEXT_TYPE_WGL: string;
export const GL_DISPLAY_CONTEXT_TYPE: string;
export const GL_MEMORY_ALLOCATOR_NAME: string;
export const GL_MEMORY_PBO_ALLOCATOR_NAME: string;
export const GL_MEMORY_VIDEO_FORMATS_STR: string;
export const GL_RENDERBUFFER_ALLOCATOR_NAME: string;
export const GL_TEXTURE_TARGET_2D_STR: string;
export const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string;
export const GL_TEXTURE_TARGET_RECTANGLE_STR: string;
export const MAP_GL: number;
export function buffer_add_gl_sync_meta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta;
export function buffer_add_gl_sync_meta_full(context: GLContext, buffer: Gst.Buffer, data?: any | null): GLSyncMeta;
export function buffer_pool_config_get_gl_allocation_params(config: Gst.Structure): GLAllocationParams | null;
export function buffer_pool_config_set_gl_allocation_params(
    config: Gst.Structure,
    params?: GLAllocationParams | null
): void;
export function context_get_gl_display(context: Gst.Context): [boolean, GLDisplay | null];
export function context_set_gl_display(context: Gst.Context, display?: GLDisplay | null): void;
export function gl_api_from_string(api_s: string): GLAPI;
export function gl_api_to_string(api: GLAPI): string;
export function gl_base_memory_alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
export function gl_base_memory_error_quark(): GLib.Quark;
export function gl_base_memory_init_once(): void;
export function gl_buffer_init_once(): void;
export function gl_check_extension(name: string, ext: string): boolean;
export function gl_config_caveat_to_string(caveat: GLConfigCaveat): string | null;
export function gl_config_surface_type_to_string(surface_type: GLConfigSurfaceType): string | null;
export function gl_context_error_quark(): GLib.Quark;
export function gl_element_propagate_display_context(element: Gst.Element, display: GLDisplay): void;
export function gl_ensure_element_data(
    element: Gst.Element,
    display_ptr: GLDisplay,
    other_context_ptr: GLContext
): [boolean, GLDisplay, GLContext];
export function gl_format_from_video_info(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat;
export function gl_format_is_supported(context: GLContext, format: GLFormat): boolean;
export function gl_format_type_from_sized_gl_format(format: GLFormat): [GLFormat, number];
export function gl_format_type_n_bytes(format: number, type: number): number;
export function gl_get_affine_transformation_meta_as_ndc(meta: GstVideo.VideoAffineTransformationMeta | null): number[];
export function gl_get_plane_data_size(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number;
export function gl_get_plane_start(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number;
export function gl_handle_context_query(
    element: Gst.Element,
    query: Gst.Query,
    display?: GLDisplay | null,
    context?: GLContext | null,
    other_context?: GLContext | null
): boolean;
export function gl_handle_set_context(element: Gst.Element, context: Gst.Context): [boolean, GLDisplay, GLContext];
export function gl_memory_init_once(): void;
export function gl_memory_pbo_init_once(): void;
export function gl_multiply_matrix4(a: number[], b: number[]): number[];
export function gl_platform_from_string(platform_s: string): GLPlatform;
export function gl_platform_to_string(platform: GLPlatform): string;
export function gl_query_local_gl_context(
    element: Gst.Element,
    direction: Gst.PadDirection,
    context_ptr: GLContext
): [boolean, GLContext];
export function gl_renderbuffer_init_once(): void;
export function gl_set_affine_transformation_meta_from_ndc(
    meta: GstVideo.VideoAffineTransformationMeta,
    matrix: number[]
): void;
export function gl_sized_gl_format_from_gl_format_type(context: GLContext, format: number, type: number): number;
export function gl_stereo_downmix_mode_get_type(): GObject.GType;
export function gl_sync_meta_api_get_type(): GObject.GType;
export function gl_sync_meta_get_info(): Gst.MetaInfo;
export function gl_texture_target_from_gl(target: number): GLTextureTarget;
export function gl_texture_target_from_string(str: string): GLTextureTarget;
export function gl_texture_target_to_buffer_pool_option(target: GLTextureTarget): string | null;
export function gl_texture_target_to_gl(target: GLTextureTarget): number;
export function gl_texture_target_to_string(target: GLTextureTarget): string | null;
export function gl_value_get_texture_target_mask(value: GObject.Value | any): GLTextureTarget;
export function gl_value_set_texture_target(value: GObject.Value | any, target: GLTextureTarget): boolean;
export function gl_value_set_texture_target_from_mask(
    value: GObject.Value | any,
    target_mask: GLTextureTarget
): boolean;
export function gl_version_to_glsl_version(gl_api: GLAPI, maj: number, min: number): GLSLVersion;
export function gl_window_error_quark(): GLib.Quark;
export function glsl_error_quark(): GLib.Quark;
export function glsl_profile_from_string(string: string): GLSLProfile;
export function glsl_profile_to_string(profile: GLSLProfile): string | null;
export function glsl_string_get_version_profile(s: string): [boolean, GLSLVersion, GLSLProfile];
export function glsl_version_from_string(string: string): GLSLVersion;
export function glsl_version_profile_from_string(string: string): [boolean, GLSLVersion, GLSLProfile];
export function glsl_version_profile_to_string(version: GLSLVersion, profile: GLSLProfile): string | null;
export function glsl_version_to_string(version: GLSLVersion): string | null;
export function is_gl_base_memory(mem: Gst.Memory): boolean;
export function is_gl_buffer(mem: Gst.Memory): boolean;
export function is_gl_memory(mem: Gst.Memory): boolean;
export function is_gl_memory_pbo(mem: Gst.Memory): boolean;
export function is_gl_renderbuffer(mem: Gst.Memory): boolean;
export type GLAllocationParamsCopyFunc = (src: GLAllocationParams, dest: GLAllocationParams) => void;
export type GLAllocationParamsFreeFunc = (params?: any | null) => void;
export type GLAsyncDebugLogGetMessage = () => string;
export type GLBaseMemoryAllocatorAllocFunction = (
    allocator: GLBaseMemoryAllocator,
    params: GLAllocationParams
) => GLBaseMemory | null;
export type GLBaseMemoryAllocatorCopyFunction = (
    mem: GLBaseMemory,
    offset: number,
    size: number
) => GLBaseMemory | null;
export type GLBaseMemoryAllocatorCreateFunction = (mem: GLBaseMemory) => boolean;
export type GLBaseMemoryAllocatorDestroyFunction = (mem: GLBaseMemory) => void;
export type GLBaseMemoryAllocatorMapFunction = (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number) => any | null;
export type GLBaseMemoryAllocatorUnmapFunction = (mem: GLBaseMemory, info: Gst.MapInfo) => void;
export type GLContextThreadFunc = (context: GLContext, data?: any | null) => void;
export type GLFilterRenderFunc = (filter: GLFilter, in_tex: GLMemory) => boolean;
export type GLFramebufferFunc = (stuff?: any | null) => boolean;
export type GLWindowCB = (data?: any | null) => void;
export type GLWindowResizeCB = (data: any | null, width: number, height: number) => void;

export class GLBaseMemoryError extends GLib.Error {
    static $gtype: GObject.GType<GLBaseMemoryError>;

    constructor(options: { message: string; code: number });
    constructor(copy: GLBaseMemoryError);

    // Fields
    static FAILED: number;
    static OLD_LIBS: number;
    static RESOURCE_UNAVAILABLE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace GLConfigCaveat {
    export const $gtype: GObject.GType<GLConfigCaveat>;
}

export enum GLConfigCaveat {
    NONE = 0,
    SLOW = 1,
    NON_CONFORMANT = 2,
}

export class GLContextError extends GLib.Error {
    static $gtype: GObject.GType<GLContextError>;

    constructor(options: { message: string; code: number });
    constructor(copy: GLContextError);

    // Fields
    static FAILED: number;
    static WRONG_CONFIG: number;
    static WRONG_API: number;
    static OLD_LIBS: number;
    static CREATE_CONTEXT: number;
    static RESOURCE_UNAVAILABLE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace GLFormat {
    export const $gtype: GObject.GType<GLFormat>;
}

export enum GLFormat {
    LUMINANCE = 6409,
    ALPHA = 6406,
    LUMINANCE_ALPHA = 6410,
    RED = 6403,
    R8 = 33321,
    RG = 33319,
    RG8 = 33323,
    RGB = 6407,
    RGB8 = 32849,
    RGB565 = 36194,
    RGB16 = 32852,
    RGBA = 6408,
    RGBA8 = 32856,
    RGBA16 = 32859,
    DEPTH_COMPONENT16 = 33189,
    DEPTH24_STENCIL8 = 35056,
    RGB10_A2 = 32857,
    R16 = 33322,
    RG16 = 33324,
}

export namespace GLQueryType {
    export const $gtype: GObject.GType<GLQueryType>;
}

export enum GLQueryType {
    NONE = 0,
    TIME_ELAPSED = 1,
    TIMESTAMP = 2,
}

export class GLSLError extends GLib.Error {
    static $gtype: GObject.GType<GLSLError>;

    constructor(options: { message: string; code: number });
    constructor(copy: GLSLError);

    // Fields
    static COMPILE: number;
    static LINK: number;
    static PROGRAM: number;

    // Members
    static quark(): GLib.Quark;
}

export class GLSLVersion {
    static $gtype: GObject.GType<GLSLVersion>;

    constructor(copy: GLSLVersion);

    // Fields
    static NONE: number;
    static "100": number;
    static "110": number;
    static "120": number;
    static "130": number;
    static "140": number;
    static "150": number;
    static "300": number;
    static "310": number;
    static "320": number;
    static "330": number;
    static "400": number;
    static "410": number;
    static "420": number;
    static "430": number;
    static "440": number;
    static "450": number;
}

export namespace GLStereoDownmix {
    export const $gtype: GObject.GType<GLStereoDownmix>;
}

export enum GLStereoDownmix {
    GREEN_MAGENTA_DUBOIS = 0,
    RED_CYAN_DUBOIS = 1,
    AMBER_BLUE_DUBOIS = 2,
}

export namespace GLTextureTarget {
    export const $gtype: GObject.GType<GLTextureTarget>;
}

export enum GLTextureTarget {
    NONE = 0,
    "2D" = 1,
    RECTANGLE = 2,
    EXTERNAL_OES = 3,
}

export namespace GLUploadReturn {
    export const $gtype: GObject.GType<GLUploadReturn>;
}

export enum GLUploadReturn {
    DONE = 1,
    ERROR = -1,
    UNSUPPORTED = -2,
    RECONFIGURE = -3,
    UNSHARED_GL_CONTEXT = -100,
}

export class GLWindowError extends GLib.Error {
    static $gtype: GObject.GType<GLWindowError>;

    constructor(options: { message: string; code: number });
    constructor(copy: GLWindowError);

    // Fields
    static FAILED: number;
    static OLD_LIBS: number;
    static RESOURCE_UNAVAILABLE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace GLAPI {
    export const $gtype: GObject.GType<GLAPI>;
}

export enum GLAPI {
    NONE = 0,
    OPENGL = 1,
    OPENGL3 = 2,
    GLES1 = 32768,
    GLES2 = 65536,
    ANY = 4294967295,
}

export namespace GLBaseMemoryTransfer {
    export const $gtype: GObject.GType<GLBaseMemoryTransfer>;
}

export enum GLBaseMemoryTransfer {
    DOWNLOAD = 1048576,
    UPLOAD = 2097152,
}

export namespace GLConfigSurfaceType {
    export const $gtype: GObject.GType<GLConfigSurfaceType>;
}

export enum GLConfigSurfaceType {
    NONE = 0,
    WINDOW = 1,
    PBUFFER = 2,
    PIXMAP = 4,
}

export namespace GLDisplayType {
    export const $gtype: GObject.GType<GLDisplayType>;
}

export enum GLDisplayType {
    NONE = 0,
    X11 = 1,
    WAYLAND = 2,
    COCOA = 4,
    WIN32 = 8,
    DISPMANX = 16,
    EGL = 32,
    VIV_FB = 64,
    GBM = 128,
    EGL_DEVICE = 256,
    EAGL = 512,
    WINRT = 1024,
    ANDROID = 2048,
    ANY = 4294967295,
}

export namespace GLPlatform {
    export const $gtype: GObject.GType<GLPlatform>;
}

export enum GLPlatform {
    NONE = 0,
    EGL = 1,
    GLX = 2,
    WGL = 4,
    CGL = 8,
    EAGL = 16,
    ANY = 4294967295,
}

export namespace GLSLProfile {
    export const $gtype: GObject.GType<GLSLProfile>;
}

export enum GLSLProfile {
    NONE = 0,
    ES = 1,
    CORE = 2,
    COMPATIBILITY = 4,
    ANY = 4294967295,
}
export module GLBaseFilter {
    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
        [key: string]: any;
        context: GLContext;
    }
}
export class GLBaseFilter extends GstBase.BaseTransform {
    static $gtype: GObject.GType<GLBaseFilter>;

    constructor(properties?: Partial<GLBaseFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLBaseFilter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get context(): GLContext;

    // Fields
    display: GLDisplay;
    in_caps: Gst.Caps;
    out_caps: Gst.Caps;

    // Members

    find_gl_context(): boolean;
    get_gl_context(): GLContext | null;
    vfunc_gl_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
    vfunc_gl_start(): boolean;
    vfunc_gl_stop(): void;
}
export module GLBaseMemoryAllocator {
    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class GLBaseMemoryAllocator extends Gst.Allocator {
    static $gtype: GObject.GType<GLBaseMemoryAllocator>;

    constructor(properties?: Partial<GLBaseMemoryAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLBaseMemoryAllocator.ConstructorProperties>, ...args: any[]): void;

    // Members

    vfunc_alloc(params: GLAllocationParams): GLBaseMemory | null;
    // Conflicted with Gst.Allocator.vfunc_alloc
    vfunc_alloc(...args: never[]): any;
}
export module GLBaseSrc {
    export interface ConstructorProperties extends GstBase.PushSrc.ConstructorProperties {
        [key: string]: any;
        timestamp_offset: number;
        timestampOffset: number;
    }
}
export abstract class GLBaseSrc extends GstBase.PushSrc {
    static $gtype: GObject.GType<GLBaseSrc>;

    constructor(properties?: Partial<GLBaseSrc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLBaseSrc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get timestamp_offset(): number;
    set timestamp_offset(val: number);
    get timestampOffset(): number;
    set timestampOffset(val: number);

    // Fields
    display: GLDisplay;
    context: GLContext;
    out_info: GstVideo.VideoInfo;
    out_caps: Gst.Caps;
    running_time: Gst.ClockTime;

    // Members

    vfunc_fill_gl_memory(mem: GLMemory): boolean;
    vfunc_gl_start(): boolean;
    vfunc_gl_stop(): void;
}
export module GLBufferAllocator {
    export interface ConstructorProperties extends GLBaseMemoryAllocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLBufferAllocator extends GLBaseMemoryAllocator {
    static $gtype: GObject.GType<GLBufferAllocator>;

    constructor(properties?: Partial<GLBufferAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLBufferAllocator.ConstructorProperties>, ...args: any[]): void;
}
export module GLBufferPool {
    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLBufferPool extends Gst.BufferPool {
    static $gtype: GObject.GType<GLBufferPool>;

    constructor(properties?: Partial<GLBufferPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLBufferPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    bufferpool: Gst.BufferPool;
    context: GLContext;

    // Constructors

    static ["new"](context: GLContext): GLBufferPool;
    // Conflicted with Gst.BufferPool.new
    static ["new"](...args: never[]): any;

    // Members

    get_gl_allocation_params(): GLAllocationParams | null;
}
export module GLColorConvert {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLColorConvert extends Gst.Object {
    static $gtype: GObject.GType<GLColorConvert>;

    constructor(properties?: Partial<GLColorConvert.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLColorConvert.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](context: GLContext): GLColorConvert;

    // Members

    decide_allocation(query: Gst.Query): boolean;
    perform(inbuf: Gst.Buffer): Gst.Buffer | null;
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    static fixate_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps;
    static transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
}
export module GLContext {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class GLContext extends Gst.Object {
    static $gtype: GObject.GType<GLContext>;

    constructor(properties?: Partial<GLContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLContext.ConstructorProperties>, ...args: any[]): void;

    // Fields
    gl_vtable: GLFuncs;

    // Constructors

    static ["new"](display: GLDisplay): GLContext;
    static new_wrapped(display: GLDisplay, handle: never, context_type: GLPlatform, available_apis: GLAPI): GLContext;

    // Members

    activate(activate: boolean): boolean;
    can_share(other_context: GLContext): boolean;
    check_feature(feature: string): boolean;
    check_framebuffer_status(fbo_target: number): boolean;
    check_gl_version(api: GLAPI, maj: number, min: number): boolean;
    clear_framebuffer(): void;
    clear_shader(): void;
    create(other_context?: GLContext | null): boolean;
    destroy(): void;
    fill_info(): boolean;
    get_config(): Gst.Structure | null;
    get_display(): GLDisplay;
    get_gl_api(): GLAPI;
    get_gl_context(): never;
    get_gl_platform(): GLPlatform;
    get_gl_platform_version(): [number, number];
    get_gl_version(): [number, number];
    get_proc_address(name: string): any | null;
    get_thread(): GLib.Thread | null;
    get_window(): GLWindow | null;
    is_shared(): boolean;
    request_config(gl_config?: Gst.Structure | null): boolean;
    set_shared_with(share: GLContext): void;
    set_window(window: GLWindow): boolean;
    supports_glsl_profile_version(version: GLSLVersion, profile: GLSLProfile): boolean;
    supports_precision(version: GLSLVersion, profile: GLSLProfile): boolean;
    supports_precision_highp(version: GLSLVersion, profile: GLSLProfile): boolean;
    swap_buffers(): void;
    thread_add(func: GLContextThreadFunc): void;
    vfunc_activate(activate: boolean): boolean;
    vfunc_check_feature(feature: string): boolean;
    vfunc_choose_format(): boolean;
    vfunc_create_context(gl_api: GLAPI, other_context: GLContext): boolean;
    vfunc_destroy_context(): void;
    vfunc_get_config(): Gst.Structure | null;
    vfunc_get_gl_api(): GLAPI;
    vfunc_get_gl_context(): never;
    vfunc_get_gl_platform(): GLPlatform;
    vfunc_get_gl_platform_version(): [number, number];
    vfunc_request_config(gl_config?: Gst.Structure | null): boolean;
    vfunc_swap_buffers(): void;
    static default_get_proc_address(gl_api: GLAPI, name: string): any | null;
    static get_current(): GLContext | null;
    static get_current_gl_api(platform: GLPlatform): [GLAPI, number, number];
    static get_current_gl_context(context_type: GLPlatform): never | null;
    static get_proc_address_with_platform(context_type: GLPlatform, gl_api: GLAPI, name: string): any | null;
}
export module GLDisplay {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLDisplay extends Gst.Object {
    static $gtype: GObject.GType<GLDisplay>;

    constructor(properties?: Partial<GLDisplay.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLDisplay.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "create-context", callback: (_source: this, context: GLContext) => GLContext | null): number;
    connect_after(signal: "create-context", callback: (_source: this, context: GLContext) => GLContext | null): number;
    emit(signal: "create-context", context: GLContext): void;

    // Constructors

    static ["new"](): GLDisplay;
    static new_with_type(type: GLDisplayType): GLDisplay;

    // Members

    add_context(context: GLContext): boolean;
    create_context(other_context: GLContext | null): [boolean, GLContext];
    create_window(): GLWindow | null;
    filter_gl_api(gl_api: GLAPI): void;
    find_window(data: any | null, compare_func: GLib.CompareFunc): GLWindow | null;
    get_gl_api(): GLAPI;
    get_gl_api_unlocked(): GLAPI;
    get_gl_context_for_thread(thread: GLib.Thread): GLContext | null;
    get_handle(): never;
    get_handle_type(): GLDisplayType;
    remove_context(context: GLContext): void;
    remove_window(window: GLWindow): boolean;
    retrieve_window(data: any | null, compare_func: GLib.CompareFunc): GLWindow | null;
    vfunc_create_window(): GLWindow | null;
    vfunc_get_handle(): never;
}
export module GLFilter {
    export interface ConstructorProperties extends GLBaseFilter.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLFilter extends GLBaseFilter {
    static $gtype: GObject.GType<GLFilter>;

    constructor(properties?: Partial<GLFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    in_info: GstVideo.VideoInfo;
    out_info: GstVideo.VideoInfo;
    in_texture_target: GLTextureTarget;
    out_texture_target: GLTextureTarget;
    out_caps: Gst.Caps;
    fbo: GLFramebuffer;

    // Members

    draw_fullscreen_quad(): void;
    filter_texture(input: Gst.Buffer, output: Gst.Buffer): boolean;
    render_to_target(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean;
    render_to_target_with_shader(input: GLMemory, output: GLMemory, shader: GLShader): void;
    vfunc_filter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean;
    vfunc_filter_texture(input: GLMemory, output: GLMemory): boolean;
    vfunc_init_fbo(): boolean;
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
    vfunc_transform_internal_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps): Gst.Caps;
    static add_rgba_pad_templates(klass: GLFilter): void;
}
export module GLFramebuffer {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLFramebuffer extends Gst.Object {
    static $gtype: GObject.GType<GLFramebuffer>;

    constructor(properties?: Partial<GLFramebuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLFramebuffer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](context: GLContext): GLFramebuffer;
    static new_with_default_depth(context: GLContext, width: number, height: number): GLFramebuffer;

    // Members

    attach(attachment_point: number, mem: GLBaseMemory): void;
    bind(): void;
    draw_to_texture(mem: GLMemory, func: GLFramebufferFunc): boolean;
    get_effective_dimensions(): [number, number];
    get_id(): number;
}
export module GLMemoryAllocator {
    export interface ConstructorProperties extends GLBaseMemoryAllocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLMemoryAllocator extends GLBaseMemoryAllocator {
    static $gtype: GObject.GType<GLMemoryAllocator>;

    constructor(properties?: Partial<GLMemoryAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLMemoryAllocator.ConstructorProperties>, ...args: any[]): void;

    // Members

    static get_default(context: GLContext): GLMemoryAllocator;
}
export module GLMemoryPBOAllocator {
    export interface ConstructorProperties extends GLMemoryAllocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLMemoryPBOAllocator extends GLMemoryAllocator {
    static $gtype: GObject.GType<GLMemoryPBOAllocator>;

    constructor(properties?: Partial<GLMemoryPBOAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLMemoryPBOAllocator.ConstructorProperties>, ...args: any[]): void;
}
export module GLOverlayCompositor {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        yinvert: boolean;
    }
}
export class GLOverlayCompositor extends Gst.Object {
    static $gtype: GObject.GType<GLOverlayCompositor>;

    constructor(properties?: Partial<GLOverlayCompositor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLOverlayCompositor.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get yinvert(): boolean;
    set yinvert(val: boolean);

    // Constructors

    static ["new"](context: GLContext): GLOverlayCompositor;

    // Members

    draw_overlays(): void;
    free_overlays(): void;
    upload_overlays(buf: Gst.Buffer): void;
    static add_caps(caps: Gst.Caps): Gst.Caps;
}
export module GLRenderbufferAllocator {
    export interface ConstructorProperties extends GLBaseMemoryAllocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLRenderbufferAllocator extends GLBaseMemoryAllocator {
    static $gtype: GObject.GType<GLRenderbufferAllocator>;

    constructor(properties?: Partial<GLRenderbufferAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLRenderbufferAllocator.ConstructorProperties>, ...args: any[]): void;
}
export module GLSLStage {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLSLStage extends Gst.Object {
    static $gtype: GObject.GType<GLSLStage>;

    constructor(properties?: Partial<GLSLStage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLSLStage.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](context: GLContext, type: number): GLSLStage;
    static new_default_fragment(context: GLContext): GLSLStage;
    static new_default_vertex(context: GLContext): GLSLStage;
    static new_with_string(
        context: GLContext,
        type: number,
        version: GLSLVersion,
        profile: GLSLProfile,
        str: string
    ): GLSLStage;
    static new_with_strings(
        context: GLContext,
        type: number,
        version: GLSLVersion,
        profile: GLSLProfile,
        str: string[]
    ): GLSLStage;

    // Members

    compile(): boolean;
    get_handle(): number;
    get_profile(): GLSLProfile;
    get_shader_type(): number;
    get_version(): GLSLVersion;
    set_strings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean;
}
export module GLShader {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        linked: boolean;
    }
}
export class GLShader extends Gst.Object {
    static $gtype: GObject.GType<GLShader>;

    constructor(properties?: Partial<GLShader.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLShader.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get linked(): boolean;

    // Fields
    context: GLContext;

    // Constructors

    static ["new"](context: GLContext): GLShader;
    static new_default(context: GLContext): GLShader;

    // Members

    attach(stage: GLSLStage): boolean;
    attach_unlocked(stage: GLSLStage): boolean;
    bind_attribute_location(index: number, name: string): void;
    bind_frag_data_location(index: number, name: string): void;
    compile_attach_stage(stage: GLSLStage): boolean;
    detach(stage: GLSLStage): void;
    detach_unlocked(stage: GLSLStage): void;
    get_attribute_location(name: string): number;
    get_program_handle(): number;
    is_linked(): boolean;
    link(): boolean;
    release(): void;
    release_unlocked(): void;
    set_uniform_1f(name: string, value: number): void;
    set_uniform_1fv(name: string, value: number[]): void;
    set_uniform_1i(name: string, value: number): void;
    set_uniform_1iv(name: string, value: number[]): void;
    set_uniform_2f(name: string, v0: number, v1: number): void;
    set_uniform_2fv(name: string, value: number[]): void;
    set_uniform_2i(name: string, v0: number, v1: number): void;
    set_uniform_2iv(name: string, value: number[]): void;
    set_uniform_3f(name: string, v0: number, v1: number, v2: number): void;
    set_uniform_3fv(name: string, value: number[]): void;
    set_uniform_3i(name: string, v0: number, v1: number, v2: number): void;
    set_uniform_3iv(name: string, value: number[]): void;
    set_uniform_4f(name: string, v0: number, v1: number, v2: number, v3: number): void;
    set_uniform_4fv(name: string, value: number[]): void;
    set_uniform_4i(name: string, v0: number, v1: number, v2: number, v3: number): void;
    set_uniform_4iv(name: string, value: number[]): void;
    set_uniform_matrix_2fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_2x3fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_2x4fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_3fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_3x2fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_3x4fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_4fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_4x2fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_4x3fv(name: string, count: number, transpose: boolean, value: number): void;
    use(): void;
    static string_fragment_external_oes_get_default(
        context: GLContext,
        version: GLSLVersion,
        profile: GLSLProfile
    ): string;
    static string_fragment_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
    static string_get_highest_precision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
}
export module GLUpload {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLUpload extends Gst.Object {
    static $gtype: GObject.GType<GLUpload>;

    constructor(properties?: Partial<GLUpload.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLUpload.ConstructorProperties>, ...args: any[]): void;

    // Fields
    context: GLContext;

    // Constructors

    static ["new"](context: GLContext): GLUpload;

    // Members

    get_caps(): [Gst.Caps | null, Gst.Caps | null];
    perform_with_buffer(buffer: Gst.Buffer): [GLUploadReturn, Gst.Buffer];
    propose_allocation(decide_query: Gst.Query | null, query: Gst.Query): void;
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    set_context(context: GLContext): void;
    transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
    static get_input_template_caps(): Gst.Caps;
}
export module GLViewConvert {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        downmix_mode: GLStereoDownmix;
        downmixMode: GLStereoDownmix;
        input_flags_override: GstVideo.VideoMultiviewFlags;
        inputFlagsOverride: GstVideo.VideoMultiviewFlags;
        input_mode_override: GstVideo.VideoMultiviewMode;
        inputModeOverride: GstVideo.VideoMultiviewMode;
        output_flags_override: GstVideo.VideoMultiviewFlags;
        outputFlagsOverride: GstVideo.VideoMultiviewFlags;
        output_mode_override: GstVideo.VideoMultiviewMode;
        outputModeOverride: GstVideo.VideoMultiviewMode;
    }
}
export class GLViewConvert extends Gst.Object {
    static $gtype: GObject.GType<GLViewConvert>;

    constructor(properties?: Partial<GLViewConvert.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLViewConvert.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get downmix_mode(): GLStereoDownmix;
    set downmix_mode(val: GLStereoDownmix);
    get downmixMode(): GLStereoDownmix;
    set downmixMode(val: GLStereoDownmix);
    get input_flags_override(): GstVideo.VideoMultiviewFlags;
    set input_flags_override(val: GstVideo.VideoMultiviewFlags);
    get inputFlagsOverride(): GstVideo.VideoMultiviewFlags;
    set inputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
    get input_mode_override(): GstVideo.VideoMultiviewMode;
    set input_mode_override(val: GstVideo.VideoMultiviewMode);
    get inputModeOverride(): GstVideo.VideoMultiviewMode;
    set inputModeOverride(val: GstVideo.VideoMultiviewMode);
    get output_flags_override(): GstVideo.VideoMultiviewFlags;
    set output_flags_override(val: GstVideo.VideoMultiviewFlags);
    get outputFlagsOverride(): GstVideo.VideoMultiviewFlags;
    set outputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
    get output_mode_override(): GstVideo.VideoMultiviewMode;
    set output_mode_override(val: GstVideo.VideoMultiviewMode);
    get outputModeOverride(): GstVideo.VideoMultiviewMode;
    set outputModeOverride(val: GstVideo.VideoMultiviewMode);

    // Fields
    object: Gst.Object;
    context: GLContext;
    shader: GLShader;
    in_info: GstVideo.VideoInfo;
    out_info: GstVideo.VideoInfo;
    from_texture_target: GLTextureTarget;
    to_texture_target: GLTextureTarget;
    caps_passthrough: boolean;
    initted: boolean;
    reconfigure: boolean;
    fbo: GLFramebuffer;

    // Constructors

    static ["new"](): GLViewConvert;

    // Members

    fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
    get_output(): [Gst.FlowReturn, Gst.Buffer];
    perform(inbuf: Gst.Buffer): Gst.Buffer | null;
    reset(): void;
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    set_context(context: GLContext): void;
    submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
    transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
}
export module GLWindow {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class GLWindow extends Gst.Object {
    static $gtype: GObject.GType<GLWindow>;

    constructor(properties?: Partial<GLWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLWindow.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "key-event", callback: (_source: this, id: string, key: string) => void): number;
    connect_after(signal: "key-event", callback: (_source: this, id: string, key: string) => void): number;
    emit(signal: "key-event", id: string, key: string): void;
    connect(
        signal: "mouse-event",
        callback: (_source: this, id: string, button: number, x: number, y: number) => void
    ): number;
    connect_after(
        signal: "mouse-event",
        callback: (_source: this, id: string, button: number, x: number, y: number) => void
    ): number;
    emit(signal: "mouse-event", id: string, button: number, x: number, y: number): void;
    connect(
        signal: "scroll-event",
        callback: (_source: this, x: number, y: number, delta_x: number, delta_y: number) => void
    ): number;
    connect_after(
        signal: "scroll-event",
        callback: (_source: this, x: number, y: number, delta_x: number, delta_y: number) => void
    ): number;
    emit(signal: "scroll-event", x: number, y: number, delta_x: number, delta_y: number): void;
    connect(signal: "window-handle-changed", callback: (_source: this) => void): number;
    connect_after(signal: "window-handle-changed", callback: (_source: this) => void): number;
    emit(signal: "window-handle-changed"): void;

    // Constructors

    static ["new"](display: GLDisplay): GLWindow;

    // Members

    controls_viewport(): boolean;
    draw(): void;
    get_context(): GLContext;
    get_display(): never;
    get_surface_dimensions(): [number, number];
    get_window_handle(): never;
    handle_events(handle_events: boolean): void;
    has_output_surface(): boolean;
    queue_resize(): void;
    quit(): void;
    resize(width: number, height: number): void;
    run(): void;
    send_key_event(event_type: string, key_str: string): void;
    send_message(callback: GLWindowCB): void;
    send_message_async(callback: GLWindowCB): void;
    send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
    send_scroll_event(posx: number, posy: number, delta_x: number, delta_y: number): void;
    set_close_callback(callback: GLWindowCB): void;
    set_draw_callback(callback: GLWindowCB): void;
    set_preferred_size(width: number, height: number): void;
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
    set_resize_callback(callback: GLWindowResizeCB): void;
    set_window_handle(handle: never): void;
    show(): void;
    vfunc_close(): void;
    vfunc_controls_viewport(): boolean;
    vfunc_draw(): void;
    vfunc_get_display(): never;
    vfunc_get_window_handle(): never;
    vfunc_handle_events(handle_events: boolean): void;
    vfunc_has_output_surface(): boolean;
    vfunc_open(): boolean;
    vfunc_queue_resize(): void;
    vfunc_quit(): void;
    vfunc_run(): void;
    vfunc_send_message(callback: GLWindowCB): void;
    vfunc_send_message_async(callback: GLWindowCB): void;
    vfunc_set_preferred_size(width: number, height: number): void;
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
    vfunc_set_window_handle(handle: never): void;
    vfunc_show(): void;
}

export class GLAllocationParams {
    static $gtype: GObject.GType<GLAllocationParams>;

    constructor(copy: GLAllocationParams);

    // Fields
    struct_size: number;
    alloc_flags: number;
    alloc_size: number;
    alloc_params: Gst.AllocationParams;
    context: GLContext;
    notify: GLib.DestroyNotify;
    user_data: any;
    wrapped_data: any;
    gl_handle: any;

    // Members
    copy(): GLAllocationParams;
    copy_data(dest: GLAllocationParams): void;
    free(): void;
    free_data(): void;
}

export class GLAsyncDebug {
    static $gtype: GObject.GType<GLAsyncDebug>;

    constructor(copy: GLAsyncDebug);

    // Members
    free(): void;
    freeze(): void;
    init(): void;
    output_log_msg(): void;
    thaw(): void;
    unset(): void;
}

export class GLBaseFilterPrivate {
    static $gtype: GObject.GType<GLBaseFilterPrivate>;

    constructor(copy: GLBaseFilterPrivate);
}

export class GLBaseMemory {
    static $gtype: GObject.GType<GLBaseMemory>;

    constructor(copy: GLBaseMemory);

    // Fields
    mem: Gst.Memory;
    context: GLContext;
    lock: GLib.Mutex;
    map_flags: Gst.MapFlags;
    map_count: number;
    gl_map_count: number;
    data: any;
    query: GLQuery;

    // Members
    alloc_data(): boolean;
    init(
        allocator: Gst.Allocator,
        parent: Gst.Memory | null,
        context: GLContext,
        params: Gst.AllocationParams | null,
        size: number,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null
    ): void;
    memcpy(dest: GLBaseMemory, offset: number, size: number): boolean;
    static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
    static init_once(): void;
}

export class GLBaseSrcPrivate {
    static $gtype: GObject.GType<GLBaseSrcPrivate>;

    constructor(copy: GLBaseSrcPrivate);
}

export class GLBuffer {
    static $gtype: GObject.GType<GLBuffer>;

    constructor(copy: GLBuffer);

    // Fields
    mem: GLBaseMemory;
    id: number;
    target: number;
    usage_hints: number;

    // Members
    static init_once(): void;
}

export class GLBufferAllocationParams {
    static $gtype: GObject.GType<GLBufferAllocationParams>;

    constructor(
        context: GLContext,
        alloc_size: number,
        alloc_params: Gst.AllocationParams | null,
        gl_target: number,
        gl_usage: number
    );
    constructor(copy: GLBufferAllocationParams);

    // Fields
    parent: GLAllocationParams;
    gl_target: number;
    gl_usage: number;

    // Constructors
    static ["new"](
        context: GLContext,
        alloc_size: number,
        alloc_params: Gst.AllocationParams | null,
        gl_target: number,
        gl_usage: number
    ): GLBufferAllocationParams;
}

export class GLBufferPoolPrivate {
    static $gtype: GObject.GType<GLBufferPoolPrivate>;

    constructor(copy: GLBufferPoolPrivate);
}

export class GLColorConvertPrivate {
    static $gtype: GObject.GType<GLColorConvertPrivate>;

    constructor(copy: GLColorConvertPrivate);
}

export class GLContextPrivate {
    static $gtype: GObject.GType<GLContextPrivate>;

    constructor(copy: GLContextPrivate);
}

export class GLDisplayPrivate {
    static $gtype: GObject.GType<GLDisplayPrivate>;

    constructor(copy: GLDisplayPrivate);
}

export class GLFramebufferPrivate {
    static $gtype: GObject.GType<GLFramebufferPrivate>;

    constructor(copy: GLFramebufferPrivate);
}

export class GLFuncs {
    static $gtype: GObject.GType<GLFuncs>;

    constructor(copy: GLFuncs);
}

export class GLMemory {
    static $gtype: GObject.GType<GLMemory>;

    constructor(copy: GLMemory);

    // Fields
    mem: GLBaseMemory;
    tex_id: number;
    tex_target: GLTextureTarget;
    tex_format: GLFormat;
    info: GstVideo.VideoInfo;
    valign: GstVideo.VideoAlignment;
    plane: number;
    tex_scaling: number[];
    texture_wrapped: boolean;
    unpack_length: number;
    tex_width: number;

    // Members
    copy_into(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number): boolean;
    copy_teximage(
        tex_id: number,
        out_target: GLTextureTarget,
        out_tex_format: GLFormat,
        out_width: number,
        out_height: number
    ): boolean;
    get_texture_format(): GLFormat;
    get_texture_height(): number;
    get_texture_id(): number;
    get_texture_target(): GLTextureTarget;
    get_texture_width(): number;
    init(
        allocator: Gst.Allocator,
        parent: Gst.Memory | null,
        context: GLContext,
        target: GLTextureTarget,
        tex_format: GLFormat,
        params: Gst.AllocationParams | null,
        info: GstVideo.VideoInfo,
        plane: number,
        valign?: GstVideo.VideoAlignment | null,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null
    ): void;
    read_pixels(write_pointer?: any | null): boolean;
    texsubimage(read_pointer?: any | null): void;
    static init_once(): void;
}

export class GLMemoryPBO {
    static $gtype: GObject.GType<GLMemoryPBO>;

    constructor(copy: GLMemoryPBO);

    // Members
    copy_into_texture(
        tex_id: number,
        target: GLTextureTarget,
        tex_format: GLFormat,
        width: number,
        height: number,
        stride: number,
        respecify: boolean
    ): boolean;
    download_transfer(): void;
    upload_transfer(): void;
    static init_once(): void;
}

export class GLQuery {
    static $gtype: GObject.GType<GLQuery>;

    constructor(copy: GLQuery);

    // Members
    counter(): void;
    end(): void;
    free(): void;
    init(context: GLContext, query_type: GLQueryType): void;
    result(): number;
    start(): void;
    unset(): void;
    static local_gl_context(
        element: Gst.Element,
        direction: Gst.PadDirection,
        context_ptr: GLContext
    ): [boolean, GLContext];
}

export class GLRenderbuffer {
    static $gtype: GObject.GType<GLRenderbuffer>;

    constructor(copy: GLRenderbuffer);

    // Fields
    renderbuffer_id: number;
    renderbuffer_format: GLFormat;
    width: number;
    height: number;
    renderbuffer_wrapped: boolean;

    // Members
    get_format(): GLFormat;
    get_height(): number;
    get_id(): number;
    get_width(): number;
    static init_once(): void;
}

export class GLRenderbufferAllocationParams {
    static $gtype: GObject.GType<GLRenderbufferAllocationParams>;

    constructor(
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        renderbuffer_format: GLFormat,
        width: number,
        height: number
    );
    constructor(copy: GLRenderbufferAllocationParams);

    // Fields
    renderbuffer_format: GLFormat;
    width: number;
    height: number;

    // Constructors
    static ["new"](
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        renderbuffer_format: GLFormat,
        width: number,
        height: number
    ): GLRenderbufferAllocationParams;
    static new_wrapped(
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        renderbuffer_format: GLFormat,
        width: number,
        height: number,
        gl_handle?: any | null,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null
    ): GLRenderbufferAllocationParams;
}

export class GLSLStagePrivate {
    static $gtype: GObject.GType<GLSLStagePrivate>;

    constructor(copy: GLSLStagePrivate);
}

export class GLShaderPrivate {
    static $gtype: GObject.GType<GLShaderPrivate>;

    constructor(copy: GLShaderPrivate);
}

export class GLSyncMeta {
    static $gtype: GObject.GType<GLSyncMeta>;

    constructor(copy: GLSyncMeta);

    // Fields
    parent: Gst.Meta;
    context: GLContext;
    data: any;

    // Members
    set_sync_point(context: GLContext): void;
    wait(context: GLContext): void;
    wait_cpu(context: GLContext): void;
    static get_info(): Gst.MetaInfo;
}

export class GLUploadPrivate {
    static $gtype: GObject.GType<GLUploadPrivate>;

    constructor(copy: GLUploadPrivate);
}

export class GLVideoAllocationParams {
    static $gtype: GObject.GType<GLVideoAllocationParams>;

    constructor(
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        v_info: GstVideo.VideoInfo,
        plane: number,
        valign: GstVideo.VideoAlignment | null,
        target: GLTextureTarget,
        tex_format: GLFormat
    );
    constructor(copy: GLVideoAllocationParams);

    // Fields
    parent: GLAllocationParams;
    v_info: GstVideo.VideoInfo;
    plane: number;
    valign: GstVideo.VideoAlignment;
    target: GLTextureTarget;
    tex_format: GLFormat;

    // Constructors
    static ["new"](
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        v_info: GstVideo.VideoInfo,
        plane: number,
        valign: GstVideo.VideoAlignment | null,
        target: GLTextureTarget,
        tex_format: GLFormat
    ): GLVideoAllocationParams;
    static new_wrapped_data(
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        v_info: GstVideo.VideoInfo,
        plane: number,
        valign: GstVideo.VideoAlignment | null,
        target: GLTextureTarget,
        tex_format: GLFormat,
        wrapped_data?: any | null,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null
    ): GLVideoAllocationParams;
    static new_wrapped_gl_handle(
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        v_info: GstVideo.VideoInfo,
        plane: number,
        valign: GstVideo.VideoAlignment | null,
        target: GLTextureTarget,
        tex_format: GLFormat,
        gl_handle?: any | null,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null
    ): GLVideoAllocationParams;
    static new_wrapped_texture(
        context: GLContext,
        alloc_params: Gst.AllocationParams | null,
        v_info: GstVideo.VideoInfo,
        plane: number,
        valign: GstVideo.VideoAlignment | null,
        target: GLTextureTarget,
        tex_format: GLFormat,
        tex_id: number,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null
    ): GLVideoAllocationParams;

    // Members
    copy_data(dest_vid: GLVideoAllocationParams): void;
    free_data(): void;
}

export class GLViewConvertPrivate {
    static $gtype: GObject.GType<GLViewConvertPrivate>;

    constructor(copy: GLViewConvertPrivate);
}

export class GLWindowPrivate {
    static $gtype: GObject.GType<GLWindowPrivate>;

    constructor(copy: GLWindowPrivate);
}
