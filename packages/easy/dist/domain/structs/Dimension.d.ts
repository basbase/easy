import { Struct } from '../Struct';
import { UnitOfMeasurement } from '../enums';
export declare class Dimension extends Struct {
    readonly value: number;
    readonly uom: UnitOfMeasurement;
    static with: (value: number, uom?: UnitOfMeasurement) => Dimension;
    sizeInMM: () => number;
    gte: (dim: Dimension) => boolean;
}
