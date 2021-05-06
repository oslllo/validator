"use strict";

const validator = require("validator");

/**
 * @name MACAddress
 * @description Test if `value` is a MACAddress.
 *
 * @param {String} value `value` to test
 * @param {Object} [options = {no_colons: false}] If no_colons is true,
 * the validator will allow MAC addresses without the colons. Also,
 * it allows the use of hyphens, spaces or dots e.g '01 02 03 04 05 ab',
 * '01-02-03-04-05-ab' or '0102.0304.05ab'.
 * @return {Boolean} true if `value` is a MACAddress, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.MACAddress("ab:ab:ab:ab:ab:ab"); // => True
 * is.MACAddress("01:02:03:04:05"); // => False
 *
 * is.MACAddress("abababababab", { no_colons: true }); // True
 * is.MACAddress("abc", { no_colons: true }); // False
 *
 */

module.exports = function (value, options) {
  return validator.isMACAddress(...arguments);
};
