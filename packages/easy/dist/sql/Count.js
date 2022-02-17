"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Count = void 0;
const types_1 = require("../types");
const Select_1 = require("./Select");
class Count extends Select_1.Select {
    constructor(table) {
        super(table);
    }
    toString() {
        return (`SELECT COUNT(*)` +
            (0, types_1.ifGet)(this._top, ` TOP ${this._top}`, '') +
            ` FROM ${this.table}` +
            (0, types_1.ifGet)(this.clauses.length, ` WHERE ${this.clauses.join(` AND `)}`, '') +
            (0, types_1.ifGet)(this.grouped.length, ` GROUP BY ${this.grouped.join(`, `)}`, '') +
            ';');
    }
}
exports.Count = Count;
//# sourceMappingURL=Count.js.map