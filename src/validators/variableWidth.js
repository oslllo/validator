"use strict";

const validator = require("validator");

/**
 * @name variableWidth
 * @description Test if `value` contains a mixture of full and half-width chars.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value' contains a mixture of full and half-width chars, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.variableWidth("ひらがなカタカナ漢字ABCDE"); // => True
 *
 */

module.exports = function (value) {
  return validator.isVariableWidth(...arguments);
};
