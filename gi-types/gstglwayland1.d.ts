/**
 * GstGLWayland 1.0
 *
 * Generated from 1.0
 */

import * as GstGL from "gstgl1";
import * as GObject from "gobject2";

export module GLDisplayWayland {
    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLDisplayWayland extends GstGL.GLDisplay {
    static $gtype: GObject.GType<GLDisplayWayland>;

    constructor(properties?: Partial<GLDisplayWayland.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLDisplayWayland.ConstructorProperties>, ...args: any[]): void;

    // Fields
    display: any;
    registry: any;
    compositor: any;
    subcompositor: any;
    shell: any;

    // Constructors

    static ["new"](name?: string | null): GLDisplayWayland;
    // Conflicted with GstGL.GLDisplay.new
    static ["new"](...args: never[]): any;
    static new_with_display(display?: any | null): GLDisplayWayland;
}
