"use strict";

const validator = require("validator");

/**
 * @name MD5
 * @description Test if `value` is a MD5 hash. Please note that you
 * can also use the isHash(str, 'md5') function. Keep in mind that
 * MD5 has some collision weaknesses compared to other algorithms (e.g., SHA).
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a MD5 hash, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.MD5("d94f3f016ae679c3008de268209132f2"); // => True
 * is.MD5("KYT0bf1c35032a71a14c2f719e5a14c1"); // => False
 *
 */

module.exports = function (value) {
  return validator.isMD5(...arguments);
};
