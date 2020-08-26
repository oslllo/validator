"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
         * hexColor
         * @description Test if `value`  is a hex color.
         *
         * @since 0.0.1
         * @param {*} value `value` to test
         * @return {Boolean} true if `value` is a hex color, false otherwise
         * @throws {TypeError} if `value` is not a `string`
         * @access public
         * @example
         *
         * is.hexColor("#ff0000ff"); // => True
         * is.hexColor("#ff"); // => False
         *
         */
        hexColor: function (value) {
            return this.validator.isHexColor(...arguments);
        },
    });
};
