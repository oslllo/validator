"use strict";

const { is, assert } = require("../helper");

describe("is.identityCard", () => {
    it("works", () => {
        assert.isTrue(is.identityCard("B176944193", "zh-TW"));
        assert.isFalse(is.identityCard("X431071923", "zh-TW"));
    });
});
