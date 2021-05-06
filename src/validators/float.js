"use strict";

const validator = require("validator");

/**
 * @name float
 * @description Test if `value` is is a float.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @param {Object} options options object. contains the keys min, max, gt, and/or lt
 * to validate the float is within boundaries (e.g. { min: 7.22, max: 9.55 }) it also
 * has locale as an option. min and max are equivalent to 'greater or equal' and 'less or equal',
 * respectively while gt and lt are their strict counterparts. locale determines the decimal
 * separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW',
 * 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG',
 * 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM',
 * 'es-ES','fr-CA', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU',
 * 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']
 * @return {Boolean} true if `value` is a float, false otherwise
 * @access public
 * @example
 *
 * is.float(123.0); // => True
 * is.float(+); // => False
 *
 * is.float('123.123', { locale: "en-AU" }); // => True
 * is.float(('123,123', { locale: "en-AU" }); // => False
 *
 */

module.exports = function (value, options) {
  /*eslint no-magic-numbers: "off"*/
  arguments[0] = arguments[0].toString();

  return validator.isFloat(...arguments);
};
