/**
 * DBusGLib 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";

export module Proxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Proxy extends GObject.Object {
    static $gtype: GObject.GType<Proxy>;

    constructor(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]): void;
}

export class Connection {
    static $gtype: GObject.GType<Connection>;

    constructor(copy: Connection);
}

export class MethodInvocation {
    static $gtype: GObject.GType<MethodInvocation>;

    constructor(copy: MethodInvocation);
}

export class ProxyClass {
    static $gtype: GObject.GType<ProxyClass>;

    constructor(copy: ProxyClass);
}
