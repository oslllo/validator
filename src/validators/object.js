"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * object
		 * Test if `value` is an object.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an object, false otherwise
		 * @api public
		 */
		object: function (value) {
			return this._getObjectType(value) === "[object Object]";
		},
	});
};
