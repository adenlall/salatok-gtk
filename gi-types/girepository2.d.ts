/**
 * GIRepository 2.0
 *
 * Generated from 1.79.0
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";

export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const TYPE_TAG_N_TYPES: number;
export function arg_info_get_closure(info: ArgInfo): number;
export function arg_info_get_destroy(info: ArgInfo): number;
export function arg_info_get_direction(info: ArgInfo): Direction;
export function arg_info_get_ownership_transfer(info: ArgInfo): Transfer;
export function arg_info_get_scope(info: ArgInfo): ScopeType;
export function arg_info_get_type(info: ArgInfo): TypeInfo;
export function arg_info_is_caller_allocates(info: ArgInfo): boolean;
export function arg_info_is_optional(info: ArgInfo): boolean;
export function arg_info_is_return_value(info: ArgInfo): boolean;
export function arg_info_is_skip(info: ArgInfo): boolean;
export function arg_info_load_type(info: ArgInfo): TypeInfo;
export function arg_info_may_be_null(info: ArgInfo): boolean;
export function callable_info_can_throw_gerror(info: CallableInfo): boolean;
export function callable_info_get_arg(info: CallableInfo, n: number): ArgInfo;
export function callable_info_get_caller_owns(info: CallableInfo): Transfer;
export function callable_info_get_instance_ownership_transfer(info: CallableInfo): Transfer;
export function callable_info_get_n_args(info: CallableInfo): number;
export function callable_info_get_return_attribute(info: CallableInfo, name: string): string;
export function callable_info_get_return_type(info: CallableInfo): TypeInfo;
export function callable_info_invoke(
    info: CallableInfo,
    _function: any | null,
    in_args: Argument[],
    out_args: Argument[],
    return_value: Argument,
    is_method: boolean,
    _throws: boolean
): boolean;
export function callable_info_is_method(info: CallableInfo): boolean;
export function callable_info_iterate_return_attributes(
    info: CallableInfo,
    iterator: AttributeIter
): [boolean, AttributeIter, string, string];
export function callable_info_load_arg(info: CallableInfo, n: number): ArgInfo;
export function callable_info_load_return_type(info: CallableInfo): TypeInfo;
export function callable_info_may_return_null(info: CallableInfo): boolean;
export function callable_info_skip_return(info: CallableInfo): boolean;
export function cclosure_marshal_generic(
    closure: GObject.Closure,
    return_gvalue: GObject.Value | any,
    n_param_values: number,
    param_values: GObject.Value | any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;
export function constant_info_get_type(info: ConstantInfo): TypeInfo;
export function enum_info_get_error_domain(info: EnumInfo): string;
export function enum_info_get_method(info: EnumInfo, n: number): FunctionInfo;
export function enum_info_get_n_methods(info: EnumInfo): number;
export function enum_info_get_n_values(info: EnumInfo): number;
export function enum_info_get_storage_type(info: EnumInfo): TypeTag;
export function enum_info_get_value(info: EnumInfo, n: number): ValueInfo;
export function field_info_get_flags(info: FieldInfo): FieldInfoFlags;
export function field_info_get_offset(info: FieldInfo): number;
export function field_info_get_size(info: FieldInfo): number;
export function field_info_get_type(info: FieldInfo): TypeInfo;
export function function_info_get_flags(info: FunctionInfo): FunctionInfoFlags;
export function function_info_get_property(info: FunctionInfo): PropertyInfo;
export function function_info_get_symbol(info: FunctionInfo): string;
export function function_info_get_vfunc(info: FunctionInfo): VFuncInfo;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function info_new(type: InfoType, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo;
export function info_type_to_string(type: InfoType): string;
export function interface_info_find_method(info: InterfaceInfo, name: string): FunctionInfo;
export function interface_info_find_signal(info: InterfaceInfo, name: string): SignalInfo;
export function interface_info_find_vfunc(info: InterfaceInfo, name: string): VFuncInfo;
export function interface_info_get_constant(info: InterfaceInfo, n: number): ConstantInfo;
export function interface_info_get_iface_struct(info: InterfaceInfo): StructInfo;
export function interface_info_get_method(info: InterfaceInfo, n: number): FunctionInfo;
export function interface_info_get_n_constants(info: InterfaceInfo): number;
export function interface_info_get_n_methods(info: InterfaceInfo): number;
export function interface_info_get_n_prerequisites(info: InterfaceInfo): number;
export function interface_info_get_n_properties(info: InterfaceInfo): number;
export function interface_info_get_n_signals(info: InterfaceInfo): number;
export function interface_info_get_n_vfuncs(info: InterfaceInfo): number;
export function interface_info_get_prerequisite(info: InterfaceInfo, n: number): BaseInfo;
export function interface_info_get_property(info: InterfaceInfo, n: number): PropertyInfo;
export function interface_info_get_signal(info: InterfaceInfo, n: number): SignalInfo;
export function interface_info_get_vfunc(info: InterfaceInfo, n: number): VFuncInfo;
export function invoke_error_quark(): GLib.Quark;
export function object_info_find_method(info: ObjectInfo, name: string): FunctionInfo | null;
export function object_info_find_method_using_interfaces(
    info: ObjectInfo,
    name: string
): [FunctionInfo | null, ObjectInfo];
export function object_info_find_signal(info: ObjectInfo, name: string): SignalInfo | null;
export function object_info_find_vfunc(info: ObjectInfo, name: string): VFuncInfo | null;
export function object_info_find_vfunc_using_interfaces(info: ObjectInfo, name: string): [VFuncInfo | null, ObjectInfo];
export function object_info_get_abstract(info: ObjectInfo): boolean;
export function object_info_get_class_struct(info: ObjectInfo): StructInfo | null;
export function object_info_get_constant(info: ObjectInfo, n: number): ConstantInfo;
export function object_info_get_field(info: ObjectInfo, n: number): FieldInfo;
export function object_info_get_final(info: ObjectInfo): boolean;
export function object_info_get_fundamental(info: ObjectInfo): boolean;
export function object_info_get_get_value_function(info: ObjectInfo): string | null;
export function object_info_get_interface(info: ObjectInfo, n: number): InterfaceInfo;
export function object_info_get_method(info: ObjectInfo, n: number): FunctionInfo;
export function object_info_get_n_constants(info: ObjectInfo): number;
export function object_info_get_n_fields(info: ObjectInfo): number;
export function object_info_get_n_interfaces(info: ObjectInfo): number;
export function object_info_get_n_methods(info: ObjectInfo): number;
export function object_info_get_n_properties(info: ObjectInfo): number;
export function object_info_get_n_signals(info: ObjectInfo): number;
export function object_info_get_n_vfuncs(info: ObjectInfo): number;
export function object_info_get_parent(info: ObjectInfo): ObjectInfo | null;
export function object_info_get_property(info: ObjectInfo, n: number): PropertyInfo;
export function object_info_get_ref_function(info: ObjectInfo): string | null;
export function object_info_get_set_value_function(info: ObjectInfo): string | null;
export function object_info_get_signal(info: ObjectInfo, n: number): SignalInfo;
export function object_info_get_type_init(info: ObjectInfo): string;
export function object_info_get_type_name(info: ObjectInfo): string;
export function object_info_get_unref_function(info: ObjectInfo): string | null;
export function object_info_get_vfunc(info: ObjectInfo, n: number): VFuncInfo;
export function property_info_get_flags(info: PropertyInfo): GObject.ParamFlags;
export function property_info_get_getter(info: PropertyInfo): FunctionInfo | null;
export function property_info_get_ownership_transfer(info: PropertyInfo): Transfer;
export function property_info_get_setter(info: PropertyInfo): FunctionInfo | null;
export function property_info_get_type(info: PropertyInfo): TypeInfo;
export function registered_type_info_get_g_type(info: RegisteredTypeInfo): GObject.GType;
export function registered_type_info_get_type_init(info: RegisteredTypeInfo): string;
export function registered_type_info_get_type_name(info: RegisteredTypeInfo): string;
export function signal_info_get_class_closure(info: SignalInfo): VFuncInfo;
export function signal_info_get_flags(info: SignalInfo): GObject.SignalFlags;
export function signal_info_true_stops_emit(info: SignalInfo): boolean;
export function struct_info_find_field(info: StructInfo, name: string): FieldInfo;
export function struct_info_find_method(info: StructInfo, name: string): FunctionInfo;
export function struct_info_get_alignment(info: StructInfo): number;
export function struct_info_get_copy_function(info: StructInfo): string | null;
export function struct_info_get_field(info: StructInfo, n: number): FieldInfo;
export function struct_info_get_free_function(info: StructInfo): string | null;
export function struct_info_get_method(info: StructInfo, n: number): FunctionInfo;
export function struct_info_get_n_fields(info: StructInfo): number;
export function struct_info_get_n_methods(info: StructInfo): number;
export function struct_info_get_size(info: StructInfo): number;
export function struct_info_is_foreign(info: StructInfo): boolean;
export function struct_info_is_gtype_struct(info: StructInfo): boolean;
export function type_info_argument_from_hash_pointer(info: TypeInfo, hash_pointer: any | null, arg: Argument): void;
export function type_info_get_array_fixed_size(info: TypeInfo): number;
export function type_info_get_array_length(info: TypeInfo): number;
export function type_info_get_array_type(info: TypeInfo): ArrayType;
export function type_info_get_interface(info: TypeInfo): BaseInfo;
export function type_info_get_param_type(info: TypeInfo, n: number): TypeInfo;
export function type_info_get_storage_type(info: TypeInfo): TypeTag;
export function type_info_get_tag(info: TypeInfo): TypeTag;
export function type_info_hash_pointer_from_argument(info: TypeInfo, arg: Argument): any | null;
export function type_info_is_pointer(info: TypeInfo): boolean;
export function type_info_is_zero_terminated(info: TypeInfo): boolean;
export function type_tag_argument_from_hash_pointer(
    storage_type: TypeTag,
    hash_pointer: any | null,
    arg: Argument
): void;
export function type_tag_hash_pointer_from_argument(storage_type: TypeTag, arg: Argument): any | null;
export function type_tag_to_string(type: TypeTag): string;
export function union_info_find_method(info: UnionInfo, name: string): FunctionInfo;
export function union_info_get_alignment(info: UnionInfo): number;
export function union_info_get_copy_function(info: UnionInfo): string | null;
export function union_info_get_discriminator(info: UnionInfo, n: number): ConstantInfo;
export function union_info_get_discriminator_offset(info: UnionInfo): number;
export function union_info_get_discriminator_type(info: UnionInfo): TypeInfo;
export function union_info_get_field(info: UnionInfo, n: number): FieldInfo;
export function union_info_get_free_function(info: UnionInfo): string | null;
export function union_info_get_method(info: UnionInfo, n: number): FunctionInfo;
export function union_info_get_n_fields(info: UnionInfo): number;
export function union_info_get_n_methods(info: UnionInfo): number;
export function union_info_get_size(info: UnionInfo): number;
export function union_info_is_discriminated(info: UnionInfo): boolean;
export function value_info_get_value(info: ValueInfo): number;
export function vfunc_info_get_address(info: VFuncInfo, implementor_gtype: GObject.GType): any | null;
export function vfunc_info_get_flags(info: VFuncInfo): VFuncInfoFlags;
export function vfunc_info_get_invoker(info: VFuncInfo): FunctionInfo;
export function vfunc_info_get_offset(info: VFuncInfo): number;
export function vfunc_info_get_signal(info: VFuncInfo): SignalInfo;

export namespace ArrayType {
    export const $gtype: GObject.GType<ArrayType>;
}

export enum ArrayType {
    C = 0,
    ARRAY = 1,
    PTR_ARRAY = 2,
    BYTE_ARRAY = 3,
}

export namespace Direction {
    export const $gtype: GObject.GType<Direction>;
}

export enum Direction {
    IN = 0,
    OUT = 1,
    INOUT = 2,
}

export namespace InfoType {
    export const $gtype: GObject.GType<InfoType>;
}

export enum InfoType {
    INVALID = 0,
    FUNCTION = 1,
    CALLBACK = 2,
    STRUCT = 3,
    BOXED = 4,
    ENUM = 5,
    FLAGS = 6,
    OBJECT = 7,
    INTERFACE = 8,
    CONSTANT = 9,
    INVALID_0 = 10,
    UNION = 11,
    VALUE = 12,
    SIGNAL = 13,
    VFUNC = 14,
    PROPERTY = 15,
    FIELD = 16,
    ARG = 17,
    TYPE = 18,
    UNRESOLVED = 19,
}

export namespace RepositoryError {
    export const $gtype: GObject.GType<RepositoryError>;
}

export enum RepositoryError {
    TYPELIB_NOT_FOUND = 0,
    NAMESPACE_MISMATCH = 1,
    NAMESPACE_VERSION_CONFLICT = 2,
    LIBRARY_NOT_FOUND = 3,
}

export namespace ScopeType {
    export const $gtype: GObject.GType<ScopeType>;
}

export enum ScopeType {
    INVALID = 0,
    CALL = 1,
    ASYNC = 2,
    NOTIFIED = 3,
    FOREVER = 4,
}

export namespace Transfer {
    export const $gtype: GObject.GType<Transfer>;
}

export enum Transfer {
    NOTHING = 0,
    CONTAINER = 1,
    EVERYTHING = 2,
}

export namespace TypeTag {
    export const $gtype: GObject.GType<TypeTag>;
}

export enum TypeTag {
    VOID = 0,
    BOOLEAN = 1,
    INT8 = 2,
    UINT8 = 3,
    INT16 = 4,
    UINT16 = 5,
    INT32 = 6,
    UINT32 = 7,
    INT64 = 8,
    UINT64 = 9,
    FLOAT = 10,
    DOUBLE = 11,
    GTYPE = 12,
    UTF8 = 13,
    FILENAME = 14,
    ARRAY = 15,
    INTERFACE = 16,
    GLIST = 17,
    GSLIST = 18,
    GHASH = 19,
    ERROR = 20,
    UNICHAR = 21,
}

export namespace nvokeError {
    export const $gtype: GObject.GType<nvokeError>;
}

export enum nvokeError {
    FAILED = 0,
    SYMBOL_NOT_FOUND = 1,
    ARGUMENT_MISMATCH = 2,
}

export namespace FieldInfoFlags {
    export const $gtype: GObject.GType<FieldInfoFlags>;
}

export enum FieldInfoFlags {
    READABLE = 1,
    WRITABLE = 2,
}

export namespace FunctionInfoFlags {
    export const $gtype: GObject.GType<FunctionInfoFlags>;
}

export enum FunctionInfoFlags {
    IS_METHOD = 1,
    IS_CONSTRUCTOR = 2,
    IS_GETTER = 4,
    IS_SETTER = 8,
    WRAPS_VFUNC = 16,
    THROWS = 32,
}

export namespace RepositoryLoadFlags {
    export const $gtype: GObject.GType<RepositoryLoadFlags>;
}

export enum RepositoryLoadFlags {
    IREPOSITORY_LOAD_FLAG_LAZY = 1,
}

export namespace VFuncInfoFlags {
    export const $gtype: GObject.GType<VFuncInfoFlags>;
}

export enum VFuncInfoFlags {
    MUST_CHAIN_UP = 1,
    MUST_OVERRIDE = 2,
    MUST_NOT_OVERRIDE = 4,
    THROWS = 8,
}
export module Repository {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Repository extends GObject.Object {
    static $gtype: GObject.GType<Repository>;

    constructor(properties?: Partial<Repository.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Repository.ConstructorProperties>, ...args: any[]): void;

    // Members

    enumerate_versions(namespace_: string): string[];
    find_by_error_domain(domain: GLib.Quark): EnumInfo;
    find_by_gtype(gtype: GObject.GType): BaseInfo;
    find_by_name(namespace_: string, name: string): BaseInfo;
    get_c_prefix(namespace_: string): string;
    get_dependencies(namespace_: string): string[];
    get_immediate_dependencies(namespace_: string): string[];
    get_info(namespace_: string, index: number): BaseInfo;
    get_loaded_namespaces(): string[];
    get_n_infos(namespace_: string): number;
    get_object_gtype_interfaces(gtype: GObject.GType): InterfaceInfo[];
    get_shared_library(namespace_: string): string | null;
    get_typelib_path(namespace_: string): string;
    get_version(namespace_: string): string;
    is_registered(namespace_: string, version?: string | null): boolean;
    load_typelib(typelib: Typelib, flags: RepositoryLoadFlags): string;
    require(namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib;
    require_private(
        typelib_dir: string,
        namespace_: string,
        version: string | null,
        flags: RepositoryLoadFlags
    ): Typelib;
    static dump(arg: string): boolean;
    static error_quark(): GLib.Quark;
    static get_default(): Repository;
    static get_option_group(): GLib.OptionGroup;
    static get_search_path(): string[];
    static prepend_library_path(directory: string): void;
    static prepend_search_path(directory: string): void;
}

export class AttributeIter {
    static $gtype: GObject.GType<AttributeIter>;

    constructor(copy: AttributeIter);
}

export class BaseInfo {
    static $gtype: GObject.GType<BaseInfo>;

    constructor(copy: BaseInfo);

    // Members
    equal(info2: BaseInfo): boolean;
    get_attribute(name: string): string;
    get_container(): BaseInfo;
    get_name(): string;
    get_namespace(): string;
    get_type(): InfoType;
    get_typelib(): Typelib;
    is_deprecated(): boolean;
    iterate_attributes(iterator: AttributeIter): [boolean, AttributeIter, string, string];
}

export class RepositoryPrivate {
    static $gtype: GObject.GType<RepositoryPrivate>;

    constructor(copy: RepositoryPrivate);
}

export class Typelib {
    static $gtype: GObject.GType<Typelib>;

    constructor(copy: Typelib);

    // Members
    free(): void;
    get_namespace(): string;
    symbol(symbol_name: string, symbol?: any | null): boolean;
}

export class UnresolvedInfo {
    static $gtype: GObject.GType<UnresolvedInfo>;

    constructor(copy: UnresolvedInfo);
}

export class Argument {
    static $gtype: GObject.GType<Argument>;

    constructor(
        properties?: Partial<{
            v_boolean?: boolean;
            v_int8?: number;
            v_uint8?: number;
            v_int16?: number;
            v_uint16?: number;
            v_int32?: number;
            v_uint32?: number;
            v_int64?: number;
            v_uint64?: number;
            v_float?: number;
            v_double?: number;
            v_short?: number;
            v_ushort?: number;
            v_int?: number;
            v_uint?: number;
            v_long?: number;
            v_ulong?: number;
            v_ssize?: number;
            v_size?: number;
            v_string?: string;
            v_pointer?: any;
        }>
    );
    constructor(copy: Argument);

    // Fields
    v_boolean: boolean;
    v_int8: number;
    v_uint8: number;
    v_int16: number;
    v_uint16: number;
    v_int32: number;
    v_uint32: number;
    v_int64: number;
    v_uint64: number;
    v_float: number;
    v_double: number;
    v_short: number;
    v_ushort: number;
    v_int: number;
    v_uint: number;
    v_long: number;
    v_ulong: number;
    v_ssize: number;
    v_size: number;
    v_string: string;
    v_pointer: any;
}
export type ArgInfo = BaseInfo;
export type CallableInfo = BaseInfo;
export type CallbackInfo = BaseInfo;
export type ConstantInfo = BaseInfo;
export type EnumInfo = BaseInfo;
export type FieldInfo = BaseInfo;
export type FunctionInfo = BaseInfo;
export type InterfaceInfo = BaseInfo;
export type ObjectInfo = BaseInfo;
export type PropertyInfo = BaseInfo;
export type RegisteredTypeInfo = BaseInfo;
export type SignalInfo = BaseInfo;
export type StructInfo = BaseInfo;
export type TypeInfo = BaseInfo;
export type UnionInfo = BaseInfo;
export type VFuncInfo = BaseInfo;
export type ValueInfo = BaseInfo;
