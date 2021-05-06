"use strict";

const validator = require("validator");

/**
 * @name surrogatePair
 * @description Test if `value` contains any surrogate pairs chars.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value; contains any surrogate pairs chars, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.surrogatePair("𠮷野𠮷"); // => True
 * is.surrogatePair("鮪"); // => False
 *
 */

module.exports = function (value) {
  return validator.isSurrogatePair(...arguments);
};
