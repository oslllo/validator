"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.postalCode", () => {
	it(`works`, () => {
        assert.isTrue(is.postalCode("39100-000", "BR"));
        assert.isFalse(is.postalCode("78908", "BR"));
	});
});
