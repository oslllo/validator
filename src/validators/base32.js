"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * base32
         * @description Test if `value` is base32 encoded.
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @return {Boolean} true if `value` contains ASCII chars only, false otherwise
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.base32("ZG======") // => True
         * is.base32("12345") // => False
         *
         */
        base32: function (value) {
            return this.validator.isBase32(...arguments);
        },
    });
};
