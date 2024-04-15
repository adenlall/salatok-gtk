/**
 * GstInsertBin 1.0
 *
 * Generated from 1.0
 */

import * as Gst from "gst1";
import * as GObject from "gobject2";

export type InsertBinCallback = (insertbin: InsertBin, element: Gst.Element, success: boolean) => void;
export module InsertBin {
    export interface ConstructorProperties extends Gst.Bin.ConstructorProperties {
        [key: string]: any;
    }
}
export class InsertBin extends Gst.Bin implements Gst.ChildProxy {
    static $gtype: GObject.GType<InsertBin>;

    constructor(properties?: Partial<InsertBin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InsertBin.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "append",
        callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void
    ): number;
    connect_after(
        signal: "append",
        callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void
    ): number;
    emit(signal: "append", callback: Gst.Element, user_data: any | null, user_data2: any | null): void;
    connect(
        signal: "insert-after",
        callback: (
            _source: this,
            sibling: Gst.Element,
            callback: Gst.Element,
            user_data: any | null,
            user_data2: any | null
        ) => void
    ): number;
    connect_after(
        signal: "insert-after",
        callback: (
            _source: this,
            sibling: Gst.Element,
            callback: Gst.Element,
            user_data: any | null,
            user_data2: any | null
        ) => void
    ): number;
    emit(
        signal: "insert-after",
        sibling: Gst.Element,
        callback: Gst.Element,
        user_data: any | null,
        user_data2: any | null
    ): void;
    connect(
        signal: "insert-before",
        callback: (
            _source: this,
            sibling: Gst.Element,
            callback: Gst.Element,
            user_data: any | null,
            user_data2: any | null
        ) => void
    ): number;
    connect_after(
        signal: "insert-before",
        callback: (
            _source: this,
            sibling: Gst.Element,
            callback: Gst.Element,
            user_data: any | null,
            user_data2: any | null
        ) => void
    ): number;
    emit(
        signal: "insert-before",
        sibling: Gst.Element,
        callback: Gst.Element,
        user_data: any | null,
        user_data2: any | null
    ): void;
    connect(
        signal: "prepend",
        callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void
    ): number;
    connect_after(
        signal: "prepend",
        callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void
    ): number;
    emit(signal: "prepend", callback: Gst.Element, user_data: any | null, user_data2: any | null): void;
    connect(
        signal: "remove",
        callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void
    ): number;
    connect_after(
        signal: "remove",
        callback: (_source: this, callback: Gst.Element, user_data: any | null, user_data2: any | null) => void
    ): number;
    emit(signal: "remove", callback: Gst.Element, user_data: any | null, user_data2: any | null): void;

    // Constructors

    static ["new"](name?: string | null): InsertBin;

    // Members

    append(element: Gst.Element, callback: InsertBinCallback): void;
    insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
    insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void;
    prepend(element: Gst.Element, callback: InsertBinCallback): void;
    remove(element: Gst.Element, callback: InsertBinCallback): void;
    // Conflicted with Gst.Bin.remove
    remove(...args: never[]): any;

    // Implemented Members

    child_added(child: GObject.Object, name: string): void;
    child_removed(child: GObject.Object, name: string): void;
    get_child_by_index<T = GObject.Object>(index: number): T;
    get_child_by_name<T = GObject.Object>(name: string): T;
    get_child_by_name_recurse<T = GObject.Object>(name: string): T;
    get_children_count(): number;
    get_property(name: string): unknown;
    // Conflicted with GObject.Object.get_property
    get_property(...args: never[]): any;
    lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
    set_property(name: string, value: GObject.Value | any): void;
    // Conflicted with GObject.Object.set_property
    set_property(...args: never[]): any;
    vfunc_child_added(child: GObject.Object, name: string): void;
    vfunc_child_removed(child: GObject.Object, name: string): void;
    vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
    vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
    vfunc_get_children_count(): number;
}

export class InsertBinPrivate {
    static $gtype: GObject.GType<InsertBinPrivate>;

    constructor(copy: InsertBinPrivate);
}
