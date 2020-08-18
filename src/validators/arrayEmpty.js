"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * arrayEmpty
		 * @description Test if `value` is an empty array.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is an empty array, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.arrayEmpty([]) // => True
		 * is.arrayEmpty([1, 2, 3]) // => False
		 */
		arrayEmpty: function (value) {
			return this.array(value) && value.length === 0;
		},
	});
};
