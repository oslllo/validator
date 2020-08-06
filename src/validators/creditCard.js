"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * creditCard
		 * Test if `value`is a credit card.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` is a credit card, false otherwise
		 * @api public
		 */
		creditCard: function (value) {
			return this.validator.isCreditCard(...arguments);
		},
	});
};
