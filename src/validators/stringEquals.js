"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
		 * stringEquals
         * @description Test if 'value' matches the comparison.
		 *
         * @param {String} value value to test
         * @param {String} comparison value to compare with
		 * @return {Boolean} true if 'value' matches the comparison, false otherwise
		 * @api public
		 */
        stringEquals: function (value, comparison) {
            return this.validator.equals(...arguments);
        }
    });
};
