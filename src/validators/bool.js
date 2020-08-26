"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * bool
         * @description Test if `value` is a boolean.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @return {Boolean} true if `value` is a boolean, false otherwise
         * @access public
         * @example
         *
         * is.bool(true); // => True
         * is.bool(1); // => False
         *
         */
        bool: function (value) {
            return this._getObjectType(value) === "[object Boolean]";
        },
    });
};
