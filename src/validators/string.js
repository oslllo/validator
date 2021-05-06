"use strict";

/**
 * @name string
 * @description Test if `value` is a string.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a string, false otherwise
 * @access public
 * @example
 *
 * is.string("abc"); // => True
 * is.string(123); // => False
 *
 */

module.exports = function (value) {
  return this._internal._getObjectType(value) === "[object String]";
};
