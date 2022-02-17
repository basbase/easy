"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.Convert = void 0;
const types_1 = require("../types");
class Convert {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
exports.Convert = Convert;
exports.convert = {
    default: new Convert(a => a, a => a),
    ignore: new Convert(() => undefined, () => undefined),
    toBool: {
        fromNumber: new Convert(b => (b ? 1 : 0), n => n !== 0),
        fromString: new Convert(b => (b ? 'true' : 'false'), s => s === 'true'),
    },
    toDate: {
        fromString: new Convert(s => new Date(s).toISOString(), s => s),
    },
    toNumber: {
        fromString: new Convert(n => (0, types_1.asString)(n), s => parseInt(s)),
    },
};
//# sourceMappingURL=Convert.js.map