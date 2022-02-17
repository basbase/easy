"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
const SqlQuery_1 = require("./SqlQuery");
const types_1 = require("../types");
class Delete extends SqlQuery_1.SqlQuery {
    toString() {
        return `DELETE FROM ${this.table}` + (0, types_1.ifGet)(this.clauses.length, ` WHERE ${this.clauses.join(` AND `)};`, ';');
    }
}
exports.Delete = Delete;
//# sourceMappingURL=Delete.js.map