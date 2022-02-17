import { Constructor, Gateway, Id, Json, JsonValue, Key, List } from '../types';
import { Struct } from './Struct';
export declare class Repo<T extends Struct> {
    protected ctor: Constructor<T>;
    private readonly gateway;
    constructor(ctor: Constructor<T>, gateway: Gateway);
    all(): Promise<List<T>>;
    byId(id: Id): Promise<T>;
    byKey(key: Key): Promise<List<T>>;
    by(key: keyof T, value: JsonValue): Promise<List<T>>;
    search(q: JsonValue): Promise<List<T>>;
    exists(id: Id): Promise<boolean>;
    add(json: Json): Promise<T>;
    update(id: Id, json: Json): Promise<T>;
    remove(id: Id): Promise<boolean>;
    validate(item: T): Promise<T>;
    upsert(id: Id, item: Json): Promise<T>;
}
