"use strict";

const validator = require("validator");

const Validator = function () {
	this.validator = validator;
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

module.exports = Validator;
