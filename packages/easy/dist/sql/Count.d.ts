import { Join } from './Join';
import { Table } from './Table';
import { Select } from './Select';
export declare class Count extends Select {
    constructor(table: Table | Join);
    toString(): string;
}
