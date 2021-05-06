"use strict";

const validator = require("validator");

/**
 * @name portNumber
 * @description Test if `value` is a valid port number.
 *
 * @since 0.0.1
 * @param {String|Number} value `value` to test
 * @return {Boolean} true if `value is a valid port number, otherwise false.
 * @access public
 * @example
 *
 * is.portNumber(8080); // => True
 * is.portNumber(-1); // => False
 *
 */

module.exports = function (value) {
  /*eslint no-magic-numbers: "off"*/
  arguments[0] = arguments[0].toString();

  return validator.isPort(...arguments);
};
