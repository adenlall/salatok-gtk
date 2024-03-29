/**
 * Notify 0.7
 *
 * Generated from 0.8.3
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as GdkPixbuf from "gdkpixbuf2";

export const EXPIRES_DEFAULT: number;
export const EXPIRES_NEVER: number;
export const VERSION_MAJOR: number;
export const VERSION_MICRO: number;
export const VERSION_MINOR: number;
export function get_app_name(): string;
export function get_server_caps(): string[];
export function get_server_info(): [boolean, string, string, string, string];
export function init(app_name?: string | null): boolean;
export function is_initted(): boolean;
export function set_app_name(app_name: string): void;
export function uninit(): void;
export type ActionCallback = (notification: Notification, action: string) => void;

export namespace ClosedReason {
    export const $gtype: GObject.GType<ClosedReason>;
}

export enum ClosedReason {
    UNSET = -1,
    EXPIRED = 1,
    DISMISSED = 2,
    API_REQUEST = 3,
    UNDEFIEND = 4,
}

export namespace Urgency {
    export const $gtype: GObject.GType<Urgency>;
}

export enum Urgency {
    LOW = 0,
    NORMAL = 1,
    CRITICAL = 2,
}
export module Notification {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        app_name: string;
        appName: string;
        body: string;
        closed_reason: number;
        closedReason: number;
        icon_name: string;
        iconName: string;
        id: number;
        summary: string;
    }
}
export class Notification extends GObject.Object {
    static $gtype: GObject.GType<Notification>;

    constructor(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Notification.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get app_name(): string;
    set app_name(val: string);
    get appName(): string;
    set appName(val: string);
    get body(): string;
    set body(val: string);
    get closed_reason(): number;
    get closedReason(): number;
    get icon_name(): string;
    set icon_name(val: string);
    get iconName(): string;
    set iconName(val: string);
    get id(): number;
    set id(val: number);
    get summary(): string;
    set summary(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "closed", callback: (_source: this) => void): number;
    connect_after(signal: "closed", callback: (_source: this) => void): number;
    emit(signal: "closed"): void;

    // Constructors

    static ["new"](summary: string, body?: string | null, icon?: string | null): Notification;

    // Members

    add_action(action: string, label: string, callback: ActionCallback): void;
    clear_actions(): void;
    clear_hints(): void;
    close(): boolean;
    get_activation_token(): string | null;
    get_closed_reason(): number;
    set_app_name(app_name?: string | null): void;
    set_category(category: string): void;
    set_hint(key: string, value?: GLib.Variant | null): void;
    set_hint_byte(key: string, value: number): void;
    set_hint_byte_array(key: string, value: Uint8Array | string): void;
    set_hint_double(key: string, value: number): void;
    set_hint_int32(key: string, value: number): void;
    set_hint_string(key: string, value: string): void;
    set_hint_uint32(key: string, value: number): void;
    set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void;
    set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_timeout(timeout: number): void;
    set_urgency(urgency: Urgency): void;
    show(): boolean;
    update(summary: string, body?: string | null, icon?: string | null): boolean;
    vfunc_closed(): void;
}

export class NotificationPrivate {
    static $gtype: GObject.GType<NotificationPrivate>;

    constructor(copy: NotificationPrivate);
}
