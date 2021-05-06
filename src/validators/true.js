"use strict";

/**
 * @name true
 * @description Test if `value` is true.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @access public
 * @example
 *
 * is.true(true); // => True
 * is.true(1); // => False
 *
 */

module.exports = function (value) {
  return this.bool(value) && Boolean(Number(value)) === true;
};
