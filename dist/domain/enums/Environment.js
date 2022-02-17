"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const types_1 = require("../../types");
class Environment extends types_1.Enum {
}
exports.Environment = Environment;
Environment.Dev = new Environment('Development', 'dev');
Environment.Tst = new Environment('Test', 'tst');
Environment.Acc = new Environment('Acceptance', 'acc');
Environment.Prd = new Environment('Production', 'prd');
//# sourceMappingURL=Environment.js.map