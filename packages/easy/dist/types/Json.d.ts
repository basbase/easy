import { Get } from './Get';
export declare type JsonValue = string | number | boolean | null | Json | JsonValue[];
export declare type Json = {
    [key: string]: JsonValue;
};
export declare const isJson: (subject?: unknown) => subject is {
    toJSON: () => Json;
};
export declare const json: {
    parse: (subject: unknown) => Json;
    merge: (...subjects: unknown[]) => Json;
    omit: (subject: unknown, ...keys: string[]) => Json;
};
export declare const toJson: (...subjects: unknown[]) => Json;
export declare const asJson: (j?: unknown, alt?: Get<Json>) => Json;
