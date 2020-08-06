"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ethereumAddress
		 * Test if `value` is an Ethereum address using basic regex. Does not validate address checksums.
		 *
		 * @param {*} value value to test
		 * @return {Boolean} true if `value` is an Ethereum address using basic regex. Does not validate address checksums, false otherwise
		 * @api public
		 */
		ethereumAddress: function (value) {
			return this.validator.isEthereumAddress(...arguments);
		},
	});
};
