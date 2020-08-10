"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * greaterThanOrEqualTo
		 * @description Test if `value` is greater than or equal to `other`.
		 *
		 * @param {Number} value value to test
		 * @param {Number} other value to compare with
		 * @return {Boolean} true if `value` is greater than or equal to `other`, false otherwise
		 * @api public
		 */
		greaterThanOrEqualTo: function (value, other) {
			if (this.actualNaN(value) || this.actualNaN(other)) {
				throw new TypeError("NaN is not a valid value");
			}
			return !this.infinite(value) && !this.infinite(other) && value >= other;
		},
	});
};
