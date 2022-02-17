"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlQuery = void 0;
const index_1 = require("../index");
class SqlQuery {
    constructor(table, clauses = (0, index_1.toList)()) {
        this.table = table;
        this.clauses = clauses;
        this.where = (...clauses) => {
            this.clauses.add(clauses);
            return this;
        };
    }
}
exports.SqlQuery = SqlQuery;
//# sourceMappingURL=SqlQuery.js.map