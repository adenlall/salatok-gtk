/**
 * GModule 2.0
 *
 * Generated from 2.0
 */

import * as GLib from "glib2";
import * as GObject from "gobject2";

export function module_build_path(directory: string | null, module_name: string): string;
export function module_error(): string;
export function module_error_quark(): GLib.Quark;
export function module_supported(): boolean;
export type ModuleCheckInit = (module: Module) => string;
export type ModuleUnload = (module: Module) => void;

export class ModuleError extends GLib.Error {
    static $gtype: GObject.GType<ModuleError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ModuleError);

    // Fields
    static FAILED: number;
    static CHECK_FAILED: number;
}

export namespace ModuleFlags {
    export const $gtype: GObject.GType<ModuleFlags>;
}

export enum ModuleFlags {
    LAZY = 1,
    LOCAL = 2,
    MASK = 3,
}

export class Module {
    static $gtype: GObject.GType<Module>;

    constructor(copy: Module);

    // Members
    close(): boolean;
    make_resident(): void;
    name(): string;
    symbol(symbol_name: string): [boolean, any];
    static build_path(directory: string | null, module_name: string): string;
    static error(): string;
    static error_quark(): GLib.Quark;
    static supported(): boolean;
}
