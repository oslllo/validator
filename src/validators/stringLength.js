"use strict";

const validator = require("validator");

/**
 * @name stringLength
 * @description Test if `value's length falls in a range.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {object} options defaults to {min:0, max: undefined}.
 * Note: this function takes into account surrogate pairs.
 * @return {Boolean} true if `value`'s length falls in a range, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.stringLength("abc", { min: 2 }); // => True
 * is.stringLength("a", { min: 2 }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isLength(...arguments);
};
