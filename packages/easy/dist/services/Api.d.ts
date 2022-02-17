import { Uri } from '../types';
import { RequestOptions, RequestProvider, Response } from '../http';
export declare class Api {
    readonly provider: RequestProvider;
    constructor(provider?: RequestProvider);
    get: (uri: Uri, options?: RequestOptions, transform?: ((r: any) => any) | undefined) => Promise<Response>;
    post: (uri: Uri, body?: unknown, options?: RequestOptions, transform?: ((r: any) => any) | undefined) => Promise<Response>;
    put: (uri: Uri, body?: unknown, options?: RequestOptions, transform?: ((r: any) => any) | undefined) => Promise<Response>;
    patch: (uri: Uri, body?: unknown, options?: RequestOptions, transform?: ((r: any) => any) | undefined) => Promise<Response>;
    delete: (uri: Uri, options?: RequestOptions, transform?: ((b: any) => any) | undefined) => Promise<Response>;
}
export declare const api: Api;
