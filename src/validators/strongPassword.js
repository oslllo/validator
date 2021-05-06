"use strict";

const validator = require("validator");

/**
 * @name strongPassword
 * @description Test if `value` is a password is strong or not. Allows for custom requirements or scoring rules. If `returnScore` is true, then the function returns an integer score for the password rather than a boolean.
 *
 * @since 1.1.0
 * @param {*} value `value` to test
 * @param {Object} [options = { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }]
 * @return {Boolean} true if `value` is a strong password, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.strongPassword(`%2%k{7BsL"M%Kd6e`, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, }); // => True
 * is.strongPassword("hunter2", { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, }); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isStrongPassword(...arguments);
};
