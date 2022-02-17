import { JsonValue, Validatable } from './index';
export declare class Value<V extends unknown = string> implements Validatable {
    readonly value: V;
    constructor(value: V);
    get isValid(): boolean;
    toJSON(): JsonValue;
    toString(): string;
}
export declare const isValue: (v?: unknown) => v is Value<string>;
