"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * arrayEmpty
		 * Test if `value` is an empty array.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an empty array, false otherwise
		 * @api public
		 */
		arrayEmpty: function (value) {
			return this.array(value) && value.length === 0;
		},
	});
};
