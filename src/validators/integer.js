"use strict";

/**
 * @name integer
 * @description Test if `value` is an integer.
 *
 * @since 0.0.1
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @access public
 * @example
 *
 * is.integer(1); // => True
 * is.integer("0"); // => False
 *
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  return this.number(value) && !this.actualNaN(value) && value % 1 === 0;
};
