"use strict";

const main = require("./main");
const validator = require("validator");

const Validator = function (v) {
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
};

Validator.JSDOM = main.JSDOM;

module.exports = Validator;
