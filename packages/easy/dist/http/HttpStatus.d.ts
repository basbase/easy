import { Code, Enum } from '../types';
export declare class HttpStatus extends Enum {
    static Ok: HttpStatus;
    static Created: HttpStatus;
    static NoContent: HttpStatus;
    static MultipleChoices: HttpStatus;
    static MovedPermanently: HttpStatus;
    static Found: HttpStatus;
    static BadRequest: HttpStatus;
    static NotAuthorized: HttpStatus;
    static Forbidden: HttpStatus;
    static NotFound: HttpStatus;
    static Conflict: HttpStatus;
    static ImATeapot: HttpStatus;
    static InternalServerError: HttpStatus;
    static NotImplemented: HttpStatus;
    static BadGateway: HttpStatus;
    static ServiceUnavailable: HttpStatus;
    get isError(): boolean;
    get isClientError(): boolean;
    get isServerError(): boolean;
    get status(): number;
}
export declare const isHttpStatus: (s?: unknown) => s is HttpStatus;
export declare const toHttpStatus: (s: HttpStatus | Code) => HttpStatus;
