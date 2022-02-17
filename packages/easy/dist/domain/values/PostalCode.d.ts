import { Id, Value } from '../../types';
import { Country } from '../enums';
export declare class PostalCode extends Value {
    readonly country: Country | Id;
    constructor(postalCode?: unknown, country?: Country | Id);
    get isValid(): boolean;
}
export declare const postalCode: (postalCode?: unknown, country?: Country | Id) => PostalCode;
