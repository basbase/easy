import { CacheControl, ContentType, HttpStatus, HttpVerb } from './index';
export declare type VerbOptions = {
    onOk?: HttpStatus;
    onNotFound?: HttpStatus;
    onError?: HttpStatus;
    type?: ContentType;
    cache?: CacheControl;
};
export declare type Verb = {
    verb: HttpVerb;
    options: VerbOptions;
};
export declare const toVerbOptions: (options?: VerbOptions | undefined) => Required<VerbOptions>;
export declare const get: (options?: VerbOptions | undefined) => PropertyDecorator;
export declare const search: (options?: VerbOptions | undefined) => PropertyDecorator;
export declare const put: (options?: VerbOptions | undefined) => PropertyDecorator;
export declare const patch: (options?: VerbOptions | undefined) => PropertyDecorator;
export declare const post: (options?: VerbOptions | undefined) => PropertyDecorator;
export declare const del: (options?: VerbOptions | undefined) => PropertyDecorator;
export declare const stream: (options?: VerbOptions | undefined) => PropertyDecorator;
