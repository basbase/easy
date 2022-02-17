import { Struct } from './Struct';
import { Id, Json } from '../types';
import { Audit } from './Audit';
export declare abstract class Entity extends Struct {
    readonly id: Id;
    readonly created: Audit;
    readonly lastModified: Audit;
    protected merge: (a: Json) => Json;
}
