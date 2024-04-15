/**
 * Libproxy 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "gobject2";

export function proxy_factory_free_proxies(proxies: string[]): void;

export class ProxyFactory {
    static $gtype: GObject.GType<ProxyFactory>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: ProxyFactory);

    // Constructors
    static ["new"](): ProxyFactory;

    // Members
    free(): void;
    get_proxies(url: string): string[];
    static free_proxies(proxies: string[]): void;
}
