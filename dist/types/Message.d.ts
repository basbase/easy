import { Func } from './Func';
export declare type Message<Args> = string | Func<string, Args>;
export declare const ofMessage: <Args>(g: Message<Args>, ...params: Args[]) => string;
