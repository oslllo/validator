"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringInteger
		 * @description Test if `value` is a string integer.
		 *
		 * @param value to test
		 * @param options options is an object which can contain the keys min and/or max to check the integer is within boundaries (e.g. { min: 10, max: 99 }). options can also contain the key allow_leading_zeroes, which when set to false will disallow integer values with leading zeroes (e.g. { allow_leading_zeroes: false }). Finally, options can contain the keys gt and/or lt which will enforce integers being greater than or less than, respectively, the value provided (e.g. {gt: 1, lt: 4} for a number between 1 and 4).
		 * @return {Boolean} true if `value` is a string integer, false otherwise
		 * @api public
		 */
		 stringInteger: function (value, options) {
			return this.validator.isInt(...arguments);
		},
	});
};
