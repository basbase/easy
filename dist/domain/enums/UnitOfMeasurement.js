"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfMeasurement = void 0;
const types_1 = require("../../types");
class UnitOfMeasurement extends types_1.Enum {
    constructor(name, id, mmMultiplier) {
        super(name, id);
        this.mmMultiplier = mmMultiplier;
    }
}
exports.UnitOfMeasurement = UnitOfMeasurement;
UnitOfMeasurement.MM = new UnitOfMeasurement('Millimeter', 'mm', 1);
UnitOfMeasurement.CM = new UnitOfMeasurement('Centimeter', 'cm', 10);
UnitOfMeasurement.DM = new UnitOfMeasurement('Centimeter', 'cm', 100);
UnitOfMeasurement.M = new UnitOfMeasurement('Meter', 'm', 1000);
UnitOfMeasurement.KM = new UnitOfMeasurement('Kilometer', 'km', 1000000);
//# sourceMappingURL=UnitOfMeasurement.js.map