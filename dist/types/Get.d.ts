import { Func } from './Func';
export declare type Get<T = any, Args = any> = T | Func<T, Args>;
export declare type Predicate<Args = unknown> = Get<boolean, Args>;
export declare const ofGet: <T, Args = any>(g: Get<T, Args>, ...args: Args[]) => T;
export declare const ifGet: <T>(pred: Get, valid: Get<T, any>, invalid: Get<T, any>) => T;
export declare type GetProperty<T, Prop> = keyof T | Func<Prop, T>;
export declare const ofProperty: <T, Prop>(t: T, p: GetProperty<T, Prop>) => Prop;
