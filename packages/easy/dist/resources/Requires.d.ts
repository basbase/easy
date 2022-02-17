import { Scope, UseCase } from '../process';
export declare class Requires {
    readonly labCoat: () => PropertyDecorator;
    readonly token: () => PropertyDecorator;
    readonly scope: (scope: Scope) => PropertyDecorator;
    readonly useCase: (uc: UseCase) => PropertyDecorator;
}
export declare const requires: Requires;
