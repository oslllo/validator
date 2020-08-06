"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * whitelisted
		 * Test if `value` characters appear in the whitelist.
		 *
		 * @param {String} value value to test
		 * @param {String} chars whitelist
		 * @return {Boolean} true if `value' characters appear in the whitelist, otherwise false.
		 * @api public
		 */
		whitelisted: function (value, chars) {
			return this.validator.isWhitelisted(...arguments);
		},
	});
};
