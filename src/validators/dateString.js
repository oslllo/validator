"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * dateString
		 * Test if `value` is a valid date. e.g. [2002-07-15, new Date()].
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` is a valid date, false otherwise
		 * @api public
		 */
		dateString: function () {
            return this.validator.isDate(value);
		},
	});
};
