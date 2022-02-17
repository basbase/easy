import { Get } from './Get';
export declare type Constructor<T = unknown> = {
    new (...args: any[]): T;
};
export declare type Construct<T> = Get<T> | Constructor<T>;
export declare const isConstructor: <T>(c?: unknown) => c is Constructor<T>;
export declare const ofConstruct: <T>(c: Construct<T>, ...args: unknown[]) => T;
export declare const toName: (subject?: unknown, postfix?: string) => string;
