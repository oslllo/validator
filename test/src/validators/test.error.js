"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.error", () => {
	var data = ["Error('foo')"];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is an Error`, () => {
			assert.isTrue(is.error(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT an Error`, () => {
			assert.isFalse(is.error(invalid.data));
		});
	});
	var objWithErrorToString = {
		toString: function () {
			return "[object Error]";
		},
	};
	assert.equal(
		String(objWithErrorToString),
		Object.prototype.toString.call(new Error()),
		"object does not have Error's toString method"
	);
	it(`can tell that object with Error's toString method is NOT an error`, () => {
		assert.isFalse(is.error(objWithErrorToString));
	});
});
