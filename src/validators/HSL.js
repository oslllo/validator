"use strict";

const validator = require("validator");

/**
 * @name HSL
 * @description Test if `value` is an HSL (hue, saturation,
 * lightness, optional alpha) color based on CSS Colors Level 4 specification.
 * Comma-separated format supported. Space-separated format
 * supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an HSL, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.HSL("hsl(360,0000000000100%,000000100%)"); // => True
 * is.HSL("hsl(0260, 100 %, 100%)"); // => False
 *
 */

module.exports = function (value) {
  return validator.isHSL(...arguments);
};
