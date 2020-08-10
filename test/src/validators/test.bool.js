"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.bool", () => {
	var data = ["true", "false", "Object(true)", "Object(false)"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is a boolean`, () => {
			assert.isTrue(is.bool(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT a boolean`, () => {
			assert.isFalse(is.bool(invalid.data));
		});
	});
});
