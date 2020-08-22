"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * alpha
		 * @description Test if `value` contains only letters (a-zA-Z).
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @param {String} [locale = en-US] `locale` is one of
		 * ['ar', 'ar-AE', 'ar-BH', 'ar-DZ',
		 * 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY',
		 * 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY',
		 * 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE',
		 * 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ',
		 * 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fa-IR',
		 * 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO',
		 * 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS',
		 * 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN']) and defaults to en-US
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
		alpha: function (value, locale) {
			return this.validator.isAlpha(...arguments);
		},
	});
};
