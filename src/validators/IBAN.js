"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * IBAN
		 * Test if `value` is a IBAN (International Bank Account Number).
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is a IBAN (International Bank Account Number), false otherwise
		 * @api public
		 */
		IBAN: function (value) {
			return this.validator.isIBAN(...arguments);
		},
	});
};
