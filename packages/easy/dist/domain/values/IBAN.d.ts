import { Value } from '../../types';
export declare class IBAN extends Value {
    get isValid(): boolean;
}
export declare const isIBAN: (iban?: unknown) => boolean;
