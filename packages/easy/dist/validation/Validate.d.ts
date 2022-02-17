import { Results, TemplateOptions, Text } from '../types';
import { Constraint } from './Contraints';
export declare type Validator = {
    property: string | symbol;
    constraint: Constraint;
    text: Text;
    actual?: Text;
};
export declare const asResults: (subject: unknown, template: Text, options?: TemplateOptions) => Results;
export declare const validate: (subject?: unknown) => Results;
export declare const validateReject: <T>(subject: T) => Promise<T>;
