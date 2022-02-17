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
exports.isAddress = exports.Address = void 0;
const types_1 = require("../../types");
const Struct_1 = require("../Struct");
const validation_1 = require("../../validation");
const enums_1 = require("../enums");
const values_1 = require("../values");
class Address extends Struct_1.Struct {
    constructor() {
        super(...arguments);
        this.street = this.state.street;
        this.houseNumber = this.state.houseNumber;
        this.extension = this.state.extension;
        this.postalCode = (0, values_1.postalCode)(this.state.postalCode, this.state.country);
        this.city = this.state.city;
        this.country = enums_1.Country.byId(this.state.country);
    }
    toString() {
        return (0, types_1.text)(this.street, '')
            .add(this.houseNumber, ' ')
            .add(this.extension, ' ')
            .add((0, types_1.isNotEmpty)(this.postalCode?.value) ? this.postalCode : undefined, ', ')
            .add(this.city, ' ')
            .add(this.country?.name, ' ')
            .toString();
    }
}
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", String)
], Address.prototype, "houseNumber", void 0);
__decorate([
    (0, validation_1.valid)(),
    __metadata("design:type", Object)
], Address.prototype, "postalCode", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", enums_1.Country)
], Address.prototype, "country", void 0);
exports.Address = Address;
const isAddress = (a) => {
    return !(0, types_1.isEmpty)(a) && a instanceof Address;
};
exports.isAddress = isAddress;
//# sourceMappingURL=Address.js.map