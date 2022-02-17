import { Json, Validatable } from '../types';
export declare abstract class Struct implements Validatable {
    protected readonly state: any;
    constructor(state?: any);
    get isValid(): boolean;
    toJSON(): Json;
    toString(): string;
    update: (_add: Json) => Struct;
    protected merge: (a: Json) => Json;
}
