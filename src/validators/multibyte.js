"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * multibyte
		 * Test if `value` contains one or more multibyte chars.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value contains one or more multibyte chars, otherwise false.
		 * @api public
		 */
		multibyte: function (value) {
			return this.validator.isMultibyte(...arguments);
		},
	});
};
