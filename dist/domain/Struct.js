"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Struct = void 0;
const types_1 = require("../types");
const validation_1 = require("../validation");
class Struct {
    constructor(state = {}) {
        this.state = state;
        this.update = (_add) => this;
        this.merge = (a) => types_1.json.merge(this, a);
    }
    get isValid() {
        return (0, validation_1.validate)(this).isValid;
    }
    toJSON() {
        return types_1.json.omit({ ...this }, 'state');
    }
    toString() {
        return this.constructor.name;
    }
}
exports.Struct = Struct;
//# sourceMappingURL=Struct.js.map