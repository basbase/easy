"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const types_1 = require("../types");
const SqlQuery_1 = require("./SqlQuery");
class Select extends SqlQuery_1.SqlQuery {
    constructor(table, columns = (0, types_1.toList)()) {
        super(table);
        this.columns = columns;
        this.ordered = (0, types_1.toList)();
        this.grouped = (0, types_1.toList)();
        this._top = 0;
        this._limit = 0;
        this._offset = 0;
        this.orderBy = (...ordered) => {
            this.ordered.add(ordered);
            return this;
        };
    }
    from(t) {
        this.table = t ?? this.table;
        return this;
    }
    groupBy(...grouped) {
        this.grouped.add(grouped);
        return this;
    }
    top(t) {
        this._top = t;
        return this;
    }
    limit(l) {
        this._limit = l;
        return this;
    }
    offset(o) {
        this._offset = o;
        return this;
    }
    toString() {
        return (`SELECT ` +
            (0, types_1.ifGet)(this._top, `TOP ${this._top} `, '') +
            (0, types_1.ifGet)(this.columns.length, this.columns.join(`, `), '*') +
            ` FROM ${this.table}` +
            (0, types_1.ifGet)(this.clauses.length, ` WHERE ${this.clauses.join(` AND `)}`, '') +
            (0, types_1.ifGet)(this.grouped.length, ` GROUP BY ${this.grouped.join(`, `)}`, '') +
            (0, types_1.ifGet)(this.ordered.length, ` ORDERED BY ${this.ordered.join(`, `)}`, '') +
            (0, types_1.ifGet)(this._limit, ` LIMIT ${this._limit}`, '') +
            (0, types_1.ifGet)(this._offset, ` OFFSET ${this._offset};`, ';'));
    }
}
exports.Select = Select;
//# sourceMappingURL=Select.js.map