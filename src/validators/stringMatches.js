"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringMatches
         * @description Test if `value` matches the pattern.
         *
         * @description Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
		 *
		 * @since 0.0.1
         * @param {String} value `value` to test
         * @param {String} pattern test pattern
		 * @param {String} modifiers test modifiers
		 * @return {Boolean} true if `value` matches the pattern, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.stringMatches("abc", /abc/); // => True
		 * is.stringMatches("acb", /abc/); // => False
		 * 
		 * is.stringMatches("abc", "abc", "i") // => True
		 * is.stringMatches("acb", "abc", "i") // => False
		 * 
		 */
         stringMatches: function (value, pattern, modifiers) {
             return this.validator.matches(...arguments)
         }
	});
};
