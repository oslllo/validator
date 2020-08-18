"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.halfWidth", () => {
	it(`works`, () => {
		assert.isTrue(is.halfWidth("abc123い"));
		assert.isFalse(is.halfWidth("あいうえお"));
	});
});
