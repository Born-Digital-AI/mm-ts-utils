"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mm_is_same_day_1 = require("./mm-is-same-day");
/**
 * @param d
 */
function mmIsToday(d) {
    return mm_is_same_day_1.mmIsSameDay(d, new Date());
}
exports.mmIsToday = mmIsToday;
