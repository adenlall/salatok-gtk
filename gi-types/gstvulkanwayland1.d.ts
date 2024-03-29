/**
 * GstVulkanWayland 1.0
 *
 * Generated from 1.0
 */

import * as GstVulkan from "gstvulkan1";
import * as GObject from "gobject2";

export module VulkanDisplayWayland {
    export interface ConstructorProperties extends GstVulkan.VulkanDisplay.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanDisplayWayland extends GstVulkan.VulkanDisplay {
    static $gtype: GObject.GType<VulkanDisplayWayland>;

    constructor(properties?: Partial<VulkanDisplayWayland.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanDisplayWayland.ConstructorProperties>, ...args: any[]): void;

    // Fields
    display: any;
    registry: any;
    compositor: any;
    subcompositor: any;
    shell: any;

    // Constructors

    static ["new"](name?: string | null): VulkanDisplayWayland;
    // Conflicted with GstVulkan.VulkanDisplay.new
    static ["new"](...args: never[]): any;
    static new_with_display(display?: any | null): VulkanDisplayWayland;
}
