"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ascii
		 * @description Test if `value` contains ASCII chars only.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` contains ASCII chars only, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.ascii("0987654321"); // => True
		 * is.ascii("foobar"); // => True
		 * 
		 * is.ascii("ｆｏｏbar"); // => False
		 * is.ascii("ｘｙｚ０９８"); // => False
		 * 
		 */
		ascii: function (value) {
			return this.validator.isAscii(...arguments);
		},
	});
};
