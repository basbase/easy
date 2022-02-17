import { Json } from '../types';
import { Convert } from '../utils';
export declare class Condition {
    readonly key: string;
    readonly operator: string;
    readonly value: unknown;
    constructor(key: string, operator: string, value: unknown);
    and: (...others: Condition[]) => LogicalCondition;
    or: (...others: Condition[]) => LogicalCondition;
    toJSON(): Json;
}
export declare class LogicalCondition {
    readonly operator: string;
    readonly conditions: Condition[];
    constructor(operator: string, conditions: Condition[]);
    toJSON(): Json;
}
export declare const toCondition: (field: string, operator: string, value: unknown, conv?: Convert) => Condition;
