"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISO8601
		 * @description Test if `value` is a valid ISO 8601 date; for additional checks for valid dates, e.g. invalidates dates like 2009-02-29, pass options object as a second parameter with options.strict = true.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a valid ISO 8601, otherwise false.
		 * @api public
		 */
		ISO8601: function (value) {
			return this.validator.isISO8601(...arguments);
		},
	});
};
