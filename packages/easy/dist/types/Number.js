"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asNumber = void 0;
const Get_1 = require("./Get");
const Try_1 = require("./Try");
const Is_1 = require("./Is");
const Text_1 = require("./Text");
const asNumber = (n, alt) => (0, Try_1.tryTo)(() => (0, Text_1.asString)(n)).map(s => parseInt(s)).filter(n => (0, Is_1.isNumber)(n)).or((0, Get_1.ofGet)(alt) ?? NaN);
exports.asNumber = asNumber;
//# sourceMappingURL=Number.js.map