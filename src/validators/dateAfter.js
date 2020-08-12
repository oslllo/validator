"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * dateAfter
		 * @description Test if 'value' is a date that's after the specified date (defaults to now).
		 *
		 * @param {String} value starting date
		 * @param {String} date after date
		 * @return {Boolean} true if 'value' is a date that's after the specified date, false otherwise
		 * @api public
		 */
		dateAfter: function (value, date) {
			return this.validator.isAfter(...arguments);
		},
	});
};
