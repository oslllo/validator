"use strict";

/**
 * @name odd
 * @description Test if `value` is an odd number.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @access public
 * @example
 *
 * is.odd(1.1); // => True
 * is.odd(2); // => False
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  return (
    this.infinite(value) || (this.number(value) && value === value && value % 2 !== 0)
  );
};
