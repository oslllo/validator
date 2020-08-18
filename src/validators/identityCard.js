"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * identityCard
         * @description Test if `value` is a valid identity card code.
         *
         * @description Defaults to 'any'.
		 *
		 * @since 0.0.1
         * @param {String} value `value` to test
         * @param {String} locale one of ['ES', 'IN', 'IT', 'NO', 'zh-TW', 'he-IL', 'ar-TN', 
		 * 'zh-CN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
		 * @return {Boolean} true if `value` is a valid identity card code, false otherwise
         * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 * 
		 * is.identityCard("B176944193", "zh-TW"); // => True
		 * is.identityCard("X431071923", "zh-TW"); // => False
		 * 
		 */
		identityCard: function (value, locale) {
			return this.validator.isIdentityCard(...arguments);
		},
	});
};
