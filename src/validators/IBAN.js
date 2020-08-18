"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * IBAN
		 * Test if `value` is a IBAN (International Bank Account Number).
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is a IBAN (International Bank Account Number), false otherwise
		 * @access public
		 * @example
		 * 
		 * is.IBAN("SC52BAHL01031234567890123456USD"); // => True
		 * is.IBAN("XX22YYY1234567890123"); // => False
		 * 
		 */
		IBAN: function (value) {
			return this.validator.isIBAN(...arguments);
		},
	});
};
