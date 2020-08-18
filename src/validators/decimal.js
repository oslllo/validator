"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * decimal
		 * @description Test if `value` is a decimal number.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is a decimal number, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.decimal(1.1); // => True
		 * is.decimal(123); // => False
		 * 
		 */
		decimal: function (value) {
			return (
				this.number(value) &&
				!this.actualNaN(value) &&
				!this.infinite(value) &&
				value % 1 !== 0
			);
		},
	});
};
