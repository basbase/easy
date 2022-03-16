"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asJson = exports.toJson = exports.json = exports.isJson = void 0;
const IsA_1 = require("./IsA");
const Is_1 = require("./Is");
const Get_1 = require("./Get");
const isJson = (subject) => (0, IsA_1.isA)(subject, 'toJSON');
exports.isJson = isJson;
exports.json = {
    parse: (subject) => JSON.parse(JSON.stringify(subject ?? {})),
    merge: (...subjects) => exports.json.parse(subjects.map(s => (0, exports.asJson)(s, s => exports.json.parse(s))).reduce((js, j) => ({ ...js, ...j }), {})),
    omit: (subject, ...keys) => keys.reduce((js, k) => {
        delete js[k];
        return js;
    }, exports.json.parse(subject)),
};
exports.toJson = exports.json.merge;
const asJson = (j, alt = {}) => ((0, exports.isJson)(j) ? j.toJSON() : (0, Is_1.isObject)(j) ? j : (0, Get_1.ofGet)(alt, j));
exports.asJson = asJson;
//# sourceMappingURL=Json.js.map