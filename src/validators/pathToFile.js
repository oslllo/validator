"use strict";

/**
 * @name pathToFile
 * @description Test if `value` is a valid path to a file.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a valid path to a file., otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.pathToFile("test/src/validators/test.pathToFile.js"); // => True
 * is.pathToFile("test/src/validators"); // => False
 *
 */

module.exports = function (value) {
  this._internal._assertString(value);

  return (
    this._internal._fs.existsSync(value) &&
        this._internal._fs.lstatSync(value).isFile()
  );
};
