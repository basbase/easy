"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Join = void 0;
class Join {
    constructor(first, second, c, c2) {
        this.first = first;
        this.second = second;
        this.c = c;
        this.c2 = c2;
        this.db = this.first.db;
    }
    on(c, c2) {
        this.c = c;
        this.c2 = c2;
        return this;
    }
    toString() {
        return `${this.first} JOIN ${this.second} ON ${this.c} = ${this.c2}`;
    }
}
exports.Join = Join;
//# sourceMappingURL=Join.js.map