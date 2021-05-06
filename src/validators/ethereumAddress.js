"use strict";

const validator = require("validator");

/**
 * @name ethereumAddress
 * @description Test if `value` is an Ethereum address using basic regex.
 * Does not validate address checksums.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an Ethereum address using basic regex, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ethereumAddress("0x0000000000000000000000000000000000000001"); // => True
 * is.ethereumAddress("1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU"); // => False
 *
 */

module.exports = function (value) {
  return validator.isEthereumAddress(...arguments);
};
