"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * http://locutus.io/php/trim/
 * @param str
 * @param charlist
 * @returns {string}
 */
function mmTrim(str, charlist) {
    // prettier-ignore
    let whitespace = [
        ' ', '\n', '\r', '\t', '\f', '\x0b', '\xa0', '\u2000', '\u2001', '\u2002',
        '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009',
        '\u200a', '\u200b', '\u2028', '\u2029', '\u3000',
    ].join('');
    let l = 0;
    let i = 0;
    str += '';
    if (charlist) {
        whitespace = (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
    }
    l = str.length;
    for (i = 0; i < l; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }
    l = str.length;
    for (i = l - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}
exports.mmTrim = mmTrim;
