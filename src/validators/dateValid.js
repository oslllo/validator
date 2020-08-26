"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * dateValid
         * @description Test if `value` is a valid date.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @returns {Boolean} true if `value` is a valid date, false otherwise
         * @access public
         * @example
         *
         * is.dateValid(new Date()); // => True
         * is.dateValid({}); // => False
         *
         */
        dateValid: function (value) {
            return this.date(value) && !isNaN(Number(value));
        },
    });
};
