"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.route = void 0;
const types_1 = require("../types");
const route = (uri) => (subject) => {
    (0, types_1.meta)(subject).set('route', uri);
};
exports.route = route;
const toRoute = (endpoint, requires, verb, middleware) => (0, types_1.tryTo)(verb)
    .is.defined()
    .map(verb => ({ verb, endpoint, requires, middleware: middleware ?? [] }))
    .orElse();
class Router {
    constructor(resource) {
        this.resource = resource;
    }
    get route() {
        return (0, types_1.meta)(this.resource).get('route');
    }
    get middleware() {
        return (0, types_1.meta)(this.resource).get('middleware') ?? [];
    }
    get endpoints() {
        return (0, types_1.meta)(this.resource)
            .properties('verb')
            .mapDefined(v => toRoute(this.resource[v.property], {
            labCoat: v.get('labCoat') ?? false,
            token: v.get('token') ?? false,
            scope: v.get('scope'),
            uc: v.get('uc'),
        }, v.get('verb'), v.get('middleware')));
    }
}
const routes = (resource) => new Router(resource);
exports.routes = routes;
//# sourceMappingURL=Route.js.map