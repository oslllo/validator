"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.stringBool", () => {
	it(`works`, () => {
		var data = [];
		inputs.invalid(data).forEach((invalid) => {
			it(`can validate that ${invalid.description} is not a string boolean`, () => {
				assert.isFalse(invalid.data);
			});
		});
		assert.isTrue(is.stringBool("true"));
		assert.isFalse(is.stringBool("1.0"));
	});
});
