"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHttpStatus = exports.isHttpStatus = exports.HttpStatus = void 0;
const types_1 = require("../types");
class HttpStatus extends types_1.Enum {
    get isError() {
        return this.isClientError || this.isServerError;
    }
    get isClientError() {
        return this.id >= 400 && this.id < 500;
    }
    get isServerError() {
        return this.id >= 500 && this.id < 600;
    }
    get status() {
        return this.id;
    }
}
exports.HttpStatus = HttpStatus;
HttpStatus.Ok = new HttpStatus('Ok', 200);
HttpStatus.Created = new HttpStatus('Created', 201);
HttpStatus.NoContent = new HttpStatus('No content', 204);
HttpStatus.MultipleChoices = new HttpStatus('Multiple Choices', 300);
HttpStatus.MovedPermanently = new HttpStatus('Moved Permanently', 301);
HttpStatus.Found = new HttpStatus('Found', 302);
HttpStatus.BadRequest = new HttpStatus('Bad request', 400);
HttpStatus.NotAuthorized = new HttpStatus('Not authorized', 401);
HttpStatus.Forbidden = new HttpStatus('Forbidden', 403);
HttpStatus.NotFound = new HttpStatus('Not found', 404);
HttpStatus.Conflict = new HttpStatus('Conflict', 409);
HttpStatus.ImATeapot = new HttpStatus("I'm a teapot", 418);
HttpStatus.InternalServerError = new HttpStatus('Internal server error', 500);
HttpStatus.NotImplemented = new HttpStatus('Not implemented', 501);
HttpStatus.BadGateway = new HttpStatus('Bad gateway', 502);
HttpStatus.ServiceUnavailable = new HttpStatus('Service unavailable', 503);
const isHttpStatus = (s) => (0, types_1.isAn)(s, 'id', 'status');
exports.isHttpStatus = isHttpStatus;
const toHttpStatus = (s) => ((0, exports.isHttpStatus)(s) ? s : HttpStatus.byId(s));
exports.toHttpStatus = toHttpStatus;
//# sourceMappingURL=HttpStatus.js.map