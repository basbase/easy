"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestOptions = void 0;
const types_1 = require("../types");
const HttpHeader_1 = require("./HttpHeader");
const ContentType_1 = require("./ContentType");
class RequestOptions extends types_1.Enum {
    constructor(type = ContentType_1.ContentType.Json, headers = {}) {
        super(type.name);
        this.type = type;
        this.headers = headers;
        this.authorization = (auth) => {
            this.headers.Authorization = auth;
            return this;
        };
        this.accept = (type) => {
            this.headers.Accept = type.id;
            return this;
        };
        this.bearer = (jwt) => {
            return (0, types_1.isNotEmpty)(jwt) ? this.authorization(`Bearer ${jwt}`) : this;
        };
        this.basic = (username, password) => {
            const basicAuth = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
            return this.authorization(`Basic ${basicAuth}`);
        };
        this.headers['Content-Type'] = type.id;
        this.headers[HttpHeader_1.HttpHeader.Correlation] = types_1.ctx.request.correlationId ?? (0, types_1.toUuid)();
    }
    static get Form() {
        return new RequestOptions(ContentType_1.ContentType.Form);
    }
    static get Json() {
        return new RequestOptions(ContentType_1.ContentType.Json);
    }
    static get Stream() {
        return new RequestOptions(ContentType_1.ContentType.Stream);
    }
    static get Text() {
        return new RequestOptions(ContentType_1.ContentType.Text);
    }
    static get Xml() {
        return new RequestOptions(ContentType_1.ContentType.Xml);
    }
}
exports.RequestOptions = RequestOptions;
//# sourceMappingURL=RequestOptions.js.map