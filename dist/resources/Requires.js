"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requires = exports.Requires = void 0;
const types_1 = require("../types");
class Requires {
    constructor() {
        this.labCoat = () => (subject, property) => {
            (0, types_1.meta)(subject).property(property).set('labCoat', true);
        };
        this.token = () => (subject, property) => {
            (0, types_1.meta)(subject).property(property).set('token', true);
        };
        this.scope = (scope) => (subject, property) => {
            (0, types_1.meta)(subject).property(property).set('token', true);
            (0, types_1.meta)(subject).property(property).set('scope', scope);
        };
        this.useCase = (uc) => (subject, property) => {
            (0, types_1.meta)(subject).property(property).set('token', true);
            (0, types_1.meta)(subject).property(property).set('uc', uc);
        };
    }
}
exports.Requires = Requires;
exports.requires = new Requires();
//# sourceMappingURL=Requires.js.map