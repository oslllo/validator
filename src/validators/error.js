"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * error
		 * @description Test if `value` is an error object.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is an error object, false otherwise
		 * @access public
		 * @example
		 *
		 * is.error(new Error("foo")); // => True
		 * is.error({ error: true }); // => False
		 *
		 */
		error: function (value) {
			return this._getObjectType(value) === "[object Error]";
		},
	});
};
