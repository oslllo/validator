"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * dateString
		 * @description Test if `value` is a valid date. e.g. [2002-07-15, new Date()].
		 *
		 * @param {String} value value to test
		 * @param {String} format defaults to YYYY/MM/DD
		 * @return {Boolean} true if `value` is a valid date, false otherwise
		 * @api public
		 */
		dateString: function (value, format) {
            return this.validator.isDate(...arguments);
		},
	});
};
