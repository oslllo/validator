"use strict";

const validator = require("validator");

/**
 * @name IPRange
 * @description Test if `value` is an IP Range(version 4 only).
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is an IP Range(version 4 only), otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.IPRange("127.0.0.1/24"); // => True
 * is.IPRange("127.200.230.1/35"); // => False
 *
 */

module.exports = function (value) {
  return validator.isIPRange(...arguments);
};
