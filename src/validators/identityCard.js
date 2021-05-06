"use strict";

const validator = require("validator");

/**
 * @name identityCard
 * @description Test if `value` is a valid identity card code.
 *
 * @description Defaults to 'any'.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} locale locale is one of ['ES', 'IN', 'IT', 'NO', 'zh-TW', 'he-IL',
 * 'ar-TN', 'zh-CN'] OR 'any'. If 'any' is used, function will check if any of the locals match.
 * @return {Boolean} true if `value` is a valid identity card code, false otherwise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.identityCard("B176944193", "zh-TW"); // => True
 * is.identityCard("X431071923", "zh-TW"); // => False
 *
 */

module.exports = function (value, locale) {
  return validator.isIdentityCard(...arguments);
};
