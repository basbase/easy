"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choose = exports.Found = void 0;
const types_1 = require("../types");
class Case {
    constructor(value, outcome) {
        this.value = value;
        this.outcome = outcome;
    }
    case(pred, out) {
        return (0, types_1.tryTo)(pred, this.value)
            .is.true()
            .map(() => (0, types_1.ofGet)(out, this.value))
            .map(res => new Found(this.value, res))
            .or(this);
    }
    else(alt) {
        return (0, types_1.ofGet)(alt, this.value);
    }
}
class Found extends Case {
    constructor(value, outcome) {
        super(value, outcome);
        this.value = value;
        this.outcome = outcome;
    }
    case(pred, out) {
        return this;
    }
    else(alt) {
        return this.outcome;
    }
}
exports.Found = Found;
const choose = (value) => new Case(value);
exports.choose = choose;
//# sourceMappingURL=Case.js.map