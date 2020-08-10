"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * alphanumeric
		 * @description Test if 'value' contains only letters and numbers.
		 *
         * @description Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 
         * 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 
         * 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 
         * 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 
         * 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 
         * 'es-ES', 'fr-FR', 'fa-IR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 
         * 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 
         * 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN']) and defaults to en-US. 
		 *
		 * @param {String} value value to test
		 * @param {String} locale locale value
		 * @return {Boolean} true if 'value' contains the letters, false otherwise
		 * @api public
		 */
		alphanumeric: function (value, locale) {
			return this.validator.isAlphanumeric(...arguments);
		},
	});
};
