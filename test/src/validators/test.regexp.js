"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.regexp", () => {
	var data = ["/a/g", "new RegExp('a', 'g')"];
	inputs.valid(data).forEach((valid) => {
		it(`can validate that ${valid.description} is a regular expression`, () => {
			assert.isTrue(is.regexp(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can validate that ${invalid.description} is NOT a regular expression`, () => {
			assert.isFalse(is.regexp(invalid.data));
		});
	});
});