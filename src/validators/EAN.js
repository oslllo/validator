"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * EAN
		 * @description Test if `value` is an EAN (European Article Number).
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is an EAN (European Article Number), false otherwise
		 * @access public
		 * @example
		 *
		 * is.EAN("9421023610112"); // => True
		 * is.EAN("079777681629"); // => False
		 *
		 */
		EAN: function (value) {
			return this.validator.isEAN(...arguments);
		},
	});
};
