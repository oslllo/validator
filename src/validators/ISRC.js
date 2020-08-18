"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISRC
		 * @description Test if `value` is a ISRC.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is a ISRC, otherwise false.
		 * @access public
		 * @example
		 * 
		 * is.ISRC("USAT29900609"); // => True
		 * is.ISRC("SRC15705223"); // => False
		 * 
		 */
		ISRC: function (value) {
			return this.validator.isISRC(...arguments);
		},
	});
};
