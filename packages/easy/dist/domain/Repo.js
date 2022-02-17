"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
const types_1 = require("../types");
const validation_1 = require("../validation");
const utils_1 = require("../utils");
class Repo {
    constructor(ctor, gateway) {
        this.ctor = ctor;
        this.gateway = gateway;
    }
    all() {
        return this.gateway.all().then(js => js.map(j => new this.ctor(j)));
    }
    byId(id) {
        return this.gateway
            .byId(id)
            .then(j => (0, validation_1.when)(j).not.isDefined.reject(types_1.Exception.DoesNotExist))
            .then(j => new this.ctor(j));
    }
    byKey(key) {
        return this.gateway.by('key', key).then(js => js.map(j => new this.ctor(j)));
    }
    by(key, value) {
        return this.gateway.by(key.toString(), value).then(js => js.map(j => new this.ctor(j)));
    }
    search(q) {
        return this.gateway.search(q).then(js => js.map(j => new this.ctor(j)));
    }
    exists(id) {
        return this.gateway.exists(id);
    }
    add(json) {
        return (0, validation_1.when)(new this.ctor(json))
            .not.isValid.reject()
            .then(i => this.validate(i))
            .then(i => this.gateway.add((0, types_1.toJson)(i)))
            .then(j => new this.ctor(j));
    }
    update(id, json) {
        return this.gateway
            .byId(id)
            .then(j => (0, validation_1.when)(j).not.isDefined.reject(types_1.Exception.DoesNotExist))
            .then(j => new this.ctor(j).update(json))
            .then(i => (0, validation_1.when)(i).not.isValid.reject())
            .then(i => this.validate(i))
            .then(i => this.gateway.update((0, types_1.toJson)(i)))
            .then(j => new this.ctor(j));
    }
    remove(id) {
        return this.gateway.remove(id);
    }
    validate(item) {
        return (0, utils_1.resolve)(item);
    }
    upsert(id, item) {
        return this.update(id, item).catch(e => (types_1.Exception.DoesNotExist.equals(e) ? this.add(item) : (0, utils_1.reject)(e)));
    }
}
exports.Repo = Repo;
//# sourceMappingURL=Repo.js.map