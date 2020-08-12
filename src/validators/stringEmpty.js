"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringEmpty
		 * @description Test if `value` is an empty string.
		 *
		 * @param {String} value to test
		 * @param {Object} options defaults to { ignore_whitespace:false }
		 * @return {Boolean} true if `value` is an empty string, false otherwise
		 * @api public
		 */
		 stringEmpty: function (value, options) {
			return this.validator.isEmpty(...arguments);
		},
	});
};