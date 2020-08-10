"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * taxID
		 * @description Test if `value` is uppercase.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value' is uppercase, otherwise false.
		 * @api public
		 */
		uppercase: function (value) {
			return this.validator.isUppercase(...arguments);
		},
	});
};
