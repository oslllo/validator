"use strict";

const validator = require("validator");

/**
 * @name hexadecimal
 * @description Test if `value` is a hexadecimal number.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a hexadecimal number, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.hexadecimal("deadBEEF"); // => True
 * is.hexadecimal("abcdefg"); // => False
 *
 */

module.exports = function (value) {
  return validator.isHexadecimal(...arguments);
};
