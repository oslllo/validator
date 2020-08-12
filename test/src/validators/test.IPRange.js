"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.IPRange", () => {
	it(`works`, () => {
		assert.isTrue(is.IPRange("127.0.0.1/24"));
	});
});
