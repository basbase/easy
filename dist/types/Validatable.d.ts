export interface Validatable {
    isValid: boolean;
}
export declare const isValidatable: (v?: unknown) => v is Validatable;
