"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * UUID
		 * Test if `value` is a UUID (version 3, 4 or 5).
		 *
         * @param {String} value value to test
         * @param {Number} version which version to use
		 * @return {Boolean} true if `value' is UUID, otherwise false.
		 * @api public
		 */
		UUID: function (value, version) {
            return this.validator.isUUID(...arguments);
        }
	});
};
