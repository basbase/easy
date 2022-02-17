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
exports.Dimension = void 0;
const Struct_1 = require("../Struct");
const validation_1 = require("../../validation");
const enums_1 = require("../enums");
class Dimension extends Struct_1.Struct {
    constructor() {
        super(...arguments);
        this.value = this.state.value;
        this.uom = enums_1.UnitOfMeasurement.byId(this.state.uom, enums_1.UnitOfMeasurement.MM);
        this.sizeInMM = () => this.value * this.uom.mmMultiplier;
        this.gte = (dim) => this.sizeInMM() >= dim.sizeInMM();
    }
}
Dimension.with = (value, uom = enums_1.UnitOfMeasurement.MM) => new Dimension({ value, uom });
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Number)
], Dimension.prototype, "value", void 0);
exports.Dimension = Dimension;
//# sourceMappingURL=Dimension.js.map