"use strict";

const validator = require("validator");

/**
 * @name alpha
 * @description Test if `valu1e` contains only letters (a-zA-Z).
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} [locale = en-US] Locale is one of ['ar', 'ar-AE', 'ar-BH',
 * 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA',
 * 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK',
 * 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA',
 * 'en-ZM', 'es-ES' ,'fr-CA', 'fr-FR' 'he', 'hu-HU', 'it-IT', 'ku-IQ',
 * 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK',
 * 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']) and defaults to en-US.
 * @param {Object} [options] options is an optional object that can be supplied with the following key(s):
 * ignore which can either be a String or RegExp of characters to be ignored e.g. " -" will ignore spaces and -'s.
 * @return {Boolean} true if `value`only contains the letters, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.alpha("abc"); // => True
 * is.alpha("abc1"); // => False
 *
 * is.alpha("абв", "bg-BG"); // => True
 * is.alpha("abc1", "bg-BG"); // => False
 *
 */

module.exports = function (value, locale, options) {
  return validator.isAlpha(...arguments);
};
