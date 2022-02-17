"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
const traverse = (subject = {}, property) => {
    const [p, ...props] = property.split('.');
    if (props.length === 0) {
        return subject[p ?? ''];
    }
    return (0, exports.traverse)(subject[p], props.join('.'));
};
exports.traverse = traverse;
//# sourceMappingURL=Traverse.js.map