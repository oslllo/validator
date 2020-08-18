"use strict";

const DOM = require("./dom");
const validator = require("validator");

const Validator = function (v) {
	this.validator = validator;
	this._window = DOM.window;
	this._document = DOM.document;
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

Validator.JSDOM = DOM.JSDOM;

module.exports = Validator;
