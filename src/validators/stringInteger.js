"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringInteger
		 * Test if `value` is a string integer.
		 *
		 * @param value to test
		 * @return {Boolean} true if `value` is a string integer, false otherwise
		 * @api public
		 */
		 stringInteger: function (value) {
			return this.validator.isInt(...arguments);
		},
	});
};
