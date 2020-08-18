"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * surrogatePair
		 * @description Test if `value` contains any surrogate pairs chars.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value; contains any surrogate pairs chars, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.surrogatePair("𠮷野𠮷"); // => True
		 * is.surrogatePair("鮪"); // => False
		 * 
		 */
		surrogatePair: function (value) {
			return this.validator.isSurrogatePair(...arguments);
		},
	});
};
