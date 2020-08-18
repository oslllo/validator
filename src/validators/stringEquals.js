"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
		 * stringEquals
         * @description Test if `value` matches the comparison.
		 *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @param {String} comparison value to compare with
		 * @return {Boolean} true if `value` matches the comparison, false otherwise
         * @throws {TypeError} if `value` is not a `string`
		 * @access public
         * @example
         * 
         * is.stringEquals("abc", "abc"); // => True
         * is.stringEquals("abc", "Abc"); // => False
         * 
		 */
        stringEquals: function (value, comparison) {
            return this.validator.equals(...arguments);
        }
    });
};
