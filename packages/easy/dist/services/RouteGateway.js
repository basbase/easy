"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteGateway = void 0;
const Api_1 = require("./Api");
const types_1 = require("../types");
const http_1 = require("../http");
class RouteGateway extends types_1.Gateway {
    constructor(route, routeId, api = new Api_1.Api()) {
        super();
        this.route = route;
        this.routeId = routeId;
        this.api = api;
    }
    get(uri) {
        return this.api.get(uri).then(r => r.body.data?.items ?? (0, types_1.toList)());
    }
    getOne(uri) {
        return this.get(uri).then(r => r.first());
    }
    all() {
        return this.get(this.route());
    }
    byId(id) {
        return this.getOne(this.routeId().id(id));
    }
    search(q) {
        return this.get(this.route().query(q));
    }
    exists(id) {
        return this.get(this.routeId().id(id))
            .then(r => r.length === 1)
            .catch(r => (http_1.HttpStatus.NotFound.equals(r.status) ? false : Promise.reject(r)));
    }
    add(item) {
        return this.api.post(this.route(), item).then(r => r.body.data?.items.first() ?? {});
    }
    update(item) {
        return this.api.patch(this.routeId().id(item.id), item).then(r => r.body.data?.items.first() ?? {});
    }
    upsert(item) {
        return this.api.put(this.routeId().id(item.id), item).then(r => r.body.data?.items.first() ?? {});
    }
    remove(id) {
        return this.api.delete(this.routeId().id(id)).then(() => true);
    }
}
exports.RouteGateway = RouteGateway;
//# sourceMappingURL=RouteGateway.js.map