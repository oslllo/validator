"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.argsEmpty", () => {
	var data = ["arguments (empty)"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is an empty arguments instance`, () => {
			assert.isTrue(is.argsEmpty(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT an empty arguments instance`, () => {
			assert.isFalse(is.argsEmpty(invalid.data));
		});
	});
});
