"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * semVer
         * @description Test if `value` is a Semantic Versioning Specification (SemVer).
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @return {Boolean} true if `value is a SemVer, otherwise false.
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.semVer("0.0.4"); // => True
         * is.semVer("beta"); // => False
         *
         */
        semVer: function (value) {
            return this.validator.isSemVer(...arguments);
        },
    });
};
