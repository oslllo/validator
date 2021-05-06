"use strict";

const validator = require("validator");

/**
 * @name IP
 * @description Test if `value` is an IP (version 4 or 6).
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @param {String} version ip version to test with
 * @return {Boolean} true if `value` is an IP (version 4 or 6), otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.IP("127.0.0.1"); // => True
 * is.IP("0200.200.200.20"); // => False
 *
 * is.IP("127.0.0.1", 4); // => True
 * is.IP("::1", 4); // => False
 *
 */

module.exports = function (value, version) {
  return validator.isIP(...arguments);
};
