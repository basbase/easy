"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asList = exports.isList = exports.toList = exports.List = void 0;
const Array_1 = require("./Array");
const Json_1 = require("./Json");
const Is_1 = require("./Is");
const IsA_1 = require("./IsA");
const Get_1 = require("./Get");
class List extends Array {
    constructor() {
        super(...arguments);
        this.asc = (p) => this.sort((e1, e2) => ((0, Get_1.ofProperty)(e1, p) > (0, Get_1.ofProperty)(e2, p) ? 1 : -1));
        this.desc = (p) => this.sort((e1, e2) => ((0, Get_1.ofProperty)(e1, p) < (0, Get_1.ofProperty)(e2, p) ? 1 : -1));
        this.first = (p, params) => (p ? this.filter(p, params).first() : this[0]);
        this.isFirst = (value) => value === this.first();
        this.next = (p, params) => (p ? this[this.findIndex(p, params) + 1] : this[0]);
        this.prev = (p, params) => (p ? this[this.findIndex(p, params) - 1] : this[0]);
        this.last = (p, params) => (p ? this.filter(p, params).last() : this[this.length - 1]);
        this.isLast = (value) => value === this.last();
        this.overlaps = (...items) => (0, exports.toList)(...items).some(i => this.some(t => i === t));
        this.toJSON = () => this.reduce((a, i) => {
            a.push(Json_1.json.parse(i));
            return a;
        }, new Array());
        this.map = (f, params) => (0, exports.toList)(super.map(f, params));
        this.mapDefined = (f, params) => this.map(f, params).defined();
        this.distinct = () => this.filter((i, index) => this.indexOf(i) === index);
        this.filter = (p, params) => (0, exports.toList)(super.filter(p, params));
        this.byId = (id) => this.filter(i => i.id === id);
        this.add = (...items) => {
            super.push(...(0, Array_1.toArray)(...items));
            return this;
        };
        this.remove = (item) => {
            const index = this.indexOf(item);
            if (index > -1) {
                this.splice(index, 1);
            }
            return this;
        };
        this.switch = (item) => (this.includes(item) ? this.remove(item) : this.add(item));
        this.defined = () => this.reduce((l, v) => ((0, Is_1.isDefined)(v) ? l.add(v) : l), (0, exports.toList)());
        this.toObject = (key) => (0, Array_1.toObject)(key, this);
        this.orElse = (...alt) => (!(0, Is_1.isEmpty)(this) ? this : !(0, Is_1.isEmpty)(...alt) ? (0, exports.toList)(...alt) : undefined);
    }
}
exports.List = List;
const toList = (...items) => new List(...(0, Array_1.toArray)(...items));
exports.toList = toList;
const isList = (l) => (0, Is_1.isDefined)(l) && (0, Is_1.isArray)(l) && (0, IsA_1.isA)(l, 'first', 'last', 'asc', 'desc');
exports.isList = isList;
const asList = (c, items = []) => (0, exports.toList)(items.map(i => new c(i)));
exports.asList = asList;
//# sourceMappingURL=List.js.map