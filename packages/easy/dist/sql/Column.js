"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderColumn = exports.PatternColumn = exports.Column = void 0;
const utils_1 = require("../utils");
const Clause_1 = require("./Clause");
const types_1 = require("../types");
class Column extends utils_1.Property {
    constructor(owner, property, options) {
        super(property, options);
        this.owner = owner;
        this.in = (source = {}) => this.options?.convert?.to(source[this.property] ?? (0, types_1.ofGet)(this.options?.dflt));
        this.out = (source = {}, key = '') => this.options?.convert?.from(source[key]);
        this.function = (func) => this.format(`${func}($name)`);
        this.format = (pattern) => new PatternColumn(this, pattern);
        this.is = (value) => this.clause('=', value);
        this.not = (value) => this.clause('<>', value);
        this.like = (value) => this.clause('LIKE', `%${value}%`);
        this.startsLike = (value) => this.clause('LIKE', `${value}%`);
        this.endsLike = (value) => this.clause('LIKE', `%${value}`);
        this.unlike = (value) => this.clause('NOT LIKE', `%${value}%`);
        this.less = (value) => this.clause('<', value);
        this.lessEqual = (value) => this.clause('<=', value);
        this.greater = (value) => this.clause('>', value);
        this.greaterEqual = (value) => this.clause('>=', value);
        this.as = (as) => this.format(`$col AS ${as}`);
        this.clause = (operator, value) => (0, Clause_1.toClause)(this, operator, value, this?.options?.convert);
    }
    get count() {
        return this.function('COUNT');
    }
    get max() {
        return this.function('MAX');
    }
    get min() {
        return this.function('MIN');
    }
    get sum() {
        return this.function('SUM');
    }
    get average() {
        return this.function('AVG');
    }
    get length() {
        return this.function('LEN');
    }
    get asc() {
        return this.format('$col ASC');
    }
    get desc() {
        return this.format('$col DESC');
    }
    toString() {
        return `${this.owner}.${this.property}`;
    }
}
exports.Column = Column;
class PatternColumn extends Column {
    constructor(col, pattern) {
        super(col.owner, col.property);
        this.col = col;
        this.pattern = pattern;
    }
    toString() {
        return this.pattern.replace('$col', this.col.toString()).replace('$table', this.col.owner.toString).replace('$name', this.col.property);
    }
}
exports.PatternColumn = PatternColumn;
class OrderColumn extends PatternColumn {
}
exports.OrderColumn = OrderColumn;
//# sourceMappingURL=Column.js.map