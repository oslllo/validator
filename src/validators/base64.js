"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * base64
		 * Test if `value` is base64 encoded. 
		 *
		 * options is optional and defaults to {urlSafe: false}
		 * when urlSafe is true it tests the given base64 encoded string is url safe
		 *
		 * @param {string} value value to test
		 * @param {Object} options options, defaults to {urlSafe: false}
		 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
		 * @api public
		 */
		base64: function (value, options) {
			return this.validator.base64(...arguments);
		},
	});
};
