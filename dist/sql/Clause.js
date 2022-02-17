"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isClause = exports.toClause = exports.Clause = exports.quote = void 0;
const types_1 = require("../types");
const utils_1 = require("../utils");
const quote = (a) => ((0, types_1.isNumber)(a) || (0, types_1.isBoolean)(a) || (0, exports.isClause)(a) ? a.toString() : `'${a}'`);
exports.quote = quote;
class Clause {
    constructor(first, operator, second) {
        this.first = first;
        this.operator = operator;
        this.second = second;
        this.and = (other) => (0, exports.toClause)(this, 'AND', other);
        this.or = (other) => (0, exports.toClause)(this, 'OR', other);
    }
    toString() {
        return `${this.first} ${this.operator} ${(0, exports.quote)(this.second)}`;
    }
}
exports.Clause = Clause;
const toClause = (first, operator, second, conv = utils_1.convert.default) => new Clause(first, operator, conv.from(second));
exports.toClause = toClause;
const isClause = (c) => (0, types_1.isA)(c, 'and', 'or');
exports.isClause = isClause;
//# sourceMappingURL=Clause.js.map