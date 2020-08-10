"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * regexp
		 * @description Test if `value` is a regular expression.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is a regexp, false otherwise
		 * @api public
		 */
		regexp: function (value) {
			return this._getObjectType(value) === "[object RegExp]";
		},
	});
};
