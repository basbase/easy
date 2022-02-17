"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfWeight = void 0;
const types_1 = require("../../types");
class UnitOfWeight extends types_1.Enum {
    constructor(name, id, gMultiplier) {
        super(name, id);
        this.gMultiplier = gMultiplier;
    }
}
exports.UnitOfWeight = UnitOfWeight;
UnitOfWeight.MG = new UnitOfWeight('MilliGram', 'mg', 0.001);
UnitOfWeight.G = new UnitOfWeight('Gram', 'g', 1);
UnitOfWeight.KG = new UnitOfWeight('Kilogram', 'kg', 1000);
//# sourceMappingURL=UnitOfWeight.js.map