"use strict";

const validator = require("validator");

/**
 * @name lowercase
 * @description Test if `value` is lowercase.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is lowercase, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.lowercase("abc"); // => True
 * is.lowercase("123A"); // => True
 *
 */

module.exports = function (value) {
  return validator.isLowercase(...arguments);
};
