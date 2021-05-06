"use strict";

const validator = require("validator");

/**
 * @name BIC
 * @description Test if `value` is a BIC (Bank Identification Code) or SWIFT code.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a BIC (Bank Identification Code) or SWIFT code, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.BIC("SBICKEN1345"); // => True
 * is.BIC("S23CKENXXXX"); // => False
 *
 */

module.exports = function (value) {
  return validator.isBIC(...arguments);
};
