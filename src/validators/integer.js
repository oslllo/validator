"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * integer
		 * Test if `value` is an integer.
		 *
		 * @param value to test
		 * @return {Boolean} true if `value` is an integer, false otherwise
		 * @api public
		 */
		 integer: function (value) {
			return this.number(value) && !isActualNaN(value) && value % 1 === 0;
		},
	});
};
