import { Clause, Join, List, Table } from '../index';
import { Query } from '../data';
export declare class SqlQuery implements Query {
    protected table: Table | Join;
    readonly clauses: List<Clause>;
    constructor(table: Table | Join, clauses?: List<Clause>);
    where: (...clauses: Clause[]) => this;
}
