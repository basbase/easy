"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpVerb = void 0;
const types_1 = require("../types");
class HttpVerb extends types_1.Enum {
    constructor(name) {
        super(name, name.toLowerCase(), name.toUpperCase());
    }
}
exports.HttpVerb = HttpVerb;
HttpVerb.Get = new HttpVerb('Get');
HttpVerb.Put = new HttpVerb('Put');
HttpVerb.Patch = new HttpVerb('Patch');
HttpVerb.Post = new HttpVerb('Post');
HttpVerb.Delete = new HttpVerb('Delete');
//# sourceMappingURL=HttpVerb.js.map