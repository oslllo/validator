"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * variableWidth
		 * @description Test if `value` contains a mixture of full and half-width chars.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value' contains a mixture of full and half-width chars, otherwise false.
		 * @api public
		 */
		variableWidth: function (value) {
			return this.validator.isVariableWidth(...arguments);
		},
	});
};
