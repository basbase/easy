import { Enum, List, Text } from '../types';
import { Scope } from './Scope';
import { App } from './App';
export declare class UseCase extends Enum {
    readonly app: App;
    readonly scopes: List<Scope>;
    constructor(app: App, name: string, id?: Text, scopes?: List<Scope>);
    with: (...s: Scope[]) => this;
    static byScopes<U extends UseCase>(...s: Scope[]): List<U>;
}
