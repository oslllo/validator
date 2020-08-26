"use strict";

const { is, assert } = require("../helper");

describe("is.hexColor", () => {
    it("works", () => {
        assert.isTrue(is.hexColor("#ff0000ff"));
        assert.isFalse(is.hexColor("#ff"));
    });
});
