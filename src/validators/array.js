"use strict";

/**
 * @name array
 * @description Test if `value` is an array.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @access public
 * @example
 *
 * is.array([1, 2, 3]); // => True
 * is.array(true); // => False
 *
 */

module.exports = function (value) {
  return this._internal._getObjectType(value) === "[object Array]";
};
