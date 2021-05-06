"use strict";

/**
 * @name false
 * @description Test if `value` is false.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @access public
 * @example
 *
 * is.false(false); // => True
 * is.false(0); // => False
 *
 */

module.exports = function (value) {
  return this.bool(value) && Boolean(Number(value)) === false;
};
