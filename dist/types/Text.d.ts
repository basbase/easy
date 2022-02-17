import { Get } from './Get';
export declare type Text = {
    toString(): string;
};
export declare const isText: (t?: unknown) => t is Text;
export declare const asString: (t?: unknown, alt?: Get<Text>) => string;
export declare const replaceAll: (origin: Text, search: Text, replace?: Text) => string;
export declare class ToText implements Text {
    readonly subject: string;
    constructor(subject: string);
    get cap(): ToText;
    get title(): ToText;
    get pascal(): ToText;
    get lower(): ToText;
    get upper(): ToText;
    get camel(): ToText;
    get kebab(): ToText;
    get snake(): ToText;
    get plural(): ToText;
    get space(): ToText;
    get sentence(): ToText;
    get initials(): ToText;
    get trim(): ToText;
    parse: (subject: unknown, options?: {}) => ToText;
    is: (...others: unknown[]) => boolean;
    equals: (...others: unknown[]) => boolean;
    get isEmpty(): boolean;
    isLike: (...others: unknown[]) => boolean;
    ifLike: (...others: unknown[]) => this | undefined;
    endsWith: (end?: unknown) => boolean;
    startsWith: (end?: unknown) => boolean;
    first: (n: number) => ToText;
    last: (n: number) => ToText;
    map: (func: Get<string, string>) => ToText;
    replace: (search: Text, replace: Text) => ToText;
    add: (add?: unknown, separator?: string) => ToText;
    toString(): string;
}
export declare const text: (subject?: unknown, alt?: string) => ToText;
