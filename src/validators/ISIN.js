"use strict";

const validator = require("validator");

/**
 * @name ISIN
 * @description Test if `value` is an ISIN (stock/security identifier).
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is an ISIN, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ISIN("AU0000XVGZA3"); // => True
 * is.ISIN("DE000BAY0018"); // => False
 *
 */

module.exports = function (value) {
  return validator.isISIN(...arguments);
};
