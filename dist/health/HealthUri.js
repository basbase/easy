"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthUri = void 0;
const types_1 = require("../types");
class HealthUri extends types_1.EasyUri {
}
exports.HealthUri = HealthUri;
HealthUri.health = types_1.uri.segment('health');
HealthUri.Health = new HealthUri([HealthUri.health]);
//# sourceMappingURL=HealthUri.js.map