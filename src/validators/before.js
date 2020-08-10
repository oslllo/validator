"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * before
		 * @description Test if 'value' is a date that's before the specified date.
		 *
		 * @param {String} value starting date
		 * @param {String} date before date
		 * @return {Boolean} true if 'value' is a date that's before the specified date., false otherwise
		 * @api public
		 */
		before: function (value, date) {
            return this.validator.isBefore(...arguments)
        },
	});
};
