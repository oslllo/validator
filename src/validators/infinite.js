"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * infinite
		 * Test if `value` is positive or negative infinity.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
		 * @api public
		 */
		infinite: function (value) {
			return value === Infinity || value === -Infinity;
		},
	});
};
