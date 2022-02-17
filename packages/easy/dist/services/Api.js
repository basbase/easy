"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.Api = void 0;
const http_1 = require("../http");
const AxiosProvider_1 = require("./AxiosProvider");
class Api {
    constructor(provider = new AxiosProvider_1.AxiosProvider()) {
        this.provider = provider;
        this.get = (uri, options = http_1.RequestOptions.Json, transform) => this.provider.execute({ uri, verb: http_1.HttpVerb.Get, transform, options });
        this.post = (uri, body, options = http_1.RequestOptions.Json, transform) => this.provider.execute({ uri, verb: http_1.HttpVerb.Post, body, transform, options });
        this.put = (uri, body, options = http_1.RequestOptions.Json, transform) => this.provider.execute({ uri, verb: http_1.HttpVerb.Put, body, transform, options });
        this.patch = (uri, body, options = http_1.RequestOptions.Json, transform) => this.provider.execute({ uri, verb: http_1.HttpVerb.Patch, body, transform, options });
        this.delete = (uri, options = http_1.RequestOptions.Json, transform) => this.provider.execute({ uri, verb: http_1.HttpVerb.Delete, transform, options });
    }
}
exports.Api = Api;
exports.api = new Api();
//# sourceMappingURL=Api.js.map