"use strict";

const validator = require("validator");

/**
 * @name alphanumeric
 * @description Test if `value` contains only letters and numbers.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} [locale = en-US] Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ',
 * 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM',
 * 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE',
 * 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM',
 * 'es-ES', 'fa', 'fa-AF', 'fa-IR', 'fr-CA', 'fr-FR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO',
 * 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS',
 * 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN']) and defaults to en-US.
 * @return {Boolean} true if `value` contains the letters and numbers, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.alphanumeric("abc123"); // => True
 * is.alphanumeric("abc123!!"); // => False
 *
 * is.alphanumeric("ABC11", "en-GB"); // => True
 * is.alphanumeric("foo!!", "en-GB"); // => False
 *
 */

module.exports = function (value, locale) {
  return validator.isAlphanumeric(...arguments);
};
