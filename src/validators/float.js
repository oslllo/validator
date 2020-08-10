"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * float
		 * @description Test if `value` is is a float.
		 *
		 * @description options is an object which can contain the keys min, max, gt, and/or lt to validate the float is within boundaries (e.g. { min: 7.22, max: 9.55 }) it also has locale as an option.
		 *
		 * @description min and max are equivalent to 'greater or equal' and 'less or equal', respectively while gt and lt are their strict counterparts.
		 *
		 * @description locale determine the decimal separator and is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']
		 *
		 * @param {*} value value to test
		 * @param {Object} options options object
		 * @return {Boolean} true if `value` is an Ethereum address using basic regex. Does not validate address checksums, false otherwise
		 * @api public
		 */
		float: function (value, options) {
			return this.validator.isFloat(value.toString(), options);
		},
	});
};
