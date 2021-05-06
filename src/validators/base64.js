"use strict";

const validator = require("validator");

/**
 * @name base64
 * @description Test if `value` is base64 encoded.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} [options = {urlSafe: false}] options, when urlSafe is true
 * it tests the given base64 encoded string is url safe
 * @return {Boolean} true if `value` is a base64 encoded string, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.base64("U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==") // => True
 * is.base64("12345") // => False
 *
 * is.base64("bXVtLW5ldmVyLXByb3Vk", { urlSafe: true }) // => True
 * is.base64("This+isa/bad+base64Url==", { urlSafe: true }) // => False
 *
 */

module.exports = function (value, options) {
  return validator.isBase64(...arguments);
};
