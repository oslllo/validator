"use strict";

const validator = require("validator");

/**
 * @name stringMatches
 * @description Test if `value` matches the pattern.
 *
 * @description Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} pattern test pattern
 * @param {String} modifiers test modifiers
 * @return {Boolean} true if `value` matches the pattern, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.stringMatches("abc", /abc/); // => True
 * is.stringMatches("acb", /abc/); // => False
 *
 * is.stringMatches("abc", "abc", "i") // => True
 * is.stringMatches("acb", "abc", "i") // => False
 *
 */

module.exports = function (value, pattern, modifiers) {
  return validator.matches(...arguments);
};
