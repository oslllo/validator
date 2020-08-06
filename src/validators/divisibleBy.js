"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * divisibleBy
		 * Test if `value` is divisible by `n`.
		 *
		 * @param {Number} value value to test
		 * @param {Number} n dividend
		 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
         * @api public
		 */
		divisibleBy: function (value, n) {
			var isDividendInfinite = this.infinite(value);
			var isDivisorInfinite = this.infinite(n);
			var isNonZeroNumber =
				this.number(value) &&
				!isActualNaN(value) &&
				this.number(n) &&
				!isActualNaN(n) &&
				n !== 0;
			return (
				isDividendInfinite ||
				isDivisorInfinite ||
				(isNonZeroNumber && value % n === 0)
			);
		},
	});
};
