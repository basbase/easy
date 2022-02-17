import { UnitOfWeight } from '../enums';
import { Struct } from '../Struct';
export declare class Weight extends Struct {
    readonly value: number;
    readonly uow: UnitOfWeight;
    sizeInG: () => number;
    gte: (w: Weight) => boolean;
    lte: (w: Weight) => boolean;
    between: (lower: Weight, upper?: Weight) => boolean;
    sum: (add: Weight) => Weight;
}
export declare const weight: (value: number, uow?: UnitOfWeight | undefined) => Weight;
