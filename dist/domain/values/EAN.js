"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEAN = exports.EAN = void 0;
const types_1 = require("../../types");
const validator_1 = __importDefault(require("validator"));
class EAN extends types_1.Value {
    get isValid() {
        return (0, exports.isEAN)(this.value);
    }
}
exports.EAN = EAN;
const isEAN = (ean) => {
    return !(0, types_1.isEmpty)(ean) && validator_1.default.isEAN((0, types_1.asString)(ean));
};
exports.isEAN = isEAN;
//# sourceMappingURL=EAN.js.map