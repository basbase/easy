import { Text } from '../types';
import { Convert } from '../utils';
export declare const quote: (a: unknown) => string;
export declare class Clause implements Text {
    readonly first: unknown;
    readonly operator: string;
    readonly second: unknown;
    constructor(first: unknown, operator: string, second: unknown);
    and: (other: Clause) => Clause;
    or: (other: Clause) => Clause;
    toString(): string;
}
export declare const toClause: (first: unknown, operator: string, second: unknown, conv?: Convert) => Clause;
export declare const isClause: (c?: unknown) => c is Clause;
