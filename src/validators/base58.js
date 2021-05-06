"use strict";

const validator = require("validator");

/**
 * @name base58
 * @description Test if `value` is base58 encoded.
 *
 * @since 1.1.0
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a base58 encoded string, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.base58("91GHkLMNtyo98") // => True
 * is.base58("LL1l1985hG") // => False
 *
 *
 */

module.exports = function (value) {
  return validator.isBase58(...arguments);
};
