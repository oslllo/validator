"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISBN
		 * Test if `value` is an ISBN (version 10 or 13).
		 *
         * @param {string} value value to test
		 * @param {number} version version value
		 * @return {Boolean} true if `value` is an ISBN, otherwise false.
		 * @api public
		 */
		ISBN: function (value, version) {
			return this.validator.isISBN(...arguments);
		},
	});
};
