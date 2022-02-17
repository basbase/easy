"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = exports.url = exports.Url = void 0;
const types_1 = require("../../types");
const validator_1 = __importDefault(require("validator"));
class Url extends types_1.Value {
    constructor(value, options) {
        super((0, types_1.asString)(value));
        this.options = options;
    }
    get isValid() {
        return (0, exports.isUrl)(this.value, this.options);
    }
}
exports.Url = Url;
const url = (url, options) => new Url(url, options);
exports.url = url;
const isUrl = (url, options) => {
    return !(0, types_1.isEmpty)(url) && validator_1.default.isURL((0, types_1.asString)(url), options);
};
exports.isUrl = isUrl;
//# sourceMappingURL=Url.js.map