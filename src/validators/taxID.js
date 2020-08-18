"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * taxID
		 * @description Test if `value` is a valid Tax Identification Number.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @param {String} [locale = "en-US"]  default locale is en-US
		 * @return {Boolean} true if `value' is a valid Tax Identification Number, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.taxID("01-1234567"); // => True
		 * is.taxID("0-11234567"); // => False
		 * 
		 */
		taxID: function (value, locale) {
			return this.validator.isTaxID(...arguments);
		},
	});
};
