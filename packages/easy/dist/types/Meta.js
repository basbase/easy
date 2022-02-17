"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
require("reflect-metadata");
const List_1 = require("./List");
const Is_1 = require("./Is");
class ClassMeta {
    constructor(subject, data = (subject.prototype ?? subject).constructor) {
        this.subject = subject;
        this.data = data;
        this.get = (key) => Reflect.getMetadata(key, this.data);
        this.set = (key, value) => {
            Reflect.defineMetadata(key, value, this.data);
            return value;
        };
        this.entries = () => (0, List_1.toList)([...Object.entries(this.subject), ...Object.entries(Object.getPrototypeOf(this.subject))]);
        this.properties = (key) => (0, List_1.toList)([...Object.getOwnPropertyNames(this.subject), ...Object.getOwnPropertyNames(Object.getPrototypeOf(this.subject))])
            .map(p => this.property(p))
            .filter(p => (key ? p.get(key) : p));
        this.keys = (key) => this.properties()
            .map(p => p.get(key))
            .reduce((list, u) => (u ? list.add(u) : list), (0, List_1.toList)());
        this.values = () => (0, List_1.toList)([...Object.values(this.subject), ...Object.values(Object.getPrototypeOf(this.subject))]);
        this.property = (property) => new PropertyMeta(this.subject, property);
    }
}
class PropertyMeta {
    constructor(subject, property, data = Reflect.getMetadata(property, subject)) {
        this.subject = subject;
        this.property = property;
        this.data = data;
        this.get = (key) => ((0, Is_1.isDefined)(this.data) && (0, Is_1.isDefined)(this.data[key]) ? this.data[key] : undefined);
        this.set = (key, value) => {
            Reflect.defineMetadata(this.property, { ...this.data, [key]: value }, this.subject);
            return value;
        };
    }
    get value() {
        return this.subject[this.property];
    }
}
const meta = (subject) => new ClassMeta(subject ?? {});
exports.meta = meta;
//# sourceMappingURL=Meta.js.map