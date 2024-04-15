/**
 * PangoCairo 1.0
 *
 * Generated from 1.0
 */

import * as Pango from "pango1";
import * as cairo from "cairo1";
import * as GLib from "glib2";
import * as GObject from "gobject2";

export function context_get_font_options(context: Pango.Context): cairo.FontOptions | null;
export function context_get_resolution(context: Pango.Context): number;
export function context_set_font_options(context: Pango.Context, options?: cairo.FontOptions | null): void;
export function context_set_resolution(context: Pango.Context, dpi: number): void;
export function context_set_shape_renderer(
    context: Pango.Context,
    func?: ShapeRendererFunc | null,
    dnotify?: GLib.DestroyNotify | null
): void;
export function create_context(cr: cairo.Context): Pango.Context;
export function create_layout(cr: cairo.Context): Pango.Layout;
export function error_underline_path(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function font_map_get_default(): Pango.FontMap;
export function font_map_new(): Pango.FontMap;
export function font_map_new_for_font_type(fonttype: cairo.FontType): Pango.FontMap | null;
export function glyph_string_path(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void;
export function layout_line_path(cr: cairo.Context, line: Pango.LayoutLine): void;
export function layout_path(cr: cairo.Context, layout: Pango.Layout): void;
export function show_error_underline(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function show_glyph_item(cr: cairo.Context, text: string, glyph_item: Pango.GlyphItem): void;
export function show_glyph_string(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void;
export function show_layout(cr: cairo.Context, layout: Pango.Layout): void;
export function show_layout_line(cr: cairo.Context, line: Pango.LayoutLine): void;
export function update_context(cr: cairo.Context, context: Pango.Context): void;
export function update_layout(cr: cairo.Context, layout: Pango.Layout): void;
export type ShapeRendererFunc = (cr: cairo.Context, attr: Pango.AttrShape, do_path: boolean) => void;

export interface FontNamespace {
    $gtype: GObject.GType<Font>;
    prototype: FontPrototype;
}
export type Font = FontPrototype;
export interface FontPrototype extends Pango.Font {
    // Members

    get_scaled_font(): cairo.ScaledFont | null;
}

export const Font: FontNamespace;

export interface FontMapNamespace {
    $gtype: GObject.GType<FontMap>;
    prototype: FontMapPrototype;

    get_default(): Pango.FontMap;
    ["new"](): Pango.FontMap;
    new_for_font_type(fonttype: cairo.FontType): Pango.FontMap | null;
}
export type FontMap<A extends GObject.Object = GObject.Object> = FontMapPrototype<A>;
export interface FontMapPrototype<A extends GObject.Object = GObject.Object> extends Pango.FontMap<A> {
    // Members

    get_font_type(): cairo.FontType;
    get_resolution(): number;
    set_default(): void;
    set_resolution(dpi: number): void;
}

export const FontMap: FontMapNamespace;
