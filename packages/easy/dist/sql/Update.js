"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
const SqlQuery_1 = require("./SqlQuery");
const types_1 = require("../types");
const Clause_1 = require("./Clause");
class Update extends SqlQuery_1.SqlQuery {
    constructor(table, fields) {
        super(table);
        this.table = table;
        this.fields = fields;
    }
    toString() {
        return (`UPDATE ${this.table} ` +
            `SET ${Object.entries(this.fields)
                .map(([k, v]) => (0, Clause_1.toClause)(k, '=', v))
                .join(`, `)} ` +
            `OUTPUT INSERTED.*` +
            (0, types_1.ifGet)(this.clauses.length, ` WHERE ${this.clauses.join(` AND `)};`, ';'));
    }
}
exports.Update = Update;
//# sourceMappingURL=Update.js.map