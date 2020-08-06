"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * rgbColor
		 * Test if `value` is a rgb or rgba color.
		 *
		 * @param {string} value value to test
		 * @param {Boolean} includePercentValues defaults to true. If you don't want to allow to set rgb or rgba values with percents, like rgb(5%,5%,5%), or rgba(90%,90%,90%,.3), then set it to false.
		 * @return {Boolean} true if `value  is a rgb or rgba color, otherwise false.
		 * @api public
		 */
		rgbColor: function (value, includePercentValues) {
			return this.validator.isRgbColor(...arguments);
		},
	});
};
