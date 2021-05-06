"use strict";

/**
 * @name defined
 * @description Test if `value` is defined.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is defined, false otherwise
 * @access public
 * @example
 *
 * is.defined("foobar"); // => True
 * is.defined(undefined); // => False
 *
 */

module.exports = function (value) {
  return typeof value !== "undefined";
};
