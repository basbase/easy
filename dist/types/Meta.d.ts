import 'reflect-metadata';
import { List } from './List';
declare class ClassMeta {
    readonly subject: any;
    private readonly data;
    constructor(subject: any, data?: any);
    get: <T>(key: string) => T;
    set: <T>(key: string, value: T) => T;
    entries: <T = unknown>() => List<[key: string, value: T]>;
    properties: (key?: string | undefined) => List<PropertyMeta>;
    keys: <T = any>(key: string) => List<T>;
    values: <T = unknown>() => List<T>;
    property: (property: string | symbol) => PropertyMeta;
}
declare class PropertyMeta {
    readonly subject: any;
    readonly property: string | symbol;
    private readonly data;
    constructor(subject: any, property: string | symbol, data?: any);
    get value(): any;
    get: <T>(key: string) => T | undefined;
    set: <T>(key: string, value: T) => T;
}
export declare const meta: (subject: unknown) => ClassMeta;
export {};
