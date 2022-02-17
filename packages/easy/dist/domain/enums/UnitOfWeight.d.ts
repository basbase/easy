import { Enum } from '../../types';
export declare class UnitOfWeight extends Enum {
    readonly gMultiplier: number;
    static readonly MG: UnitOfWeight;
    static readonly G: UnitOfWeight;
    static readonly KG: UnitOfWeight;
    constructor(name: string, id: string, gMultiplier: number);
}
