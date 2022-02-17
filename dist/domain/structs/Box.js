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
exports.Box = void 0;
const Struct_1 = require("../Struct");
const validation_1 = require("../../validation");
const Dimension_1 = require("./Dimension");
class Box extends Struct_1.Struct {
    constructor() {
        super(...arguments);
        this.l = new Dimension_1.Dimension(this.state.l);
        this.w = new Dimension_1.Dimension(this.state.w);
        this.h = new Dimension_1.Dimension(this.state.h);
        this.sorted = [this.l, this.w, this.h].sort((n1, n2) => n1.sizeInMM() - n2.sizeInMM());
        this.lowestDim = this.sorted[0];
        this.medianDim = this.sorted[1];
        this.maxDim = this.sorted[2];
        this.stack = (qty) => Box.with(this.maxDim, this.medianDim, Dimension_1.Dimension.with(this.lowestDim.value * qty, this.lowestDim.uom));
        this.fits = (contents, qty = 1) => {
            const stackedContent = contents.stack(qty);
            return this.lowestDim.gte(stackedContent.lowestDim) &&
                this.medianDim.gte(stackedContent.medianDim) &&
                this.maxDim.gte(stackedContent.maxDim);
        };
    }
    get isValid() {
        return super.isValid && this.l.isValid && this.w.isValid && this.h.isValid;
    }
}
Box.with = (l, w, h) => new Box({ l, w, h });
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Dimension_1.Dimension)
], Box.prototype, "l", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Dimension_1.Dimension)
], Box.prototype, "w", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Dimension_1.Dimension)
], Box.prototype, "h", void 0);
exports.Box = Box;
//# sourceMappingURL=Box.js.map