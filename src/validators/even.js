"use strict";

/**
 * @name even
 * @description Test if `value` is an even number.
 *
 * @since 0.0.1
 * @param {Number} value `value` to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @access public
 * @example
 *
 * is.even(2); // => True
 * is.even(7.1); // => False
 *
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off", no-self-compare: "off", no-extra-parens: "off"*/

  return (
    this.infinite(value) || (this.number(value) && value === value && value % 2 === 0)
  );
};
