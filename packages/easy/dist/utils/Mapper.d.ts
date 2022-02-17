import { Construct, Get, Json, JsonValue, List } from '../types';
import { Property, PropertyOptions } from './Property';
import { State } from './State';
export declare type Mapping = {
    property: string;
    in: (source?: Json, key?: string) => JsonValue | undefined;
    out: (source?: Json, key?: string) => JsonValue | undefined;
};
export declare const isMapping: (m?: unknown) => m is Mapping;
export declare type MapStartFrom = 'scratch' | 'source';
export declare type MapOptions = {
    startFrom: MapStartFrom;
};
export declare class Mapper extends State implements Mapping {
    readonly options: MapOptions;
    readonly property: string;
    protected readonly map: {
        item: (property: string, options?: PropertyOptions<unknown> | undefined) => Property<unknown>;
        ignore: (property?: string) => Mapping;
        func: (property: string, funcIn: Get<JsonValue | undefined, Json>, funcOut: Get<JsonValue | undefined, Json>) => Mapping;
        add: (funcIn: Get<JsonValue, Json>) => Mapping;
        map: (mapper: Construct<Mapper>, property?: string) => Mapping;
        propsToList: (...maps: Mapping[]) => Mapping;
        list: (mapper: Mapping, property: string) => Mapping;
    };
    constructor(options?: MapOptions, property?: string);
    get properties(): List<[string, Mapping]>;
    get keys(): List<string>;
    get columns(): List<string>;
    private get droppedIn();
    private get droppedOut();
    in(from?: Json): Json;
    out(to?: Json): Json;
    toString(): string;
}
export declare const mappings: {
    item: (property: string, options?: PropertyOptions<unknown> | undefined) => Property;
    ignore: (property?: string) => Mapping;
    func: (property: string, funcIn: Get<JsonValue | undefined, Json>, funcOut: Get<JsonValue | undefined, Json>) => Mapping;
    add: (funcIn: Get<JsonValue, Json>) => Mapping;
    map: (mapper: Construct<Mapper>, property?: string) => Mapping;
    propsToList: (...maps: Mapping[]) => Mapping;
    list: (mapper: Mapping, property: string) => Mapping;
};
