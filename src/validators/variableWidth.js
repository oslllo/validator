"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * variableWidth
		 * @description Test if `value` contains a mixture of full and half-width chars.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value' contains a mixture of full and half-width chars, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.variableWidth("ひらがなカタカナ漢字ABCDE"); // => True
		 * 
		 */
		variableWidth: function (value) {
			return this.validator.isVariableWidth(...arguments);
		},
	});
};
