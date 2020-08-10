"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * instance
		 * @description Test if `value` is an instance of `constructor`.
		 *
		 * @param {*} value value to test
		 * @param {String} version ip version to test with
		 * @return {Boolean} true if `value` is an IP (version 4 or 6), otherwise false.
		 * @api public
		 */
		ip: function (value, version) {
            return this.validator.isIp(...arguments)
        }
	});
};
