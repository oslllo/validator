"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * nan
		 * @description Test if `value` is not a number.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is not a number, false otherwise
		 * @access public
		 * @example
		 *
		 * is.nan(0); // => False
		 * is.nan({ a: 1 }); // => True
		 *
		 */
		nan: function (value) {
			return !this.number(value) || value !== value;
		},
	});
};
