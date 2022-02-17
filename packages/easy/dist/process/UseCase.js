"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
const types_1 = require("../types");
class UseCase extends types_1.Enum {
    constructor(app, name, id = (0, types_1.text)(name).kebab, scopes = (0, types_1.toList)()) {
        super(name, id.toString());
        this.app = app;
        this.scopes = scopes;
        this.with = (...s) => {
            this.scopes.add(...s);
            return this;
        };
    }
    static byScopes(...s) {
        return this.filter(u => u.scopes.some(us => (0, types_1.isIn)(us, s)));
    }
}
exports.UseCase = UseCase;
//# sourceMappingURL=UseCase.js.map