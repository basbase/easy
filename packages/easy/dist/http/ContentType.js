"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentType = void 0;
const types_1 = require("../types");
const form_urlencoded_1 = __importDefault(require("form-urlencoded"));
class ContentType extends types_1.Enum {
    constructor(name, type, encoder = b => (0, types_1.asString)(b)) {
        super(name, type);
        this.type = type;
        this.encoder = encoder;
        this.encode = (body) => (0, types_1.ofGet)(this.encoder, body);
    }
}
exports.ContentType = ContentType;
ContentType.Form = new ContentType('form', 'application/x-www-form-urlencoded', b => (0, form_urlencoded_1.default)(b));
ContentType.Json = new ContentType('json', 'application/json', b => b);
ContentType.Stream = new ContentType('stream', 'application/octet-stream');
ContentType.Text = new ContentType('text', 'text/plain');
ContentType.Xml = new ContentType('xml', 'application/xml');
//# sourceMappingURL=ContentType.js.map