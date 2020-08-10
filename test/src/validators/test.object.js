"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.object", () => {
	var data = ["{}", "{ a: 1 }", "arguments (fake)"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is an object`, () => {
			assert.isTrue(is.object(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT an object`, () => {
			assert.isFalse(is.object(invalid.data));
		});
	});
});

// TODO: test symbols
