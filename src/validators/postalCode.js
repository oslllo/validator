"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * postalCode
		 * @description Test if `value` is a postal code.
		 *
		 * @param {String} value value to test
		 * @param {String} locale one of [ 'AD', 'AT', 'AU', 'BE', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'ID', 'IE' 'IL', 'IN', 'IR', 'IS', 'IT', 'JP', 'KE', 'LI', 'LT', 'LU', 'LV', 'MT', 'MX', 'NL', 'NO', 'NP', 'NZ', 'PL', 'PR', 'PT', 'RO', 'RU', 'SA', 'SE', 'SI', 'TN', 'TW', 'UA', 'US', 'ZA', 'ZM' ] OR 'any'.
		 * @return {Boolean} true if `value is a valid postal code, otherwise false.
		 * @api public
		 */
		postalCode: function (value, locale) {
			return this.validator.isPostalCode(...arguments);
		},
	});
};
