"use strict";

const validator = require("validator");

/**
 * @name whitelisted
 * @description Test if `value` characters appear in the whitelist.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} chars whitelist
 * @return {Boolean} true if `value' characters appear in the whitelist, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.whitelisted("foo", "abcdefghijklmnopqrstuvwxyz"); // => True
 * is.whitelisted("foo bar", "abcdefghijklmnopqrstuvwxyz"); // => False
 *
 */

module.exports = function (value, chars) {
  return validator.isWhitelisted(...arguments);
};
