"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * ISBN
         * @description Test if `value` is an ISBN (version 10 or 13).
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @param {number} version version value
         * @return {Boolean} true if `value` is an ISBN, otherwise false.
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.ISBN("9783836221191", 13); // => True
         * is.ISBN("9783836221190", 13); // => False
         *
         */
        ISBN: function (value, version) {
            return this.validator.isISBN(...arguments);
        },
    });
};
