"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hash
		 * @description Test if `value` is a hash of type algorithm.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @param {String} algorithm one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 
		 * 'sha512', 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b']
		 * @return {Boolean} true if `value` is a hash of type algorithm, false otherwise
		 * @access public
		 * @example
		 * 
		 * is.hash("d94f3f016ae679c3008de268209132f2", "md5"); // => True
		 * is.hash("q94375dj93458w34", "md5"); // => False
		 * 
		 */
		hash: function (value, algorithm) {
			return this.validator.isHash(...arguments);
		},
	});
};
