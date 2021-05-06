"use strict";

const validator = require("validator");

/**
 * @name octal
 * @description Test if `value` is a valid octal number.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value is a valid octal number, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.octal("076543210"); // => True
 * is.octal("abcdefg"); // => False
 *
 */

module.exports = function (value) {
  return validator.isOctal(...arguments);
};
