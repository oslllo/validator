"use strict";

const { is, assert } = require("../helper");

describe("is.semVer", () => {
	it(`works`, () => {
		assert.isTrue(is.semVer("0.0.4"));
		assert.isFalse(is.semVer("beta"));
	});
});
