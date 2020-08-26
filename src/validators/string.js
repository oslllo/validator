"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * string
         * @description Test if `value` is a string.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @return {Boolean} true if `value` is a string, false otherwise
         * @access public
         * @example
         *
         * is.string("abc"); // => True
         * is.string(123); // => False
         *
         */
        string: function (value) {
            return this._getObjectType(value) === "[object String]";
        },
    });
};
