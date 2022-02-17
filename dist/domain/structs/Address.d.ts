import { Struct } from '../Struct';
import { Country } from '../enums';
export declare class Address extends Struct {
    readonly street: string;
    readonly houseNumber: string;
    readonly extension: string;
    readonly postalCode: import("../values").PostalCode;
    readonly city: string;
    readonly country: Country;
    toString(): string;
}
export declare const isAddress: (a?: unknown) => a is Address;
