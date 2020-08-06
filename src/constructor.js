"use strict";

const validator = require("validator");

const Validator = function () {
	this.validator = validator;
};

Validator.prototype = {
	_getObjectType: function (value) {
		return Object.prototype.toString.call(value);
	},
	_hasOwnProperty: function (obj, prop) {
		return Object.hasOwnProperty.call(obj, prop);
	},
};

module.exports = Validator;
