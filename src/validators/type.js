"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * type
         * @description Test if `value` is a type of `type`.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @param {String} type type ["boolean", "number", "object", "string", "undefined"]
         * @return {Boolean} true if `value` is a type of `type`, false otherwise
         * @access public
         * @example
         *
         * is.type(true, "boolean"); // => True
         * is.type(1, "boolean"); // => False
         *
         */
        type: function (value, type) {
            return typeof value === type;
        }
    });
};
