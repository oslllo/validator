"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * passportNumber
		 * Test if `value` is a valid passport number.
		 *
		 * @param {string} value value to test
		 * @param {Object} countryCode one of [ 'AM', 'AR', 'AT', 'AU', 'BE', 'BG', 'CA', 'CH', 'CN', 'CY', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE' 'IN', 'IS', 'IT', 'JP', 'KR', 'LT', 'LU', 'LV', 'MT', 'NL', 'PO', 'PT', 'RO', 'SE', 'SL', 'SK', 'TR', 'UA', 'US' ].
		 * @return {Boolean} true if `value is a valid passport number, otherwise false.
		 * @api public
		 */
		passportNumber: function (value, countryCode) {
			return this.validator.isPassportNumber(...arguments);
		},
	});
};
