"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * fullWidth
		 * @description Test if `value` contains any full-width chars.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` contains any full-width chars, false otherwise
		 * @api public
		 */
		fullWidth: function (value) {
			return this.validator.isFullWidth(...arguments);
		},
	});
};
