"use strict";

const validator = require("validator");

/**
 * @name slug
 * @description Test if `value` is of type slug.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {Object} options allow a single hyphen between string. e.g. [cn-cn, cn-c-c]
 * @return {Boolean} true if `value is of type slug, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.slug("cs-cz", "cs_67CZ"); // => True
 * is.slug("not-----------slug", "cs_67CZ"); // => False
 *
 */

module.exports = function (value, options) {
  return validator.isSlug(...arguments);
};
