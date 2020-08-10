"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
		 * stringContains
         * @description Test if 'value' contains the seed.
		 *
         * @param {String} value value to test
         * @param {String} seed seed value
         * @param {Object} options defaults to { ignoreCase: false}. ignoreCase specified whether the case of the substring be same or not.
		 * @return {Boolean} true if 'value' contains the seed, false otherwise
		 * @api public
		 */
        stringContains: function (value, seed, options) {
            return this.validator.contains(...arguments);
        }
    });
};
