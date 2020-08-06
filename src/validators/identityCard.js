"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * identityCard
         * Test if `value` is a valid identity card code.
         *
         * locale is one of ['ES', 'IN', 'IT', 'NO', 'zh-TW', 'he-IL', 'ar-TN', 'zh-CN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
         *
         * Defaults to 'any'.
		 *
         * @param {string} value value to test
         * @param {string} locale locale option setting
		 * @return {Boolean} true if 'value' is a valid identity card code, false otherwise
		 * @api public
		 */
		identityCard: function (value, locale) {
			return this.validator.isIdentityCard(...arguments);
		},
	});
};
