"use strict";

const validator = require("validator");

/**
 * @name ISO31661Alpha2
 * @description Test if `value` is a valid ISO 3166-1 alpha-2 officially assigned country code.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a valid ISO 3166-1 alpha-2, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ISO31661Alpha2("FR"); // => True
 * is.ISO31661Alpha2("FRA"); // => False
 *
 */

module.exports = function (value) {
  return validator.isISO31661Alpha2(...arguments);
};
