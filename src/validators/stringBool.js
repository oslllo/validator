"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * bool
		 * @description Test if `value` is a boolean.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is a boolean, false otherwise
         * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 * 
		 * is.stringBool("true"); // => True
		 * is.stringBool("1.0"); // => False
		 * 
		 */
		stringBool: function (value) {
			return this.validator.isBoolean(...arguments);
		},
	});
};
