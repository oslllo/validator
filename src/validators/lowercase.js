"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * lowercase
		 * @description Test if `value` is lowercase.
		 *
		 * @param {Number} value value to test
		 * @return {Boolean} true if 'value' is lowercase, otherwise false.
		 * @api public
		 */
		lowercase: function (value) {
			return this.validator.isLowercase(...arguments);
		},
	});
};
