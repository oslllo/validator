"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * identityCard
         * @description Test if `value` is a valid identity card code.
         *
         * @description locale is one of ['ES', 'IN', 'IT', 'NO', 'zh-TW', 'he-IL', 'ar-TN', 'zh-CN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
         *
         * @description Defaults to 'any'.
		 *
         * @param {String} value value to test
         * @param {String} locale locale option setting
		 * @return {Boolean} true if 'value' is a valid identity card code, false otherwise
		 * @api public
		 */
		identityCard: function (value, locale) {
			return this.validator.isIdentityCard(...arguments);
		},
	});
};
