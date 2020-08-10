"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * nan
		 * @description Test if `value` is not a number.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is not a number, false otherwise
		 * @api public
		 */
		nan: function (value) {
			return !this.number(value) || value !== value;
		},
	});
};
