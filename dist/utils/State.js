"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const types_1 = require("../types");
class State {
    constructor(state = {}) {
        this.state = state;
        this.get = (key, alt) => this.state[key] ?? (this.state[key] = (0, types_1.ofConstruct)(alt));
        this.set = (key, value) => this.get(key, value);
    }
}
exports.State = State;
//# sourceMappingURL=State.js.map