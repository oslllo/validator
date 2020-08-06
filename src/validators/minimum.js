"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * minimum
		 * Test if `value` is less than `others` values.
		 *
		 * @param {Number} value value to test
		 * @param {Array} others values to compare with
		 * @return {Boolean} true if `value` is less than `others` values
		 * @api public
		 */
		minimum: function (value, others) {
			if (this.actualNaN(value)) {
				throw new TypeError("NaN is not a valid value");
			} else if (!this.arraylike(others)) {
				throw new TypeError("second argument must be array-like");
			}
			var len = others.length;

			while (--len >= 0) {
				if (value > others[len]) {
					return false;
				}
			}

			return true;
		},
	});
};
