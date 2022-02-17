import { ErrorOrigin } from '../types';
export declare const resolve: <S = unknown>(subject: S | PromiseLike<S>) => Promise<S>;
export declare const reject: <S = never>(e: ErrorOrigin) => Promise<S>;
export declare const tuple: <T>(...values: (T | PromiseLike<T>)[]) => Promise<T[]>;
