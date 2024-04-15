/**
 * Xmlb 2.0
 *
 * Generated from 2.0
 */

import * as GObject from "gobject2";
import * as Gio from "gio2";
import * as GLib from "glib2";

export function opcode_kind_from_string(str: string): OpcodeKind;
export function opcode_kind_to_string(kind: OpcodeKind): string;
export function string_escape(str: string): string;
export type BuilderFixupFunc = (self: BuilderFixup, bn: BuilderNode) => boolean;
export type BuilderNodeSortFunc = (bn1: BuilderNode, bn2: BuilderNode) => number;
export type BuilderNodeTraverseFunc = (bn: BuilderNode) => boolean;
export type BuilderSourceNodeFunc = (self: BuilderSource, bn: BuilderNode) => boolean;
export type MachineMethodFunc = (
    self: Machine,
    stack: Stack,
    result_unused: boolean,
    exec_data?: any | null
) => boolean;
export type MachineOpcodeFixupFunc = (self: Machine, opcodes: Stack) => boolean;
export type MachineTextHandlerFunc = (self: Machine, opcodes: Stack, text: string, handled: boolean) => boolean;
export type NodeTransmogrifyFunc = (self: Node) => boolean;

export namespace OpcodeKind {
    export const $gtype: GObject.GType<OpcodeKind>;
}

export enum OpcodeKind {
    UNKNOWN = 0,
    INTEGER = 1,
    TEXT = 2,
    FUNCTION = 5,
    BOUND_UNSET = 8,
    BOUND_INTEGER = 9,
    BOUND_TEXT = 10,
    INDEXED_TEXT = 3,
    BOOLEAN = 17,
    BOUND_INDEXED_TEXT = 11,
}

export namespace BuilderCompileFlags {
    export const $gtype: GObject.GType<BuilderCompileFlags>;
}

export enum BuilderCompileFlags {
    NONE = 0,
    NATIVE_LANGS = 2,
    IGNORE_INVALID = 4,
    SINGLE_LANG = 8,
    WATCH_BLOB = 16,
    IGNORE_GUID = 32,
    SINGLE_ROOT = 64,
}

export namespace BuilderNodeFlags {
    export const $gtype: GObject.GType<BuilderNodeFlags>;
}

export enum BuilderNodeFlags {
    NONE = 0,
    IGNORE = 1,
    LITERAL_TEXT = 2,
    HAS_TEXT = 4,
    HAS_TAIL = 8,
    TOKENIZE_TEXT = 16,
    STRIP_TEXT = 32,
}

export namespace BuilderSourceFlags {
    export const $gtype: GObject.GType<BuilderSourceFlags>;
}

export enum BuilderSourceFlags {
    NONE = 0,
    LITERAL_TEXT = 1,
    WATCH_FILE = 2,
    WATCH_DIRECTORY = 4,
}

export namespace MachineDebugFlags {
    export const $gtype: GObject.GType<MachineDebugFlags>;
}

export enum MachineDebugFlags {
    NONE = 0,
    SHOW_STACK = 1,
    SHOW_PARSING = 2,
    SHOW_OPTIMIZER = 4,
    SHOW_SLOW_PATH = 8,
}

export namespace MachineParseFlags {
    export const $gtype: GObject.GType<MachineParseFlags>;
}

export enum MachineParseFlags {
    NONE = 0,
    OPTIMIZE = 1,
}

export namespace NodeExportFlags {
    export const $gtype: GObject.GType<NodeExportFlags>;
}

export enum NodeExportFlags {
    NONE = 0,
    ADD_HEADER = 1,
    FORMAT_MULTILINE = 2,
    FORMAT_INDENT = 4,
    INCLUDE_SIBLINGS = 8,
    ONLY_CHILDREN = 16,
    COLLAPSE_EMPTY = 32,
}

export namespace OpcodeFlags {
    export const $gtype: GObject.GType<OpcodeFlags>;
}

export enum OpcodeFlags {
    UNKNOWN = 0,
    INTEGER = 1,
    TEXT = 2,
    FUNCTION = 4,
    BOUND = 8,
    BOOLEAN = 16,
    TOKENIZED = 32,
}

export namespace QueryFlags {
    export const $gtype: GObject.GType<QueryFlags>;
}

export enum QueryFlags {
    NONE = 0,
    OPTIMIZE = 1,
    USE_INDEXES = 2,
    REVERSE = 4,
    FORCE_NODE_CACHE = 8,
}

export namespace SiloLoadFlags {
    export const $gtype: GObject.GType<SiloLoadFlags>;
}

export enum SiloLoadFlags {
    NONE = 0,
    NO_MAGIC = 1,
    WATCH_BLOB = 2,
}

export namespace SiloProfileFlags {
    export const $gtype: GObject.GType<SiloProfileFlags>;
}

export enum SiloProfileFlags {
    NONE = 0,
    DEBUG = 1,
    APPEND = 2,
    XPATH = 4,
    OPTIMIZER = 8,
}
export module Builder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Builder extends GObject.Object {
    static $gtype: GObject.GType<Builder>;

    constructor(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Builder;

    // Members

    add_fixup(fixup: BuilderFixup): void;
    add_locale(locale: string): void;
    append_guid(guid: string): void;
    compile(flags: BuilderCompileFlags, cancellable?: Gio.Cancellable | null): Silo;
    ensure(file: Gio.File, flags: BuilderCompileFlags, cancellable?: Gio.Cancellable | null): Silo;
    import_node(bn: BuilderNode): void;
    import_source(source: BuilderSource): void;
    set_profile_flags(profile_flags: SiloProfileFlags): void;
}
export module BuilderFixup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BuilderFixup extends GObject.Object {
    static $gtype: GObject.GType<BuilderFixup>;

    constructor(properties?: Partial<BuilderFixup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BuilderFixup.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](id: string, func: BuilderFixupFunc): BuilderFixup;

    // Members

    get_max_depth(): number;
    set_max_depth(max_depth: number): void;
}
export module BuilderNode {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BuilderNode extends GObject.Object {
    static $gtype: GObject.GType<BuilderNode>;

    constructor(properties?: Partial<BuilderNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BuilderNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](element: string): BuilderNode;

    // Members

    add_child(child: BuilderNode): void;
    add_flag(flag: BuilderNodeFlags): void;
    add_token(token: string): void;
    depth(): number;
    ["export"](flags: NodeExportFlags): string;
    get_attr(name: string): string;
    get_attr_as_uint(name: string): number;
    get_child(element: string, text?: string | null): BuilderNode;
    get_children(): BuilderNode[];
    get_element(): string;
    get_first_child(): BuilderNode;
    get_last_child(): BuilderNode;
    get_parent(): BuilderNode;
    get_tail(): string;
    get_text(): string;
    get_text_as_uint(): number;
    get_tokens(): string[] | null;
    has_flag(flag: BuilderNodeFlags): boolean;
    remove_attr(name: string): void;
    remove_child(child: BuilderNode): void;
    set_attr(name: string, value: string): void;
    set_element(element: string): void;
    set_tail(tail: string | null, tail_len: number): void;
    set_text(text: string | null, text_len: number): void;
    sort_children(func: BuilderNodeSortFunc): void;
    tokenize_text(): void;
    traverse(
        order: GLib.TraverseType,
        flags: GLib.TraverseFlags,
        max_depth: number,
        func: BuilderNodeTraverseFunc
    ): void;
    unlink(): void;
}
export module BuilderSource {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BuilderSource extends GObject.Object {
    static $gtype: GObject.GType<BuilderSource>;

    constructor(properties?: Partial<BuilderSource.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BuilderSource.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): BuilderSource;

    // Members

    add_fixup(fixup: BuilderFixup): void;
    load_bytes(bytes: GLib.Bytes | Uint8Array, flags: BuilderSourceFlags): boolean;
    load_file(file: Gio.File, flags: BuilderSourceFlags, cancellable?: Gio.Cancellable | null): boolean;
    load_xml(xml: string, flags: BuilderSourceFlags): boolean;
    set_info(info?: BuilderNode | null): void;
    set_prefix(prefix?: string | null): void;
}
export module BuilderSourceCtx {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class BuilderSourceCtx extends GObject.Object {
    static $gtype: GObject.GType<BuilderSourceCtx>;

    constructor(properties?: Partial<BuilderSourceCtx.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BuilderSourceCtx.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_bytes(cancellable?: Gio.Cancellable | null): GLib.Bytes;
    get_filename(): string | null;
    get_stream(): Gio.InputStream;
}
export module Machine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Machine extends GObject.Object {
    static $gtype: GObject.GType<Machine>;

    constructor(properties?: Partial<Machine.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Machine.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Machine;

    // Members

    add_method(name: string, n_opcodes: number, method_cb: MachineMethodFunc): void;
    add_opcode_fixup(opcodes_sig: string, fixup_cb: MachineOpcodeFixupFunc): void;
    add_operator(str: string, name: string): void;
    add_text_handler(handler_cb: MachineTextHandlerFunc): void;
    get_stack_size(): number;
    opcode_func_init(func_name: string): [boolean, Opcode];
    parse(text: string, text_len: number): Stack;
    parse_full(text: string, text_len: number, flags: MachineParseFlags): Stack;
    run(opcodes: Stack, exec_data?: any | null): [boolean, boolean];
    run_with_bindings(opcodes: Stack, bindings: ValueBindings | null, exec_data?: any | null): [boolean, boolean];
    set_debug_flags(flags: MachineDebugFlags): void;
    set_stack_size(stack_size: number): void;
    stack_pop(stack: Stack): [boolean, Opcode | null];
    stack_push(stack: Stack): [boolean, Opcode | null];
    stack_push_integer(stack: Stack, val: number): boolean;
    stack_push_text(stack: Stack, str: string): boolean;
    stack_push_text_static(stack: Stack, str: string): boolean;
    stack_push_text_steal(stack: Stack, str: string): boolean;
}
export module Node {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Node extends GObject.Object {
    static $gtype: GObject.GType<Node>;

    constructor(properties?: Partial<Node.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Node.ConstructorProperties>, ...args: any[]): void;

    // Members

    ["export"](flags: NodeExportFlags): string;
    get_attr(name: string): string;
    get_attr_as_uint(name: string): number;
    get_child(): Node;
    get_children(): Node[];
    get_data(key: string): GLib.Bytes;
    // Conflicted with GObject.Object.get_data
    get_data(...args: never[]): any;
    get_depth(): number;
    get_element(): string;
    get_next(): Node;
    get_parent(): Node;
    get_root(): Node;
    get_silo(): Silo;
    get_tail(): string;
    get_text(): string;
    get_text_as_uint(): number;
    query(xpath: string, limit: number): Node[];
    query_attr(xpath: string, name: string): string;
    query_attr_as_uint(xpath: string, name: string): number;
    query_export(xpath: string): string;
    query_first(xpath: string): Node;
    query_first_full(query: Query): Node;
    query_first_with_context(query: Query, context?: QueryContext | null): Node;
    query_full(query: Query): Node[];
    query_text(xpath: string): string;
    query_text_as_uint(xpath: string): number;
    query_with_context(query: Query, context?: QueryContext | null): Node[];
    set_data(key: string, data: GLib.Bytes | Uint8Array): void;
    // Conflicted with GObject.Object.set_data
    set_data(...args: never[]): any;
    transmogrify(func_text: NodeTransmogrifyFunc, func_tail: NodeTransmogrifyFunc): boolean;
}
export module Query {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Query extends GObject.Object {
    static $gtype: GObject.GType<Query>;

    constructor(properties?: Partial<Query.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Query.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](silo: Silo, xpath: string): Query;
    static new_full(silo: Silo, xpath: string, flags: QueryFlags): Query;

    // Members

    bind_str(idx: number, str: string): boolean;
    bind_val(idx: number, val: number): boolean;
    get_flags(): QueryFlags;
    get_limit(): number;
    get_xpath(): string;
    set_flags(flags: QueryFlags): void;
    set_limit(limit: number): void;
}
export module Silo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        enable_node_cache: boolean;
        enableNodeCache: boolean;
        guid: string;
        valid: boolean;
    }
}
export class Silo extends GObject.Object {
    static $gtype: GObject.GType<Silo>;

    constructor(properties?: Partial<Silo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Silo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get enable_node_cache(): boolean;
    set enable_node_cache(val: boolean);
    get enableNodeCache(): boolean;
    set enableNodeCache(val: boolean);
    get guid(): string;
    set guid(val: string);
    get valid(): boolean;

    // Constructors

    static ["new"](): Silo;
    static new_from_xml(xml: string): Silo;

    // Members

    ["export"](flags: NodeExportFlags): string;
    export_file(file: Gio.File, flags: NodeExportFlags, cancellable?: Gio.Cancellable | null): boolean;
    get_bytes(): GLib.Bytes;
    get_enable_node_cache(): boolean;
    get_guid(): string;
    get_profile_string(): string;
    get_root(): Node;
    get_size(): number;
    invalidate(): void;
    is_valid(): boolean;
    load_from_bytes(blob: GLib.Bytes | Uint8Array, flags: SiloLoadFlags): boolean;
    load_from_file(file: Gio.File, flags: SiloLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
    lookup_query(xpath: string): Query;
    query(xpath: string, limit: number): Node[];
    query_build_index(xpath: string, attr?: string | null): boolean;
    query_first(xpath: string): Node;
    query_first_full(query: Query): Node;
    query_first_with_context(query: Query, context?: QueryContext | null): Node;
    query_full(query: Query): Node[];
    query_with_context(query: Query, context?: QueryContext | null): Node[];
    save_to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    set_enable_node_cache(enable_node_cache: boolean): void;
    set_profile_flags(profile_flags: SiloProfileFlags): void;
    to_string(): string;
    watch_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
}

export class NodeAttrIter {
    static $gtype: GObject.GType<NodeAttrIter>;

    constructor(copy: NodeAttrIter);

    // Members
    init(self: Node): void;
    next(): [boolean, string, string];
}

export class NodeChildIter {
    static $gtype: GObject.GType<NodeChildIter>;

    constructor(copy: NodeChildIter);

    // Members
    init(self: Node): void;
    next(): [boolean, Node | null];
}

export class Opcode {
    static $gtype: GObject.GType<Opcode>;

    constructor(copy: Opcode);

    // Members
    cmp_str(): boolean;
    cmp_val(): boolean;
    func_init(func: number): void;
    get_kind(): OpcodeKind;
    get_str(): string;
    get_val(): number;
    integer_init(val: number): void;
    text_init(str: string): void;
    text_init_static(str: string): void;
    text_init_steal(str: string): void;
    to_string(): string;
    static kind_from_string(str: string): OpcodeKind;
    static kind_to_string(kind: OpcodeKind): string;
}

export class QueryContext {
    static $gtype: GObject.GType<QueryContext>;

    constructor(copy: QueryContext);

    // Members
    clear(): void;
    copy(): QueryContext;
    free(): void;
    get_bindings(): ValueBindings;
    get_flags(): QueryFlags;
    get_limit(): number;
    init(): void;
    set_flags(flags: QueryFlags): void;
    set_limit(limit: number): void;
}

export class Stack {
    static $gtype: GObject.GType<Stack>;

    constructor(copy: Stack);

    // Members
    pop(): [boolean, Opcode | null];
    push(): [boolean, Opcode | null];
    to_string(): string;
}

export class ValueBindings {
    static $gtype: GObject.GType<ValueBindings>;

    constructor(copy: ValueBindings);

    // Members
    bind_str(idx: number, str: string, destroy_func?: GLib.DestroyNotify | null): void;
    bind_val(idx: number, val: number): void;
    clear(): void;
    copy(): ValueBindings;
    copy_binding(idx: number, dest: ValueBindings, dest_idx: number): boolean;
    free(): void;
    init(): void;
    is_bound(idx: number): boolean;
    lookup_opcode(idx: number): [boolean, Opcode];
}
