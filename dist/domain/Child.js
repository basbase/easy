"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Child = void 0;
const Struct_1 = require("./Struct");
const types_1 = require("../types");
const validation_1 = require("../validation");
class Child extends Struct_1.Struct {
    constructor() {
        super(...arguments);
        this.id = this.state.id ?? (0, types_1.toId)();
        this.merge = (a) => types_1.json.parse({ ...this, ...a, id: this.id });
    }
}
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Object)
], Child.prototype, "id", void 0);
exports.Child = Child;
//# sourceMappingURL=Child.js.map