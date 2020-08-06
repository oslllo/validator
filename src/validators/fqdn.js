"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * fqdn
		 * Test if `value` is a fully qualified domain name (e.g. domain.com).
		 *
		 * options is an object which defaults to { require_tld: true, allow_underscores: false, allow_trailing_dot: false }.
		 *
		 * @param {string} value value to test
		 * @param {Object} options options object
		 * @return {Boolean} true if `value` is a fully qualified domain name (e.g. domain.com), false otherwise
		 * @api public
		 */
		fqdn: function (value, options) {
			return this.validator.isFQDN(...arguments);
		},
	});
};
