import { List } from '../types';
import { Column, OrderColumn } from './Column';
import { Join } from './Join';
import { SqlQuery } from './SqlQuery';
import { Table } from './Table';
export declare class Select extends SqlQuery {
    readonly columns: List<Column>;
    protected ordered: List<OrderColumn>;
    protected grouped: List<Column>;
    protected _top: number;
    protected _limit: number;
    protected _offset: number;
    constructor(table: Table | Join, columns?: List<Column>);
    from(t?: Table | Join): this;
    orderBy: (...ordered: OrderColumn[]) => this;
    groupBy(...grouped: Column[]): this;
    top(t: number): this;
    limit(l: number): this;
    offset(o: number): this;
    toString(): string;
}
