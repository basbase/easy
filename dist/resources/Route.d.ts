import { List, Uri } from '../types';
import { Verb } from '../http';
import { Req } from './Req';
import { Resource } from './Resource';
import { Scope, UseCase } from '../process';
import { RequestHandler } from 'express';
export declare const route: (uri: Uri) => ClassDecorator;
export declare type Endpoint<T = unknown> = (re: Req) => Promise<T | List<T>>;
export declare type RouteRequires = {
    token: boolean;
    labCoat: boolean;
    scope?: Scope;
    uc?: UseCase;
};
export declare type Route = {
    verb: Verb;
    endpoint: Endpoint;
    requires: RouteRequires;
    middleware: RequestHandler[];
};
export declare type Routes = {
    route: Uri;
    middleware: RequestHandler[];
    endpoints: List<Route>;
};
export declare const routes: (resource: Resource) => Routes;
