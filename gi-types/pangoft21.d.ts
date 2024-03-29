/**
 * PangoFT2 1.0
 *
 * Generated from 1.0
 */

import * as Gio from "gio2";
import * as PangoFc from "pangofc1";
import * as Pango from "pango1";
import * as freetype2 from "freetype22";
import * as fontconfig from "fontconfig2";
import * as GObject from "gobject2";

export function font_get_coverage(font: Pango.Font, language: Pango.Language): Pango.Coverage;
export function font_get_kerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number;
export function get_unknown_glyph(font: Pango.Font): Pango.Glyph;
export function render(
    bitmap: freetype2.Bitmap,
    font: Pango.Font,
    glyphs: Pango.GlyphString,
    x: number,
    y: number
): void;
export function render_layout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;
export function render_layout_line(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;
export function render_layout_line_subpixel(
    bitmap: freetype2.Bitmap,
    line: Pango.LayoutLine,
    x: number,
    y: number
): void;
export function render_layout_subpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;
export function render_transformed(
    bitmap: freetype2.Bitmap,
    matrix: Pango.Matrix | null,
    font: Pango.Font,
    glyphs: Pango.GlyphString,
    x: number,
    y: number
): void;
export function shutdown_display(): void;
export type SubstituteFunc = (pattern: fontconfig.Pattern, data?: any | null) => void;
export module FontMap {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends PangoFc.FontMap.ConstructorProperties<A> {
        [key: string]: any;
    }
}
export class FontMap<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap<A> implements Gio.ListModel<A> {
    static $gtype: GObject.GType<FontMap>;

    constructor(properties?: Partial<FontMap.ConstructorProperties<A>>, ...args: any[]);
    _init(properties?: Partial<FontMap.ConstructorProperties<A>>, ...args: any[]): void;

    // Constructors

    static ["new"](): FontMap;

    // Members

    set_default_substitute(func: SubstituteFunc): void;
    // Conflicted with PangoFc.FontMap.set_default_substitute
    set_default_substitute(...args: never[]): any;
    set_resolution(dpi_x: number, dpi_y: number): void;
    substitute_changed(): void;

    // Implemented Members

    get_item_type(): GObject.GType;
    get_n_items(): number;
    get_item(position: number): A | null;
    items_changed(position: number, removed: number, added: number): void;
    vfunc_get_item(position: number): A | null;
    vfunc_get_item_type(): GObject.GType;
    vfunc_get_n_items(): number;
}
