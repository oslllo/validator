"use strict";

const validator = require("validator");

/**
 * @name uppercase
 * @description Test if `value` is uppercase.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value' is uppercase, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.uppercase("ABC"); // => True
 * is.uppercase("abc"); // => False
 *
 */

module.exports = function (value) {
  return validator.isUppercase(...arguments);
};
