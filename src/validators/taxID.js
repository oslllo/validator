"use strict";

const validator = require("validator");

/**
 * @name taxID
 * @description Test if `value` is a valid Tax Identification Number.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} [locale = "en-US"]  default locale is en-US Supported locales:
 * `[ 'bg-BG', 'cs-CZ', 'de-AT', 'de-DE', 'dk-DK', 'el-CY', 'el-GR', 'en-GB', 'en-IE',
 * 'en-US', 'es-ES', 'et-EE', 'fi-FI', 'fr-BE', 'fr-FR', 'fr-LU', 'hr-HR', 'hu-HU', 'it-IT',
 * 'lb-LU', 'lt-LT', 'lv-LV' 'mt-MT', 'nl-BE', 'nl-NL', 'pl-PL', 'pt-PT', 'ro-RO', 'sk-SK',
 * 'sl-SI', 'sv-SE' ]`
 * @return {Boolean} true if `value' is a valid Tax Identification Number, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.taxID("01-1234567"); // => True
 * is.taxID("0-11234567"); // => False
 *
 */

module.exports = function (value, locale) {
  return validator.isTaxID(...arguments);
};
