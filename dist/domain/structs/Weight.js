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
exports.weight = exports.Weight = void 0;
const enums_1 = require("../enums");
const validation_1 = require("../../validation");
const Struct_1 = require("../Struct");
class Weight extends Struct_1.Struct {
    constructor() {
        super(...arguments);
        this.value = this.state.value;
        this.uow = enums_1.UnitOfWeight.byId(this.state.uow, enums_1.UnitOfWeight.G);
        this.sizeInG = () => this.value * this.uow.gMultiplier;
        this.gte = (w) => this.sizeInG() >= w.sizeInG();
        this.lte = (w) => this.sizeInG() <= w.sizeInG();
        this.between = (lower, upper = (0, exports.weight)(Number.MAX_VALUE, this.uow)) => this.gte(lower) && this.lte(upper);
        this.sum = (add) => (0, exports.weight)((this.sizeInG() + add.sizeInG()) / this.uow.gMultiplier, this.uow);
    }
}
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Number)
], Weight.prototype, "value", void 0);
exports.Weight = Weight;
const weight = (value, uow) => new Weight({ value, uow });
exports.weight = weight;
//# sourceMappingURL=Weight.js.map