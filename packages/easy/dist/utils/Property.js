"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const Convert_1 = require("./Convert");
const types_1 = require("../types");
class Property {
    constructor(property, options) {
        this.property = property;
        this.options = options;
        this.in = (source = {}) => this.options?.convert?.to(source[this.property] ?? (0, types_1.ofGet)(this.options?.dflt));
        this.out = (source = {}, key = '') => this.options?.convert?.from(source[key]);
        this.options = { ...options, convert: options?.convert ?? Convert_1.convert.default };
    }
}
exports.Property = Property;
//# sourceMappingURL=Property.js.map