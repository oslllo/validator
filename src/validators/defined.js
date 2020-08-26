"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * defined
         * @description Test if `value` is defined.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @return {Boolean} true if `value` is defined, false otherwise
         * @access public
         * @example
         *
         * is.defined("foobar"); // => True
         * is.defined(undefined); // => False
         *
         */
        defined: function (value) {
            return typeof value !== "undefined";
        },
    });
};
