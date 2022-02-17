"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIBAN = exports.IBAN = void 0;
const types_1 = require("../../types");
const validator_1 = __importDefault(require("validator"));
class IBAN extends types_1.Value {
    get isValid() {
        return (0, exports.isIBAN)(this.value);
    }
}
exports.IBAN = IBAN;
const isIBAN = (iban) => {
    return !(0, types_1.isEmpty)(iban) && validator_1.default.isIBAN((0, types_1.asString)(iban));
};
exports.isIBAN = isIBAN;
//# sourceMappingURL=IBAN.js.map