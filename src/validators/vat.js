"use strict";

const validator = require("validator");

/**
 * @name vat
 * @description Test if `value` is a [valid VAT number](https://en.wikipedia.org/wiki/VAT_identification_number) if validation is available for the given country code matching [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
 *
 * @since 1.1.0
 * @param {*} value `value` to test
 * @param {String} countryCode available country codes: `[ 'GB' ]`.
 * @return {Boolean} true if `value` is a valid VAT, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.vat("GB999 9999 00", "GB"); // => True
 * is.vat("GB999 9999 97", "GB"); // => False
 *
 */

module.exports = function (value, countryCode) {
  return validator.isVAT(...arguments);
};
