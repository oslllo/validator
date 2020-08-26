"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * taxID
         * @description Test if `value` is uppercase.
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @return {Boolean} true if `value' is uppercase, otherwise false.
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.uppercase("ABC"); // => True
         * is.uppercase("abc"); // => False
         *
         */
        uppercase: function (value) {
            return this.validator.isUppercase(...arguments);
        },
    });
};
