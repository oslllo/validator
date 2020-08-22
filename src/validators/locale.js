"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * locale
		 * @description Test if `value` is a locale.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is locale, otherwise false.
		 * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *
		 * is.locale("uz_Latn_UZ"); // => True
		 * is.locale("lo_POP"); // => False
		 *
		 */
		locale: function (value) {
			return this.validator.isLocale(...arguments);
		},
	});
};
