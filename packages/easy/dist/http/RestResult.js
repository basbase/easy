"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRestResult = exports.rest = void 0;
const types_1 = require("../types");
const utils_1 = require("../utils");
const HttpStatus_1 = require("./HttpStatus");
const Response_1 = require("./Response");
exports.rest = {
    toData: (status, items = []) => ({
        data: {
            code: status.status,
            items: (0, types_1.toList)(items),
            itemCount: items.length,
        },
    }),
    toError: (status, errors = [(0, types_1.toResult)(status.name)]) => ({
        error: {
            code: status.status,
            message: status.name ?? errors[0].message ?? 'Unknown',
            errors: (0, types_1.toList)(errors),
            errorCount: errors.length,
        },
    }),
    to: (payload, status) => (0, utils_1.choose)(payload)
        .case(p => !(0, types_1.isDefined)(p), p => p)
        .case(p => (0, HttpStatus_1.isHttpStatus)(p), p => exports.rest.toError(p ?? status ?? HttpStatus_1.HttpStatus.InternalServerError, [(0, types_1.toResult)(p.name)]))
        .case(p => (0, types_1.isResult)(p) || (0, types_1.isError)(p), p => exports.rest.toError(status ?? HttpStatus_1.HttpStatus.BadRequest, [p]))
        .case(p => (0, types_1.isResults)(p), p => exports.rest.toError(status ?? HttpStatus_1.HttpStatus.BadRequest, p.results))
        .case(p => (0, Response_1.isResponse)(p), p => exports.rest.toError(status ?? HttpStatus_1.HttpStatus.byId(p.body.error?.code), p.body.error?.errors))
        .case(p => p.error && p.error.errors, p => exports.rest.toError(status ?? HttpStatus_1.HttpStatus.byId(p.error.code, HttpStatus_1.HttpStatus.BadRequest), p.error.errors))
        .case(p => p.data && p.data.items, p => exports.rest.toData(status ?? HttpStatus_1.HttpStatus.byId(p.data.code, HttpStatus_1.HttpStatus.Ok), p.data.items))
        .else(p => exports.rest.toData(status ?? HttpStatus_1.HttpStatus.Ok, (0, types_1.toList)(p))),
};
const isRestResult = (r) => (0, types_1.isDefined)(r) && ((0, types_1.isDefined)(r.data) || (0, types_1.isDefined)(r.error));
exports.isRestResult = isRestResult;
//# sourceMappingURL=RestResult.js.map