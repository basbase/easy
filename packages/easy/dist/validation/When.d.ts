import { Constructor, ErrorOrigin, Get, Predicate, Results } from '../types';
export declare class When<W> {
    readonly subject: W;
    readonly valid: boolean;
    private results?;
    constructor(subject: W, valid?: boolean, results?: Results | undefined);
    get not(): When<W>;
    get and(): When<W>;
    get isDefined(): When<W>;
    get isEmpty(): When<W>;
    get isTrue(): When<W>;
    get isValid(): When<W>;
    isInstance: <U>(c: Constructor<U>) => When<W>;
    with: (pred: Predicate<W>) => When<W>;
    contains: (property: (w: W) => unknown) => When<W>;
    in: (...items: W[]) => When<W>;
    is: (item: W) => When<W>;
    reject: (error?: Get<ErrorOrigin, W> | undefined) => Promise<NonNullable<W>>;
    recover: (f: (item: W) => W | Promise<W>) => Promise<W>;
    protected clone: (result?: boolean) => When<W>;
}
export declare const when: <T>(subject: T) => When<T>;
