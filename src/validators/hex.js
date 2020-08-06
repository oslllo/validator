"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hex
		 * Test if `value` is a valid hex encoded string.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
		 * @api public
		 */
		hex: function (value) {
            var hexRegex = /^[A-Fa-f0-9]+$/;
			return this.string(value) && (!value.length || hexRegex.test(value));
		},
	});
};
