"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.dateBefore", () => {
	it(`works`, () => {
        assert.isTrue(is.dateBefore("2010-07-02", new Date(2011, 7, 4).toString()));
        assert.isFalse(is.dateBefore('08/04/2011', new Date(2011, 7, 4).toString()));
	});
});
