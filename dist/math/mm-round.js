/**
 * http://www.jacklmoore.com/notes/rounding-in-javascript/
 * Rounding Errors
 * The most common solutions for rounding to a decimal place is to either use
 * Number.prototype.toFixed(), or multiply the float by some power of 10 in order
 * to leverage Math.round(). Both of these work, except sometimes a decimal of 5
 * is rounded down instead of up.
 *
 * Number((1.005).toFixed(2)); // 1 instead of 1.01
 * Math.round(1.005*100)/100; // 1 instead of 1.01
 *
 * A Better Solution
 * The rounding problem can be avoided by using numbers represented in exponential notation:
 * Number(Math.round(1.005+'e2')+'e-2'); // 1.01
 *
 * @param value
 * @param decimals
 * @returns {Number}
 */
export function mmRound(value, decimals = 0) {
    return Number(Math.round((value + 'e' + decimals)) + 'e-' + decimals);
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 * @param num
 * @param precision
 * @returns {number}
 */
export function mmRound2(num, precision = 0) {
    let factor = Math.pow(10, precision);
    let tempNumber = num * factor;
    let roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}
