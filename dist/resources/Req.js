"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toReq = exports.Req = void 0;
class Req {
    constructor(path = {}, query = {}, body) {
        this.path = path;
        this.query = query;
        this.body = body;
        this.get = (key) => this.path[key.toString()] ?? this.query[key.toString()];
    }
    get id() {
        return this.get('id');
    }
    get q() {
        return this.get('q');
    }
}
exports.Req = Req;
const toReq = (req) => new Req(req.params, req.query, req.body);
exports.toReq = toReq;
//# sourceMappingURL=Req.js.map