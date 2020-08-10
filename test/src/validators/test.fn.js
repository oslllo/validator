"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.fn", () => {
	var data = ["function () {}"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is a function`, () => {
			assert.isTrue(is.fn(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT a function`, () => {
			assert.isFalse(is.fn(invalid.data));
		});
	});
});
