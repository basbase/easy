"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofProperty = exports.ifGet = exports.ofGet = void 0;
const Func_1 = require("./Func");
const ofGet = (g, ...args) => ((0, Func_1.isFunc)(g) ? g(...args) : g);
exports.ofGet = ofGet;
const ifGet = (pred, valid, invalid) => ((0, exports.ofGet)(pred) ? (0, exports.ofGet)(valid) : (0, exports.ofGet)(invalid));
exports.ifGet = ifGet;
const ofProperty = (t, p) => ((0, Func_1.isFunc)(p) ? p(t) : t[p]);
exports.ofProperty = ofProperty;
//# sourceMappingURL=Get.js.map