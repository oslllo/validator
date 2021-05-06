"use strict";

const validator = require("validator");

/**
 * @name mobilePhone
 * @description Test if `value` is a mobile phone number.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Array|String} [locale="any"] (locale is either an array of locales
 * (e.g ['sk-SK', 'sr-RS']) OR one of ['am-Am', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG',
 * 'ar-IQ', ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'az-AZ', 'bs-BA', 'be-BY',
 * 'bg-BG', 'bn-BD', 'cs-CZ', 'da-DK', 'de-DE', 'de-AT', 'de-CH', 'el-GR', 'en-AU',
 * 'en-CA', 'en-GB', 'en-GG', 'en-GH', 'en-HK', 'en-MO', 'en-IE', 'en-IN', 'en-KE',
 * 'en-MT', 'en-MU', 'en-NG', 'en-NZ', 'en-PK', 'en-PH', 'en-RW', 'en-SG', 'en-SL',
 * 'en-UG', 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'en-ZW', 'es-AR', 'es-CL', 'es-CO',
 * 'es-CR', 'es-EC', 'es-ES', 'es-MX', 'es-PA', 'es-PY', 'es-UY', 'et-EE', 'fa-IR',
 * 'fi-FI', 'fj-FJ', 'fo-FO', 'fr-BE', 'fr-FR', 'fr-GF', 'fr-GP', 'fr-MQ', 'fr-RE',
 * 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kk-KZ', 'kl-GL', 'ko-KR', 'lt-LT',
 * 'ms-MY', 'nb-NO', 'ne-NP', 'nl-BE', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT',
 * 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA',
 * 'uz-UZ', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-MO', 'zh-TW'] OR defaults to 'any'.
 *  If 'any' or a falsey value is used, function will check if any of the locales match).
 * @param {Object} options can be supplied with the following keys:
 * strictMode, if this is set to true, the mobile phone number must be supplied with
 *  the country code and therefore must start with +. Locale list is
 * validator.isMobilePhoneLocales.
 * @return {Boolean} true if `value` is a MACAddress, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.mobilePhone("0821231234", 'en-ZA'); // => True
 * is.mobilePhone("08212312345", 'en-ZA'); // => False
 */

module.exports = function (value, locale, options) {
  return validator.isMobilePhone(...arguments);
};
