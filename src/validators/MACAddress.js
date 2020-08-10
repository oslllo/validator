"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * MACAddress
		 * @description Test if `value` is a MACAddress.
		 *
		 * @param {String} value value to test
		 * @param {object} options defaults to {no_colons: false}. If no_colons is true, the validator will allow MAC addresses without the colons. Also, it allows the use of hyphens, spaces or dots e.g '01 02 03 04 05 ab', '01-02-03-04-05-ab' or '0102.0304.05ab'.
		 * @return {Boolean} true if `value` is a MACAddress, otherwise false.
		 * @api public
		 */
		MACAddress: function (value, options) {
			return this.validator.isMACAddress(...arguments);
		},
	});
};
