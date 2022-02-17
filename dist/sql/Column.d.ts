import { Property, PropertyOptions } from '../utils';
import { Clause } from './Clause';
import { Json, JsonValue, Text } from '../types';
import { Table } from './Table';
export declare class Column extends Property implements Text {
    readonly owner: Table;
    constructor(owner: Table, property: string, options?: PropertyOptions);
    get count(): Column;
    get max(): Column;
    get min(): Column;
    get sum(): Column;
    get average(): Column;
    get length(): Column;
    get asc(): OrderColumn;
    get desc(): OrderColumn;
    in: (source?: Json) => JsonValue;
    out: (source?: Json, key?: string) => JsonValue;
    function: (func: string) => Column;
    format: (pattern: string) => Column;
    is: (value: unknown) => Clause;
    not: (value: unknown) => Clause;
    like: (value: unknown) => Clause;
    startsLike: (value: unknown) => Clause;
    endsLike: (value: unknown) => Clause;
    unlike: (value: unknown) => Clause;
    less: (value: unknown) => Clause;
    lessEqual: (value: unknown) => Clause;
    greater: (value: unknown) => Clause;
    greaterEqual: (value: unknown) => Clause;
    as: (as: string) => Column;
    toString(): string;
    protected clause: (operator: string, value: unknown) => Clause;
}
export declare class PatternColumn extends Column {
    protected col: Column;
    protected pattern: string;
    constructor(col: Column, pattern: string);
    toString(): string;
}
export declare class OrderColumn extends PatternColumn {
}
