"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * RFC3339
		 * @description Test if `value` is a valid RFC 3339 date.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value is a valid RFC 3339 date, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.RFC3339("2009-05-19 14:39:22-06:00"); // => True
		 * is.RFC3339("2010-02-18t00:23:32.33+24:00"); // => False
		 * 
		 */
		RFC3339: function (value) {
			return this.validator.isRFC3339(...arguments);
		},
	});
};
