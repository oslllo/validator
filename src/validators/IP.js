"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * IP
		 * @description Test if `value` is an IP (version 4 or 6).
		 *
		 * @param {*} value value to test
		 * @param {String} version ip version to test with
		 * @return {Boolean} true if `value` is an IP (version 4 or 6), otherwise false.
		 * @api public
		 */
		IP: function (value, version) {
            return this.validator.isIP(...arguments)
        }
	});
};
