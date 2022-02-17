"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAn = exports.isA = void 0;
const Is_1 = require("./Is");
const isA = (t, ...properties) => !(0, Is_1.isPrimitive)(t) && properties.every(p => p.toString() in t);
exports.isA = isA;
exports.isAn = exports.isA;
//# sourceMappingURL=IsA.js.map