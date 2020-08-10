"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.array", () => {
	it(`can tell that empty sliced arguments are an array`, () => {
		(function () {
			assert.isTrue(is.array(Array.prototype.slice.call(arguments)));
		})();
	});
	var data = [
		"[]",
		"[1, 2, 3]",
		"[3, 2, 1]",
		"['a', 'b', 'c']",
		"sliced arguments",
		"sliced arguments (empty)",
	];
	inputs.valid(data).forEach((valid) => {
		it(`can tell that ${valid.description} is an array`, () => {
			assert.isTrue(is.array(valid.data));
		});
	});
	inputs.invalid(data).forEach((invalid) => {
		it(`can tell that ${invalid.description} is NOT an array`, () => {
			assert.isFalse(is.array(invalid.data));
		});
	});
});
