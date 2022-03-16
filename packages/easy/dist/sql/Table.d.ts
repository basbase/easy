import { Column } from './Column';
import { MapOptions, Mapper, PropertyOptions } from '../utils';
import { Database } from '../data';
import { Json } from '../types';
import { Select } from './Select';
import { Insert } from './Insert';
import { Update } from './Update';
import { Delete } from './Delete';
import { Join } from './Join';
import { Count } from './Count';
export declare class Table extends Mapper {
    protected readonly map: {
        column: <T = unknown>(name: string, options?: PropertyOptions<T> | undefined) => Column;
        item: (property: string, options?: PropertyOptions<unknown> | undefined) => import("../utils").Property<unknown>;
        ignore: (property?: string) => import("../utils").Mapping;
        skipIn: (property?: string) => import("../utils").Mapping;
        skipOut: (property?: string) => import("../utils").Mapping;
        func: (property: string, funcIn: import("../types").Get<import("../types").JsonValue | undefined, Json>, funcOut: import("../types").Get<import("../types").JsonValue | undefined, Json>) => import("../utils").Mapping;
        add: (funcIn: import("../types").Get<import("../types").JsonValue, Json>) => import("../utils").Mapping;
        map: (mapper: import("../types").Construct<Mapper>, property?: string) => import("../utils").Mapping;
        propsToList: (...maps: import("../utils").Mapping[]) => import("../utils").Mapping;
        list: (mapper: import("../utils").Mapping, property: string) => import("../utils").Mapping;
    };
    readonly id: Column;
    constructor(options?: MapOptions);
    get db(): Database;
    get count(): Count;
    prop: <T = unknown>(name: string, options?: PropertyOptions<T> | undefined) => Column;
    select: (...columns: Column[]) => Select;
    insert: (fields: Json) => Insert;
    update: (fields: Json) => Update;
    delete: () => Delete;
    readonly join: (t: Table) => Join;
}
