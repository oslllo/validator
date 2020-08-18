"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.ISIN", () => {
	it(`works`, () => {
		assert.isTrue(is.ISIN("AU0000XVGZA3"));
		assert.isFalse(is.ISIN("DE000BAY0018"));
	});
});
