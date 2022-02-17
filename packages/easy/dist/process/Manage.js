"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manage = void 0;
const Search_1 = require("./Search");
class Manage extends Search_1.Search {
    constructor() {
        super(...arguments);
        this.add = (json) => this.repo.add(json);
        this.update = (id, json) => this.repo.update(id, json);
        this.upsert = (id, json) => this.repo.upsert(id, json);
        this.remove = (id) => this.repo.remove(id);
    }
}
exports.Manage = Manage;
//# sourceMappingURL=Manage.js.map