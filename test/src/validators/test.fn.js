"use strict";

const { is, assert, inputs, DOM } = require("../helper");

describe("is.fn", () => {
	var data = ["function () {}"];
	inputs.valid(data).forEach((valid) => {
		it(`can validate that ${valid.description} is a function`, () => {
			assert.isTrue(is.fn(valid.data));
		});
	});
	it(`can validate that (function) window.alert is a function`, () => {
		assert.isTrue(is.fn(DOM.window.alert));
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can validate that ${invalid.description} is NOT a function`, () => {
			assert.isFalse(is.fn(invalid.data));
		});
	});
});
