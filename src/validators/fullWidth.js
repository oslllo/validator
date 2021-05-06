"use strict";

const validator = require("validator");

/**
 * @name fullWidth
 * @description Test if `value` contains any full-width chars.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` contains any full-width chars, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.fullWidth("ひらがな・カタカナ、．漢字"); // => True
 * is.fullWidth("abc123"); // => False
 *
 */

module.exports = function (value) {
  return validator.isFullWidth(...arguments);
};
