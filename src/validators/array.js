"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * array
         * @description Test if `value` is an array.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @return {Boolean} true if `value` is an array, false otherwise
         * @access public
         * @example
         *
         * is.array([1, 2, 3]); // => True
         * is.array(true); // => False
         *
         */

        array: function (value) {
            return this._getObjectType(value) === "[object Array]";
        },
    });
};
