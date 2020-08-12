"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.date", () => {
	var data = ["new Date()"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is a date`, () => {
			assert.isTrue(is.date(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT a date`, () => {
			assert.isFalse(is.date(invalid.data));
		});
	});
	it(`can tell that timestamp is NOT a date`, () => {
		var timestamp = new Date().getTime();
		assert.isFalse(is.date(timestamp));
	});
	it(`can tell that Date subtype is NOT a date`, () => {
		var F = function () {};
		F.prototype = new Date();
		assert.isFalse(is.date(new F()));
	});
	it(`can validate date with format DD/MM/YY`, () => {
		assert.isTrue(is.date("15-07-02", "DD/MM/YY"));
		assert.isTrue(is.date("15/07/02", "DD/MM/YY"));
		assert.isFalse(is.date("15/7/2002", "DD/MM/YY"));
		assert.isFalse(is.date("15-7-2002", "DD/MM/YY"));
	});
});
