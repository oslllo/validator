"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.mimeType", () => {
	it(`works`, () => {
		assert.isTrue(is.mimeType("application/json"));
		assert.isFalse(is.mimeType("application"));
	});
});
