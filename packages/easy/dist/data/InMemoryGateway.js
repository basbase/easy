"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryGateway = void 0;
const types_1 = require("../types");
const validation_1 = require("../validation");
class InMemoryGateway extends types_1.Gateway {
    constructor(data) {
        super();
        this.data = data;
        this.by = (key, value) => {
            return this.data.then(d => d.filter(i => i[key] === value));
        };
    }
    all() {
        return this.data.then(d => (0, types_1.toList)(d));
    }
    byId(id) {
        return this.data.then(d => d.first(i => i.id === id)).then(d => (d ? { ...d } : undefined));
    }
    exists(id) {
        return this.byId(id).then(d => (0, types_1.isDefined)(d));
    }
    add(item) {
        return (0, validation_1.when)(item)
            .not.contains(i => i.id)
            .reject(types_1.Exception.IsMissingId)
            .then(i => this.exists(i.id))
            .then(ex => (0, validation_1.when)(ex).isTrue.reject(types_1.Exception.AlreadyExists))
            .then(() => this.data.then(d => d.add(item)))
            .then(() => ({ ...item }));
    }
    remove(id) {
        return this.data
            .then(d => (0, validation_1.when)(d.findIndex(i => i.id === id))
            .with(i => i < 0)
            .reject(types_1.Exception.DoesNotExist)
            .then(i => d.splice(i, 1)))
            .then(() => true);
    }
    update(item) {
        return (0, validation_1.when)(item)
            .not.contains(i => i.id)
            .reject(types_1.Exception.IsMissingId)
            .then(i => this.remove(i.id).then(() => this.add(i)));
    }
}
exports.InMemoryGateway = InMemoryGateway;
//# sourceMappingURL=InMemoryGateway.js.map