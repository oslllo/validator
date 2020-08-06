"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * odd
		 * Test if `value` is an odd number.
		 *
		 * @param {Number} value value to test
		 * @return {Boolean} true if `value` is an odd number, false otherwise
		 * @api public
		 */
		odd: function (value) {
			return (
				this.infinite(value) ||
				(this.number(value) && value === value && value % 2 !== 0)
			);
		},
	});
};
