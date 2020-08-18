"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * octal
		 * @description Test if `value` is a valid octal number.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value is a valid octal number, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.octal("076543210"); // => True
		 * is.octal("abcdefg"); // => False
		 * 
		 */
		octal: function (value) {
			return this.validator.isOctal(...arguments);
		},
	});
};
