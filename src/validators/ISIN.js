"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISIN
		 * @description Test if `value` is an ISIN (stock/security identifier).
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is an ISIN, otherwise false.
		 * @api public
		 */
		ISIN: function (value) {
			return this.validator.isISIN(...arguments);
		},
	});
};
