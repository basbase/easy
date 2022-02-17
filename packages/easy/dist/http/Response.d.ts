import { HttpStatus } from './HttpStatus';
import { RestResult } from './RestResult';
import { Code } from '../types';
export declare type Response = {
    status: HttpStatus;
    headers?: {
        [key: string]: any;
    };
    body: RestResult;
};
export declare const isResponse: (r?: unknown) => r is Response;
export declare const toResponse: (status: HttpStatus | Code, body?: unknown, headers?: {
    [key: string]: any;
} | undefined) => Response;
