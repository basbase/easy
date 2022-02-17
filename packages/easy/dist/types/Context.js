"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctx = exports.Context = exports.BaseContext = exports.BaseRequestContext = exports.DotEnvContext = void 0;
const Text_1 = require("./Text");
const Try_1 = require("./Try");
class DotEnvContext {
    constructor() {
        this.domain = process.env.DOMAIN ?? 'easy';
        this.name = process.env.ENVIRONMENT_NAME ?? '';
        this.host = process.env.HOST ?? '';
        this.port = Number.parseInt(process.env.PORT ?? '8080');
        this.get = (key, alt) => (0, Try_1.tryTo)(() => (0, Text_1.text)(key)
            .map(k => k.replace(/([a-z])([A-Z])/g, '$1 $2'))
            .snake.toString()).map(k => process.env[k] ?? alt).value;
    }
}
exports.DotEnvContext = DotEnvContext;
class BaseRequestContext {
    constructor() {
        this.state = {};
        this.create = (f) => f();
    }
    get token() {
        return this.get('token');
    }
    set token(token) {
        this.set('token', token);
    }
    get identity() {
        return this.token;
    }
    get jwt() {
        return this.get('jwt');
    }
    set jwt(jwt) {
        this.set('jwt', jwt);
    }
    get correlationId() {
        return this.get('correlationId');
    }
    set correlationId(id) {
        this.set('correlationId', id);
    }
    get lastError() {
        return this.get('lastError');
    }
    set lastError(error) {
        this.set('lastError', error);
    }
    get(key) {
        return this.state[key];
    }
    set(key, value) {
        return (this.state[key] = value);
    }
}
exports.BaseRequestContext = BaseRequestContext;
class BaseContext extends BaseRequestContext {
}
exports.BaseContext = BaseContext;
class Context {
    constructor(state = {}) {
        this.state = state;
        this.state = {
            ...{
                env: new DotEnvContext(),
                request: new BaseRequestContext(),
                other: {},
            },
            ...this.state,
        };
    }
    get env() {
        return this.state.env;
    }
    set env(env) {
        this.state.env = env;
    }
    get request() {
        return this.state.request;
    }
    set request(request) {
        this.state.request = request;
    }
    get other() {
        return this.state.other;
    }
}
exports.Context = Context;
exports.ctx = new Context();
//# sourceMappingURL=Context.js.map