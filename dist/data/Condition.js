"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCondition = exports.LogicalCondition = exports.Condition = void 0;
const types_1 = require("../types");
const utils_1 = require("../utils");
class Condition {
    constructor(key, operator, value) {
        this.key = key;
        this.operator = operator;
        this.value = value;
        this.and = (...others) => new LogicalCondition('and', [this, ...others]);
        this.or = (...others) => new LogicalCondition('or', [this, ...others]);
    }
    toJSON() {
        return { [this.key]: { [`$${this.operator}`]: types_1.json.parse(this.value) } };
    }
}
exports.Condition = Condition;
class LogicalCondition {
    constructor(operator, conditions) {
        this.operator = operator;
        this.conditions = conditions;
    }
    toJSON() {
        return { [`$${this.operator}`]: this.conditions.map(c => c.toJSON()) };
    }
}
exports.LogicalCondition = LogicalCondition;
const toCondition = (field, operator, value, conv = utils_1.convert.default) => new Condition(field, operator, conv.from(value));
exports.toCondition = toCondition;
//# sourceMappingURL=Condition.js.map