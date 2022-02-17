import { KJUR } from 'jsrsasign';
import { ctx, Json, tryTo, Validatable, Value } from '../types';
import ms from 'ms';

interface SignOptions {
  audience?: string | string[] | undefined;
  issuer?: string | undefined;
}

export type Algorithm = 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'PS256' | 'PS384' | 'PS512' | 'none';
type Second = number;
function timespan(time: string | number, iat?: number): Second {
  const timestamp = iat || Math.floor(Date.now() / 1000);

  if (typeof time === 'string') {
    const milliseconds = ms(time);
    if (typeof milliseconds === 'undefined') {
      return 0;
    }
    return Math.floor(timestamp + milliseconds / 1000);
  } else {
    return timestamp + time;
  }
}
export class Jwt extends Value implements Validatable {
  get isValid(): boolean {
    return tryTo(() => ctx.env.get('tokenPublicKey') ?? '').map(key => KJUR.jws.JWS.verify(this.value, key)).value;
  }

  static sign = (payload: Json, options?: SignOptions): Jwt => {
    const header = {
      alg: ctx.env.get('tokenAlgorithm', 'RS256') as Algorithm,
      kid: ctx.env.get('tokenKeyid') ?? 'easy',
      typ: 'JWT',
    };

    const mergedPayload: Json = {
      ...payload,
      exp: timespan(ctx.env.get('tokenExpiresIn') ?? '1h'),
    };

    if (options && options.audience) {
      mergedPayload.aud = options.audience;
    }

    if (options && options.issuer) {
      mergedPayload.iss = options.issuer;
    }

    return tryTo(() => ctx.env.get('tokenPrivateKey') ?? '')
      .is.not.empty()
      .map(key => KJUR.jws.JWS.sign(null, header, mergedPayload, key))
      .map(s => new Jwt(s)).value;
  };

  static of = (a: { jwt: string }): Jwt => new Jwt(a.jwt);

  decode = (): Json => KJUR.jws.JWS.parse(this.value).payloadObj as Json;

  toJSON(): Json {
    return { jwt: this.value };
  }
}
