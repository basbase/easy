import { Repo, Struct } from '../domain';
import { Id, JsonValue, Key, List } from '../types';
export declare class Search<T extends Struct> {
    protected repo: Repo<T>;
    constructor(repo: Repo<T>);
    all: () => Promise<List<T>>;
    byId: (id: Id) => Promise<T>;
    byKey: (key: Key) => Promise<List<T>>;
    search: (query: JsonValue) => Promise<List<T>>;
    exists: (id: Id) => Promise<boolean>;
}
