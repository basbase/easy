import { Uuid } from './Uuid';
import { Identity } from './Identity';
export interface EnvContext {
    readonly domain: string;
    readonly name: string;
    readonly host: string;
    readonly port: number;
    get(key: string, alt?: string): string | undefined;
}
export declare class DotEnvContext implements EnvContext {
    readonly domain: string;
    readonly name: string;
    readonly host: string;
    readonly port: number;
    readonly get: (key: string, alt?: string | undefined) => string | undefined;
}
export interface RequestContext {
    token?: any;
    identity?: Identity;
    jwt: string;
    correlationId?: Uuid;
    lastError?: string;
    get<T>(key: string): T;
    set<T>(key: string, value: T): T;
    create: (f: () => void) => void;
}
export declare class BaseRequestContext implements RequestContext {
    private state;
    get token(): any;
    set token(token: any);
    get identity(): Identity;
    get jwt(): string;
    set jwt(jwt: string);
    get correlationId(): Uuid;
    set correlationId(id: Uuid);
    get lastError(): string | undefined;
    set lastError(error: string | undefined);
    get<T>(key: string): T;
    set<T>(key: string, value: T): T;
    readonly create: (f: () => void) => void;
}
export declare class BaseContext extends BaseRequestContext {
}
export interface Contexts {
    env?: EnvContext;
    request?: RequestContext;
    other?: any;
}
export declare class Context {
    protected state: Contexts;
    constructor(state?: Contexts);
    get env(): EnvContext;
    set env(env: EnvContext);
    get request(): RequestContext;
    set request(request: RequestContext);
    get other(): any;
}
export declare const ctx: Context;
