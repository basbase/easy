import { Text } from './Text';
export declare type Result = {
    message: string;
    location?: string;
    domain?: string;
};
export declare const toResult: (message: Text, location?: Text | undefined, domain?: Text) => Result;
export declare const isResult: (r?: unknown) => r is Result;
