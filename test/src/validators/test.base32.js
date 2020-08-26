"use strict";

const { is, assert } = require("../helper");

describe("is.base32", () => {
    it("works", () => {
        assert.isTrue(is.base32("ZG======"));
        assert.isFalse(is.base32("12345"));
    });
});
