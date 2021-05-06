"use strict";

/**
 * @name number
 * @description Test if `value` is a number.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @access public
 * @example
 *
 * is.number(123); // => True
 * is.number("123"); // => False
 *
 */

module.exports = function (value) {
  return this._internal._getObjectType(value) === "[object Number]";
};
