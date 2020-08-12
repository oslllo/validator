"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * IPRange
		 * @description Test if `value` is an IP Range(version 4 only).
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is an IP Range(version 4 only), otherwise false.
		 * @api public
		 */
		IPRange: function (value) {
			return this.validator.isIPRange(...arguments);
		},
	});
};
