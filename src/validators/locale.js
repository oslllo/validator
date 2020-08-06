"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * locale
		 * Test if `value` is a locale.
		 *
		 * @param {Number} value value to test
		 * @return {Boolean} true if 'value' is locale, otherwise false.
		 * @api public
		 */
		locale: function (value) {
			return this.validator.isLocale(...arguments);
		},
	});
};
