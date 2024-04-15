/**
 * DBus 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";

export namespace BusType {
    export const $gtype: GObject.GType<BusType>;
}

export enum BusType {
    SESSION = 0,
    SYSTEM = 1,
    STARTER = 2,
}

export class Connection {
    static $gtype: GObject.GType<Connection>;

    constructor(copy: Connection);
}

export class Error {
    static $gtype: GObject.GType<Error>;

    constructor(copy: Error);
}

export class Message {
    static $gtype: GObject.GType<Message>;

    constructor(copy: Message);
}

export class MessageIter {
    static $gtype: GObject.GType<MessageIter>;

    constructor(copy: MessageIter);
}

export class PendingCall {
    static $gtype: GObject.GType<PendingCall>;

    constructor(copy: PendingCall);
}
