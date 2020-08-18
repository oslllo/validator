"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hex
		 * @description Test if `value` is a valid hex encoded string.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is a hex encoded string, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.hex("abcdABCD1234"); // => True
		 * is.hex("wxyzWXYZ1234/+=="); // => False
		 * 
		 */
		hex: function (value) {
            var hexRegex = /^[A-Fa-f0-9]+$/;
			return this.string(value) && (!value.length || hexRegex.test(value));
		},
	});
};
