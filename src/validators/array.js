"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * array
		 * @description Test if 'value' is an array.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an array, false otherwise
		 * @api public
		 */

		array: function (value) {
			return this._getObjectType(value) === "[object Array]";
		},
	});
};
