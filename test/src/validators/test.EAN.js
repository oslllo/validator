"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.EAN", () => {
	it(`works`, () => {
		assert.isTrue(is.EAN("9421023610112"));
	});
});
