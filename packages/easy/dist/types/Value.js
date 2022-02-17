"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValue = exports.Value = void 0;
const index_1 = require("./index");
class Value {
    constructor(value) {
        this.value = value;
        this.value = value;
    }
    get isValid() {
        return (0, index_1.isDefined)(this.value);
    }
    toJSON() {
        return this.value;
    }
    toString() {
        return (0, index_1.asString)(this.value);
    }
}
exports.Value = Value;
const isValue = (v) => v instanceof Value;
exports.isValue = isValue;
//# sourceMappingURL=Value.js.map