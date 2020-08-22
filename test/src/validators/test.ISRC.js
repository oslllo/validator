"use strict";

const { is, assert } = require("../helper");

describe("is.ISRC", () => {
	it(`works`, () => {
        assert.isTrue(is.ISRC("USAT29900609"));
        assert.isFalse(is.ISRC("SRC15705223"));
	});
});
