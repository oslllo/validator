"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.ISO8601", () => {
	it(`works`, () => {
		assert.isTrue(is.ISO8601("2009-12T12:34"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.ISO8601("2000-02-29", { strict: true }));
		assert.isFalse(is.ISO8601("2010-02-30", { strict: true }));
	});
});
