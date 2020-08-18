"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.creditCard", () => {
	it(`works`, () => {
		assert.isTrue(is.creditCard("375556917985515"));
		assert.isFalse(is.creditCard("5398228707871528"));
	});
});
