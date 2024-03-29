/**
 * GstVulkanXCB 1.0
 *
 * Generated from 1.0
 */

import * as GstVulkan from "gstvulkan1";
import * as GObject from "gobject2";

export module VulkanDisplayXCB {
    export interface ConstructorProperties extends GstVulkan.VulkanDisplay.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanDisplayXCB extends GstVulkan.VulkanDisplay {
    static $gtype: GObject.GType<VulkanDisplayXCB>;

    constructor(properties?: Partial<VulkanDisplayXCB.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanDisplayXCB.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](name?: string | null): VulkanDisplayXCB;
    // Conflicted with GstVulkan.VulkanDisplay.new
    static ["new"](...args: never[]): any;
}
