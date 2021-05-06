"use strict";

const assertString = require("validator/lib/util/assertString");

/**
 * @name svg
 * @description Test if the string is a valid SVG.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a valid SVG, false otherise
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.svg("<svg width="100" height="100" viewBox="0 0 30 30" version="1.1"></svg>"); // => True
 * is.svg("<div><svg></svg></div>"); // => False
 *
 */

module.exports = function (value) {
  assertString(value);
  /*eslint prefer-named-capture-group: "off"*/
  const htmlCommentRegex = /<!--([\s\S]*?)-->/gu;
  const cleanEntities = (val) => {
    const entityRegex = /\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/gimu;

    return val.replace(entityRegex, "");
  };
    /*eslint max-len: "off"*/
  const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/iu;

  return regex.test(cleanEntities(value.toString()).replace(htmlCommentRegex, ""));
};
