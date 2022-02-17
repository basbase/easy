"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyUri = exports.uri = void 0;
const Is_1 = require("./Is");
const Text_1 = require("./Text");
const Constructor_1 = require("./Constructor");
const Context_1 = require("./Context");
const List_1 = require("./List");
const Meta_1 = require("./Meta");
const Try_1 = require("./Try");
const toSegment = (key, { segment, query } = {}) => ({
    key,
    segment,
    query,
    toString: () => key ?? '',
});
exports.uri = {
    host: (key) => toSegment(key, { segment: key ?? Context_1.ctx.env.host ?? '$host' }),
    resource: (resource) => toSegment((0, Constructor_1.toName)(resource, 'Uri'), { segment: (0, Constructor_1.toName)(resource, 'Uri') }),
    segment: (key) => toSegment(key, { segment: key }),
    path: (key) => toSegment(key, { segment: `:${key}` }),
    query: (key) => toSegment(key, { query: (value) => ((0, Is_1.isDefined)(value) ? `${key}=${value}` : '') }),
};
const toRoute = (...segments) => (0, List_1.toList)(segments)
    .mapDefined(s => s.segment)
    .join('/');
class EasyUri {
    constructor(segments = []) {
        this.segments = segments;
        this.host = exports.uri.host();
        this.resource = exports.uri.resource(this);
        this.state = {};
        this.route = (resource = this.resource.key) => toRoute(exports.uri.segment(''), exports.uri.segment(resource?.toLowerCase()), ...this.segments);
        this.set = (segment, value) => {
            (0, Try_1.tryTo)(value)
                .is.defined()
                .accept(value => (this.state[segment.key ?? ''] = { segment, value }));
            return this;
        };
        this.id = (id) => this.set(EasyUri.id, id);
        this.query = (q) => this.set(EasyUri.query, q);
    }
    get path() {
        return toRoute(exports.uri.segment(''), this.resource, ...this.segments);
    }
    get complete() {
        return toRoute(this.host, this.resource, ...this.segments);
    }
    get isInternal() {
        return toRoute(this.host) === Context_1.ctx.env.host ?? '$host';
    }
    get props() {
        return (0, Meta_1.meta)(this.state).values();
    }
    toString() {
        return (0, Try_1.tryTo)(() => this.props)
            .map(ps => ps.filter(p => p.segment?.segment))
            .map(ps => ps.reduce((r, p) => r.replace((0, Text_1.asString)(p.segment.segment), (0, Text_1.asString)(p.value)), this.complete))
            .map(route => ({ route, query: this.props.mapDefined(p => (p.segment?.query ? p.segment?.query(p.value) : undefined))?.join('&') }))
            .map(({ route, query }) => ((0, Is_1.isNotEmpty)(query) ? `${route}?${query}` : route)).value;
    }
}
exports.EasyUri = EasyUri;
EasyUri.id = exports.uri.path('id');
EasyUri.query = exports.uri.query('q');
//# sourceMappingURL=Uri.js.map