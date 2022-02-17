"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = exports.email = exports.Email = void 0;
const types_1 = require("../../types");
const validator_1 = __importDefault(require("validator"));
class Email extends types_1.Value {
    constructor(email) {
        super((0, types_1.asString)(email));
    }
    get isValid() {
        return (0, exports.isEmail)(this.value);
    }
    get name() {
        return (0, types_1.text)(this.value.split('@')[0]).replace('.', ' ').title.toString();
    }
}
exports.Email = Email;
const email = (email) => new Email(email);
exports.email = email;
const isEmail = (email) => {
    return !(0, types_1.isEmpty)(email) && validator_1.default.isEmail((0, types_1.asString)(email));
};
exports.isEmail = isEmail;
//# sourceMappingURL=Email.js.map