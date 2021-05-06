"use strict";

const validator = require("validator");

/**
 * @name stringContains
 * @description Test if `value` contains the seed.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} seed seed value
 * @param {Object} [options = { ignoreCase: false}] defaults to { ignoreCase: false}.
 * ignoreCase specified whether the case of the substring be same or not.
 * @return {Boolean} true if `value` contains the seed, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.stringContains("foobar", "foo"); // => True
 * is.stringContains("fOObar", "foo"); // => False
 *
 * is.stringContains("FOObar", "Foo", { ignoreCase: true }); // => True
 * is.stringContains("baxoof", "foo", { ignoreCase: true,}); // => False
 *
 */

module.exports = function (value, seed, options) {
  return validator.contains(...arguments);
};
