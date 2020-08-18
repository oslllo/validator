"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringIn
		 * @description Test if `value` is in an array of allowed values.
		 * 
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @param {Array} arr array to check in
		 * @return {Boolean} true if `value` is in an array of allowed values, false otherwise
         * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *
		 * is.stringIn("foo", "foobar"); // => True
		 * is.stringIn("barfoo", "foobar"); // => False
		 * 
		 */
		stringIn: function (value, arr) {
			return this.validator.isIn(...arguments);
		},
	});
};
