import { Struct } from './Struct';
import { Id, Json } from '../types';
export declare abstract class Child extends Struct {
    readonly id: Id;
    protected merge: (a: Json) => Json;
}
