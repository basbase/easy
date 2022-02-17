import { Gateway, Id, Json, JsonValue, List } from '../types';
export declare class InMemoryGateway extends Gateway {
    private readonly data;
    constructor(data: Promise<List<Json>>);
    all(): Promise<List<Json>>;
    byId(id: Id): Promise<Json | undefined>;
    by: (key: string, value: JsonValue) => Promise<List<Json>>;
    exists(id: Id): Promise<boolean>;
    add(item: Json): Promise<Json>;
    remove(id: Id): Promise<true>;
    update(item: Json): Promise<Json>;
}
