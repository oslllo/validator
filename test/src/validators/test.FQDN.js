"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.FQDN", () => {
	it(`works`, () => {
		assert.isTrue(is.FQDN("domain.com"));
	});
	it(`works with arguments`, () => {
		assert.isTrue(is.FQDN("example.com.", { allow_trailing_dot: true }));
	});
});
