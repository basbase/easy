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
exports.Audit = void 0;
const Struct_1 = require("./Struct");
const types_1 = require("../types");
const validation_1 = require("../validation");
const utils_1 = require("../utils");
const values_1 = require("./values");
class Audit extends Struct_1.Struct {
    constructor(a) {
        super((0, utils_1.choose)(a)
            .case(types_1.isDefined, (j) => j)
            .else({ by: types_1.ctx.request?.identity ?? { id: 0, user: 'easy' }, when: values_1.DateTime.now.toJSON() }));
        this.by = { id: this.state.by.id, user: this.state.by.user };
        this.when = new values_1.DateTime(this.state.when);
    }
}
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Object)
], Audit.prototype, "by", void 0);
__decorate([
    (0, validation_1.valid)(),
    __metadata("design:type", values_1.DateTime)
], Audit.prototype, "when", void 0);
exports.Audit = Audit;
//# sourceMappingURL=Audit.js.map