"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.ethereumAddress", () => {
	it(`works`, () => {
		assert.isTrue(
			is.ethereumAddress("0x0000000000000000000000000000000000000001")
		);
		assert.isFalse(is.ethereumAddress("1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU"));
	});
});
