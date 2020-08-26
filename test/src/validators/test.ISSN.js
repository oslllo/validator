"use strict";

const { is, assert } = require("../helper");

describe("is.ISSN", () => {
    it("works", () => {
        assert.isTrue(is.ISSN("0000-0000"));
        assert.isFalse(is.ISSN("0378-5954"));
    });
    it("works with arguments", () => {
        assert.isTrue(is.ISSN("2434-561X", { case_sensitive: true }));
        assert.isFalse(is.ISSN("2434561x", { case_sensitive: true }));
    });
});
