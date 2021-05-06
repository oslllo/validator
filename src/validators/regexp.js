"use strict";

/**
 * @name regexp
 * @description Test if `value` is a regular expression.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @access public
 * @example
 *
 * is.regexp(new RegExp('a', 'g')); // => True
 * is.regexp([]); // => False
 *
 */

module.exports = function (value) {
  return this._internal._getObjectType(value) === "[object RegExp]";
};
