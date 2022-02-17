"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = void 0;
const Exception_1 = require("./Exception");
const utils_1 = require("../utils");
class Gateway {
    all() {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
    byId(id) {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
    by(key, value) {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
    search(q) {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
    exists(id) {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
    add(item) {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
    update(item) {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
    remove(id) {
        return (0, utils_1.reject)(Exception_1.Exception.IsNotImplemented);
    }
}
exports.Gateway = Gateway;
//# sourceMappingURL=Gateway.js.map