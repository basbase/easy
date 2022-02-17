import { Construct } from '../types';
export declare class State {
    protected readonly state: any;
    constructor(state?: any);
    protected get: <T>(key: string, alt?: Construct<T> | undefined) => T;
    protected set: <T>(key: string, value: Construct<T>) => T;
}
