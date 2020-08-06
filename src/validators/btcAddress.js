"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * btcAddress
		 * Test if `value` is a valid BTC address.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` is a valid BTC address, false otherwise
		 * @api public
		 */
		btcAddress: function () {
			return this.validator.isBtcAddress(...arguments);
		},
	});
};
