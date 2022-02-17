import { Api } from './Api';
import { Func, Id, Json, JsonValue, List, Uri } from '../types';
import { Mapper } from '../utils';
import { RouteGateway } from './RouteGateway';
export declare class MappedRouteGateway extends RouteGateway {
    readonly route: Func<Uri>;
    readonly routeId: Func<Uri>;
    readonly map: Mapper;
    readonly api: Api;
    constructor(route: Func<Uri>, routeId: Func<Uri>, map?: Mapper, api?: Api);
    all(): Promise<List<Json>>;
    byId(id: Id): Promise<Json | undefined>;
    search(q: JsonValue): Promise<List<Json>>;
    add(item: Json): Promise<Json>;
    update(item: Json): Promise<Json>;
}
