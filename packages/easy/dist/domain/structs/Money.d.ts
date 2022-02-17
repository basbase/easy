import { Struct } from '../Struct';
import { Currency } from '../enums';
export declare class Money extends Struct {
    readonly currency: Currency;
    readonly value: number;
    add: (amount: number) => Money;
    subtract: (amount: number) => Money;
    times: (n: number) => Money;
    toString(): string;
}
export declare const money: (currency: Currency, value: number) => Money;
export declare const isMoney: (m?: unknown) => m is Money;
