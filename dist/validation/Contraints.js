"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = exports.maxLength = exports.minLength = exports.future = exports.past = exports.lte = exports.lt = exports.gte = exports.gt = exports.inList = exports.includes = exports.optional = exports.valid = exports.notEmpty = exports.required = exports.defined = exports.constraint = void 0;
const types_1 = require("../types");
const Validate_1 = require("./Validate");
const constraint = (c, message) => (subject, property) => {
    const cs = (0, types_1.meta)(subject).property(property).get('constraint') ?? (0, types_1.toList)();
    (0, types_1.meta)(subject)
        .property(property)
        .set('constraint', cs.add({ property, constraint: c, text: message }));
};
exports.constraint = constraint;
const defined = (message) => (0, exports.constraint)(v => (0, types_1.isDefined)(v), message ?? 'Property {property} must be defined.');
exports.defined = defined;
const required = (message) => (0, exports.constraint)(v => (0, types_1.isNotEmpty)(v), message ?? 'Property {property} is required, and may not be empty.');
exports.required = required;
const notEmpty = (message) => (0, exports.constraint)(v => (0, types_1.isNotEmpty)(v), message ?? 'Property {property} may not be empty.');
exports.notEmpty = notEmpty;
const valid = () => (0, exports.constraint)(v => (0, Validate_1.validate)(v), '');
exports.valid = valid;
const optional = () => (0, exports.constraint)(v => !(0, types_1.isDefined)(v) || (0, Validate_1.validate)(v), '');
exports.optional = optional;
const includes = (sub, message) => (0, exports.constraint)(s => (0, types_1.isDefined)(s) && (0, types_1.isString)(s) && s.includes(sub), message ?? `Value {actual} must include '${sub}'.`);
exports.includes = includes;
const inList = (values, message) => (0, exports.constraint)(v => (0, types_1.isDefined)(v) && (0, types_1.isIn)(v, values), message ?? 'Value {actual} must appear in list.');
exports.inList = inList;
const gt = (limit, message) => (0, exports.constraint)(v => v > limit, message ?? `Value {actual} must be larger than '${limit}'.`);
exports.gt = gt;
const gte = (limit, message) => (0, exports.constraint)(v => v >= limit, message ?? `Value {actual} must be larger than or equal to ${limit}.`);
exports.gte = gte;
const lt = (limit, message) => (0, exports.constraint)(v => v < limit, message ?? `Value {actual} must be smaller than ${limit}.`);
exports.lt = lt;
const lte = (limit, message) => (0, exports.constraint)(v => v <= limit, message ?? `Value {actual} must be smaller than or equal to ${limit}.`);
exports.lte = lte;
const past = (message) => (0, exports.constraint)(v => (0, types_1.inPast)(v), message ?? 'Value {actual} must lay in the past.');
exports.past = past;
const future = (message) => (0, exports.constraint)(v => (0, types_1.inFuture)(v), message ?? 'Value {actual} must lay in the future.');
exports.future = future;
const minLength = (length, message) => (0, exports.constraint)(v => (0, types_1.tryTo)(() => v)
    .is.defined()
    .map(v => (0, types_1.text)(v).toString().length >= length)
    .orElse(true), message ?? `Value {actual} must be at least '${length}' characters long.`);
exports.minLength = minLength;
const maxLength = (length, message) => (0, exports.constraint)(v => (0, types_1.tryTo)(() => v)
    .is.defined()
    .map(v => (0, types_1.text)(v).toString().length <= length)
    .orElse(true), message ?? `Value {actual} cannot be longer than '${length}' characters.`);
exports.maxLength = maxLength;
const rule = (message) => (0, exports.constraint)(v => ((0, types_1.isFunction)(v) ? v() : false), message ?? `Value {actual} must be true`);
exports.rule = rule;
//# sourceMappingURL=Contraints.js.map