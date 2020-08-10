"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.actualNaN", () => {
	var data = ["NaN"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is NaN`, () => {
			assert.isTrue(is.actualNaN(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT NaN`, () => {
			assert.isFalse(is.actualNaN(invalid.data));
		});
	});
});
