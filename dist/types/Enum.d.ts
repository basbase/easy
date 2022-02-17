import { Id } from './Id';
import { List } from './List';
import { Validatable } from './Validatable';
import { JsonValue } from './Json';
import { Get } from './Get';
export declare abstract class Enum implements Validatable {
    readonly name: string;
    readonly id: Id;
    readonly code: string;
    protected constructor(name: string, id?: Id, code?: string);
    get isValid(): boolean;
    static all<E extends Enum>(): List<E>;
    static byId<E extends Enum>(id: Id, alt?: Get<E, unknown>): E;
    static byIds<T extends Enum>(ids?: Id[]): List<T>;
    static filter<E extends Enum>(p: (value: E, index: number, array: E[]) => unknown, params?: unknown): List<E>;
    static first<E extends Enum>(p?: (value: E, index: number, array: E[]) => unknown, params?: unknown): E;
    equals<E extends Enum | Id>(other: E): boolean;
    isIn<E extends Enum>(...items: E[]): boolean;
    toJSON(): JsonValue;
    toString(): string;
}
export declare const isEnum: (e?: unknown) => e is Enum;
