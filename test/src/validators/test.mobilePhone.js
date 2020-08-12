"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.mobilePhone", () => {
	it(`works`, () => {
        assert.isTrue(is.mobilePhone("0821231234", 'en-ZA'));
        assert.isFalse(is.mobilePhone("08212312345", 'en-ZA'));
	});
});
