import { Gateway, Id, Json, List } from '../types';
import { QueryProvider } from '../data';
import { Table } from './Table';
export declare class TableGateway<T extends Table> extends Gateway {
    readonly table: T;
    readonly provider: QueryProvider;
    constructor(table: T, provider?: QueryProvider);
    all(): Promise<List<Json>>;
    byId(id: Id): Promise<Json | undefined>;
    exists(id: Id): Promise<boolean>;
    add(item: Json): Promise<Json>;
    remove(id: Id): Promise<boolean>;
    update(item: Json): Promise<Json>;
}
