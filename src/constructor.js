"use strict";

const main = require("./main");
const validator = require("validator");
const assertString = require("validator/lib/util/assertString");

const Validator = function () {
    this._fs = main.fs;
    this.validator = validator;
    this._window = main.window;
    this._document = main.document;
};

Validator.prototype = {
    /**
     * _getObjectType
     *
     * @param {*} value
     * @return {String}
     * @api private
     */
    _getObjectType: function (value) {
        return Object.prototype.toString.call(value);
    },
    /**
     * _hasOwnProperty
     *
     * @param {Object} obj
     * @param {String} prop
     * @return {Boolean}
     * @api private
     */
    _hasOwnProperty: function (obj, prop) {
        return Object.hasOwnProperty.call(obj, prop);
    },
    /**
     * _assertString
     *
     * @param {*} value `value` to assert
     * @throws {TypeError} if value is not a string
     * @api private
     */
    _assertString: function (value) {
        assertString(value);
    },
};

Validator.JSDOM = main.JSDOM;

module.exports = Validator;
