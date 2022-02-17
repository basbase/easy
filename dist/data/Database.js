"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.DefaultProvider = void 0;
const types_1 = require("../types");
class DefaultProvider {
}
exports.DefaultProvider = DefaultProvider;
class Database extends types_1.Enum {
    constructor(name, provider, options) {
        super(name);
        this.provider = provider;
        this.options = options;
        this.provide = () => (0, types_1.ofConstruct)(this.provider, this);
    }
}
exports.Database = Database;
Database.Default = new Database('Default', DefaultProvider);
//# sourceMappingURL=Database.js.map