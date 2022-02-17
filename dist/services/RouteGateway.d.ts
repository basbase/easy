import { Api } from './Api';
import { Func, Gateway, Id, Json, JsonValue, List, Uri } from '../types';
export declare class RouteGateway extends Gateway {
    readonly route: Func<Uri>;
    readonly routeId: Func<Uri>;
    readonly api: Api;
    constructor(route: Func<Uri>, routeId: Func<Uri>, api?: Api);
    get(uri: Uri): Promise<List<Json>>;
    getOne(uri: Uri): Promise<Json | undefined>;
    all(): Promise<List<Json>>;
    byId(id: Id): Promise<Json | undefined>;
    search(q: JsonValue): Promise<List<Json>>;
    exists(id: Id): Promise<boolean>;
    add(item: Json): Promise<Json>;
    update(item: Json): Promise<Json>;
    upsert(item: Json): Promise<Json>;
    remove(id: Id): Promise<boolean>;
}
