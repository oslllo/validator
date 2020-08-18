"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hexadecimal
		 * @description Test if `value` is a hexadecimal number.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is a hexadecimal number, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.hexadecimal("deadBEEF"); // => True
		 * is.hexadecimal("abcdefg"); // => False
		 * 
		 */
		hexadecimal: function (value) {
			return this.validator.isHexadecimal(...arguments);
		},
	});
};
