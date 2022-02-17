import { Struct } from './Struct';
import { Id, Json } from '../types';
import { DateTime } from './values';
export declare class Audit extends Struct {
    readonly by: {
        id: Id;
        user: string;
    };
    readonly when: DateTime;
    constructor(a?: Json);
}
