import { ArrayLike } from './Array';
import { Constructor } from './Constructor';
import { Json } from './Json';
import { GetProperty } from './Get';
import { Id } from './Id';
export declare class List<T = unknown> extends Array<T> {
    asc: (p: GetProperty<T, any>) => List<T>;
    desc: (p: GetProperty<T, any>) => List<T>;
    first: (p?: ((value: T, index: number, array: T[]) => unknown) | undefined, params?: unknown) => T;
    isFirst: (value: T) => boolean;
    next: (p?: ((value: T, index: number, array: T[]) => unknown) | undefined, params?: unknown) => T;
    prev: (p?: ((value: T, index: number, array: T[]) => unknown) | undefined, params?: unknown) => T;
    last: (p?: ((value: T, index: number, array: T[]) => unknown) | undefined, params?: unknown) => T;
    isLast: (value: T) => boolean;
    overlaps: (...items: ArrayLike<T>) => boolean;
    toJSON: () => Json[];
    map: <U>(f: (value: T, index: number, array: T[]) => U, params?: unknown) => List<U>;
    mapDefined: <U>(f: (value: T, index: number, array: T[]) => U, params?: unknown) => List<NonNullable<U>>;
    distinct: () => List<T>;
    filter: (p: (value: T, index: number, array: T[]) => unknown, params?: unknown) => List<T>;
    byId: (id: Id) => List<T>;
    add: (...items: (T | T[])[]) => this;
    remove: (item: T) => List<T>;
    switch: (item: T) => List<T>;
    defined: () => List<NonNullable<T>>;
    toObject: (key: keyof T) => Json;
    orElse: (...alt: ArrayLike<T>) => List<T> | undefined;
}
export declare const toList: <T = unknown>(...items: ArrayLike<T>) => List<T>;
export declare const isList: <T>(l?: unknown) => l is List<T>;
export declare const asList: <T>(c: Constructor<T>, items?: unknown[]) => List<T>;