"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const types_1 = require("../types");
class Service extends types_1.Enum {
    constructor(name, app, resources = (0, types_1.toList)()) {
        super(name);
        this.name = name;
        this.app = app;
        this.resources = resources;
        this.port = 8080;
        this.pre = () => [];
        this.post = () => [];
    }
    with(...resources) {
        return (0, types_1.tryTo)(this).accept(t => t.resources.add(resources.map(r => new r()))).value;
    }
    atPort(port) {
        return (0, types_1.tryTo)(this).accept(t => (t.port = port)).value;
    }
    start(message = `Service ${this.name} listening on port ${this.port} with ${this.resources.length} resources.`) {
        (0, types_1.tryTo)(this)
            .accept(t => t.pre().forEach(h => this.app.use(h)))
            .accept(t => t.resources.forEach(r => this.app.route(this, r)))
            .accept(t => t.post().forEach(h => this.app.use(h)))
            .accept(t => t.app.listen(this.port, message));
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map