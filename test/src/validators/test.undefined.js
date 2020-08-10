"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.undefined", () => {
    var data = ["undefined"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is undefined`, () => {
			assert.isTrue(is.undefined(valid.data));
		});
    });
    inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT undefined`, () => {
			assert.isFalse(is.undefined(invalid.data));
		});
	});
});
