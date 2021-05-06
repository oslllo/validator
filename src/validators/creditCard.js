"use strict";

const validator = require("validator");

/**
 * @name creditCard
 * @description Test if `value`is a credit card.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a credit card, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.creditCard("375556917985515"); // => True
 * is.creditCard("5398228707871528"); // => False
 * is.creditCard("foo"); // => False
 *
 */

module.exports = function (value) {
  return validator.isCreditCard(...arguments);
};
