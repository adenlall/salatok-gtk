/**
 * GstCuda 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as CudaGst from "cudagst1";
import * as GstVideo from "gstvideo1";
import * as GObject from "gobject2";

export const CAPS_FEATURE_MEMORY_CUDA_MEMORY: string;
export const CUDA_CONTEXT_TYPE: string;
export const CUDA_MEMORY_TYPE_NAME: string;
export const MAP_CUDA: number;
export function context_new_cuda_context(cuda_ctx: CudaContext): Gst.Context;
export function cuda_ensure_element_context(
    element: Gst.Element,
    device_id: number,
    cuda_ctx: CudaContext
): [boolean, CudaContext];
export function cuda_handle_context_query(
    element: Gst.Element,
    query: Gst.Query,
    cuda_ctx?: CudaContext | null
): boolean;
export function cuda_handle_set_context(
    element: Gst.Element,
    context: Gst.Context,
    device_id: number,
    cuda_ctx: CudaContext
): [boolean, CudaContext];
export function cuda_load_library(): boolean;
export function cuda_memory_init_once(): void;
export function cuda_nvrtc_compile(source: string): string;
export function cuda_nvrtc_load_library(): boolean;
export function is_cuda_memory(mem: Gst.Memory): boolean;

export namespace CudaGraphicsResourceType {
    export const $gtype: GObject.GType<CudaGraphicsResourceType>;
}

export enum CudaGraphicsResourceType {
    NONE = 0,
    GL_BUFFER = 1,
    D3D11_RESOURCE = 2,
}

export namespace CudaQuarkId {
    export const $gtype: GObject.GType<CudaQuarkId>;
}

export enum CudaQuarkId {
    GRAPHICS_RESOURCE = 0,
    MAX = 1,
}

export namespace CudaMemoryTransfer {
    export const $gtype: GObject.GType<CudaMemoryTransfer>;
}

export enum CudaMemoryTransfer {
    DOWNLOAD = 1048576,
    UPLOAD = 2097152,
}
export module CudaAllocator {
    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class CudaAllocator extends Gst.Allocator {
    static $gtype: GObject.GType<CudaAllocator>;

    constructor(properties?: Partial<CudaAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CudaAllocator.ConstructorProperties>, ...args: any[]): void;

    // Members

    alloc(context: CudaContext, info: GstVideo.VideoInfo): Gst.Memory;
    // Conflicted with Gst.Allocator.alloc
    alloc(...args: never[]): any;
}
export module CudaBufferPool {
    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
        [key: string]: any;
    }
}
export class CudaBufferPool extends Gst.BufferPool {
    static $gtype: GObject.GType<CudaBufferPool>;

    constructor(properties?: Partial<CudaBufferPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CudaBufferPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    context: CudaContext;
    priv: CudaBufferPoolPrivate;

    // Constructors

    static ["new"](context: CudaContext): CudaBufferPool;
    // Conflicted with Gst.BufferPool.new
    static ["new"](...args: never[]): any;
}
export module CudaContext {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        cuda_device_id: number;
        cudaDeviceId: number;
    }
}
export class CudaContext extends Gst.Object {
    static $gtype: GObject.GType<CudaContext>;

    constructor(properties?: Partial<CudaContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CudaContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get cuda_device_id(): number;
    get cudaDeviceId(): number;

    // Fields
    object: Gst.Object;

    // Constructors

    static ["new"](device_id: number): CudaContext;
    static new_wrapped(handler: CudaGst.context, device: CudaGst.device): CudaContext;

    // Members

    can_access_peer(peer: CudaContext): boolean;
    get_handle(): any | null;
    get_texture_alignment(): number;
    push(): boolean;
    static pop(cuda_ctx: CudaGst.context): boolean;
}

export class CudaBufferPoolPrivate {
    static $gtype: GObject.GType<CudaBufferPoolPrivate>;

    constructor(copy: CudaBufferPoolPrivate);
}

export class CudaContextPrivate {
    static $gtype: GObject.GType<CudaContextPrivate>;

    constructor(copy: CudaContextPrivate);
}

export class CudaGraphicsResource {
    static $gtype: GObject.GType<CudaGraphicsResource>;

    constructor(copy: CudaGraphicsResource);

    // Fields
    cuda_context: CudaContext;
    graphics_context: Gst.Object;
    type: CudaGraphicsResourceType;
    resource: CudaGst.graphicsResource;
    flags: CudaGst.graphicsRegisterFlags;
    registered: boolean;
    mapped: boolean;
}

export class CudaMemory {
    static $gtype: GObject.GType<CudaMemory>;

    constructor(copy: CudaMemory);

    // Fields
    mem: Gst.Memory;
    context: CudaContext;
    info: GstVideo.VideoInfo;

    // Members
    static init_once(): void;
}

export class CudaMemoryPrivate {
    static $gtype: GObject.GType<CudaMemoryPrivate>;

    constructor(copy: CudaMemoryPrivate);
}
