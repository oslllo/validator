"use strict";

const validator = require("validator");

/**
 * @name byteLength
 * @description Test if `value`'s length (in UTF-8 bytes) falls in a range.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {(Number|Object)} [options = {min:0, max: undefined}] options value
 * @return {Boolean} true if `value`'s length (in UTF-8 bytes) falls in a range, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.byteLength("abc", 2); // => True
 * is.byteLength("a", 2); // => False
 *
 * is.byteLength("de", { min: 2, max: 3 }); // => True
 * is.byteLength("a", { min: 2, max: 3 }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isByteLength(...arguments);
};
