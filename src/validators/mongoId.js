"use strict";

const validator = require("validator");

/**
 * @name mongoId
 * @description Test if `value` is a valid hex-encoded representation of a
 * MongoDB ObjectId.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a valid hex-encoded representation of a
 * MongoDB ObjectId, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.mongoId("507f1f77bcf86cd799439011"); // => True
 * s.mongoId("507f1f77bcf86cd7994390"); // => False
 *
 */

module.exports = function (value) {
  return validator.isMongoId(...arguments);
};
