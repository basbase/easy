"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofMessage = void 0;
const Func_1 = require("./Func");
const ofMessage = (g, ...params) => ((0, Func_1.isFunc)(g) ? g(...params) : g);
exports.ofMessage = ofMessage;
//# sourceMappingURL=Message.js.map