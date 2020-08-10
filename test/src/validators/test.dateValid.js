"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.dateValid", () => {
	var data = ["new Date()"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is a valid Date`, () => {
			assert.isTrue(is.dateValid(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT a valid Date`, () => {
			assert.isFalse(is.dateValid(invalid.data));
		});
	});
});
