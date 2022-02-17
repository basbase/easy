import { Enum } from '../types';
export declare class HttpVerb extends Enum {
    static Get: HttpVerb;
    static Put: HttpVerb;
    static Patch: HttpVerb;
    static Post: HttpVerb;
    static Delete: HttpVerb;
    constructor(name: string);
}
