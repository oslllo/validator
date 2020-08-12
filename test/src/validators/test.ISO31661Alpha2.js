"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.ISO31661Alpha2", () => {
	it(`works`, () => {
        assert.isTrue(is.ISO31661Alpha2("FR"));
        assert.isFalse(is.ISO31661Alpha2("FRA"));
	});
});
