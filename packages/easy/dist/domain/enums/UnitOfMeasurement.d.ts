import { Enum } from '../../types';
export declare class UnitOfMeasurement extends Enum {
    readonly mmMultiplier: number;
    static readonly MM: UnitOfMeasurement;
    static readonly CM: UnitOfMeasurement;
    static readonly DM: UnitOfMeasurement;
    static readonly M: UnitOfMeasurement;
    static readonly KM: UnitOfMeasurement;
    constructor(name: string, id: string, mmMultiplier: number);
}
