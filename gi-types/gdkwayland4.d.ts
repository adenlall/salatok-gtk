/**
 * GdkWayland 4.0
 *
 * Generated from 4.0
 */

import * as Gdk from "gdk4";
import * as GObject from "gobject2";

export type WaylandToplevelExported = (toplevel: WaylandToplevel, handle: string) => void;
export module WaylandDevice {
    export interface ConstructorProperties extends Gdk.Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandDevice extends Gdk.Device {
    static $gtype: GObject.GType<WaylandDevice>;

    constructor(properties?: Partial<WaylandDevice.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandDevice.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_node_path(): string | null;
    get_xkb_keymap(): any | null;
}
export module WaylandDisplay {
    export interface ConstructorProperties extends Gdk.Display.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandDisplay extends Gdk.Display {
    static $gtype: GObject.GType<WaylandDisplay>;

    constructor(properties?: Partial<WaylandDisplay.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandDisplay.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_egl_display(): any | null;
    get_startup_notification_id(): string | null;
    query_registry(global: string): boolean;
    set_cursor_theme(name: string, size: number): void;
    set_startup_notification_id(startup_id: string): void;
}
export module WaylandGLContext {
    export interface ConstructorProperties extends Gdk.GLContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandGLContext extends Gdk.GLContext {
    static $gtype: GObject.GType<WaylandGLContext>;

    constructor(properties?: Partial<WaylandGLContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandGLContext.ConstructorProperties>, ...args: any[]): void;
}
export module WaylandMonitor {
    export interface ConstructorProperties extends Gdk.Monitor.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandMonitor extends Gdk.Monitor {
    static $gtype: GObject.GType<WaylandMonitor>;

    constructor(properties?: Partial<WaylandMonitor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandMonitor.ConstructorProperties>, ...args: any[]): void;
}
export module WaylandPopup {
    export interface ConstructorProperties extends WaylandSurface.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandPopup extends WaylandSurface implements Gdk.Popup {
    static $gtype: GObject.GType<WaylandPopup>;

    constructor(properties?: Partial<WaylandPopup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandPopup.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get autohide(): boolean;

    // Implemented Members

    get_autohide(): boolean;
    get_parent(): Gdk.Surface | null;
    get_position_x(): number;
    get_position_y(): number;
    get_rect_anchor(): Gdk.Gravity;
    get_surface_anchor(): Gdk.Gravity;
    present(width: number, height: number, layout: Gdk.PopupLayout): boolean;
}
export module WaylandSeat {
    export interface ConstructorProperties extends Gdk.Seat.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandSeat extends Gdk.Seat {
    static $gtype: GObject.GType<WaylandSeat>;

    constructor(properties?: Partial<WaylandSeat.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandSeat.ConstructorProperties>, ...args: any[]): void;
}
export module WaylandSurface {
    export interface ConstructorProperties extends Gdk.Surface.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandSurface extends Gdk.Surface {
    static $gtype: GObject.GType<WaylandSurface>;

    constructor(properties?: Partial<WaylandSurface.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandSurface.ConstructorProperties>, ...args: any[]): void;
}
export module WaylandToplevel {
    export interface ConstructorProperties extends WaylandSurface.ConstructorProperties {
        [key: string]: any;
    }
}
export class WaylandToplevel extends WaylandSurface implements Gdk.Toplevel {
    static $gtype: GObject.GType<WaylandToplevel>;

    constructor(properties?: Partial<WaylandToplevel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WaylandToplevel.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get decorated(): boolean;
    set decorated(val: boolean);
    get deletable(): boolean;
    set deletable(val: boolean);
    get fullscreen_mode(): Gdk.FullscreenMode;
    set fullscreen_mode(val: Gdk.FullscreenMode);
    get fullscreenMode(): Gdk.FullscreenMode;
    set fullscreenMode(val: Gdk.FullscreenMode);
    get icon_list(): any;
    set icon_list(val: any);
    get iconList(): any;
    set iconList(val: any);
    get modal(): boolean;
    set modal(val: boolean);
    get shortcuts_inhibited(): boolean;
    get shortcutsInhibited(): boolean;
    get startup_id(): string;
    set startup_id(val: string);
    get startupId(): string;
    set startupId(val: string);
    get state(): Gdk.ToplevelState;
    get title(): string;
    set title(val: string);
    get transient_for(): Gdk.Surface;
    set transient_for(val: Gdk.Surface);
    get transientFor(): Gdk.Surface;
    set transientFor(val: Gdk.Surface);

    // Members

    drop_exported_handle(handle: string): void;
    export_handle(callback: WaylandToplevelExported): boolean;
    set_application_id(application_id: string): void;
    set_transient_for_exported(parent_handle_str: string): boolean;
    unexport_handle(): void;

    // Implemented Members

    begin_move(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void;
    begin_resize(
        edge: Gdk.SurfaceEdge,
        device: Gdk.Device | null,
        button: number,
        x: number,
        y: number,
        timestamp: number
    ): void;
    focus(timestamp: number): void;
    get_state(): Gdk.ToplevelState;
    inhibit_system_shortcuts(event?: Gdk.Event | null): void;
    lower(): boolean;
    minimize(): boolean;
    present(layout: Gdk.ToplevelLayout): void;
    restore_system_shortcuts(): void;
    set_decorated(decorated: boolean): void;
    set_deletable(deletable: boolean): void;
    set_icon_list(surfaces: Gdk.Texture[]): void;
    set_modal(modal: boolean): void;
    set_startup_id(startup_id: string): void;
    set_title(title: string): void;
    set_transient_for(parent: Gdk.Surface): void;
    show_window_menu(event: Gdk.Event): boolean;
    supports_edge_constraints(): boolean;
    titlebar_gesture(gesture: Gdk.TitlebarGesture): boolean;
}
