"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * actualNaN
		 * @description Test if `value` is actual NaN.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is actual NaN, false otherwise
		 * @api public
		 */
		actualNaN: function (value) {
			return value !== value;
		},
	});
};
