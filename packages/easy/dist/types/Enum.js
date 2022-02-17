"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnum = exports.Enum = void 0;
const IsA_1 = require("./IsA");
const Meta_1 = require("./Meta");
const Is_1 = require("./Is");
const Get_1 = require("./Get");
class Enum {
    constructor(name, id = name.toLowerCase(), code = id.toString()) {
        this.name = name;
        this.id = id;
        this.code = code;
    }
    get isValid() {
        return (0, Is_1.isDefined)(this.id);
    }
    static all() {
        return (0, Meta_1.meta)(this)
            .values()
            .filter((e) => (0, exports.isEnum)(e));
    }
    static byId(id, alt) {
        return ((0, Meta_1.meta)(this)
            .values()
            .first((e) => (0, exports.isEnum)(e) && e.equals(id)) ?? (0, Get_1.ofGet)(alt));
    }
    static byIds(ids) {
        return (0, Meta_1.meta)(this)
            .values()
            .filter((e) => (0, exports.isEnum)(e) && ids?.some(i => e.equals(i)));
    }
    static filter(p, params) {
        return this.all().filter(p, params);
    }
    static first(p, params) {
        return this.all().first(p, params);
    }
    equals(other) {
        return this.id === ((0, exports.isEnum)(other) ? other.id : other);
    }
    isIn(...items) { return items.some(i => i.equals(this)); }
    toJSON() {
        return this.id;
    }
    toString() {
        return this.id.toString();
    }
}
exports.Enum = Enum;
const isEnum = (e) => (0, Is_1.isDefined)(e) && e instanceof Enum && (0, IsA_1.isAn)(e, 'name', 'id', 'code');
exports.isEnum = isEnum;
//# sourceMappingURL=Enum.js.map