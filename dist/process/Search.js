"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const types_1 = require("../types");
const utils_1 = require("../utils");
class Search {
    constructor(repo) {
        this.repo = repo;
        this.all = () => this.repo.all();
        this.byId = (id) => this.repo.byId(id);
        this.byKey = (key) => this.repo.byKey(key);
        this.search = (query) => (0, utils_1.choose)(query)
            .case(q => (0, types_1.isNotEmpty)(q), q => this.repo.search(q))
            .else((0, utils_1.resolve)((0, types_1.toList)()));
        this.exists = (id) => this.repo.exists(id);
    }
}
exports.Search = Search;
//# sourceMappingURL=Search.js.map