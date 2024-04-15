/**
 * GstVulkan 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as Vulkan from "vulkan1";
import * as GstVideo from "gstvideo1";
import * as GLib from "glib2";
import * as GstBase from "gstbase1";
import * as GObject from "gobject2";

export const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string;
export const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string;
export const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string;
export const VULKAN_DEVICE_CONTEXT_TYPE_STR: string;
export const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string;
export const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string;
export const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string;
export const VULKAN_MAX_COMPONENTS: number;
export const VULKAN_MEMORY_ALLOCATOR_NAME: string;
export const VULKAN_QUEUE_CONTEXT_TYPE_STR: string;
export const VULKAN_SWAPPER_VIDEO_FORMATS: string;
export function context_get_vulkan_device(context: Gst.Context, device: VulkanDevice): boolean;
export function context_get_vulkan_display(context: Gst.Context, display: VulkanDisplay): boolean;
export function context_get_vulkan_instance(context: Gst.Context, instance: VulkanInstance): boolean;
export function context_get_vulkan_queue(context: Gst.Context, queue: VulkanQueue): boolean;
export function context_set_vulkan_device(context: Gst.Context, device: VulkanDevice): void;
export function context_set_vulkan_display(context: Gst.Context, display: VulkanDisplay): void;
export function context_set_vulkan_instance(context: Gst.Context, instance: VulkanInstance): void;
export function context_set_vulkan_queue(context: Gst.Context, queue: VulkanQueue): void;
export function is_vulkan_buffer_memory(mem: Gst.Memory): boolean;
export function is_vulkan_image_memory(mem: Gst.Memory): boolean;
export function is_vulkan_memory(mem: Gst.Memory): boolean;
export function vulkan_buffer_memory_alloc(
    device: VulkanDevice,
    size: number,
    usage: Vulkan.BufferUsageFlags,
    mem_prop_flags: Vulkan.MemoryPropertyFlags
): Gst.Memory;
export function vulkan_buffer_memory_init_once(): void;
export function vulkan_buffer_memory_wrapped(
    device: VulkanDevice,
    buffer: Vulkan.Buffer,
    usage: Vulkan.BufferUsageFlags,
    user_data?: any | null,
    notify?: GLib.DestroyNotify | null
): Gst.Memory;
export function vulkan_create_shader(device: VulkanDevice, code: string, size: number): VulkanHandle;
export function vulkan_display_type_to_extension_string(type: VulkanDisplayType): string | null;
export function vulkan_ensure_element_data(
    element: Gst.Element,
    display_ptr: VulkanDisplay | null,
    instance_ptr: VulkanInstance
): [boolean, VulkanDisplay | null, VulkanInstance];
export function vulkan_error_quark(): GLib.Quark;
export function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo | null;
export function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView;
export function vulkan_global_context_query(element: Gst.Element, context_type: string): void;
export function vulkan_handle_context_query(
    element: Gst.Element,
    query: Gst.Query,
    display?: VulkanDisplay | null,
    instance?: VulkanInstance | null,
    device?: VulkanDevice | null
): boolean;
export function vulkan_handle_set_context(
    element: Gst.Element,
    context: Gst.Context,
    display: VulkanDisplay | null,
    instance: VulkanInstance
): [boolean, VulkanDisplay | null, VulkanInstance];
export function vulkan_image_memory_alloc(
    device: VulkanDevice,
    format: Vulkan.Format,
    width: number,
    height: number,
    tiling: Vulkan.ImageTiling,
    usage: Vulkan.ImageUsageFlags,
    mem_prop_flags: Vulkan.MemoryPropertyFlags
): Gst.Memory;
export function vulkan_image_memory_init_once(): void;
export function vulkan_image_memory_wrapped(
    device: VulkanDevice,
    image: Vulkan.Image,
    format: Vulkan.Format,
    width: number,
    height: number,
    tiling: Vulkan.ImageTiling,
    usage: Vulkan.ImageUsageFlags,
    user_data?: any | null
): Gst.Memory;
export function vulkan_local_context_query(element: Gst.Element, context_type: string): Gst.Query;
export function vulkan_memory_alloc(
    device: VulkanDevice,
    memory_type_index: number,
    params: Gst.AllocationParams,
    size: number,
    mem_prop_flags: Vulkan.MemoryPropertyFlags
): Gst.Memory;
export function vulkan_memory_find_memory_type_index_with_type_properties(
    device: VulkanDevice,
    type_bits: number,
    properties: Vulkan.MemoryPropertyFlags,
    type_index: number
): boolean;
export function vulkan_memory_heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
export function vulkan_memory_init_once(): void;
export function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
export function vulkan_present_mode_to_string(present_mode: Vulkan.PresentModeKHR): string;
export function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean;
export function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string;
export function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
export function vulkan_trash_object_unref(device: VulkanDevice, user_data?: any | null): void;
export function vulkan_window_error_quark(): GLib.Quark;
export type VulkanDeviceForEachQueueFunc = (device: VulkanDevice, queue: VulkanQueue) => boolean;
export type VulkanHandleDestroyNotify = (handle: VulkanHandle) => void;
export type VulkanImageMemoryFindViewFunc = (view: VulkanImageView) => boolean;
export type VulkanTrashListAdd = (trash_list: VulkanTrashList, trash: VulkanTrash) => boolean;
export type VulkanTrashListGC = (trash_list: VulkanTrashList) => void;
export type VulkanTrashListWait = (trash_list: VulkanTrashList, timeout: number) => boolean;
export type VulkanTrashNotify = (device: VulkanDevice) => void;

export namespace VulkanBarrierFlags {
    export const $gtype: GObject.GType<VulkanBarrierFlags>;
}

export enum VulkanBarrierFlags {
    NONE = 0,
}

export namespace VulkanBarrierType {
    export const $gtype: GObject.GType<VulkanBarrierType>;
}

export enum VulkanBarrierType {
    NONE = 0,
    TYPE_MEMORY = 1,
    TYPE_BUFFER = 2,
    TYPE_IMAGE = 3,
}

export class VulkanError extends GLib.Error {
    static $gtype: GObject.GType<VulkanError>;

    constructor(options: { message: string; code: number });
    constructor(copy: VulkanError);

    // Fields
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
    static to_g_error(result: Vulkan.Result, format: string, ___: any[]): [Vulkan.Result, GLib.Error | null];
}

export namespace VulkanFormatScaling {
    export const $gtype: GObject.GType<VulkanFormatScaling>;
}

export enum VulkanFormatScaling {
    UNORM = 1,
    SNORM = 2,
    USCALED = 3,
    SSCALED = 4,
    UINT = 5,
    SINT = 6,
    SRGB = 7,
}

export namespace VulkanHandleType {
    export const $gtype: GObject.GType<VulkanHandleType>;
}

export enum VulkanHandleType {
    DESCRIPTOR_SET_LAYOUT = 1,
    PIPELINE_LAYOUT = 2,
    PIPELINE = 3,
    RENDER_PASS = 4,
    SAMPLER = 5,
    FRAMEBUFFER = 6,
    SHADER = 7,
}

export class VulkanWindowError extends GLib.Error {
    static $gtype: GObject.GType<VulkanWindowError>;

    constructor(options: { message: string; code: number });
    constructor(copy: VulkanWindowError);

    // Fields
    static FAILED: number;
    static OLD_LIBS: number;
    static RESOURCE_UNAVAILABLE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace VulkanDisplayType {
    export const $gtype: GObject.GType<VulkanDisplayType>;
}

export enum VulkanDisplayType {
    NONE = 0,
    XCB = 1,
    WAYLAND = 2,
    COCOA = 4,
    IOS = 8,
    WIN32 = 16,
    ANDROID = 32,
    ANY = 4294967295,
}

export namespace VulkanFormatFlags {
    export const $gtype: GObject.GType<VulkanFormatFlags>;
}

export enum VulkanFormatFlags {
    YUV = 1,
    RGB = 2,
    ALPHA = 4,
    LE = 8,
    COMPLEX = 16,
}
export module VulkanBufferMemoryAllocator {
    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanBufferMemoryAllocator extends Gst.Allocator {
    static $gtype: GObject.GType<VulkanBufferMemoryAllocator>;

    constructor(properties?: Partial<VulkanBufferMemoryAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanBufferMemoryAllocator.ConstructorProperties>, ...args: any[]): void;
}
export module VulkanBufferPool {
    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanBufferPool extends Gst.BufferPool {
    static $gtype: GObject.GType<VulkanBufferPool>;

    constructor(properties?: Partial<VulkanBufferPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanBufferPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    bufferpool: Gst.BufferPool;
    device: VulkanDevice;

    // Constructors

    static ["new"](device: VulkanDevice): VulkanBufferPool;
    // Conflicted with Gst.BufferPool.new
    static ["new"](...args: never[]): any;
}
export module VulkanCommandPool {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanCommandPool extends Gst.Object {
    static $gtype: GObject.GType<VulkanCommandPool>;

    constructor(properties?: Partial<VulkanCommandPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanCommandPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    queue: VulkanQueue;
    pool: Vulkan.CommandPool;

    // Members

    create(): VulkanCommandBuffer;
    get_queue(): VulkanQueue;
    unlock(): void;
}
export module VulkanDescriptorCache {
    export interface ConstructorProperties extends VulkanHandlePool.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanDescriptorCache extends VulkanHandlePool {
    static $gtype: GObject.GType<VulkanDescriptorCache>;

    constructor(properties?: Partial<VulkanDescriptorCache.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanDescriptorCache.ConstructorProperties>, ...args: any[]): void;

    // Fields
    pool: VulkanDescriptorPool;

    // Constructors

    static ["new"](pool: VulkanDescriptorPool, layouts: VulkanHandle[]): VulkanDescriptorCache;

    // Members

    acquire(): VulkanDescriptorSet;
    // Conflicted with GstVulkan.VulkanHandlePool.acquire
    acquire(...args: never[]): any;
}
export module VulkanDescriptorPool {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanDescriptorPool extends Gst.Object {
    static $gtype: GObject.GType<VulkanDescriptorPool>;

    constructor(properties?: Partial<VulkanDescriptorPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanDescriptorPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    device: VulkanDevice;
    pool: Vulkan.DescriptorPool;

    // Constructors

    static new_wrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, max_sets: number): VulkanDescriptorPool;

    // Members

    create(layouts: VulkanHandle[]): VulkanDescriptorSet;
    get_device(): VulkanDevice;
    get_max_sets(): number;
}
export module VulkanDevice {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        instance: VulkanInstance;
        physical_device: VulkanPhysicalDevice;
        physicalDevice: VulkanPhysicalDevice;
    }
}
export class VulkanDevice extends Gst.Object {
    static $gtype: GObject.GType<VulkanDevice>;

    constructor(properties?: Partial<VulkanDevice.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get instance(): VulkanInstance;
    get physical_device(): VulkanPhysicalDevice;
    get physicalDevice(): VulkanPhysicalDevice;

    // Fields
    device: Vulkan.Device;

    // Constructors

    static ["new"](physical_device: VulkanPhysicalDevice): VulkanDevice;
    static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice;

    // Members

    create_fence(): VulkanFence | null;
    disable_extension(name: string): boolean;
    enable_extension(name: string): boolean;
    enable_layer(name: string): boolean;
    foreach_queue(): void;
    get_instance(): VulkanInstance | null;
    get_proc_address(name: string): any | null;
    get_queue(queue_family: number, queue_i: number): VulkanQueue;
    is_extension_enabled(name: string): boolean;
    is_layer_enabled(name: string): boolean;
    open(): boolean;
    static handle_context_query(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean;
    static run_context_query(element: Gst.Element, device: VulkanDevice): [boolean, VulkanDevice];
}
export module VulkanDisplay {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanDisplay extends Gst.Object {
    static $gtype: GObject.GType<VulkanDisplay>;

    constructor(properties?: Partial<VulkanDisplay.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanDisplay.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](instance: VulkanInstance): VulkanDisplay;
    static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay;

    // Members

    create_window(): VulkanWindow | null;
    find_window(data: any | null, compare_func: GLib.CompareFunc): VulkanWindow | null;
    get_handle(): any | null;
    get_handle_type(): VulkanDisplayType;
    remove_window(window: VulkanWindow): boolean;
    vfunc_create_window(): VulkanWindow | null;
    vfunc_get_handle(): any | null;
    static choose_type(instance: VulkanInstance): VulkanDisplayType;
    static handle_context_query(element: Gst.Element, query: Gst.Query, display?: VulkanDisplay | null): boolean;
    static run_context_query(element: Gst.Element, display: VulkanDisplay): [boolean, VulkanDisplay];
}
export module VulkanFenceCache {
    export interface ConstructorProperties extends VulkanHandlePool.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanFenceCache extends VulkanHandlePool {
    static $gtype: GObject.GType<VulkanFenceCache>;

    constructor(properties?: Partial<VulkanFenceCache.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanFenceCache.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](device: VulkanDevice): VulkanFenceCache;
}
export module VulkanFullScreenQuad {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanFullScreenQuad extends Gst.Object {
    static $gtype: GObject.GType<VulkanFullScreenQuad>;

    constructor(properties?: Partial<VulkanFullScreenQuad.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanFullScreenQuad.ConstructorProperties>, ...args: any[]): void;

    // Fields
    out_info: GstVideo.VideoInfo;
    in_info: GstVideo.VideoInfo;
    queue: VulkanQueue;
    render_pass: VulkanHandle;
    pipeline_layout: VulkanHandle;
    graphics_pipeline: VulkanHandle;
    descriptor_set_layout: VulkanHandle;
    descriptor_cache: VulkanDescriptorCache;
    descriptor_set: VulkanDescriptorSet;
    framebuffer: VulkanHandle;
    sampler: VulkanHandle;
    cmd_pool: VulkanCommandPool;
    trash_list: VulkanTrashList;
    last_fence: VulkanFence;

    // Constructors

    static ["new"](queue: VulkanQueue): VulkanFullScreenQuad;

    // Members

    draw(): boolean;
    enable_blend(enable_blend: boolean): void;
    enable_clear(enable_clear: boolean): void;
    fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
    get_last_fence(): VulkanFence;
    prepare_draw(fence: VulkanFence): boolean;
    set_blend_factors(
        src_blend_factor: Vulkan.BlendFactor,
        dst_blend_factor: Vulkan.BlendFactor,
        src_alpha_blend_factor: Vulkan.BlendFactor,
        dst_alpha_blend_factor: Vulkan.BlendFactor
    ): void;
    set_blend_operation(colour_blend_op: Vulkan.BlendOp, alpha_blend_op: Vulkan.BlendOp): void;
    set_index_buffer(indices: Gst.Memory, n_indices: number): boolean;
    set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean;
    set_input_buffer(buffer: Gst.Buffer): boolean;
    set_output_buffer(buffer: Gst.Buffer): boolean;
    set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean;
    set_uniform_buffer(uniforms: Gst.Memory): boolean;
    set_vertex_buffer(vertices: Gst.Memory): boolean;
    submit(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
}
export module VulkanHandlePool {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class VulkanHandlePool extends Gst.Object {
    static $gtype: GObject.GType<VulkanHandlePool>;

    constructor(properties?: Partial<VulkanHandlePool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanHandlePool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    device: VulkanDevice;
    outstanding: any[];
    available: any[];

    // Members

    acquire(): any | null;
    alloc(): any | null;
    release(handle?: any | null): void;
    vfunc_acquire(): any | null;
    vfunc_alloc(): any | null;
    vfunc_free(handle?: any | null): void;
    vfunc_release(handle?: any | null): void;
}
export module VulkanImageBufferPool {
    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanImageBufferPool extends Gst.BufferPool {
    static $gtype: GObject.GType<VulkanImageBufferPool>;

    constructor(properties?: Partial<VulkanImageBufferPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanImageBufferPool.ConstructorProperties>, ...args: any[]): void;

    // Fields
    bufferpool: Gst.BufferPool;
    device: VulkanDevice;

    // Constructors

    static ["new"](device: VulkanDevice): VulkanImageBufferPool;
    // Conflicted with Gst.BufferPool.new
    static ["new"](...args: never[]): any;
}
export module VulkanImageMemoryAllocator {
    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanImageMemoryAllocator extends Gst.Allocator {
    static $gtype: GObject.GType<VulkanImageMemoryAllocator>;

    constructor(properties?: Partial<VulkanImageMemoryAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanImageMemoryAllocator.ConstructorProperties>, ...args: any[]): void;
}
export module VulkanInstance {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        requested_api_major: number;
        requestedApiMajor: number;
        requested_api_minor: number;
        requestedApiMinor: number;
    }
}
export class VulkanInstance extends Gst.Object {
    static $gtype: GObject.GType<VulkanInstance>;

    constructor(properties?: Partial<VulkanInstance.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanInstance.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get requested_api_major(): number;
    set requested_api_major(val: number);
    get requestedApiMajor(): number;
    set requestedApiMajor(val: number);
    get requested_api_minor(): number;
    set requested_api_minor(val: number);
    get requestedApiMinor(): number;
    set requestedApiMinor(val: number);

    // Fields
    instance: Vulkan.Instance;
    physical_devices: Vulkan.PhysicalDevice;
    n_physical_devices: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "create-device", callback: (_source: this) => VulkanDevice): number;
    connect_after(signal: "create-device", callback: (_source: this) => VulkanDevice): number;
    emit(signal: "create-device"): void;

    // Constructors

    static ["new"](): VulkanInstance;

    // Members

    check_version(major: number, minor: number, patch: number): boolean;
    create_device(): VulkanDevice;
    disable_extension(name: string): boolean;
    enable_extension(name: string): boolean;
    enable_layer(name: string): boolean;
    fill_info(): boolean;
    get_extension_info(name: string): [boolean, number];
    get_layer_info(name: string): [boolean, string, number, number];
    get_proc_address(name: string): any | null;
    get_version(): [number, number, number];
    is_extension_enabled(name: string): boolean;
    is_layer_enabled(name: string): boolean;
    open(): boolean;
    static handle_context_query(element: Gst.Element, query: Gst.Query, instance?: VulkanInstance | null): boolean;
    static run_context_query(element: Gst.Element, instance: VulkanInstance): [boolean, VulkanInstance];
}
export module VulkanMemoryAllocator {
    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanMemoryAllocator extends Gst.Allocator {
    static $gtype: GObject.GType<VulkanMemoryAllocator>;

    constructor(properties?: Partial<VulkanMemoryAllocator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanMemoryAllocator.ConstructorProperties>, ...args: any[]): void;
}
export module VulkanPhysicalDevice {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        device_index: number;
        deviceIndex: number;
        instance: VulkanInstance;
        name: string;
    }
}
export class VulkanPhysicalDevice extends Gst.Object {
    static $gtype: GObject.GType<VulkanPhysicalDevice>;

    constructor(properties?: Partial<VulkanPhysicalDevice.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanPhysicalDevice.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get device_index(): number;
    get deviceIndex(): number;
    get instance(): VulkanInstance;
    get name(): string;

    // Fields
    device: Vulkan.PhysicalDevice;
    properties: Vulkan.PhysicalDeviceProperties;
    features: Vulkan.PhysicalDeviceFeatures;
    memory_properties: Vulkan.PhysicalDeviceMemoryProperties;
    queue_family_props: Vulkan.QueueFamilyProperties;
    n_queue_families: number;

    // Constructors

    static ["new"](instance: VulkanInstance, device_index: number): VulkanPhysicalDevice;

    // Members

    get_extension_info(name: string): [boolean, number];
    get_instance(): VulkanInstance;
    get_layer_info(name: string): [boolean, string, number, number];
    static type_to_string(type: Vulkan.PhysicalDeviceType): string;
}
export module VulkanQueue {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanQueue extends Gst.Object {
    static $gtype: GObject.GType<VulkanQueue>;

    constructor(properties?: Partial<VulkanQueue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanQueue.ConstructorProperties>, ...args: any[]): void;

    // Fields
    device: VulkanDevice;
    queue: Vulkan.Queue;
    family: number;
    index: number;

    // Members

    create_command_pool(): VulkanCommandPool;
    get_device(): VulkanDevice | null;
    submit_lock(): void;
    submit_unlock(): void;
    static flags_to_string(queue_bits: Vulkan.QueueFlags): string;
    static handle_context_query(element: Gst.Element, query: Gst.Query, queue?: VulkanQueue | null): boolean;
    static run_context_query(element: Gst.Element, queue: VulkanQueue): [boolean, VulkanQueue];
}
export module VulkanSwapper {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        force_aspect_ratio: boolean;
        forceAspectRatio: boolean;
        pixel_aspect_ratio: Gst.Fraction;
        pixelAspectRatio: Gst.Fraction;
    }
}
export class VulkanSwapper extends Gst.Object {
    static $gtype: GObject.GType<VulkanSwapper>;

    constructor(properties?: Partial<VulkanSwapper.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanSwapper.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get force_aspect_ratio(): boolean;
    set force_aspect_ratio(val: boolean);
    get forceAspectRatio(): boolean;
    set forceAspectRatio(val: boolean);
    get pixel_aspect_ratio(): Gst.Fraction;
    set pixel_aspect_ratio(val: Gst.Fraction);
    get pixelAspectRatio(): Gst.Fraction;
    set pixelAspectRatio(val: Gst.Fraction);

    // Fields
    device: VulkanDevice;
    window: VulkanWindow;
    queue: VulkanQueue;
    cmd_pool: VulkanCommandPool;

    // Constructors

    static ["new"](device: VulkanDevice, window: VulkanWindow): VulkanSwapper;

    // Members

    choose_queue(available_queue: VulkanQueue): boolean;
    get_supported_caps(): Gst.Caps;
    get_surface_rectangles(): [
        GstVideo.VideoRectangle | null,
        GstVideo.VideoRectangle | null,
        GstVideo.VideoRectangle | null
    ];
    render_buffer(buffer: Gst.Buffer): boolean;
    set_caps(caps: Gst.Caps): boolean;
}
export module VulkanTrashFenceList {
    export interface ConstructorProperties extends VulkanTrashList.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanTrashFenceList extends VulkanTrashList {
    static $gtype: GObject.GType<VulkanTrashFenceList>;

    constructor(properties?: Partial<VulkanTrashFenceList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanTrashFenceList.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): VulkanTrashFenceList;
}
export module VulkanTrashList {
    export interface ConstructorProperties extends VulkanHandlePool.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanTrashList extends VulkanHandlePool {
    static $gtype: GObject.GType<VulkanTrashList>;

    constructor(properties?: Partial<VulkanTrashList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanTrashList.ConstructorProperties>, ...args: any[]): void;

    // Members

    acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
    // Conflicted with GstVulkan.VulkanHandlePool.acquire
    acquire(...args: never[]): any;
    add(trash: VulkanTrash): boolean;
    gc(): void;
    wait(timeout: number): boolean;
    vfunc_add_func(trash: VulkanTrash): boolean;
    vfunc_gc_func(): void;
    vfunc_wait_func(timeout: number): boolean;
}
export module VulkanVideoFilter {
    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanVideoFilter extends GstBase.BaseTransform {
    static $gtype: GObject.GType<VulkanVideoFilter>;

    constructor(properties?: Partial<VulkanVideoFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanVideoFilter.ConstructorProperties>, ...args: any[]): void;

    // Fields
    instance: VulkanInstance;
    device: VulkanDevice;
    queue: VulkanQueue;
    in_caps: Gst.Caps;
    in_info: GstVideo.VideoInfo;
    out_caps: Gst.Caps;
    out_info: GstVideo.VideoInfo;
}
export module VulkanWindow {
    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
        [key: string]: any;
        display: VulkanDisplay;
    }
}
export abstract class VulkanWindow extends Gst.Object {
    static $gtype: GObject.GType<VulkanWindow>;

    constructor(properties?: Partial<VulkanWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get display(): VulkanDisplay;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => boolean): number;
    connect_after(signal: "close", callback: (_source: this) => boolean): number;
    emit(signal: "close"): void;
    connect(signal: "draw", callback: (_source: this) => void): number;
    connect_after(signal: "draw", callback: (_source: this) => void): number;
    emit(signal: "draw"): void;
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
    connect(signal: "resize", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: "resize", callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: "resize", object: number, p0: number): void;

    // Constructors

    static ["new"](display: VulkanDisplay): VulkanWindow;

    // Members

    close(): void;
    get_display(): VulkanDisplay;
    get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
    get_surface_dimensions(): [number, number];
    handle_events(handle_events: boolean): void;
    open(): boolean;
    redraw(): void;
    resize(width: number, height: number): void;
    send_key_event(event_type: string, key_str: string): void;
    send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
    set_window_handle(handle: never): void;
    vfunc_close(): void;
    vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
    vfunc_get_surface_dimensions(): [number, number];
    vfunc_handle_events(handle_events: boolean): void;
    vfunc_open(): boolean;
    vfunc_set_window_handle(handle: never): void;
}

export class VulkanBarrierBufferInfo {
    static $gtype: GObject.GType<VulkanBarrierBufferInfo>;

    constructor(copy: VulkanBarrierBufferInfo);

    // Fields
    parent: VulkanBarrierMemoryInfo;
    offset: Vulkan.DeviceSize;
    size: Vulkan.DeviceSize;
}

export class VulkanBarrierImageInfo {
    static $gtype: GObject.GType<VulkanBarrierImageInfo>;

    constructor(copy: VulkanBarrierImageInfo);

    // Fields
    parent: VulkanBarrierMemoryInfo;
    image_layout: Vulkan.ImageLayout;
    subresource_range: Vulkan.ImageSubresourceRange;
}

export class VulkanBarrierMemoryInfo {
    static $gtype: GObject.GType<VulkanBarrierMemoryInfo>;

    constructor(copy: VulkanBarrierMemoryInfo);

    // Fields
    type: VulkanBarrierType;
    flags: VulkanBarrierFlags;
    queue: VulkanQueue;
    pipeline_stages: Vulkan.PipelineStageFlags;
    access_flags: Vulkan.AccessFlags;
}

export class VulkanBufferMemory {
    static $gtype: GObject.GType<VulkanBufferMemory>;

    constructor(copy: VulkanBufferMemory);

    // Fields
    parent: Gst.Memory;
    device: VulkanDevice;
    buffer: Vulkan.Buffer;
    vk_mem: VulkanMemory;
    requirements: Vulkan.MemoryRequirements;
    usage: Vulkan.BufferUsageFlags;
    barrier: VulkanBarrierBufferInfo;

    // Members
    static alloc(
        device: VulkanDevice,
        size: number,
        usage: Vulkan.BufferUsageFlags,
        mem_prop_flags: Vulkan.MemoryPropertyFlags
    ): Gst.Memory;
    static init_once(): void;
    static wrapped(
        device: VulkanDevice,
        buffer: Vulkan.Buffer,
        usage: Vulkan.BufferUsageFlags,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null
    ): Gst.Memory;
}

export class VulkanBufferPoolPrivate {
    static $gtype: GObject.GType<VulkanBufferPoolPrivate>;

    constructor(copy: VulkanBufferPoolPrivate);
}

export class VulkanCommandBuffer {
    static $gtype: GObject.GType<VulkanCommandBuffer>;

    constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);
    constructor(copy: VulkanCommandBuffer);

    // Fields
    parent: Gst.MiniObject;
    cmd: Vulkan.CommandBuffer;
    pool: VulkanCommandPool;
    level: Vulkan.CommandBufferLevel;

    // Constructors
    static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;
}

export class VulkanCommandPoolPrivate {
    static $gtype: GObject.GType<VulkanCommandPoolPrivate>;

    constructor(copy: VulkanCommandPoolPrivate);
}

export class VulkanDescriptorCachePrivate {
    static $gtype: GObject.GType<VulkanDescriptorCachePrivate>;

    constructor(copy: VulkanDescriptorCachePrivate);
}

export class VulkanDescriptorPoolPrivate {
    static $gtype: GObject.GType<VulkanDescriptorPoolPrivate>;

    constructor(copy: VulkanDescriptorPoolPrivate);
}

export class VulkanDescriptorSet {
    static $gtype: GObject.GType<VulkanDescriptorSet>;

    constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, layouts: VulkanHandle[]);
    constructor(copy: VulkanDescriptorSet);

    // Fields
    parent: Gst.MiniObject;
    set: Vulkan.DescriptorSet;
    pool: VulkanDescriptorPool;
    cache: VulkanDescriptorCache;
    n_layouts: number;
    layouts: VulkanHandle;

    // Constructors
    static new_wrapped(
        pool: VulkanDescriptorPool,
        set: Vulkan.DescriptorSet,
        layouts: VulkanHandle[]
    ): VulkanDescriptorSet;
}

export class VulkanDevicePrivate {
    static $gtype: GObject.GType<VulkanDevicePrivate>;

    constructor(copy: VulkanDevicePrivate);
}

export class VulkanDisplayPrivate {
    static $gtype: GObject.GType<VulkanDisplayPrivate>;

    constructor(copy: VulkanDisplayPrivate);
}

export class VulkanFence {
    static $gtype: GObject.GType<VulkanFence>;

    constructor(device: VulkanDevice);
    constructor(copy: VulkanFence);

    // Fields
    parent: Gst.MiniObject;
    device: VulkanDevice;
    cache: VulkanFenceCache;
    fence: Vulkan.Fence;

    // Constructors
    static ["new"](device: VulkanDevice): VulkanFence;
    static new_always_signalled(device: VulkanDevice): VulkanFence;

    // Members
    is_signaled(): boolean;
    reset(): void;
}

export class VulkanFormatInfo {
    static $gtype: GObject.GType<VulkanFormatInfo>;

    constructor(copy: VulkanFormatInfo);

    // Fields
    format: Vulkan.Format;
    name: string;
    scaling: VulkanFormatScaling;
    flags: VulkanFormatFlags;
    bits: number;
    n_components: number;
    shift: Uint8Array;
    depth: Uint8Array;
    pixel_stride: Uint8Array;
    n_planes: number;
    plane: Uint8Array;
    poffset: Uint8Array;
    w_sub: Uint8Array;
    h_sub: Uint8Array;
}

export class VulkanFullScreenQuadPrivate {
    static $gtype: GObject.GType<VulkanFullScreenQuadPrivate>;

    constructor(copy: VulkanFullScreenQuadPrivate);
}

export class VulkanHandle {
    static $gtype: GObject.GType<VulkanHandle>;

    constructor(
        device: VulkanDevice,
        type: VulkanHandleType,
        handle: VulkanHandleTypedef,
        notify: VulkanHandleDestroyNotify
    );
    constructor(copy: VulkanHandle);

    // Fields
    parent: Gst.MiniObject;
    device: VulkanDevice;
    type: VulkanHandleType;
    handle: VulkanHandleTypedef;
    notify: VulkanHandleDestroyNotify;
    user_data: any;

    // Constructors
    static new_wrapped(
        device: VulkanDevice,
        type: VulkanHandleType,
        handle: VulkanHandleTypedef,
        notify: VulkanHandleDestroyNotify
    ): VulkanHandle;

    // Members
    free_descriptor_set_layout(user_data?: any | null): void;
    free_framebuffer(user_data?: any | null): void;
    free_pipeline(user_data?: any | null): void;
    free_pipeline_layout(user_data?: any | null): void;
    free_render_pass(user_data?: any | null): void;
    free_sampler(user_data?: any | null): void;
    free_shader(user_data?: any | null): void;
    static context_query(
        element: Gst.Element,
        query: Gst.Query,
        display?: VulkanDisplay | null,
        instance?: VulkanInstance | null,
        device?: VulkanDevice | null
    ): boolean;
    static set_context(
        element: Gst.Element,
        context: Gst.Context,
        display: VulkanDisplay | null,
        instance: VulkanInstance
    ): [boolean, VulkanDisplay | null, VulkanInstance];
}

export class VulkanImageBufferPoolPrivate {
    static $gtype: GObject.GType<VulkanImageBufferPoolPrivate>;

    constructor(copy: VulkanImageBufferPoolPrivate);
}

export class VulkanImageMemory {
    static $gtype: GObject.GType<VulkanImageMemory>;

    constructor(copy: VulkanImageMemory);

    // Fields
    parent: Gst.Memory;
    device: VulkanDevice;
    image: Vulkan.Image;
    vk_mem: VulkanMemory;
    create_info: Vulkan.ImageCreateInfo;
    requirements: Vulkan.MemoryRequirements;
    format_properties: Vulkan.ImageFormatProperties;
    usage: Vulkan.ImageUsageFlags;
    barrier: VulkanBarrierImageInfo;

    // Members
    add_view(view: VulkanImageView): void;
    find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView | null;
    get_height(): number;
    get_width(): number;
    init(
        allocator: Gst.Allocator,
        parent: Gst.Memory,
        device: VulkanDevice,
        usage: Vulkan.ImageUsageFlags,
        params: Gst.AllocationParams,
        size: number,
        user_data?: any | null
    ): boolean;
    static alloc(
        device: VulkanDevice,
        format: Vulkan.Format,
        width: number,
        height: number,
        tiling: Vulkan.ImageTiling,
        usage: Vulkan.ImageUsageFlags,
        mem_prop_flags: Vulkan.MemoryPropertyFlags
    ): Gst.Memory;
    static init_once(): void;
    static wrapped(
        device: VulkanDevice,
        image: Vulkan.Image,
        format: Vulkan.Format,
        width: number,
        height: number,
        tiling: Vulkan.ImageTiling,
        usage: Vulkan.ImageUsageFlags,
        user_data?: any | null
    ): Gst.Memory;
}

export class VulkanImageView {
    static $gtype: GObject.GType<VulkanImageView>;

    constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);
    constructor(copy: VulkanImageView);

    // Fields
    parent: Gst.MiniObject;
    device: VulkanDevice;
    image: VulkanImageMemory;
    view: Vulkan.ImageView;
    create_info: Vulkan.ImageViewCreateInfo;

    // Constructors
    static ["new"](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;
}

export class VulkanInstancePrivate {
    static $gtype: GObject.GType<VulkanInstancePrivate>;

    constructor(copy: VulkanInstancePrivate);
}

export class VulkanMemory {
    static $gtype: GObject.GType<VulkanMemory>;

    constructor(copy: VulkanMemory);

    // Fields
    mem: Gst.Memory;
    device: VulkanDevice;
    mem_ptr: Vulkan.DeviceMemory;
    lock: GLib.Mutex;
    map_count: number;

    // Members
    static alloc(
        device: VulkanDevice,
        memory_type_index: number,
        params: Gst.AllocationParams,
        size: number,
        mem_prop_flags: Vulkan.MemoryPropertyFlags
    ): Gst.Memory;
    static find_memory_type_index_with_type_properties(
        device: VulkanDevice,
        type_bits: number,
        properties: Vulkan.MemoryPropertyFlags,
        type_index: number
    ): boolean;
    static heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
    static init_once(): void;
    static property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
}

export class VulkanPhysicalDevicePrivate {
    static $gtype: GObject.GType<VulkanPhysicalDevicePrivate>;

    constructor(copy: VulkanPhysicalDevicePrivate);
}

export class VulkanQueuePrivate {
    static $gtype: GObject.GType<VulkanQueuePrivate>;

    constructor(copy: VulkanQueuePrivate);
}

export class VulkanSwapperPrivate {
    static $gtype: GObject.GType<VulkanSwapperPrivate>;

    constructor(copy: VulkanSwapperPrivate);
}

export class VulkanTrash {
    static $gtype: GObject.GType<VulkanTrash>;

    constructor(fence: VulkanFence);
    constructor(copy: VulkanTrash);

    // Fields
    parent: Gst.MiniObject;
    cache: VulkanTrashList;
    fence: VulkanFence;
    notify: VulkanTrashNotify;
    user_data: any;

    // Constructors
    static ["new"](fence: VulkanFence): VulkanTrash;
    static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;

    // Members
    static mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
    static object_unref(device: VulkanDevice, user_data?: any | null): void;
}

export class VulkanWindowPrivate {
    static $gtype: GObject.GType<VulkanWindowPrivate>;

    constructor(copy: VulkanWindowPrivate);
}
export type VulkanHandleTypedef = number;
