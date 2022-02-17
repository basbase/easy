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
exports.HealthResource = void 0;
const utils_1 = require("../utils");
const HealthUri_1 = require("./HealthUri");
const resources_1 = require("../resources");
let HealthResource = class HealthResource {
    constructor() {
        this.ok = () => (0, utils_1.resolve)({ state: 'Service is healthy.' });
    }
};
__decorate([
    (0, resources_1.get)(),
    __metadata("design:type", Object)
], HealthResource.prototype, "ok", void 0);
HealthResource = __decorate([
    (0, resources_1.route)(HealthUri_1.HealthUri.Health)
], HealthResource);
exports.HealthResource = HealthResource;
//# sourceMappingURL=HealthResource.js.map