import { Construct, Constructor } from './Constructor';
import { Validatable } from './Validatable';
import { Get } from './Get';
import { Func } from './Func';
declare abstract class Try<T = unknown> implements Validatable {
    is: {
        defined: (prop?: Func<unknown, T> | undefined) => Try<T>;
        empty: (prop?: Func<unknown, T> | undefined) => Try<T>;
        valid: (prop?: Func<unknown, T> | undefined) => Try<T>;
        true: (prop?: Func<unknown, T> | undefined) => Try<T>;
        false: (prop?: Func<unknown, T> | undefined) => Try<T>;
        not: {
            defined: (prop?: Func<unknown, T> | undefined) => Try<T>;
            empty: (prop?: Func<unknown, T> | undefined) => Try<T>;
            valid: (prop?: Func<unknown, T> | undefined) => Try<T>;
        };
    };
    abstract get value(): T;
    abstract get error(): Error;
    abstract get isValid(): boolean;
    static of: <T_1>(c: Get<T_1 | Try<T_1>, any>, ...args: unknown[]) => Try<T_1>;
    abstract map<U>(f: Func<U | Try<U>, T>): Try<U>;
    abstract recover(f: Func<T | Try<T>, Error>): Try<T>;
    abstract recoverFrom(type: Constructor<Error>, f: Func<T | Try<T>, Error>): Try<T>;
    abstract accept(f: Func<void, T>): Try<T>;
    abstract filter(predicate: Func<boolean, T>): Try<T>;
    abstract or(value: T): T;
    abstract orElse(value?: T): T | undefined;
    abstract orThrow(error: Construct<Error>): T;
}
export declare const tryTo: <T>(c: Get<T | Try<T>, any>, ...args: unknown[]) => Try<T>;
export {};
