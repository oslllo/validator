"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.defined", () => {
    var data = ["undefined"];
    inputs.invalid(data).forEach((invalid) => {
		it(`can validate that ${invalid.description} is defined`, () => {
			assert.isTrue(is.defined(invalid.data));
		});
	});
	inputs.valid(data).forEach((valid) => {
		it(`can validate that ${valid.description} is NOT defined`, () => {
			assert.isFalse(is.defined(valid.data));
		});
    });
});
