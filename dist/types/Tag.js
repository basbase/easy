"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchable = exports.tag = void 0;
const Meta_1 = require("./Meta");
const tag = (name) => (subject, property) => {
    (0, Meta_1.meta)(subject).property(property).set(name, property);
};
exports.tag = tag;
const searchable = () => (0, exports.tag)(exports.searchable.name);
exports.searchable = searchable;
//# sourceMappingURL=Tag.js.map