"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISO31661Alpha3
		 * @description Test if `value` is a valid ISO 3166-1 alpha-3 officially assigned country code.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a valid ISO 3166-1 alpha-3, otherwise false.
		 * @api public
		 */
		ISO31661Alpha3: function (value) {
			return this.validator.isISO31661Alpha3(...arguments);
		},
	});
};
