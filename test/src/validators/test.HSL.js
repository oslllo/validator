"use strict";

const { is, assert } = require("../helper");

describe("is.HSL", () => {
    it("works", () => {
        assert.isTrue(is.HSL("hsl(360,0000000000100%,000000100%)"));
        assert.isFalse(is.HSL("hsl(0260, 100 %, 100%)"));
    });
});
