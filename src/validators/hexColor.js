"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hexColor
		 * @description Test if `value`  is a hex color.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is a hex color, false otherwise
		 * @api public
		 */
		hexColor: function (value) {
			return this.validator.isHexColor(...arguments);
		},
	});
};
