"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * halfWidth
		 * Test if `value` contains any half-width chars.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` contains any half-width chars, false otherwise
		 * @api public
		 */
		halfWidth: function (value) {
			return this.validator.isHalfWidth(...arguments);
		},
	});
};
