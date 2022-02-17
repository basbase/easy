import { Func, Results, Text } from '../types';
export declare type Constraint = Func<boolean | Results, any>;
export declare const constraint: <T>(c: Constraint, message: Text) => PropertyDecorator;
export declare const defined: (message?: Text | undefined) => PropertyDecorator;
export declare const required: (message?: Text | undefined) => PropertyDecorator;
export declare const notEmpty: (message?: Text | undefined) => PropertyDecorator;
export declare const valid: () => PropertyDecorator;
export declare const optional: () => PropertyDecorator;
export declare const includes: (sub: string, message?: string | undefined) => PropertyDecorator;
export declare const inList: (values: unknown[], message?: Text | undefined) => PropertyDecorator;
export declare const gt: (limit: number, message?: Text | undefined) => PropertyDecorator;
export declare const gte: (limit: number, message?: Text | undefined) => PropertyDecorator;
export declare const lt: (limit: number, message?: Text | undefined) => PropertyDecorator;
export declare const lte: (limit: number, message?: Text | undefined) => PropertyDecorator;
export declare const past: (message?: Text | undefined) => PropertyDecorator;
export declare const future: (message?: Text | undefined) => PropertyDecorator;
export declare const minLength: (length: number, message?: Text | undefined) => PropertyDecorator;
export declare const maxLength: (length: number, message?: Text | undefined) => PropertyDecorator;
export declare const rule: (message?: Text | undefined) => PropertyDecorator;
