import { Enum, Get } from '../types';
export declare class ContentType extends Enum {
    readonly type: string;
    protected readonly encoder: Get<string>;
    static Form: ContentType;
    static Json: ContentType;
    static Stream: ContentType;
    static Text: ContentType;
    static Xml: ContentType;
    private constructor();
    encode: (body?: unknown) => string;
}
