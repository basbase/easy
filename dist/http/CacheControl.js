"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheControl = void 0;
const types_1 = require("../types");
class CacheControl {
    constructor(age = 1, stale, enabled = true) {
        this.age = age;
        this.stale = stale;
        this.enabled = enabled;
        this.maxAge = (a) => {
            this.age = Math.abs(a);
            return this;
        };
        this.staleWhileRevalidate = (s) => {
            this.stale = (0, types_1.isDefined)(s) ? Math.abs(s) : undefined;
            return this;
        };
        this.value = () => {
            const swr = (0, types_1.isDefined)(this.stale) ? `, stale-while-revalidate=${this.stale}` : '';
            return this.enabled ? `max-age=${this.age}${swr}` : '';
        };
        this.name = 'Cache-Control';
    }
}
exports.CacheControl = CacheControl;
CacheControl.disabled = () => new CacheControl(0, 0, false);
CacheControl.OneSecond = () => new CacheControl().maxAge(1).staleWhileRevalidate(1);
CacheControl.fiveSeconds = () => new CacheControl().maxAge(5).staleWhileRevalidate(5);
CacheControl.tenSeconds = () => new CacheControl().maxAge(10).staleWhileRevalidate(10);
CacheControl.custom = (maxAge, staleWhileRevalidate) => new CacheControl().maxAge(maxAge).staleWhileRevalidate(staleWhileRevalidate);
//# sourceMappingURL=CacheControl.js.map