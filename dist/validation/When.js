"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = exports.When = void 0;
const types_1 = require("../types");
const Validate_1 = require("./Validate");
const utils_1 = require("../utils");
class When {
    constructor(subject, valid = true, results) {
        this.subject = subject;
        this.valid = valid;
        this.results = results;
        this.isInstance = (c) => this.clone(this.valid === this.subject instanceof c);
        this.with = (pred) => this.clone(this.valid === (0, types_1.ofGet)(pred, this.subject));
        this.contains = (property) => this.clone(this.valid === (0, types_1.isDefined)((0, types_1.ofGet)(property, this.subject)));
        this.in = (...items) => this.clone(this.valid === (0, types_1.isIn)(this.subject, (0, types_1.toArray)(...items)));
        this.is = (item) => this.clone(this.valid === (this.subject === item));
        this.reject = (error) => !this.valid ? (0, utils_1.resolve)(this.subject) : (0, utils_1.reject)((0, types_1.ofGet)(error, this.subject) ?? this.results ?? types_1.Exception.Unknown);
        this.recover = (f) => (0, utils_1.resolve)(!this.valid ? this.subject : f(this.subject));
        this.clone = (result = true) => new When(this.subject, result, this.results);
    }
    get not() {
        return this.clone(!this.valid);
    }
    get and() {
        return this.clone(this.valid);
    }
    get isDefined() {
        return this.clone(this.valid === (0, types_1.isDefined)(this.subject));
    }
    get isEmpty() {
        return this.clone(this.valid === (0, types_1.isEmpty)(this.subject));
    }
    get isTrue() {
        return this.clone(this.valid === !!this.subject);
    }
    get isValid() {
        this.results = (0, Validate_1.validate)(this.subject);
        return this.clone(this.valid === this.results.isValid);
    }
}
exports.When = When;
const when = (subject) => new When(subject);
exports.when = when;
//# sourceMappingURL=When.js.map