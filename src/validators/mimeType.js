"use strict";

const validator = require("validator");

/**
 * @name mimeType
 * @description Test if `value` matches to a valid MIME type format.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` matches to a valid MIME type format, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.mimeType("application/json"); // => True
 * is.mimeType("application"); // => False
 *
 */

module.exports = function (value) {
  return validator.isMimeType(...arguments);
};
