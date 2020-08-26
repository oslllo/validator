"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * number
         * @description Test if `value` is a number.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @return {Boolean} true if `value` is a number, false otherwise
         * @access public
         * @example
         *
         * is.number(123); // => True
         * is.number("123"); // => False
         *
         */
        number: function (value) {
            return this._getObjectType(value) === "[object Number]";
        },
    });
};
