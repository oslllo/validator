"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.dateAfter", () => {
	it(`works`, () => {
		assert.isTrue(is.dateAfter("2011-08-04", "2011-08-03"));
	});
});