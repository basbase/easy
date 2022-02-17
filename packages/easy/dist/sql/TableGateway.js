"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableGateway = void 0;
const types_1 = require("../types");
const validation_1 = require("../validation");
const utils_1 = require("../utils");
class TableGateway extends types_1.Gateway {
    constructor(table, provider = table.db.provide()) {
        super();
        this.table = table;
        this.provider = provider;
    }
    all() {
        return this.provider.query(this.table.select()).then(js => js.map(j => this.table.in(j)));
    }
    byId(id) {
        return this.provider
            .query(this.table.select().where(this.table.id.is(id)))
            .then(js => js.first())
            .then(j => (0, utils_1.ifDefined)(j, this.table.in(j)));
    }
    exists(id) {
        return this.byId(id).then(j => (0, types_1.isDefined)(j));
    }
    add(item) {
        return this.provider
            .query(this.table.insert(item))
            .then(js => (0, validation_1.when)(js.first()).not.isDefined.reject(`Could not add items with id ${item.id}`))
            .then(j => this.table.in(j));
    }
    remove(id) {
        return this.provider.command(this.table.delete().where(this.table.id.is(id))).then(() => true);
    }
    update(item) {
        return this.provider
            .query(this.table.update(item).where(this.table.id.is(item.id)))
            .then(js => (0, validation_1.when)(js.first()).not.isDefined.reject(`Could not update item with id ${item.id}`))
            .then(j => this.table.in(j));
    }
}
exports.TableGateway = TableGateway;
//# sourceMappingURL=TableGateway.js.map