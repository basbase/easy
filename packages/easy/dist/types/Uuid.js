"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUuid = exports.isUuid = void 0;
const uuid_1 = require("uuid");
const Is_1 = require("./Is");
const isValidUuid = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i);
const isUuid = (id) => (0, Is_1.isString)(id) && isValidUuid.test(id);
exports.isUuid = isUuid;
const toUuid = () => (0, uuid_1.v4)();
exports.toUuid = toUuid;
//# sourceMappingURL=Uuid.js.map