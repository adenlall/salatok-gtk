/**
 * PangoOT 1.0
 *
 * Generated from 1.0
 */

import * as Pango from "pango1";
import * as GObject from "gobject2";
import * as freetype2 from "freetype22";
import * as PangoFc from "pangofc1";

export const ALL_GLYPHS: number;
export const DEFAULT_LANGUAGE: number;
export const NO_FEATURE: number;
export const NO_SCRIPT: number;
export function tag_from_language(language?: Pango.Language | null): Tag;
export function tag_from_script(script: Pango.Script): Tag;
export function tag_to_language(language_tag: Tag): Pango.Language;
export function tag_to_script(script_tag: Tag): Pango.Script;

export namespace TableType {
    export const $gtype: GObject.GType<TableType>;
}

export enum TableType {
    GSUB = 0,
    GPOS = 1,
}
export module Info {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Info extends GObject.Object {
    static $gtype: GObject.GType<Info>;

    constructor(properties?: Partial<Info.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Info.ConstructorProperties>, ...args: any[]): void;

    // Members

    find_feature(
        table_type: TableType,
        feature_tag: Tag,
        script_index: number,
        language_index: number
    ): [boolean, number];
    find_language(table_type: TableType, script_index: number, language_tag: Tag): [boolean, number, number];
    find_script(table_type: TableType, script_tag: Tag): [boolean, number];
    list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag;
    list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag;
    list_scripts(table_type: TableType): Tag;
    static get(face: freetype2.Face): Info;
}
export module Ruleset {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Ruleset extends GObject.Object {
    static $gtype: GObject.GType<Ruleset>;

    constructor(properties?: Partial<Ruleset.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Ruleset.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](info: Info): Ruleset;
    static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset;
    static new_from_description(info: Info, desc: RulesetDescription): Ruleset;

    // Members

    add_feature(table_type: TableType, feature_index: number, property_bit: number): void;
    get_feature_count(): [number, number, number];
    maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: number): boolean;
    maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number;
    position(buffer: Buffer): void;
    substitute(buffer: Buffer): void;
    static get_for_description(info: Info, desc: RulesetDescription): Ruleset;
}

export class Buffer {
    static $gtype: GObject.GType<Buffer>;

    constructor(font: PangoFc.Font);
    constructor(copy: Buffer);

    // Constructors
    static ["new"](font: PangoFc.Font): Buffer;

    // Members
    add_glyph(glyph: number, properties: number, cluster: number): void;
    clear(): void;
    destroy(): void;
    get_glyphs(): Glyph[] | null;
    output(glyphs: Pango.GlyphString): void;
    set_rtl(rtl: boolean): void;
    set_zero_width_marks(zero_width_marks: boolean): void;
}

export class FeatureMap {
    static $gtype: GObject.GType<FeatureMap>;

    constructor(copy: FeatureMap);

    // Fields
    feature_name: number[];
    property_bit: number;
}

export class Glyph {
    static $gtype: GObject.GType<Glyph>;

    constructor(
        properties?: Partial<{
            glyph?: number;
            properties?: number;
            cluster?: number;
            component?: number;
            ligID?: number;
            internal?: number;
        }>
    );
    constructor(copy: Glyph);

    // Fields
    glyph: number;
    properties: number;
    cluster: number;
    component: number;
    ligID: number;
    internal: number;
}

export class RulesetDescription {
    static $gtype: GObject.GType<RulesetDescription>;

    constructor(copy: RulesetDescription);

    // Fields
    script: Pango.Script;
    language: Pango.Language;
    static_gsub_features: FeatureMap;
    n_static_gsub_features: number;
    static_gpos_features: FeatureMap;
    n_static_gpos_features: number;
    other_features: FeatureMap;
    n_other_features: number;

    // Members
    copy(): RulesetDescription;
    equal(desc2: RulesetDescription): boolean;
    free(): void;
    hash(): number;
}
export type Tag = number;
