"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReject = exports.validate = exports.asResults = void 0;
const types_1 = require("../types");
const When_1 = require("./When");
const utils_1 = require("../utils");
const asResults = (subject, template, options = {}) => (0, types_1.toResults)((0, types_1.toResult)((0, types_1.text)(template).parse(subject, options), (0, types_1.toName)(subject)));
exports.asResults = asResults;
const validators = (subject) => (0, types_1.meta)(subject)
    .keys('constraint')
    .reduce((list, vs) => list.add(vs), (0, types_1.toList)());
const runValidator = (v, subject) => (0, types_1.tryTo)(() => subject[v.property])
    .map(actual => v.constraint(actual))
    .map(res => ((0, types_1.isResults)(res) ? res : !res ? (0, exports.asResults)(subject, v.text, v) : (0, types_1.toResults)()))
    .recover(e => (0, exports.asResults)(subject, (0, types_1.asString)(e))).value;
const constraints = (subject) => (0, types_1.tryTo)(() => validators(subject))
    .map(vs => vs.mapDefined(v => runValidator(v, subject)))
    .map(res => res.reduce((rs, r) => rs.add(...r.results), (0, types_1.toResults)())).value;
const validate = (subject) => (0, utils_1.choose)(subject)
    .case(s => !(0, types_1.isDefined)(s), s => (0, exports.asResults)(s, 'Subject is not defined.'))
    .case(s => (0, types_1.isEnum)(s), (e) => (e.isValid ? (0, types_1.toResults)() : (0, exports.asResults)(e, 'This is not a valid {type}.')))
    .case(s => (0, types_1.isArray)(s), (e) => e.map(i => (0, exports.validate)(i)).reduce((rs, r) => rs.add(...r.results), (0, types_1.toResults)()))
    .case(s => (0, types_1.isValue)(s), (v) => (v.isValid ? (0, types_1.toResults)() : (0, exports.asResults)(v, 'This is not a valid {type}.')))
    .case(s => (0, types_1.isValidatable)(s), v => constraints(v))
    .else((0, types_1.toResults)());
exports.validate = validate;
const validateReject = (subject) => (0, When_1.when)(subject).not.isValid.reject();
exports.validateReject = validateReject;
//# sourceMappingURL=Validate.js.map