import { Get, Predicate } from '../types';
declare class Case<T, V = unknown> {
    protected value: V;
    protected outcome?: T | undefined;
    constructor(value: V, outcome?: T | undefined);
    case(pred: Predicate<V>, out: Get<T, V>): Case<T, V>;
    else(alt: Get<T, V>): T;
}
export declare class Found<T, V> extends Case<T, V> {
    protected value: V;
    protected outcome: T;
    constructor(value: V, outcome: T);
    case(pred: Predicate<V>, out: Get<T, V>): this;
    else(alt: Get<T, V>): T;
}
export declare const choose: <T, V = unknown>(value: V) => Case<T, V>;
export {};
