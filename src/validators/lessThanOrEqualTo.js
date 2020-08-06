"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * lessThanOrEqualTo
		 * Test if `value` is less than or equal to `other`.
		 *
		 * @param {Number} value value to test
		 * @param {Number} other value to compare with
		 * @return {Boolean} if 'value' is less than or equal to 'other'
		 * @api public
		 */
		lessThanOrEqualTo: function (value, other) {
			if (this.actualNaN(value) || this.actualNaN(other)) {
				throw new TypeError("NaN is not a valid value");
			}
			return !this.infinite(value) && !this.infinite(other) && value <= other;
		},
	});
};
