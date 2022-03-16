"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryTo = void 0;
const Is_1 = require("./Is");
const validation_1 = require("../validation");
const Constructor_1 = require("./Constructor");
const Get_1 = require("./Get");
class Try {
    constructor() {
        this.is = {
            defined: (prop) => this.filter(v => (0, Is_1.isDefined)(prop ? prop(v) : v)),
            empty: (prop) => this.filter(v => (0, Is_1.isEmpty)(prop ? prop(v) : v)),
            valid: (prop) => this.filter(v => (0, validation_1.validate)(prop ? prop(v) : v).isValid),
            true: (prop) => this.filter(v => (0, Is_1.isTrue)(prop ? prop(v) : v)),
            false: (prop) => this.filter(v => !(0, Is_1.isTrue)(prop ? prop(v) : v)),
            not: {
                defined: (prop) => this.filter(v => !(0, Is_1.isDefined)(prop ? prop(v) : v)),
                empty: (prop) => this.filter(v => !(0, Is_1.isEmpty)(prop ? prop(v) : v)),
                valid: (prop) => this.filter(v => !(0, validation_1.validate)(prop ? prop(v) : v).isValid),
            },
        };
    }
}
Try.of = (c, ...args) => {
    try {
        const out = (0, Get_1.ofGet)(c, ...args);
        return new Success(out instanceof Try ? out.value : out);
    }
    catch (e) {
        return new Failure(e);
    }
};
class Success extends Try {
    constructor(value) {
        super();
        this.value = value;
    }
    get error() {
        throw new Error('No error found');
    }
    get isValid() {
        return true;
    }
    map(f) {
        return (0, exports.tryTo)(f, this.value);
    }
    recover(f) {
        return this;
    }
    recoverFrom(type, f) {
        return this;
    }
    accept(f) {
        return (0, exports.tryTo)(() => {
            f(this.value);
            return this;
        });
    }
    filter(predicate) {
        return (0, exports.tryTo)(() => {
            if (predicate(this.value))
                return this;
            throw new Error(`Applying filter(${predicate.toString()}) failed.`);
        });
    }
    or(value) {
        return this.value;
    }
    orElse(value) {
        return this.value;
    }
    orThrow(_error) {
        return this.value;
    }
}
class Failure extends Try {
    constructor(error) {
        super();
        this.error = error;
    }
    get value() {
        throw this.error;
    }
    get isValid() {
        return false;
    }
    map(f) {
        return new Failure(this.error);
    }
    recover(f) {
        return (0, exports.tryTo)(f, this.error);
    }
    recoverFrom(type, f) {
        return (0, exports.tryTo)(() => (this.error instanceof type ? this.recover(f) : this));
    }
    accept(f) {
        return this;
    }
    filter(predicate) {
        return this;
    }
    or(value) {
        return (0, Get_1.ofGet)(value);
    }
    orElse(value) {
        return (0, Get_1.ofGet)(value);
    }
    orThrow(error) {
        throw (0, Constructor_1.ofConstruct)(error);
    }
}
const tryTo = (c, ...args) => Try.of(c, ...args);
exports.tryTo = tryTo;
//# sourceMappingURL=Try.js.map