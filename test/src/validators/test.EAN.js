"use strict";

const { is, assert } = require("../helper");

describe("is.EAN", () => {
    it("works", () => {
        assert.isTrue(is.EAN("9421023610112"));
        assert.isFalse(is.EAN("079777681629"));
    });
});
