"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResults = exports.toResults = exports.Results = void 0;
const Result_1 = require("./Result");
const Is_1 = require("./Is");
const parse = (...rs) => rs.map(r => ((0, Result_1.isResult)(r) ? r : (0, Result_1.toResult)(r)));
class Results {
    constructor(...rs) {
        this.add = (...rs) => (0, exports.toResults)(...this.results, ...parse(...rs));
        this.results = parse(...rs);
    }
    get length() {
        return this.results.length;
    }
    get isValid() {
        return this.results.length === 0;
    }
}
exports.Results = Results;
const toResults = (...r) => new Results(...r);
exports.toResults = toResults;
const isResults = (r) => (0, Is_1.isDefined)(r) && r instanceof Results;
exports.isResults = isResults;
//# sourceMappingURL=Results.js.map