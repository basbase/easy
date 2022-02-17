import { SqlQuery } from './SqlQuery';
import { Json } from '../types';
import { Table } from './Table';
export declare class Update extends SqlQuery {
    protected table: Table;
    protected fields: Json;
    constructor(table: Table, fields: Json);
    toString(): string;
}
