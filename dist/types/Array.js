"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObject = exports.toArray = void 0;
const Is_1 = require("./Is");
const toArray = (...items) => items.length > 1 ? items : (0, Is_1.isArray)(items[0]) ? items[0] : (0, Is_1.isDefined)(items[0]) ? [items[0]] : [];
exports.toArray = toArray;
const toObject = (key, ...items) => (0, exports.toArray)(...items).reduce((o, i) => {
    o[i[key]] = i;
    return o;
}, {});
exports.toObject = toObject;
//# sourceMappingURL=Array.js.map