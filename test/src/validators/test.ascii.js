"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.ascii", () => {
	it(`works`, () => {
		assert.isTrue(is.ascii("0987654321"));
	});
});
