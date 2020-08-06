"use strict";

module.exports = function (v) {
    Object.assign(v.prototype, {
        /**
        * type
        * Test if `value` is a type of `type`.
        *
        * @param {*} value value to test
        * @param {String} type type
        * @return {Boolean} true if `value` is a type of `type`, false otherwise
        * @api public
        */
        type: function (value) {
            return this._getObjectType(value) === '[object String]';
        }
    });
};
