"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.true", () => {
	var data = ["Object(true)", "true"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is true`, () => {
			assert.isTrue(is.true(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT true`, () => {
			assert.isFalse(is.true(invalid.data));
		});
	});
});
