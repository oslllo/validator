"use strict";

const validator = require("validator");

/**
 * @name rgbColor
 * @description Test if `value` is a rgb or rgba color.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Boolean} includePercentValues defaults to true. If you don't want to allow to set rgb or rgba values with percents, like rgb(5%,5%,5%), or rgba(90%,90%,90%,.3), then set it to false.
 * @return {Boolean} true if `value  is a rgb or rgba color, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.rgbColor("rgb(0,0,0)"); // => True
 * is.rgbColor("rgb(5,5,5)", false); // => True
 * is.rgbColor("rgb(4,4,5%)", false); // => False
 *
 */

module.exports = function (value, includePercentValues) {
  return validator.isRgbColor(...arguments);
};
