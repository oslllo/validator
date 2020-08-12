"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.UUID", () => {
	it(`works`, () => {
		assert.isTrue(is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3", 3));
		assert.isFalse(is.UUID("xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3", 3));
	});
});
