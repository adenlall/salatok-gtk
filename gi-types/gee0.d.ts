/**
 * Gee 0.8
 *
 * Generated from 0.8
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as Gio from "gio2";

export function functions_get_equal_func_for(t: GObject.GType): [EqualDataFunc, any];
export function functions_get_hash_func_for(t: GObject.GType): [HashDataFunc, any];
export function functions_get_compare_func_for(t: GObject.GType): [GLib.CompareDataFunc, any];
export function hazard_pointer_policy_is_concrete(): boolean;
export function hazard_pointer_policy_is_blocking(): boolean;
export function hazard_pointer_policy_is_safe(): boolean;
export function hazard_pointer_policy_to_concrete(): HazardPointerPolicy;
export function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, task: Task): Future;
export function async_task(): globalThis.Promise<void>;
export function async_task(_callback_: Gio.AsyncReadyCallback | null): void;
export function async_task(_callback_?: Gio.AsyncReadyCallback | null): globalThis.Promise<void> | void;
export function async_task_finish(_res_: Gio.AsyncResult): void;
export type HashDataFunc = (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, v: any) => number;
export type EqualDataFunc = (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, a: any, b: any) => boolean;
export type LazyFunc = (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc) => any;
export type FoldMapFunc = (
    a_type: GObject.GType,
    a_dup_func: GObject.BoxedCopyFunc,
    k_type: GObject.GType,
    k_dup_func: GObject.BoxedCopyFunc,
    v_type: GObject.GType,
    v_dup_func: GObject.BoxedCopyFunc,
    k: any,
    v: any,
    a: any
) => any;
export type ForallMapFunc = (
    k_type: GObject.GType,
    k_dup_func: GObject.BoxedCopyFunc,
    v_type: GObject.GType,
    v_dup_func: GObject.BoxedCopyFunc,
    k: any,
    v: any
) => boolean;
export type Task = (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc) => any;
export type FoldFunc = (
    a_type: GObject.GType,
    a_dup_func: GObject.BoxedCopyFunc,
    g_type: GObject.GType,
    g_dup_func: GObject.BoxedCopyFunc,
    g: any,
    a: any
) => any;
export type ForallFunc = (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any) => boolean;
export type UnfoldFunc = (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc) => Lazy | null;
export type StreamFunc = (
    g_type: GObject.GType,
    g_dup_func: GObject.BoxedCopyFunc,
    a_type: GObject.GType,
    a_dup_func: GObject.BoxedCopyFunc,
    state: TraversableStream,
    g: Lazy | null
) => TraversableStream;
export type MapFunc = (
    a_type: GObject.GType,
    a_dup_func: GObject.BoxedCopyFunc,
    g_type: GObject.GType,
    g_dup_func: GObject.BoxedCopyFunc,
    g: any
) => any;
export type Predicate = (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any) => boolean;
export type FlatMapFunc = (
    a_type: GObject.GType,
    a_dup_func: GObject.BoxedCopyFunc,
    g_type: GObject.GType,
    g_dup_func: GObject.BoxedCopyFunc,
    g: any
) => Iterator;

export class FutureError extends GLib.Error {
    static $gtype: GObject.GType<FutureError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FutureError);

    // Fields
    static ABANDON_PROMISE: number;
    static EXCEPTION: number;
}

export namespace ConcurrentSetRangeType {
    export const $gtype: GObject.GType<ConcurrentSetRangeType>;
}

export enum ConcurrentSetRangeType {
    HEAD = 0,
    TAIL = 1,
    BOUNDED = 2,
    EMPTY = 3,
}

export namespace HazardPointerPolicy {
    export const $gtype: GObject.GType<HazardPointerPolicy>;
}

export enum HazardPointerPolicy {
    DEFAULT = 0,
    THREAD_EXIT = 1,
    TRY_FREE = 2,
    FREE = 3,
    TRY_RELEASE = 4,
    RELEASE = 5,
}

export namespace HazardPointerReleasePolicy {
    export const $gtype: GObject.GType<HazardPointerReleasePolicy>;
}

export enum HazardPointerReleasePolicy {
    HELPER_THREAD = 0,
    MAIN_LOOP = 1,
}

export namespace TraversableStream {
    export const $gtype: GObject.GType<TraversableStream>;
}

export enum TraversableStream {
    YIELD = 0,
    CONTINUE = 1,
    END = 2,
    WAIT = 3,
}
export module AbstractBidirList {
    export interface ConstructorProperties extends AbstractList.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        read_only_view: BidirList;
        readOnlyView: BidirList;
    }
}
export abstract class AbstractBidirList extends AbstractList implements BidirList {
    static $gtype: GObject.GType<AbstractBidirList>;

    constructor(properties?: Partial<AbstractBidirList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractBidirList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get read_only_view(): BidirList;
    get readOnlyView(): BidirList;

    // Members

    bidir_list_iterator(): BidirListIterator;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_read_only_view(): BidirList;
    vfunc_bidir_list_iterator(): BidirListIterator;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_read_only_view(): BidirList;

    // Implemented Members

    list_iterator(): ListIterator;
    get(index: number): any;
    set(index: number, item: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    index_of(item: any): number;
    insert(index: number, item: any): void;
    remove_at(index: number): any;
    slice(start: number, stop: number): List | null;
    first(): any;
    last(): any;
    insert_all(index: number, collection: Collection): void;
    sort(compare_func?: GLib.CompareDataFunc | null): void;
    vfunc_list_iterator(): ListIterator;
    vfunc_get(index: number): any;
    vfunc_set(index: number, item: any): void;
    vfunc_index_of(item: any): number;
    vfunc_insert(index: number, item: any): void;
    vfunc_remove_at(index: number): any;
    vfunc_slice(start: number, stop: number): List | null;
    vfunc_first(): any;
    vfunc_last(): any;
    vfunc_insert_all(index: number, collection: Collection): void;
    vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
}
export module AbstractBidirSortedSet {
    export interface ConstructorProperties extends AbstractSortedSet.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        read_only_view: BidirSortedSet;
        readOnlyView: BidirSortedSet;
    }
}
export abstract class AbstractBidirSortedSet extends AbstractSortedSet implements BidirSortedSet {
    static $gtype: GObject.GType<AbstractBidirSortedSet>;

    constructor(properties?: Partial<AbstractBidirSortedSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractBidirSortedSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get read_only_view(): BidirSortedSet;
    get readOnlyView(): BidirSortedSet;

    // Members

    bidir_iterator(): BidirIterator;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_read_only_view(): BidirSortedSet;
    vfunc_bidir_iterator(): BidirIterator;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_read_only_view(): BidirSortedSet;

    // Implemented Members

    first(): any;
    last(): any;
    iterator_at(element: any): Iterator | null;
    lower(element: any): any | null;
    higher(element: any): any | null;
    floor(element: any): any | null;
    ceil(element: any): any | null;
    head_set(before: any): SortedSet;
    tail_set(after: any): SortedSet;
    sub_set(from: any, to: any): SortedSet;
    vfunc_first(): any;
    vfunc_last(): any;
    vfunc_iterator_at(element: any): Iterator | null;
    vfunc_lower(element: any): any | null;
    vfunc_higher(element: any): any | null;
    vfunc_floor(element: any): any | null;
    vfunc_ceil(element: any): any | null;
    vfunc_head_set(before: any): SortedSet;
    vfunc_tail_set(after: any): SortedSet;
    vfunc_sub_set(from: any, to: any): SortedSet;
}
export module AbstractBidirSortedMap {
    export interface ConstructorProperties extends AbstractSortedMap.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        read_only_view: BidirSortedMap;
        readOnlyView: BidirSortedMap;
    }
}
export abstract class AbstractBidirSortedMap extends AbstractSortedMap implements BidirSortedMap {
    static $gtype: GObject.GType<AbstractBidirSortedMap>;

    constructor(properties?: Partial<AbstractBidirSortedMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractBidirSortedMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;
    get read_only_view(): BidirSortedMap;
    get readOnlyView(): BidirSortedMap;

    // Implemented Properties

    get ascending_keys(): SortedSet;
    get ascendingKeys(): SortedSet;
    get ascending_entries(): SortedSet;
    get ascendingEntries(): SortedSet;

    // Members

    bidir_map_iterator(): BidirMapIterator;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_read_only_view(): BidirSortedMap;
    vfunc_bidir_map_iterator(): BidirMapIterator;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_read_only_view(): BidirSortedMap;

    // Implemented Members

    head_map(before: any): SortedMap;
    tail_map(after: any): SortedMap;
    sub_map(before: any, after: any): SortedMap;
    get_ascending_keys(): SortedSet;
    get_ascending_entries(): SortedSet;
    vfunc_head_map(before: any): SortedMap;
    vfunc_tail_map(after: any): SortedMap;
    vfunc_sub_map(before: any, after: any): SortedMap;
    vfunc_get_ascending_keys(): SortedSet;
    vfunc_get_ascending_entries(): SortedSet;
}
export module AbstractCollection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        size: number;
        read_only: boolean;
        readOnly: boolean;
        read_only_view: Collection;
        readOnlyView: Collection;
    }
}
export abstract class AbstractCollection extends GObject.Object implements Traversable, Iterable, Collection {
    static $gtype: GObject.GType<AbstractCollection>;

    constructor(properties?: Partial<AbstractCollection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractCollection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;
    get read_only_view(): Collection;
    get readOnlyView(): Collection;

    // Members

    contains(item: any): boolean;
    add(item: any): boolean;
    remove(item: any): boolean;
    clear(): void;
    iterator(): Iterator;
    foreach(f: ForallFunc): boolean;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_size(): number;
    get_read_only(): boolean;
    get_read_only_view(): Collection;
    vfunc_contains(item: any): boolean;
    vfunc_add(item: any): boolean;
    vfunc_remove(item: any): boolean;
    vfunc_clear(): void;
    vfunc_iterator(): Iterator;
    vfunc_foreach(f: ForallFunc): boolean;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_size(): number;
    vfunc_get_read_only(): boolean;
    vfunc_get_read_only_view(): Collection;

    // Implemented Members

    stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
    fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
    scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
    filter(pred: Predicate): Iterator;
    chop(offset: number, length: number): Iterator;
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
    tee(forks: number): Iterator[];
    first_match(pred: Predicate): any | null;
    any_match(pred: Predicate): boolean;
    all_match(pred: Predicate): boolean;
    max(compare: GLib.CompareDataFunc): any;
    min(compare: GLib.CompareDataFunc): any;
    order_by(compare?: GLib.CompareDataFunc | null): Iterator;
    get_element_type(): GObject.GType;
    vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
    vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
    vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
    vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
    vfunc_filter(pred: Predicate): Iterator;
    vfunc_chop(offset: number, length: number): Iterator;
    vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
    vfunc_tee(forks: number): Iterator[];
    vfunc_first_match(pred: Predicate): any | null;
    vfunc_any_match(pred: Predicate): boolean;
    vfunc_all_match(pred: Predicate): boolean;
    vfunc_max(compare: GLib.CompareDataFunc): any;
    vfunc_min(compare: GLib.CompareDataFunc): any;
    vfunc_order_by(compare?: GLib.CompareDataFunc | null): Iterator;
    vfunc_get_element_type(): GObject.GType;
    add_all(collection: Collection): boolean;
    contains_all(collection: Collection): boolean;
    remove_all(collection: Collection): boolean;
    retain_all(collection: Collection): boolean;
    to_array(): any[];
    add_all_array(array: any[]): boolean;
    contains_all_array(array: any[]): boolean;
    remove_all_array(array: any[]): boolean;
    add_all_iterator(iter: Iterator): boolean;
    contains_all_iterator(iter: Iterator): boolean;
    remove_all_iterator(iter: Iterator): boolean;
    get_is_empty(): boolean;
    vfunc_add_all(collection: Collection): boolean;
    vfunc_contains_all(collection: Collection): boolean;
    vfunc_remove_all(collection: Collection): boolean;
    vfunc_retain_all(collection: Collection): boolean;
    vfunc_to_array(): any[];
    vfunc_add_all_array(array: any[]): boolean;
    vfunc_contains_all_array(array: any[]): boolean;
    vfunc_remove_all_array(array: any[]): boolean;
    vfunc_add_all_iterator(iter: Iterator): boolean;
    vfunc_contains_all_iterator(iter: Iterator): boolean;
    vfunc_remove_all_iterator(iter: Iterator): boolean;
    vfunc_get_is_empty(): boolean;
}
export module AbstractList {
    export interface ConstructorProperties extends AbstractCollection.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        read_only_view: List;
        readOnlyView: List;
    }
}
export abstract class AbstractList extends AbstractCollection implements List {
    static $gtype: GObject.GType<AbstractList>;

    constructor(properties?: Partial<AbstractList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get read_only_view(): List;
    get readOnlyView(): List;

    // Implemented Properties

    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;

    // Members

    list_iterator(): ListIterator;
    get(index: number): any;
    set(index: number, item: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    index_of(item: any): number;
    insert(index: number, item: any): void;
    remove_at(index: number): any;
    slice(start: number, stop: number): List | null;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_read_only_view(): List;
    vfunc_list_iterator(): ListIterator;
    vfunc_get(index: number): any;
    vfunc_set(index: number, item: any): void;
    vfunc_index_of(item: any): number;
    vfunc_insert(index: number, item: any): void;
    vfunc_remove_at(index: number): any;
    vfunc_slice(start: number, stop: number): List | null;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_read_only_view(): List;

    // Implemented Members

    first(): any;
    last(): any;
    insert_all(index: number, collection: Collection): void;
    sort(compare_func?: GLib.CompareDataFunc | null): void;
    vfunc_first(): any;
    vfunc_last(): any;
    vfunc_insert_all(index: number, collection: Collection): void;
    vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
    contains(item: any): boolean;
    add(item: any): boolean;
    remove(item: any): boolean;
    clear(): void;
    add_all(collection: Collection): boolean;
    contains_all(collection: Collection): boolean;
    remove_all(collection: Collection): boolean;
    retain_all(collection: Collection): boolean;
    to_array(): any[];
    add_all_array(array: any[]): boolean;
    contains_all_array(array: any[]): boolean;
    remove_all_array(array: any[]): boolean;
    add_all_iterator(iter: Iterator): boolean;
    contains_all_iterator(iter: Iterator): boolean;
    remove_all_iterator(iter: Iterator): boolean;
    get_size(): number;
    get_is_empty(): boolean;
    get_read_only(): boolean;
    vfunc_contains(item: any): boolean;
    vfunc_add(item: any): boolean;
    vfunc_remove(item: any): boolean;
    vfunc_clear(): void;
    vfunc_add_all(collection: Collection): boolean;
    vfunc_contains_all(collection: Collection): boolean;
    vfunc_remove_all(collection: Collection): boolean;
    vfunc_retain_all(collection: Collection): boolean;
    vfunc_to_array(): any[];
    vfunc_add_all_array(array: any[]): boolean;
    vfunc_contains_all_array(array: any[]): boolean;
    vfunc_remove_all_array(array: any[]): boolean;
    vfunc_add_all_iterator(iter: Iterator): boolean;
    vfunc_contains_all_iterator(iter: Iterator): boolean;
    vfunc_remove_all_iterator(iter: Iterator): boolean;
    vfunc_get_size(): number;
    vfunc_get_is_empty(): boolean;
    vfunc_get_read_only(): boolean;
    iterator(): Iterator;
    vfunc_iterator(): Iterator;
}
export module AbstractMap {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        size: number;
        read_only: boolean;
        readOnly: boolean;
        keys: Set;
        values: Collection;
        entries: Set;
        read_only_view: Map;
        readOnlyView: Map;
    }
}
export abstract class AbstractMap extends GObject.Object implements Traversable, Iterable, Map {
    static $gtype: GObject.GType<AbstractMap>;

    constructor(properties?: Partial<AbstractMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;
    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;
    get keys(): Set;
    get values(): Collection;
    get entries(): Set;
    get read_only_view(): Map;
    get readOnlyView(): Map;

    // Members

    has_key(key: any): boolean;
    has(key: any, value: any): boolean;
    get(key: any): any | null;
    set(key: any, value: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    unset(key: any): [boolean, any];
    map_iterator(): MapIterator;
    clear(): void;
    foreach(f: ForallFunc): boolean;
    stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_size(): number;
    get_read_only(): boolean;
    get_keys(): Set;
    get_values(): Collection;
    get_entries(): Set;
    get_read_only_view(): Map;
    vfunc_has_key(key: any): boolean;
    vfunc_has(key: any, value: any): boolean;
    vfunc_get(key: any): any | null;
    vfunc_set(key: any, value: any): void;
    vfunc_unset(key: any): [boolean, any];
    vfunc_map_iterator(): MapIterator;
    vfunc_clear(): void;
    vfunc_foreach(f: ForallFunc): boolean;
    vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_size(): number;
    vfunc_get_read_only(): boolean;
    vfunc_get_keys(): Set;
    vfunc_get_values(): Collection;
    vfunc_get_entries(): Set;
    vfunc_get_read_only_view(): Map;

    // Implemented Members

    fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
    scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
    filter(pred: Predicate): Iterator;
    chop(offset: number, length: number): Iterator;
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
    tee(forks: number): Iterator[];
    first_match(pred: Predicate): any | null;
    any_match(pred: Predicate): boolean;
    all_match(pred: Predicate): boolean;
    max(compare: GLib.CompareDataFunc): any;
    min(compare: GLib.CompareDataFunc): any;
    order_by(compare?: GLib.CompareDataFunc | null): Iterator;
    get_element_type(): GObject.GType;
    vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
    vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
    vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
    vfunc_filter(pred: Predicate): Iterator;
    vfunc_chop(offset: number, length: number): Iterator;
    vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
    vfunc_tee(forks: number): Iterator[];
    vfunc_first_match(pred: Predicate): any | null;
    vfunc_any_match(pred: Predicate): boolean;
    vfunc_all_match(pred: Predicate): boolean;
    vfunc_max(compare: GLib.CompareDataFunc): any;
    vfunc_min(compare: GLib.CompareDataFunc): any;
    vfunc_order_by(compare?: GLib.CompareDataFunc | null): Iterator;
    vfunc_get_element_type(): GObject.GType;
    iterator(): Iterator;
    vfunc_iterator(): Iterator;
    contains(key: any): boolean;
    remove(key: any): [boolean, any];
    set_all(map: Map): void;
    unset_all(map: Map): boolean;
    remove_all(map: Map): boolean;
    has_all(map: Map): boolean;
    contains_all(map: Map): boolean;
    get_is_empty(): boolean;
    get_key_type(): GObject.GType;
    get_value_type(): GObject.GType;
    vfunc_set_all(map: Map): void;
    vfunc_unset_all(map: Map): boolean;
    vfunc_has_all(map: Map): boolean;
    vfunc_get_is_empty(): boolean;
}
export module AbstractMultiMap {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
    }
}
export abstract class AbstractMultiMap extends GObject.Object implements MultiMap {
    static $gtype: GObject.GType<AbstractMultiMap>;

    constructor(properties?: Partial<AbstractMultiMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractMultiMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;

    // Implemented Properties

    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;

    // Members

    create_value_storage(): Collection;
    create_multi_key_set(): MultiSet;
    get_value_equal_func(): [EqualDataFunc, any];
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    get_read_only_view(): MultiMap;
    vfunc_create_value_storage(): Collection;
    vfunc_create_multi_key_set(): MultiSet;
    vfunc_get_value_equal_func(): [EqualDataFunc, any];
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_get_read_only_view(): MultiMap;

    // Implemented Members

    get_keys(): Set;
    get_all_keys(): MultiSet;
    get_values(): Collection;
    contains(key: any): boolean;
    get(key: any): Collection;
    set(key: any, value: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    remove(key: any, value: any): boolean;
    remove_all(key: any): boolean;
    clear(): void;
    map_iterator(): MapIterator;
    get_size(): number;
    get_read_only(): boolean;
    get_key_type(): GObject.GType;
    get_value_type(): GObject.GType;
    vfunc_get_keys(): Set;
    vfunc_get_all_keys(): MultiSet;
    vfunc_get_values(): Collection;
    vfunc_contains(key: any): boolean;
    vfunc_get(key: any): Collection;
    vfunc_set(key: any, value: any): void;
    vfunc_remove(key: any, value: any): boolean;
    vfunc_remove_all(key: any): boolean;
    vfunc_clear(): void;
    vfunc_map_iterator(): MapIterator;
    vfunc_get_size(): number;
    vfunc_get_read_only(): boolean;
}
export module AbstractMultiSet {
    export interface ConstructorProperties extends AbstractCollection.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export abstract class AbstractMultiSet extends AbstractCollection implements MultiSet {
    static $gtype: GObject.GType<AbstractMultiSet>;

    constructor(properties?: Partial<AbstractMultiSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractMultiSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Implemented Properties

    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;
    get read_only_view(): Collection;
    get readOnlyView(): Collection;

    // Members

    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    get_read_only_view(): MultiSet;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_get_read_only_view(): MultiSet;

    // Implemented Members

    count(item: any): number;
    vfunc_count(item: any): number;
    contains(item: any): boolean;
    add(item: any): boolean;
    remove(item: any): boolean;
    clear(): void;
    add_all(collection: Collection): boolean;
    contains_all(collection: Collection): boolean;
    remove_all(collection: Collection): boolean;
    retain_all(collection: Collection): boolean;
    to_array(): any[];
    add_all_array(array: any[]): boolean;
    contains_all_array(array: any[]): boolean;
    remove_all_array(array: any[]): boolean;
    add_all_iterator(iter: Iterator): boolean;
    contains_all_iterator(iter: Iterator): boolean;
    remove_all_iterator(iter: Iterator): boolean;
    get_size(): number;
    get_is_empty(): boolean;
    get_read_only(): boolean;
    vfunc_contains(item: any): boolean;
    vfunc_add(item: any): boolean;
    vfunc_remove(item: any): boolean;
    vfunc_clear(): void;
    vfunc_add_all(collection: Collection): boolean;
    vfunc_contains_all(collection: Collection): boolean;
    vfunc_remove_all(collection: Collection): boolean;
    vfunc_retain_all(collection: Collection): boolean;
    vfunc_to_array(): any[];
    vfunc_add_all_array(array: any[]): boolean;
    vfunc_contains_all_array(array: any[]): boolean;
    vfunc_remove_all_array(array: any[]): boolean;
    vfunc_add_all_iterator(iter: Iterator): boolean;
    vfunc_contains_all_iterator(iter: Iterator): boolean;
    vfunc_remove_all_iterator(iter: Iterator): boolean;
    vfunc_get_size(): number;
    vfunc_get_is_empty(): boolean;
    vfunc_get_read_only(): boolean;
    iterator(): Iterator;
    vfunc_iterator(): Iterator;
}
export module AbstractQueue {
    export interface ConstructorProperties extends AbstractCollection.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        capacity: number;
        remaining_capacity: number;
        remainingCapacity: number;
        is_full: boolean;
        isFull: boolean;
    }
}
export abstract class AbstractQueue extends AbstractCollection implements Queue {
    static $gtype: GObject.GType<AbstractQueue>;

    constructor(properties?: Partial<AbstractQueue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractQueue.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get capacity(): number;
    get remaining_capacity(): number;
    get remainingCapacity(): number;
    get is_full(): boolean;
    get isFull(): boolean;

    // Implemented Properties

    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;
    get read_only_view(): Collection;
    get readOnlyView(): Collection;

    // Members

    peek(): any | null;
    poll(): any | null;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_capacity(): number;
    get_remaining_capacity(): number;
    get_is_full(): boolean;
    vfunc_peek(): any | null;
    vfunc_poll(): any | null;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_capacity(): number;
    vfunc_get_remaining_capacity(): number;
    vfunc_get_is_full(): boolean;

    // Implemented Members

    offer(element: any): boolean;
    drain(recipient: Collection, amount: number): number;
    vfunc_offer(element: any): boolean;
    vfunc_drain(recipient: Collection, amount: number): number;
    contains(item: any): boolean;
    add(item: any): boolean;
    remove(item: any): boolean;
    clear(): void;
    add_all(collection: Collection): boolean;
    contains_all(collection: Collection): boolean;
    remove_all(collection: Collection): boolean;
    retain_all(collection: Collection): boolean;
    to_array(): any[];
    add_all_array(array: any[]): boolean;
    contains_all_array(array: any[]): boolean;
    remove_all_array(array: any[]): boolean;
    add_all_iterator(iter: Iterator): boolean;
    contains_all_iterator(iter: Iterator): boolean;
    remove_all_iterator(iter: Iterator): boolean;
    get_size(): number;
    get_is_empty(): boolean;
    get_read_only(): boolean;
    get_read_only_view(): Collection;
    vfunc_contains(item: any): boolean;
    vfunc_add(item: any): boolean;
    vfunc_remove(item: any): boolean;
    vfunc_clear(): void;
    vfunc_add_all(collection: Collection): boolean;
    vfunc_contains_all(collection: Collection): boolean;
    vfunc_remove_all(collection: Collection): boolean;
    vfunc_retain_all(collection: Collection): boolean;
    vfunc_to_array(): any[];
    vfunc_add_all_array(array: any[]): boolean;
    vfunc_contains_all_array(array: any[]): boolean;
    vfunc_remove_all_array(array: any[]): boolean;
    vfunc_add_all_iterator(iter: Iterator): boolean;
    vfunc_contains_all_iterator(iter: Iterator): boolean;
    vfunc_remove_all_iterator(iter: Iterator): boolean;
    vfunc_get_size(): number;
    vfunc_get_is_empty(): boolean;
    vfunc_get_read_only(): boolean;
    vfunc_get_read_only_view(): Collection;
    iterator(): Iterator;
    vfunc_iterator(): Iterator;
}
export module AbstractSet {
    export interface ConstructorProperties extends AbstractCollection.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        read_only_view: Set;
        readOnlyView: Set;
    }
}
export abstract class AbstractSet extends AbstractCollection implements Set {
    static $gtype: GObject.GType<AbstractSet>;

    constructor(properties?: Partial<AbstractSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get read_only_view(): Set;
    get readOnlyView(): Set;

    // Implemented Properties

    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;

    // Members

    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_read_only_view(): Set;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_read_only_view(): Set;

    // Implemented Members

    contains(item: any): boolean;
    add(item: any): boolean;
    remove(item: any): boolean;
    clear(): void;
    add_all(collection: Collection): boolean;
    contains_all(collection: Collection): boolean;
    remove_all(collection: Collection): boolean;
    retain_all(collection: Collection): boolean;
    to_array(): any[];
    add_all_array(array: any[]): boolean;
    contains_all_array(array: any[]): boolean;
    remove_all_array(array: any[]): boolean;
    add_all_iterator(iter: Iterator): boolean;
    contains_all_iterator(iter: Iterator): boolean;
    remove_all_iterator(iter: Iterator): boolean;
    get_size(): number;
    get_is_empty(): boolean;
    get_read_only(): boolean;
    vfunc_contains(item: any): boolean;
    vfunc_add(item: any): boolean;
    vfunc_remove(item: any): boolean;
    vfunc_clear(): void;
    vfunc_add_all(collection: Collection): boolean;
    vfunc_contains_all(collection: Collection): boolean;
    vfunc_remove_all(collection: Collection): boolean;
    vfunc_retain_all(collection: Collection): boolean;
    vfunc_to_array(): any[];
    vfunc_add_all_array(array: any[]): boolean;
    vfunc_contains_all_array(array: any[]): boolean;
    vfunc_remove_all_array(array: any[]): boolean;
    vfunc_add_all_iterator(iter: Iterator): boolean;
    vfunc_contains_all_iterator(iter: Iterator): boolean;
    vfunc_remove_all_iterator(iter: Iterator): boolean;
    vfunc_get_size(): number;
    vfunc_get_is_empty(): boolean;
    vfunc_get_read_only(): boolean;
    iterator(): Iterator;
    vfunc_iterator(): Iterator;
}
export module AbstractSortedMap {
    export interface ConstructorProperties extends AbstractMap.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        ascending_keys: SortedSet;
        ascendingKeys: SortedSet;
        ascending_entries: SortedSet;
        ascendingEntries: SortedSet;
    }
}
export abstract class AbstractSortedMap extends AbstractMap implements SortedMap {
    static $gtype: GObject.GType<AbstractSortedMap>;

    constructor(properties?: Partial<AbstractSortedMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractSortedMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;
    get ascending_keys(): SortedSet;
    get ascendingKeys(): SortedSet;
    get ascending_entries(): SortedSet;
    get ascendingEntries(): SortedSet;

    // Implemented Properties

    get read_only_view(): SortedMap;
    get readOnlyView(): SortedMap;
    get size(): number;
    get read_only(): boolean;
    get readOnly(): boolean;
    get keys(): Set;
    get values(): Collection;
    get entries(): Set;

    // Members

    head_map(before: any): SortedMap;
    tail_map(after: any): SortedMap;
    sub_map(before: any, after: any): SortedMap;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_ascending_keys(): SortedSet;
    get_ascending_entries(): SortedSet;
    vfunc_head_map(before: any): SortedMap;
    vfunc_tail_map(after: any): SortedMap;
    vfunc_sub_map(before: any, after: any): SortedMap;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_ascending_keys(): SortedSet;
    vfunc_get_ascending_entries(): SortedSet;

    // Implemented Members

    get_read_only_view(): SortedMap;
    vfunc_get_read_only_view(): SortedMap;
    has_key(key: any): boolean;
    contains(key: any): boolean;
    has(key: any, value: any): boolean;
    get(key: any): any | null;
    set(key: any, value: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    unset(key: any): [boolean, any];
    remove(key: any): [boolean, any];
    clear(): void;
    map_iterator(): MapIterator;
    set_all(map: Map): void;
    unset_all(map: Map): boolean;
    remove_all(map: Map): boolean;
    has_all(map: Map): boolean;
    contains_all(map: Map): boolean;
    get_size(): number;
    get_is_empty(): boolean;
    get_read_only(): boolean;
    get_keys(): Set;
    get_values(): Collection;
    get_entries(): Set;
    get_key_type(): GObject.GType;
    get_value_type(): GObject.GType;
    vfunc_has_key(key: any): boolean;
    vfunc_has(key: any, value: any): boolean;
    vfunc_get(key: any): any | null;
    vfunc_set(key: any, value: any): void;
    vfunc_unset(key: any): [boolean, any];
    vfunc_clear(): void;
    vfunc_map_iterator(): MapIterator;
    vfunc_set_all(map: Map): void;
    vfunc_unset_all(map: Map): boolean;
    vfunc_has_all(map: Map): boolean;
    vfunc_get_size(): number;
    vfunc_get_is_empty(): boolean;
    vfunc_get_read_only(): boolean;
    vfunc_get_keys(): Set;
    vfunc_get_values(): Collection;
    vfunc_get_entries(): Set;
}
export module AbstractSortedSet {
    export interface ConstructorProperties extends AbstractSet.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        read_only_view: SortedSet;
        readOnlyView: SortedSet;
    }
}
export abstract class AbstractSortedSet extends AbstractSet implements SortedSet {
    static $gtype: GObject.GType<AbstractSortedSet>;

    constructor(properties?: Partial<AbstractSortedSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AbstractSortedSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get read_only_view(): SortedSet;
    get readOnlyView(): SortedSet;

    // Members

    first(): any;
    last(): any;
    iterator_at(element: any): Iterator | null;
    lower(element: any): any | null;
    higher(element: any): any | null;
    floor(element: any): any | null;
    ceil(element: any): any | null;
    head_set(before: any): SortedSet;
    tail_set(after: any): SortedSet;
    sub_set(from: any, to: any): SortedSet;
    reserved0(): void;
    reserved1(): void;
    reserved2(): void;
    reserved3(): void;
    reserved4(): void;
    reserved5(): void;
    reserved6(): void;
    reserved7(): void;
    reserved8(): void;
    reserved9(): void;
    get_read_only_view(): SortedSet;
    vfunc_first(): any;
    vfunc_last(): any;
    vfunc_iterator_at(element: any): Iterator | null;
    vfunc_lower(element: any): any | null;
    vfunc_higher(element: any): any | null;
    vfunc_floor(element: any): any | null;
    vfunc_ceil(element: any): any | null;
    vfunc_head_set(before: any): SortedSet;
    vfunc_tail_set(after: any): SortedSet;
    vfunc_sub_set(from: any, to: any): SortedSet;
    vfunc_reserved0(): void;
    vfunc_reserved1(): void;
    vfunc_reserved2(): void;
    vfunc_reserved3(): void;
    vfunc_reserved4(): void;
    vfunc_reserved5(): void;
    vfunc_reserved6(): void;
    vfunc_reserved7(): void;
    vfunc_reserved8(): void;
    vfunc_reserved9(): void;
    vfunc_get_read_only_view(): SortedSet;
}
export module ArrayList {
    export interface ConstructorProperties extends AbstractBidirList.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class ArrayList extends AbstractBidirList {
    static $gtype: GObject.GType<ArrayList>;

    constructor(properties?: Partial<ArrayList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ArrayList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        equal_func?: EqualDataFunc | null
    ): ArrayList;
    static wrap(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        items: any[],
        equal_func?: EqualDataFunc | null
    ): ArrayList;

    // Members

    add_all(collection: Collection): boolean;
    get_equal_func(): [EqualDataFunc, any];
}
export module ArrayQueue {
    export interface ConstructorProperties extends AbstractQueue.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        is_empty: boolean;
        isEmpty: boolean;
    }
}
export class ArrayQueue extends AbstractQueue implements Deque {
    static $gtype: GObject.GType<ArrayQueue>;

    constructor(properties?: Partial<ArrayQueue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ArrayQueue.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get is_empty(): boolean;
    get isEmpty(): boolean;

    // Implemented Properties

    get capacity(): number;
    get remaining_capacity(): number;
    get remainingCapacity(): number;
    get is_full(): boolean;
    get isFull(): boolean;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        equal_func?: EqualDataFunc | null
    ): ArrayQueue;

    // Members

    get_equal_func(): [EqualDataFunc, any];
    get_is_empty(): boolean;

    // Implemented Members

    offer_head(element: any): boolean;
    peek_head(): any | null;
    poll_head(): any | null;
    drain_head(recipient: Collection, amount: number): number;
    offer_tail(element: any): boolean;
    peek_tail(): any | null;
    poll_tail(): any | null;
    drain_tail(recipient: Collection, amount: number): number;
    vfunc_offer_head(element: any): boolean;
    vfunc_peek_head(): any | null;
    vfunc_poll_head(): any | null;
    vfunc_drain_head(recipient: Collection, amount: number): number;
    vfunc_offer_tail(element: any): boolean;
    vfunc_peek_tail(): any | null;
    vfunc_poll_tail(): any | null;
    vfunc_drain_tail(recipient: Collection, amount: number): number;
    offer(element: any): boolean;
    peek(): any | null;
    poll(): any | null;
    drain(recipient: Collection, amount: number): number;
    get_capacity(): number;
    get_remaining_capacity(): number;
    get_is_full(): boolean;
    vfunc_offer(element: any): boolean;
    vfunc_peek(): any | null;
    vfunc_poll(): any | null;
    vfunc_drain(recipient: Collection, amount: number): number;
    vfunc_get_capacity(): number;
    vfunc_get_remaining_capacity(): number;
    vfunc_get_is_full(): boolean;
}
export module ConcurrentList {
    export interface ConstructorProperties extends AbstractList.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        is_empty: boolean;
        isEmpty: boolean;
    }
}
export class ConcurrentList extends AbstractList {
    static $gtype: GObject.GType<ConcurrentList>;

    constructor(properties?: Partial<ConcurrentList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ConcurrentList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;
    get is_empty(): boolean;
    get isEmpty(): boolean;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        equal_func?: EqualDataFunc | null
    ): ConcurrentList;

    // Members

    get_equal_func(): [EqualDataFunc, any];
    get_is_empty(): boolean;
}
export module ConcurrentSet {
    export interface ConstructorProperties extends AbstractSortedSet.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class ConcurrentSet extends AbstractSortedSet {
    static $gtype: GObject.GType<ConcurrentSet>;

    constructor(properties?: Partial<ConcurrentSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ConcurrentSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare_func?: GLib.CompareDataFunc | null
    ): ConcurrentSet;
}
export module HashMap {
    export interface ConstructorProperties extends AbstractMap.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
    }
}
export class HashMap extends AbstractMap {
    static $gtype: GObject.GType<HashMap>;

    constructor(properties?: Partial<HashMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HashMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        key_hash_func?: HashDataFunc | null,
        key_equal_func?: EqualDataFunc | null,
        value_equal_func?: EqualDataFunc | null
    ): HashMap;

    // Members

    get_key_hash_func(): [HashDataFunc, any];
    get_key_equal_func(): [EqualDataFunc, any];
    get_value_equal_func(): [EqualDataFunc, any];
}
export module HashMultiMap {
    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
    }
}
export class HashMultiMap extends AbstractMultiMap {
    static $gtype: GObject.GType<HashMultiMap>;

    constructor(properties?: Partial<HashMultiMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HashMultiMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        key_hash_func?: HashDataFunc | null,
        key_equal_func?: EqualDataFunc | null,
        value_hash_func?: HashDataFunc | null,
        value_equal_func?: EqualDataFunc | null
    ): HashMultiMap;

    // Members

    get_key_hash_func(): [HashDataFunc, any];
    get_key_equal_func(): [EqualDataFunc, any];
    get_value_hash_func(): [HashDataFunc, any];
    get_value_equal_func(): [EqualDataFunc, any];
}
export module HashMultiSet {
    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class HashMultiSet extends AbstractMultiSet {
    static $gtype: GObject.GType<HashMultiSet>;

    constructor(properties?: Partial<HashMultiSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HashMultiSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        hash_func?: HashDataFunc | null,
        equal_func?: EqualDataFunc | null
    ): HashMultiSet;
    static broken(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        hash_func?: HashDataFunc | null,
        equal_func?: EqualDataFunc | null
    ): HashMultiSet;

    // Members

    get_hash_func(): [HashDataFunc, any];
    get_equal_func(): [EqualDataFunc, any];
}
export module HashSet {
    export interface ConstructorProperties extends AbstractSet.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class HashSet extends AbstractSet {
    static $gtype: GObject.GType<HashSet>;

    constructor(properties?: Partial<HashSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HashSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        hash_func?: HashDataFunc | null,
        equal_func?: EqualDataFunc | null
    ): HashSet;

    // Members

    get_hash_func(): [HashDataFunc, any];
    get_equal_func(): [EqualDataFunc, any];
}
export module Lazy {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Lazy {
    static $gtype: GObject.GType<Lazy>;

    constructor(properties?: Partial<Lazy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Lazy.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: LazyFunc): Lazy;
    static from_value(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, item: any): Lazy;

    // Members

    ["eval"](): void;
    get(): any;
    get_value(): any;
    get_future(): Future | null;
}
export module LinkedList {
    export interface ConstructorProperties extends AbstractBidirList.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class LinkedList extends AbstractBidirList implements Queue, Deque {
    static $gtype: GObject.GType<LinkedList>;

    constructor(properties?: Partial<LinkedList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LinkedList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Implemented Properties

    get capacity(): number;
    get remaining_capacity(): number;
    get remainingCapacity(): number;
    get is_full(): boolean;
    get isFull(): boolean;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        equal_func?: EqualDataFunc | null
    ): LinkedList;

    // Members

    first(): any;
    last(): any;
    get_equal_func(): [EqualDataFunc, any];

    // Implemented Members

    offer(element: any): boolean;
    peek(): any | null;
    poll(): any | null;
    drain(recipient: Collection, amount: number): number;
    get_capacity(): number;
    get_remaining_capacity(): number;
    get_is_full(): boolean;
    vfunc_offer(element: any): boolean;
    vfunc_peek(): any | null;
    vfunc_poll(): any | null;
    vfunc_drain(recipient: Collection, amount: number): number;
    vfunc_get_capacity(): number;
    vfunc_get_remaining_capacity(): number;
    vfunc_get_is_full(): boolean;
    offer_head(element: any): boolean;
    peek_head(): any | null;
    poll_head(): any | null;
    drain_head(recipient: Collection, amount: number): number;
    offer_tail(element: any): boolean;
    peek_tail(): any | null;
    poll_tail(): any | null;
    drain_tail(recipient: Collection, amount: number): number;
    vfunc_offer_head(element: any): boolean;
    vfunc_peek_head(): any | null;
    vfunc_poll_head(): any | null;
    vfunc_drain_head(recipient: Collection, amount: number): number;
    vfunc_offer_tail(element: any): boolean;
    vfunc_peek_tail(): any | null;
    vfunc_poll_tail(): any | null;
    vfunc_drain_tail(recipient: Collection, amount: number): number;
}
export module PriorityQueue {
    export interface ConstructorProperties extends AbstractQueue.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class PriorityQueue extends AbstractQueue {
    static $gtype: GObject.GType<PriorityQueue>;

    constructor(properties?: Partial<PriorityQueue.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PriorityQueue.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare_func?: GLib.CompareDataFunc | null
    ): PriorityQueue;

    // Members

    offer(element: any): boolean;
    drain(recipient: Collection, amount: number): number;
    get_compare_func(): [GLib.CompareDataFunc, any];
}
export module Promise {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Promise {
    static $gtype: GObject.GType<Promise>;

    constructor(properties?: Partial<Promise.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Promise.ConstructorProperties>, ...args: any[]): void;

    // Fields
    ref_count: number;

    // Constructors

    static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Promise;

    // Members

    set_value(value: any): void;
    set_exception(exception: GLib.Error): void;
    get_future(): Future;
}
export module TreeMap {
    export interface ConstructorProperties extends AbstractBidirSortedMap.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
    }
}
export class TreeMap extends AbstractBidirSortedMap {
    static $gtype: GObject.GType<TreeMap>;

    constructor(properties?: Partial<TreeMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        key_compare_func?: GLib.CompareDataFunc | null,
        value_equal_func?: EqualDataFunc | null
    ): TreeMap;

    // Members

    get_key_compare_func(): [GLib.CompareDataFunc, any];
    get_value_equal_func(): [EqualDataFunc, any];
}
export module TreeMultiMap {
    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
    }
}
export class TreeMultiMap extends AbstractMultiMap {
    static $gtype: GObject.GType<TreeMultiMap>;

    constructor(properties?: Partial<TreeMultiMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeMultiMap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        key_compare_func?: GLib.CompareDataFunc | null,
        value_compare_func?: GLib.CompareDataFunc | null
    ): TreeMultiMap;

    // Members

    get_key_compare_func(): [GLib.CompareDataFunc, any];
    get_value_compare_func(): [GLib.CompareDataFunc, any];
}
export module TreeMultiSet {
    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class TreeMultiSet extends AbstractMultiSet {
    static $gtype: GObject.GType<TreeMultiSet>;

    constructor(properties?: Partial<TreeMultiSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeMultiSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare_func?: GLib.CompareDataFunc | null
    ): TreeMultiSet;

    // Members

    get_compare_func(): [GLib.CompareDataFunc, any];
}
export module TreeSet {
    export interface ConstructorProperties extends AbstractBidirSortedSet.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class TreeSet extends AbstractBidirSortedSet {
    static $gtype: GObject.GType<TreeSet>;

    constructor(properties?: Partial<TreeSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare_func?: GLib.CompareDataFunc | null
    ): TreeSet;

    // Members

    get_compare_func(): [GLib.CompareDataFunc, any];
}
export module UnrolledLinkedList {
    export interface ConstructorProperties extends AbstractBidirList.ConstructorProperties {
        [key: string]: any;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
    }
}
export class UnrolledLinkedList extends AbstractBidirList implements Queue, Deque {
    static $gtype: GObject.GType<UnrolledLinkedList>;

    constructor(properties?: Partial<UnrolledLinkedList.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UnrolledLinkedList.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get g_type(): GObject.GType;
    get gType(): GObject.GType;
    get g_dup_func(): GObject.BoxedCopyFunc;
    get gDupFunc(): GObject.BoxedCopyFunc;
    get g_destroy_func(): GLib.DestroyNotify;
    get gDestroyFunc(): GLib.DestroyNotify;

    // Implemented Properties

    get capacity(): number;
    get remaining_capacity(): number;
    get remainingCapacity(): number;
    get is_full(): boolean;
    get isFull(): boolean;

    // Constructors

    static ["new"](
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        equal_func?: EqualDataFunc | null
    ): UnrolledLinkedList;

    // Members

    get_equal_func(): [EqualDataFunc, any];

    // Implemented Members

    offer(element: any): boolean;
    peek(): any | null;
    poll(): any | null;
    drain(recipient: Collection, amount: number): number;
    get_capacity(): number;
    get_remaining_capacity(): number;
    get_is_full(): boolean;
    vfunc_offer(element: any): boolean;
    vfunc_peek(): any | null;
    vfunc_poll(): any | null;
    vfunc_drain(recipient: Collection, amount: number): number;
    vfunc_get_capacity(): number;
    vfunc_get_remaining_capacity(): number;
    vfunc_get_is_full(): boolean;
    offer_head(element: any): boolean;
    peek_head(): any | null;
    poll_head(): any | null;
    drain_head(recipient: Collection, amount: number): number;
    offer_tail(element: any): boolean;
    peek_tail(): any | null;
    poll_tail(): any | null;
    drain_tail(recipient: Collection, amount: number): number;
    vfunc_offer_head(element: any): boolean;
    vfunc_peek_head(): any | null;
    vfunc_poll_head(): any | null;
    vfunc_drain_head(recipient: Collection, amount: number): number;
    vfunc_offer_tail(element: any): boolean;
    vfunc_peek_tail(): any | null;
    vfunc_poll_tail(): any | null;
    vfunc_drain_tail(recipient: Collection, amount: number): number;
}
export module MapEntry {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        key: any;
        value: any;
        read_only: boolean;
        readOnly: boolean;
    }
}
export abstract class MapEntry extends GObject.Object {
    static $gtype: GObject.GType<MapEntry>;

    constructor(properties?: Partial<MapEntry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MapEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get k_type(): GObject.GType;
    get kType(): GObject.GType;
    get k_dup_func(): GObject.BoxedCopyFunc;
    get kDupFunc(): GObject.BoxedCopyFunc;
    get k_destroy_func(): GLib.DestroyNotify;
    get kDestroyFunc(): GLib.DestroyNotify;
    get v_type(): GObject.GType;
    get vType(): GObject.GType;
    get v_dup_func(): GObject.BoxedCopyFunc;
    get vDupFunc(): GObject.BoxedCopyFunc;
    get v_destroy_func(): GLib.DestroyNotify;
    get vDestroyFunc(): GLib.DestroyNotify;
    get key(): any;
    get value(): any;
    set value(val: any);
    get read_only(): boolean;
    get readOnly(): boolean;

    // Members

    get_key(): any;
    get_value(): any;
    set_value(value: any): void;
    get_read_only(): boolean;
    vfunc_get_key(): any;
    vfunc_get_value(): any;
    vfunc_set_value(value: any): void;
    vfunc_get_read_only(): boolean;
}

export class AbstractBidirListPrivate {
    static $gtype: GObject.GType<AbstractBidirListPrivate>;

    constructor(copy: AbstractBidirListPrivate);
}

export class AbstractBidirSortedSetPrivate {
    static $gtype: GObject.GType<AbstractBidirSortedSetPrivate>;

    constructor(copy: AbstractBidirSortedSetPrivate);
}

export class AbstractBidirSortedMapPrivate {
    static $gtype: GObject.GType<AbstractBidirSortedMapPrivate>;

    constructor(copy: AbstractBidirSortedMapPrivate);
}

export class AbstractCollectionPrivate {
    static $gtype: GObject.GType<AbstractCollectionPrivate>;

    constructor(copy: AbstractCollectionPrivate);
}

export class AbstractListPrivate {
    static $gtype: GObject.GType<AbstractListPrivate>;

    constructor(copy: AbstractListPrivate);
}

export class AbstractMapPrivate {
    static $gtype: GObject.GType<AbstractMapPrivate>;

    constructor(copy: AbstractMapPrivate);
}

export class AbstractMultiMapPrivate {
    static $gtype: GObject.GType<AbstractMultiMapPrivate>;

    constructor(copy: AbstractMultiMapPrivate);
}

export class AbstractMultiSetPrivate {
    static $gtype: GObject.GType<AbstractMultiSetPrivate>;

    constructor(copy: AbstractMultiSetPrivate);
}

export class AbstractQueuePrivate {
    static $gtype: GObject.GType<AbstractQueuePrivate>;

    constructor(copy: AbstractQueuePrivate);
}

export class AbstractSetPrivate {
    static $gtype: GObject.GType<AbstractSetPrivate>;

    constructor(copy: AbstractSetPrivate);
}

export class AbstractSortedMapPrivate {
    static $gtype: GObject.GType<AbstractSortedMapPrivate>;

    constructor(copy: AbstractSortedMapPrivate);
}

export class AbstractSortedSetPrivate {
    static $gtype: GObject.GType<AbstractSortedSetPrivate>;

    constructor(copy: AbstractSortedSetPrivate);
}

export class ArrayListPrivate {
    static $gtype: GObject.GType<ArrayListPrivate>;

    constructor(copy: ArrayListPrivate);
}

export class ArrayQueuePrivate {
    static $gtype: GObject.GType<ArrayQueuePrivate>;

    constructor(copy: ArrayQueuePrivate);
}

export class ConcurrentListPrivate {
    static $gtype: GObject.GType<ConcurrentListPrivate>;

    constructor(copy: ConcurrentListPrivate);
}

export class ConcurrentSetPrivate {
    static $gtype: GObject.GType<ConcurrentSetPrivate>;

    constructor(copy: ConcurrentSetPrivate);
}

export class HashMapPrivate {
    static $gtype: GObject.GType<HashMapPrivate>;

    constructor(copy: HashMapPrivate);
}

export class HashMultiMapPrivate {
    static $gtype: GObject.GType<HashMultiMapPrivate>;

    constructor(copy: HashMultiMapPrivate);
}

export class HashMultiSetPrivate {
    static $gtype: GObject.GType<HashMultiSetPrivate>;

    constructor(copy: HashMultiSetPrivate);
}

export class HashSetPrivate {
    static $gtype: GObject.GType<HashSetPrivate>;

    constructor(copy: HashSetPrivate);
}

export class HazardPointer {
    static $gtype: GObject.GType<HazardPointer>;

    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr?: any | null);
    constructor(copy: HazardPointer);

    // Constructors
    static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr?: any | null): HazardPointer;

    // Members
    get(other_thread: boolean): any;
    release(): void;
    static get_hazard_pointer(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        aptr: any | null,
        mask: number
    ): [HazardPointer | null, number];
    static get_pointer(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        aptr: any | null,
        mask: number
    ): [any | null, number];
    static exchange_hazard_pointer(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        aptr: any | null,
        new_ptr: any | null,
        mask: number,
        new_mask: number
    ): [HazardPointer | null, number];
    static set_pointer(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        aptr: any | null,
        new_ptr: any | null,
        mask: number,
        new_mask: number
    ): void;
    static exchange_pointer(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        aptr: any | null,
        new_ptr: any | null,
        mask: number,
        new_mask: number
    ): [any | null, number];
    static compare_and_exchange_pointer(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        aptr: any | null,
        old_ptr: any | null,
        _new_ptr: any | null,
        mask: number,
        old_mask: number,
        new_mask: number
    ): boolean;
    static set_default_policy(policy: HazardPointerPolicy): void;
    static set_thread_exit_policy(policy: HazardPointerPolicy): void;
    static set_release_policy(policy: HazardPointerReleasePolicy): boolean;
}

export class HazardPointerContext {
    static $gtype: GObject.GType<HazardPointerContext>;

    constructor(policy?: HazardPointerPolicy | null);
    constructor(copy: HazardPointerContext);

    // Constructors
    static ["new"](policy?: HazardPointerPolicy | null): HazardPointerContext;

    // Members
    try_free(): void;
    free_all(): void;
    try_release(): void;
    release(): void;
}

export class LazyPrivate {
    static $gtype: GObject.GType<LazyPrivate>;

    constructor(copy: LazyPrivate);
}

export class LinkedListPrivate {
    static $gtype: GObject.GType<LinkedListPrivate>;

    constructor(copy: LinkedListPrivate);
}

export class PriorityQueuePrivate {
    static $gtype: GObject.GType<PriorityQueuePrivate>;

    constructor(copy: PriorityQueuePrivate);
}

export class PromisePrivate {
    static $gtype: GObject.GType<PromisePrivate>;

    constructor(copy: PromisePrivate);
}

export class TreeMapPrivate {
    static $gtype: GObject.GType<TreeMapPrivate>;

    constructor(copy: TreeMapPrivate);
}

export class TreeMultiMapPrivate {
    static $gtype: GObject.GType<TreeMultiMapPrivate>;

    constructor(copy: TreeMultiMapPrivate);
}

export class TreeMultiSetPrivate {
    static $gtype: GObject.GType<TreeMultiSetPrivate>;

    constructor(copy: TreeMultiSetPrivate);
}

export class TreeSetPrivate {
    static $gtype: GObject.GType<TreeSetPrivate>;

    constructor(copy: TreeSetPrivate);
}

export class UnrolledLinkedListPrivate {
    static $gtype: GObject.GType<UnrolledLinkedListPrivate>;

    constructor(copy: UnrolledLinkedListPrivate);
}

export class MapEntryPrivate {
    static $gtype: GObject.GType<MapEntryPrivate>;

    constructor(copy: MapEntryPrivate);
}

export interface BidirIteratorNamespace {
    $gtype: GObject.GType<BidirIterator>;
    prototype: BidirIteratorPrototype;
}
export type BidirIterator = BidirIteratorPrototype;
export interface BidirIteratorPrototype extends Iterator {
    // Members

    previous(): boolean;
    has_previous(): boolean;
    first(): boolean;
    last(): boolean;
    vfunc_previous(): boolean;
    vfunc_has_previous(): boolean;
    vfunc_first(): boolean;
    vfunc_last(): boolean;
}

export const BidirIterator: BidirIteratorNamespace;

export interface BidirListNamespace {
    $gtype: GObject.GType<BidirList>;
    prototype: BidirListPrototype;
}
export type BidirList = BidirListPrototype;
export interface BidirListPrototype extends List {
    // Properties
    readonly read_only_view: BidirList;
    readonly readOnlyView: BidirList;

    // Members

    bidir_list_iterator(): BidirListIterator;
    get_read_only_view(): BidirList;
    vfunc_bidir_list_iterator(): BidirListIterator;
    vfunc_get_read_only_view(): BidirList;
}

export const BidirList: BidirListNamespace;

export interface BidirListIteratorNamespace {
    $gtype: GObject.GType<BidirListIterator>;
    prototype: BidirListIteratorPrototype;
}
export type BidirListIterator = BidirListIteratorPrototype;
export interface BidirListIteratorPrototype extends BidirIterator {
    // Members

    insert(item: any): void;
    vfunc_insert(item: any): void;
}

export const BidirListIterator: BidirListIteratorNamespace;

export interface BidirMapIteratorNamespace {
    $gtype: GObject.GType<BidirMapIterator>;
    prototype: BidirMapIteratorPrototype;
}
export type BidirMapIterator = BidirMapIteratorPrototype;
export interface BidirMapIteratorPrototype extends MapIterator {
    // Members

    previous(): boolean;
    has_previous(): boolean;
    first(): boolean;
    last(): boolean;
    vfunc_previous(): boolean;
    vfunc_has_previous(): boolean;
    vfunc_first(): boolean;
    vfunc_last(): boolean;
}

export const BidirMapIterator: BidirMapIteratorNamespace;

export interface BidirSortedSetNamespace {
    $gtype: GObject.GType<BidirSortedSet>;
    prototype: BidirSortedSetPrototype;

    empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): BidirSortedSet;
}
export type BidirSortedSet = BidirSortedSetPrototype;
export interface BidirSortedSetPrototype extends SortedSet {
    // Properties
    readonly read_only_view: BidirSortedSet;
    readonly readOnlyView: BidirSortedSet;

    // Members

    bidir_iterator(): BidirIterator;
    get_read_only_view(): BidirSortedSet;
    vfunc_bidir_iterator(): BidirIterator;
    vfunc_get_read_only_view(): BidirSortedSet;
}

export const BidirSortedSet: BidirSortedSetNamespace;

export interface BidirSortedMapNamespace {
    $gtype: GObject.GType<BidirSortedMap>;
    prototype: BidirSortedMapPrototype;

    empty(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc
    ): BidirSortedMap;
}
export type BidirSortedMap = BidirSortedMapPrototype;
export interface BidirSortedMapPrototype extends SortedMap {
    // Properties
    readonly read_only_view: BidirSortedMap;
    readonly readOnlyView: BidirSortedMap;

    // Members

    bidir_map_iterator(): BidirMapIterator;
    get_read_only_view(): BidirSortedMap;
    vfunc_bidir_map_iterator(): BidirMapIterator;
    vfunc_get_read_only_view(): BidirSortedMap;
}

export const BidirSortedMap: BidirSortedMapNamespace;

export interface CollectionNamespace {
    $gtype: GObject.GType<Collection>;
    prototype: CollectionPrototype;

    empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collection;
}
export type Collection = CollectionPrototype;
export interface CollectionPrototype extends Iterable {
    // Properties
    readonly size: number;
    readonly read_only: boolean;
    readonly readOnly: boolean;
    readonly read_only_view: Collection;
    readonly readOnlyView: Collection;

    // Members

    contains(item: any): boolean;
    add(item: any): boolean;
    remove(item: any): boolean;
    clear(): void;
    add_all(collection: Collection): boolean;
    contains_all(collection: Collection): boolean;
    remove_all(collection: Collection): boolean;
    retain_all(collection: Collection): boolean;
    to_array(): any[];
    add_all_array(array: any[]): boolean;
    contains_all_array(array: any[]): boolean;
    remove_all_array(array: any[]): boolean;
    add_all_iterator(iter: Iterator): boolean;
    contains_all_iterator(iter: Iterator): boolean;
    remove_all_iterator(iter: Iterator): boolean;
    get_size(): number;
    get_is_empty(): boolean;
    get_read_only(): boolean;
    get_read_only_view(): Collection;
    vfunc_contains(item: any): boolean;
    vfunc_add(item: any): boolean;
    vfunc_remove(item: any): boolean;
    vfunc_clear(): void;
    vfunc_add_all(collection: Collection): boolean;
    vfunc_contains_all(collection: Collection): boolean;
    vfunc_remove_all(collection: Collection): boolean;
    vfunc_retain_all(collection: Collection): boolean;
    vfunc_to_array(): any[];
    vfunc_add_all_array(array: any[]): boolean;
    vfunc_contains_all_array(array: any[]): boolean;
    vfunc_remove_all_array(array: any[]): boolean;
    vfunc_add_all_iterator(iter: Iterator): boolean;
    vfunc_contains_all_iterator(iter: Iterator): boolean;
    vfunc_remove_all_iterator(iter: Iterator): boolean;
    vfunc_get_size(): number;
    vfunc_get_is_empty(): boolean;
    vfunc_get_read_only(): boolean;
    vfunc_get_read_only_view(): Collection;
}

export const Collection: CollectionNamespace;

export interface ComparableNamespace {
    $gtype: GObject.GType<Comparable>;
    prototype: ComparablePrototype;
}
export type Comparable = ComparablePrototype;
export interface ComparablePrototype extends GObject.Object {
    // Members

    compare_to(object: any): number;
    vfunc_compare_to(object: any): number;
}

export const Comparable: ComparableNamespace;

export interface DequeNamespace {
    $gtype: GObject.GType<Deque>;
    prototype: DequePrototype;
}
export type Deque = DequePrototype;
export interface DequePrototype extends Queue {
    // Members

    offer_head(element: any): boolean;
    peek_head(): any | null;
    poll_head(): any | null;
    drain_head(recipient: Collection, amount: number): number;
    offer_tail(element: any): boolean;
    peek_tail(): any | null;
    poll_tail(): any | null;
    drain_tail(recipient: Collection, amount: number): number;
    vfunc_offer_head(element: any): boolean;
    vfunc_peek_head(): any | null;
    vfunc_poll_head(): any | null;
    vfunc_drain_head(recipient: Collection, amount: number): number;
    vfunc_offer_tail(element: any): boolean;
    vfunc_peek_tail(): any | null;
    vfunc_poll_tail(): any | null;
    vfunc_drain_tail(recipient: Collection, amount: number): number;
}

export const Deque: DequeNamespace;

export module Future {
    export type MapFunc = (
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        value: any
    ) => any;
    export type LightMapFunc = (
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        value: any
    ) => any;
    export type ZipFunc = (
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        b_type: GObject.GType,
        b_dup_func: GObject.BoxedCopyFunc,
        c_type: GObject.GType,
        c_dup_func: GObject.BoxedCopyFunc,
        a: any,
        b: any
    ) => any;
    export type FlatMapFunc = (
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        value: any
    ) => Future;
}
export interface FutureNamespace {
    $gtype: GObject.GType<Future>;
    prototype: FuturePrototype;
}
export type Future = FuturePrototype;
export interface FuturePrototype extends GObject.Object {
    // Properties
    readonly ready: boolean;
    readonly exception: GLib.Error;

    // Members

    wait(): any;
    wait_until(end_time: number): [boolean, any];
    wait_async(): globalThis.Promise<any>;
    wait_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
    wait_async(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<any> | void;
    wait_finish(_res_: Gio.AsyncResult): any;
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: MapFunc): Future;
    light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
    light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
    zip(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        b_type: GObject.GType,
        b_dup_func: GObject.BoxedCopyFunc,
        zip_func: Future.ZipFunc,
        second: Future
    ): Future;
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FlatMapFunc): Future;
    get_value(): any | null;
    get_ready(): boolean;
    get_exception(): GLib.Error | null;
    vfunc_wait(): any;
    vfunc_wait_until(end_time: number): [boolean, any];
    vfunc_wait_async(): globalThis.Promise<any>;
    vfunc_wait_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
    vfunc_wait_async(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<any> | void;
    vfunc_wait_finish(_res_: Gio.AsyncResult): any;
    vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: MapFunc): Future;
    vfunc_light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
    vfunc_light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
    vfunc_zip(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        b_type: GObject.GType,
        b_dup_func: GObject.BoxedCopyFunc,
        zip_func: Future.ZipFunc,
        second: Future
    ): Future;
    vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FlatMapFunc): Future;
    vfunc_get_value(): any | null;
    vfunc_get_ready(): boolean;
    vfunc_get_exception(): GLib.Error | null;
}

export const Future: FutureNamespace;

export interface HashableNamespace {
    $gtype: GObject.GType<Hashable>;
    prototype: HashablePrototype;
}
export type Hashable = HashablePrototype;
export interface HashablePrototype extends GObject.Object {
    // Members

    hash(): number;
    equal_to(object: any): boolean;
    vfunc_hash(): number;
    vfunc_equal_to(object: any): boolean;
}

export const Hashable: HashableNamespace;

export interface IterableNamespace {
    $gtype: GObject.GType<Iterable>;
    prototype: IterablePrototype;
}
export type Iterable = IterablePrototype;
export interface IterablePrototype extends GObject.Object {
    // Members

    iterator(): Iterator;
    vfunc_iterator(): Iterator;
}

export const Iterable: IterableNamespace;

export interface IteratorNamespace {
    $gtype: GObject.GType<Iterator>;
    prototype: IteratorPrototype;

    unfold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: UnfoldFunc, current?: Lazy | null): Iterator;
    concat(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, iters: Iterator): Iterator;
}
export type Iterator = IteratorPrototype;
export interface IteratorPrototype extends GObject.Object {
    // Properties
    readonly valid: boolean;
    readonly read_only: boolean;
    readonly readOnly: boolean;

    // Members

    next(): boolean;
    has_next(): boolean;
    get(): any;
    remove(): void;
    get_valid(): boolean;
    get_read_only(): boolean;
    vfunc_next(): boolean;
    vfunc_has_next(): boolean;
    vfunc_get(): any;
    vfunc_remove(): void;
    vfunc_get_valid(): boolean;
    vfunc_get_read_only(): boolean;
}

export const Iterator: IteratorNamespace;

export interface ListNamespace {
    $gtype: GObject.GType<List>;
    prototype: ListPrototype;

    empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): List;
}
export type List = ListPrototype;
export interface ListPrototype extends Collection {
    // Properties
    readonly read_only_view: List;
    readonly readOnlyView: List;

    // Members

    list_iterator(): ListIterator;
    get(index: number): any;
    set(index: number, item: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    index_of(item: any): number;
    insert(index: number, item: any): void;
    remove_at(index: number): any;
    slice(start: number, stop: number): List | null;
    first(): any;
    last(): any;
    insert_all(index: number, collection: Collection): void;
    sort(compare_func?: GLib.CompareDataFunc | null): void;
    get_read_only_view(): List;
    vfunc_list_iterator(): ListIterator;
    vfunc_get(index: number): any;
    vfunc_set(index: number, item: any): void;
    vfunc_index_of(item: any): number;
    vfunc_insert(index: number, item: any): void;
    vfunc_remove_at(index: number): any;
    vfunc_slice(start: number, stop: number): List | null;
    vfunc_first(): any;
    vfunc_last(): any;
    vfunc_insert_all(index: number, collection: Collection): void;
    vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
    vfunc_get_read_only_view(): List;
}

export const List: ListNamespace;

export interface ListIteratorNamespace {
    $gtype: GObject.GType<ListIterator>;
    prototype: ListIteratorPrototype;
}
export type ListIterator = ListIteratorPrototype;
export interface ListIteratorPrototype extends Iterator {
    // Members

    set(item: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    add(item: any): void;
    index(): number;
    vfunc_set(item: any): void;
    vfunc_add(item: any): void;
    vfunc_index(): number;
}

export const ListIterator: ListIteratorNamespace;

export interface MapNamespace {
    $gtype: GObject.GType<Map>;
    prototype: MapPrototype;

    empty(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc
    ): Map;
}
export type Map = MapPrototype;
export interface MapPrototype extends GObject.Object {
    // Properties
    readonly size: number;
    readonly read_only: boolean;
    readonly readOnly: boolean;
    readonly keys: Set;
    readonly values: Collection;
    readonly entries: Set;
    readonly read_only_view: Map;
    readonly readOnlyView: Map;

    // Members

    has_key(key: any): boolean;
    contains(key: any): boolean;
    has(key: any, value: any): boolean;
    get(key: any): any | null;
    set(key: any, value: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    unset(key: any): [boolean, any];
    remove(key: any): [boolean, any];
    clear(): void;
    map_iterator(): MapIterator;
    set_all(map: Map): void;
    unset_all(map: Map): boolean;
    remove_all(map: Map): boolean;
    has_all(map: Map): boolean;
    contains_all(map: Map): boolean;
    get_size(): number;
    get_is_empty(): boolean;
    get_read_only(): boolean;
    get_keys(): Set;
    get_values(): Collection;
    get_entries(): Set;
    get_read_only_view(): Map;
    get_key_type(): GObject.GType;
    get_value_type(): GObject.GType;
    vfunc_has_key(key: any): boolean;
    vfunc_has(key: any, value: any): boolean;
    vfunc_get(key: any): any | null;
    vfunc_set(key: any, value: any): void;
    vfunc_unset(key: any): [boolean, any];
    vfunc_clear(): void;
    vfunc_map_iterator(): MapIterator;
    vfunc_set_all(map: Map): void;
    vfunc_unset_all(map: Map): boolean;
    vfunc_has_all(map: Map): boolean;
    vfunc_get_size(): number;
    vfunc_get_is_empty(): boolean;
    vfunc_get_read_only(): boolean;
    vfunc_get_keys(): Set;
    vfunc_get_values(): Collection;
    vfunc_get_entries(): Set;
    vfunc_get_read_only_view(): Map;
}

export const Map: MapNamespace;

export interface MapIteratorNamespace {
    $gtype: GObject.GType<MapIterator>;
    prototype: MapIteratorPrototype;
}
export type MapIterator = MapIteratorPrototype;
export interface MapIteratorPrototype extends GObject.Object {
    // Properties
    readonly valid: boolean;
    readonly mutable: boolean;
    readonly read_only: boolean;
    readonly readOnly: boolean;

    // Members

    next(): boolean;
    has_next(): boolean;
    get_key(): any;
    get_value(): any;
    set_value(value: any): void;
    unset(): void;
    fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldMapFunc, seed: any): any;
    foreach(f: ForallMapFunc): boolean;
    get_valid(): boolean;
    get_mutable(): boolean;
    get_read_only(): boolean;
    vfunc_next(): boolean;
    vfunc_has_next(): boolean;
    vfunc_get_key(): any;
    vfunc_get_value(): any;
    vfunc_set_value(value: any): void;
    vfunc_unset(): void;
    vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldMapFunc, seed: any): any;
    vfunc_foreach(f: ForallMapFunc): boolean;
    vfunc_get_valid(): boolean;
    vfunc_get_mutable(): boolean;
    vfunc_get_read_only(): boolean;
}

export const MapIterator: MapIteratorNamespace;

export interface MultiMapNamespace {
    $gtype: GObject.GType<MultiMap>;
    prototype: MultiMapPrototype;
}
export type MultiMap = MultiMapPrototype;
export interface MultiMapPrototype extends GObject.Object {
    // Properties
    readonly size: number;
    readonly read_only: boolean;
    readonly readOnly: boolean;

    // Members

    get_keys(): Set;
    get_all_keys(): MultiSet;
    get_values(): Collection;
    contains(key: any): boolean;
    get(key: any): Collection;
    set(key: any, value: any): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    remove(key: any, value: any): boolean;
    remove_all(key: any): boolean;
    clear(): void;
    map_iterator(): MapIterator;
    get_size(): number;
    get_read_only(): boolean;
    get_key_type(): GObject.GType;
    get_value_type(): GObject.GType;
    get_read_only_view(): MultiMap;
    vfunc_get_keys(): Set;
    vfunc_get_all_keys(): MultiSet;
    vfunc_get_values(): Collection;
    vfunc_contains(key: any): boolean;
    vfunc_get(key: any): Collection;
    vfunc_set(key: any, value: any): void;
    vfunc_remove(key: any, value: any): boolean;
    vfunc_remove_all(key: any): boolean;
    vfunc_clear(): void;
    vfunc_map_iterator(): MapIterator;
    vfunc_get_size(): number;
    vfunc_get_read_only(): boolean;
    vfunc_get_read_only_view(): MultiMap;
}

export const MultiMap: MultiMapNamespace;

export interface MultiSetNamespace {
    $gtype: GObject.GType<MultiSet>;
    prototype: MultiSetPrototype;

    empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Set;
}
export type MultiSet = MultiSetPrototype;
export interface MultiSetPrototype extends Collection {
    // Members

    count(item: any): number;
    get_read_only_view(): MultiSet;
    vfunc_count(item: any): number;
    vfunc_get_read_only_view(): MultiSet;
}

export const MultiSet: MultiSetNamespace;

export interface QueueNamespace {
    $gtype: GObject.GType<Queue>;
    prototype: QueuePrototype;
}
export type Queue = QueuePrototype;
export interface QueuePrototype extends Collection {
    // Properties
    readonly capacity: number;
    readonly remaining_capacity: number;
    readonly remainingCapacity: number;
    readonly is_full: boolean;
    readonly isFull: boolean;

    // Members

    offer(element: any): boolean;
    peek(): any | null;
    poll(): any | null;
    drain(recipient: Collection, amount: number): number;
    get_capacity(): number;
    get_remaining_capacity(): number;
    get_is_full(): boolean;
    vfunc_offer(element: any): boolean;
    vfunc_peek(): any | null;
    vfunc_poll(): any | null;
    vfunc_drain(recipient: Collection, amount: number): number;
    vfunc_get_capacity(): number;
    vfunc_get_remaining_capacity(): number;
    vfunc_get_is_full(): boolean;
}

export const Queue: QueueNamespace;

export interface SetNamespace {
    $gtype: GObject.GType<Set>;
    prototype: SetPrototype;

    empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Set;
}
export type Set = SetPrototype;
export interface SetPrototype extends Collection {
    // Properties
    readonly read_only_view: Set;
    readonly readOnlyView: Set;

    // Members

    get_read_only_view(): Set;
    vfunc_get_read_only_view(): Set;
}

export const Set: SetNamespace;

export interface SortedMapNamespace {
    $gtype: GObject.GType<SortedMap>;
    prototype: SortedMapPrototype;

    empty(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc
    ): Map;
}
export type SortedMap = SortedMapPrototype;
export interface SortedMapPrototype extends Map {
    // Properties
    readonly ascending_keys: SortedSet;
    readonly ascendingKeys: SortedSet;
    readonly ascending_entries: SortedSet;
    readonly ascendingEntries: SortedSet;
    readonly read_only_view: SortedMap;
    readonly readOnlyView: SortedMap;

    // Members

    head_map(before: any): SortedMap;
    tail_map(after: any): SortedMap;
    sub_map(before: any, after: any): SortedMap;
    get_ascending_keys(): SortedSet;
    get_ascending_entries(): SortedSet;
    get_read_only_view(): SortedMap;
    vfunc_head_map(before: any): SortedMap;
    vfunc_tail_map(after: any): SortedMap;
    vfunc_sub_map(before: any, after: any): SortedMap;
    vfunc_get_ascending_keys(): SortedSet;
    vfunc_get_ascending_entries(): SortedSet;
    vfunc_get_read_only_view(): SortedMap;
}

export const SortedMap: SortedMapNamespace;

export interface SortedSetNamespace {
    $gtype: GObject.GType<SortedSet>;
    prototype: SortedSetPrototype;

    empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): SortedSet;
}
export type SortedSet = SortedSetPrototype;
export interface SortedSetPrototype extends Set {
    // Properties
    readonly read_only_view: SortedSet;
    readonly readOnlyView: SortedSet;

    // Members

    first(): any;
    last(): any;
    iterator_at(element: any): Iterator | null;
    lower(element: any): any | null;
    higher(element: any): any | null;
    floor(element: any): any | null;
    ceil(element: any): any | null;
    head_set(before: any): SortedSet;
    tail_set(after: any): SortedSet;
    sub_set(from: any, to: any): SortedSet;
    get_read_only_view(): SortedSet;
    vfunc_first(): any;
    vfunc_last(): any;
    vfunc_iterator_at(element: any): Iterator | null;
    vfunc_lower(element: any): any | null;
    vfunc_higher(element: any): any | null;
    vfunc_floor(element: any): any | null;
    vfunc_ceil(element: any): any | null;
    vfunc_head_set(before: any): SortedSet;
    vfunc_tail_set(after: any): SortedSet;
    vfunc_sub_set(from: any, to: any): SortedSet;
    vfunc_get_read_only_view(): SortedSet;
}

export const SortedSet: SortedSetNamespace;

export interface TraversableNamespace {
    $gtype: GObject.GType<Traversable>;
    prototype: TraversablePrototype;
}
export type Traversable = TraversablePrototype;
export interface TraversablePrototype extends GObject.Object {
    // Members

    foreach(f: ForallFunc): boolean;
    stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
    fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
    scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
    filter(pred: Predicate): Iterator;
    chop(offset: number, length: number): Iterator;
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
    tee(forks: number): Iterator[];
    first_match(pred: Predicate): any | null;
    any_match(pred: Predicate): boolean;
    all_match(pred: Predicate): boolean;
    max(compare: GLib.CompareDataFunc): any;
    min(compare: GLib.CompareDataFunc): any;
    order_by(compare?: GLib.CompareDataFunc | null): Iterator;
    get_element_type(): GObject.GType;
    vfunc_foreach(f: ForallFunc): boolean;
    vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
    vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
    vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
    vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
    vfunc_filter(pred: Predicate): Iterator;
    vfunc_chop(offset: number, length: number): Iterator;
    vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
    vfunc_tee(forks: number): Iterator[];
    vfunc_first_match(pred: Predicate): any | null;
    vfunc_any_match(pred: Predicate): boolean;
    vfunc_all_match(pred: Predicate): boolean;
    vfunc_max(compare: GLib.CompareDataFunc): any;
    vfunc_min(compare: GLib.CompareDataFunc): any;
    vfunc_order_by(compare?: GLib.CompareDataFunc | null): Iterator;
    vfunc_get_element_type(): GObject.GType;
}

export const Traversable: TraversableNamespace;
