import { Text } from './Text';
import { Result } from './Result';
import { Validatable } from './Validatable';
export declare class Results implements Validatable {
    readonly results: Result[];
    constructor(...rs: (Text | Result)[]);
    get length(): number;
    get isValid(): boolean;
    add: (...rs: (Text | Result)[]) => Results;
}
export declare const toResults: (...r: (Text | Result)[]) => Results;
export declare const isResults: (r?: unknown) => r is Results;
