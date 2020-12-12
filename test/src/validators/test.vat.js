"use strict";

const { is, assert } = require("../helper");

describe("is.vat", () => {
    it("works", () => {
        assert.isTrue(is.vat("GB999 9999 00", "GB"));
        assert.isFalse(is.vat("GBHA 999", "GB"));
    });
});
