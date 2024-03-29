/**
 * GstGLX11 1.0
 *
 * Generated from 1.0
 */

import * as GstGL from "gstgl1";
import * as GObject from "gobject2";

export module GLDisplayX11 {
    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLDisplayX11 extends GstGL.GLDisplay {
    static $gtype: GObject.GType<GLDisplayX11>;

    constructor(properties?: Partial<GLDisplayX11.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLDisplayX11.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](name?: string | null): GLDisplayX11;
    // Conflicted with GstGL.GLDisplay.new
    static ["new"](...args: never[]): any;
}
