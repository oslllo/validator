"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * dateValid
		 * Test if `value` is a valid date.
		 *
		 * @param {*} value value to test
		 * @returns {Boolean} true if `value` is a valid date, false otherwise
		 */
		dateValid: function (value) {
			return this.date(value) && !isNaN(Number(value));
		},
	});
};
