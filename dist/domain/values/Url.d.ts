import { Value } from '../../types';
export interface UrlOptions {
    protocols?: string[] | undefined;
    require_tld?: boolean | undefined;
    require_protocol?: boolean | undefined;
    require_host?: boolean | undefined;
    require_port?: boolean | undefined;
    require_valid_protocol?: boolean | undefined;
    allow_underscores?: boolean | undefined;
    host_whitelist?: Array<string | RegExp> | undefined;
    host_blacklist?: Array<string | RegExp> | undefined;
    allow_trailing_dot?: boolean | undefined;
    allow_protocol_relative_urls?: boolean | undefined;
    disallow_auth?: boolean | undefined;
}
export declare class Url extends Value {
    readonly options?: UrlOptions | undefined;
    constructor(value: unknown, options?: UrlOptions | undefined);
    get isValid(): boolean;
}
export declare const url: (url: unknown, options?: UrlOptions | undefined) => Url;
export declare const isUrl: (url?: unknown, options?: UrlOptions | undefined) => boolean;
