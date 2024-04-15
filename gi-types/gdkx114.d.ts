/**
 * GdkX11 4.0
 *
 * Generated from 4.0
 */

import * as Gdk from "gdk4";
import * as GObject from "gobject2";
import * as xlib from "xlib2";

export function x11_device_get_id(device: X11DeviceXI2): number;
export function x11_device_manager_lookup(device_manager: X11DeviceManagerXI2, device_id: number): X11DeviceXI2 | null;
export function x11_free_compound_text(ctext: number): void;
export function x11_free_text_list(list: string): void;
export function x11_get_server_time(surface: X11Surface): number;
export function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
export function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
export function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
export function x11_set_sm_client_id(sm_client_id?: string | null): void;

export namespace X11DeviceType {
    export const $gtype: GObject.GType<X11DeviceType>;
}

export enum X11DeviceType {
    LOGICAL = 0,
    PHYSICAL = 1,
    FLOATING = 2,
}
export module X11AppLaunchContext {
    export interface ConstructorProperties extends Gdk.AppLaunchContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11AppLaunchContext extends Gdk.AppLaunchContext {
    static $gtype: GObject.GType<X11AppLaunchContext>;

    constructor(properties?: Partial<X11AppLaunchContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11AppLaunchContext.ConstructorProperties>, ...args: any[]): void;
}
export module X11DeviceManagerXI2 {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        display: Gdk.Display;
        major: number;
        minor: number;
        opcode: number;
    }
}
export class X11DeviceManagerXI2 extends GObject.Object {
    static $gtype: GObject.GType<X11DeviceManagerXI2>;

    constructor(properties?: Partial<X11DeviceManagerXI2.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11DeviceManagerXI2.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get display(): Gdk.Display;
    get major(): number;
    get minor(): number;
    get opcode(): number;
}
export module X11DeviceXI2 {
    export interface ConstructorProperties extends Gdk.Device.ConstructorProperties {
        [key: string]: any;
        device_id: number;
        deviceId: number;
    }
}
export class X11DeviceXI2 extends Gdk.Device {
    static $gtype: GObject.GType<X11DeviceXI2>;

    constructor(properties?: Partial<X11DeviceXI2.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11DeviceXI2.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get device_id(): number;
    get deviceId(): number;
}
export module X11Display {
    export interface ConstructorProperties extends Gdk.Display.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Display extends Gdk.Display {
    static $gtype: GObject.GType<X11Display>;

    constructor(properties?: Partial<X11Display.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Display.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "xevent", callback: (_source: this, xevent: any | null) => boolean): number;
    connect_after(signal: "xevent", callback: (_source: this, xevent: any | null) => boolean): number;
    emit(signal: "xevent", xevent: any | null): void;

    // Members

    error_trap_pop(): number;
    error_trap_pop_ignored(): void;
    error_trap_push(): void;
    get_default_group(): Gdk.Surface;
    get_egl_display(): any | null;
    get_egl_version(): [boolean, number, number];
    get_glx_version(): [boolean, number, number];
    get_primary_monitor(): Gdk.Monitor;
    get_screen(): X11Screen;
    get_startup_notification_id(): string;
    // Conflicted with Gdk.Display.get_startup_notification_id
    get_startup_notification_id(...args: never[]): any;
    get_user_time(): number;
    get_xcursor(cursor: Gdk.Cursor): xlib.Cursor;
    get_xdisplay(): xlib.Display;
    get_xrootwindow(): xlib.Window;
    get_xscreen(): xlib.Screen;
    grab(): void;
    set_cursor_theme(theme: string | null, size: number): void;
    set_startup_notification_id(startup_id: string): void;
    set_surface_scale(scale: number): void;
    string_to_compound_text(str: string): [number, string, number, Uint8Array];
    text_property_to_text_list(encoding: string, format: number, text: number, length: number, list: string): number;
    ungrab(): void;
    utf8_to_compound_text(str: string): [boolean, string, number, Uint8Array];
    static open(display_name?: string | null): Gdk.Display | null;
    static set_program_class(display: Gdk.Display, program_class: string): void;
}
export module X11Drag {
    export interface ConstructorProperties extends Gdk.Drag.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Drag extends Gdk.Drag {
    static $gtype: GObject.GType<X11Drag>;

    constructor(properties?: Partial<X11Drag.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Drag.ConstructorProperties>, ...args: any[]): void;
}
export module X11GLContext {
    export interface ConstructorProperties extends Gdk.GLContext.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class X11GLContext extends Gdk.GLContext {
    static $gtype: GObject.GType<X11GLContext>;

    constructor(properties?: Partial<X11GLContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11GLContext.ConstructorProperties>, ...args: any[]): void;
}
export module X11Monitor {
    export interface ConstructorProperties extends Gdk.Monitor.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Monitor extends Gdk.Monitor {
    static $gtype: GObject.GType<X11Monitor>;

    constructor(properties?: Partial<X11Monitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Monitor.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_output(): xlib.XID;
    get_workarea(): Gdk.Rectangle;
}
export module X11Screen {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Screen extends GObject.Object {
    static $gtype: GObject.GType<X11Screen>;

    constructor(properties?: Partial<X11Screen.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Screen.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "window-manager-changed", callback: (_source: this) => void): number;
    connect_after(signal: "window-manager-changed", callback: (_source: this) => void): number;
    emit(signal: "window-manager-changed"): void;

    // Members

    get_current_desktop(): number;
    get_monitor_output(monitor_num: number): xlib.XID;
    get_number_of_desktops(): number;
    get_screen_number(): number;
    get_window_manager_name(): string;
    get_xscreen(): xlib.Screen;
    supports_net_wm_hint(property_name: string): boolean;
}
export module X11Surface {
    export interface ConstructorProperties extends Gdk.Surface.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Surface extends Gdk.Surface {
    static $gtype: GObject.GType<X11Surface>;

    constructor(properties?: Partial<X11Surface.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Surface.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_desktop(): number;
    get_group(): Gdk.Surface | null;
    get_xid(): xlib.Window;
    move_to_current_desktop(): void;
    move_to_desktop(desktop: number): void;
    set_frame_sync_enabled(frame_sync_enabled: boolean): void;
    set_group(leader: Gdk.Surface): void;
    set_skip_pager_hint(skips_pager: boolean): void;
    set_skip_taskbar_hint(skips_taskbar: boolean): void;
    set_theme_variant(variant: string): void;
    set_urgency_hint(urgent: boolean): void;
    set_user_time(timestamp: number): void;
    set_utf8_property(name: string, value?: string | null): void;
    static lookup_for_display(display: X11Display, window: xlib.Window): X11Surface;
}
