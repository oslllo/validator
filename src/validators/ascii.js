"use strict";

const validator = require("validator");

/**
 * @name ascii
 * @description Test if `value` contains ASCII chars only.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` contains ASCII chars only, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ascii("0987654321"); // => True
 * is.ascii("foobar"); // => True
 *
 * is.ascii("ｆｏｏbar"); // => False
 * is.ascii("ｘｙｚ０９８"); // => False
 *
 */

module.exports = function (value) {
  return validator.isAscii(...arguments);
};
