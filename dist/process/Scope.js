"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scope = void 0;
const types_1 = require("../types");
class Scope extends types_1.Enum {
    constructor(name, id = (0, types_1.text)(name).kebab) {
        super(name, id.toString());
        this.name = name;
    }
}
exports.Scope = Scope;
//# sourceMappingURL=Scope.js.map