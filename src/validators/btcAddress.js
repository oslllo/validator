"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * btcAddress
		 * @description Test if `value` is a valid BTC address.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is a valid BTC address, false otherwise
		 * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *
		 * is.btcAddress("1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL"); // => True
		 * is.btcAddress("4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"); // => False
		 *
		 */
		btcAddress: function () {
			return this.validator.isBtcAddress(...arguments);
		},
	});
};
