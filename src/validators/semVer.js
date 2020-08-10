"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * semVer
		 * @description Test if `value` is a Semantic Versioning Specification (SemVer).
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value is a SemVer, otherwise false.
		 * @api public
		 */
		semVer: function (value) {
			return this.validator.isSemVer(...arguments);
		},
	});
};
