"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
const Meta_1 = require("./Meta");
const List_1 = require("./List");
const Text_1 = require("./Text");
const Constructor_1 = require("./Constructor");
const Try_1 = require("./Try");
class Template {
    constructor(template, subject = {}, options = {}) {
        this.template = template;
        this.subject = subject;
        this.options = options;
        this.toString = () => {
            return (0, Meta_1.meta)(this.options)
                .entries()
                .reduce((t, [k]) => this.option(t, k), this.object())
                .replace('  ', ' ');
        };
        this.value = (subject, prop) => (0, Try_1.tryTo)(() => prop.split('.'))
            .map(p => [p, p.splice(1)])
            .map(([p, ps]) => ps.reduce((t, s) => t[s], (0, Text_1.text)(subject[p[0]])))
            .map(p => p.toString()).value;
        this.props = (tmpl, key, result = (0, List_1.toList)()) => {
            const i1 = tmpl.indexOf(`{${key}`);
            if (i1 < 0) {
                return result;
            }
            const i2 = tmpl.indexOf('}', i1);
            return this.props(tmpl.slice(i2 + 1), key, result.add(tmpl.substring(i1 + 1, i2)));
        };
        this.object = () => {
            return this.props(this.template, 'this').reduce((t, p) => t.replace(`{${p}}`, this.value(this.subject, p.replace('this.', ''))), this.template);
        };
        this.option = (tmpl, prop) => {
            return this.props(tmpl, prop).reduce((t, p) => t.replace(`{${p}}`, this.value(this.options, p)), tmpl);
        };
    }
}
const template = (tmpl, subject, options = {}) => new Template((0, Text_1.asString)(tmpl), subject, {
    type: (0, Constructor_1.toName)(subject),
    ...options,
});
exports.template = template;
//# sourceMappingURL=Template.js.map