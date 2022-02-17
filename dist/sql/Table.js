"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const Column_1 = require("./Column");
const utils_1 = require("../utils");
const data_1 = require("../data");
const types_1 = require("../types");
const Select_1 = require("./Select");
const Insert_1 = require("./Insert");
const Update_1 = require("./Update");
const Delete_1 = require("./Delete");
const Join_1 = require("./Join");
const Count_1 = require("./Count");
class Table extends utils_1.Mapper {
    constructor(options = { startFrom: 'source' }) {
        super(options);
        this.map = {
            ...utils_1.mappings,
            column: (name, options) => new Column_1.Column(this, name, options),
        };
        this.id = this.map.column('', { dflt: types_1.toUuid });
        this.prop = (name, options) => this.map.column(name, options);
        this.select = (...columns) => new Select_1.Select(this, (0, types_1.toList)(columns));
        this.insert = (fields) => new Insert_1.Insert(this, this.out(fields));
        this.update = (fields) => new Update_1.Update(this, this.out(fields));
        this.delete = () => new Delete_1.Delete(this, (0, types_1.toList)());
        this.join = (t) => new Join_1.Join(this, t);
    }
    get db() {
        return data_1.Database.Default;
    }
    get count() {
        return new Count_1.Count(this);
    }
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map