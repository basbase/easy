import { Value } from '../../types';
export declare class Email extends Value {
    constructor(email?: unknown);
    get isValid(): boolean;
    get name(): string;
}
export declare const email: (email?: unknown) => Email;
export declare const isEmail: (email?: unknown) => boolean;
