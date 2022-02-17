export declare type Func<T, Args = unknown> = (...args: Args[]) => T;
export declare const isFunc: <T, Args>(o?: unknown) => o is (...params: Args[]) => T;
