"use strict";

/**
 * @name arrayEmpty
 * @description Test if `value` is an empty array.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @access public
 * @example
 *
 * is.arrayEmpty([]) // => True
 * is.arrayEmpty([1, 2, 3]) // => False
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  return this.array(value) && value.length === 0;
};
