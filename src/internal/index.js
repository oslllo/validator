"use strict";

const assertString = require("validator/lib/util/assertString");
var fs, document, DOM, JSDOM;
var window = global.window;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
const isNode =
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;
/**
 * Try to detect if node or browser build in webpack
 */
if (typeof process.env.NODE_ENV === "undefined" && isNode && !isBrowser) {
    fs = require("fs");
    JSDOM = require("jsdom").JSDOM;
    DOM = new JSDOM("<!DOCTYPE html></html>");
    window = DOM.window;
}

document = window.document;

module.exports = {
    _fs: fs,
    _window: window,
    _document: document,
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
