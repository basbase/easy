import { Enum, Text } from '../types';
import { ContentType } from './ContentType';
export declare class RequestOptions extends Enum {
    readonly type: ContentType;
    readonly headers: {
        [key: string]: any;
    };
    static get Form(): RequestOptions;
    static get Json(): RequestOptions;
    static get Stream(): RequestOptions;
    static get Text(): RequestOptions;
    static get Xml(): RequestOptions;
    constructor(type?: ContentType, headers?: {
        [key: string]: any;
    });
    authorization: (auth: string) => this;
    accept: (type: ContentType) => this;
    bearer: (jwt: Text) => this;
    basic: (username: Text, password: Text) => this;
}
