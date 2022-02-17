"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toOriginatedError = exports.isOriginatedError = exports.OriginatedError = void 0;
const types_1 = require("../types");
class OriginatedError extends Error {
    constructor(origin, options) {
        super();
        this.origin = origin;
        this.options = options;
    }
}
exports.OriginatedError = OriginatedError;
const isOriginatedError = (e) => (0, types_1.isError)(e) && e instanceof OriginatedError;
exports.isOriginatedError = isOriginatedError;
const toOriginatedError = (e, options) => (0, exports.isOriginatedError)(e) ? e : new OriginatedError(e, options);
exports.toOriginatedError = toOriginatedError;
//# sourceMappingURL=OriginatedError.js.map