"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
        * type
        * @description Test if `value` is a type of `type`.
        *
        * @param {*} value value to test
        * @param {String} type type
        * @return {Boolean} true if `value` is a type of `type`, false otherwise
        * @api public
        */
        type: function (value, type) {
            return typeof value === type;
        }
    });
};
