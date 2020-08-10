"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.infinite", () => {
	var data = ["Infinity", "-Infinity"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is infinite`, () => {
			assert.isTrue(is.infinite(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT infinite`, () => {
			assert.isFalse(is.infinite(invalid.data));
		});
	});
});
