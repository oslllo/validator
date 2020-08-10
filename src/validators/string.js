"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * string
		 * @description Test if `value` is a string.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is a string, false otherwise
		 * @api public
		 */
		string: function (value) {
			return this._getObjectType(value) === "[object String]";
		},
	});
};
