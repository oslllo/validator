"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * halfWidth
         * @description Test if `value` contains any half-width chars.
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @return {Boolean} true if `value` contains any half-width chars, false otherwise
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.halfWidth("abc123い"); // => True
         * is.halfWidth("あいうえお"); // => False
         *
         */
        halfWidth: function (value) {
            return this.validator.isHalfWidth(...arguments);
        },
    });
};
