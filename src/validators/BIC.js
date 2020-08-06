"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * BIC
		 * Test if 'value' is a BIC (Bank Identification Code) or SWIFT code.
		 *
		 * @param {string} value BIC code
		 * @return {Boolean} true if 'value' is a BIC (Bank Identification Code) or SWIFT code, false otherwise
		 * @api public
		 */
		BIC: function (value) {
			return this.validator.isBIC(...arguments);
		},
	});
};
