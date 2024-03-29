/**
 * GdkPixdata 2.0
 *
 * Generated from 2.0
 */

import * as GdkPixbuf from "gdkpixbuf2";
import * as GObject from "gobject2";
import * as GLib from "glib2";

export const PIXBUF_MAGIC_NUMBER: number;
export const PIXDATA_HEADER_LENGTH: number;
export function pixbuf_from_pixdata(pixdata: Pixdata, copy_pixels: boolean): GdkPixbuf.Pixbuf;

export namespace PixdataDumpType {
    export const $gtype: GObject.GType<PixdataDumpType>;
}

export enum PixdataDumpType {
    PIXDATA_STREAM = 0,
    PIXDATA_STRUCT = 1,
    MACROS = 2,
    GTYPES = 0,
    CTYPES = 256,
    STATIC = 512,
    CONST = 1024,
    RLE_DECODER = 65536,
}

export namespace PixdataType {
    export const $gtype: GObject.GType<PixdataType>;
}

export enum PixdataType {
    COLOR_TYPE_RGB = 1,
    COLOR_TYPE_RGBA = 2,
    COLOR_TYPE_MASK = 255,
    SAMPLE_WIDTH_8 = 65536,
    SAMPLE_WIDTH_MASK = 983040,
    ENCODING_RAW = 16777216,
    ENCODING_RLE = 33554432,
    ENCODING_MASK = 251658240,
}

export class Pixdata {
    static $gtype: GObject.GType<Pixdata>;

    constructor(copy: Pixdata);

    // Fields
    magic: number;
    length: number;
    pixdata_type: number;
    rowstride: number;
    width: number;
    height: number;
    pixel_data: Uint8Array;

    // Members
    deserialize(stream: Uint8Array | string): boolean;
    serialize(): Uint8Array;
    to_csource(name: string, dump_type: PixdataDumpType): GLib.String;
}
