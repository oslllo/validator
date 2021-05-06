"use strict";

const validator = require("validator");

/**
 * @name IMEI
 * @description Test if `value` is is a valid IMEI number.
 * Imei should be of format ############### or ##-######-######-#.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} options contains the keys allow_hyphens. Defaults to first
 * format . If allow_hyphens is set to true, the validator will validate the second format.
 * @return {Boolean} true if `value` is a valid IMEI number, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.IMEI("352099001761481"); // => True
 * is.IMEI("490154203237517"); // => False
 *
 * is.IMEI("35-209900-176148-1", { allow_hyphens: true }); // => True
 * is.IMEI("49-015420-323751-7", { allow_hyphens: true }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isIMEI(...arguments);
};
