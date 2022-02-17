import { Property } from '../utils';
import { Condition } from './Condition';
export declare class Field extends Property {
    is: (value: unknown) => Condition;
    isNot: (value: unknown) => Condition;
    isIn: (...value: unknown[]) => Condition;
    notIn: (...value: unknown[]) => Condition;
    exists: (does: boolean) => Condition;
    greater: (value: unknown) => Condition;
    greaterEqual: (value: unknown) => Condition;
    less: (value: unknown) => Condition;
    lessEqual: (value: unknown) => Condition;
    protected condition: (operator: string, value: unknown) => Condition;
}
