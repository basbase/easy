import { Enum, Text } from '../types';
export declare class Scope extends Enum {
    readonly name: string;
    protected constructor(name: string, id?: Text);
}
