"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * mimeType
         * @description Test if `value` matches to a valid MIME type format.
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @return {Boolean} true if `value` matches to a valid MIME type format, otherwise false.
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.mimeType("application/json"); // => True
         * is.mimeType("application"); // => False
         *
         */
        mimeType: function (value) {
            return this.validator.isMimeType(...arguments);
        },
    });
};
