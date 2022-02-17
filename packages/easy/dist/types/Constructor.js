"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toName = exports.ofConstruct = exports.isConstructor = void 0;
const Func_1 = require("./Func");
const Is_1 = require("./Is");
const isConstructor = (c) => ((0, Is_1.isDefined)(c) && (0, Func_1.isFunc)(c) && c.prototype && c.prototype.constructor) === c;
exports.isConstructor = isConstructor;
const ofConstruct = (c, ...args) => ((0, exports.isConstructor)(c) ? new c(...args) : (0, Func_1.isFunc)(c) ? c(...args) : c);
exports.ofConstruct = ofConstruct;
const toName = (subject, postfix = '') => subject?.constructor?.name?.replace(postfix, '').toLowerCase() ?? '';
exports.toName = toName;
//# sourceMappingURL=Constructor.js.map