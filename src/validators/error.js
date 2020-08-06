"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * error
		 * Test if `value` is an error object.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an error object, false otherwise
		 * @api public
		 */
		error: function (value) {
			return this._getObjectType(value) === "[object Error]";
		},
	});
};
