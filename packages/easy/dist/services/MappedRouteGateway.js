"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MappedRouteGateway = void 0;
const Api_1 = require("./Api");
const utils_1 = require("../utils");
const RouteGateway_1 = require("./RouteGateway");
class MappedRouteGateway extends RouteGateway_1.RouteGateway {
    constructor(route, routeId, map = new utils_1.Mapper(), api = new Api_1.Api()) {
        super(route, routeId, api);
        this.route = route;
        this.routeId = routeId;
        this.map = map;
        this.api = api;
    }
    all() {
        return super.all().then(is => is.map(i => this.map.in(i)));
    }
    byId(id) {
        return super.byId(id).then(i => this.map.in(i));
    }
    search(q) {
        return super.search(q).then(is => is.map(i => this.map.in(i)));
    }
    add(item) {
        return super.add(this.map.out(item));
    }
    update(item) {
        return super.update(this.map.out(item));
    }
}
exports.MappedRouteGateway = MappedRouteGateway;
//# sourceMappingURL=MappedRouteGateway.js.map