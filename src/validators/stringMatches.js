"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringMatches
         * Test if `value` matches the pattern.
         *
         * Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
		 *
         * @param {string} value value to test
         * @param {string} pattern test pattern
		 * @param {string} modifiers test modifiers
		 * @return {Boolean} true if `value` matches the pattern, otherwise false.
		 * @api public
		 */
         stringMatches: function (value, pattern, modifiers) {
             return this.validator.matches(...arguments)
         }
	});
};
