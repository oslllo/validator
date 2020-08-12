"use strict";

const { is, assert, inputs } = require("../helper");

describe("is.locale", () => {
	it(`works`, () => {
        assert.isTrue(is.locale("uz_Latn_UZ"));
        assert.isFalse(is.locale("lo_POP"));
	});
});