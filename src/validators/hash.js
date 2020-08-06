"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * hash
		 * Test if `value` is a hash of type algorithm.
		 *
		 * Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b']
		 *
		 * @param {string} value value to test
		 * @param {string} algorithm algorithm to check value with.
		 * @return {Boolean} true if `value` is a hash of type algorithm, false otherwise
		 * @api public
		 */
		hash: function (value, algorithm) {
			return this.validator.isHash(...arguments);
		},
	});
};
