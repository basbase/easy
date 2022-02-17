"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleton = exports.build = void 0;
const Text_1 = require("./Text");
class builder {
}
builder.state = {};
builder.singleton = (ctr, ...args) => builder.state[(0, Text_1.asString)(ctr)] ?? (builder.state[(0, Text_1.asString)(ctr)] = new ctr(...args));
builder.reset = () => {
    builder.state = {};
};
exports.build = {
    singleton: (ctr, ...args) => builder.singleton(ctr, ...args),
    reset: () => builder.reset(),
};
const singleton = (ctr, ...args) => exports.build.singleton(ctr, ...args);
exports.singleton = singleton;
//# sourceMappingURL=Builder.js.map