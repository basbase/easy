import { Json, List, Result } from '../types';
import { HttpStatus } from './HttpStatus';
export declare type RestResult = {
    data?: {
        code: number;
        items: List<Json>;
        itemCount: number;
    };
    error?: {
        code: number;
        message: string;
        errorCount: number;
        errors: List<Result>;
    };
};
export declare const rest: {
    toData: (status: HttpStatus, items?: Json[]) => RestResult;
    toError: (status: HttpStatus, errors?: Result[]) => RestResult;
    to: (payload?: any | any[], status?: HttpStatus | undefined) => RestResult;
};
export declare const isRestResult: (r: unknown) => r is RestResult;
