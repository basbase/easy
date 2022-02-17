import { Id, Json, JsonValue, Text } from '../types';
export declare class Req {
    readonly path: Json;
    readonly query: Json;
    readonly body: unknown;
    constructor(path: Json, query: Json, body: unknown);
    get id(): Id;
    get q(): JsonValue;
    get: (key: Text) => any;
}
export declare const toReq: (req: {
    params?: {
        id?: unknown;
    };
    query?: {
        q?: unknown;
    };
    body?: unknown;
}) => Req;
