"use strict";

/**
 * @name null
 * @description Test if `value` is null.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @access public
 * @example
 *
 * is.null(null); // => True
 * s.null(0); // => False
 *
 */

module.exports = function (value) {
  return value === null;
};
