"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.email", () => {
	it(`works`, () => {
		assert.isTrue(is.email("foo@bar.com"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(
			is.email("foobar@gmail.com", { domain_specific_validation: true })
		);
		assert.isFalse(
			is.email("test@gmail.com", { domain_specific_validation: true })
		);
	});
});
