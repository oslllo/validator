"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * multibyte
		 * @description Test if `value` contains one or more multibyte chars.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value contains one or more multibyte chars, otherwise false.
		 * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *
		 * is.multibyte("ひらがな・カタカナ、．漢字"); // => True
		 * is.multibyte("abc"); // => False
		 *
		 */
		multibyte: function (value) {
			return this.validator.isMultibyte(...arguments);
		},
	});
};
