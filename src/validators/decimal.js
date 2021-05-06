"use strict";

/**
 * @name decimal
 * @description Test if `value` represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc..
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @param {Object} options `options` is an object which defaults to
 * `{force_decimal: false, decimal_digits: '1,', locale: 'en-US'}`<br/><br/>
 * `locale` determine the decimal separator and is one of `['ar', 'ar-AE', 'ar-BH',
 * 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA',
 * 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK',
 * 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA',
 * 'en-ZM', 'es-ES', 'fa', 'fa-AF', 'fa-IR', 'fr-FR', 'fr-CA', 'hu-HU', 'id-ID', 'it-IT',
 * 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pl-Pl', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI',
 * 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN']`.<br/>**Note:** `decimal_digits`
 * is given as a range like '1,3', a specific value like '3' or min like '1,'.
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @access public
 * @example
 *
 * is.decimal(1.1); // => True
 * is.decimal(123); // => False
 *
 */

module.exports = function (value, options) {
  /*eslint no-magic-numbers: "off"*/
  return (
    this.number(value) &&
        !this.actualNaN(value) &&
        !this.infinite(value) &&
        value % 1 !== 0
  );
};
