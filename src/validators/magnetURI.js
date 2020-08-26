"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * magnetURI
         * @description Test if `value` is a magnet uri format.
         *
         * @since 0.0.1
         * @param {String} value `value` to test
         * @return {Boolean} true if `value` is a magnet uri format, otherwise false.
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.magnetURI("magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce"); // => True
         * is.magnetURI(":?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce") // => False
         *
         */
        magnetURI: function (value) {
            return this.validator.isMagnetURI(...arguments);
        },
    });
};
