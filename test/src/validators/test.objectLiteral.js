"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.objectLiteral", () => {
	var data = ["{}", "{ a: 1 }", "arguments (fake)"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is an object literal`, () => {
			assert.isTrue(is.objectLiteral(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT an object literal`, () => {
			assert.isFalse(is.objectLiteral(invalid.data));
		});
	});
});

// TODO: test all enviroments
