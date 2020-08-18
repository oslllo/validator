"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * lowercase
		 * @description Test if `value` is lowercase.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is lowercase, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.lowercase("abc"); // => True
		 * is.lowercase("123A"); // => True
		 * 
		 */
		lowercase: function (value) {
			return this.validator.isLowercase(...arguments);
		},
	});
};
