"use strict";

/**
 * @name infinite
 * @description Test if `value` is positive or negative infinity.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @access public
 * @example
 *
 * is.infinite(Infinity); // => True
 * is.infinite(-Infinity); // => True
 *
 * is.infinite(9999999999); // => False
 *
 */

module.exports = function (value) {
  return value === Infinity || value === -Infinity;
};
