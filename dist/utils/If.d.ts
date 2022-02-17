import { Construct } from '../types';
export declare const ifTrue: <T>(o: unknown, f: Construct<T>, alt?: Construct<T> | undefined) => T | undefined;
export declare const ifDefined: <T>(o: unknown, f: Construct<T>, alt?: Construct<T> | undefined) => T | undefined;
export declare const ifNotEmpty: <T>(o: unknown, f: Construct<T>, alt?: Construct<T> | undefined) => T | undefined;
