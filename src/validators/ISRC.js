"use strict";

const validator = require("validator");

/**
 * @name ISRC
 * @description Test if `value` is a ISRC.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a ISRC, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ISRC("USAT29900609"); // => True
 * is.ISRC("SRC15705223"); // => False
 *
 */

module.exports = function (value) {
  return validator.isISRC(...arguments);
};
