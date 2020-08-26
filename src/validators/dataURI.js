"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * dataURI
         * @description Test if `value` is a data uri format.
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @return {Boolean} true if `value` is a data uri format, false otherwise
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.dataURI("data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D"); // => True
         * is.dataURI("data:,A%20brief%20invalid%20[note"); // => False
         *
         */
        dataURI: function (value) {
            return this.validator.isDataURI(...arguments);
        },
    });
};
