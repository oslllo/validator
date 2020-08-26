"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * FQDN
         * @description Test if `value` is a fully qualified domain name (e.g. domain.com).
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @param {Object} [options = { require_tld: true, allow_underscores: false, allow_trailing_dot: false }] options object
         * @return {Boolean} true if `value` is a fully qualified domain name (e.g. domain.com), false otherwise
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.FQDN("domain.com"); // True
         * is.FQDN("256.0.0.0"); // False
         *
         * is.FQDN("example.com.", { allow_trailing_dot: true }); // True
         *
         */
        FQDN: function (value, options) {
            return this.validator.isFQDN(...arguments);
        },
    });
};
