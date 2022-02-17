"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postalCode = exports.PostalCode = void 0;
const types_1 = require("../../types");
const enums_1 = require("../enums");
const validator_1 = __importDefault(require("validator"));
class PostalCode extends types_1.Value {
    constructor(postalCode, country = enums_1.Country.NL) {
        super((0, types_1.text)(postalCode).replace(' ', '').toString());
        this.country = country;
    }
    get isValid() {
        return validator_1.default.isPostalCode(this.value, (this.country instanceof enums_1.Country ? this.country.id : (0, types_1.text)(this.country).upper));
    }
}
exports.PostalCode = PostalCode;
const postalCode = (postalCode, country = enums_1.Country.NL) => new PostalCode(postalCode, country);
exports.postalCode = postalCode;
//# sourceMappingURL=PostalCode.js.map