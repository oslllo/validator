"use strict";

const { is, assert } = require("../helper");

describe("is.stringEquals", () => {
    it("works", () => {
        assert.isTrue(is.stringEquals("abc", "abc"));
        assert.isFalse(is.stringEquals("abc", "Abc"));
    });
});
