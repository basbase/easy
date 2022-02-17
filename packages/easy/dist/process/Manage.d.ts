import { Search } from './Search';
import { Struct } from '../domain';
import { Id, Json } from '../types';
export declare class Manage<T extends Struct> extends Search<T> {
    add: (json: Json) => Promise<T>;
    update: (id: Id, json: Json) => Promise<T>;
    upsert: (id: Id, json: Json) => Promise<T>;
    remove: (id: Id) => Promise<boolean>;
}
