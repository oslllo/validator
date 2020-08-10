"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * mimeType
		 * @description Test if `value` matches to a valid MIME type format.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a MD5 hash, otherwise false.
		 * @api public
		 */
		mimeType: function (value) {
			return this.validator.isMimeType(...arguments);
		},
	});
};
