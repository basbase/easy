"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResult = exports.toResult = void 0;
const IsA_1 = require("./IsA");
const Context_1 = require("./Context");
const toResult = (message, location, domain = Context_1.ctx.env.domain) => ({
    message: message.toString(),
    location: location?.toString(),
    domain: domain?.toString(),
});
exports.toResult = toResult;
const isResult = (r) => (0, IsA_1.isA)(r, 'message');
exports.isResult = isResult;
//# sourceMappingURL=Result.js.map