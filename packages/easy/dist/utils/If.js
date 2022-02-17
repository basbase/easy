"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifNotEmpty = exports.ifDefined = exports.ifTrue = void 0;
const types_1 = require("../types");
const ifTrue = (o, f, alt) => ((0, types_1.isTrue)(o) ? (0, types_1.ofConstruct)(f, o) : (0, types_1.ofConstruct)(alt, o));
exports.ifTrue = ifTrue;
const ifDefined = (o, f, alt) => ((0, types_1.isDefined)(o) ? (0, types_1.ofConstruct)(f, o) : (0, types_1.ofConstruct)(alt, o));
exports.ifDefined = ifDefined;
const ifNotEmpty = (o, f, alt) => ((0, types_1.isNotEmpty)(o) ? (0, types_1.ofConstruct)(f, o) : (0, types_1.ofConstruct)(alt, o));
exports.ifNotEmpty = ifNotEmpty;
//# sourceMappingURL=If.js.map