"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * pathToFile
		 * @description Test if `value` is a valid path to a file.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @return {Boolean} true if `value` is a valid path to a file., otherwise false.
         * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *  
		 * is.passportNumber("AF0549358", "AM"); // => True
		 * is.passportNumber("A1054935", "AM"); // => False
		 * 
		 */
		pathToFile: function (value) {
			return this._fs.existsSync(value) && this._fs.lstatSync(value).isFile();
		},
	});
};
