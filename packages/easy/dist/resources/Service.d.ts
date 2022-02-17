import { AppProvider, Handler } from './AppProvider';
import { Constructor, Enum, List } from '../types';
import { Resource } from './Resource';
export declare class Service extends Enum {
    readonly name: string;
    protected app: AppProvider;
    protected resources: List<Resource>;
    protected port: number;
    constructor(name: string, app: AppProvider, resources?: List<Resource>);
    pre: () => Handler[];
    post: () => Handler[];
    with(...resources: Constructor<Resource>[]): this;
    atPort(port: number): this;
    start(message?: string): void;
}
