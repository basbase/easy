"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = exports.del = exports.post = exports.patch = exports.put = exports.search = exports.get = exports.toVerbOptions = void 0;
const types_1 = require("../types");
const index_1 = require("./index");
const toVerbOptions = (options) => ({
    onOk: options?.onOk ?? index_1.HttpStatus.Ok,
    onNotFound: options?.onNotFound ?? index_1.HttpStatus.NotFound,
    onError: options?.onError ?? index_1.HttpStatus.BadRequest,
    type: options?.type ?? index_1.ContentType.Json,
    cache: options?.cache ?? index_1.CacheControl.disabled(),
});
exports.toVerbOptions = toVerbOptions;
const toVerb = (verb, options) => (subject, property) => {
    (0, types_1.meta)(subject).property(property).set('verb', { verb, options });
};
const get = (options) => toVerb(index_1.HttpVerb.Get, options);
exports.get = get;
const search = (options) => toVerb(index_1.HttpVerb.Get, { onNotFound: index_1.HttpStatus.Ok, ...options });
exports.search = search;
const put = (options) => toVerb(index_1.HttpVerb.Put, options);
exports.put = put;
const patch = (options) => toVerb(index_1.HttpVerb.Patch, options);
exports.patch = patch;
const post = (options) => toVerb(index_1.HttpVerb.Post, { onOk: index_1.HttpStatus.Created, ...options });
exports.post = post;
const del = (options) => toVerb(index_1.HttpVerb.Delete, { onOk: index_1.HttpStatus.NoContent, ...options });
exports.del = del;
const stream = (options) => toVerb(index_1.HttpVerb.Get, { type: index_1.ContentType.Stream, ...options });
exports.stream = stream;
//# sourceMappingURL=Verb.js.map