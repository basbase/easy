import { Constructor, Enum } from '../types';
import { DataProvider } from './DataProvider';
export declare type DatabaseOptions = {
    user?: string;
    password?: string;
    host?: string;
    port?: number;
    cluster?: string;
    connectionString?: string;
};
export declare class DefaultProvider implements DataProvider {
}
export declare class Database extends Enum {
    readonly provider: Constructor<DataProvider> | DataProvider;
    readonly options?: DatabaseOptions | undefined;
    static readonly Default: Database;
    constructor(name: string, provider: Constructor<DataProvider> | DataProvider, options?: DatabaseOptions | undefined);
    provide: <P>() => P;
}
