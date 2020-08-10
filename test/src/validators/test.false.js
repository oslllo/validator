"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.false", () => {
	var data = ["Object(false)", "false"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is false`, () => {
			assert.isTrue(is.false(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT false`, () => {
			assert.isFalse(is.false(invalid.data));
		});
	});
});
