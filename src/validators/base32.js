"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * base32
		 * Test if 'value' is base32 encoded.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` contains ASCII chars only., false otherwise
		 * @api public
		 */
		base32: function (value) {
			return this.validator.base32(...arguments);
		},
	});
};
