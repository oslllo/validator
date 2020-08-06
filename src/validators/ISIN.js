"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISIN
		 * Test if `value` is an ISIN (stock/security identifier).
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` is an ISIN, otherwise false.
		 * @api public
		 */
		ISIN: function (value) {
			return this.validator.isISIN(...arguments);
		},
	});
};
