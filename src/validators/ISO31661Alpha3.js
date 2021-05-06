"use strict";

const validator = require("validator");

/**
 * @name ISO31661Alpha3
 * @description Test if `value` is a valid ISO 3166-1 alpha-3 officially assigned country code.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a valid ISO 3166-1 alpha-3, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ISO31661Alpha3("ABW"); // => True
 * is.ISO31661Alpha3("FR"); // => False
 *
 */

module.exports = function (value) {
  return validator.isISO31661Alpha3(...arguments);
};
