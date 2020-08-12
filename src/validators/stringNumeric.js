"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringNumeric
		 * @description Test if `value` contains only numbers.
		 *
		 * @param {*} value value to test
		 * @param {Object} options {no_symbols: false} it also has locale as an option. If no_symbols is true, the validator will reject numeric strings that feature a symbol (e.g. +, -, or .).
		 * @param {String} locale determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA'].
		 * @return {Boolean} true if `value contains one or more multibyte chars, otherwise false.
		 * @api public
		 */
		 stringNumeric: function (value, options, locale) {
			return this.validator.isNumeric(...arguments);
		},
	});
};
