import { ErrorOrigin } from '../types';
import { VerbOptions } from './Verb';
export declare class OriginatedError extends Error {
    readonly origin: ErrorOrigin;
    readonly options?: VerbOptions | undefined;
    constructor(origin: ErrorOrigin, options?: VerbOptions | undefined);
}
export declare const isOriginatedError: (e?: unknown) => e is OriginatedError;
export declare const toOriginatedError: (e: unknown, options?: VerbOptions | undefined) => OriginatedError;
