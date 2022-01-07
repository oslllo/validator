"use strict";

const assertString = require("validator/lib/util/assertString");
var fs, document, domino;
var window = global.window;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
const isNode =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;
/**
 * Check if we are in a browser or being processed by webpack
 *
 * ! Do not use process.env.NODE_ENV === "undefined" to check for webpack
 * ! it will break the script if its set and in a node enviroment.
 */
if (typeof __webpack_require__ === "undefined" && isNode && !isBrowser) {
  fs = require("fs");
  domino = require("domino");
  window = domino.createWindow("<!DOCTYPE html></html>");
}

document = window.document;

module.exports = {
  _fs: fs,
  _window: window,
  _document: document,
  /**
   * _getObjectType
   *
   * @param {*} value
   * @return {String}
   * @api private
   */
  _getObjectType: function (value) {
    return Object.prototype.toString.call(value);
  },
  /**
   * _hasOwnProperty
   *
   * @param {Object} obj
   * @param {String} prop
   * @return {Boolean}
   * @api private
   */
  _hasOwnProperty: function (obj, prop) {
    return Object.hasOwnProperty.call(obj, prop);
  },
  /**
   * _assertString
   *
   * @param {*} value `value` to assert
   * @throws {TypeError} if value is not a string
   * @api private
   */
  _assertString: function (value) {
    assertString(value);
  },
};
