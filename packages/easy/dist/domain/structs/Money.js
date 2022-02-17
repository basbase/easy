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
exports.isMoney = exports.money = exports.Money = void 0;
const Struct_1 = require("../Struct");
const validation_1 = require("../../validation");
const enums_1 = require("../enums");
const types_1 = require("../../types");
class Money extends Struct_1.Struct {
    constructor() {
        super(...arguments);
        this.currency = enums_1.Currency.byId(this.state.currency);
        this.value = this.state.value;
        this.add = (amount) => (0, exports.money)(this.currency, this.value + amount);
        this.subtract = (amount) => (0, exports.money)(this.currency, this.value - amount);
        this.times = (n) => (0, exports.money)(this.currency, this.value * n);
    }
    toString() {
        return `${this.currency.code} ${this.value?.toFixed(this.currency.digits)}`;
    }
}
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", enums_1.Currency)
], Money.prototype, "currency", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Number)
], Money.prototype, "value", void 0);
exports.Money = Money;
const money = (currency, value) => new Money({ currency: currency.id, value });
exports.money = money;
const isMoney = (m) => {
    return !(0, types_1.isEmpty)(m) && m instanceof Money;
};
exports.isMoney = isMoney;
//# sourceMappingURL=Money.js.map