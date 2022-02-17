import { Json, Validatable, Value } from '../types';
interface SignOptions {
    audience?: string | string[] | undefined;
    issuer?: string | undefined;
}
export declare type Algorithm = 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'PS256' | 'PS384' | 'PS512' | 'none';
export declare class Jwt extends Value implements Validatable {
    get isValid(): boolean;
    static sign: (payload: Json, options?: SignOptions | undefined) => Jwt;
    static of: (a: {
        jwt: string;
    }) => Jwt;
    decode: () => Json;
    toJSON(): Json;
}
export {};
