"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsrsasign_1 = require("jsrsasign");
const types_1 = require("../types");
const ms_1 = __importDefault(require("ms"));
function timespan(time, iat) {
    const timestamp = iat || Math.floor(Date.now() / 1000);
    if (typeof time === 'string') {
        const milliseconds = (0, ms_1.default)(time);
        if (typeof milliseconds === 'undefined') {
            return 0;
        }
        return Math.floor(timestamp + milliseconds / 1000);
    }
    else {
        return timestamp + time;
    }
}
class Jwt extends types_1.Value {
    constructor() {
        super(...arguments);
        this.decode = () => jsrsasign_1.KJUR.jws.JWS.parse(this.value).payloadObj;
    }
    get isValid() {
        return (0, types_1.tryTo)(() => types_1.ctx.env.get('tokenPublicKey') ?? '').map(key => jsrsasign_1.KJUR.jws.JWS.verify(this.value, key)).value;
    }
    toJSON() {
        return { jwt: this.value };
    }
}
exports.Jwt = Jwt;
Jwt.sign = (payload, options) => {
    const header = {
        alg: types_1.ctx.env.get('tokenAlgorithm', 'RS256'),
        kid: types_1.ctx.env.get('tokenKeyid') ?? 'easy',
        typ: 'JWT',
    };
    const mergedPayload = {
        ...payload,
        exp: timespan(types_1.ctx.env.get('tokenExpiresIn') ?? '1h'),
    };
    if (options && options.audience) {
        mergedPayload.aud = options.audience;
    }
    if (options && options.issuer) {
        mergedPayload.iss = options.issuer;
    }
    return (0, types_1.tryTo)(() => types_1.ctx.env.get('tokenPrivateKey') ?? '')
        .is.not.empty()
        .map(key => jsrsasign_1.KJUR.jws.JWS.sign(null, header, mergedPayload, key))
        .map(s => new Jwt(s)).value;
};
Jwt.of = (a) => new Jwt(a.jwt);
//# sourceMappingURL=Jwt.js.map