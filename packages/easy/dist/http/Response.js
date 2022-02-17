"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toResponse = exports.isResponse = void 0;
const HttpStatus_1 = require("./HttpStatus");
const RestResult_1 = require("./RestResult");
const types_1 = require("../types");
const isResponse = (r) => (0, types_1.isA)(r, 'status', 'body');
exports.isResponse = isResponse;
const toResponse = (status, body, headers) => ({
    status: (0, HttpStatus_1.toHttpStatus)(status),
    headers,
    body: RestResult_1.rest.to(body),
});
exports.toResponse = toResponse;
//# sourceMappingURL=Response.js.map