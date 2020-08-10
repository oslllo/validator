"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * RFC3339
		 * @description Test if `value` is a valid RFC 3339 date.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value is a valid RFC 3339 date, otherwise false.
		 * @api public
		 */
		RFC3339: function (value) {
			return this.validator.isRFC3339(...arguments);
		},
	});
};
