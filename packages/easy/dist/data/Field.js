"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
const utils_1 = require("../utils");
const Condition_1 = require("./Condition");
const types_1 = require("../types");
class Field extends utils_1.Property {
    constructor() {
        super(...arguments);
        this.is = (value) => this.condition('eq', value);
        this.isNot = (value) => this.condition('ne', value);
        this.isIn = (...value) => this.condition('in', (0, types_1.toArray)(value));
        this.notIn = (...value) => this.condition('nin', (0, types_1.toArray)(value));
        this.exists = (does) => this.condition('exists', does);
        this.greater = (value) => this.condition('gt', value);
        this.greaterEqual = (value) => this.condition('gte', value);
        this.less = (value) => this.condition('lt', value);
        this.lessEqual = (value) => this.condition('lte', value);
        this.condition = (operator, value) => (0, Condition_1.toCondition)(this.property, operator, value, this.options?.convert);
    }
}
exports.Field = Field;
//# sourceMappingURL=Field.js.map