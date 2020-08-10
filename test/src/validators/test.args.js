"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.args", () => {
	var data = ["arguments", "arguments (fake)", "arguments (empty)"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is an arguments object`, () => {
			assert.isTrue(is.args(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT an arguments object`, () => {
			assert.isFalse(is.args(invalid.data));
		});
	});
});
