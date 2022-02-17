"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
const types_1 = require("../../types");
const moment_1 = __importDefault(require("moment"));
const utils_1 = require("../../utils");
require("moment/min/locales");
class DateTime extends types_1.Value {
    constructor(value, format) {
        super((0, types_1.tryTo)(value).is.defined().map(v => moment_1.default.utc(v, format, true).toISOString()).orElse());
        this.add = (n, unit = 'days') => new DateTime(this.utc.add(n, unit).toISOString());
        this.subtract = (n, unit = 'days') => new DateTime(this.utc.subtract(n, unit).toISOString());
        this.diff = (other, unit = 'days') => this.utc.diff(other.utc, unit);
        this.startOf = (unit) => new DateTime(this.utc.startOf(unit).toISOString());
        this.endOf = (unit) => new DateTime(this.utc.endOf(unit).toISOString());
        this.toLocale = (locales = 'nl-NL', format = 'L') => this.utc.locale(locales).format(format);
        this.toFull = (...locales) => this.toLocale((0, utils_1.ifNotEmpty)(locales, locales), 'LL');
    }
    static get now() {
        return new DateTime(moment_1.default.utc().toISOString());
    }
    get isValid() {
        return (0, types_1.isDefined)(this.value) && this.utc.isValid();
    }
    get fromNow() {
        return this.from();
    }
    from(param, other) {
        const date = (0, types_1.isA)(param) ? param : undefined;
        const locales = (0, types_1.isString)(param) || (0, types_1.isArray)(param) ? param : ((0, types_1.isString)(other) || (0, types_1.isArray)(other) ? other : 'en');
        return (0, types_1.isDefined)(date) ? this.utc.locale(locales).from(date.utc) : this.utc.locale(locales).fromNow();
    }
    get utc() {
        return moment_1.default.utc(this.value);
    }
    isAfter(dt) {
        return this.utc.isAfter(moment_1.default.utc(dt.value));
    }
    isBefore(dt) {
        return this.utc.isBefore(moment_1.default.utc(dt.value));
    }
    equals(dt) {
        return this.utc.isSame(moment_1.default.utc(dt.value));
    }
    toString() {
        return this.value ?? '';
    }
    toDate() {
        return this.isValid ? this.utc.toDate() : undefined;
    }
}
exports.DateTime = DateTime;
//# sourceMappingURL=DateTime.js.map