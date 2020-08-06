"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * ISSN
         * Test if `value` is an ISSN.
         *
         * options is an object which defaults to { case_sensitive: false, require_hyphen: false }. If case_sensitive is true, ISSNs with a lowercase 'x' as the check digit are rejected.
		 *
         * @param {string} value value to test
		 * @param {object} options options object
		 * @return {Boolean} true if `value` is an ISSN, otherwise false.
		 * @api public
		 */
		ISSN: function (value, options) {
            return this.validator.isISSN(...arguments)
        }
	});
};
