"use strict";

/**
 * @name bool
 * @description Test if `value` is a boolean.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @access public
 * @example
 *
 * is.bool(true); // => True
 * is.bool(1); // => False
 *
 */

module.exports = function (value) {
  return this._internal._getObjectType(value) === "[object Boolean]";
};
