import { Convert } from './Convert';
import { Get, Json, JsonValue } from '../types';
import { Mapping } from './Mapper';
export declare type PropertyOptions<T = unknown> = {
    convert?: Convert<any, any>;
    dflt?: Get<T>;
    format?: string;
};
export declare class Property<T = unknown> implements Mapping {
    readonly property: string;
    readonly options?: PropertyOptions<unknown> | undefined;
    constructor(property: string, options?: PropertyOptions<unknown> | undefined);
    in: (source?: Json) => JsonValue;
    out: (source?: Json, key?: string) => JsonValue;
}
