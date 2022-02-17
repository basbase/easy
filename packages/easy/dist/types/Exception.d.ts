import { Text } from './Text';
import { Enum } from './Enum';
import { Id } from './Id';
export declare class Exception extends Enum {
    readonly message: string;
    readonly reason?: Text | undefined;
    static readonly AlreadyExists: Exception;
    static readonly DoesNotExist: Exception;
    static readonly IsMissingId: Exception;
    static readonly IsNotImplemented: Exception;
    static readonly IsNotValid: Exception;
    static readonly Unknown: Exception;
    constructor(message: string, id?: Id, reason?: Text | undefined);
    static readonly CouldNotExecute: (target: Text) => Exception;
    static readonly CouldNotValidate: (target: Text) => Exception;
    static readonly EnvironmentVariableNotFound: (variable: Text) => Exception;
    because: (reason: Text) => Exception;
}
export declare const isException: (e?: unknown, t?: Text | undefined) => e is Exception;
