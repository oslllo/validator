"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * creditCard
		 * @description Test if `value`is a credit card.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a credit card, false otherwise
		 * @api public
		 */
		creditCard: function (value) {
			return this.validator.isCreditCard(...arguments);
		},
	});
};
