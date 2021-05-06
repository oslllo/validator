"use strict";

const validator = require("validator");

/**
 * @name stringEmpty
 * @description Test if `value` is an empty string.
 *
 * @since 0.0.1
 * @param {String} value to test
 * @param {Object} options defaults to { ignore_whitespace:false }
 * @return {Boolean} true if `value` is an empty string, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.stringEmpty(""); // => True
 * is.stringEmpty("   "); // => False
 *
 * is.stringEmpty(" ", { ignore_whitespace: true }); // => True
 * is.stringEmpty("foo", { ignore_whitespace: true }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isEmpty(...arguments);
};
