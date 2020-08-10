"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * MD5
         * @description Test if `value` is a MD5 hash.
         *
         * @description Please note that you can also use the isHash(str, 'md5') function. Keep in mind that MD5 has some collision weaknesses compared to other algorithms (e.g., SHA).
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a MD5 hash, otherwise false.
		 * @api public
		 */
		MD5: function (value) {
			return this.validator.isMD5(...arguments);
		},
	});
};
