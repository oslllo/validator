"use strict";

const validator = require("validator");

/**
 * @name stringDecimal
 * @description Test if `value` represents a decimal string, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.
 *
 * @param {String} value `value` to test
 * @param {Object} [options = {force_decimal: false, decimal_digits: '1,', locale: 'en-US'}] defaults
 * to {force_decimal: false, decimal_digits: '1,', locale: 'en-US'}
 * locale determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
 * 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY',
 * 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ',
 * 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', nb-NO', 'nl-NL', 'nn-NO',
 * 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA'].
 * Note: decimal_digits is given as a range like '1,3', a specific value like '3' or min like '1,'.
 * @return {Boolean} true if `value` represents a decimal string, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.stringDecimal("123", { locale: "en-AU" }); // => True
 * is.stringDecimal("1,0", { locale: "en-AU" }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isDecimal(...arguments);
};
