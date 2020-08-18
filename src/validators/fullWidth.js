"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * fullWidth
		 * @description Test if `value` contains any full-width chars.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` contains any full-width chars, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.fullWidth("ひらがな・カタカナ、．漢字"); // => True
		 * is.fullWidth("abc123"); // => False
		 * 
		 */
		fullWidth: function (value) {
			return this.validator.isFullWidth(...arguments);
		},
	});
};
