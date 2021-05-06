"use strict";

/**
 * @name pathToDir
 * @description Test if `value` is a valid path to a directory.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a valid path to a directory., otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.pathToDir("test/src/validators/test.pathToDir.js"); // => False
 * is.pathToDir("test/src/validators"); // => True
 *
 */

module.exports = function (value) {
  this._internal._assertString(value);

  return (
    this._internal._fs.existsSync(value) &&
        this._internal._fs.lstatSync(value).isDirectory()
  );
};
