"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * magnetURI
		 * Test if `value` is a magnet uri format.
		 *
		 * @param {string} value value to test
		 * @return {Boolean} true if `value` is a magnet uri format, otherwise false.
		 * @api public
		 */
		magnetURI: function (value) {
			return this.validator.isMagnetURI(...arguments);
		},
	});
};
