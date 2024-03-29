/**
 * GdkX11 3.0
 *
 * Generated from 3.0
 */

import * as Gdk from "gdk3";
import * as xlib from "xlib2";
import * as cairo from "cairo1";
import * as GObject from "gobject2";

export function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom;
export function x11_atom_to_xatom_for_display(display: X11Display, atom: Gdk.Atom): xlib.Atom;
export function x11_device_get_id(device: X11DeviceCore): number;
export function x11_device_manager_lookup(
    device_manager: X11DeviceManagerCore,
    device_id: number
): X11DeviceCore | null;
export function x11_free_compound_text(ctext: number): void;
export function x11_free_text_list(list: string): void;
export function x11_get_default_root_xwindow(): xlib.Window;
export function x11_get_default_screen(): number;
export function x11_get_default_xdisplay(): xlib.Display;
export function x11_get_parent_relative_pattern(): cairo.Pattern;
export function x11_get_server_time(window: X11Window): number;
export function x11_get_xatom_by_name(atom_name: string): xlib.Atom;
export function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
export function x11_get_xatom_name(xatom: xlib.Atom): string;
export function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
export function x11_grab_server(): void;
export function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
export function x11_register_standard_event_type(display: X11Display, event_base: number, n_events: number): void;
export function x11_set_sm_client_id(sm_client_id?: string | null): void;
export function x11_ungrab_server(): void;
export function x11_xatom_to_atom(xatom: xlib.Atom): Gdk.Atom;
export function x11_xatom_to_atom_for_display(display: X11Display, xatom: xlib.Atom): Gdk.Atom;
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
export module X11Cursor {
    export interface ConstructorProperties extends Gdk.Cursor.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Cursor extends Gdk.Cursor {
    static $gtype: GObject.GType<X11Cursor>;

    constructor(properties?: Partial<X11Cursor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Cursor.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_xcursor(): xlib.Cursor;
    get_xdisplay(): xlib.Display;
}
export module X11DeviceCore {
    export interface ConstructorProperties extends Gdk.Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11DeviceCore extends Gdk.Device {
    static $gtype: GObject.GType<X11DeviceCore>;

    constructor(properties?: Partial<X11DeviceCore.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11DeviceCore.ConstructorProperties>, ...args: any[]): void;
}
export module X11DeviceManagerCore {
    export interface ConstructorProperties extends Gdk.DeviceManager.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11DeviceManagerCore extends Gdk.DeviceManager {
    static $gtype: GObject.GType<X11DeviceManagerCore>;

    constructor(properties?: Partial<X11DeviceManagerCore.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11DeviceManagerCore.ConstructorProperties>, ...args: any[]): void;
}
export module X11DeviceManagerXI2 {
    export interface ConstructorProperties extends X11DeviceManagerCore.ConstructorProperties {
        [key: string]: any;
        major: number;
        minor: number;
        opcode: number;
    }
}
export class X11DeviceManagerXI2 extends X11DeviceManagerCore {
    static $gtype: GObject.GType<X11DeviceManagerXI2>;

    constructor(properties?: Partial<X11DeviceManagerXI2.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11DeviceManagerXI2.ConstructorProperties>, ...args: any[]): void;

    // Properties
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

    // Members

    error_trap_pop(): number;
    error_trap_pop_ignored(): void;
    error_trap_push(): void;
    get_startup_notification_id(): string;
    get_user_time(): number;
    get_xdisplay(): xlib.Display;
    grab(): void;
    set_cursor_theme(theme: string | null, size: number): void;
    set_startup_notification_id(startup_id: string): void;
    set_window_scale(scale: number): void;
    string_to_compound_text(str: string): [number, Gdk.Atom, number, Uint8Array];
    text_property_to_text_list(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number;
    ungrab(): void;
    utf8_to_compound_text(str: string): [boolean, Gdk.Atom, number, Uint8Array];
    static get_glx_version(display: Gdk.Display): [boolean, number, number];
}
export module X11DisplayManager {
    export interface ConstructorProperties extends Gdk.DisplayManager.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11DisplayManager extends Gdk.DisplayManager {
    static $gtype: GObject.GType<X11DisplayManager>;

    constructor(properties?: Partial<X11DisplayManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11DisplayManager.ConstructorProperties>, ...args: any[]): void;
}
export module X11DragContext {
    export interface ConstructorProperties extends Gdk.DragContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11DragContext extends Gdk.DragContext {
    static $gtype: GObject.GType<X11DragContext>;

    constructor(properties?: Partial<X11DragContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11DragContext.ConstructorProperties>, ...args: any[]): void;
}
export module X11GLContext {
    export interface ConstructorProperties extends Gdk.GLContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11GLContext extends Gdk.GLContext {
    static $gtype: GObject.GType<X11GLContext>;

    constructor(properties?: Partial<X11GLContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11GLContext.ConstructorProperties>, ...args: any[]): void;
}
export module X11Keymap {
    export interface ConstructorProperties extends Gdk.Keymap.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Keymap extends Gdk.Keymap {
    static $gtype: GObject.GType<X11Keymap>;

    constructor(properties?: Partial<X11Keymap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Keymap.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_group_for_state(state: number): number;
    key_is_modifier(keycode: number): boolean;
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

    static get_output(monitor: Gdk.Monitor): xlib.XID;
}
export module X11Screen {
    export interface ConstructorProperties extends Gdk.Screen.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Screen extends Gdk.Screen {
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
    lookup_visual(xvisualid: xlib.VisualID): X11Visual;
    supports_net_wm_hint(property: Gdk.Atom): boolean;
}
export module X11Visual {
    export interface ConstructorProperties extends Gdk.Visual.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Visual extends Gdk.Visual {
    static $gtype: GObject.GType<X11Visual>;

    constructor(properties?: Partial<X11Visual.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Visual.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_xvisual(): xlib.Visual;
}
export module X11Window {
    export interface ConstructorProperties extends Gdk.Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class X11Window extends Gdk.Window {
    static $gtype: GObject.GType<X11Window>;

    constructor(properties?: Partial<X11Window.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<X11Window.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static foreign_new_for_display(display: X11Display, window: xlib.Window): X11Window;

    // Members

    get_desktop(): number;
    get_xid(): xlib.Window;
    move_to_current_desktop(): void;
    move_to_desktop(desktop: number): void;
    set_frame_extents(left: number, right: number, top: number, bottom: number): void;
    set_frame_sync_enabled(frame_sync_enabled: boolean): void;
    set_hide_titlebar_when_maximized(hide_titlebar_when_maximized: boolean): void;
    set_theme_variant(variant: string): void;
    set_user_time(timestamp: number): void;
    set_utf8_property(name: string, value?: string | null): void;
    static lookup_for_display(display: X11Display, window: xlib.Window): X11Window;
}
