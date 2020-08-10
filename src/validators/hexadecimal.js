"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hexadecimal
		 * @description Test if `value` is a hexadecimal number.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is a hexadecimal number, false otherwise
		 * @api public
		 */
		hexadecimal: function (value) {
			return this.validator.isHexadecimal(...arguments);
		},
	});
};
