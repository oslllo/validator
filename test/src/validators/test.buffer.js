"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.buffer", () => {
	var data = ["Buffer.from('123')"];
	inputs.valid(data).forEach((valid) => {
		it(`can validate that ${valid.description} is a buffer`, () => {
			assert.isTrue(is.buffer(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can validate that ${invalid.description} is NOT a buffer`, () => {
			assert.isFalse(is.buffer(invalid.data));
		});
	});
});
