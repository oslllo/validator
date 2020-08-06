"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
		 * after
         * Test if 'value' is a date that's after the specified date (defaults to now).
		 *
         * @param {string} value starting date
         * @param {string} date after date
		 * @return {Boolean} true if 'value' is a date that's after the specified date, false otherwise
		 * @api public
		 */
        after: function (value, date) {
            return this.validator.isAfter(...arguments);
        }
    });
};
