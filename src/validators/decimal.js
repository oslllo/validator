"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * decimal
		 * Test if `value` is a decimal number.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a decimal number, false otherwise
		 * @api public
		 */
		decimal: function (value) {
			return (
				this.number(value) &&
				!isActualNaN(value) &&
				!this.infinite(value) &&
				value % 1 !== 0
			);
		},
	});
};
