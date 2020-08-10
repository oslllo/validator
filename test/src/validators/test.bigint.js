"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.bigint", () => {
	var data = ["Function('return 42n')()", "BigInt(42)"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is a bigint`, () => {
			assert.isTrue(is.bigint(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT a bigint`, () => {
			assert.isFalse(is.bigint(invalid.data));
		});
	});
});
