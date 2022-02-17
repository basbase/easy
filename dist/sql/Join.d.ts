import { Column } from './Column';
import { Table } from './Table';
export declare class Join {
    private first;
    private second;
    private c?;
    private c2?;
    readonly db: import("../index").Database;
    constructor(first: Table, second: Table, c?: Column | undefined, c2?: Column | undefined);
    on(c: Column, c2: Column): this;
    toString(): string;
}
