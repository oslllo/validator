"use strict";

const validator = require("validator");

/**
 * @name JWT
 * @description Test if `value` is valid JWT token.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is valid JWT, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.JWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI"); // => True
 * is.JWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"); // => False
 *
 */

module.exports = function (value) {
  return validator.isJWT(...arguments);
};
