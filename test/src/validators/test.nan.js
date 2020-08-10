"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.nan", () => {
	var data = [
		"Object(42)",
		"0",
        "1",
        "2",
		"1.1",
		"0 / 1",
		"0 / -1",
		"Infinity",
		"-Infinity",
	];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is a number`, () => {
			assert.isFalse(is.nan(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT a number`, () => {
			assert.isTrue(is.nan(invalid.data));
		});
	});
});
