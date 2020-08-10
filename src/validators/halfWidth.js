"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * halfWidth
		 * @description Test if `value` contains any half-width chars.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` contains any half-width chars, false otherwise
		 * @api public
		 */
		halfWidth: function (value) {
			return this.validator.isHalfWidth(...arguments);
		},
	});
};
