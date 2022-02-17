import { Text } from './Text';
import { List } from './List';
export declare type Segment = Text & {
    key?: string;
    segment?: string;
    query?: (value: unknown) => string;
};
export declare const uri: {
    host: (key?: string | undefined) => Segment;
    resource: (resource: Uri) => Segment;
    segment: (key?: string | undefined) => Segment;
    path: (key: string) => Segment;
    query: (key: string) => Segment;
};
declare type Prop = {
    segment: Segment;
    value: any;
};
export declare type Uri = {
    id: (id?: unknown) => Uri;
    query: (q?: unknown) => Uri;
    path: string;
    route: (resource: string) => string;
    isInternal: boolean;
    toString: () => string;
};
export declare class EasyUri implements Uri {
    readonly segments: Segment[];
    static readonly id: Segment;
    static readonly query: Segment;
    readonly host: Segment;
    readonly resource: Segment;
    protected state: any;
    constructor(segments?: Segment[]);
    get path(): string;
    get complete(): string;
    get isInternal(): boolean;
    protected get props(): List<Prop>;
    route: (resource?: string | undefined) => string;
    set: (segment: Segment, value?: unknown) => this;
    toString(): string;
    id: (id?: unknown) => this;
    query: (q?: unknown) => this;
}
export {};
