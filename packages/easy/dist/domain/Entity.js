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
exports.Entity = void 0;
const Struct_1 = require("./Struct");
const types_1 = require("../types");
const validation_1 = require("../validation");
const Audit_1 = require("./Audit");
class Entity extends Struct_1.Struct {
    constructor() {
        super(...arguments);
        this.id = this.state.id ?? (0, types_1.toId)();
        this.created = new Audit_1.Audit(this.state.created);
        this.lastModified = new Audit_1.Audit(this.state.lastModified);
        this.merge = (a) => types_1.json.parse({
            ...this,
            ...a,
            id: this.id,
            created: this.created.toJSON(),
            lastModified: new Audit_1.Audit().toJSON(),
        });
    }
}
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Object)
], Entity.prototype, "id", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Audit_1.Audit)
], Entity.prototype, "created", void 0);
__decorate([
    (0, validation_1.required)(),
    __metadata("design:type", Audit_1.Audit)
], Entity.prototype, "lastModified", void 0);
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map