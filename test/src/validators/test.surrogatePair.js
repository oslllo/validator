"use strict";

const { is, assert } = require("../helper");

describe("is.surrogatePair", () => {
    it("works", () => {
        assert.isTrue(is.surrogatePair("𠮷野𠮷"));
        assert.isFalse(is.surrogatePair("鮪"));
    });
});
