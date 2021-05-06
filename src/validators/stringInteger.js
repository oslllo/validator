"use strict";

const validator = require("validator");

/**
 * @name stringInteger
 * @description Test if `value` is a string integer.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} options options is an object which can contain the keys
 * min and/or max to check the integer is within boundaries (e.g. { min: 10, max: 99 }).
 *  options can also contain the key allow_leading_zeroes, which when set to false
 * will disallow integer values with leading zeroes (e.g. { allow_leading_zeroes: false }).
 * Finally, options can contain the keys gt and/or lt which will enforce integers being
 * greater than or less than, respectively, the value provided (e.g. {gt: 1, lt: 4}
 * 'for a number between 1 and 4).
 * @return {Boolean} true if `value` is a string integer, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.stringInteger("123"); // => True
 *
 * is.stringInteger("13", { allow_leading_zeroes: false }); // => True
 * is.stringInteger("-01", { allow_leading_zeroes: false }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isInt(...arguments);
};
