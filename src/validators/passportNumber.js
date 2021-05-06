"use strict";

const validator = require("validator");

/**
 * @name passportNumber
 * @description Test if `value` is a valid passport number.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} countryCode one of [ 'AM', 'AR', 'AT', 'AU', 'BE', 'BG', 'BY',
 * 'CA', 'CH', 'CN', 'CY', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB',
 * 'GR', 'HR', 'HU', 'IE' 'IN', 'IS', 'IT', 'JP', 'KR', 'LT', 'LU', 'LV', 'MT',
 * 'NL', 'PO', 'PT', 'RO', 'RU', 'SE', 'SL', 'SK', 'TR', 'UA', 'US' ].
 * @return {Boolean} true if `value is a valid passport number, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.passportNumber("AF0549358", "AM"); // => True
 * is.passportNumber("A1054935", "AM"); // => False
 *
 */

module.exports = function (value, countryCode) {
  return validator.isPassportNumber(...arguments);
};
