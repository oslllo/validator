"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * dateBefore
         * @description Test if `value` is a date that's before the specified date.
         *
         * @since 0.0.1
         * @param {String} value starting date
         * @param {String} date before date
         * @return {Boolean} true if `value` is a date that's before the specified date., false otherwise
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.dateBefore("2010-07-02", new Date(2011, 7, 4).toString()); // True
         * is.dateBefore('08/04/2011', new Date(2011, 7, 4).toString()); // False
         *
         */
        dateBefore: function (value, date) {
            return this.validator.isBefore(...arguments);
        },
    });
};
