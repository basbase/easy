"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = exports.ToText = exports.replaceAll = exports.asString = exports.isText = void 0;
const Is_1 = require("./Is");
const Constructor_1 = require("./Constructor");
const Template_1 = require("./Template");
const Func_1 = require("./Func");
const Get_1 = require("./Get");
const isText = (t) => (0, Is_1.isDefined)(t) && (0, Func_1.isFunc)(t.toString);
exports.isText = isText;
const asString = (t, alt = '') => ((0, exports.isText)(t) ? t : (0, Get_1.ofGet)(alt)).toString();
exports.asString = asString;
const replaceAll = (origin, search, replace = '') => (0, exports.asString)(origin).split((0, exports.asString)(search)).join((0, exports.asString)(replace));
exports.replaceAll = replaceAll;
class ToText {
    constructor(subject) {
        this.subject = subject;
        this.parse = (subject, options = {}) => (0, exports.text)((0, Template_1.template)(this.subject, subject, { type: (0, Constructor_1.toName)(subject), ...options }));
        this.is = (...others) => others.some(o => this.toString() === (0, exports.text)(o).toString());
        this.equals = this.is;
        this.isLike = (...others) => others.some(o => this.trim.lower.is((0, exports.text)(o).trim.lower));
        this.ifLike = (...others) => (this.isLike(...others) ? this : undefined);
        this.endsWith = (end) => this.subject.endsWith((0, exports.asString)(end));
        this.startsWith = (end) => this.subject.startsWith((0, exports.asString)(end));
        this.first = (n) => this.map(s => s.substring(0, n));
        this.last = (n) => this.map(s => s.substring(s.length - n));
        this.map = (func) => (0, exports.text)((0, Get_1.ofGet)(func, this.subject));
        this.replace = (search, replace) => this.map(s => (0, exports.replaceAll)(s, search, replace));
        this.add = (add, separator = '') => this.map(s => ((0, Is_1.isDefined)(add) ? `${s}${separator}${(0, exports.text)(add)}` : s));
    }
    get cap() {
        return this.map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
    }
    get title() {
        return this.map(s => s
            .split(' ')
            .map(w => (0, exports.text)(w).cap)
            .join(' '));
    }
    get pascal() {
        return this.title.replace(' ', '');
    }
    get lower() {
        return this.map(s => s.toLowerCase());
    }
    get upper() {
        return this.map(s => s.toUpperCase());
    }
    get camel() {
        return this.title.trim.map(s => `${s.charAt(0).toLowerCase()}${s.slice(1)}`);
    }
    get kebab() {
        return this.lower.replace(' ', '-');
    }
    get snake() {
        return this.upper.replace(' ', '_');
    }
    get plural() {
        return this.ifLike('') ?? this.add('s');
    }
    get space() {
        return this.map(s => s.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_-]/g, ' '));
    }
    get sentence() {
        return this.isEmpty ? this : this.map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}.`);
    }
    get initials() {
        return this.map(s => s
            .split(' ')
            .map(w => w[0])
            .join(''));
    }
    get trim() {
        return this.map(s => s.replace(/ |-|,|_|#|/g, ''));
    }
    get isEmpty() {
        return (0, Is_1.isEmpty)(this.toString());
    }
    toString() {
        return this.subject;
    }
}
exports.ToText = ToText;
const text = (subject, alt = '') => {
    const sub = subject ? (0, exports.asString)(subject) : alt;
    return new ToText(sub !== '[object Object]' ? sub : '');
};
exports.text = text;
//# sourceMappingURL=Text.js.map