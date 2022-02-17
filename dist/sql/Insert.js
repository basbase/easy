"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insert = void 0;
const SqlQuery_1 = require("./SqlQuery");
const Clause_1 = require("./Clause");
class Insert extends SqlQuery_1.SqlQuery {
    constructor(table, fields) {
        super(table);
        this.table = table;
        this.fields = fields;
    }
    toString() {
        return (`INSERT INTO ${this.table} ` +
            `(${Object.keys(this.fields).join(', ')}) OUTPUT INSERTED.* ` +
            `VALUES (${Object.values(this.fields)
                .map(v => (0, Clause_1.quote)(v))
                .join(', ')});`);
    }
}
exports.Insert = Insert;
//# sourceMappingURL=Insert.js.map