"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple = exports.reject = exports.resolve = void 0;
const types_1 = require("../types");
const resolve = (subject) => Promise.resolve(subject);
exports.resolve = resolve;
const reject = (e) => Promise.reject(e);
exports.reject = reject;
exports.tuple = {
    2: (first, second) => Promise.all([first, second]),
    3: (first, second, third) => Promise.all([first, second, third]),
    4: (first, second, third, forth) => Promise.all([first, second, third, forth]),
    5: (first, second, third, forth, fifth) => Promise.all([first, second, third, forth, fifth]),
    all: (first, second) => Promise.all([first, Promise.all(second)]),
    spread: (first, ...second) => Promise.all([first, Promise.all((0, types_1.toArray)(second))]),
};
//# sourceMappingURL=Promise.js.map