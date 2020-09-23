"use strict";

/**
 * @name decimal
 * @description Test if `value` is a decimal number.
 *
 * @since 0.0.1
 * @param {*} value `value` to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @access public
 * @example
 *
 * is.decimal(1.1); // => True
 * is.decimal(123); // => False
 *
 */

module.exports = function (value) {
    /*eslint no-magic-numbers: "off"*/
    return (
        this.number(value) &&
        !this.actualNaN(value) &&
        !this.infinite(value) &&
        value % 1 !== 0
    );
};
