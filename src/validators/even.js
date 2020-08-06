"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * even
		 * Test if `value` is an even number.
		 *
		 * @param {Number} value value to test
		 * @return {Boolean} true if `value` is an even number, false otherwise
		 * @api public
		 */
		even: function (value) {
			return (
				this.infinite(value) ||
				(this.number(value) && value === value && value % 2 === 0)
			);
		},
	});
};
