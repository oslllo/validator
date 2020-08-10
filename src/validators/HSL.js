"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * HSL
         * @description Test if `value` is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
         *
         * @description Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is an HSL, false otherwise
		 * @api public
		 */
		HSL: function (value) {
			return this.validator.isHSL(...arguments);
		},
	});
};
