import { mmIsSameDay } from './mm-is-same-day';
/**
 * @param d
 */
export function mmIsToday(d) {
    return mmIsSameDay(d, new Date());
}
