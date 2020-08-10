"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISO31661Alpha2
		 * @description Test if `value` is a valid ISO 3166-1 alpha-2 officially assigned country code.
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is a valid ISO 3166-1 alpha-2, otherwise false.
		 * @api public
		 */
		ISO31661Alpha2: function (value) {
			return this.validator.isISO31661Alpha2(...arguments);
		},
	});
};
