"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Scope_1 = require("./Scope");
class App extends Scope_1.Scope {
    constructor(name) {
        super(name);
    }
}
exports.App = App;
App.Main = new App('Main');
//# sourceMappingURL=App.js.map