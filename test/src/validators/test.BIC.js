"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.BIC", () => {
	it(`works`, () => {
		assert.isTrue(is.BIC("SBICKEN1345"));
	});
});
