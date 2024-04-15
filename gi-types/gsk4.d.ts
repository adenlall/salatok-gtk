/**
 * Gsk 4.0
 *
 * Generated from 4.0
 */

import * as Gdk from "gdk4";
import * as GObject from "gobject2";
import * as Graphene from "graphene1";
import * as GLib from "glib2";
import * as cairo from "cairo1";
import * as Pango from "pango1";

export function path_parse(string: string): Path | null;
export function serialization_error_quark(): GLib.Quark;
export function stroke_equal(stroke1?: any | null, stroke2?: any | null): boolean;
export function transform_parse(string: string): [boolean, Transform];
export function value_dup_render_node(value: GObject.Value | any): RenderNode | null;
export function value_get_render_node(value: GObject.Value | any): RenderNode | null;
export function value_set_render_node(value: GObject.Value | any, node: RenderNode): void;
export function value_take_render_node(value: GObject.Value | any, node?: RenderNode | null): void;
export type ParseErrorFunc = (start: ParseLocation, end: ParseLocation, error: GLib.Error) => void;
export type PathForeachFunc = (op: PathOperation, pts: Graphene.Point, n_pts: number, weight: number) => boolean;

export namespace BlendMode {
    export const $gtype: GObject.GType<BlendMode>;
}

export enum BlendMode {
    DEFAULT = 0,
    MULTIPLY = 1,
    SCREEN = 2,
    OVERLAY = 3,
    DARKEN = 4,
    LIGHTEN = 5,
    COLOR_DODGE = 6,
    COLOR_BURN = 7,
    HARD_LIGHT = 8,
    SOFT_LIGHT = 9,
    DIFFERENCE = 10,
    EXCLUSION = 11,
    COLOR = 12,
    HUE = 13,
    SATURATION = 14,
    LUMINOSITY = 15,
}

export namespace Corner {
    export const $gtype: GObject.GType<Corner>;
}

export enum Corner {
    TOP_LEFT = 0,
    TOP_RIGHT = 1,
    BOTTOM_RIGHT = 2,
    BOTTOM_LEFT = 3,
}

export namespace FillRule {
    export const $gtype: GObject.GType<FillRule>;
}

export enum FillRule {
    WINDING = 0,
    EVEN_ODD = 1,
}

export namespace GLUniformType {
    export const $gtype: GObject.GType<GLUniformType>;
}

export enum GLUniformType {
    NONE = 0,
    FLOAT = 1,
    INT = 2,
    UINT = 3,
    BOOL = 4,
    VEC2 = 5,
    VEC3 = 6,
    VEC4 = 7,
}

export namespace LineCap {
    export const $gtype: GObject.GType<LineCap>;
}

export enum LineCap {
    BUTT = 0,
    ROUND = 1,
    SQUARE = 2,
}

export namespace LineJoin {
    export const $gtype: GObject.GType<LineJoin>;
}

export enum LineJoin {
    MITER = 0,
    ROUND = 1,
    BEVEL = 2,
}

export namespace MaskMode {
    export const $gtype: GObject.GType<MaskMode>;
}

export enum MaskMode {
    ALPHA = 0,
    INVERTED_ALPHA = 1,
    LUMINANCE = 2,
    INVERTED_LUMINANCE = 3,
}

export namespace PathDirection {
    export const $gtype: GObject.GType<PathDirection>;
}

export enum PathDirection {
    FROM_START = 0,
    TO_START = 1,
    TO_END = 2,
    FROM_END = 3,
}

export namespace PathOperation {
    export const $gtype: GObject.GType<PathOperation>;
}

export enum PathOperation {
    MOVE = 0,
    CLOSE = 1,
    LINE = 2,
    QUAD = 3,
    CUBIC = 4,
    CONIC = 5,
}

export namespace RenderNodeType {
    export const $gtype: GObject.GType<RenderNodeType>;
}

export enum RenderNodeType {
    NOT_A_RENDER_NODE = 0,
    CONTAINER_NODE = 1,
    CAIRO_NODE = 2,
    COLOR_NODE = 3,
    LINEAR_GRADIENT_NODE = 4,
    REPEATING_LINEAR_GRADIENT_NODE = 5,
    RADIAL_GRADIENT_NODE = 6,
    REPEATING_RADIAL_GRADIENT_NODE = 7,
    CONIC_GRADIENT_NODE = 8,
    BORDER_NODE = 9,
    TEXTURE_NODE = 10,
    INSET_SHADOW_NODE = 11,
    OUTSET_SHADOW_NODE = 12,
    TRANSFORM_NODE = 13,
    OPACITY_NODE = 14,
    COLOR_MATRIX_NODE = 15,
    REPEAT_NODE = 16,
    CLIP_NODE = 17,
    ROUNDED_CLIP_NODE = 18,
    SHADOW_NODE = 19,
    BLEND_NODE = 20,
    CROSS_FADE_NODE = 21,
    TEXT_NODE = 22,
    BLUR_NODE = 23,
    DEBUG_NODE = 24,
    GL_SHADER_NODE = 25,
    TEXTURE_SCALE_NODE = 26,
    MASK_NODE = 27,
    FILL_NODE = 28,
    STROKE_NODE = 29,
    SUBSURFACE_NODE = 30,
}

export namespace ScalingFilter {
    export const $gtype: GObject.GType<ScalingFilter>;
}

export enum ScalingFilter {
    LINEAR = 0,
    NEAREST = 1,
    TRILINEAR = 2,
}

export class SerializationError extends GLib.Error {
    static $gtype: GObject.GType<SerializationError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SerializationError);

    // Fields
    static UNSUPPORTED_FORMAT: number;
    static UNSUPPORTED_VERSION: number;
    static INVALID_DATA: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace TransformCategory {
    export const $gtype: GObject.GType<TransformCategory>;
}

export enum TransformCategory {
    UNKNOWN = 0,
    ANY = 1,
    "3D" = 2,
    "2D" = 3,
    "2D_AFFINE" = 4,
    "2D_TRANSLATE" = 5,
    IDENTITY = 6,
}

export namespace PathForeachFlags {
    export const $gtype: GObject.GType<PathForeachFlags>;
}

export enum PathForeachFlags {
    ONLY_LINES = 0,
    QUAD = 1,
    CUBIC = 2,
    CONIC = 4,
}
export module BlendNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class BlendNode extends RenderNode {
    static $gtype: GObject.GType<BlendNode>;

    constructor(properties?: Partial<BlendNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BlendNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode;

    // Members

    get_blend_mode(): BlendMode;
    get_bottom_child(): RenderNode;
    get_top_child(): RenderNode;
}
export module BlurNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class BlurNode extends RenderNode {
    static $gtype: GObject.GType<BlurNode>;

    constructor(properties?: Partial<BlurNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BlurNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, radius: number): BlurNode;

    // Members

    get_child(): RenderNode;
    get_radius(): number;
}
export module BorderNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class BorderNode extends RenderNode {
    static $gtype: GObject.GType<BorderNode>;

    constructor(properties?: Partial<BorderNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BorderNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode;

    // Members

    get_colors(): Gdk.RGBA;
    get_outline(): RoundedRect;
    get_widths(): number[];
}
export module BroadwayRenderer {
    export interface ConstructorProperties extends Renderer.ConstructorProperties {
        [key: string]: any;
    }
}
export class BroadwayRenderer extends Renderer {
    static $gtype: GObject.GType<BroadwayRenderer>;

    constructor(properties?: Partial<BroadwayRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BroadwayRenderer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): BroadwayRenderer;
}
export module CairoNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class CairoNode extends RenderNode {
    static $gtype: GObject.GType<CairoNode>;

    constructor(properties?: Partial<CairoNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CairoNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](bounds: Graphene.Rect): CairoNode;

    // Members

    get_draw_context(): cairo.Context;
    get_surface(): cairo.Surface;
}
export module CairoRenderer {
    export interface ConstructorProperties extends Renderer.ConstructorProperties {
        [key: string]: any;
    }
}
export class CairoRenderer extends Renderer {
    static $gtype: GObject.GType<CairoRenderer>;

    constructor(properties?: Partial<CairoRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CairoRenderer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): CairoRenderer;
}
export module ClipNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClipNode extends RenderNode {
    static $gtype: GObject.GType<ClipNode>;

    constructor(properties?: Partial<ClipNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClipNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, clip: Graphene.Rect): ClipNode;

    // Members

    get_child(): RenderNode;
    get_clip(): Graphene.Rect;
}
export module ColorMatrixNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ColorMatrixNode extends RenderNode {
    static $gtype: GObject.GType<ColorMatrixNode>;

    constructor(properties?: Partial<ColorMatrixNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorMatrixNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode;

    // Members

    get_child(): RenderNode;
    get_color_matrix(): Graphene.Matrix;
    get_color_offset(): Graphene.Vec4;
}
export module ColorNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ColorNode extends RenderNode {
    static $gtype: GObject.GType<ColorNode>;

    constructor(properties?: Partial<ColorNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode;

    // Members

    get_color(): Gdk.RGBA;
}
export module ConicGradientNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ConicGradientNode extends RenderNode {
    static $gtype: GObject.GType<ConicGradientNode>;

    constructor(properties?: Partial<ConicGradientNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ConicGradientNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        bounds: Graphene.Rect,
        center: Graphene.Point,
        rotation: number,
        color_stops: ColorStop[]
    ): ConicGradientNode;

    // Members

    get_angle(): number;
    get_center(): Graphene.Point;
    get_color_stops(): ColorStop[];
    get_n_color_stops(): number;
    get_rotation(): number;
}
export module ContainerNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContainerNode extends RenderNode {
    static $gtype: GObject.GType<ContainerNode>;

    constructor(properties?: Partial<ContainerNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContainerNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](children: RenderNode[]): ContainerNode;

    // Members

    get_child(idx: number): RenderNode;
    get_n_children(): number;
}
export module CrossFadeNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class CrossFadeNode extends RenderNode {
    static $gtype: GObject.GType<CrossFadeNode>;

    constructor(properties?: Partial<CrossFadeNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CrossFadeNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](start: RenderNode, end: RenderNode, progress: number): CrossFadeNode;

    // Members

    get_end_child(): RenderNode;
    get_progress(): number;
    get_start_child(): RenderNode;
}
export module DebugNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class DebugNode extends RenderNode {
    static $gtype: GObject.GType<DebugNode>;

    constructor(properties?: Partial<DebugNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DebugNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, message: string): DebugNode;

    // Members

    get_child(): RenderNode;
    get_message(): string;
}
export module FillNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class FillNode extends RenderNode {
    static $gtype: GObject.GType<FillNode>;

    constructor(properties?: Partial<FillNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FillNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, path: Path, fill_rule: FillRule): FillNode;

    // Members

    get_child(): RenderNode;
    get_fill_rule(): FillRule;
    get_path(): Path;
}
export module GLRenderer {
    export interface ConstructorProperties extends Renderer.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLRenderer extends Renderer {
    static $gtype: GObject.GType<GLRenderer>;

    constructor(properties?: Partial<GLRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLRenderer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): GLRenderer;
}
export module GLShader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        resource: string;
        source: GLib.Bytes;
    }
}
export class GLShader extends GObject.Object {
    static $gtype: GObject.GType<GLShader>;

    constructor(properties?: Partial<GLShader.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLShader.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get resource(): string;
    get source(): GLib.Bytes;

    // Constructors

    static new_from_bytes(sourcecode: GLib.Bytes | Uint8Array): GLShader;
    static new_from_resource(resource_path: string): GLShader;

    // Members

    compile(renderer: Renderer): boolean;
    find_uniform_by_name(name: string): number;
    get_arg_bool(args: GLib.Bytes | Uint8Array, idx: number): boolean;
    get_arg_float(args: GLib.Bytes | Uint8Array, idx: number): number;
    get_arg_int(args: GLib.Bytes | Uint8Array, idx: number): number;
    get_arg_uint(args: GLib.Bytes | Uint8Array, idx: number): number;
    get_arg_vec2(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec2): void;
    get_arg_vec3(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec3): void;
    get_arg_vec4(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec4): void;
    get_args_size(): number;
    get_n_textures(): number;
    get_n_uniforms(): number;
    get_resource(): string | null;
    get_source(): GLib.Bytes;
    get_uniform_name(idx: number): string;
    get_uniform_offset(idx: number): number;
    get_uniform_type(idx: number): GLUniformType;
}
export module GLShaderNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class GLShaderNode extends RenderNode {
    static $gtype: GObject.GType<GLShaderNode>;

    constructor(properties?: Partial<GLShaderNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLShaderNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        shader: GLShader,
        bounds: Graphene.Rect,
        args: GLib.Bytes | Uint8Array,
        children?: RenderNode[] | null
    ): GLShaderNode;

    // Members

    get_args(): GLib.Bytes;
    get_child(idx: number): RenderNode;
    get_n_children(): number;
    get_shader(): GLShader;
}
export module InsetShadowNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class InsetShadowNode extends RenderNode {
    static $gtype: GObject.GType<InsetShadowNode>;

    constructor(properties?: Partial<InsetShadowNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InsetShadowNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        outline: RoundedRect,
        color: Gdk.RGBA,
        dx: number,
        dy: number,
        spread: number,
        blur_radius: number
    ): InsetShadowNode;

    // Members

    get_blur_radius(): number;
    get_color(): Gdk.RGBA;
    get_dx(): number;
    get_dy(): number;
    get_outline(): RoundedRect;
    get_spread(): number;
}
export module LinearGradientNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class LinearGradientNode extends RenderNode {
    static $gtype: GObject.GType<LinearGradientNode>;

    constructor(properties?: Partial<LinearGradientNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LinearGradientNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        bounds: Graphene.Rect,
        start: Graphene.Point,
        end: Graphene.Point,
        color_stops: ColorStop[]
    ): LinearGradientNode;

    // Members

    get_color_stops(): ColorStop[];
    get_end(): Graphene.Point;
    get_n_color_stops(): number;
    get_start(): Graphene.Point;
}
export module MaskNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class MaskNode extends RenderNode {
    static $gtype: GObject.GType<MaskNode>;

    constructor(properties?: Partial<MaskNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MaskNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](source: RenderNode, mask: RenderNode, mask_mode: MaskMode): MaskNode;

    // Members

    get_mask(): RenderNode;
    get_mask_mode(): MaskMode;
    get_source(): RenderNode;
}
export module NglRenderer {
    export interface ConstructorProperties extends Renderer.ConstructorProperties {
        [key: string]: any;
    }
}
export class NglRenderer extends Renderer {
    static $gtype: GObject.GType<NglRenderer>;

    constructor(properties?: Partial<NglRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NglRenderer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): NglRenderer;
}
export module OpacityNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class OpacityNode extends RenderNode {
    static $gtype: GObject.GType<OpacityNode>;

    constructor(properties?: Partial<OpacityNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<OpacityNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, opacity: number): OpacityNode;

    // Members

    get_child(): RenderNode;
    get_opacity(): number;
}
export module OutsetShadowNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class OutsetShadowNode extends RenderNode {
    static $gtype: GObject.GType<OutsetShadowNode>;

    constructor(properties?: Partial<OutsetShadowNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<OutsetShadowNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        outline: RoundedRect,
        color: Gdk.RGBA,
        dx: number,
        dy: number,
        spread: number,
        blur_radius: number
    ): OutsetShadowNode;

    // Members

    get_blur_radius(): number;
    get_color(): Gdk.RGBA;
    get_dx(): number;
    get_dy(): number;
    get_outline(): RoundedRect;
    get_spread(): number;
}
export module RadialGradientNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class RadialGradientNode extends RenderNode {
    static $gtype: GObject.GType<RadialGradientNode>;

    constructor(properties?: Partial<RadialGradientNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadialGradientNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        bounds: Graphene.Rect,
        center: Graphene.Point,
        hradius: number,
        vradius: number,
        start: number,
        end: number,
        color_stops: ColorStop[]
    ): RadialGradientNode;

    // Members

    get_center(): Graphene.Point;
    get_color_stops(): ColorStop[];
    get_end(): number;
    get_hradius(): number;
    get_n_color_stops(): number;
    get_start(): number;
    get_vradius(): number;
}
export module RenderNode {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class RenderNode {
    static $gtype: GObject.GType<RenderNode>;

    constructor(properties?: Partial<RenderNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RenderNode.ConstructorProperties>, ...args: any[]): void;

    // Members

    draw(cr: cairo.Context): void;
    get_bounds(): Graphene.Rect;
    get_node_type(): RenderNodeType;
    ref(): RenderNode;
    serialize(): GLib.Bytes;
    unref(): void;
    write_to_file(filename: string): boolean;
    static deserialize(bytes: GLib.Bytes | Uint8Array): RenderNode | null;
}
export module Renderer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        realized: boolean;
        surface: Gdk.Surface;
    }
}
export abstract class Renderer extends GObject.Object {
    static $gtype: GObject.GType<Renderer>;

    constructor(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Renderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get realized(): boolean;
    get surface(): Gdk.Surface;

    // Constructors

    static new_for_surface(surface: Gdk.Surface): Renderer;

    // Members

    get_surface(): Gdk.Surface | null;
    is_realized(): boolean;
    realize(surface?: Gdk.Surface | null): boolean;
    render(root: RenderNode, region?: cairo.Region | null): void;
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture;
    unrealize(): void;
}
export module RepeatNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class RepeatNode extends RenderNode {
    static $gtype: GObject.GType<RepeatNode>;

    constructor(properties?: Partial<RepeatNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RepeatNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null): RepeatNode;

    // Members

    get_child(): RenderNode;
    get_child_bounds(): Graphene.Rect;
}
export module RepeatingLinearGradientNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class RepeatingLinearGradientNode extends RenderNode {
    static $gtype: GObject.GType<RepeatingLinearGradientNode>;

    constructor(properties?: Partial<RepeatingLinearGradientNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RepeatingLinearGradientNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        bounds: Graphene.Rect,
        start: Graphene.Point,
        end: Graphene.Point,
        color_stops: ColorStop[]
    ): RepeatingLinearGradientNode;
}
export module RepeatingRadialGradientNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class RepeatingRadialGradientNode extends RenderNode {
    static $gtype: GObject.GType<RepeatingRadialGradientNode>;

    constructor(properties?: Partial<RepeatingRadialGradientNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RepeatingRadialGradientNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](
        bounds: Graphene.Rect,
        center: Graphene.Point,
        hradius: number,
        vradius: number,
        start: number,
        end: number,
        color_stops: ColorStop[]
    ): RepeatingRadialGradientNode;
}
export module RoundedClipNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class RoundedClipNode extends RenderNode {
    static $gtype: GObject.GType<RoundedClipNode>;

    constructor(properties?: Partial<RoundedClipNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RoundedClipNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, clip: RoundedRect): RoundedClipNode;

    // Members

    get_child(): RenderNode;
    get_clip(): RoundedRect;
}
export module ShadowNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ShadowNode extends RenderNode {
    static $gtype: GObject.GType<ShadowNode>;

    constructor(properties?: Partial<ShadowNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShadowNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, shadows: Shadow[]): ShadowNode;

    // Members

    get_child(): RenderNode;
    get_n_shadows(): number;
    get_shadow(i: number): Shadow;
}
export module StrokeNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class StrokeNode extends RenderNode {
    static $gtype: GObject.GType<StrokeNode>;

    constructor(properties?: Partial<StrokeNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StrokeNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, path: Path, stroke: Stroke): StrokeNode;

    // Members

    get_child(): RenderNode;
    get_path(): Path;
    get_stroke(): Stroke;
}
export module SubsurfaceNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class SubsurfaceNode extends RenderNode {
    static $gtype: GObject.GType<SubsurfaceNode>;

    constructor(properties?: Partial<SubsurfaceNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SubsurfaceNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, subsurface?: any | null): SubsurfaceNode;

    // Members

    get_child(): RenderNode;
    static get_subsurface(node: DebugNode): any | null;
}
export module TextNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextNode extends RenderNode {
    static $gtype: GObject.GType<TextNode>;

    constructor(properties?: Partial<TextNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode;

    // Members

    get_color(): Gdk.RGBA;
    get_font(): Pango.Font;
    get_glyphs(): Pango.GlyphInfo[];
    get_num_glyphs(): number;
    get_offset(): Graphene.Point;
    has_color_glyphs(): boolean;
}
export module TextureNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextureNode extends RenderNode {
    static $gtype: GObject.GType<TextureNode>;

    constructor(properties?: Partial<TextureNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextureNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode;

    // Members

    get_texture(): Gdk.Texture;
}
export module TextureScaleNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextureScaleNode extends RenderNode {
    static $gtype: GObject.GType<TextureScaleNode>;

    constructor(properties?: Partial<TextureScaleNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextureScaleNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](texture: Gdk.Texture, bounds: Graphene.Rect, filter: ScalingFilter): TextureScaleNode;

    // Members

    get_filter(): ScalingFilter;
    get_texture(): Gdk.Texture;
}
export module TransformNode {
    export interface ConstructorProperties extends RenderNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TransformNode extends RenderNode {
    static $gtype: GObject.GType<TransformNode>;

    constructor(properties?: Partial<TransformNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TransformNode.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](child: RenderNode, transform: Transform): TransformNode;

    // Members

    get_child(): RenderNode;
    get_transform(): Transform;
}
export module VulkanRenderer {
    export interface ConstructorProperties extends Renderer.ConstructorProperties {
        [key: string]: any;
    }
}
export class VulkanRenderer extends Renderer {
    static $gtype: GObject.GType<VulkanRenderer>;

    constructor(properties?: Partial<VulkanRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VulkanRenderer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): VulkanRenderer;
}

export class ColorStop {
    static $gtype: GObject.GType<ColorStop>;

    constructor(
        properties?: Partial<{
            offset?: number;
            color?: Gdk.RGBA;
        }>
    );
    constructor(copy: ColorStop);

    // Fields
    offset: number;
    color: Gdk.RGBA;
}

export class ParseLocation {
    static $gtype: GObject.GType<ParseLocation>;

    constructor(
        properties?: Partial<{
            bytes?: number;
            chars?: number;
            lines?: number;
            line_bytes?: number;
            line_chars?: number;
        }>
    );
    constructor(copy: ParseLocation);

    // Fields
    bytes: number;
    chars: number;
    lines: number;
    line_bytes: number;
    line_chars: number;
}

export class Path {
    static $gtype: GObject.GType<Path>;

    constructor(copy: Path);

    // Members
    foreach(flags: PathForeachFlags, func: PathForeachFunc): boolean;
    get_bounds(): [boolean, Graphene.Rect];
    get_closest_point(point: Graphene.Point, threshold: number): [boolean, PathPoint, number];
    get_end_point(): [boolean, PathPoint];
    get_start_point(): [boolean, PathPoint];
    get_stroke_bounds(stroke: Stroke): [boolean, Graphene.Rect];
    in_fill(point: Graphene.Point, fill_rule: FillRule): boolean;
    is_closed(): boolean;
    is_empty(): boolean;
    print(string: GLib.String): void;
    ref(): Path;
    to_cairo(cr: cairo.Context): void;
    to_string(): string;
    unref(): void;
    static parse(string: string): Path | null;
}

export class PathBuilder {
    static $gtype: GObject.GType<PathBuilder>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: PathBuilder);

    // Constructors
    static ["new"](): PathBuilder;

    // Members
    add_cairo_path(path: cairo.Path): void;
    add_circle(center: Graphene.Point, radius: number): void;
    add_layout(layout: Pango.Layout): void;
    add_path(path: Path): void;
    add_rect(rect: Graphene.Rect): void;
    add_reverse_path(path: Path): void;
    add_rounded_rect(rect: RoundedRect): void;
    add_segment(path: Path, start: PathPoint, end: PathPoint): void;
    arc_to(x1: number, y1: number, x2: number, y2: number): void;
    close(): void;
    conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void;
    cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    get_current_point(): Graphene.Point;
    html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    line_to(x: number, y: number): void;
    move_to(x: number, y: number): void;
    quad_to(x1: number, y1: number, x2: number, y2: number): void;
    ref(): PathBuilder;
    rel_arc_to(x1: number, y1: number, x2: number, y2: number): void;
    rel_conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void;
    rel_cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    rel_html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    rel_line_to(x: number, y: number): void;
    rel_move_to(x: number, y: number): void;
    rel_quad_to(x1: number, y1: number, x2: number, y2: number): void;
    rel_svg_arc_to(
        rx: number,
        ry: number,
        x_axis_rotation: number,
        large_arc: boolean,
        positive_sweep: boolean,
        x: number,
        y: number
    ): void;
    svg_arc_to(
        rx: number,
        ry: number,
        x_axis_rotation: number,
        large_arc: boolean,
        positive_sweep: boolean,
        x: number,
        y: number
    ): void;
    to_path(): Path;
    unref(): void;
}

export class PathMeasure {
    static $gtype: GObject.GType<PathMeasure>;

    constructor(path: Path);
    constructor(copy: PathMeasure);

    // Constructors
    static ["new"](path: Path): PathMeasure;
    static new_with_tolerance(path: Path, tolerance: number): PathMeasure;

    // Members
    get_length(): number;
    get_path(): Path;
    get_point(distance: number): [boolean, PathPoint];
    get_tolerance(): number;
    ref(): PathMeasure;
    unref(): void;
}

export class PathPoint {
    static $gtype: GObject.GType<PathPoint>;

    constructor(copy: PathPoint);

    // Members
    compare(point2: PathPoint): number;
    copy(): PathPoint;
    equal(point2: PathPoint): boolean;
    free(): void;
    get_curvature(path: Path, direction: PathDirection): [number, Graphene.Point | null];
    get_distance(measure: PathMeasure): number;
    get_position(path: Path): Graphene.Point;
    get_rotation(path: Path, direction: PathDirection): number;
    get_tangent(path: Path, direction: PathDirection): Graphene.Vec2;
}

export class RoundedRect {
    static $gtype: GObject.GType<RoundedRect>;

    constructor(copy: RoundedRect);

    // Fields
    bounds: Graphene.Rect;
    corner: Graphene.Size[];

    // Members
    contains_point(point: Graphene.Point): boolean;
    contains_rect(rect: Graphene.Rect): boolean;
    init(
        bounds: Graphene.Rect,
        top_left: Graphene.Size,
        top_right: Graphene.Size,
        bottom_right: Graphene.Size,
        bottom_left: Graphene.Size
    ): RoundedRect;
    init_copy(src: RoundedRect): RoundedRect;
    init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect;
    intersects_rect(rect: Graphene.Rect): boolean;
    is_rectilinear(): boolean;
    normalize(): RoundedRect;
    offset(dx: number, dy: number): RoundedRect;
    shrink(top: number, right: number, bottom: number, left: number): RoundedRect;
}

export class ShaderArgsBuilder {
    static $gtype: GObject.GType<ShaderArgsBuilder>;

    constructor(shader: GLShader, initial_values?: GLib.Bytes | null);
    constructor(copy: ShaderArgsBuilder);

    // Constructors
    static ["new"](shader: GLShader, initial_values?: GLib.Bytes | null): ShaderArgsBuilder;

    // Members
    ref(): ShaderArgsBuilder;
    set_bool(idx: number, value: boolean): void;
    set_float(idx: number, value: number): void;
    set_int(idx: number, value: number): void;
    set_uint(idx: number, value: number): void;
    set_vec2(idx: number, value: Graphene.Vec2): void;
    set_vec3(idx: number, value: Graphene.Vec3): void;
    set_vec4(idx: number, value: Graphene.Vec4): void;
    to_args(): GLib.Bytes;
    unref(): void;
}

export class Shadow {
    static $gtype: GObject.GType<Shadow>;

    constructor(
        properties?: Partial<{
            color?: Gdk.RGBA;
            dx?: number;
            dy?: number;
            radius?: number;
        }>
    );
    constructor(copy: Shadow);

    // Fields
    color: Gdk.RGBA;
    dx: number;
    dy: number;
    radius: number;
}

export class Stroke {
    static $gtype: GObject.GType<Stroke>;

    constructor(line_width: number);
    constructor(copy: Stroke);

    // Constructors
    static ["new"](line_width: number): Stroke;

    // Members
    copy(): Stroke;
    free(): void;
    get_dash(): number[] | null;
    get_dash_offset(): number;
    get_line_cap(): LineCap;
    get_line_join(): LineJoin;
    get_line_width(): number;
    get_miter_limit(): number;
    set_dash(dash?: number[] | null): void;
    set_dash_offset(offset: number): void;
    set_line_cap(line_cap: LineCap): void;
    set_line_join(line_join: LineJoin): void;
    set_line_width(line_width: number): void;
    set_miter_limit(limit: number): void;
    to_cairo(cr: cairo.Context): void;
    static equal(stroke1?: any | null, stroke2?: any | null): boolean;
}

export class Transform {
    static $gtype: GObject.GType<Transform>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: Transform);

    // Constructors
    static ["new"](): Transform;

    // Members
    equal(second?: Transform | null): boolean;
    get_category(): TransformCategory;
    invert(): Transform | null;
    matrix(matrix: Graphene.Matrix): Transform;
    perspective(depth: number): Transform;
    print(string: GLib.String): void;
    ref(): Transform | null;
    rotate(angle: number): Transform | null;
    rotate_3d(angle: number, axis: Graphene.Vec3): Transform | null;
    scale(factor_x: number, factor_y: number): Transform | null;
    scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform | null;
    skew(skew_x: number, skew_y: number): Transform | null;
    to_2d(): [number, number, number, number, number, number];
    to_2d_components(): [number, number, number, number, number, number, number];
    to_affine(): [number, number, number, number];
    to_matrix(): Graphene.Matrix;
    to_string(): string;
    to_translate(): [number, number];
    transform(other?: Transform | null): Transform | null;
    transform_bounds(rect: Graphene.Rect): Graphene.Rect;
    transform_point(point: Graphene.Point): Graphene.Point;
    translate(point: Graphene.Point): Transform | null;
    translate_3d(point: Graphene.Point3D): Transform | null;
    unref(): void;
    static parse(string: string): [boolean, Transform];
}
