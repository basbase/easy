import { Json } from './Json';
export declare type ArrayLike<T> = (T | T[])[];
export declare const toArray: <T>(...items: ArrayLike<T>) => T[];
export declare const toObject: <T>(key: keyof T, ...items: ArrayLike<T>) => Json;
