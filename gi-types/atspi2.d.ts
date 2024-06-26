/**
 * Atspi 2.0
 *
 * Generated from 2.0
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";
import * as DBus from "dbus1";

export const COMPONENTLAYER_COUNT: number;
export const COORD_TYPE_COUNT: number;
export const DBUS_INTERFACE_ACCESSIBLE: string;
export const DBUS_INTERFACE_ACTION: string;
export const DBUS_INTERFACE_APPLICATION: string;
export const DBUS_INTERFACE_CACHE: string;
export const DBUS_INTERFACE_COLLECTION: string;
export const DBUS_INTERFACE_COMPONENT: string;
export const DBUS_INTERFACE_DEC: string;
export const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string;
export const DBUS_INTERFACE_DOCUMENT: string;
export const DBUS_INTERFACE_EDITABLE_TEXT: string;
export const DBUS_INTERFACE_EVENT_KEYBOARD: string;
export const DBUS_INTERFACE_EVENT_MOUSE: string;
export const DBUS_INTERFACE_EVENT_OBJECT: string;
export const DBUS_INTERFACE_EVENT_SCREEN_READER: string;
export const DBUS_INTERFACE_HYPERLINK: string;
export const DBUS_INTERFACE_HYPERTEXT: string;
export const DBUS_INTERFACE_IMAGE: string;
export const DBUS_INTERFACE_REGISTRY: string;
export const DBUS_INTERFACE_SELECTION: string;
export const DBUS_INTERFACE_SOCKET: string;
export const DBUS_INTERFACE_TABLE: string;
export const DBUS_INTERFACE_TABLE_CELL: string;
export const DBUS_INTERFACE_TEXT: string;
export const DBUS_INTERFACE_VALUE: string;
export const DBUS_NAME_REGISTRY: string;
export const DBUS_PATH_DEC: string;
export const DBUS_PATH_NULL: string;
export const DBUS_PATH_REGISTRY: string;
export const DBUS_PATH_ROOT: string;
export const DBUS_PATH_SCREEN_READER: string;
export const EVENTTYPE_COUNT: number;
export const KEYEVENTTYPE_COUNT: number;
export const KEYSYNTHTYPE_COUNT: number;
export const LOCALE_TYPE_COUNT: number;
export const MATCHTYPES_COUNT: number;
export const MODIFIERTYPE_COUNT: number;
export const RELATIONTYPE_COUNT: number;
export const ROLE_COUNT: number;
export const SCROLLTYPE_COUNT: number;
export const SORTORDER_COUNT: number;
export const STATETYPE_COUNT: number;
export const TEXT_BOUNDARY_TYPE_COUNT: number;
export const TEXT_CLIP_TYPE_COUNT: number;
export const TREETRAVERSALTYPE_COUNT: number;
export function deregister_device_event_listener(listener: DeviceListener, filter?: any | null): boolean;
export function deregister_keystroke_listener(
    listener: DeviceListener,
    key_set: KeyDefinition[] | null,
    modmask: KeyMaskType,
    event_types: KeyEventMask
): boolean;
export function event_main(): void;
export function event_quit(): void;
export function exit(): number;
export function generate_keyboard_event(keyval: number, keystring: string | null, synth_type: KeySynthType): boolean;
export function generate_mouse_event(x: number, y: number, name: string): boolean;
export function generate_mouse_event_async(
    x: number,
    y: number,
    name: string,
    callback?: GenerateMouseEventCB | null
): void;
export function get_desktop(i: number): Accessible;
export function get_desktop_count(): number;
export function get_desktop_list(): Accessible[];
export function get_version(): [number, number, number];
export function init(): number;
export function is_initialized(): boolean;
export function register_device_event_listener(
    listener: DeviceListener,
    event_types: DeviceEventMask,
    filter?: any | null
): boolean;
export function register_keystroke_listener(
    listener: DeviceListener,
    key_set: KeyDefinition[] | null,
    modmask: KeyMaskType,
    event_types: KeyEventMask,
    sync_type: KeyListenerSyncType
): boolean;
export function role_get_localized_name(role: Role): string;
export function role_get_name(role: Role): string;
export function set_main_context(cnx: GLib.MainContext): void;
export function set_reference_window(accessible: Accessible): void;
export function set_timeout(val: number, startup_time: number): void;
export type DeviceListenerCB = (stroke: DeviceEvent) => boolean;
export type DeviceListenerSimpleCB = (stroke: DeviceEvent) => boolean;
export type EventListenerCB = (event: Event) => void;
export type EventListenerSimpleCB = (event: Event) => void;
export type GenerateMouseEventCB = () => void;
export type KeyCallback = (
    device: Device,
    pressed: boolean,
    keycode: number,
    keysym: number,
    modifiers: number,
    keystring: string
) => void;

export namespace CollectionMatchType {
    export const $gtype: GObject.GType<CollectionMatchType>;
}

export enum CollectionMatchType {
    INVALID = 0,
    ALL = 1,
    ANY = 2,
    NONE = 3,
    EMPTY = 4,
    LAST_DEFINED = 5,
}

export namespace CollectionSortOrder {
    export const $gtype: GObject.GType<CollectionSortOrder>;
}

export enum CollectionSortOrder {
    INVALID = 0,
    CANONICAL = 1,
    FLOW = 2,
    TAB = 3,
    REVERSE_CANONICAL = 4,
    REVERSE_FLOW = 5,
    REVERSE_TAB = 6,
    LAST_DEFINED = 7,
}

export namespace CollectionTreeTraversalType {
    export const $gtype: GObject.GType<CollectionTreeTraversalType>;
}

export enum CollectionTreeTraversalType {
    RESTRICT_CHILDREN = 0,
    RESTRICT_SIBLING = 1,
    INORDER = 2,
    LAST_DEFINED = 3,
}

export namespace ComponentLayer {
    export const $gtype: GObject.GType<ComponentLayer>;
}

export enum ComponentLayer {
    INVALID = 0,
    BACKGROUND = 1,
    CANVAS = 2,
    WIDGET = 3,
    MDI = 4,
    POPUP = 5,
    OVERLAY = 6,
    WINDOW = 7,
    LAST_DEFINED = 8,
}

export namespace CoordType {
    export const $gtype: GObject.GType<CoordType>;
}

export enum CoordType {
    SCREEN = 0,
    WINDOW = 1,
    PARENT = 2,
}

export namespace EventType {
    export const $gtype: GObject.GType<EventType>;
}

export enum EventType {
    KEY_PRESSED_EVENT = 0,
    KEY_RELEASED_EVENT = 1,
    BUTTON_PRESSED_EVENT = 2,
    BUTTON_RELEASED_EVENT = 3,
}

export namespace KeyEventType {
    export const $gtype: GObject.GType<KeyEventType>;
}

export enum KeyEventType {
    PRESSED = 0,
    RELEASED = 1,
}

export namespace KeySynthType {
    export const $gtype: GObject.GType<KeySynthType>;
}

export enum KeySynthType {
    PRESS = 0,
    RELEASE = 1,
    PRESSRELEASE = 2,
    SYM = 3,
    STRING = 4,
    LOCKMODIFIERS = 5,
    UNLOCKMODIFIERS = 6,
}

export namespace Live {
    export const $gtype: GObject.GType<Live>;
}

export enum Live {
    NONE = 0,
    POLITE = 1,
    ASSERTIVE = 2,
}

export namespace LocaleType {
    export const $gtype: GObject.GType<LocaleType>;
}

export enum LocaleType {
    MESSAGES = 0,
    COLLATE = 1,
    CTYPE = 2,
    MONETARY = 3,
    NUMERIC = 4,
    TIME = 5,
}

export namespace ModifierType {
    export const $gtype: GObject.GType<ModifierType>;
}

export enum ModifierType {
    SHIFT = 0,
    SHIFTLOCK = 1,
    CONTROL = 2,
    ALT = 3,
    META = 4,
    META2 = 5,
    META3 = 6,
    NUMLOCK = 14,
}

export namespace RelationType {
    export const $gtype: GObject.GType<RelationType>;
}

export enum RelationType {
    NULL = 0,
    LABEL_FOR = 1,
    LABELLED_BY = 2,
    CONTROLLER_FOR = 3,
    CONTROLLED_BY = 4,
    MEMBER_OF = 5,
    TOOLTIP_FOR = 6,
    NODE_CHILD_OF = 7,
    NODE_PARENT_OF = 8,
    EXTENDED = 9,
    FLOWS_TO = 10,
    FLOWS_FROM = 11,
    SUBWINDOW_OF = 12,
    EMBEDS = 13,
    EMBEDDED_BY = 14,
    POPUP_FOR = 15,
    PARENT_WINDOW_OF = 16,
    DESCRIPTION_FOR = 17,
    DESCRIBED_BY = 18,
    DETAILS = 19,
    DETAILS_FOR = 20,
    ERROR_MESSAGE = 21,
    ERROR_FOR = 22,
    LAST_DEFINED = 23,
}

export namespace Role {
    export const $gtype: GObject.GType<Role>;
}

export enum Role {
    INVALID = 0,
    ACCELERATOR_LABEL = 1,
    ALERT = 2,
    ANIMATION = 3,
    ARROW = 4,
    CALENDAR = 5,
    CANVAS = 6,
    CHECK_BOX = 7,
    CHECK_MENU_ITEM = 8,
    COLOR_CHOOSER = 9,
    COLUMN_HEADER = 10,
    COMBO_BOX = 11,
    DATE_EDITOR = 12,
    DESKTOP_ICON = 13,
    DESKTOP_FRAME = 14,
    DIAL = 15,
    DIALOG = 16,
    DIRECTORY_PANE = 17,
    DRAWING_AREA = 18,
    FILE_CHOOSER = 19,
    FILLER = 20,
    FOCUS_TRAVERSABLE = 21,
    FONT_CHOOSER = 22,
    FRAME = 23,
    GLASS_PANE = 24,
    HTML_CONTAINER = 25,
    ICON = 26,
    IMAGE = 27,
    INTERNAL_FRAME = 28,
    LABEL = 29,
    LAYERED_PANE = 30,
    LIST = 31,
    LIST_ITEM = 32,
    MENU = 33,
    MENU_BAR = 34,
    MENU_ITEM = 35,
    OPTION_PANE = 36,
    PAGE_TAB = 37,
    PAGE_TAB_LIST = 38,
    PANEL = 39,
    PASSWORD_TEXT = 40,
    POPUP_MENU = 41,
    PROGRESS_BAR = 42,
    PUSH_BUTTON = 43,
    RADIO_BUTTON = 44,
    RADIO_MENU_ITEM = 45,
    ROOT_PANE = 46,
    ROW_HEADER = 47,
    SCROLL_BAR = 48,
    SCROLL_PANE = 49,
    SEPARATOR = 50,
    SLIDER = 51,
    SPIN_BUTTON = 52,
    SPLIT_PANE = 53,
    STATUS_BAR = 54,
    TABLE = 55,
    TABLE_CELL = 56,
    TABLE_COLUMN_HEADER = 57,
    TABLE_ROW_HEADER = 58,
    TEAROFF_MENU_ITEM = 59,
    TERMINAL = 60,
    TEXT = 61,
    TOGGLE_BUTTON = 62,
    TOOL_BAR = 63,
    TOOL_TIP = 64,
    TREE = 65,
    TREE_TABLE = 66,
    UNKNOWN = 67,
    VIEWPORT = 68,
    WINDOW = 69,
    EXTENDED = 70,
    HEADER = 71,
    FOOTER = 72,
    PARAGRAPH = 73,
    RULER = 74,
    APPLICATION = 75,
    AUTOCOMPLETE = 76,
    EDITBAR = 77,
    EMBEDDED = 78,
    ENTRY = 79,
    CHART = 80,
    CAPTION = 81,
    DOCUMENT_FRAME = 82,
    HEADING = 83,
    PAGE = 84,
    SECTION = 85,
    REDUNDANT_OBJECT = 86,
    FORM = 87,
    LINK = 88,
    INPUT_METHOD_WINDOW = 89,
    TABLE_ROW = 90,
    TREE_ITEM = 91,
    DOCUMENT_SPREADSHEET = 92,
    DOCUMENT_PRESENTATION = 93,
    DOCUMENT_TEXT = 94,
    DOCUMENT_WEB = 95,
    DOCUMENT_EMAIL = 96,
    COMMENT = 97,
    LIST_BOX = 98,
    GROUPING = 99,
    IMAGE_MAP = 100,
    NOTIFICATION = 101,
    INFO_BAR = 102,
    LEVEL_BAR = 103,
    TITLE_BAR = 104,
    BLOCK_QUOTE = 105,
    AUDIO = 106,
    VIDEO = 107,
    DEFINITION = 108,
    ARTICLE = 109,
    LANDMARK = 110,
    LOG = 111,
    MARQUEE = 112,
    MATH = 113,
    RATING = 114,
    TIMER = 115,
    STATIC = 116,
    MATH_FRACTION = 117,
    MATH_ROOT = 118,
    SUBSCRIPT = 119,
    SUPERSCRIPT = 120,
    DESCRIPTION_LIST = 121,
    DESCRIPTION_TERM = 122,
    DESCRIPTION_VALUE = 123,
    FOOTNOTE = 124,
    CONTENT_DELETION = 125,
    CONTENT_INSERTION = 126,
    MARK = 127,
    SUGGESTION = 128,
    PUSH_BUTTON_MENU = 129,
    LAST_DEFINED = 130,
}

export namespace ScrollType {
    export const $gtype: GObject.GType<ScrollType>;
}

export enum ScrollType {
    TOP_LEFT = 0,
    BOTTOM_RIGHT = 1,
    TOP_EDGE = 2,
    BOTTOM_EDGE = 3,
    LEFT_EDGE = 4,
    RIGHT_EDGE = 5,
    ANYWHERE = 6,
}

export namespace StateType {
    export const $gtype: GObject.GType<StateType>;
}

export enum StateType {
    INVALID = 0,
    ACTIVE = 1,
    ARMED = 2,
    BUSY = 3,
    CHECKED = 4,
    COLLAPSED = 5,
    DEFUNCT = 6,
    EDITABLE = 7,
    ENABLED = 8,
    EXPANDABLE = 9,
    EXPANDED = 10,
    FOCUSABLE = 11,
    FOCUSED = 12,
    HAS_TOOLTIP = 13,
    HORIZONTAL = 14,
    ICONIFIED = 15,
    MODAL = 16,
    MULTI_LINE = 17,
    MULTISELECTABLE = 18,
    OPAQUE = 19,
    PRESSED = 20,
    RESIZABLE = 21,
    SELECTABLE = 22,
    SELECTED = 23,
    SENSITIVE = 24,
    SHOWING = 25,
    SINGLE_LINE = 26,
    STALE = 27,
    TRANSIENT = 28,
    VERTICAL = 29,
    VISIBLE = 30,
    MANAGES_DESCENDANTS = 31,
    INDETERMINATE = 32,
    REQUIRED = 33,
    TRUNCATED = 34,
    ANIMATED = 35,
    INVALID_ENTRY = 36,
    SUPPORTS_AUTOCOMPLETION = 37,
    SELECTABLE_TEXT = 38,
    IS_DEFAULT = 39,
    VISITED = 40,
    CHECKABLE = 41,
    HAS_POPUP = 42,
    READ_ONLY = 43,
    LAST_DEFINED = 44,
}

export namespace TextBoundaryType {
    export const $gtype: GObject.GType<TextBoundaryType>;
}

export enum TextBoundaryType {
    CHAR = 0,
    WORD_START = 1,
    WORD_END = 2,
    SENTENCE_START = 3,
    SENTENCE_END = 4,
    LINE_START = 5,
    LINE_END = 6,
}

export namespace TextClipType {
    export const $gtype: GObject.GType<TextClipType>;
}

export enum TextClipType {
    NONE = 0,
    MIN = 1,
    MAX = 2,
    BOTH = 3,
}

export namespace TextGranularity {
    export const $gtype: GObject.GType<TextGranularity>;
}

export enum TextGranularity {
    CHAR = 0,
    WORD = 1,
    SENTENCE = 2,
    LINE = 3,
    PARAGRAPH = 4,
}

export namespace Cache {
    export const $gtype: GObject.GType<Cache>;
}

export enum Cache {
    NONE = 0,
    PARENT = 1,
    CHILDREN = 2,
    NAME = 4,
    DESCRIPTION = 8,
    STATES = 16,
    ROLE = 32,
    INTERFACES = 64,
    ATTRIBUTES = 128,
    ALL = 1073741823,
    DEFAULT = 127,
    UNDEFINED = 1073741824,
}

export namespace KeyListenerSyncType {
    export const $gtype: GObject.GType<KeyListenerSyncType>;
}

export enum KeyListenerSyncType {
    NOSYNC = 0,
    SYNCHRONOUS = 1,
    CANCONSUME = 2,
    ALL_WINDOWS = 4,
}
export module Accessible {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Accessible
    extends Object
    implements
        Action,
        Collection,
        Component,
        Document,
        EditableText,
        Hypertext,
        Image,
        Selection,
        Table,
        TableCell,
        Text,
        Value
{
    static $gtype: GObject.GType<Accessible>;

    constructor(properties?: Partial<Accessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Accessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    accessible_parent: Accessible;
    children: any[];
    role: Role;
    interfaces: number;
    name: string;
    description: string;
    states: StateSet;
    attributes: GLib.HashTable<any, any>;
    cached_properties: number;
    priv: AccessiblePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "mode-changed", callback: (_source: this, arg1: number, why: string) => void): number;
    connect_after(signal: "mode-changed", callback: (_source: this, arg1: number, why: string) => void): number;
    emit(signal: "mode-changed", arg1: number, why: string): void;
    connect(signal: "region-changed", callback: (_source: this, arg1: number, arg2: number) => void): number;
    connect_after(signal: "region-changed", callback: (_source: this, arg1: number, arg2: number) => void): number;
    emit(signal: "region-changed", arg1: number, arg2: number): void;

    // Members

    clear_cache(): void;
    clear_cache_single(): void;
    get_accessible_id(): string;
    get_action(): Action;
    get_action_iface(): Action;
    get_application(): Accessible;
    get_atspi_version(): string;
    get_attributes(): GLib.HashTable<string, string>;
    get_attributes_as_array(): string[];
    get_child_at_index(child_index: number): Accessible;
    get_child_count(): number;
    get_collection(): Collection;
    get_collection_iface(): Collection;
    get_component(): Component;
    get_component_iface(): Component;
    get_description(): string;
    get_document(): Document;
    get_document_iface(): Document;
    get_editable_text(): EditableText;
    get_editable_text_iface(): EditableText;
    get_hyperlink(): Hyperlink;
    get_hypertext(): Hypertext;
    get_hypertext_iface(): Hypertext;
    get_id(): number;
    get_image(): Image;
    get_image_iface(): Image;
    get_index_in_parent(): number;
    get_interfaces(): string[];
    get_localized_role_name(): string;
    get_name(): string;
    get_object_locale(): string;
    get_parent(): Accessible | null;
    get_process_id(): number;
    get_relation_set(): Relation[];
    get_role(): Role;
    get_role_name(): string;
    get_selection(): Selection;
    // Conflicted with Atspi.Text.get_selection
    get_selection(...args: never[]): any;
    get_selection_iface(): Selection;
    get_state_set(): StateSet;
    get_table(): Table;
    // Conflicted with Atspi.TableCell.get_table
    get_table(...args: never[]): any;
    get_table_cell(): TableCell;
    get_table_iface(): Table;
    get_text(): Text;
    // Conflicted with Atspi.Text.get_text
    get_text(...args: never[]): any;
    get_text_iface(): Text;
    get_toolkit_name(): string;
    get_toolkit_version(): string;
    get_value(): Value;
    get_value_iface(): Value;
    set_cache_mask(mask: Cache): void;
    vfunc_mode_changed(enabled: boolean): void;
    vfunc_region_changed(current_offset: number, last_offset: number): void;

    // Implemented Members

    do_action(i: number): boolean;
    get_action_description(i: number): string;
    get_action_name(i: number): string;
    get_key_binding(i: number): string;
    get_localized_name(i: number): string;
    get_n_actions(): number;
    get_active_descendant(): Accessible;
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[];
    get_matches_from(
        current_object: Accessible,
        rule: MatchRule,
        sortby: CollectionSortOrder,
        tree: CollectionTreeTraversalType,
        count: number,
        traverse: boolean
    ): Accessible[];
    get_matches_to(
        current_object: Accessible,
        rule: MatchRule,
        sortby: CollectionSortOrder,
        tree: CollectionTreeTraversalType,
        limit_scope: boolean,
        count: number,
        traverse: boolean
    ): Accessible[];
    is_ancestor_of(test: Accessible): boolean;
    contains(x: number, y: number, ctype: CoordType): boolean;
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null;
    get_alpha(): number;
    get_extents(ctype: CoordType): Rect;
    get_layer(): ComponentLayer;
    get_mdi_z_order(): number;
    get_position(ctype: CoordType): Point;
    // Conflicted with Atspi.TableCell.get_position
    get_position(...args: never[]): any;
    get_size(): Point;
    grab_focus(): boolean;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean;
    set_position(x: number, y: number, ctype: CoordType): boolean;
    set_size(width: number, height: number): boolean;
    get_document_attribute_value(attribute: string): string;
    get_document_attributes(): GLib.HashTable<string, string>;
    get_current_page_number(): number;
    get_locale(): string;
    get_page_count(): number;
    copy_text(start_pos: number, end_pos: number): boolean;
    cut_text(start_pos: number, end_pos: number): boolean;
    delete_text(start_pos: number, end_pos: number): boolean;
    insert_text(position: number, text: string, length: number): boolean;
    paste_text(position: number): boolean;
    set_text_contents(new_contents: string): boolean;
    get_link(link_index: number): Hyperlink | null;
    get_link_index(character_offset: number): number;
    get_n_links(): number;
    get_image_description(): string;
    get_image_extents(ctype: CoordType): Rect;
    get_image_locale(): string;
    get_image_position(ctype: CoordType): Point;
    get_image_size(): Point;
    clear_selection(): boolean;
    deselect_child(child_index: number): boolean;
    deselect_selected_child(selected_child_index: number): boolean;
    get_n_selected_children(): number;
    get_selected_child(selected_child_index: number): Accessible;
    is_child_selected(child_index: number): boolean;
    select_all(): boolean;
    select_child(child_index: number): boolean;
    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_accessible_at(row: number, column: number): Accessible;
    get_caption(): Accessible;
    get_column_at_index(index: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Accessible;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_n_selected_columns(): number;
    get_n_selected_rows(): number;
    get_row_at_index(index: number): number;
    get_row_column_extents_at_index(index: number): [boolean, number, number, number, number, boolean];
    get_row_description(row: number): string;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Accessible;
    get_selected_columns(): number[];
    get_selected_rows(): number[];
    get_summary(): Accessible;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
    get_column_header_cells(): Accessible[];
    get_column_index(): number;
    get_column_span(): number;
    get_row_column_span(): [number, number, number, number];
    get_row_header_cells(): Accessible[];
    get_row_span(): number;
    add_selection(start_offset: number, end_offset: number): boolean;
    get_attribute_run(offset: number, include_defaults: boolean): [GLib.HashTable<string, string>, number, number];
    get_text_attribute_value(offset: number, attribute_name: string): string | null;
    get_text_attributes(offset: number): [GLib.HashTable<string, string>, number, number];
    get_bounded_ranges(
        x: number,
        y: number,
        width: number,
        height: number,
        type: CoordType,
        clipTypeX: TextClipType,
        clipTypeY: TextClipType
    ): TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, type: CoordType): Rect;
    get_default_attributes(): GLib.HashTable<string, string>;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, type: CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect;
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange;
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange;
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange;
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange;
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(new_offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    get_current_value(): number;
    get_maximum_value(): number;
    get_minimum_increment(): number;
    get_minimum_value(): number;
    set_current_value(new_value: number): boolean;
}
export module Application {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Application extends GObject.Object {
    static $gtype: GObject.GType<Application>;

    constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;

    // Fields
    hash: GLib.HashTable<any, any>;
    bus_name: string;
    bus: DBus.Connection;
    root: any;
    cache: Cache;
    toolkit_name: string;
    toolkit_version: string;
    atspi_version: string;
    time_added: any;
}
export module Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Device extends GObject.Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Device;

    // Members

    add_key_grab(kd: KeyDefinition, callback?: KeyCallback | null): number;
    add_key_watcher(): void;
    get_grab_by_id(id: number): KeyDefinition;
    get_locked_modifiers(): number;
    get_modifier(keycode: number): number;
    grab_keyboard(): boolean;
    map_modifier(keycode: number): number;
    notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean;
    remove_key_grab(id: number): void;
    ungrab_keyboard(): void;
    unmap_modifier(keycode: number): void;
    vfunc_add_key_grab(kd: KeyDefinition): void;
    vfunc_get_locked_modifiers(): number;
    vfunc_get_modifier(keycode: number): number;
    vfunc_grab_keyboard(): boolean;
    vfunc_map_modifier(keycode: number): number;
    vfunc_remove_key_grab(id: number): void;
    vfunc_ungrab_keyboard(): void;
    vfunc_unmap_modifier(keycode: number): void;
}
export module DeviceLegacy {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceLegacy extends Device {
    static $gtype: GObject.GType<DeviceLegacy>;

    constructor(properties?: Partial<DeviceLegacy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceLegacy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): DeviceLegacy;
}
export module DeviceListener {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceListener extends GObject.Object {
    static $gtype: GObject.GType<DeviceListener>;

    constructor(properties?: Partial<DeviceListener.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceListener.ConstructorProperties>, ...args: any[]): void;

    // Fields
    id: number;
    callbacks: any[];

    // Constructors

    static ["new"](callback: DeviceListenerCB): DeviceListener;

    // Members

    add_callback(callback: DeviceListenerCB): void;
    remove_callback(callback: DeviceListenerCB): void;
    vfunc_device_event(event: DeviceEvent): boolean;
}
export module DeviceX11 {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceX11 extends Device {
    static $gtype: GObject.GType<DeviceX11>;

    constructor(properties?: Partial<DeviceX11.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceX11.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): DeviceX11;
}
export module EventListener {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class EventListener extends GObject.Object {
    static $gtype: GObject.GType<EventListener>;

    constructor(properties?: Partial<EventListener.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventListener.ConstructorProperties>, ...args: any[]): void;

    // Fields
    callback: EventListenerCB;
    user_data: any;
    cb_destroyed: GLib.DestroyNotify;

    // Constructors

    static ["new"](callback: EventListenerCB): EventListener;

    // Members

    deregister(event_type: string): boolean;
    register(event_type: string): boolean;
    register_full(event_type: string, properties?: string[] | null): boolean;
    register_with_app(event_type: string, properties?: string[] | null, app?: Accessible | null): boolean;
    static deregister_from_callback(callback: EventListenerCB, event_type: string): boolean;
    static register_from_callback(callback: EventListenerCB, event_type: string): boolean;
    static register_from_callback_full(event_type: string, properties: string[]): boolean;
    static register_from_callback_with_app(event_type: string, properties: string[], app?: Accessible | null): boolean;
}
export module Hyperlink {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Hyperlink extends Object {
    static $gtype: GObject.GType<Hyperlink>;

    constructor(properties?: Partial<Hyperlink.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Hyperlink.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_end_index(): number;
    get_index_range(): Range;
    get_n_anchors(): number;
    get_object(i: number): Accessible;
    get_start_index(): number;
    get_uri(i: number): string;
    is_valid(): boolean;
}
export module MatchRule {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class MatchRule extends GObject.Object {
    static $gtype: GObject.GType<MatchRule>;

    constructor(properties?: Partial<MatchRule.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MatchRule.ConstructorProperties>, ...args: any[]): void;

    // Fields
    states: StateSet;
    statematchtype: CollectionMatchType;
    attributes: GLib.HashTable<any, any>;
    attributematchtype: CollectionMatchType;
    interfaces: any[];
    interfacematchtype: CollectionMatchType;
    roles: number[];
    rolematchtype: CollectionMatchType;
    invert: boolean;

    // Constructors

    static ["new"](
        states: StateSet,
        statematchtype: CollectionMatchType,
        attributes: { [key: string]: any } | GLib.HashTable<string, string>,
        attributematchtype: CollectionMatchType,
        roles: Role[],
        rolematchtype: CollectionMatchType,
        interfaces: string[],
        interfacematchtype: CollectionMatchType,
        invert: boolean
    ): MatchRule;
}
export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Fields
    app: Application;
    path: string;
}
export module Relation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Relation extends GObject.Object {
    static $gtype: GObject.GType<Relation>;

    constructor(properties?: Partial<Relation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Relation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    relation_type: RelationType;
    targets: any[];

    // Members

    get_n_targets(): number;
    get_relation_type(): RelationType;
    get_target(i: number): Accessible;
}
export module StateSet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class StateSet extends GObject.Object {
    static $gtype: GObject.GType<StateSet>;

    constructor(properties?: Partial<StateSet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StateSet.ConstructorProperties>, ...args: any[]): void;

    // Fields
    accessible: any;
    states: number;

    // Constructors

    static ["new"](states: StateType[]): StateSet;

    // Members

    add(state: StateType): void;
    compare(set2: StateSet): StateSet;
    contains(state: StateType): boolean;
    equals(set2: StateSet): boolean;
    get_states(): StateType[];
    is_empty(): boolean;
    remove(state: StateType): void;
    set_by_name(name: string, enabled: boolean): void;
}

export class AccessiblePrivate {
    static $gtype: GObject.GType<AccessiblePrivate>;

    constructor(copy: AccessiblePrivate);
}

export class DeviceEvent {
    static $gtype: GObject.GType<DeviceEvent>;

    constructor(copy: DeviceEvent);

    // Fields
    type: EventType;
    id: number;
    hw_code: number;
    modifiers: number;
    timestamp: number;
    event_string: string;
    is_text: boolean;
}

export class Event {
    static $gtype: GObject.GType<Event>;

    constructor(copy: Event);

    // Fields
    type: string;
    source: Accessible;
    detail1: number;
    detail2: number;
    any_data: GObject.Value;
    sender: Accessible;

    // Members
    static main(): void;
    static quit(): void;
}

export class EventListenerMode {
    static $gtype: GObject.GType<EventListenerMode>;

    constructor(
        properties?: Partial<{
            synchronous?: boolean;
            preemptive?: boolean;
            global?: boolean;
        }>
    );
    constructor(copy: EventListenerMode);

    // Fields
    synchronous: boolean;
    preemptive: boolean;
    global: boolean;
}

export class KeyDefinition {
    static $gtype: GObject.GType<KeyDefinition>;

    constructor(
        properties?: Partial<{
            keycode?: number;
            keysym?: number;
            keystring?: string;
            modifiers?: number;
        }>
    );
    constructor(copy: KeyDefinition);

    // Fields
    keycode: number;
    keysym: number;
    keystring: string;
    modifiers: number;
}

export class KeySet {
    static $gtype: GObject.GType<KeySet>;

    constructor(
        properties?: Partial<{
            keysyms?: number;
            keycodes?: number;
            keystrings?: string;
            len?: number;
        }>
    );
    constructor(copy: KeySet);

    // Fields
    keysyms: number;
    keycodes: number;
    keystrings: string;
    len: number;
}

export class Point {
    static $gtype: GObject.GType<Point>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
        }>
    );
    constructor(copy: Point);

    // Fields
    x: number;
    y: number;

    // Members
    copy(): Point;
}

export class Range {
    static $gtype: GObject.GType<Range>;

    constructor(
        properties?: Partial<{
            start_offset?: number;
            end_offset?: number;
        }>
    );
    constructor(copy: Range);

    // Fields
    start_offset: number;
    end_offset: number;

    // Members
    copy(): Range;
}

export class Rect {
    static $gtype: GObject.GType<Rect>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: Rect);

    // Fields
    x: number;
    y: number;
    width: number;
    height: number;

    // Members
    copy(): Rect;
}

export class TextRange {
    static $gtype: GObject.GType<TextRange>;

    constructor(
        properties?: Partial<{
            start_offset?: number;
            end_offset?: number;
            content?: string;
        }>
    );
    constructor(copy: TextRange);

    // Fields
    start_offset: number;
    end_offset: number;
    content: string;
}

export interface ActionNamespace {
    $gtype: GObject.GType<Action>;
    prototype: ActionPrototype;
}
export type Action = ActionPrototype;
export interface ActionPrototype extends GObject.Object {
    // Members

    do_action(i: number): boolean;
    get_action_description(i: number): string;
    get_action_name(i: number): string;
    get_action_description(i: number): string;
    get_key_binding(i: number): string;
    get_localized_name(i: number): string;
    get_n_actions(): number;
    get_action_name(i: number): string;
}

export const Action: ActionNamespace;

export interface CollectionNamespace {
    $gtype: GObject.GType<Collection>;
    prototype: CollectionPrototype;
}
export type Collection = CollectionPrototype;
export interface CollectionPrototype extends GObject.Object {
    // Members

    get_active_descendant(): Accessible;
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[];
    get_matches_from(
        current_object: Accessible,
        rule: MatchRule,
        sortby: CollectionSortOrder,
        tree: CollectionTreeTraversalType,
        count: number,
        traverse: boolean
    ): Accessible[];
    get_matches_to(
        current_object: Accessible,
        rule: MatchRule,
        sortby: CollectionSortOrder,
        tree: CollectionTreeTraversalType,
        limit_scope: boolean,
        count: number,
        traverse: boolean
    ): Accessible[];
    is_ancestor_of(test: Accessible): boolean;
}

export const Collection: CollectionNamespace;

export interface ComponentNamespace {
    $gtype: GObject.GType<Component>;
    prototype: ComponentPrototype;
}
export type Component = ComponentPrototype;
export interface ComponentPrototype extends GObject.Object {
    // Members

    contains(x: number, y: number, ctype: CoordType): boolean;
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null;
    get_alpha(): number;
    get_extents(ctype: CoordType): Rect;
    get_layer(): ComponentLayer;
    get_mdi_z_order(): number;
    get_position(ctype: CoordType): Point;
    get_size(): Point;
    grab_focus(): boolean;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean;
    set_position(x: number, y: number, ctype: CoordType): boolean;
    set_size(width: number, height: number): boolean;
}

export const Component: ComponentNamespace;

export interface DocumentNamespace {
    $gtype: GObject.GType<Document>;
    prototype: DocumentPrototype;
}
export type Document = DocumentPrototype;
export interface DocumentPrototype extends GObject.Object {
    // Members

    get_document_attribute_value(attribute: string): string;
    get_document_attributes(): GLib.HashTable<string, string>;
    get_current_page_number(): number;
    get_document_attribute_value(attribute: string): string;
    get_document_attributes(): GLib.HashTable<string, string>;
    get_locale(): string;
    get_page_count(): number;
}

export const Document: DocumentNamespace;

export interface EditableTextNamespace {
    $gtype: GObject.GType<EditableText>;
    prototype: EditableTextPrototype;
}
export type EditableText = EditableTextPrototype;
export interface EditableTextPrototype extends GObject.Object {
    // Members

    copy_text(start_pos: number, end_pos: number): boolean;
    cut_text(start_pos: number, end_pos: number): boolean;
    delete_text(start_pos: number, end_pos: number): boolean;
    insert_text(position: number, text: string, length: number): boolean;
    paste_text(position: number): boolean;
    set_text_contents(new_contents: string): boolean;
}

export const EditableText: EditableTextNamespace;

export interface HypertextNamespace {
    $gtype: GObject.GType<Hypertext>;
    prototype: HypertextPrototype;
}
export type Hypertext = HypertextPrototype;
export interface HypertextPrototype extends GObject.Object {
    // Members

    get_link(link_index: number): Hyperlink | null;
    get_link_index(character_offset: number): number;
    get_n_links(): number;
}

export const Hypertext: HypertextNamespace;

export interface ImageNamespace {
    $gtype: GObject.GType<Image>;
    prototype: ImagePrototype;
}
export type Image = ImagePrototype;
export interface ImagePrototype extends GObject.Object {
    // Members

    get_image_description(): string;
    get_image_extents(ctype: CoordType): Rect;
    get_image_locale(): string;
    get_image_position(ctype: CoordType): Point;
    get_image_size(): Point;
}

export const Image: ImageNamespace;

export interface SelectionNamespace {
    $gtype: GObject.GType<Selection>;
    prototype: SelectionPrototype;
}
export type Selection = SelectionPrototype;
export interface SelectionPrototype extends GObject.Object {
    // Members

    clear_selection(): boolean;
    deselect_child(child_index: number): boolean;
    deselect_selected_child(selected_child_index: number): boolean;
    get_n_selected_children(): number;
    get_selected_child(selected_child_index: number): Accessible;
    is_child_selected(child_index: number): boolean;
    select_all(): boolean;
    select_child(child_index: number): boolean;
}

export const Selection: SelectionNamespace;

export interface TableNamespace {
    $gtype: GObject.GType<Table>;
    prototype: TablePrototype;
}
export type Table = TablePrototype;
export interface TablePrototype extends GObject.Object {
    // Members

    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_accessible_at(row: number, column: number): Accessible;
    get_caption(): Accessible;
    get_column_at_index(index: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Accessible;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_n_selected_columns(): number;
    get_n_selected_rows(): number;
    get_row_at_index(index: number): number;
    get_row_column_extents_at_index(index: number): [boolean, number, number, number, number, boolean];
    get_row_description(row: number): string;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Accessible;
    get_selected_columns(): number[];
    get_selected_rows(): number[];
    get_summary(): Accessible;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
}

export const Table: TableNamespace;

export interface TableCellNamespace {
    $gtype: GObject.GType<TableCell>;
    prototype: TableCellPrototype;
}
export type TableCell = TableCellPrototype;
export interface TableCellPrototype extends GObject.Object {
    // Members

    get_column_header_cells(): Accessible[];
    get_column_index(): number;
    get_column_span(): number;
    get_position(): [number, number, number];
    get_row_column_span(): [number, number, number, number];
    get_row_header_cells(): Accessible[];
    get_row_span(): number;
    get_table(): Accessible;
}

export const TableCell: TableCellNamespace;

export interface TextNamespace {
    $gtype: GObject.GType<Text>;
    prototype: TextPrototype;
}
export type Text = TextPrototype;
export interface TextPrototype extends GObject.Object {
    // Members

    add_selection(start_offset: number, end_offset: number): boolean;
    get_attribute_run(offset: number, include_defaults: boolean): [GLib.HashTable<string, string>, number, number];
    get_text_attribute_value(offset: number, attribute_name: string): string | null;
    get_text_attributes(offset: number): [GLib.HashTable<string, string>, number, number];
    get_bounded_ranges(
        x: number,
        y: number,
        width: number,
        height: number,
        type: CoordType,
        clipTypeX: TextClipType,
        clipTypeY: TextClipType
    ): TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, type: CoordType): Rect;
    get_default_attributes(): GLib.HashTable<string, string>;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, type: CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect;
    get_selection(selection_num: number): Range;
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange;
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange;
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange;
    get_text_attribute_value(offset: number, attribute_name: string): string | null;
    get_text_attributes(offset: number): [GLib.HashTable<string, string>, number, number];
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange;
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(new_offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
}

export const Text: TextNamespace;

export interface ValueNamespace {
    $gtype: GObject.GType<Value>;
    prototype: ValuePrototype;
}
export type Value = ValuePrototype;
export interface ValuePrototype extends GObject.Object {
    // Members

    get_current_value(): number;
    get_maximum_value(): number;
    get_minimum_increment(): number;
    get_minimum_value(): number;
    get_text(): string;
    set_current_value(new_value: number): boolean;
}

export const Value: ValueNamespace;

export type ControllerEventMask = number;
export type DeviceEventMask = number;
export type KeyEventMask = number;
export type KeyMaskType = number;
export type KeystrokeListener = void;
