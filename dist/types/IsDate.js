"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inFuture = exports.inPast = exports.days = exports.isDate = void 0;
const isDate = (o) => o instanceof Date && !isNaN(o.getTime());
exports.isDate = isDate;
exports.days = {
    add: (date, days) => {
        date.setDate(date.getDate() + days);
        return date;
    },
    today: () => new Date(),
    yesterday: () => exports.days.add(exports.days.today(), -1),
    tomorrow: () => exports.days.add(exports.days.today(), 1),
};
const inPast = (o) => (0, exports.isDate)(o) && o <= exports.days.today();
exports.inPast = inPast;
const inFuture = (o) => (0, exports.isDate)(o) && o > exports.days.today();
exports.inFuture = inFuture;
//# sourceMappingURL=IsDate.js.map