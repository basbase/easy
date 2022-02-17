"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mappings = exports.Mapper = exports.isMapping = void 0;
const types_1 = require("../types");
const Property_1 = require("./Property");
const State_1 = require("./State");
const isMapping = (m) => (0, types_1.isA)(m, 'in', 'out');
exports.isMapping = isMapping;
class Mapper extends State_1.State {
    constructor(options = { startFrom: 'scratch' }, property = '') {
        super();
        this.options = options;
        this.property = property;
        this.map = exports.mappings;
    }
    get properties() {
        return this.get('props', () => (0, types_1.meta)(this)
            .entries()
            .filter(([, v]) => (0, exports.isMapping)(v)));
    }
    get keys() {
        return this.get('keys', () => this.properties.map(([k]) => k));
    }
    get columns() {
        return this.get('columns', () => this.properties.map(([, p]) => p.property ?? ''));
    }
    get droppedIn() {
        return this.get('droppedIn', () => this.columns.filter(c => !this.keys.some(k => k === c)));
    }
    get droppedOut() {
        return this.get('droppedOut', () => this.properties.filter(([, p]) => !this.keys.some(k => k === p.property ?? '')).map(([k]) => k));
    }
    in(from = {}) {
        return types_1.json.omit(this.properties.reduce((a, [k, p]) => types_1.json.merge(a, { [k]: p.in({ ...a, ...from }) }), this.options.startFrom === 'source' ? from : {}), ...this.droppedIn);
    }
    out(to = {}) {
        return types_1.json.omit(this.properties.reduce((a, [k, p]) => types_1.json.merge(a, (0, types_1.isEmpty)(p.property) ? p.out(to, k) : { [p.property ?? '']: p.out({ ...a, ...to }, k) }), this.options.startFrom === 'source' ? to : {}), ...this.droppedOut);
    }
    toString() {
        return this.constructor.name;
    }
}
exports.Mapper = Mapper;
exports.mappings = {
    item: (property, options) => new Property_1.Property(property, options),
    ignore: (property = '') => ({
        property,
        in: () => undefined,
        out: () => undefined,
    }),
    func: (property, funcIn, funcOut) => ({
        property,
        in: (source = {}) => (0, types_1.ofGet)(funcIn, source),
        out: (source = {}) => (0, types_1.ofGet)(funcOut, source),
    }),
    add: (funcIn) => ({
        property: '',
        in: (source = {}) => (0, types_1.ofGet)(funcIn, source),
        out: () => undefined,
    }),
    map: (mapper, property = '') => ({
        property,
        in: (source = {}) => (0, types_1.ofConstruct)(mapper).in((0, types_1.isEmpty)(property) ? source : source[property]),
        out: (source = {}, key = '') => (0, types_1.ofConstruct)(mapper).out((0, types_1.isEmpty)(key) ? source : source[key]),
    }),
    propsToList: (...maps) => ({
        property: '',
        in: (source = {}) => (0, types_1.toList)(maps.map(m => (0, types_1.ofConstruct)(m).in(source))).toJSON(),
        out: (source = {}, key = '') => maps.reduce((a, m, i) => {
            const res = (0, types_1.toList)(source[key])[i];
            const out = m.out(res);
            return { ...a, [m.property]: out ?? {} };
        }, {}),
    }),
    list: (mapper, property) => ({
        property: property,
        in: (source = {}) => (0, types_1.toList)(source[property])
            .map((v) => mapper.in(v))
            .toJSON(),
        out: (source = {}, key = '') => (0, types_1.toList)((0, types_1.isEmpty)(key) ? source : source[key])
            .map((v) => mapper.out(v))
            .toJSON(),
    }),
};
//# sourceMappingURL=Mapper.js.map