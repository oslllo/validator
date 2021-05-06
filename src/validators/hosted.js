"use strict";

/**
 * @name hosted
 * @description Test if `value` is hosted by `host`.
 *
 * @since 0.0.1
 * @param {*} value to test
 * @param {*} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @access public
 * @example
 *
 * is.hosted("a", { a: {} }); // => True
 * is.hosted("a", { a: 3 }); // => False
 *
 */

module.exports = function (value, host) {
  /*eslint no-magic-numbers: "off"*/
  var NON_HOST_TYPES = {
    boolean: 1,
    number: 1,
    string: 1,
    undefined: 1,
  };
  var type = typeof host[value];

  return type === "object" ? Boolean(host[value]) : !NON_HOST_TYPES[type];
};
