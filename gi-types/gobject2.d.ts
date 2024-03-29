/**
 * GObject 2.0
 *
 * Generated from 2.79.0
 */

import * as GLib from "glib2";

export const PARAM_MASK: number;
export const PARAM_STATIC_STRINGS: number;
export const PARAM_USER_SHIFT: number;
export const SIGNAL_FLAGS_MASK: number;
export const SIGNAL_MATCH_MASK: number;
export const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type;
export const TYPE_FUNDAMENTAL_MAX: number;
export const TYPE_FUNDAMENTAL_SHIFT: number;
export const TYPE_RESERVED_BSE_FIRST: number;
export const TYPE_RESERVED_BSE_LAST: number;
export const TYPE_RESERVED_GLIB_FIRST: number;
export const TYPE_RESERVED_GLIB_LAST: number;
export const TYPE_RESERVED_USER_FIRST: number;
export const VALUE_INTERNED_STRING: number;
export const VALUE_NOCOPY_CONTENTS: number;
export function boxed_copy(boxed_type: GType, src_boxed: any): any;
export function boxed_free(boxed_type: GType, boxed: any): void;
export function cclosure_marshal_BOOLEAN__BOXED_BOXED(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_BOOLEAN__FLAGS(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_STRING__OBJECT_POINTER(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__BOOLEAN(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__BOXED(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__CHAR(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__DOUBLE(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__ENUM(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__FLAGS(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__FLOAT(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__INT(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__LONG(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__OBJECT(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__PARAM(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__POINTER(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__STRING(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__UCHAR(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__UINT(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__UINT_POINTER(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__ULONG(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__VARIANT(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_VOID__VOID(
    closure: Closure,
    return_value: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function cclosure_marshal_generic(
    closure: Closure,
    return_gvalue: Value | any,
    n_param_values: number,
    param_values: Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function clear_signal_handler(handler_id_ptr: number, instance: Object): void;
export function enum_complete_type_info(g_enum_type: GType, const_values: EnumValue): TypeInfo;
export function enum_get_value(enum_class: EnumClass, value: number): EnumValue | null;
export function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue | null;
export function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue | null;
export function enum_register_static(name: string, const_static_values: EnumValue): GType;
export function enum_to_string(g_enum_type: GType, value: number): string;
export function flags_complete_type_info(g_flags_type: GType, const_values: FlagsValue): TypeInfo;
export function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue | null;
export function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue | null;
export function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue | null;
export function flags_register_static(name: string, const_static_values: FlagsValue): GType;
export function flags_to_string(flags_type: GType, value: number): string;
export function gtype_get_type(): GType;
export function param_spec_boolean(
    name: string,
    nick: string | null,
    blurb: string | null,
    default_value: boolean,
    flags: ParamFlags
): ParamSpec;
export function param_spec_boxed(
    name: string,
    nick: string | null,
    blurb: string | null,
    boxed_type: GType,
    flags: ParamFlags
): ParamSpec;
export function param_spec_char(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_double(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_enum(
    name: string,
    nick: string | null,
    blurb: string | null,
    enum_type: GType,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_flags(
    name: string,
    nick: string | null,
    blurb: string | null,
    flags_type: GType,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_float(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_gtype(
    name: string,
    nick: string | null,
    blurb: string | null,
    is_a_type: GType,
    flags: ParamFlags
): ParamSpec;
export function param_spec_int(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_int64(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_long(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_object(
    name: string,
    nick: string | null,
    blurb: string | null,
    object_type: GType,
    flags: ParamFlags
): ParamSpec;
export function param_spec_param(
    name: string,
    nick: string | null,
    blurb: string | null,
    param_type: GType,
    flags: ParamFlags
): ParamSpec;
export function param_spec_pointer(
    name: string,
    nick: string | null,
    blurb: string | null,
    flags: ParamFlags
): ParamSpec;
export function param_spec_string(
    name: string,
    nick: string | null,
    blurb: string | null,
    default_value: string | null,
    flags: ParamFlags
): ParamSpec;
export function param_spec_uchar(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_uint(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_uint64(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_ulong(
    name: string,
    nick: string | null,
    blurb: string | null,
    minimum: number,
    maximum: number,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_unichar(
    name: string,
    nick: string | null,
    blurb: string | null,
    default_value: number,
    flags: ParamFlags
): ParamSpec;
export function param_spec_variant(
    name: string,
    nick: string | null,
    blurb: string | null,
    type: GLib.VariantType,
    default_value: GLib.Variant | null,
    flags: ParamFlags
): ParamSpec;
export function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): GType;
export function param_value_convert(
    pspec: ParamSpec,
    src_value: Value | any,
    dest_value: Value | any,
    strict_validation: boolean
): boolean;
export function param_value_defaults(pspec: ParamSpec, value: Value | any): boolean;
export function param_value_is_valid(pspec: ParamSpec, value: Value | any): boolean;
export function param_value_set_default(pspec: ParamSpec, value: Value | any): void;
export function param_value_validate(pspec: ParamSpec, value: Value | any): boolean;
export function param_values_cmp(pspec: ParamSpec, value1: Value | any, value2: Value | any): number;
export function pointer_type_register_static(name: string): GType;
export function signal_accumulator_first_wins(
    ihint: SignalInvocationHint,
    return_accu: Value | any,
    handler_return: Value | any,
    dummy?: any | null
): boolean;
export function signal_accumulator_true_handled(
    ihint: SignalInvocationHint,
    return_accu: Value | any,
    handler_return: Value | any,
    dummy?: any | null
): boolean;
export function signal_add_emission_hook(
    signal_id: number,
    detail: GLib.Quark,
    data_destroy?: GLib.DestroyNotify | null
): number;
export function signal_chain_from_overridden(instance_and_params: Value[], return_value: Value | any): void;
export function signal_connect_closure(
    instance: Object,
    detailed_signal: string,
    closure: Closure,
    after: boolean
): number;
export function signal_connect_closure_by_id(
    instance: Object,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure,
    after: boolean
): number;
export function signal_emitv(
    instance_and_params: Value[],
    signal_id: number,
    detail: GLib.Quark,
    return_value?: Value | any
): unknown;
export function signal_get_invocation_hint(instance: Object): SignalInvocationHint | null;
export function signal_handler_block(instance: Object, handler_id: number): void;
export function signal_handler_disconnect(instance: Object, handler_id: number): void;
export function signal_handler_is_connected(instance: Object, handler_id: number): boolean;
export function signal_handler_unblock(instance: Object, handler_id: number): void;
export function signal_handlers_block_matched(
    instance: Object,
    mask: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    func?: any | null,
    data?: any | null
): number;
export function signal_handlers_destroy(instance: Object): void;
export function signal_handlers_disconnect_matched(
    instance: Object,
    mask: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    func?: any | null,
    data?: any | null
): number;
export function signal_handlers_unblock_matched(
    instance: Object,
    mask: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    func?: any | null,
    data?: any | null
): number;
export function signal_has_handler_pending(
    instance: Object,
    signal_id: number,
    detail: GLib.Quark,
    may_be_blocked: boolean
): boolean;
export function signal_is_valid_name(name: string): boolean;
export function signal_list_ids(itype: GType): number[];
export function signal_lookup(name: string, itype: GType): number;
export function signal_name(signal_id: number): string | null;
export function signal_override_class_closure(signal_id: number, instance_type: GType, class_closure: Closure): void;
export function signal_parse_name(
    detailed_signal: string,
    itype: GType,
    force_detail_quark: boolean
): [boolean, number, GLib.Quark];
export function signal_query(signal_id: number): SignalQuery;
export function signal_remove_emission_hook(signal_id: number, hook_id: number): void;
export function signal_set_va_marshaller(
    signal_id: number,
    instance_type: GType,
    va_marshaller: SignalCVaMarshaller
): void;
export function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void;
export function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void;
export function signal_type_cclosure_new(itype: GType, struct_offset: number): Closure;
export function source_set_closure(source: GLib.Source, closure: Closure): void;
export function source_set_dummy_callback(source: GLib.Source): void;
export function strdup_value_contents(value: Value | any): string;
export function type_add_class_private(class_type: GType, private_size: number): void;
export function type_add_instance_private(class_type: GType, private_size: number): number;
export function type_add_interface_dynamic(instance_type: GType, interface_type: GType, plugin: TypePlugin): void;
export function type_add_interface_static(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
export function type_check_class_is_a(g_class: TypeClass, is_a_type: GType): boolean;
export function type_check_instance(instance: TypeInstance): boolean;
export function type_check_instance_is_a(instance: TypeInstance, iface_type: GType): boolean;
export function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: GType): boolean;
export function type_check_is_value_type(type: GType): boolean;
export function type_check_value(value: Value | any): boolean;
export function type_check_value_holds(value: Value | any, type: GType): boolean;
export function type_children(type: GType): GType[];
export function type_class_adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
export function type_class_peek(type: GType): TypeClass;
export function type_class_peek_static(type: GType): TypeClass;
export function type_class_ref(type: GType): TypeClass;
export function type_default_interface_peek(g_type: GType): TypeInterface;
export function type_default_interface_ref(g_type: GType): TypeInterface;
export function type_default_interface_unref(g_iface: TypeInterface): void;
export function type_depth(type: GType): number;
export function type_ensure(type: GType): void;
export function type_free_instance(instance: TypeInstance): void;
export function type_from_name(name: string): GType;
export function type_fundamental(type_id: GType): GType;
export function type_fundamental_next(): GType;
export function type_get_instance_count(type: GType): number;
export function type_get_plugin(type: GType): TypePlugin;
export function type_get_qdata(type: GType, quark: GLib.Quark): any | null;
export function type_get_type_registration_serial(): number;
export function type_init(): void;
export function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;
export function type_interface_add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
export function type_interface_get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
export function type_interface_instantiatable_prerequisite(interface_type: GType): GType;
export function type_interface_peek(instance_class: TypeClass, iface_type: GType): TypeInterface;
export function type_interface_prerequisites(interface_type: GType): GType[];
export function type_interfaces(type: GType): GType[];
export function type_is_a(type: GType, is_a_type: GType): boolean;
export function type_name(type: GType): string | null;
export function type_name_from_class(g_class: TypeClass): string;
export function type_name_from_instance(instance: TypeInstance): string;
export function type_next_base(leaf_type: GType, root_type: GType): GType;
export function type_parent(type: GType): GType;
export function type_qname(type: GType): GLib.Quark;
export function type_query(type: GType): TypeQuery;
export function type_register_dynamic(
    parent_type: GType,
    type_name: string,
    plugin: TypePlugin,
    flags: TypeFlags
): GType;
export function type_register_fundamental(
    type_id: GType,
    type_name: string,
    info: TypeInfo,
    finfo: TypeFundamentalInfo,
    flags: TypeFlags
): GType;
export function type_register_static(parent_type: GType, type_name: string, info: TypeInfo, flags: TypeFlags): GType;
export function type_set_qdata(type: GType, quark: GLib.Quark, data?: any | null): void;
export function type_test_flags(type: GType, flags: number): boolean;
export function value_type_compatible(src_type: GType, dest_type: GType): boolean;
export function value_type_transformable(src_type: GType, dest_type: GType): boolean;
export type BaseFinalizeFunc = (g_class: TypeClass) => void;
export type BaseInitFunc = (g_class: TypeClass) => void;
export type BindingTransformFunc = (binding: Binding, from_value: Value | any, to_value: Value | any) => boolean;
export type BoxedCopyFunc = (boxed: any) => any;
export type BoxedFreeFunc = (boxed: any) => void;
export type Callback = () => void;
export type ClassFinalizeFunc = (g_class: TypeClass, class_data?: any | null) => void;
export type ClassInitFunc = (g_class: TypeClass, class_data?: any | null) => void;
export type ClosureMarshal = (
    closure: Closure,
    return_value: Value | null,
    param_values: Value[],
    invocation_hint?: any | null,
    marshal_data?: any | null
) => void;
export type ClosureNotify = (data: any | null, closure: Closure) => void;
export type InstanceInitFunc = (instance: TypeInstance, g_class: TypeClass) => void;
export type InterfaceFinalizeFunc = (g_iface: TypeInterface, iface_data?: any | null) => void;
export type InterfaceInitFunc = (g_iface: TypeInterface, iface_data?: any | null) => void;
export type ObjectFinalizeFunc<A = Object> = (object: A) => void;
export type ObjectGetPropertyFunc<A = Object> = (
    object: A,
    property_id: number,
    value: Value | any,
    pspec: ParamSpec
) => void;
export type ObjectSetPropertyFunc<A = Object> = (
    object: A,
    property_id: number,
    value: Value | any,
    pspec: ParamSpec
) => void;
export type SignalAccumulator = (
    ihint: SignalInvocationHint,
    return_accu: Value | any,
    handler_return: Value | any,
    data?: any | null
) => boolean;
export type SignalEmissionHook = (ihint: SignalInvocationHint, param_values: Value[], data?: any | null) => boolean;
export type ToggleNotify<A = Object> = (data: any | null, object: A, is_last_ref: boolean) => void;
export type TypeClassCacheFunc = (cache_data: any | null, g_class: TypeClass) => boolean;
export type TypeInterfaceCheckFunc = (check_data: any | null, g_iface: TypeInterface) => void;
export type TypePluginCompleteInterfaceInfo = (
    plugin: TypePlugin,
    instance_type: GType,
    interface_type: GType,
    info: InterfaceInfo
) => void;
export type TypePluginCompleteTypeInfo = (
    plugin: TypePlugin,
    g_type: GType,
    info: TypeInfo,
    value_table: TypeValueTable
) => void;
export type TypePluginUnuse = (plugin: TypePlugin) => void;
export type TypePluginUse = (plugin: TypePlugin) => void;
export type TypeValueCollectFunc = (
    value: Value | any,
    collect_values: TypeCValue[],
    collect_flags: number
) => string | null;
export type TypeValueCopyFunc = (src_value: Value | any) => void;
export type TypeValueFreeFunc = (value: Value | any) => void;
export type TypeValueInitFunc = (value: Value | any) => void;
export type TypeValueLCopyFunc = (
    value: Value | any,
    collect_values: TypeCValue[],
    collect_flags: number
) => string | null;
export type TypeValuePeekPointerFunc = (value: Value | any) => any | null;
export type ValueTransform = (src_value: Value | any, dest_value: Value | any) => void;
export type WeakNotify<A = Object> = (data: any | null, where_the_object_was: A) => void;

export namespace BindingFlags {
    export const $gtype: GType<BindingFlags>;
}

export enum BindingFlags {
    DEFAULT = 0,
    BIDIRECTIONAL = 1,
    SYNC_CREATE = 2,
    INVERT_BOOLEAN = 4,
}

export namespace ConnectFlags {
    export const $gtype: GType<ConnectFlags>;
}

export enum ConnectFlags {
    DEFAULT = 0,
    AFTER = 1,
    SWAPPED = 2,
}

export namespace ParamFlags {
    export const $gtype: GType<ParamFlags>;
}

export enum ParamFlags {
    READABLE = 1,
    WRITABLE = 2,
    READWRITE = 3,
    CONSTRUCT = 4,
    CONSTRUCT_ONLY = 8,
    LAX_VALIDATION = 16,
    STATIC_NAME = 32,
    PRIVATE = 32,
    STATIC_NICK = 64,
    STATIC_BLURB = 128,
    EXPLICIT_NOTIFY = 1073741824,
    DEPRECATED = 2147483648,
}

export namespace SignalFlags {
    export const $gtype: GType<SignalFlags>;
}

export enum SignalFlags {
    RUN_FIRST = 1,
    RUN_LAST = 2,
    RUN_CLEANUP = 4,
    NO_RECURSE = 8,
    DETAILED = 16,
    ACTION = 32,
    NO_HOOKS = 64,
    MUST_COLLECT = 128,
    DEPRECATED = 256,
    ACCUMULATOR_FIRST_RUN = 131072,
}

export namespace SignalMatchType {
    export const $gtype: GType<SignalMatchType>;
}

export enum SignalMatchType {
    ID = 1,
    DETAIL = 2,
    CLOSURE = 4,
    FUNC = 8,
    DATA = 16,
    UNBLOCKED = 32,
}

export namespace TypeDebugFlags {
    export const $gtype: GType<TypeDebugFlags>;
}

export enum TypeDebugFlags {
    NONE = 0,
    OBJECTS = 1,
    SIGNALS = 2,
    INSTANCE_COUNT = 4,
    MASK = 7,
}

export namespace TypeFlags {
    export const $gtype: GType<TypeFlags>;
}

export enum TypeFlags {
    NONE = 0,
    ABSTRACT = 16,
    VALUE_ABSTRACT = 32,
    FINAL = 64,
    DEPRECATED = 128,
}

export namespace TypeFundamentalFlags {
    export const $gtype: GType<TypeFundamentalFlags>;
}

export enum TypeFundamentalFlags {
    CLASSED = 1,
    INSTANTIATABLE = 2,
    DERIVABLE = 4,
    DEEP_DERIVABLE = 8,
}
export module Binding {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        flags: BindingFlags;
        source: Object;
        source_property: string;
        sourceProperty: string;
        target: Object;
        target_property: string;
        targetProperty: string;
    }
}
export class Binding extends Object {
    static $gtype: GType<Binding>;

    constructor(properties?: Partial<Binding.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Binding.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get flags(): BindingFlags;
    get source(): Object;
    get source_property(): string;
    get sourceProperty(): string;
    get target(): Object;
    get target_property(): string;
    get targetProperty(): string;

    // Members

    dup_source<T = Object>(): T;
    dup_target<T = Object>(): T;
    get_flags(): BindingFlags;
    get_source<T = Object>(): T;
    get_source_property(): string;
    get_target<T = Object>(): T;
    get_target_property(): string;
    unbind(): void;
}
export module BindingGroup {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        source: Object;
    }
}
export class BindingGroup extends Object {
    static $gtype: GType<BindingGroup>;

    constructor(properties?: Partial<BindingGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BindingGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get source(): Object;
    set source(val: Object);

    // Constructors

    static ["new"](): BindingGroup;

    // Members

    bind(source_property: string, target: Object, target_property: string, flags: BindingFlags): void;
    bind_full(
        source_property: string,
        target: Object,
        target_property: string,
        flags: BindingFlags,
        transform_to?: BindingTransformFunc | null,
        transform_from?: BindingTransformFunc | null
    ): void;
    bind_full(
        source_property: string,
        target: Object,
        target_property: string,
        flags: BindingFlags,
        transform_to?: Closure | null,
        transform_from?: Closure | null
    ): void;
    dup_source<T = Object>(): T;
    set_source(source?: Object | null): void;
}
export module InitiallyUnowned {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class InitiallyUnowned extends Object {
    static $gtype: GType<InitiallyUnowned>;

    constructor(properties?: Partial<InitiallyUnowned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InitiallyUnowned.ConstructorProperties>, ...args: any[]): void;

    // Fields
    g_type_instance: TypeInstance;
}
export module Object {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class Object {
    static $gtype: GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Fields
    g_type_instance: TypeInstance;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "notify", callback: (_source: this, pspec: ParamSpec) => void): number;
    connect_after(signal: "notify", callback: (_source: this, pspec: ParamSpec) => void): number;
    emit(signal: "notify", pspec: ParamSpec): void;

    // Constructors

    static newv(object_type: GType, parameters: Parameter[]): Object;

    // Members

    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding;
    bind_property_full(
        source_property: string,
        target: Object,
        target_property: string,
        flags: BindingFlags,
        transform_to?: BindingTransformFunc | null,
        transform_from?: BindingTransformFunc | null,
        notify?: GLib.DestroyNotify | null
    ): Binding;
    bind_property_full(
        source_property: string,
        target: Object,
        target_property: string,
        flags: BindingFlags,
        transform_to: Closure,
        transform_from: Closure
    ): Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string): any | null;
    get_property(property_name: string): any;
    get_qdata(quark: GLib.Quark): any | null;
    getv(names: string[], values: Value[]): void;
    is_floating(): boolean;
    notify(property_name: string): void;
    notify_by_pspec(pspec: ParamSpec): void;
    ref(): Object;
    ref_sink(): Object;
    run_dispose(): void;
    set_data(key: string, data?: any | null): void;
    set_property(property_name: string, value: any): void;
    steal_data(key: string): any | null;
    steal_qdata(quark: GLib.Quark): any | null;
    thaw_notify(): void;
    unref(): void;
    watch_closure(closure: Closure): void;
    vfunc_constructed(): void;
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
    vfunc_dispose(): void;
    vfunc_finalize(): void;
    vfunc_get_property(property_id: number, value: Value | any, pspec: ParamSpec): void;
    vfunc_notify(pspec: ParamSpec): void;
    vfunc_set_property(property_id: number, value: Value | any, pspec: ParamSpec): void;
    static compat_control(what: number, data?: any | null): number;
    static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec;
    static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void;
    static interface_list_properties(g_iface: TypeInterface): ParamSpec[];
    static find_property(property_name: string): ParamSpec;
    static install_properties(pspecs: ParamSpec[]): void;
    static install_property(property_id: number, pspec: ParamSpec): void;
    static list_properties(): ParamSpec[];
    static override_property(property_id: number, name: string): void;
    static _classInit(klass: any): any;
    disconnect(id: number): void;
    set(properties: { [key: string]: any }): void;
    block_signal_handler(id: number): any;
    unblock_signal_handler(id: number): any;
    stop_emission_by_name(detailedName: string): any;
}
export module ParamSpec {
    export interface ConstructorProperties<A = unknown> {
        [key: string]: any;
    }
}
export abstract class ParamSpec<A = unknown> {
    static $gtype: GType<ParamSpec>;

    constructor(properties?: Partial<ParamSpec.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<ParamSpec.ConstructorProperties<A>>, ...args: any[]): void;

    // Fields
    g_type_instance: TypeInstance;
    name: string;
    flags: ParamFlags;
    value_type: GType;
    owner_type: GType;
    static override: any;

    // Members

    get_blurb(): string | null;
    get_default_value(): unknown;
    get_name(): string;
    get_name_quark(): GLib.Quark;
    get_nick(): string;
    get_qdata(quark: GLib.Quark): any | null;
    get_redirect_target(): ParamSpec | null;
    set_qdata(quark: GLib.Quark, data?: any | null): void;
    sink(): void;
    steal_qdata(quark: GLib.Quark): any | null;
    vfunc_finalize(): void;
    vfunc_value_is_valid(value: Value | any): boolean;
    vfunc_value_set_default(value: Value | any): void;
    vfunc_value_validate(value: Value | any): boolean;
    vfunc_values_cmp(value1: Value | any, value2: Value | any): number;
    static is_valid_name(name: string): boolean;
    static char(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static uchar(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static int(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static uint(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static long(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static ulong(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static int64(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static uint64(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static float(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static boolean(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        defaultValue: boolean
    ): ParamSpec<boolean>;
    static flags(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        flagsType: any,
        defaultValue: any
    ): ParamSpec<number>;
    static enum<T>(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        enumType: GType<T> | { $gtype: GType<T> },
        defaultValue: any
    ): ParamSpec<T>;
    static double(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        minimum: number,
        maximum: number,
        defaultValue: number
    ): ParamSpec<number>;
    static string(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        defaultValue: string
    ): ParamSpec<string>;
    static boxed<T>(
        name: string,
        nick: string,
        blurb: string,
        flags: ParamFlags | number,
        boxedType: GType<T> | { $gtype: GType<T> }
    ): ParamSpec<T>;
    static object<T>(
        name: any,
        nick: any,
        blurb: any,
        flags: any,
        objectType: GType<T> | { $gtype: GType<T> }
    ): ParamSpec<T>;
    static param(name: string, nick: string, blurb: string, flags: ParamFlags | number, paramType: any): ParamSpec;
    __type__(arg: never): A;
}

export module SignalGroup {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        target: Object;
        target_type: GType;
        targetType: GType;
    }
}
export class SignalGroup extends Object {
    static $gtype: GType<SignalGroup>;

    constructor(properties?: Partial<SignalGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SignalGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get target(): Object;
    set target(val: Object);
    get target_type(): GType;
    get targetType(): GType;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "bind", callback: (_source: this, instance: Object) => void): number;
    connect_after(signal: "bind", callback: (_source: this, instance: Object) => void): number;
    emit(signal: "bind", instance: Object): void;
    connect(signal: "unbind", callback: (_source: this) => void): number;
    connect_after(signal: "unbind", callback: (_source: this) => void): number;
    emit(signal: "unbind"): void;

    // Constructors

    static ["new"](target_type: GType): SignalGroup;

    // Members

    block(): void;
    connect_closure(detailed_signal: string, closure: Closure, after: boolean): void;
    connect_data(detailed_signal: string, c_handler: Callback, notify: ClosureNotify, flags: ConnectFlags): void;
    connect_swapped(detailed_signal: string, c_handler: Callback): void;
    dup_target<T = Object>(): T;
    set_target(target?: Object | null): void;
    unblock(): void;
}
export module TypeModule {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class TypeModule extends Object implements TypePlugin {
    static $gtype: GType<TypeModule>;

    constructor(properties?: Partial<TypeModule.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TypeModule.ConstructorProperties>, ...args: any[]): void;

    // Fields
    use_count: number;
    type_infos: any[];
    interface_infos: any[];
    name: string;

    // Members

    add_interface(instance_type: GType, interface_type: GType, interface_info: InterfaceInfo): void;
    register_enum(name: string, const_static_values: EnumValue): GType;
    register_flags(name: string, const_static_values: FlagsValue): GType;
    register_type(parent_type: GType, type_name: string, type_info: TypeInfo, flags: TypeFlags): GType;
    set_name(name: string): void;
    unuse(): void;
    use(): boolean;
    // Conflicted with GObject.TypePlugin.use
    use(...args: never[]): any;
    vfunc_load(): boolean;
    vfunc_unload(): void;

    // Implemented Members

    complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
}

export class CClosure {
    static $gtype: GType<CClosure>;

    constructor(copy: CClosure);

    // Fields
    closure: Closure;
    callback: any;

    // Members
    static marshal_BOOLEAN__BOXED_BOXED(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_BOOLEAN__FLAGS(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_STRING__OBJECT_POINTER(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__BOOLEAN(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__BOXED(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__CHAR(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__DOUBLE(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__ENUM(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__FLAGS(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__FLOAT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__INT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__LONG(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__OBJECT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__PARAM(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__POINTER(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__STRING(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__UCHAR(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__UINT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__UINT_POINTER(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__ULONG(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__VARIANT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_VOID__VOID(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
    static marshal_generic(
        closure: Closure,
        return_gvalue: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;
}

export class ClosureNotifyData {
    static $gtype: GType<ClosureNotifyData>;

    constructor(copy: ClosureNotifyData);

    // Fields
    data: any;
    notify: ClosureNotify;
}

export class EnumClass {
    static $gtype: GType<EnumClass>;

    constructor(copy: EnumClass);

    // Fields
    g_type_class: TypeClass;
    minimum: number;
    maximum: number;
    n_values: number;
    values: EnumValue;
}

export class EnumValue {
    static $gtype: GType<EnumValue>;

    constructor(
        properties?: Partial<{
            value?: number;
            value_name?: string;
            value_nick?: string;
        }>
    );
    constructor(copy: EnumValue);

    // Fields
    value: number;
    value_name: string;
    value_nick: string;
}

export class FlagsClass {
    static $gtype: GType<FlagsClass>;

    constructor(copy: FlagsClass);

    // Fields
    g_type_class: TypeClass;
    mask: number;
    n_values: number;
    values: FlagsValue;
}

export class FlagsValue {
    static $gtype: GType<FlagsValue>;

    constructor(
        properties?: Partial<{
            value?: number;
            value_name?: string;
            value_nick?: string;
        }>
    );
    constructor(copy: FlagsValue);

    // Fields
    value: number;
    value_name: string;
    value_nick: string;
}

export class InterfaceInfo {
    static $gtype: GType<InterfaceInfo>;

    constructor(copy: InterfaceInfo);

    // Fields
    interface_init: InterfaceInitFunc;
    interface_finalize: InterfaceFinalizeFunc;
    interface_data: any;
}

export class ObjectConstructParam {
    static $gtype: GType<ObjectConstructParam>;

    constructor(copy: ObjectConstructParam);

    // Fields
    pspec: ParamSpec;
    value: Value;
}

export class ParamSpecPool {
    static $gtype: GType<ParamSpecPool>;

    constructor(copy: ParamSpecPool);

    // Members
    free(): void;
    insert(pspec: ParamSpec, owner_type: GType): void;
    list(owner_type: GType): ParamSpec[];
    list_owned(owner_type: GType): ParamSpec[];
    lookup(param_name: string, owner_type: GType, walk_ancestors: boolean): ParamSpec | null;
    remove(pspec: ParamSpec): void;
}

export class ParamSpecTypeInfo {
    static $gtype: GType<ParamSpecTypeInfo>;

    constructor(copy: ParamSpecTypeInfo);

    // Fields
    instance_size: number;
    n_preallocs: number;
    value_type: GType;
}

export class Parameter {
    static $gtype: GType<Parameter>;

    constructor(copy: Parameter);

    // Fields
    name: string;
    value: Value;
}

export class SignalInvocationHint {
    static $gtype: GType<SignalInvocationHint>;

    constructor(copy: SignalInvocationHint);

    // Fields
    signal_id: number;
    detail: GLib.Quark;
    run_type: SignalFlags;
}

export class SignalQuery {
    static $gtype: GType<SignalQuery>;

    constructor(copy: SignalQuery);

    // Fields
    signal_id: number;
    signal_name: string;
    itype: GType;
    signal_flags: SignalFlags;
    return_type: GType;
    n_params: number;
    param_types: GType[];
}

export class TypeClass {
    static $gtype: GType<TypeClass>;

    constructor(copy: TypeClass);

    // Members
    add_private(private_size: number): void;
    get_private(private_type: GType): any | null;
    peek_parent(): TypeClass;
    unref(): void;
    static adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
    static peek(type: GType): TypeClass;
    static peek_static(type: GType): TypeClass;
    static ref(type: GType): TypeClass;
}

export class TypeFundamentalInfo {
    static $gtype: GType<TypeFundamentalInfo>;

    constructor(copy: TypeFundamentalInfo);

    // Fields
    type_flags: TypeFundamentalFlags;
}

export class TypeInfo {
    static $gtype: GType<TypeInfo>;

    constructor(copy: TypeInfo);

    // Fields
    class_size: number;
    base_init: BaseInitFunc;
    base_finalize: BaseFinalizeFunc;
    class_init: ClassInitFunc;
    class_finalize: ClassFinalizeFunc;
    class_data: any;
    instance_size: number;
    n_preallocs: number;
    instance_init: InstanceInitFunc;
    value_table: TypeValueTable;
}

export class TypeInstance {
    static $gtype: GType<TypeInstance>;

    constructor(copy: TypeInstance);

    // Members
    get_private(private_type: GType): any | null;
}

export class TypeInterface {
    static $gtype: GType<TypeInterface>;

    constructor(copy: TypeInterface);

    // Members
    peek_parent(): TypeInterface;
    static add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
    static get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
    static instantiatable_prerequisite(interface_type: GType): GType;
    static peek(instance_class: TypeClass, iface_type: GType): TypeInterface;
    static prerequisites(interface_type: GType): GType[];
}

export class TypePluginClass {
    static $gtype: GType<TypePluginClass>;

    constructor(copy: TypePluginClass);

    // Fields
    use_plugin: TypePluginUse;
    unuse_plugin: TypePluginUnuse;
    complete_type_info: TypePluginCompleteTypeInfo;
    complete_interface_info: TypePluginCompleteInterfaceInfo;
}

export class TypeQuery {
    static $gtype: GType<TypeQuery>;

    constructor(copy: TypeQuery);

    // Fields
    type: GType;
    type_name: string;
    class_size: number;
    instance_size: number;
}

export class TypeValueTable {
    static $gtype: GType<TypeValueTable>;

    constructor(copy: TypeValueTable);

    // Fields
    value_init: TypeValueInitFunc;
    value_free: TypeValueFreeFunc;
    value_copy: TypeValueCopyFunc;
    value_peek_pointer: TypeValuePeekPointerFunc;
    collect_format: string;
    collect_value: TypeValueCollectFunc;
    lcopy_format: string;
    lcopy_value: TypeValueLCopyFunc;
}

export class Value {
    static $gtype: GType<Value>;

    constructor(copy: Value);

    // Fields
    data: _Value__data__union[];

    // Members
    copy(dest_value: Value | any): void;
    dup_object<T = Object>(): T;
    dup_string(): string | null;
    dup_variant(): GLib.Variant | null;
    fits_pointer(): boolean;
    get_boolean(): boolean;
    get_boxed(): any | null;
    get_char(): number;
    get_double(): number;
    get_enum(): number;
    get_flags(): number;
    get_float(): number;
    get_gtype(): GType;
    get_int(): number;
    get_int64(): number;
    get_long(): number;
    get_object<T = Object>(): T;
    get_param(): ParamSpec;
    get_pointer(): any | null;
    get_schar(): number;
    get_string(): string | null;
    get_uchar(): number;
    get_uint(): number;
    get_uint64(): number;
    get_ulong(): number;
    get_variant(): GLib.Variant | null;
    init(g_type: GType): unknown;
    init_from_instance(instance: TypeInstance): void;
    peek_pointer(): any | null;
    reset(): unknown;
    set_boolean(v_boolean: boolean): void;
    set_boxed(v_boxed?: any | null): void;
    set_boxed_take_ownership(v_boxed?: any | null): void;
    set_char(v_char: number): void;
    set_double(v_double: number): void;
    set_enum(v_enum: number): void;
    set_flags(v_flags: number): void;
    set_float(v_float: number): void;
    set_gtype(v_gtype: GType): void;
    set_instance(instance?: any | null): void;
    set_int(v_int: number): void;
    set_int64(v_int64: number): void;
    set_interned_string(v_string?: string | null): void;
    set_long(v_long: number): void;
    set_object(v_object?: Object | null): void;
    set_param(param?: ParamSpec | null): void;
    set_pointer(v_pointer?: any | null): void;
    set_schar(v_char: number): void;
    set_static_boxed(v_boxed?: any | null): void;
    set_static_string(v_string?: string | null): void;
    set_string(v_string?: string | null): void;
    set_string_take_ownership(v_string?: string | null): void;
    set_uchar(v_uchar: number): void;
    set_uint(v_uint: number): void;
    set_uint64(v_uint64: number): void;
    set_ulong(v_ulong: number): void;
    set_variant(variant?: GLib.Variant | null): void;
    steal_string(): string;
    take_boxed(v_boxed?: any | null): void;
    take_string(v_string?: string | null): void;
    take_variant(variant?: GLib.Variant | null): void;
    transform(dest_value: Value | any): boolean;
    unset(): void;
    static type_compatible(src_type: GType, dest_type: GType): boolean;
    static type_transformable(src_type: GType, dest_type: GType): boolean;
}

export class ValueArray {
    static $gtype: GType<ValueArray>;

    constructor(n_prealloced: number);
    constructor(copy: ValueArray);

    // Fields
    n_values: number;
    values: Value;

    // Constructors
    static ["new"](n_prealloced: number): ValueArray;

    // Members
    append(value?: Value | null): ValueArray;
    copy(): ValueArray;
    get_nth(index_: number): unknown;
    insert(index_: number, value?: Value | null): ValueArray;
    prepend(value?: Value | null): ValueArray;
    remove(index_: number): ValueArray;
    sort(compare_func: GLib.CompareFunc): ValueArray;
    sort(compare_func: GLib.CompareDataFunc): ValueArray;
}

export class WeakRef {
    static $gtype: GType<WeakRef>;

    constructor(copy: WeakRef);
}

export class TypeCValue {
    static $gtype: GType<TypeCValue>;

    constructor(copy: TypeCValue);
}

export class _Value__data__union {
    static $gtype: GType<_Value__data__union>;

    constructor(
        properties?: Partial<{
            v_int?: number;
            v_uint?: number;
            v_long?: number;
            v_ulong?: number;
            v_int64?: number;
            v_uint64?: number;
            v_float?: number;
            v_double?: number;
            v_pointer?: any;
        }>
    );
    constructor(copy: _Value__data__union);

    // Fields
    v_int: number;
    v_uint: number;
    v_long: number;
    v_ulong: number;
    v_int64: number;
    v_uint64: number;
    v_float: number;
    v_double: number;
    v_pointer: any;
}

export interface TypePluginNamespace {
    $gtype: GType<TypePlugin>;
    prototype: TypePluginPrototype;
}
export type TypePlugin = TypePluginPrototype;
export interface TypePluginPrototype extends Object {
    // Members

    complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
    unuse(): void;
    use(): void;
}

export const TypePlugin: TypePluginNamespace;

export type SignalCMarshaller = ClosureMarshal;
export type SignalCVaMarshaller = unknown;
export type Type = number;

export type SignalMatch = SignalMatchPrototype;
export interface SignalMatchPrototype {
    // Fields
    signalId: string;
    detail: string;
    func: (...args: any[]) => any;
}

export type Closure<R = any, P = any> = (...args: P[]) => R;
export function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): void;
export function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): void;
export function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): void;
export function signal_handler_find(
    ...args:
        | [Object, SignalMatch]
        | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
): number;
export function signal_handler_find(instance: Object, match: SignalMatch): number;
export function signal_handler_find(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;
export function _real_signal_handler_find(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;
export function signal_handler_block_matched(
    ...args:
        | [Object, SignalMatch]
        | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
): number;
export function signal_handler_block_matched(instance: Object, match: SignalMatch): number;
export function signal_handler_block_matched(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;
export function _real_signal_handler_block_matched(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;
export function signal_handler_block_disconnect_matched(
    ...args:
        | [Object, SignalMatch]
        | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
): number;
export function signal_handler_block_disconnect_matched(instance: Object, match: SignalMatch): number;
export function signal_handler_block_disconnect_matched(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;
export function _real_signal_handler_block_disconnect_matched(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;
export function signal_handler_block_unblock_matched(
    ...args:
        | [Object, SignalMatch]
        | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
): number;
export function signal_handler_block_unblock_matched(instance: Object, match: SignalMatch): number;
export function signal_handler_block_unblock_matched(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;
export function _real_signal_handler_block_unblock_matched(
    instance: Object,
    match: SignalMatchType,
    signal_id: number,
    detail: GLib.Quark,
    closure: Closure | null,
    func: object | null,
    object: object | null
): number;

// GJS OVERRIDES

// __type__ forces all GTypes to not match structurally.

export type GType<T = unknown> = { __type__(arg: never): T };

// Correctly types interface checks.
export function type_is_a<T extends Object>(obj: Object, is_a_type: { $gtype: GType<T> }): obj is T;

export class Interface {
    static _classInit: (klass: any) => any;
    __name__: string;
    _construct: (params: any, ...otherArgs: any[]) => any;
    _init: (params: any) => void;
    $gtype?: GType;
}

export function signal_connect(object: Object, name: string, handler: Function): number;
export function signal_connect_after(object: Object, name: string, handler: Function): number;
export function signal_emit_by_name(object: Object, name: string, ...args: any[]): void;

export const __gtkCssName__: unique symbol;
export const __gtkTemplate__: unique symbol;
export const __gtkChildren__: unique symbol;
export const __gtkInternalChildren__: unique symbol;

// Expose GObject static properties for ES6 classes

export const GTypeName: unique symbol;
export const requires: unique symbol;
export const interfaces: unique symbol;
export const properties: unique symbol;
export const signals: unique symbol;

export enum AccumulatorType {
    NONE,
    FIRST_WINS,
    TRUE_HANDLED,
}

export class NotImplementedError extends Error {}

export let gtypeNameBasedOnJSPath: boolean;

export let TYPE_BOOLEAN: GType<boolean>;
export let Boolean: BooleanConstructor;

export let TYPE_ENUM: GType<number>;
export let TYPE_FLAGS: GType<number>;

export let TYPE_DOUBLE: GType<number>;
export let Double: NumberConstructor;

export let TYPE_STRING: GType<string>;
export let String: StringConstructor;

declare global {
    interface BooleanConstructor {
        $gtype: GType<boolean>;
    }

    interface NumberConstructor {
        $gtype: GType<number>;
    }

    interface StringConstructor {
        $gtype: GType<string>;
    }
}

export let TYPE_NONE: GType<undefined>;
export let TYPE_POINTER: GType<undefined>;
export let TYPE_BOXED: GType<unknown>;
export let TYPE_PARAM: GType<unknown>;
export let TYPE_INTERFACE: GType<unknown>;
export let TYPE_OBJECT: GType<object>;
export let TYPE_VARIANT: GType<GLib.Variant>;
export let TYPE_INT: GType<number>;
export let TYPE_UINT: GType<number>;
export let TYPE_INT64: GType<number>;
export let TYPE_UINT64: GType<number>;

export function registerClass<P extends {}, T extends new (...args: any[]) => P>(klass: T): RegisteredClass<T, {}, []>;

export type Property<K extends ParamSpec> = K extends ParamSpec<infer T> ? T : any;

export type Properties<Prototype extends {}, Properties extends { [key: string]: ParamSpec }> = Omit<
    {
        [key in keyof Properties | keyof Prototype]: key extends keyof Prototype
            ? never
            : key extends keyof Properties
            ? Property<Properties[key]>
            : never;
    },
    keyof Prototype
>;

export type SignalDefinition = {
    param_types?: readonly GType[];
    [key: string]: any;
};

type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;

type IFaces<Interfaces extends { $gtype: GType<any> }[]> = {
    [key in keyof Interfaces]: Interfaces[key] extends { $gtype: GType<infer I> } ? I : never;
};

export type RegisteredPrototype<
    P extends {},
    Props extends { [key: string]: ParamSpec },
    Interfaces extends any[]
> = Properties<P, SnakeToCamel<Props> & SnakeToUnderscore<Props>> & UnionToIntersection<Interfaces[number]> & P;

type SnakeToUnderscoreCase<S extends string> = S extends `${infer T}-${infer U}`
    ? `${T}_${SnakeToUnderscoreCase<U>}`
    : S extends `${infer T}`
    ? `${T}`
    : never;

type SnakeToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
    ? `${Lowercase<T>}${SnakeToPascalCase<U>}`
    : S extends `${infer T}`
    ? `${Lowercase<T>}`
    : SnakeToPascalCase<S>;

type SnakeToPascalCase<S extends string> = string extends S
    ? string
    : S extends `${infer T}-${infer U}`
    ? `${Capitalize<Lowercase<T>>}${SnakeToPascalCase<U>}`
    : S extends `${infer T}`
    ? `${Capitalize<Lowercase<T>>}`
    : never;

type SnakeToCamel<T> = { [P in keyof T as P extends string ? SnakeToCamelCase<P> : P]: T[P] };
type SnakeToUnderscore<T> = { [P in keyof T as P extends string ? SnakeToUnderscoreCase<P> : P]: T[P] };

type Ctor = new (...a: any[]) => object;

type Init = { _init(...args: any[]): void };

export type RegisteredClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType<any> }[]
> = T extends { prototype: infer P }
    ? {
          $gtype: GType<RegisteredClass<T, Props, IFaces<Interfaces>>>;
          new (...args: P extends Init ? Parameters<P["_init"]> : [void]): RegisteredPrototype<
              P,
              Props,
              IFaces<Interfaces>
          >;
          prototype: RegisteredPrototype<P, Props, IFaces<Interfaces>>;
      }
    : never;

export function registerClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly GType[];
            [key: string]: any;
        };
    }
>(
    options: {
        GTypeName?: string;
        GTypeFlags?: TypeFlags;
        Properties?: Props;
        Signals?: Sigs;
        Implements?: Interfaces;
        CssName?: string;
        Template?: string;
        Children?: string[];
        InternalChildren?: string[];
    },
    klass: T
): RegisteredClass<T, Props, Interfaces>;
