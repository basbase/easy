"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple = exports.reject = exports.resolve = void 0;
const types_1 = require("../types");
const resolve = (subject) => Promise.resolve(subject);
exports.resolve = resolve;
const reject = (e) => Promise.reject(e);
exports.reject = reject;
const tuple = (...values) => Promise.all((0, types_1.toArray)(values));
exports.tuple = tuple;
//# sourceMappingURL=Promise.js.map