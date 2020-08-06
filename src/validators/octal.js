"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * octal
		 * Test if `value` is a valid octal number.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value is a valid octal number, otherwise false.
		 * @api public
		 */
		octal: function (value) {
			return this.validator.isOctal(...arguments);
		},
	});
};
