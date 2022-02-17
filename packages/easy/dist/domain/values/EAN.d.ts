import { Value } from '../../types';
export declare class EAN extends Value {
    get isValid(): boolean;
}
export declare const isEAN: (ean?: unknown) => boolean;
