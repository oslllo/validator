"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * date
		 * @description Test if `value` is a date.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a date, false otherwise
		 * @api public
		 */
		date: function (value) {
			return this._getObjectType(value) === "[object Date]";
		},
	});
};
