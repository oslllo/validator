"use strict";

const validator = require("validator");

/**
 * @name UUID
 * @description Test if `value` is a UUID (version 3, 4 or 5).
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Number} version which version to use
 * @return {Boolean} true if `value' is UUID, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3"); // => True
 *
 * is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => True
 * is.UUID("xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => False
 *
 */

module.exports = function (value, version) {
  return validator.isUUID(...arguments);
};
