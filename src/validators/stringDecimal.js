"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringDecimal
		 * @description Test if `value` represents a decimal string, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.
		 * 
		 * @description locale determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'ku-IQ', nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']. Note: decimal_digits is given as a range like '1,3', a specific value like '3' or min like '1,'.
		 *
		 * @param {String} value value to test
		 * @param {Object} options an object which defaults to {force_decimal: false, decimal_digits: '1,', locale: 'en-US'}
		 * @return {Boolean} true if `value` represents a decimal string, false otherwise
		 * @api public
		 */
		stringDecimal: function (value, options) {
			return this.validator.isDecimal(...arguments);
		},
	});
};
