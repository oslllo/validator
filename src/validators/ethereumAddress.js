"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ethereumAddress
		 * @description Test if `value` is an Ethereum address using basic regex. 
		 * Does not validate address checksums.
		 *
		 * @since 0.0.1
		 * @param {*} value `value` to test
		 * @return {Boolean} true if `value` is an Ethereum address using basic regex, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.ethereumAddress("0x0000000000000000000000000000000000000001"); // => True
		 * is.ethereumAddress("1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU"); // => False
		 * 
		 */
		ethereumAddress: function (value) {
			return this.validator.isEthereumAddress(...arguments);
		},
	});
};
