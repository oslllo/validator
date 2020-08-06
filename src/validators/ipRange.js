"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ipRange
		 * Test if `value` is an IP Range(version 4 only).
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` is an IP Range(version 4 only), otherwise false.
		 * @api public
		 */
		ipRange: function () {
			return this.validator.isIPRange();
		},
	});
};
