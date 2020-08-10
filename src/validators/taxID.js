"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * taxID
		 * @description Test if `value` is a valid Tax Identification Number.
		 *
		 * @param {String} value value to test
		 * @param {String} locale  default locale is en-US
		 * @return {Boolean} true if `value' is a valid Tax Identification Number, otherwise false.
		 * @api public
		 */
		taxID: function (value, locale) {
			return this.validator.isTaxID(...arguments);
		},
	});
};
