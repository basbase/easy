"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const http_1 = require("../http");
const types_1 = require("../types");
const utils_1 = require("../utils");
const asResponse = (uri, verb, error) => (0, utils_1.choose)(error)
    .case(e => (0, types_1.isDefined)(e.response), (e) => (0, http_1.toResponse)(e.response.status, (0, http_1.isRestResult)(e.response.data) ? e.response.data : (0, types_1.toResult)(e.response.statusText, uri.path, uri), e.response.headers))
    .case(e => (0, types_1.isDefined)(e.request), (e) => (0, http_1.toResponse)(e.request.status, (0, types_1.toResult)(e.request.message, uri.path, uri)))
    .else(e => (0, http_1.toResponse)(http_1.HttpStatus.InternalServerError, (0, types_1.toResult)(e.message, uri.path, uri)));
class AxiosProvider {
    constructor() {
        this.execute = ({ uri, verb, body, transform = (r) => r, options = http_1.RequestOptions.Json }) => axios_1.default
            .request({
            url: uri.toString(),
            method: verb.toString(),
            headers: uri.isInternal && (0, types_1.isEmpty)(options.headers.Authorization) ? options.bearer(types_1.ctx.request.jwt).headers : options.headers,
            data: options.type.encode(body),
        })
            .then(r => (0, http_1.toResponse)(r.status, transform(r.data), r.headers))
            .catch(e => Promise.reject(asResponse(uri, verb, e)));
    }
}
exports.AxiosProvider = AxiosProvider;
//# sourceMappingURL=AxiosProvider.js.map